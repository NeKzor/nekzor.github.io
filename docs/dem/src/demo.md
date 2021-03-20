# Demo

Demo files contain a header starting with a constant magic followed by information about the engine, the player and the current session. The main contents are stored in an array of [messages](./messages.md).

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| DemoFileStamp | string | 8 | 64 | HL2DEMO\0 |
| DemoProtocol | int | 4 | 32 | - |
| NetworkProtocol | int | 4 | 32 | - |
| ServerName | string | 260 | 2080 | - |
| ClientName | string | 260 | 2080 | - |
| MapName | string | 260 | 2080 | - |
| GameDirectory | string | 260 | 2080 | - |
| PlaybackTime | float | 4 | 32 | - |
| PlaybackTicks | int | 4 | 32 | - |
| PlaybackFrames | int | 4 | 32 | - |
| SignOnLength | int | 4 | 32 | - |
| DemoMessages | [Message[]](./messages.md) | - | - | - |
