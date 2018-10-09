(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
    window.Buffer = require('buffer').Buffer;
    window.sdp = require('./sdp.js');
    
    },{"./sdp.js":16,"buffer":12}],2:[function(require,module,exports){
    class SourceDemo {
        constructor() {
            this.header = undefined;
            this.messages = undefined;
            this.game = undefined;
        }
        detectGame(sourceGame) {
            this.game = sourceGame.gameList.find(game => game.directory == this.header.gameDirectory);
            if (this.game != undefined) {
                this.game.source = sourceGame;
            }
            return this;
        }
        intervalPerTick() {
            if (this.header.playbackTicks == 0) {
                if (this.game != undefined) {
                    return 1 / this.game.tickrate;
                }
                throw new Error('Cannot find ipt of null tick demo.');
            }
            return this.header.playbackTime / this.header.playbackTicks;
        }
        tickrate() {
            if (this.header.playbackTime == 0) {
                if (this.game != undefined) {
                    return this.game.tickrate;
                }
                throw new Error('Cannot find tickrate of null tick demo.');
            }
            return this.header.playbackTicks / this.header.playbackTime;
        }
        adjustTicks() {
            if (this.messages.length == 0) {
                throw new Error('Cannot adjust ticks without parsed messages.');
            }
    
            let synced = false;
            let last = 0;
            for (let message of this.messages) {
                if (message.type == 0x03) {
                    synced = true;
                }
    
                if (!synced) {
                    message.tick = 0;
                } else if (message.tick < 0) {
                    message.tick = last;
                }
                last = message.tick;
            }
    
            return this;
        }
        adjustRange(endTick = 0, startTick = 0) {
            if (this.messages.length == 0) {
                throw new Error('Cannot adjust range without parsed messages.');
            }
    
            if (endTick < 1) {
                endTick = this.messages[this.messages.length - 1].tick;
            }
    
            let delta = endTick - startTick;
            if (delta < 0) {
                throw new Error('Start tick is greater than end tick.');
            }
    
            let ipt = this.intervalPerTick();
            this.header.playbackTicks = delta;
            this.header.playbackTime = ipt * delta;
    
            return this;
        }
        adjust(splitScreenIndex = 0) {
            this.adjustTicks();
            this.adjustRange();
            return (this.game != undefined)
                ? this.game.source.adjustByRules(this, splitScreenIndex)
                : this;
        }
    }
    
    module.exports = { SourceDemo };
    
    },{}],3:[function(require,module,exports){
    var SourceGames = [
        require('./games/portal.js'),
        require('./games/portal2.js'),
        require('./games/mel.js'),
        require('./games/tag.js')
    ];
    
    class SourceGame {
        constructor() {
            this.gameList = SourceGames;
        }
        static default() {
            return new SourceGame();
        }
        withGameList(gameList) {
            this.gameList = gameList;
            return this;
        }
        adjustByRules(demo, splitScreenIndex = 0) {
            if (demo.game != undefined) {
                let gameInfo = (() => {
                    let map = new Map();
    
                    let packets = demo.messages.filter(msg => msg.type == 0x02);
                    let commands = demo.messages.filter(msg => msg.type == 0x04);
    
                    packets.forEach(p => map.set(p.tick, {}));
                    commands.forEach(p => map.set(p.tick, {}));
    
                    let oldPosition = { x: 0, y: 0, z: 0 };
                    let oldCommands = [];
    
                    for (let [tick, info] of map) {
                        let packet = packets.find(p => p.tick == tick);
                        if (packet != undefined) {
                            let newPosition = packet.message.packetInfo[splitScreenIndex].viewOrigin[0];
                            if (newPosition != undefined) {
                                info.position = {
                                    previous: oldPosition,
                                    current: oldPosition = newPosition
                                };
                            }
                        }
    
                        let newCommands = commands.filter(c => c.tick == tick).map(c => c.message.command);
                        if (newCommands.length != 0) {
                            info.commands = {
                                previous: oldCommands,
                                current: oldCommands = newCommands
                            };
                        }
                    }
    
                    return map;
                })();
    
                let checkRules = (rules) => {
                    if (rules.length == 0) {
                        return undefined;
                    }
    
                    let matches = [];
                    for (let [tick, info] of gameInfo) {
                        for (let rule of rules) {
                            if (rule.callback(info.position, info.commands) == true) {
                                matches.push({ rule: rule, tick: tick });
                            }
                        }
                    }
    
                    if (matches.length > 0) {
                        if (matches.length == 1) {
                            return matches[0].tick + matches[0].rule.offset;
                        }
    
                        let isStart = matches[0].rule.type == 'start';
                        let matchTick = (isStart)
                            ? matches.map(m => m.tick).reduce((a, b) => Math.max(a, b))
                            : matches.map(m => m.tick).reduce((a, b) => Math.min(a, b));
    
                        matches = matches.filter(m => m.tick == matchTick);
                        if (matches.length == 1) {
                            return matches[0].tick + matches[0].rule.offset;
                        }
    
                        let matchOffset = (isStart)
                            ? matches.map(m => m.rule.offset).reduce((a, b) => Math.min(a, b))
                            : matches.map(m => m.rule.offset).reduce((a, b) => Math.max(a, b));
    
                        matches = matches.filter(m => m.rule.offset == matchOffset);
                        if (matches.length == 1) {
                            return matches[0].tick + matches[0].rule.offset;
                        }
    
                        throw new Error(`Multiple adjustment matches: ${JSON.stringify(matches)}`);
                    }
    
                    return undefined;
                };
    
                let getRules = (type) => {
                    let candidates = demo.game.rules.filter(rule => rule.type == type);
    
                    let rules = candidates.filter(rule => {
                        if (Array.isArray(rule.map)) {
                            return rule.map.includes(demo.header.mapName);
                        }
                        return rule.map == demo.header.mapName;
                    });
    
                    if (rules.length == 0) {
                        rules = candidates.filter(rule => rule.map == undefined);
                    }
    
                    return rules;
                };
    
                let startTick = checkRules(getRules('start'));
                let endTick = checkRules(getRules('end'));
    
                if (startTick != undefined && endTick != undefined) {
                    return demo.adjustRange(endTick, startTick);
                }
                if (startTick != undefined) {
                    return demo.adjustRange(0, startTick);
                }
                if (endTick != undefined) {
                    return demo.adjustRange(endTick, 0);
                }
            }
    
            return demo;
        }
    }
    
    module.exports = { SourceGames, SourceGame };
    
    },{"./games/mel.js":4,"./games/portal.js":5,"./games/portal2.js":6,"./games/tag.js":7}],4:[function(require,module,exports){
    var PortalStoriesMel = {
        directory: 'portal_stories',
        tickrate: 60,
        rules: [
            {
                map: [
                    'sp_a1_tramride',
                    'st_a1_tramride'
                ],
                offset: 0,
                type: 'start',
                callback: (pos, _) => {
                    if (pos != undefined) {
                        let startPos = { x: -4592.00, y: -4475.4052734375, z: 108.683975219727 };
                        return pos.previous.x == startPos.x
                            && pos.previous.y == startPos.y
                            && pos.previous.z == startPos.z
                            && pos.current.x != startPos.x
                            && pos.current.y != startPos.y
                            && pos.current.z != startPos.z;
                    }
                    return false;
                }
            },
            {
                map: [
                    'sp_a4_finale',
                    'st_a4_finale'
                ],
                offset: 0,
                type: 'end',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        let outro = 'playvideo_exitcommand_nointerrupt aegis_interior.bik end_movie movie_aegis_interior';
                        return cmds.current.includes(outro);
                    }
                    return false;
                }
            }
        ]
    };
    
    module.exports = PortalStoriesMel;
    
    },{}],5:[function(require,module,exports){
    var Portal = {
        directory: 'portal',
        tickrate: 1 / 0.015,
        rules: [
            {
                map: 'testchmb_a_00',
                offset: 1,
                type: 'start',
                callback: (pos, _) => {
                    if (pos != undefined) {
                        let startPos = { x: -544, y: -368.75, z: 160 };
                        return pos.current.x == startPos.x
                            && pos.current.y == startPos.y
                            && pos.current.z == startPos.z;
                    }
                    return false;
                }
            },
            {
                map: 'escape_02',
                offset: 1,
                type: 'end',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        return cmds.current.includes('startneurotoxins 99999');
                    }
                    return false;
                }
            }
        ]
    };
    
    module.exports = Portal;
    
    },{}],6:[function(require,module,exports){
    var Portal2 = {
        directory: 'portal2',
        tickrate: 60,
        rules: [
            {
                map: 'sp_a1_intro1',
                offset: 1,
                type: 'start',
                callback: (pos, _) => {
                    if (pos != undefined) {
                        let startPos = { x: -8709.20, y: 1690.07, z: 28.00 };
                        let tolerance = { x: 0.02, y: 0.02, z: 0.05 };
                        return !(Math.abs(pos.current.x - startPos.x) > tolerance.x)
                            && !(Math.abs(pos.current.y - startPos.y) > tolerance.y)
                            && !(Math.abs(pos.current.z - startPos.z) > tolerance.z);
                    }
                    return false;
                }
            },
            {
                map: 'e1912',
                offset: -2,
                type: 'start',
                callback: (pos, _) => {
                    if (pos != undefined) {
                        let startPos = { x: -655.748779296875, y: -918.37353515625, z: -4.96875 };
                        return pos.previous.x == startPos.x
                            && pos.previous.y == startPos.y
                            && pos.previous.z == startPos.z
                            && pos.current.x != startPos.x
                            && pos.current.y != startPos.y
                            && pos.current.z != startPos.z;
                    }
                    return false;
                }
            },
            {
                map: undefined,
                offset: 0,
                type: 'start',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        return cmds.previous.find(cmd => cmd.startsWith('dsp_player')) != undefined
                            && cmds.current.includes('ss_force_primary_fullscreen 0');
                    }
                    return false;
                }
            },
            {
                map: 'mp_coop_start',
                offset: 0,
                type: 'start',
                callback: (pos, _) => {
                    if (pos != undefined) {
                        let startPosBlue = { x: -9896, y: -4400, z: 3048 };
                        let startPosOrange = { x: -11168, y: -4384, z: 3040.03125 };
                        return (pos.current.x == startPosBlue.x
                            && pos.current.y == startPosBlue.y
                            && pos.current.z == startPosBlue.z)
                            || (pos.current.x == startPosOrange.x
                                && pos.current.y == startPosOrange.y
                                && pos.current.z == startPosOrange.z);
                    }
                    return false;
                }
            },
            {
                map: 'sp_a4_finale4',
                offset: -852,
                type: 'end',
                callback: (pos, _) => {
                    if (pos != undefined) {
                        let endPos = { x: 54.1, y: 159.2, z: -201.4 };
                        let a = (pos.current.x - endPos.x) ** 2;
                        let b = (pos.current.y - endPos.y) ** 2;
                        let c = 50 ** 2;
                        return a + b < c
                            && pos.current.z < endPos.z;
                    }
                    return false;
                }
            },
            {
                map: undefined,
                offset: 0,
                type: 'end',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        let outroBlue = 'playvideo_end_level_transition coop_bluebot_load 2';
                        let outroOrange = 'playvideo_end_level_transition coop_orangebot_load 2';
                        return cmds.current.find(cmd => cmd.startsWith(outroBlue) || cmd.startsWith(outroOrange))
                            != undefined;
                    }
                    return false;
                }
            },
            {
                map: 'mp_coop_paint_longjump_intro',
                offset: 0,
                type: 'end',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        let outro = 'playvideo_exitcommand_nointerrupt coop_outro end_movie vault-movie_outro';
                        return cmds.current.includes(outro);
                    }
                    return false;
                }
            },
            {
                map: 'mp_coop_paint_crazy_box',
                offset: 0,
                type: 'end',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        let outro = 'playvideo_exitcommand_nointerrupt dlc1_endmovie end_movie movie_outro';
                        return cmds.current.includes(outro);
                    }
                    return false;
                }
            }
        ]
    };
    
    module.exports = Portal2;
    
    },{}],7:[function(require,module,exports){
    var ApertureTag = {
        directory: 'aperturetag',
        tickrate: 60,
        rules: [
            {
                map: 'gg_intro_wakeup',
                offset: 0,
                type: 'start',
                callback: (pos, _) => {
                    if (pos != undefined) {
                        let startPos = { x: -723.00, y: -2481.00, z: 17.00 };
                        return pos.previous.x == startPos.x
                            && pos.previous.y == startPos.y
                            && pos.previous.z == startPos.z
                            && pos.current.x != startPos.x
                            && pos.current.y != startPos.y
                            && pos.current.z != startPos.z;
                    }
                    return false;
                }
            },
            {
                map: 'gg_stage_theend',
                offset: 0,
                type: 'end',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        let outro = 'playvideo_exitcommand_nointerrupt at_credits end_movie credits_video';
                        return cmds.current.includes(outro);
                    }
                    return false;
                }
            },
            {
                map: undefined,
                offset: 0,
                type: 'start',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        return cmds.previous.find(cmd => cmd.startsWith('dsp_player')) != undefined
                            && cmds.current.includes('ss_force_primary_fullscreen 0');
                    }
                    return false;
                }
            },
            {
                map: undefined,
                offset: 0,
                type: 'end',
                callback: (_, cmds) => {
                    if (cmds != undefined) {
                        let outroBlue = 'playvideo_end_level_transition coop_bluebot_load 2';
                        let outroOrange = 'playvideo_end_level_transition coop_orangebot_load 2';
                        return cmds.current.find(cmd => cmd.startsWith(outroBlue) || cmd.startsWith(outroOrange))
                            != undefined;
                    }
                    return false;
                }
            }
        ]
    };
    
    module.exports = ApertureTag;
    
    },{}],8:[function(require,module,exports){
    'use strict'
    
    exports.byteLength = byteLength
    exports.toByteArray = toByteArray
    exports.fromByteArray = fromByteArray
    
    var lookup = []
    var revLookup = []
    var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array
    
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    for (var i = 0, len = code.length; i < len; ++i) {
      lookup[i] = code[i]
      revLookup[code.charCodeAt(i)] = i
    }
    
    // Support decoding URL-safe base64 strings, as Node.js does.
    // See: https://en.wikipedia.org/wiki/Base64#URL_applications
    revLookup['-'.charCodeAt(0)] = 62
    revLookup['_'.charCodeAt(0)] = 63
    
    function getLens (b64) {
      var len = b64.length
    
      if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4')
      }
    
      // Trim off extra bytes after placeholder bytes are found
      // See: https://github.com/beatgammit/base64-js/issues/42
      var validLen = b64.indexOf('=')
      if (validLen === -1) validLen = len
    
      var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4)
    
      return [validLen, placeHoldersLen]
    }
    
    // base64 is 4/3 + up to two characters of the original data
    function byteLength (b64) {
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }
    
    function _byteLength (b64, validLen, placeHoldersLen) {
      return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
    }
    
    function toByteArray (b64) {
      var tmp
      var lens = getLens(b64)
      var validLen = lens[0]
      var placeHoldersLen = lens[1]
    
      var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))
    
      var curByte = 0
    
      // if there are placeholders, only get up to the last complete 4 chars
      var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen
    
      for (var i = 0; i < len; i += 4) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 18) |
          (revLookup[b64.charCodeAt(i + 1)] << 12) |
          (revLookup[b64.charCodeAt(i + 2)] << 6) |
          revLookup[b64.charCodeAt(i + 3)]
        arr[curByte++] = (tmp >> 16) & 0xFF
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }
    
      if (placeHoldersLen === 2) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 2) |
          (revLookup[b64.charCodeAt(i + 1)] >> 4)
        arr[curByte++] = tmp & 0xFF
      }
    
      if (placeHoldersLen === 1) {
        tmp =
          (revLookup[b64.charCodeAt(i)] << 10) |
          (revLookup[b64.charCodeAt(i + 1)] << 4) |
          (revLookup[b64.charCodeAt(i + 2)] >> 2)
        arr[curByte++] = (tmp >> 8) & 0xFF
        arr[curByte++] = tmp & 0xFF
      }
    
      return arr
    }
    
    function tripletToBase64 (num) {
      return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F]
    }
    
    function encodeChunk (uint8, start, end) {
      var tmp
      var output = []
      for (var i = start; i < end; i += 3) {
        tmp =
          ((uint8[i] << 16) & 0xFF0000) +
          ((uint8[i + 1] << 8) & 0xFF00) +
          (uint8[i + 2] & 0xFF)
        output.push(tripletToBase64(tmp))
      }
      return output.join('')
    }
    
    function fromByteArray (uint8) {
      var tmp
      var len = uint8.length
      var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
      var parts = []
      var maxChunkLength = 16383 // must be multiple of 3
    
      // go through the array every three bytes, we'll deal with trailing stuff later
      for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(
          uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
        ))
      }
    
      // pad the end with zeros, but make sure to not forget the extra bytes
      if (extraBytes === 1) {
        tmp = uint8[len - 1]
        parts.push(
          lookup[tmp >> 2] +
          lookup[(tmp << 4) & 0x3F] +
          '=='
        )
      } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1]
        parts.push(
          lookup[tmp >> 10] +
          lookup[(tmp >> 4) & 0x3F] +
          lookup[(tmp << 2) & 0x3F] +
          '='
        )
      }
    
      return parts.join('')
    }
    
    },{}],9:[function(require,module,exports){
    //========================================================================================
    // Globals
    //========================================================================================
    var vm = require("vm");
    
    var Context = require("./context").Context;
    
    var PRIMITIVE_TYPES = {
      UInt8: 1,
      UInt16LE: 2,
      UInt16BE: 2,
      UInt32LE: 4,
      UInt32BE: 4,
      Int8: 1,
      Int16LE: 2,
      Int16BE: 2,
      Int32LE: 4,
      Int32BE: 4,
      FloatLE: 4,
      FloatBE: 4,
      DoubleLE: 8,
      DoubleBE: 8
    };
    
    var SPECIAL_TYPES = {
      String: null,
      Buffer: null,
      Array: null,
      Skip: null,
      Choice: null,
      Nest: null,
      Bit: null
    };
    
    var aliasRegistry = {};
    var FUNCTION_PREFIX = "___parser_";
    
    var BIT_RANGE = [];
    (function() {
      var i;
      for (i = 1; i <= 32; i++) {
        BIT_RANGE.push(i);
      }
    })();
    
    // Converts Parser's method names to internal type names
    var NAME_MAP = {};
    Object.keys(PRIMITIVE_TYPES)
      .concat(Object.keys(SPECIAL_TYPES))
      .forEach(function(type) {
        NAME_MAP[type.toLowerCase()] = type;
      });
    
    //========================================================================================
    // class Parser
    //========================================================================================
    
    //----------------------------------------------------------------------------------------
    // constructor
    //----------------------------------------------------------------------------------------
    
    var Parser = function() {
      this.varName = "";
      this.type = "";
      this.options = {};
      this.next = null;
      this.head = null;
      this.compiled = null;
      this.endian = "be";
      this.constructorFn = null;
      this.alias = null;
    };
    
    //----------------------------------------------------------------------------------------
    // public methods
    //----------------------------------------------------------------------------------------
    
    Parser.start = function() {
      return new Parser();
    };
    
    Object.keys(PRIMITIVE_TYPES).forEach(function(type) {
      Parser.prototype[type.toLowerCase()] = function(varName, options) {
        return this.setNextParser(type.toLowerCase(), varName, options);
      };
    
      var typeWithoutEndian = type.replace(/BE|LE/, "").toLowerCase();
      if (!(typeWithoutEndian in Parser.prototype)) {
        Parser.prototype[typeWithoutEndian] = function(varName, options) {
          return this[typeWithoutEndian + this.endian](varName, options);
        };
      }
    });
    
    BIT_RANGE.forEach(function(i) {
      Parser.prototype["bit" + i.toString()] = function(varName, options) {
        if (!options) {
          options = {};
        }
        options.length = i;
        return this.setNextParser("bit", varName, options);
      };
    });
    
    Parser.prototype.namely = function(alias) {
      aliasRegistry[alias] = this;
      this.alias = alias;
      return this;
    };
    
    Parser.prototype.skip = function(length, options) {
      if (options && options.assert) {
        throw new Error("assert option on skip is not allowed.");
      }
    
      return this.setNextParser("skip", "", { length: length });
    };
    
    Parser.prototype.string = function(varName, options) {
      if (!options.zeroTerminated && !options.length && !options.greedy) {
        throw new Error(
          "Neither length, zeroTerminated, nor greedy is defined for string."
        );
      }
      if ((options.zeroTerminated || options.length) && options.greedy) {
        throw new Error(
          "greedy is mutually exclusive with length and zeroTerminated for string."
        );
      }
      if (options.stripNull && !(options.length || options.greedy)) {
        throw new Error(
          "Length or greedy must be defined if stripNull is defined."
        );
      }
      options.encoding = options.encoding || "utf8";
    
      return this.setNextParser("string", varName, options);
    };
    
    Parser.prototype.buffer = function(varName, options) {
      if (!options.length && !options.readUntil) {
        throw new Error("Length nor readUntil is defined in buffer parser");
      }
    
      return this.setNextParser("buffer", varName, options);
    };
    
    Parser.prototype.array = function(varName, options) {
      if (!options.readUntil && !options.length && !options.lengthInBytes) {
        throw new Error("Length option of array is not defined.");
      }
      if (!options.type) {
        throw new Error("Type option of array is not defined.");
      }
      if (
        typeof options.type === "string" &&
        !aliasRegistry[options.type] &&
        Object.keys(PRIMITIVE_TYPES).indexOf(NAME_MAP[options.type]) < 0
      ) {
        throw new Error(
          'Specified primitive type "' + options.type + '" is not supported.'
        );
      }
    
      return this.setNextParser("array", varName, options);
    };
    
    Parser.prototype.choice = function(varName, options) {
      if (arguments.length == 1 && typeof varName === "object") {
        options = varName;
        varName = null;
      }
    
      if (!options.tag) {
        throw new Error("Tag option of array is not defined.");
      }
      if (!options.choices) {
        throw new Error("Choices option of array is not defined.");
      }
    
      Object.keys(options.choices).forEach(function(key) {
        if (isNaN(parseInt(key, 10))) {
          throw new Error("Key of choices must be a number.");
        }
        if (!options.choices[key]) {
          throw new Error(
            "Choice Case " + key + " of " + varName + " is not valid."
          );
        }
    
        if (
          typeof options.choices[key] === "string" &&
          !aliasRegistry[options.choices[key]] &&
          Object.keys(PRIMITIVE_TYPES).indexOf(NAME_MAP[options.choices[key]]) < 0
        ) {
          throw new Error(
            'Specified primitive type "' +
              options.choices[key] +
              '" is not supported.'
          );
        }
      }, this);
    
      return this.setNextParser("choice", varName, options);
    };
    
    Parser.prototype.nest = function(varName, options) {
      if (arguments.length == 1 && typeof varName === "object") {
        options = varName;
        varName = null;
      }
    
      if (!options.type) {
        throw new Error("Type option of nest is not defined.");
      }
      if (!(options.type instanceof Parser) && !aliasRegistry[options.type]) {
        throw new Error("Type option of nest must be a Parser object.");
      }
      if (!(options.type instanceof Parser) && !varName) {
        throw new Error(
          "options.type must be a object if variable name is omitted."
        );
      }
    
      return this.setNextParser("nest", varName, options);
    };
    
    Parser.prototype.endianess = function(endianess) {
      switch (endianess.toLowerCase()) {
        case "little":
          this.endian = "le";
          break;
        case "big":
          this.endian = "be";
          break;
        default:
          throw new Error("Invalid endianess: " + endianess);
      }
    
      return this;
    };
    
    Parser.prototype.create = function(constructorFn) {
      if (!(constructorFn instanceof Function)) {
        throw new Error("Constructor must be a Function object.");
      }
    
      this.constructorFn = constructorFn;
    
      return this;
    };
    
    Parser.prototype.getCode = function() {
      var ctx = new Context();
    
      ctx.pushCode("if (!Buffer.isBuffer(buffer)) {");
      ctx.generateError('"argument buffer is not a Buffer object"');
      ctx.pushCode("}");
    
      if (!this.alias) {
        this.addRawCode(ctx);
      } else {
        this.addAliasedCode(ctx);
      }
    
      if (this.alias) {
        ctx.pushCode("return {0}(0).result;", FUNCTION_PREFIX + this.alias);
      } else {
        ctx.pushCode("return vars;");
      }
    
      return ctx.code;
    };
    
    Parser.prototype.addRawCode = function(ctx) {
      ctx.pushCode("var offset = 0;");
    
      if (this.constructorFn) {
        ctx.pushCode("var vars = new constructorFn();");
      } else {
        ctx.pushCode("var vars = {};");
      }
    
      this.generate(ctx);
    
      this.resolveReferences(ctx);
    
      ctx.pushCode("return vars;");
    };
    
    Parser.prototype.addAliasedCode = function(ctx) {
      ctx.pushCode("function {0}(offset) {", FUNCTION_PREFIX + this.alias);
    
      if (this.constructorFn) {
        ctx.pushCode("var vars = new constructorFn();");
      } else {
        ctx.pushCode("var vars = {};");
      }
    
      this.generate(ctx);
    
      ctx.markResolved(this.alias);
      this.resolveReferences(ctx);
    
      ctx.pushCode("return { offset: offset, result: vars };");
      ctx.pushCode("}");
    
      return ctx;
    };
    
    Parser.prototype.resolveReferences = function(ctx) {
      var references = ctx.getUnresolvedReferences();
      ctx.markRequested(references);
      references.forEach(function(alias) {
        var parser = aliasRegistry[alias];
        parser.addAliasedCode(ctx);
      });
    };
    
    Parser.prototype.compile = function() {
      var src = "(function(buffer, constructorFn) { " + this.getCode() + " })";
      this.compiled = vm.runInThisContext(src);
    };
    
    Parser.prototype.sizeOf = function() {
      var size = NaN;
    
      if (Object.keys(PRIMITIVE_TYPES).indexOf(this.type) >= 0) {
        size = PRIMITIVE_TYPES[this.type];
    
        // if this is a fixed length string
      } else if (
        this.type === "String" &&
        typeof this.options.length === "number"
      ) {
        size = this.options.length;
    
        // if this is a fixed length buffer
      } else if (
        this.type === "Buffer" &&
        typeof this.options.length === "number"
      ) {
        size = this.options.length;
    
        // if this is a fixed length array
      } else if (this.type === "Array" && typeof this.options.length === "number") {
        var elementSize = NaN;
        if (typeof this.options.type === "string") {
          elementSize = PRIMITIVE_TYPES[NAME_MAP[this.options.type]];
        } else if (this.options.type instanceof Parser) {
          elementSize = this.options.type.sizeOf();
        }
        size = this.options.length * elementSize;
    
        // if this a skip
      } else if (this.type === "Skip") {
        size = this.options.length;
    
        // if this is a nested parser
      } else if (this.type === "Nest") {
        size = this.options.type.sizeOf();
      } else if (!this.type) {
        size = 0;
      }
    
      if (this.next) {
        size += this.next.sizeOf();
      }
    
      return size;
    };
    
    // Follow the parser chain till the root and start parsing from there
    Parser.prototype.parse = function(buffer) {
      if (!this.compiled) {
        this.compile();
      }
    
      return this.compiled(buffer, this.constructorFn);
    };
    
    //----------------------------------------------------------------------------------------
    // private methods
    //----------------------------------------------------------------------------------------
    
    Parser.prototype.setNextParser = function(type, varName, options) {
      var parser = new Parser();
    
      parser.type = NAME_MAP[type];
      parser.varName = varName;
      parser.options = options || parser.options;
      parser.endian = this.endian;
    
      if (this.head) {
        this.head.next = parser;
      } else {
        this.next = parser;
      }
      this.head = parser;
    
      return this;
    };
    
    // Call code generator for this parser
    Parser.prototype.generate = function(ctx) {
      if (this.type) {
        this["generate" + this.type](ctx);
        this.generateAssert(ctx);
      }
    
      var varName = ctx.generateVariable(this.varName);
      if (this.options.formatter) {
        this.generateFormatter(ctx, varName, this.options.formatter);
      }
    
      return this.generateNext(ctx);
    };
    
    Parser.prototype.generateAssert = function(ctx) {
      if (!this.options.assert) {
        return;
      }
    
      var varName = ctx.generateVariable(this.varName);
    
      switch (typeof this.options.assert) {
        case "function":
          ctx.pushCode(
            "if (!({0}).call(vars, {1})) {",
            this.options.assert,
            varName
          );
          break;
        case "number":
          ctx.pushCode("if ({0} !== {1}) {", this.options.assert, varName);
          break;
        case "string":
          ctx.pushCode('if ("{0}" !== {1}) {', this.options.assert, varName);
          break;
        default:
          throw new Error(
            "Assert option supports only strings, numbers and assert functions."
          );
      }
      ctx.generateError('"Assert error: {0} is " + {0}', varName);
      ctx.pushCode("}");
    };
    
    // Recursively call code generators and append results
    Parser.prototype.generateNext = function(ctx) {
      if (this.next) {
        ctx = this.next.generate(ctx);
      }
    
      return ctx;
    };
    
    Object.keys(PRIMITIVE_TYPES).forEach(function(type) {
      Parser.prototype["generate" + type] = function(ctx) {
        ctx.pushCode(
          "{0} = buffer.read{1}(offset);",
          ctx.generateVariable(this.varName),
          type
        );
        ctx.pushCode("offset += {0};", PRIMITIVE_TYPES[type]);
      };
    });
    
    Parser.prototype.generateBit = function(ctx) {
      // TODO find better method to handle nested bit fields
      var parser = JSON.parse(JSON.stringify(this));
      parser.varName = ctx.generateVariable(parser.varName);
      ctx.bitFields.push(parser);
    
      if (
        !this.next ||
        (this.next && ["Bit", "Nest"].indexOf(this.next.type) < 0)
      ) {
        var sum = 0;
        ctx.bitFields.forEach(function(parser) {
          sum += parser.options.length;
        });
    
        var val = ctx.generateTmpVariable();
    
        if (sum <= 8) {
          ctx.pushCode("var {0} = buffer.readUInt8(offset);", val);
          sum = 8;
        } else if (sum <= 16) {
          ctx.pushCode("var {0} = buffer.readUInt16BE(offset);", val);
          sum = 16;
        } else if (sum <= 24) {
          var val1 = ctx.generateTmpVariable();
          var val2 = ctx.generateTmpVariable();
          ctx.pushCode("var {0} = buffer.readUInt16BE(offset);", val1);
          ctx.pushCode("var {0} = buffer.readUInt8(offset + 2);", val2);
          ctx.pushCode("var {2} = ({0} << 8) | {1};", val1, val2, val);
          sum = 24;
        } else if (sum <= 32) {
          ctx.pushCode("var {0} = buffer.readUInt32BE(offset);", val);
          sum = 32;
        } else {
          throw new Error(
            "Currently, bit field sequence longer than 4-bytes is not supported."
          );
        }
        ctx.pushCode("offset += {0};", sum / 8);
    
        var bitOffset = 0;
        var isBigEndian = this.endian === "be";
        ctx.bitFields.forEach(function(parser) {
          ctx.pushCode(
            "{0} = {1} >> {2} & {3};",
            parser.varName,
            val,
            isBigEndian ? sum - bitOffset - parser.options.length : bitOffset,
            (1 << parser.options.length) - 1
          );
          bitOffset += parser.options.length;
        });
    
        ctx.bitFields = [];
      }
    };
    
    Parser.prototype.generateSkip = function(ctx) {
      var length = ctx.generateOption(this.options.length);
      ctx.pushCode("offset += {0};", length);
    };
    
    Parser.prototype.generateString = function(ctx) {
      var name = ctx.generateVariable(this.varName);
      var start = ctx.generateTmpVariable();
    
      if (this.options.length && this.options.zeroTerminated) {
        ctx.pushCode("var {0} = offset;", start);
        ctx.pushCode(
          "while(buffer.readUInt8(offset++) !== 0 && offset - {0}  < {1});",
          start,
          this.options.length
        );
        ctx.pushCode(
          "{0} = buffer.toString('{1}', {2}, offset - {2} < {3} ? offset - 1 : offset);",
          name,
          this.options.encoding,
          start,
          this.options.length
        );
      } else if (this.options.length) {
        ctx.pushCode(
          "{0} = buffer.toString('{1}', offset, offset + {2});",
          name,
          this.options.encoding,
          ctx.generateOption(this.options.length)
        );
        ctx.pushCode("offset += {0};", ctx.generateOption(this.options.length));
      } else if (this.options.zeroTerminated) {
        ctx.pushCode("var {0} = offset;", start);
        ctx.pushCode("while(buffer.readUInt8(offset++) !== 0);");
        ctx.pushCode(
          "{0} = buffer.toString('{1}', {2}, offset - 1);",
          name,
          this.options.encoding,
          start
        );
      } else if (this.options.greedy) {
        ctx.pushCode("var {0} = offset;", start);
        ctx.pushCode("while(buffer.length > offset++);");
        ctx.pushCode(
          "{0} = buffer.toString('{1}', {2}, offset);",
          name,
          this.options.encoding,
          start
        );
      }
      if (this.options.stripNull) {
        ctx.pushCode("{0} = {0}.replace(/\\x00+$/g, '')", name);
      }
    };
    
    Parser.prototype.generateBuffer = function(ctx) {
      if (this.options.readUntil === "eof") {
        ctx.pushCode(
          "{0} = buffer.slice(offset);",
          ctx.generateVariable(this.varName)
        );
      } else {
        ctx.pushCode(
          "{0} = buffer.slice(offset, offset + {1});",
          ctx.generateVariable(this.varName),
          ctx.generateOption(this.options.length)
        );
        ctx.pushCode("offset += {0};", ctx.generateOption(this.options.length));
      }
    
      if (this.options.clone) {
        ctx.pushCode("{0} = Buffer.from({0});", ctx.generateVariable(this.varName));
      }
    };
    
    Parser.prototype.generateArray = function(ctx) {
      var length = ctx.generateOption(this.options.length);
      var lengthInBytes = ctx.generateOption(this.options.lengthInBytes);
      var type = this.options.type;
      var counter = ctx.generateTmpVariable();
      var lhs = ctx.generateVariable(this.varName);
      var item = ctx.generateTmpVariable();
      var key = this.options.key;
      var isHash = typeof key === "string";
    
      if (isHash) {
        ctx.pushCode("{0} = {};", lhs);
      } else {
        ctx.pushCode("{0} = [];", lhs);
      }
      if (typeof this.options.readUntil === "function") {
        ctx.pushCode("do {");
      } else if (this.options.readUntil === "eof") {
        ctx.pushCode("for (var {0} = 0; offset < buffer.length; {0}++) {", counter);
      } else if (lengthInBytes !== undefined) {
        ctx.pushCode(
          "for (var {0} = offset; offset - {0} < {1}; ) {",
          counter,
          lengthInBytes
        );
      } else {
        ctx.pushCode("for (var {0} = 0; {0} < {1}; {0}++) {", counter, length);
      }
    
      if (typeof type === "string") {
        if (!aliasRegistry[type]) {
          ctx.pushCode("var {0} = buffer.read{1}(offset);", item, NAME_MAP[type]);
          ctx.pushCode("offset += {0};", PRIMITIVE_TYPES[NAME_MAP[type]]);
        } else {
          var tempVar = ctx.generateTmpVariable();
          ctx.pushCode("var {0} = {1}(offset);", tempVar, FUNCTION_PREFIX + type);
          ctx.pushCode("var {0} = {1}.result; offset = {1}.offset;", item, tempVar);
          if (type !== this.alias) ctx.addReference(type);
        }
      } else if (type instanceof Parser) {
        ctx.pushCode("var {0} = {};", item);
    
        ctx.pushScope(item);
        type.generate(ctx);
        ctx.popScope();
      }
    
      if (isHash) {
        ctx.pushCode("{0}[{2}.{1}] = {2};", lhs, key, item);
      } else {
        ctx.pushCode("{0}.push({1});", lhs, item);
      }
    
      ctx.pushCode("}");
    
      if (typeof this.options.readUntil === "function") {
        ctx.pushCode(
          " while (!({0}).call(this, {1}, buffer.slice(offset)));",
          this.options.readUntil,
          item
        );
      }
    };
    
    Parser.prototype.generateChoiceCase = function(ctx, varName, type) {
      if (typeof type === "string") {
        if (!aliasRegistry[type]) {
          ctx.pushCode(
            "{0} = buffer.read{1}(offset);",
            ctx.generateVariable(this.varName),
            NAME_MAP[type]
          );
          ctx.pushCode("offset += {0};", PRIMITIVE_TYPES[NAME_MAP[type]]);
        } else {
          var tempVar = ctx.generateTmpVariable();
          ctx.pushCode("var {0} = {1}(offset);", tempVar, FUNCTION_PREFIX + type);
          ctx.pushCode(
            "{0} = {1}.result; offset = {1}.offset;",
            ctx.generateVariable(this.varName),
            tempVar
          );
          if (type !== this.alias) ctx.addReference(type);
        }
      } else if (type instanceof Parser) {
        ctx.pushPath(varName);
        type.generate(ctx);
        ctx.popPath(varName);
      }
    };
    
    Parser.prototype.generateChoice = function(ctx) {
      var tag = ctx.generateOption(this.options.tag);
      if (this.varName) {
        ctx.pushCode("{0} = {};", ctx.generateVariable(this.varName));
      }
      ctx.pushCode("switch({0}) {", tag);
      Object.keys(this.options.choices).forEach(function(tag) {
        var type = this.options.choices[tag];
    
        ctx.pushCode("case {0}:", tag);
        this.generateChoiceCase(ctx, this.varName, type);
        ctx.pushCode("break;");
      }, this);
      ctx.pushCode("default:");
      if (this.options.defaultChoice) {
        this.generateChoiceCase(ctx, this.varName, this.options.defaultChoice);
      } else {
        ctx.generateError('"Met undefined tag value " + {0} + " at choice"', tag);
      }
      ctx.pushCode("}");
    };
    
    Parser.prototype.generateNest = function(ctx) {
      var nestVar = ctx.generateVariable(this.varName);
    
      if (this.options.type instanceof Parser) {
        if (this.varName) {
          ctx.pushCode("{0} = {};", nestVar);
        }
        ctx.pushPath(this.varName);
        this.options.type.generate(ctx);
        ctx.popPath(this.varName);
      } else if (aliasRegistry[this.options.type]) {
        var tempVar = ctx.generateTmpVariable();
        ctx.pushCode(
          "var {0} = {1}(offset);",
          tempVar,
          FUNCTION_PREFIX + this.options.type
        );
        ctx.pushCode("{0} = {1}.result; offset = {1}.offset;", nestVar, tempVar);
        if (this.options.type !== this.alias) ctx.addReference(this.options.type);
      }
    };
    
    Parser.prototype.generateFormatter = function(ctx, varName, formatter) {
      if (typeof formatter === "function") {
        ctx.pushCode("{0} = ({1}).call(this, {0});", varName, formatter);
      }
    };
    
    Parser.prototype.isInteger = function() {
      return !!this.type.match(/U?Int[8|16|32][BE|LE]?|Bit\d+/);
    };
    
    //========================================================================================
    // Exports
    //========================================================================================
    
    exports.Parser = Parser;
    
    },{"./context":10,"vm":14}],10:[function(require,module,exports){
    //========================================================================================
    // class Context
    //========================================================================================
    
    //----------------------------------------------------------------------------------------
    // constructor
    //----------------------------------------------------------------------------------------
    
    var Context = function() {
      this.code = "";
      this.scopes = [["vars"]];
      this.isAsync = false;
      this.bitFields = [];
      this.tmpVariableCount = 0;
      this.references = {};
    };
    
    //----------------------------------------------------------------------------------------
    // public methods
    //----------------------------------------------------------------------------------------
    
    Context.prototype.generateVariable = function(name) {
      var arr = [];
    
      Array.prototype.push.apply(arr, this.scopes[this.scopes.length - 1]);
      if (name) {
        arr.push(name);
      }
    
      return arr.join(".");
    };
    
    Context.prototype.generateOption = function(val) {
      switch (typeof val) {
        case "number":
          return val.toString();
        case "string":
          return this.generateVariable(val);
        case "function":
          return "(" + val + ").call(" + this.generateVariable() + ", vars)";
      }
    };
    
    Context.prototype.generateError = function() {
      var args = Array.prototype.slice.call(arguments);
      var err = Context.interpolate.apply(this, args);
    
      if (this.isAsync) {
        this.pushCode(
          "return process.nextTick(function() { callback(new Error(" +
            err +
            "), vars); });"
        );
      } else {
        this.pushCode("throw new Error(" + err + ");");
      }
    };
    
    Context.prototype.generateTmpVariable = function() {
      return "$tmp" + this.tmpVariableCount++;
    };
    
    Context.prototype.pushCode = function() {
      var args = Array.prototype.slice.call(arguments);
    
      this.code += Context.interpolate.apply(this, args) + "\n";
    };
    
    Context.prototype.pushPath = function(name) {
      if (name) {
        this.scopes[this.scopes.length - 1].push(name);
      }
    };
    
    Context.prototype.popPath = function(name) {
      if (name) {
        this.scopes[this.scopes.length - 1].pop();
      }
    };
    
    Context.prototype.pushScope = function(name) {
      this.scopes.push([name]);
    };
    
    Context.prototype.popScope = function() {
      this.scopes.pop();
    };
    
    Context.prototype.addReference = function(alias) {
      if (this.references[alias]) return;
      this.references[alias] = { resolved: false, requested: false };
    };
    
    Context.prototype.markResolved = function(alias) {
      this.references[alias].resolved = true;
    };
    
    Context.prototype.markRequested = function(aliasList) {
      aliasList.forEach(
        function(alias) {
          this.references[alias].requested = true;
        }.bind(this)
      );
    };
    
    Context.prototype.getUnresolvedReferences = function() {
      var references = this.references;
      return Object.keys(this.references).filter(function(alias) {
        return !references[alias].resolved && !references[alias].requested;
      });
    };
    
    //----------------------------------------------------------------------------------------
    // private methods
    //----------------------------------------------------------------------------------------
    
    Context.interpolate = function(s) {
      var re = /{\d+}/g;
      var matches = s.match(re);
      var params = Array.prototype.slice.call(arguments, 1);
    
      if (matches) {
        matches.forEach(function(match) {
          var index = parseInt(match.substr(1, match.length - 2), 10);
          s = s.replace(match, params[index].toString());
        });
      }
    
      return s;
    };
    
    exports.Context = Context;
    
    },{}],11:[function(require,module,exports){
    (function (Buffer){
    (function (root) {
    
    /**********************************************************
     *
     * BitView
     *
     * BitView provides a similar interface to the standard
     * DataView, but with support for bit-level reads / writes.
     *
     **********************************************************/
    var BitView = function (source, byteOffset, byteLength) {
        var isBuffer = source instanceof ArrayBuffer ||
            (typeof Buffer !== 'undefined' && source instanceof Buffer);
    
        if (!isBuffer) {
            throw new Error('Must specify a valid ArrayBuffer or Buffer.');
        }
    
        byteOffset = byteOffset || 0;
        byteLength = byteLength || source.byteLength /* ArrayBuffer */ || source.length /* Buffer */;
    
        this._view = new Uint8Array(source, byteOffset, byteLength);
    };
    
    // Used to massage fp values so we can operate on them
    // at the bit level.
    BitView._scratch = new DataView(new ArrayBuffer(8));
    
    Object.defineProperty(BitView.prototype, 'buffer', {
        get: function () { return Buffer.from(this._view.buffer); },
        enumerable: true,
        configurable: false
    });
    
    Object.defineProperty(BitView.prototype, 'byteLength', {
        get: function () { return this._view.length; },
        enumerable: true,
        configurable: false
    });
    
    BitView.prototype._setBit = function (offset, on) {
        if (on) {
            this._view[offset >> 3] |= 1 << (offset & 7);
        } else {
            this._view[offset >> 3] &= ~(1 << (offset & 7));
        }
    };
    
    BitView.prototype.getBits = function (offset, bits, signed) {
        var available = (this._view.length * 8 - offset);
    
        if (bits > available) {
            throw new Error('Cannot get ' + bits + ' bit(s) from offset ' + offset + ', ' + available + ' available');
        }
    
        var value = 0;
        for (var i = 0; i < bits;) {
            var remaining = bits - i;
            var bitOffset = offset & 7;
            var currentByte = this._view[offset >> 3];
    
            // the max number of bits we can read from the current byte
            var read = Math.min(remaining, 8 - bitOffset);
    
            // create a mask with the correct bit width
            var mask = (1 << read) - 1;
            // shift the bits we want to the start of the byte and mask of the rest
            var readBits = (currentByte >> bitOffset) & mask;
            value |= readBits << i;
    
            offset += read;
            i += read;
        }
    
        if (signed) {
            // If we're not working with a full 32 bits, check the
            // imaginary MSB for this bit count and convert to a
            // valid 32-bit signed value if set.
            if (bits !== 32 && value & (1 << (bits - 1))) {
                value |= -1 ^ ((1 << bits) - 1);
            }
    
            return value;
        }
    
        return value >>> 0;
    };
    
    BitView.prototype.setBits = function (offset, value, bits) {
        var available = (this._view.length * 8 - offset);
    
        if (bits > available) {
            throw new Error('Cannot set ' + bits + ' bit(s) from offset ' + offset + ', ' + available + ' available');
        }
    
        for (var i = 0; i < bits;) {
            var wrote;
    
            // Write an entire byte if we can.
            if ((bits - i) >= 8 && ((offset & 7) === 0)) {
                this._view[offset >> 3] = value & 0xFF;
                wrote = 8;
            } else {
                this._setBit(offset, value & 0x1);
                wrote = 1;
            }
    
            value = (value >> wrote);
    
            offset += wrote;
            i += wrote;
        }
    };
    
    BitView.prototype.getBoolean = function (offset) {
        return this.getBits(offset, 1, false) !== 0;
    };
    BitView.prototype.getInt8 = function (offset) {
        return this.getBits(offset, 8, true);
    };
    BitView.prototype.getUint8 = function (offset) {
        return this.getBits(offset, 8, false);
    };
    BitView.prototype.getInt16 = function (offset) {
        return this.getBits(offset, 16, true);
    };
    BitView.prototype.getUint16 = function (offset) {
        return this.getBits(offset, 16, false);
    };
    BitView.prototype.getInt32 = function (offset) {
        return this.getBits(offset, 32, true);
    };
    BitView.prototype.getUint32 = function (offset) {
        return this.getBits(offset, 32, false);
    };
    BitView.prototype.getFloat32 = function (offset) {
        BitView._scratch.setUint32(0, this.getUint32(offset));
        return BitView._scratch.getFloat32(0);
    };
    BitView.prototype.getFloat64 = function (offset) {
        BitView._scratch.setUint32(0, this.getUint32(offset));
        // DataView offset is in bytes.
        BitView._scratch.setUint32(4, this.getUint32(offset+32));
        return BitView._scratch.getFloat64(0);
    };
    
    BitView.prototype.setBoolean = function (offset, value) {
        this.setBits(offset, value ? 1 : 0, 1);
    };
    BitView.prototype.setInt8  =
    BitView.prototype.setUint8 = function (offset, value) {
        this.setBits(offset, value, 8);
    };
    BitView.prototype.setInt16  =
    BitView.prototype.setUint16 = function (offset, value) {
        this.setBits(offset, value, 16);
    };
    BitView.prototype.setInt32  =
    BitView.prototype.setUint32 = function (offset, value) {
        this.setBits(offset, value, 32);
    };
    BitView.prototype.setFloat32 = function (offset, value) {
        BitView._scratch.setFloat32(0, value);
        this.setBits(offset, BitView._scratch.getUint32(0), 32);
    };
    BitView.prototype.setFloat64 = function (offset, value) {
        BitView._scratch.setFloat64(0, value);
        this.setBits(offset, BitView._scratch.getUint32(0), 32);
        this.setBits(offset+32, BitView._scratch.getUint32(4), 32);
    };
    BitView.prototype.getArrayBuffer = function (offset, byteLength) {
        var buffer = new Uint8Array(byteLength);
        for (var i = 0; i < byteLength; i++) {
            buffer[i] = this.getUint8(offset + (i * 8));
        }
        return buffer;
    };
    
    /**********************************************************
     *
     * BitStream
     *
     * Small wrapper for a BitView to maintain your position,
     * as well as to handle reading / writing of string data
     * to the underlying buffer.
     *
     **********************************************************/
    var reader = function (name, size) {
        return function () {
            if (this._index + size > this._length) {
                throw new Error('Trying to read past the end of the stream');
            }
            var val = this._view[name](this._index);
            this._index += size;
            return val;
        };
    };
    
    var writer = function (name, size) {
        return function (value) {
            this._view[name](this._index, value);
            this._index += size;
        };
    };
    
    function readASCIIString(stream, bytes) {
        return readString(stream, bytes, false);
    }
    
    function readUTF8String(stream, bytes) {
        return readString(stream, bytes, true);
    }
    
    function readString(stream, bytes, utf8) {
        if (bytes === 0) {
            return '';
        }
        var i = 0;
        var chars = [];
        var append = true;
        var fixedLength = !!bytes;
        if (!bytes) {
            bytes = Math.floor((stream._length - stream._index) / 8);
        }
    
        // Read while we still have space available, or until we've
        // hit the fixed byte length passed in.
        while (i < bytes) {
            var c = stream.readUint8();
    
            // Stop appending chars once we hit 0x00
            if (c === 0x00) {
                append = false;
    
                // If we don't have a fixed length to read, break out now.
                if (!fixedLength) {
                    break;
                }
            }
            if (append) {
                chars.push(c);
            }
    
            i++;
        }
    
        var string = String.fromCharCode.apply(null, chars);
        if (utf8) {
            try {
                return decodeURIComponent(escape(string)); // https://stackoverflow.com/a/17192845
            } catch (e) {
                return string;
            }
        } else {
            return string;
        }
    }
    
    function writeASCIIString(stream, string, bytes) {
        var length = bytes || string.length + 1;  // + 1 for NULL
    
        for (var i = 0; i < length; i++) {
            stream.writeUint8(i < string.length ? string.charCodeAt(i) : 0x00);
        }
    }
    
    function writeUTF8String(stream, string, bytes) {
        var byteArray = stringToByteArray(string);
    
        var length = bytes || byteArray.length + 1;  // + 1 for NULL
        for (var i = 0; i < length; i++) {
            stream.writeUint8(i < byteArray.length ? byteArray[i] : 0x00);
        }
    }
    
    function stringToByteArray(str) { // https://gist.github.com/volodymyr-mykhailyk/2923227
        var b = [], i, unicode;
        for (i = 0; i < str.length; i++) {
            unicode = str.charCodeAt(i);
            // 0x00000000 - 0x0000007f -> 0xxxxxxx
            if (unicode <= 0x7f) {
                b.push(unicode);
                // 0x00000080 - 0x000007ff -> 110xxxxx 10xxxxxx
            } else if (unicode <= 0x7ff) {
                b.push((unicode >> 6) | 0xc0);
                b.push((unicode & 0x3F) | 0x80);
                // 0x00000800 - 0x0000ffff -> 1110xxxx 10xxxxxx 10xxxxxx
            } else if (unicode <= 0xffff) {
                b.push((unicode >> 12) | 0xe0);
                b.push(((unicode >> 6) & 0x3f) | 0x80);
                b.push((unicode & 0x3f) | 0x80);
                // 0x00010000 - 0x001fffff -> 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx
            } else {
                b.push((unicode >> 18) | 0xf0);
                b.push(((unicode >> 12) & 0x3f) | 0x80);
                b.push(((unicode >> 6) & 0x3f) | 0x80);
                b.push((unicode & 0x3f) | 0x80);
            }
        }
    
        return b;
    }
    
    var BitStream = function (source, byteOffset, byteLength) {
        var isBuffer = source instanceof ArrayBuffer ||
            (typeof Buffer !== 'undefined' && source instanceof Buffer);
    
        if (!(source instanceof BitView) && !isBuffer) {
            throw new Error('Must specify a valid BitView, ArrayBuffer or Buffer');
        }
    
        if (isBuffer) {
            this._view = new BitView(source, byteOffset, byteLength);
        } else {
            this._view = source;
        }
    
        this._index = 0;
        this._startIndex = 0;
        this._length = this._view.byteLength * 8;
    };
    
    Object.defineProperty(BitStream.prototype, 'index', {
        get: function () { return this._index - this._startIndex; },
        set: function (val) { this._index = val + this._startIndex; },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(BitStream.prototype, 'length', {
        get: function () { return this._length - this._startIndex; },
        set: function (val) { this._length = val + this._startIndex; },
        enumerable  : true,
        configurable: true
    });
    
    Object.defineProperty(BitStream.prototype, 'bitsLeft', {
        get: function () { return this._length - this._index; },
        enumerable  : true,
        configurable: true
    });
    
    Object.defineProperty(BitStream.prototype, 'byteIndex', {
        // Ceil the returned value, over compensating for the amount of
        // bits written to the stream.
        get: function () { return Math.ceil(this._index / 8); },
        set: function (val) { this._index = val * 8; },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(BitStream.prototype, 'buffer', {
        get: function () { return this._view.buffer; },
        enumerable: true,
        configurable: false
    });
    
    Object.defineProperty(BitStream.prototype, 'view', {
        get: function () { return this._view; },
        enumerable: true,
        configurable: false
    });
    
    BitStream.prototype.readBits = function (bits, signed) {
        var val = this._view.getBits(this._index, bits, signed);
        this._index += bits;
        return val;
    };
    
    BitStream.prototype.writeBits = function (value, bits) {
        this._view.setBits(this._index, value, bits);
        this._index += bits;
    };
    
    BitStream.prototype.readBoolean = reader('getBoolean', 1);
    BitStream.prototype.readInt8 = reader('getInt8', 8);
    BitStream.prototype.readUint8 = reader('getUint8', 8);
    BitStream.prototype.readInt16 = reader('getInt16', 16);
    BitStream.prototype.readUint16 = reader('getUint16', 16);
    BitStream.prototype.readInt32 = reader('getInt32', 32);
    BitStream.prototype.readUint32 = reader('getUint32', 32);
    BitStream.prototype.readFloat32 = reader('getFloat32', 32);
    BitStream.prototype.readFloat64 = reader('getFloat64', 64);
    
    BitStream.prototype.writeBoolean = writer('setBoolean', 1);
    BitStream.prototype.writeInt8 = writer('setInt8', 8);
    BitStream.prototype.writeUint8 = writer('setUint8', 8);
    BitStream.prototype.writeInt16 = writer('setInt16', 16);
    BitStream.prototype.writeUint16 = writer('setUint16', 16);
    BitStream.prototype.writeInt32 = writer('setInt32', 32);
    BitStream.prototype.writeUint32 = writer('setUint32', 32);
    BitStream.prototype.writeFloat32 = writer('setFloat32', 32);
    BitStream.prototype.writeFloat64 = writer('setFloat64', 64);
    
    BitStream.prototype.readASCIIString = function (bytes) {
        return readASCIIString(this, bytes);
    };
    
    BitStream.prototype.readUTF8String = function (bytes) {
        return readUTF8String(this, bytes);
    };
    
    BitStream.prototype.writeASCIIString = function (string, bytes) {
        writeASCIIString(this, string, bytes);
    };
    
    BitStream.prototype.writeUTF8String = function (string, bytes) {
        writeUTF8String(this, string, bytes);
    };
    BitStream.prototype.readBitStream = function(bitLength) {
        var slice = new BitStream(this._view);
        slice._startIndex = this._index;
        slice._index = this._index;
        slice.length = bitLength;
        this._index += bitLength;
        return slice;
    };
    
    BitStream.prototype.writeBitStream = function(stream, length) {
        if (!length) {
            length = stream.bitsLeft;
        }
    
        var bitsToWrite;
        while (length > 0) {
            bitsToWrite = Math.min(length, 32);
            this.writeBits(stream.readBits(bitsToWrite), bitsToWrite);
            length -= bitsToWrite;
        }
    };
    
    BitStream.prototype.readArrayBuffer = function(byteLength) {
        var buffer = this._view.getArrayBuffer(this._index, byteLength);
        this._index += (byteLength * 8);
        return buffer;
    };
    
    BitStream.prototype.writeArrayBuffer = function(buffer, byteLength) {
        this.writeBitStream(new BitStream(buffer), byteLength * 8);
    };
    
    // AMD / RequireJS
    if (typeof define !== 'undefined' && define.amd) {
        define(function () {
            return {
                BitView: BitView,
                BitStream: BitStream
            };
        });
    }
    // Node.js
    else if (typeof module !== 'undefined' && module.exports) {
        module.exports = {
            BitView: BitView,
            BitStream: BitStream
        };
    }
    
    }(this));
    
    }).call(this,require("buffer").Buffer)
    },{"buffer":12}],12:[function(require,module,exports){
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    /* eslint-disable no-proto */
    
    'use strict'
    
    var base64 = require('base64-js')
    var ieee754 = require('ieee754')
    
    exports.Buffer = Buffer
    exports.SlowBuffer = SlowBuffer
    exports.INSPECT_MAX_BYTES = 50
    
    var K_MAX_LENGTH = 0x7fffffff
    exports.kMaxLength = K_MAX_LENGTH
    
    /**
     * If `Buffer.TYPED_ARRAY_SUPPORT`:
     *   === true    Use Uint8Array implementation (fastest)
     *   === false   Print warning and recommend using `buffer` v4.x which has an Object
     *               implementation (most compatible, even IE6)
     *
     * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
     * Opera 11.6+, iOS 4.2+.
     *
     * We report that the browser does not support typed arrays if the are not subclassable
     * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
     * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
     * for __proto__ and has a buggy typed array implementation.
     */
    Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()
    
    if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
        typeof console.error === 'function') {
      console.error(
        'This browser lacks typed array (Uint8Array) support which is required by ' +
        '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
      )
    }
    
    function typedArraySupport () {
      // Can typed array instances can be augmented?
      try {
        var arr = new Uint8Array(1)
        arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
        return arr.foo() === 42
      } catch (e) {
        return false
      }
    }
    
    Object.defineProperty(Buffer.prototype, 'parent', {
      enumerable: true,
      get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.buffer
      }
    })
    
    Object.defineProperty(Buffer.prototype, 'offset', {
      enumerable: true,
      get: function () {
        if (!Buffer.isBuffer(this)) return undefined
        return this.byteOffset
      }
    })
    
    function createBuffer (length) {
      if (length > K_MAX_LENGTH) {
        throw new RangeError('The value "' + length + '" is invalid for option "size"')
      }
      // Return an augmented `Uint8Array` instance
      var buf = new Uint8Array(length)
      buf.__proto__ = Buffer.prototype
      return buf
    }
    
    /**
     * The Buffer constructor returns instances of `Uint8Array` that have their
     * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
     * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
     * and the `Uint8Array` methods. Square bracket notation works as expected -- it
     * returns a single octet.
     *
     * The `Uint8Array` prototype remains unmodified.
     */
    
    function Buffer (arg, encodingOrOffset, length) {
      // Common case.
      if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') {
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          )
        }
        return allocUnsafe(arg)
      }
      return from(arg, encodingOrOffset, length)
    }
    
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    if (typeof Symbol !== 'undefined' && Symbol.species != null &&
        Buffer[Symbol.species] === Buffer) {
      Object.defineProperty(Buffer, Symbol.species, {
        value: null,
        configurable: true,
        enumerable: false,
        writable: false
      })
    }
    
    Buffer.poolSize = 8192 // not used by this implementation
    
    function from (value, encodingOrOffset, length) {
      if (typeof value === 'string') {
        return fromString(value, encodingOrOffset)
      }
    
      if (ArrayBuffer.isView(value)) {
        return fromArrayLike(value)
      }
    
      if (value == null) {
        throw TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
          'or Array-like Object. Received type ' + (typeof value)
        )
      }
    
      if (isInstance(value, ArrayBuffer) ||
          (value && isInstance(value.buffer, ArrayBuffer))) {
        return fromArrayBuffer(value, encodingOrOffset, length)
      }
    
      if (typeof value === 'number') {
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        )
      }
    
      var valueOf = value.valueOf && value.valueOf()
      if (valueOf != null && valueOf !== value) {
        return Buffer.from(valueOf, encodingOrOffset, length)
      }
    
      var b = fromObject(value)
      if (b) return b
    
      if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
          typeof value[Symbol.toPrimitive] === 'function') {
        return Buffer.from(
          value[Symbol.toPrimitive]('string'), encodingOrOffset, length
        )
      }
    
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
        'or Array-like Object. Received type ' + (typeof value)
      )
    }
    
    /**
     * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
     * if value is a number.
     * Buffer.from(str[, encoding])
     * Buffer.from(array)
     * Buffer.from(buffer)
     * Buffer.from(arrayBuffer[, byteOffset[, length]])
     **/
    Buffer.from = function (value, encodingOrOffset, length) {
      return from(value, encodingOrOffset, length)
    }
    
    // Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
    // https://github.com/feross/buffer/pull/148
    Buffer.prototype.__proto__ = Uint8Array.prototype
    Buffer.__proto__ = Uint8Array
    
    function assertSize (size) {
      if (typeof size !== 'number') {
        throw new TypeError('"size" argument must be of type number')
      } else if (size < 0) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"')
      }
    }
    
    function alloc (size, fill, encoding) {
      assertSize(size)
      if (size <= 0) {
        return createBuffer(size)
      }
      if (fill !== undefined) {
        // Only pay attention to encoding if it's a string. This
        // prevents accidentally sending in a number that would
        // be interpretted as a start offset.
        return typeof encoding === 'string'
          ? createBuffer(size).fill(fill, encoding)
          : createBuffer(size).fill(fill)
      }
      return createBuffer(size)
    }
    
    /**
     * Creates a new filled Buffer instance.
     * alloc(size[, fill[, encoding]])
     **/
    Buffer.alloc = function (size, fill, encoding) {
      return alloc(size, fill, encoding)
    }
    
    function allocUnsafe (size) {
      assertSize(size)
      return createBuffer(size < 0 ? 0 : checked(size) | 0)
    }
    
    /**
     * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
     * */
    Buffer.allocUnsafe = function (size) {
      return allocUnsafe(size)
    }
    /**
     * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
     */
    Buffer.allocUnsafeSlow = function (size) {
      return allocUnsafe(size)
    }
    
    function fromString (string, encoding) {
      if (typeof encoding !== 'string' || encoding === '') {
        encoding = 'utf8'
      }
    
      if (!Buffer.isEncoding(encoding)) {
        throw new TypeError('Unknown encoding: ' + encoding)
      }
    
      var length = byteLength(string, encoding) | 0
      var buf = createBuffer(length)
    
      var actual = buf.write(string, encoding)
    
      if (actual !== length) {
        // Writing a hex string, for example, that contains invalid characters will
        // cause everything after the first invalid character to be ignored. (e.g.
        // 'abxxcd' will be treated as 'ab')
        buf = buf.slice(0, actual)
      }
    
      return buf
    }
    
    function fromArrayLike (array) {
      var length = array.length < 0 ? 0 : checked(array.length) | 0
      var buf = createBuffer(length)
      for (var i = 0; i < length; i += 1) {
        buf[i] = array[i] & 255
      }
      return buf
    }
    
    function fromArrayBuffer (array, byteOffset, length) {
      if (byteOffset < 0 || array.byteLength < byteOffset) {
        throw new RangeError('"offset" is outside of buffer bounds')
      }
    
      if (array.byteLength < byteOffset + (length || 0)) {
        throw new RangeError('"length" is outside of buffer bounds')
      }
    
      var buf
      if (byteOffset === undefined && length === undefined) {
        buf = new Uint8Array(array)
      } else if (length === undefined) {
        buf = new Uint8Array(array, byteOffset)
      } else {
        buf = new Uint8Array(array, byteOffset, length)
      }
    
      // Return an augmented `Uint8Array` instance
      buf.__proto__ = Buffer.prototype
      return buf
    }
    
    function fromObject (obj) {
      if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0
        var buf = createBuffer(len)
    
        if (buf.length === 0) {
          return buf
        }
    
        obj.copy(buf, 0, 0, len)
        return buf
      }
    
      if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
          return createBuffer(0)
        }
        return fromArrayLike(obj)
      }
    
      if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
        return fromArrayLike(obj.data)
      }
    }
    
    function checked (length) {
      // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
      // length is NaN (which is otherwise coerced to zero.)
      if (length >= K_MAX_LENGTH) {
        throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                             'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
      }
      return length | 0
    }
    
    function SlowBuffer (length) {
      if (+length != length) { // eslint-disable-line eqeqeq
        length = 0
      }
      return Buffer.alloc(+length)
    }
    
    Buffer.isBuffer = function isBuffer (b) {
      return b != null && b._isBuffer === true &&
        b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    }
    
    Buffer.compare = function compare (a, b) {
      if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
      if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
      if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
        throw new TypeError(
          'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
        )
      }
    
      if (a === b) return 0
    
      var x = a.length
      var y = b.length
    
      for (var i = 0, len = Math.min(x, y); i < len; ++i) {
        if (a[i] !== b[i]) {
          x = a[i]
          y = b[i]
          break
        }
      }
    
      if (x < y) return -1
      if (y < x) return 1
      return 0
    }
    
    Buffer.isEncoding = function isEncoding (encoding) {
      switch (String(encoding).toLowerCase()) {
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
          return true
        default:
          return false
      }
    }
    
    Buffer.concat = function concat (list, length) {
      if (!Array.isArray(list)) {
        throw new TypeError('"list" argument must be an Array of Buffers')
      }
    
      if (list.length === 0) {
        return Buffer.alloc(0)
      }
    
      var i
      if (length === undefined) {
        length = 0
        for (i = 0; i < list.length; ++i) {
          length += list[i].length
        }
      }
    
      var buffer = Buffer.allocUnsafe(length)
      var pos = 0
      for (i = 0; i < list.length; ++i) {
        var buf = list[i]
        if (isInstance(buf, Uint8Array)) {
          buf = Buffer.from(buf)
        }
        if (!Buffer.isBuffer(buf)) {
          throw new TypeError('"list" argument must be an Array of Buffers')
        }
        buf.copy(buffer, pos)
        pos += buf.length
      }
      return buffer
    }
    
    function byteLength (string, encoding) {
      if (Buffer.isBuffer(string)) {
        return string.length
      }
      if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
        return string.byteLength
      }
      if (typeof string !== 'string') {
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
          'Received type ' + typeof string
        )
      }
    
      var len = string.length
      var mustMatch = (arguments.length > 2 && arguments[2] === true)
      if (!mustMatch && len === 0) return 0
    
      // Use a for loop to avoid recursion
      var loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return len
          case 'utf8':
          case 'utf-8':
            return utf8ToBytes(string).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return len * 2
          case 'hex':
            return len >>> 1
          case 'base64':
            return base64ToBytes(string).length
          default:
            if (loweredCase) {
              return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
            }
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }
    Buffer.byteLength = byteLength
    
    function slowToString (encoding, start, end) {
      var loweredCase = false
    
      // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
      // property of a typed array.
    
      // This behaves neither like String nor Uint8Array in that we set start/end
      // to their upper/lower bounds if the value passed is out of range.
      // undefined is handled specially as per ECMA-262 6th Edition,
      // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
      if (start === undefined || start < 0) {
        start = 0
      }
      // Return early if start > this.length. Done here to prevent potential uint32
      // coercion fail below.
      if (start > this.length) {
        return ''
      }
    
      if (end === undefined || end > this.length) {
        end = this.length
      }
    
      if (end <= 0) {
        return ''
      }
    
      // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
      end >>>= 0
      start >>>= 0
    
      if (end <= start) {
        return ''
      }
    
      if (!encoding) encoding = 'utf8'
    
      while (true) {
        switch (encoding) {
          case 'hex':
            return hexSlice(this, start, end)
    
          case 'utf8':
          case 'utf-8':
            return utf8Slice(this, start, end)
    
          case 'ascii':
            return asciiSlice(this, start, end)
    
          case 'latin1':
          case 'binary':
            return latin1Slice(this, start, end)
    
          case 'base64':
            return base64Slice(this, start, end)
    
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return utf16leSlice(this, start, end)
    
          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = (encoding + '').toLowerCase()
            loweredCase = true
        }
      }
    }
    
    // This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
    // to detect a Buffer instance. It's not possible to use `instanceof Buffer`
    // reliably in a browserify context because there could be multiple different
    // copies of the 'buffer' package in use. This method works even for Buffer
    // instances that were created from another copy of the `buffer` package.
    // See: https://github.com/feross/buffer/issues/154
    Buffer.prototype._isBuffer = true
    
    function swap (b, n, m) {
      var i = b[n]
      b[n] = b[m]
      b[m] = i
    }
    
    Buffer.prototype.swap16 = function swap16 () {
      var len = this.length
      if (len % 2 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 16-bits')
      }
      for (var i = 0; i < len; i += 2) {
        swap(this, i, i + 1)
      }
      return this
    }
    
    Buffer.prototype.swap32 = function swap32 () {
      var len = this.length
      if (len % 4 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 32-bits')
      }
      for (var i = 0; i < len; i += 4) {
        swap(this, i, i + 3)
        swap(this, i + 1, i + 2)
      }
      return this
    }
    
    Buffer.prototype.swap64 = function swap64 () {
      var len = this.length
      if (len % 8 !== 0) {
        throw new RangeError('Buffer size must be a multiple of 64-bits')
      }
      for (var i = 0; i < len; i += 8) {
        swap(this, i, i + 7)
        swap(this, i + 1, i + 6)
        swap(this, i + 2, i + 5)
        swap(this, i + 3, i + 4)
      }
      return this
    }
    
    Buffer.prototype.toString = function toString () {
      var length = this.length
      if (length === 0) return ''
      if (arguments.length === 0) return utf8Slice(this, 0, length)
      return slowToString.apply(this, arguments)
    }
    
    Buffer.prototype.toLocaleString = Buffer.prototype.toString
    
    Buffer.prototype.equals = function equals (b) {
      if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
      if (this === b) return true
      return Buffer.compare(this, b) === 0
    }
    
    Buffer.prototype.inspect = function inspect () {
      var str = ''
      var max = exports.INSPECT_MAX_BYTES
      str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
      if (this.length > max) str += ' ... '
      return '<Buffer ' + str + '>'
    }
    
    Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
      if (isInstance(target, Uint8Array)) {
        target = Buffer.from(target, target.offset, target.byteLength)
      }
      if (!Buffer.isBuffer(target)) {
        throw new TypeError(
          'The "target" argument must be one of type Buffer or Uint8Array. ' +
          'Received type ' + (typeof target)
        )
      }
    
      if (start === undefined) {
        start = 0
      }
      if (end === undefined) {
        end = target ? target.length : 0
      }
      if (thisStart === undefined) {
        thisStart = 0
      }
      if (thisEnd === undefined) {
        thisEnd = this.length
      }
    
      if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
        throw new RangeError('out of range index')
      }
    
      if (thisStart >= thisEnd && start >= end) {
        return 0
      }
      if (thisStart >= thisEnd) {
        return -1
      }
      if (start >= end) {
        return 1
      }
    
      start >>>= 0
      end >>>= 0
      thisStart >>>= 0
      thisEnd >>>= 0
    
      if (this === target) return 0
    
      var x = thisEnd - thisStart
      var y = end - start
      var len = Math.min(x, y)
    
      var thisCopy = this.slice(thisStart, thisEnd)
      var targetCopy = target.slice(start, end)
    
      for (var i = 0; i < len; ++i) {
        if (thisCopy[i] !== targetCopy[i]) {
          x = thisCopy[i]
          y = targetCopy[i]
          break
        }
      }
    
      if (x < y) return -1
      if (y < x) return 1
      return 0
    }
    
    // Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
    // OR the last index of `val` in `buffer` at offset <= `byteOffset`.
    //
    // Arguments:
    // - buffer - a Buffer to search
    // - val - a string, Buffer, or number
    // - byteOffset - an index into `buffer`; will be clamped to an int32
    // - encoding - an optional encoding, relevant is val is a string
    // - dir - true for indexOf, false for lastIndexOf
    function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
      // Empty buffer means no match
      if (buffer.length === 0) return -1
    
      // Normalize byteOffset
      if (typeof byteOffset === 'string') {
        encoding = byteOffset
        byteOffset = 0
      } else if (byteOffset > 0x7fffffff) {
        byteOffset = 0x7fffffff
      } else if (byteOffset < -0x80000000) {
        byteOffset = -0x80000000
      }
      byteOffset = +byteOffset // Coerce to Number.
      if (numberIsNaN(byteOffset)) {
        // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
        byteOffset = dir ? 0 : (buffer.length - 1)
      }
    
      // Normalize byteOffset: negative offsets start from the end of the buffer
      if (byteOffset < 0) byteOffset = buffer.length + byteOffset
      if (byteOffset >= buffer.length) {
        if (dir) return -1
        else byteOffset = buffer.length - 1
      } else if (byteOffset < 0) {
        if (dir) byteOffset = 0
        else return -1
      }
    
      // Normalize val
      if (typeof val === 'string') {
        val = Buffer.from(val, encoding)
      }
    
      // Finally, search either indexOf (if dir is true) or lastIndexOf
      if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) {
          return -1
        }
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
      } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
          if (dir) {
            return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
          } else {
            return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
          }
        }
        return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
      }
    
      throw new TypeError('val must be string, number or Buffer')
    }
    
    function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
      var indexSize = 1
      var arrLength = arr.length
      var valLength = val.length
    
      if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase()
        if (encoding === 'ucs2' || encoding === 'ucs-2' ||
            encoding === 'utf16le' || encoding === 'utf-16le') {
          if (arr.length < 2 || val.length < 2) {
            return -1
          }
          indexSize = 2
          arrLength /= 2
          valLength /= 2
          byteOffset /= 2
        }
      }
    
      function read (buf, i) {
        if (indexSize === 1) {
          return buf[i]
        } else {
          return buf.readUInt16BE(i * indexSize)
        }
      }
    
      var i
      if (dir) {
        var foundIndex = -1
        for (i = byteOffset; i < arrLength; i++) {
          if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
          } else {
            if (foundIndex !== -1) i -= i - foundIndex
            foundIndex = -1
          }
        }
      } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
        for (i = byteOffset; i >= 0; i--) {
          var found = true
          for (var j = 0; j < valLength; j++) {
            if (read(arr, i + j) !== read(val, j)) {
              found = false
              break
            }
          }
          if (found) return i
        }
      }
    
      return -1
    }
    
    Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
      return this.indexOf(val, byteOffset, encoding) !== -1
    }
    
    Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
    }
    
    Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
      return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
    }
    
    function hexWrite (buf, string, offset, length) {
      offset = Number(offset) || 0
      var remaining = buf.length - offset
      if (!length) {
        length = remaining
      } else {
        length = Number(length)
        if (length > remaining) {
          length = remaining
        }
      }
    
      var strLen = string.length
    
      if (length > strLen / 2) {
        length = strLen / 2
      }
      for (var i = 0; i < length; ++i) {
        var parsed = parseInt(string.substr(i * 2, 2), 16)
        if (numberIsNaN(parsed)) return i
        buf[offset + i] = parsed
      }
      return i
    }
    
    function utf8Write (buf, string, offset, length) {
      return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
    }
    
    function asciiWrite (buf, string, offset, length) {
      return blitBuffer(asciiToBytes(string), buf, offset, length)
    }
    
    function latin1Write (buf, string, offset, length) {
      return asciiWrite(buf, string, offset, length)
    }
    
    function base64Write (buf, string, offset, length) {
      return blitBuffer(base64ToBytes(string), buf, offset, length)
    }
    
    function ucs2Write (buf, string, offset, length) {
      return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
    }
    
    Buffer.prototype.write = function write (string, offset, length, encoding) {
      // Buffer#write(string)
      if (offset === undefined) {
        encoding = 'utf8'
        length = this.length
        offset = 0
      // Buffer#write(string, encoding)
      } else if (length === undefined && typeof offset === 'string') {
        encoding = offset
        length = this.length
        offset = 0
      // Buffer#write(string, offset[, length][, encoding])
      } else if (isFinite(offset)) {
        offset = offset >>> 0
        if (isFinite(length)) {
          length = length >>> 0
          if (encoding === undefined) encoding = 'utf8'
        } else {
          encoding = length
          length = undefined
        }
      } else {
        throw new Error(
          'Buffer.write(string, encoding, offset[, length]) is no longer supported'
        )
      }
    
      var remaining = this.length - offset
      if (length === undefined || length > remaining) length = remaining
    
      if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
        throw new RangeError('Attempt to write outside buffer bounds')
      }
    
      if (!encoding) encoding = 'utf8'
    
      var loweredCase = false
      for (;;) {
        switch (encoding) {
          case 'hex':
            return hexWrite(this, string, offset, length)
    
          case 'utf8':
          case 'utf-8':
            return utf8Write(this, string, offset, length)
    
          case 'ascii':
            return asciiWrite(this, string, offset, length)
    
          case 'latin1':
          case 'binary':
            return latin1Write(this, string, offset, length)
    
          case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length)
    
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return ucs2Write(this, string, offset, length)
    
          default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
            encoding = ('' + encoding).toLowerCase()
            loweredCase = true
        }
      }
    }
    
    Buffer.prototype.toJSON = function toJSON () {
      return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
      }
    }
    
    function base64Slice (buf, start, end) {
      if (start === 0 && end === buf.length) {
        return base64.fromByteArray(buf)
      } else {
        return base64.fromByteArray(buf.slice(start, end))
      }
    }
    
    function utf8Slice (buf, start, end) {
      end = Math.min(buf.length, end)
      var res = []
    
      var i = start
      while (i < end) {
        var firstByte = buf[i]
        var codePoint = null
        var bytesPerSequence = (firstByte > 0xEF) ? 4
          : (firstByte > 0xDF) ? 3
            : (firstByte > 0xBF) ? 2
              : 1
    
        if (i + bytesPerSequence <= end) {
          var secondByte, thirdByte, fourthByte, tempCodePoint
    
          switch (bytesPerSequence) {
            case 1:
              if (firstByte < 0x80) {
                codePoint = firstByte
              }
              break
            case 2:
              secondByte = buf[i + 1]
              if ((secondByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                if (tempCodePoint > 0x7F) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 3:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                  codePoint = tempCodePoint
                }
              }
              break
            case 4:
              secondByte = buf[i + 1]
              thirdByte = buf[i + 2]
              fourthByte = buf[i + 3]
              if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                  codePoint = tempCodePoint
                }
              }
          }
        }
    
        if (codePoint === null) {
          // we did not generate a valid codePoint so insert a
          // replacement char (U+FFFD) and advance only 1 byte
          codePoint = 0xFFFD
          bytesPerSequence = 1
        } else if (codePoint > 0xFFFF) {
          // encode to utf16 (surrogate pair dance)
          codePoint -= 0x10000
          res.push(codePoint >>> 10 & 0x3FF | 0xD800)
          codePoint = 0xDC00 | codePoint & 0x3FF
        }
    
        res.push(codePoint)
        i += bytesPerSequence
      }
    
      return decodeCodePointsArray(res)
    }
    
    // Based on http://stackoverflow.com/a/22747272/680742, the browser with
    // the lowest limit is Chrome, with 0x10000 args.
    // We go 1 magnitude less, for safety
    var MAX_ARGUMENTS_LENGTH = 0x1000
    
    function decodeCodePointsArray (codePoints) {
      var len = codePoints.length
      if (len <= MAX_ARGUMENTS_LENGTH) {
        return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
      }
    
      // Decode in chunks to avoid "call stack size exceeded".
      var res = ''
      var i = 0
      while (i < len) {
        res += String.fromCharCode.apply(
          String,
          codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
        )
      }
      return res
    }
    
    function asciiSlice (buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)
    
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i] & 0x7F)
      }
      return ret
    }
    
    function latin1Slice (buf, start, end) {
      var ret = ''
      end = Math.min(buf.length, end)
    
      for (var i = start; i < end; ++i) {
        ret += String.fromCharCode(buf[i])
      }
      return ret
    }
    
    function hexSlice (buf, start, end) {
      var len = buf.length
    
      if (!start || start < 0) start = 0
      if (!end || end < 0 || end > len) end = len
    
      var out = ''
      for (var i = start; i < end; ++i) {
        out += toHex(buf[i])
      }
      return out
    }
    
    function utf16leSlice (buf, start, end) {
      var bytes = buf.slice(start, end)
      var res = ''
      for (var i = 0; i < bytes.length; i += 2) {
        res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
      }
      return res
    }
    
    Buffer.prototype.slice = function slice (start, end) {
      var len = this.length
      start = ~~start
      end = end === undefined ? len : ~~end
    
      if (start < 0) {
        start += len
        if (start < 0) start = 0
      } else if (start > len) {
        start = len
      }
    
      if (end < 0) {
        end += len
        if (end < 0) end = 0
      } else if (end > len) {
        end = len
      }
    
      if (end < start) end = start
    
      var newBuf = this.subarray(start, end)
      // Return an augmented `Uint8Array` instance
      newBuf.__proto__ = Buffer.prototype
      return newBuf
    }
    
    /*
     * Need to make sure that buffer isn't trying to write out of bounds.
     */
    function checkOffset (offset, ext, length) {
      if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
      if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
    }
    
    Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)
    
      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }
    
      return val
    }
    
    Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        checkOffset(offset, byteLength, this.length)
      }
    
      var val = this[offset + --byteLength]
      var mul = 1
      while (byteLength > 0 && (mul *= 0x100)) {
        val += this[offset + --byteLength] * mul
      }
    
      return val
    }
    
    Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 1, this.length)
      return this[offset]
    }
    
    Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      return this[offset] | (this[offset + 1] << 8)
    }
    
    Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      return (this[offset] << 8) | this[offset + 1]
    }
    
    Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
    
      return ((this[offset]) |
          (this[offset + 1] << 8) |
          (this[offset + 2] << 16)) +
          (this[offset + 3] * 0x1000000)
    }
    
    Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
    
      return (this[offset] * 0x1000000) +
        ((this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        this[offset + 3])
    }
    
    Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)
    
      var val = this[offset]
      var mul = 1
      var i = 0
      while (++i < byteLength && (mul *= 0x100)) {
        val += this[offset + i] * mul
      }
      mul *= 0x80
    
      if (val >= mul) val -= Math.pow(2, 8 * byteLength)
    
      return val
    }
    
    Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) checkOffset(offset, byteLength, this.length)
    
      var i = byteLength
      var mul = 1
      var val = this[offset + --i]
      while (i > 0 && (mul *= 0x100)) {
        val += this[offset + --i] * mul
      }
      mul *= 0x80
    
      if (val >= mul) val -= Math.pow(2, 8 * byteLength)
    
      return val
    }
    
    Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 1, this.length)
      if (!(this[offset] & 0x80)) return (this[offset])
      return ((0xff - this[offset] + 1) * -1)
    }
    
    Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset] | (this[offset + 1] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }
    
    Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 2, this.length)
      var val = this[offset + 1] | (this[offset] << 8)
      return (val & 0x8000) ? val | 0xFFFF0000 : val
    }
    
    Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
    
      return (this[offset]) |
        (this[offset + 1] << 8) |
        (this[offset + 2] << 16) |
        (this[offset + 3] << 24)
    }
    
    Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
    
      return (this[offset] << 24) |
        (this[offset + 1] << 16) |
        (this[offset + 2] << 8) |
        (this[offset + 3])
    }
    
    Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, true, 23, 4)
    }
    
    Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 4, this.length)
      return ieee754.read(this, offset, false, 23, 4)
    }
    
    Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, true, 52, 8)
    }
    
    Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
      offset = offset >>> 0
      if (!noAssert) checkOffset(offset, 8, this.length)
      return ieee754.read(this, offset, false, 52, 8)
    }
    
    function checkInt (buf, value, offset, ext, max, min) {
      if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
      if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
    }
    
    Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }
    
      var mul = 1
      var i = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }
    
      return offset + byteLength
    }
    
    Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      byteLength = byteLength >>> 0
      if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1
        checkInt(this, value, offset, byteLength, maxBytes, 0)
      }
    
      var i = byteLength - 1
      var mul = 1
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        this[offset + i] = (value / mul) & 0xFF
      }
    
      return offset + byteLength
    }
    
    Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
      this[offset] = (value & 0xff)
      return offset + 1
    }
    
    Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      return offset + 2
    }
    
    Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
      return offset + 2
    }
    
    Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      this[offset + 3] = (value >>> 24)
      this[offset + 2] = (value >>> 16)
      this[offset + 1] = (value >>> 8)
      this[offset] = (value & 0xff)
      return offset + 4
    }
    
    Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
      return offset + 4
    }
    
    Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)
    
        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }
    
      var i = 0
      var mul = 1
      var sub = 0
      this[offset] = value & 0xFF
      while (++i < byteLength && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }
    
      return offset + byteLength
    }
    
    Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        var limit = Math.pow(2, (8 * byteLength) - 1)
    
        checkInt(this, value, offset, byteLength, limit - 1, -limit)
      }
    
      var i = byteLength - 1
      var mul = 1
      var sub = 0
      this[offset + i] = value & 0xFF
      while (--i >= 0 && (mul *= 0x100)) {
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
          sub = 1
        }
        this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
      }
    
      return offset + byteLength
    }
    
    Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
      if (value < 0) value = 0xff + value + 1
      this[offset] = (value & 0xff)
      return offset + 1
    }
    
    Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      return offset + 2
    }
    
    Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
      this[offset] = (value >>> 8)
      this[offset + 1] = (value & 0xff)
      return offset + 2
    }
    
    Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      this[offset] = (value & 0xff)
      this[offset + 1] = (value >>> 8)
      this[offset + 2] = (value >>> 16)
      this[offset + 3] = (value >>> 24)
      return offset + 4
    }
    
    Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
      if (value < 0) value = 0xffffffff + value + 1
      this[offset] = (value >>> 24)
      this[offset + 1] = (value >>> 16)
      this[offset + 2] = (value >>> 8)
      this[offset + 3] = (value & 0xff)
      return offset + 4
    }
    
    function checkIEEE754 (buf, value, offset, ext, max, min) {
      if (offset + ext > buf.length) throw new RangeError('Index out of range')
      if (offset < 0) throw new RangeError('Index out of range')
    }
    
    function writeFloat (buf, value, offset, littleEndian, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
      }
      ieee754.write(buf, value, offset, littleEndian, 23, 4)
      return offset + 4
    }
    
    Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
      return writeFloat(this, value, offset, true, noAssert)
    }
    
    Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
      return writeFloat(this, value, offset, false, noAssert)
    }
    
    function writeDouble (buf, value, offset, littleEndian, noAssert) {
      value = +value
      offset = offset >>> 0
      if (!noAssert) {
        checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
      }
      ieee754.write(buf, value, offset, littleEndian, 52, 8)
      return offset + 8
    }
    
    Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
      return writeDouble(this, value, offset, true, noAssert)
    }
    
    Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
      return writeDouble(this, value, offset, false, noAssert)
    }
    
    // copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
    Buffer.prototype.copy = function copy (target, targetStart, start, end) {
      if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
      if (!start) start = 0
      if (!end && end !== 0) end = this.length
      if (targetStart >= target.length) targetStart = target.length
      if (!targetStart) targetStart = 0
      if (end > 0 && end < start) end = start
    
      // Copy 0 bytes; we're done
      if (end === start) return 0
      if (target.length === 0 || this.length === 0) return 0
    
      // Fatal error conditions
      if (targetStart < 0) {
        throw new RangeError('targetStart out of bounds')
      }
      if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
      if (end < 0) throw new RangeError('sourceEnd out of bounds')
    
      // Are we oob?
      if (end > this.length) end = this.length
      if (target.length - targetStart < end - start) {
        end = target.length - targetStart + start
      }
    
      var len = end - start
    
      if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
        // Use built-in when available, missing from IE11
        this.copyWithin(targetStart, start, end)
      } else if (this === target && start < targetStart && targetStart < end) {
        // descending copy from end
        for (var i = len - 1; i >= 0; --i) {
          target[i + targetStart] = this[i + start]
        }
      } else {
        Uint8Array.prototype.set.call(
          target,
          this.subarray(start, end),
          targetStart
        )
      }
    
      return len
    }
    
    // Usage:
    //    buffer.fill(number[, offset[, end]])
    //    buffer.fill(buffer[, offset[, end]])
    //    buffer.fill(string[, offset[, end]][, encoding])
    Buffer.prototype.fill = function fill (val, start, end, encoding) {
      // Handle string cases:
      if (typeof val === 'string') {
        if (typeof start === 'string') {
          encoding = start
          start = 0
          end = this.length
        } else if (typeof end === 'string') {
          encoding = end
          end = this.length
        }
        if (encoding !== undefined && typeof encoding !== 'string') {
          throw new TypeError('encoding must be a string')
        }
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
          throw new TypeError('Unknown encoding: ' + encoding)
        }
        if (val.length === 1) {
          var code = val.charCodeAt(0)
          if ((encoding === 'utf8' && code < 128) ||
              encoding === 'latin1') {
            // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code
          }
        }
      } else if (typeof val === 'number') {
        val = val & 255
      }
    
      // Invalid ranges are not set to a default, so can range check early.
      if (start < 0 || this.length < start || this.length < end) {
        throw new RangeError('Out of range index')
      }
    
      if (end <= start) {
        return this
      }
    
      start = start >>> 0
      end = end === undefined ? this.length : end >>> 0
    
      if (!val) val = 0
    
      var i
      if (typeof val === 'number') {
        for (i = start; i < end; ++i) {
          this[i] = val
        }
      } else {
        var bytes = Buffer.isBuffer(val)
          ? val
          : Buffer.from(val, encoding)
        var len = bytes.length
        if (len === 0) {
          throw new TypeError('The value "' + val +
            '" is invalid for argument "value"')
        }
        for (i = 0; i < end - start; ++i) {
          this[i + start] = bytes[i % len]
        }
      }
    
      return this
    }
    
    // HELPER FUNCTIONS
    // ================
    
    var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g
    
    function base64clean (str) {
      // Node takes equal signs as end of the Base64 encoding
      str = str.split('=')[0]
      // Node strips out invalid characters like \n and \t from the string, base64-js does not
      str = str.trim().replace(INVALID_BASE64_RE, '')
      // Node converts strings with length < 2 to ''
      if (str.length < 2) return ''
      // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
      while (str.length % 4 !== 0) {
        str = str + '='
      }
      return str
    }
    
    function toHex (n) {
      if (n < 16) return '0' + n.toString(16)
      return n.toString(16)
    }
    
    function utf8ToBytes (string, units) {
      units = units || Infinity
      var codePoint
      var length = string.length
      var leadSurrogate = null
      var bytes = []
    
      for (var i = 0; i < length; ++i) {
        codePoint = string.charCodeAt(i)
    
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
          // last char was a lead
          if (!leadSurrogate) {
            // no lead yet
            if (codePoint > 0xDBFF) {
              // unexpected trail
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            } else if (i + 1 === length) {
              // unpaired lead
              if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
              continue
            }
    
            // valid lead
            leadSurrogate = codePoint
    
            continue
          }
    
          // 2 leads in a row
          if (codePoint < 0xDC00) {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
            leadSurrogate = codePoint
            continue
          }
    
          // valid surrogate pair
          codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
        } else if (leadSurrogate) {
          // valid bmp char, but last char was a lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        }
    
        leadSurrogate = null
    
        // encode utf8
        if (codePoint < 0x80) {
          if ((units -= 1) < 0) break
          bytes.push(codePoint)
        } else if (codePoint < 0x800) {
          if ((units -= 2) < 0) break
          bytes.push(
            codePoint >> 0x6 | 0xC0,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x10000) {
          if ((units -= 3) < 0) break
          bytes.push(
            codePoint >> 0xC | 0xE0,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else if (codePoint < 0x110000) {
          if ((units -= 4) < 0) break
          bytes.push(
            codePoint >> 0x12 | 0xF0,
            codePoint >> 0xC & 0x3F | 0x80,
            codePoint >> 0x6 & 0x3F | 0x80,
            codePoint & 0x3F | 0x80
          )
        } else {
          throw new Error('Invalid code point')
        }
      }
    
      return bytes
    }
    
    function asciiToBytes (str) {
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        // Node's code seems to be doing this and not & 0x7F..
        byteArray.push(str.charCodeAt(i) & 0xFF)
      }
      return byteArray
    }
    
    function utf16leToBytes (str, units) {
      var c, hi, lo
      var byteArray = []
      for (var i = 0; i < str.length; ++i) {
        if ((units -= 2) < 0) break
    
        c = str.charCodeAt(i)
        hi = c >> 8
        lo = c % 256
        byteArray.push(lo)
        byteArray.push(hi)
      }
    
      return byteArray
    }
    
    function base64ToBytes (str) {
      return base64.toByteArray(base64clean(str))
    }
    
    function blitBuffer (src, dst, offset, length) {
      for (var i = 0; i < length; ++i) {
        if ((i + offset >= dst.length) || (i >= src.length)) break
        dst[i + offset] = src[i]
      }
      return i
    }
    
    // ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
    // the `instanceof` check but they should be treated as of that type.
    // See: https://github.com/feross/buffer/issues/166
    function isInstance (obj, type) {
      return obj instanceof type ||
        (obj != null && obj.constructor != null && obj.constructor.name != null &&
          obj.constructor.name === type.name)
    }
    function numberIsNaN (obj) {
      // For IE11 support
      return obj !== obj // eslint-disable-line no-self-compare
    }
    
    },{"base64-js":8,"ieee754":13}],13:[function(require,module,exports){
    exports.read = function (buffer, offset, isLE, mLen, nBytes) {
      var e, m
      var eLen = (nBytes * 8) - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var nBits = -7
      var i = isLE ? (nBytes - 1) : 0
      var d = isLE ? -1 : 1
      var s = buffer[offset + i]
    
      i += d
    
      e = s & ((1 << (-nBits)) - 1)
      s >>= (-nBits)
      nBits += eLen
      for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}
    
      m = e & ((1 << (-nBits)) - 1)
      e >>= (-nBits)
      nBits += mLen
      for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}
    
      if (e === 0) {
        e = 1 - eBias
      } else if (e === eMax) {
        return m ? NaN : ((s ? -1 : 1) * Infinity)
      } else {
        m = m + Math.pow(2, mLen)
        e = e - eBias
      }
      return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
    }
    
    exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
      var e, m, c
      var eLen = (nBytes * 8) - mLen - 1
      var eMax = (1 << eLen) - 1
      var eBias = eMax >> 1
      var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
      var i = isLE ? 0 : (nBytes - 1)
      var d = isLE ? 1 : -1
      var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0
    
      value = Math.abs(value)
    
      if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0
        e = eMax
      } else {
        e = Math.floor(Math.log(value) / Math.LN2)
        if (value * (c = Math.pow(2, -e)) < 1) {
          e--
          c *= 2
        }
        if (e + eBias >= 1) {
          value += rt / c
        } else {
          value += rt * Math.pow(2, 1 - eBias)
        }
        if (value * c >= 2) {
          e++
          c /= 2
        }
    
        if (e + eBias >= eMax) {
          m = 0
          e = eMax
        } else if (e + eBias >= 1) {
          m = ((value * c) - 1) * Math.pow(2, mLen)
          e = e + eBias
        } else {
          m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
          e = 0
        }
      }
    
      for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}
    
      e = (e << mLen) | m
      eLen += mLen
      for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}
    
      buffer[offset + i - d] |= s * 128
    }
    
    },{}],14:[function(require,module,exports){
    var indexOf = function (xs, item) {
        if (xs.indexOf) return xs.indexOf(item);
        else for (var i = 0; i < xs.length; i++) {
            if (xs[i] === item) return i;
        }
        return -1;
    };
    var Object_keys = function (obj) {
        if (Object.keys) return Object.keys(obj)
        else {
            var res = [];
            for (var key in obj) res.push(key)
            return res;
        }
    };
    
    var forEach = function (xs, fn) {
        if (xs.forEach) return xs.forEach(fn)
        else for (var i = 0; i < xs.length; i++) {
            fn(xs[i], i, xs);
        }
    };
    
    var defineProp = (function() {
        try {
            Object.defineProperty({}, '_', {});
            return function(obj, name, value) {
                Object.defineProperty(obj, name, {
                    writable: true,
                    enumerable: false,
                    configurable: true,
                    value: value
                })
            };
        } catch(e) {
            return function(obj, name, value) {
                obj[name] = value;
            };
        }
    }());
    
    var globals = ['Array', 'Boolean', 'Date', 'Error', 'EvalError', 'Function',
    'Infinity', 'JSON', 'Math', 'NaN', 'Number', 'Object', 'RangeError',
    'ReferenceError', 'RegExp', 'String', 'SyntaxError', 'TypeError', 'URIError',
    'decodeURI', 'decodeURIComponent', 'encodeURI', 'encodeURIComponent', 'escape',
    'eval', 'isFinite', 'isNaN', 'parseFloat', 'parseInt', 'undefined', 'unescape'];
    
    function Context() {}
    Context.prototype = {};
    
    var Script = exports.Script = function NodeScript (code) {
        if (!(this instanceof Script)) return new Script(code);
        this.code = code;
    };
    
    Script.prototype.runInContext = function (context) {
        if (!(context instanceof Context)) {
            throw new TypeError("needs a 'context' argument.");
        }
        
        var iframe = document.createElement('iframe');
        if (!iframe.style) iframe.style = {};
        iframe.style.display = 'none';
        
        document.body.appendChild(iframe);
        
        var win = iframe.contentWindow;
        var wEval = win.eval, wExecScript = win.execScript;
    
        if (!wEval && wExecScript) {
            // win.eval() magically appears when this is called in IE:
            wExecScript.call(win, 'null');
            wEval = win.eval;
        }
        
        forEach(Object_keys(context), function (key) {
            win[key] = context[key];
        });
        forEach(globals, function (key) {
            if (context[key]) {
                win[key] = context[key];
            }
        });
        
        var winKeys = Object_keys(win);
    
        var res = wEval.call(win, this.code);
        
        forEach(Object_keys(win), function (key) {
            // Avoid copying circular objects like `top` and `window` by only
            // updating existing context properties or new properties in the `win`
            // that was only introduced after the eval.
            if (key in context || indexOf(winKeys, key) === -1) {
                context[key] = win[key];
            }
        });
    
        forEach(globals, function (key) {
            if (!(key in context)) {
                defineProp(context, key, win[key]);
            }
        });
        
        document.body.removeChild(iframe);
        
        return res;
    };
    
    Script.prototype.runInThisContext = function () {
        return eval(this.code); // maybe...
    };
    
    Script.prototype.runInNewContext = function (context) {
        var ctx = Script.createContext(context);
        var res = this.runInContext(ctx);
    
        if (context) {
            forEach(Object_keys(ctx), function (key) {
                context[key] = ctx[key];
            });
        }
    
        return res;
    };
    
    forEach(Object_keys(Script.prototype), function (name) {
        exports[name] = Script[name] = function (code) {
            var s = Script(code);
            return s[name].apply(s, [].slice.call(arguments, 1));
        };
    });
    
    exports.isContext = function (context) {
        return context instanceof Context;
    };
    
    exports.createScript = function (code) {
        return exports.Script(code);
    };
    
    exports.createContext = Script.createContext = function (context) {
        var copy = new Context();
        if(typeof context === 'object') {
            forEach(Object_keys(context), function (key) {
                copy[key] = context[key];
            });
        }
        return copy;
    };
    
    },{}],15:[function(require,module,exports){
    (function (Buffer){
    var { Parser } = require('binary-parser');
    var { BitStream } = require('bit-buffer');
    var { SourceDemo } = require('./demo.js');
    
    var dataParser = new Parser()
        .endianess('little')
        .int32('size')
        .array('data', { type: 'int8', lengthInBytes: 'size' });
    
    // Vector
    var vectorParser = new Parser()
        .endianess('little')
        .float('x') // vec_t 0-4
        .float('y') // vec_t 5-8
        .float('z'); // vec_t 9-12
    
    // QAngle
    var qAngleParser = vectorParser;
    
    // democmdinfo_t
    var cmdInfoParser = new Parser()
        .endianess('little')
        .int32('flags')
        .array('viewOrigin', { length: 1, type: vectorParser })
        .array('viewAngles', { length: 1, type: qAngleParser })
        .array('localViewAngles', { length: 1, type: qAngleParser })
        .array('viewOrigin2', { length: 1, type: vectorParser })
        .array('viewAngles2', { length: 1, type: qAngleParser })
        .array('localViewAngles2', { length: 1, type: qAngleParser });
    
    // 0x1 & 0x02
    var defaultPacketParser = new Parser()
        .endianess('little')
        .array('packetInfo', { length: 2, type: cmdInfoParser })
        .int32('inSequence')
        .int32('outSequence')
        .array('data', { length: 1, type: dataParser });
    
    var oldPacketParser = new Parser()
        .endianess('little')
        .array('packetInfo', { length: 1, type: cmdInfoParser })
        .int32('inSequence')
        .int32('outSequence')
        .array('data', { length: 1, type: dataParser });
    
    // 0x03
    var syncTickParser = new Parser();
    
    // 0x04
    var consoleCmdParser = new Parser()
        .endianess('little')
        .int32('size')
        .string('command', { encoding: 'utf8', length: 'size', stripNull: true });
    
    // 0x05
    var userCmdParser = new Parser()
        .endianess('little')
        .int32('cmd')
        .array('data', { length: 1, type: dataParser });
    
    // 0x06
    var dataTableParser = new Parser()
        .endianess('little')
        .array('data', { length: 1, type: dataParser });
    
    // 0x07
    var stopParser = new Parser()
        .endianess('little')
        .array('rest', { readUntil: 'eof', type: 'int8' });
    
    // 0x08
    var customDataParser = new Parser()
        .endianess('little')
        .int32('unk')
        .array('data', { length: 1, type: dataParser });
    
    // 0x09 (0x08)
    var stringTablesParser = new Parser()
        .endianess('little')
        .array('data', { length: 1, type: dataParser });
    
    // Protocol 4
    var defaultMessageParser = new Parser()
        .endianess('little')
        .bit8('type')
        .int32('tick')
        .bit8('alignment')
        .choice('message', {
            tag: 'type',
            choices: {
                0x01: defaultPacketParser,
                0x02: defaultPacketParser,
                0x03: syncTickParser,
                0x04: consoleCmdParser,
                0x05: userCmdParser,
                0x06: dataTableParser,
                0x07: stopParser,
                0x08: customDataParser,
                0x09: stringTablesParser
            }
        });
    
    // Protocol 2 & 3
    var oldMessageParser = new Parser()
        .endianess('little')
        .bit8('type')
        .int32('tick')
        .choice('message', {
            tag: 'type',
            choices: {
                0x01: oldPacketParser,
                0x02: oldPacketParser,
                0x03: syncTickParser,
                0x04: consoleCmdParser,
                0x05: userCmdParser,
                0x06: dataTableParser,
                0x07: stopParser,
                0x08: stringTablesParser
            }
        });
    
    var headerParser = new Parser()
        .endianess('little')
        .string('demoFileStamp', { encoding: 'utf8', length: 8, stripNull: true })
        .int32('demoProtocol')
        .int32('networkProtocol')
        .string('serverName', { encoding: 'utf8', length: 260, stripNull: true })
        .string('clientName', { encoding: 'utf8', length: 260, stripNull: true })
        .string('mapName', { encoding: 'utf8', length: 260, stripNull: true })
        .string('gameDirectory', { encoding: 'utf8', length: 260, stripNull: true })
        .float('playbackTime')
        .int32('playbackTicks')
        .int32('playbackFrames')
        .int32('signOnLength');
    
    class SourceDemoParser {
        constructor() {
            this.headerOnly = false;
            this.headerParser = headerParser;
            this.messageParser = undefined;
            this.autoConfigure = true;
            this.autoAdjust = false;
            this.defaultGame = undefined;
        }
        static default() {
            return new SourceDemoParser();
        }
        withHeaderOnly(headerOnly) {
            this.headerOnly = headerOnly;
            return this;
        }
        withHeaderParser(headerParser) {
            this.headerParser = headerParser;
            return this;
        }
        withMessageParser(messageParser) {
            this.messageParser = messageParser;
            return this;
        }
        withAutoConfiguration(autoConfigure) {
            this.autoConfigure = autoConfigure;
            return this;
        }
        withAutoAdjustment(autoAdjust) {
            this.autoAdjust = autoAdjust;
            return this;
        }
        withDefaultGame(defaultGame) {
            this.defaultGame = defaultGame;
            return this;
        }
        parseDemoHeader(demo, buffer) {
            demo.header = this.headerParser.parse(buffer);
    
            if (demo.header.demoFileStamp != 'HL2DEMO') {
                throw new Error(`Invalid demo file stamp: ${demo.header.demoFileStamp}`);
            }
    
            return this;
        }
        parseDemoMessages(demo, buffer) {
            this.messageParser = new Parser()
                .endianess('little')
                .skip(8 + 4 + 4 + 4 * 260 + 4 + 4 + 4 + 4);
    
            if (this.autoConfigure) {
                switch (demo.header.demoProtocol) {
                    case 2:
                    case 3:
                        this.messageParser.array('messages', { readUntil: 'eof', type: oldMessageParser });
                        break;
                    case 4:
                        this.messageParser.array('messages', { readUntil: 'eof', type: defaultMessageParser });
                        break;
                    default:
                        throw new Error(`Invalid demo protocol: ${demo.header.demoProtocol}`);
                }
            }
    
            // Oof
            let rest = 4 - (buffer.length % 4);
            while (rest--) {
                buffer = Buffer.concat([buffer], buffer.length + 1);
            }
    
            demo.messages = this.messageParser.parse(buffer).messages;
    
            if (this.autoAdjust) {
                if (this.defaultGame != undefined) {
                    demo.detectGame(this.defaultGame);
                }
                demo.adjust();
            }
    
            return this;
        }
        parseDemo(buffer) {
            let demo = new SourceDemo();
    
            this.parseDemoHeader(demo, buffer);
    
            if (!this.headerOnly) {
                this.parseDemoMessages(demo, buffer);
            }
    
            return demo;
        }
        encodeUserCmdMessages(demo) {
            let result = [];
            for (let message of demo.messages) {
                if (message.type == 0x05 && message.message.data[0].size > 0) {
                    let buf = new BitStream(new Buffer(message.message.data[0].data));
                    let cmd = { source: message };
                    if (buf.readBoolean()) cmd.commandNumber = buf.readInt32();
                    if (buf.readBoolean()) cmd.tickCount = buf.readInt32();
                    if (buf.readBoolean()) cmd.viewAngleX = buf.readFloat32();
                    if (buf.readBoolean()) cmd.viewAngleY = buf.readFloat32();
                    if (buf.readBoolean()) cmd.viewAngleZ = buf.readFloat32();
                    if (buf.readBoolean()) cmd.forwardMove = buf.readFloat32();
                    if (buf.readBoolean()) cmd.sideMove = buf.readFloat32();
                    if (buf.readBoolean()) cmd.upMove = buf.readFloat32();
                    if (buf.readBoolean()) cmd.buttons = buf.readInt32();
                    if (buf.readBoolean()) cmd.impulse = buf.readInt8();
                    if (buf.readBoolean()) {
                        cmd.weaponSelect = buf.readBits(11);
                        if (buf.readBoolean()) cmd.weaponSubtype = buf.readBits(6);
                    }
                    if (buf.readBoolean()) cmd.mouseDx = buf.readInt16();
                    if (buf.readBoolean()) cmd.mouseDy = buf.readInt16();
                    result.push(cmd);
                }
            }
            return result;
        }
    }
    
    module.exports = { SourceDemoParser };
    
    }).call(this,require("buffer").Buffer)
    },{"./demo.js":2,"binary-parser":9,"bit-buffer":11,"buffer":12}],16:[function(require,module,exports){
    var { SourceDemo } = require('./demo.js');
    var { SourceGames, SourceGame } = require('./game.js');
    var { SourceDemoParser } = require('./parser.js');
    module.exports = { SourceDemo, SourceGames, SourceGame, SourceDemoParser };
    
    },{"./demo.js":2,"./game.js":3,"./parser.js":15}]},{},[1]);
    