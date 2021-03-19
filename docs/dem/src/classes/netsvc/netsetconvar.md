# NetSetConVar

Part of [NET/SVC](/classes/netsvc.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Length | int | 1 | 8 | - |
| ConVars | ConVar[] | - | - | ConVar[] |

## Pseudocode Example

```rust,noplaypen
let length = read_le_i8();

for _ 0..length {
    let convar_name =  read_ascii_string();
    let convar_value = read_ascii_string();
}
```
