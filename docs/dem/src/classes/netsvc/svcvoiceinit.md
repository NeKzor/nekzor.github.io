# SvcVoiceInit

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Codec | string | - | - | - |
| Quality | int | 1 | 8 | - |
| Unk¹ | float | 4 | 32 | - |

¹ Optional: Only read if the `Quality` byte was set (value 255).
