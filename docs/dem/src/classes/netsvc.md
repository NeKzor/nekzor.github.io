# NET/SVC Message

Part of [Packet](../messages/packet.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Type | [Message Type](#types) | 0.75 | 6 | - |
| Data | Based on Type | - | - | - |

## Types

| Name | Value | Description |
| --- | --- | --- |
| [NetNop](./netsvc/netnop.md) | 0 | - |
| [NetDisconnect](./netsvc/netdisconnect.md) | 1 | - |
| [NetFile](./netsvc/netfile.md) | 2 | - |
| [NetSplitScreenUser](./netsvc/netsplitscreenuser.md) | 3 | New engine. |
| [NetTick](./netsvc/nettick.md) | 4 | 3 in old engine. |
| [NetStringCmd](./netsvc/netstringcmd.md) | 5 | 4 in old engine. |
| [NetSetConVar](./netsvc/netsetconvar.md) | 6 | 5 in old engine. |
| [NetSignonState](./netsvc/netsignonstate.md) | 7 | 6 in old engine. |
| [SvcServerInfo](./netsvc/svcserverinfo.md) | 8 | - |
| [SvcSendTable](./netsvc/svcsendtable.md) | 9 | - |
| [SvcClassInfo](./netsvc/svcclassinfo.md) | 10 | - |
| [SvcSetPause](./netsvc/svcsetpause.md) | 11 | - |
| [SvcCreateStringTable](./netsvc/svccreatestringtable.md) | 12 | - |
| [SvcUpdateStringTable](./netsvc/svcupdatestringtable.md) | 13 | - |
| [SvcVoiceInit](./netsvc/svcvoiceinit.md) | 14 | - |
| [SvcVoiceData](./netsvc/svcvoicedata.md) | 15 | - |
| [SvcPrint](./netsvc/svcprint.md) | 16 | 7 in old engine. |
| [SvcSounds](./netsvc/svcsounds.md) | 17 | - |
| [SvcSetView](./netsvc/svcsetview.md) | 18 | - |
| [SvcFixAngle](./netsvc/svcfixangle.md) | 19 | - |
| [SvcCrosshairAngle](./netsvc/svccrosshairangle.md) | 20 | - |
| [SvcBspDecal](./netsvc/svcbspdecal.md) | 21 | - |
| [SvcSplitScreen](./netsvc/svcsplitscreen.md) | 22 | New engine. |
| [SvcUserMessage](./netsvc/svcusermessage.md) | 23 | - |
| [SvcEntityMessage](./netsvc/svcentitymessage.md) | 24 | - |
| [SvcGameEvent](./netsvc/svcgameevent.md) | 25 | - |
| [SvcPacketEntities](./netsvc/svcpacketentities.md) | 26 | - |
| [SvcTempEntities](./netsvc/svctempentities.md) | 27 | - |
| [SvcPrefetch](./netsvc/svcprefetch.md) | 28 | - |
| [SvcMenu](./netsvc/svcmenu.md) | 29 | - |
| [SvcGameEventList](./netsvc/svcgameeventlist.md) | 30 | - |
| [SvcGetCvarValue](./netsvc/svcgetcvarvalue.md) | 31 | - |
| [SvcCmdKeyValues](./netsvc/svccmdkeyvalues.md) | 32 | 34 in CS:GO. |
| [SvcPaintmapData](./netsvc/svcpaintmapdata.md) | 33 | New engine. |
| SvcEncryptedData | 35 | Seen in CS:GO. |
| SvcHltvReplay | 36 | Seen in CS:GO. |
| SvcBroadcastCommand | 38 | Seen in CS:GO. |
| NetPlayerAvatarData | 100 | Seen in CS:GO. |

## Pseudocode Example

```rust,noplaypen,ignore
while bits_left > 6 {
    let message_type = read_bits(6);

    read_net_or_svc_message(message_type);
}
```
