# SvcVoiceData

Part of [NET/SVC](../netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Client | int | 1 | 8 | - |
| Proximity | int | 1 | 8 | - |
| Length | int | 2 | 16 | - |
| Audible | bool[] | MAX_SPLITSCREEN_CLIENTS / 8 | MAX_SPLITSCREEN_CLIENTS | - |
| Data | byte[] | Length / 8 | Length | - |
