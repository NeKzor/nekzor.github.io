# SvcUpdateStringTable

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| TableId | int | 0.625 | 5 | - |
| NumChangedEntries¹ | int | 2 | 16 | - |
| Length | int | 2.5 | 20 | - |
| Data | byte[] | Length / 8 | Length | - |

¹ Optional: Only set if the bit before was set.
