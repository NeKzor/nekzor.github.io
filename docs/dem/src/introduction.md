# Introduction

Unofficial documentation of the reverse-engineered `.dem` file format used in SourceEngine games.

## Caveats

- All names are written in PascalCase for consistency and do not match the original name defined in the engine
- Names might be slightly altered (`UserCmdInfo` = `CUserCmd`) or made up (`Slot`)
- The term `old engine` refers to engines with `DemoProtocol` 2 or 3
- The term `new engine` refers to engines with `DemoProtocol` 4
- All strings without a known size are null-terminated
- All strings are in ASCII format unless explicitly denoted
- Sequence order of bytes are stored in little endian (LE)

## Changelog

### 2021-03-14

- Integrated docs to [mdbook](https://github.com/rust-lang/mdBook)
- Fixed order of `ForwardMove` and `SideMove` in [UserCmdInfo](./classes/usercmdinfo.md)
- Added some additional caveats
- Added short descriptions
- Added pseudocode examples for decoding complex data structures
- Added license, dependencies, features and applications to [examples](./examples.md)
- Added changelog
- Added docs for [NET/SVC messages](./classes/netsvc.md)
