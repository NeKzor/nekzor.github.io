# UserCmd

This message contains the player's polled inputs which was used to process their movement.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Cmd | int | 4 | 32 | - |
| Size | int | 4 | 32 | - |
| Data | byte[] | Size | Size*8 | [UserCmdInfo](../classes/usercmdinfo.md) |
