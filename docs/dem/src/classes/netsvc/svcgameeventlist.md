# SvcGameEventList

Part of [NET/SVC](../netsvc.md) message.

The data of this message is a list of descriptors which contain an event id and a set of keys. This will later be used to decode [SvcGameEvent](./svcgameevent.md) messages.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Events | int | 1.125 | 9 | - |
| Length | int | 2.5 | 20 | - |
| Data | byte[] | Length[] | - | GameEventDescriptor[] |

## Pseudocode Example

```rust,noplaypen,ignore
fn read_game_event_descriptor() {
    let event_id = read_bits(9);
    let name = read_ascii_string();
    let keys = HasMap::new();

    let mut value_type = read_bits(3);
    while value_type != 0 {
        keys.entry(read_ascii_string())
            .or_insert(value_type);

        value_type = read_bits(3);
    }
}

let events = read_bits(9);
let length = read_bits(20);
let data = read_bit_slice(length);

for _ 0..events {
    read_game_event_descriptor();
}
```
