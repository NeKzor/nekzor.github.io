# .dem

## Overview
- [Demo](#demo)
- [Message](#message)
- [Message Type](#message-type)
- [Messages](#messages)
  - [dem_signon & dem_packet](#dem_signon--dem_packet)
  - [dem_synctick](#dem_signon)
  - [dem_consolecmd](#dem_consolecmd)
  - [dem_usercmd](#dem_usercmd)
  - [dem_stop](#dem_stop)
  - [dem_customdata](#dem_customdata)
  - [dem_stringtables](#dem_stringtables)
- [Data Objects](#data-objects)
  - [CmdInfo](#cmdinfo)
  - [UserCmdInfo](#usercmdinfo)

## Demo

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| DemoFileStamp | string | 8 | 64 | HL2DEMO\0 |
| DemoProtocol | int | 4 | 32 | - |
| NetworkProtocol | int | 4 | 32 | - |
| ServerName | string | 260 | 2080 | - |
| ClientName | string | 260 | 2080 | - |
| MapName | string | 260 | 2080 | - |
| GameDirectory | string | 260 | 2080 | - |
| PlaybackTime | float | 8 | 64 | - |
| PlaybackTicks | int | 4 | 32 | - |
| PlaybackFrames | int | 4 | 32 | - |
| SignOnLength | int | 4 | 32 | - |
| DemoMessages | [Message[]](#message) | - | - | - |

## Message

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Type | [MessageType](#message-type) | 4 | 32 | - |
| Tick | int | 4 | 32 | - |
| Alignment | byte | 1 | 8 | Optional |
| Data | dem_xyz | - | - | - |

## Message Type

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| [dem_signon](#dem_signon--dem_packet) | int | 4 | 32 | 1 |
| [dem_packet](#dem_signon--dem_packet) | int | 4 | 32 | 2 |
| [dem_synctick](#dem_synctick) | int | 4 | 32 | 3 |
| [dem_consolecmd](#dem_consolecmd) | int | 4 | 32 | 4 |
| [dem_usercmd](#dem_usercmd) | int | 4 | 32 | 5 |
| [dem_datatables](#dem_datatables) | int | 4 | 32 | 6 |
| [dem_stop](#dem_stop) | int | 4 | 32 | 7 |
| [dem_customdata](#dem_customdata) | int | 4 | 32 | 8 |
| [dem_stringtables](#dem_stringtables) | int | 4 | 32 | 8 or 9 |

## Messages

### dem_signon & dem_packet

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| PacketInfo | [CmdInfo[]](#cmdinfo) | 76\*MSSC¹ | 76\*MSSC\*8 | - |
| InSequence | int | 4 | 32 | - |
| OutSequence | int | 4 | 32 | - |
| Size | int | 4 | 32 | - |
| Data | byte[] | Size | Size*8 | NET/SVC Messages |

¹MSSC (MaxSplitScreenClients) can be greater than 1 for multiplayer games but default is 1.

### dem_synctick
This message does not contain any data.

### dem_consolecmd

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Size | int | 4 | 32 | - |
| Data | byte[] | Size | Size*8 | string + \0 |

### dem_usercmd

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Cmd | int | 4 | 32 | - |
| Size | int | 4 | 32 | - |
| Data | byte[] | Size | Size*8 | [UserCmdInfo](#usercmdinfo) |
| Size | int | 4 | 32 | - |
| Data | byte[] | Size | Size*8 | SendTable[], ServerClassInfo[] |

### dem_stop

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| RemainingData | byte[] | - | - | Optional |

### dem_customdata

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Unknown | int | 4 | 32 | - |
| Size | int | 4 | 32 | - |
| Data | byte[] | Size | Size*8 | - |

### dem_stringtables

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Size | int | 4 | 32 | - |
| Data | byte[] | Size | Size*8 | StringTable[] |

## Data Objects

### CmdInfo

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Flags | int | 4 | 32 | - |
| ViewOrigin | float[] | 12 | 96 | - |
| ViewAngles | float[] | 12 | 96 | - |
| LocalViewAngles | float[] | 12 | 96 | - |
| ViewOrigin2 | float[] | 12 | 96 | - |
| ViewAngles2 | float[] | 12 | 96 | - |
| LocalViewAngles2 | float[] | 12 | 96 | - |

### UserCmdInfo

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| CommandNumber | int | 4 | 32 | Optional |
| TickCount | int | 4 | 32 | Optional |
| ViewAngles | float[] | 12 | 96 | Optional |
| SideMove | float | 4 | 32 | Optional |
| ForwardMove | float | 4 | 32 | Optional |
| UpMove | float | 4 | 32 | Optional |
| Buttons | int | 4 | 32 | Optional |
| Impulse | byte | 1 | 8 | Optional |
| WeaponSelect | int | 1.375 | 11 | Optional |
| WeaponSubtype | int | 0.75 | 6 | Optional |
| MouseDx | short | 2 | 16 | Optional |
| MouseDy | short | 2 | 16 | Optional |