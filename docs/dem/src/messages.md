# Messages

Demo messages are stored in sequential order as the engine records them. A message always starts with a tagged type followed by the current session tick¹, a slot² index and the type-specific message data.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Type | [Message Type](#types) | 1 | 8 | - |
| Tick¹ | int | 4 | 32 | - |
| Slot<sup title="New Engine">NE</sup>² | byte | 1 | 8 | - |
| Data | Based on Type | - | - | - |

¹ Old engines might not even include the message tick after the stop byte, see [Stop](./messages/stop.md).

² The term slot here refers to the selected split-screen index. This byte is only used in engines which support split-screen mode.

## Types

| Type | Value | Description |
| --- | --- | --- |
| [SignOn](./messages/packet.md) | 1 | - |
| [Packet](./messages/packet.md) | 2 | - |
| [SyncTick](./messages/synctick.md) | 3 | - |
| [Consolecmd](./messages/consolecmd.md) | 4 | - |
| [Usercmd](./messages/usercmd.md) | 5 | - |
| [DataTables](./messages/datatables.md) | 6 | - |
| [Stop](./messages/stop.md) | 7 | - |
| [CustomData](./messages/customdata.md) | 8 | - |
| [StringTables](./messages/stringtables.md) | 9 | 8 for old engine. |

## Pseudocode Example

To keep this example simple the stop message might contain additonal data which is not read here. We also ignore the fact that that reading past the buffer might be possible when parsing corrupted demos.

```rust,noplaypen,ignore
loop {
    let message_type = read_le_i8();

    if message_type == 0x07 {
        break;
    }

    let tick = read_le_i32();
    let slot = read_le_i8();

    read_message_data(message_type);
}
```
