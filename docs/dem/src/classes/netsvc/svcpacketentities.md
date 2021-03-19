# SvcPacketEntities

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| MaxEntries | int | 1.375 | 11 | - |
| IsDelta | bool | 0.125 | 1 | - |
| DeltaFrom¹ | int | 4 | 32 | - |
| BaseLine | boolean | 0.125 | 1 | - |
| UpdatedEntries | 1.375 | 11 | - | - |
| Length | int | 2.5 | 20 | - |
| UpdateBaseline | bool | 0.125 | 1 | - |
| Data | byte[] | Length / 8 | Length | - |

¹ Depends if the IsDelta bit is set.

## Pseudocode Example

```rust,noplaypen
let max_entries = read_bits(11);
let is_delta = read_one_bit();
if is_delta {
    let delta_from = read_int32();
}
let baseLine = read_one_bit();
let updated_entries = read_bits(11);
let length = read_bits(20);
let update_baseline = read_one_bit();
let data = read_bits(length);
```
