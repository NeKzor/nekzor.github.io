# SignOn & Packet

Packets contain simulated information about a session. A SignOn message is the same as a Packet message but only appears once at the very beginning to indicate that the server is ready.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| PacketInfo | byte[] | 76*MSSC | 76*MSSC*8 | [CmdInfo[MSSC]](../classes/cmdinfo.md) |
| InSequence | int | 4 | 32 | - |
| OutSequence | int | 4 | 32 | - |
| Size | int | 4 | 32 | - |
| Data | byte[] | Size | Size*8 | [NET/SVC-Message[]](../classes/netsvc.md) |

## MaxSplitScreenClients (MSSC)

This value is most likely 1 for single-player-only games but 2 for multiplayer games which support split screen mode (Portal 2, CS:GO etc.). Although it can be missleading if a game does not have multiplayer mode but yet supports this feature. The console command `maxplayers` can be executed in the developer console and should help to find out the exact value for a specific game.
