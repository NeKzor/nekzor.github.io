# NET/SVC Message

Part of [Packet](/messages/packet.md) message.

| Name | Type | Size in bytes | Size in bits | Value |
| --- | --- | --- | --- | --- |
| Type | [Message Type](#types) | 0.75 | 6 | - |
| Data | Based on Type | - | - | - |

## Types

| Name | Value | Description |
| --- | --- | --- |
| [NetNop](/classes/netsvc/netnop.md) | 0 | - |
| [NetDisconnect](/classes/netsvc/netdisconnect.md) | 1 | - |
| [NetFile](/classes/netsvc/netfile.md) | 2 | - |
| [NetSplitScreenUser](/classes/netsvc/netsplitscreenuser.md) | 3 | New engine. |
| [NetTick](/classes/netsvc/nettick.md) | 4 | 3 in old engine. |
| [NetStringCmd](/classes/netsvc/netstringcmd.md) | 5 | 4 in old engine. |
| [NetSetConVar](/classes/netsvc/netsetconvar.md) | 6 | 5 in old engine. |
| [NetSignonState](/classes/netsvc/netsignonstate.md) | 7 | 6 in old engine. |
| [SvcServerInfo](/classes/netsvc/svcserverinfo.md) | 8 | - |
| [SvcSendTable](/classes/netsvc/svcsendtable.md) | 9 | - |
| [SvcClassInfo](/classes/netsvc/svcclassinfo.md) | 10 | - |
| [SvcSetPause](/classes/netsvc/svcsetpause.md) | 11 | - |
| [SvcCreateStringTable](/classes/netsvc/svccreatestringtable.md) | 12 | - |
| [SvcUpdateStringTable](/classes/netsvc/svcupdatestringtable.md) | 13 | - |
| [SvcVoiceInit](/classes/netsvc/svcvoiceinit.md) | 14 | - |
| [SvcVoiceData](/classes/netsvc/svcvoicedata.md) | 15 | - |
| [SvcPrint](/classes/netsvc/svcprint.md) | 16 | 7 in old engine. |
| [SvcSounds](/classes/netsvc/svcsounds.md) | 17 | - |
| [SvcSetView](/classes/netsvc/svcsetview.md) | 18 | - |
| [SvcFixAngle](/classes/netsvc/svcfixangle.md) | 19 | - |
| [SvcCrosshairAngle](/classes/netsvc/svccrosshairangle.md) | 20 | - |
| [SvcBspDecal](/classes/netsvc/svcbspdecal.md) | 21 | - |
| [SvcSplitScreen](/classes/netsvc/svcsplitscreen.md) | 22 | New engine. |
| [SvcUserMessage](/classes/netsvc/svcusermessage.md) | 23 | - |
| [SvcEntityMessage](/classes/netsvc/svcentitymessage.md) | 24 | - |
| [SvcGameEvent](/classes/netsvc/svcgameevent.md) | 25 | - |
| [SvcPacketEntities](/classes/netsvc/svcpacketentities.md) | 26 | - |
| [SvcTempEntities](/classes/netsvc/svctempentities.md) | 27 | - |
| [SvcPrefetch](/classes/netsvc/svcprefetch.md) | 28 | - |
| [SvcMenu](/classes/netsvc/svcmenu.md) | 29 | - |
| [SvcGameEventList](/classes/netsvc/svcgameeventlist.md) | 30 | - |
| [SvcGetCvarValue](/classes/netsvc/svcgetcvarvalue.md) | 31 | - |
| [SvcCmdKeyValues](/classes/netsvc/svccmdkeyvalues.md) | 32 | 34 in CS:GO. |
| [SvcPaintmapData](/classes/netsvc/svcpaintmapdata.md) | 33 | New engine. |
| SvcEncryptedData | 35 | Seen in CS:GO. |
| SvcHltvReplay | 36 | Seen in CS:GO. |
| SvcBroadcastCommand | 38 | Seen in CS:GO. |
| NetPlayerAvatarData | 100 | Seen in CS:GO. |

## Pseudocode Example

```rust,noplaypen
while bits_left > 6 {
    let message_type = read_bits(6);

    read_net_or_svc_message(message_type);
}
```
