# SvcUserMessage

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| MsgType | int | 1 | 8 | - |
| Length | int | 1.5<sup title="New Engine">NE</sup><br>1.375<sup title="Old Engine">OE</sup> | 12<sup title="New Engine">NE</sup><br>11<sup title="Old Engine">OE</sup> | - |
| Data | byte[] | Length / 8 | Length | - |

## Pseudocode Example

```rust,noplaypen
let msg_type = read_le_u8();
let length = read_bits(if demo_protocol_3_or_4() { 12 } else { 11 });
let msg_data = read_bits(length);
```
