# SvcCreateStringTable

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Name | string | - | - | - |
| MaxEntries | int | 2 | 16 | - |
| NumEntries | int | (log2(MaxEntries)+1)/8 | log2(MaxEntries)+1 | - |
| Length | int | 2.5 | 20 | - |
| UserDataFixedSize | bool | 0.125 | 1 | - |
| UserDataSize¹ | int | 4 | 1.5 | - |
| UserDataSizeBits¹ | int | 0.5 | 4 | - |
| Flags | int | 0.25<sup title="New Engine">NE</sup><br>0.125<sup title="Old Engine">OE</sup> | 2<sup title="New Engine">NE</sup><br>1<sup title="Old Engine">OE</sup> | - |
| StringData | int | Length / 8 | Length | - |

¹ Depends if the `UserDataFixedSize` bit was set.
