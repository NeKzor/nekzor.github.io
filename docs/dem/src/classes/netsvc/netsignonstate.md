# NetSignonState

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| SignonState | int | 1 | 8 | - |
| SpawnCount | int | 4 | 32 | - |
| NumServerPlayers<sup title="New Engine">NE</sup> | int | 4 | 32 | - |
| IdsLength<sup title="New Engine">NE</sup> | int | 4 | 32 | - |
| PlayersNetworkIds<sup title="New Engine">NE</sup> | byte[] | IdsLength | IdsLength * 8 | - |
| MapNameLength<sup title="New Engine">NE</sup> | int | 4 | 32 | - |
| MapName<sup title="New Engine">NE</sup> | string | MapNameLength | MapNameLength*8 | - |

## Pseudocode Example

```rust,noplaypen
let signon_state = read_le_u8();
let spawn_count = read_le_u32();

if demo_protocol_3_or_4() {
    let num_server_players = read_le_u32();

    let length = read_le_u32();
    let player_network_ids = read_array_of_bytes(length);

    let length = read_le_u32();
    let map_name = read_ascii_string(length);
}
```
