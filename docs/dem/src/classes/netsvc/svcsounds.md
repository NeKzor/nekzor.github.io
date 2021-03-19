# SvcSounds

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| ReliableSound | bool | 0.125 | 1 | - |
| Size¹ | int | 1 | 8 | 1 if ReliableSound bit is set. |
| Length | bool | 1 if ReliableSound bit is set, otherwhise 2. | 8 if ReliableSound bit is set, otherwhise 16. | - |
| Data | byte[] | 0.125 | Length | SoundInfo[] |

¹ Optional: Only set if the `ReliableSound` bit is zero.

## Pseudocode Example

```rust,noplaypen
let reliable_sound = read_one_bit();

let size = if reliable_sound {
    1
} else {
    read_bits(8)
};

let length = if reliable_sound {
    read_bits(8)
} else {
    read_bits(16)
};

let data = read_bit_slice(length);
```
