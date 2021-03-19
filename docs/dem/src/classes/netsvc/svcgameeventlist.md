# SvcGameEventList

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Text | string | - | - | - |

## Pseudocode Example

```rust,noplaypen
fn read_game_event() {
    let event_id = read_bits(9);
    let name = read_ascii_string();
    let keys = HasMap::new();

    let mut type = read_bits(3);
    while type != 0 {
        keys.entry(read_ascii_string())
            .or_insert(type);

        type = read_bits(3);
    }
}

let events = read_bits(9);
let length = read_bits(20);
let data = read_bit_slice(length);

for _ 0..events {
    let event = read_game_event();
}
```
