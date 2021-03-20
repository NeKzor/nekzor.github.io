# GameEvent

Part of [SvcGameEvent](./netsvc/svcgameevent.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Length | int | 1.125 | 9 | - |
| Data | T | - | - | - |

## Pseudocode Example

The omitted function `find_event_list_descriptor` finds an event descriptor in the game event list by id. The list
should be constructed when parsing the [SvcGameEventList](./netsvc/svcgameeventlist.md) message.

```rust,noplaypen,ignore
let event_id = read_bits(9);

if let Some(descriptor) = find_event_list_descriptor(event_id) {
    let mut event = HashMap::new();

    for (key_name, value_type) in descriptor.keys() {
        let value = match value_type {
            0 => EventValue::None,
            1 => EventValue::String(read_ascii_string()),
            2 => EventValue::Float(read_le_f32()),
            3 => EventValue::Int32(read_le_i32()),
            4 => EventValue::Int16(read_le_i16()),
            5 => EventValue::Int8(read_le_i8()),
            6 => EventValue::Boolean(read_boolean()),
            _ => panic!("Unknown type {} for key {}`, type, key_name),
        };

        event.insert(key_name, value);
    }
}
```
