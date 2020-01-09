# CBaseTeamObjectiveResource
Class client-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|m_iszWarnSound|array|0 \| 0x0|
|m_vCPPositions|array|0 \| 0x0|
|m_iTimerToShowInHUD|int|2688 \| 0xa80|
|m_iStopWatchTimer|int|2692 \| 0xa84|
|m_iNumControlPoints|int|2696 \| 0xa88|
|m_bPlayingMiniRounds|int|2704 \| 0xa90|
|m_bControlPointsReset|int|2705 \| 0xa91|
|m_iUpdateCapHudParity|int|2708 \| 0xa94|
|m_vCPPositions[0]|vector|2716 \| 0xa9c|
|m_bCPIsVisible|[m_bCPIsVisible](#m_bCPIsVisible)|2812 \| 0xafc|
|m_flLazyCapPerc|[m_flLazyCapPerc](#m_flLazyCapPerc)|2820 \| 0xb04|
|m_iTeamIcons|[m_iTeamIcons](#m_iTeamIcons)|2884 \| 0xb44|
|m_iTeamOverlays|[m_iTeamOverlays](#m_iTeamOverlays)|3140 \| 0xc44|
|m_iTeamReqCappers|[m_iTeamReqCappers](#m_iTeamReqCappers)|3396 \| 0xd44|
|m_flTeamCapTime|[m_flTeamCapTime](#m_flTeamCapTime)|3652 \| 0xe44|
|m_iPreviousPoints|[m_iPreviousPoints](#m_iPreviousPoints)|3908 \| 0xf44|
|m_bTeamCanCap|[m_bTeamCanCap](#m_bTeamCanCap)|4676 \| 0x1244|
|m_iTeamBaseIcons|[m_iTeamBaseIcons](#m_iTeamBaseIcons)|4740 \| 0x1284|
|m_iBaseControlPoints|[m_iBaseControlPoints](#m_iBaseControlPoints)|4868 \| 0x1304|
|m_bInMiniRound|[m_bInMiniRound](#m_bInMiniRound)|4996 \| 0x1384|
|m_iWarnOnCap|[m_iWarnOnCap](#m_iWarnOnCap)|5004 \| 0x138c|
|m_iszWarnSound[0]|string|5036 \| 0x13ac|
|m_flPathDistance|[m_flPathDistance](#m_flPathDistance)|7076 \| 0x1ba4|
|m_iNumTeamMembers|[m_iNumTeamMembers](#m_iNumTeamMembers)|7108 \| 0x1bc4|
|m_iCappingTeam|[m_iCappingTeam](#m_iCappingTeam)|7364 \| 0x1cc4|
|m_iTeamInZone|[m_iTeamInZone](#m_iTeamInZone)|7396 \| 0x1ce4|
|m_bBlocked|[m_bBlocked](#m_bBlocked)|7428 \| 0x1d04|
|m_iOwner|[m_iOwner](#m_iOwner)|7436 \| 0x1d0c|
|m_pszCapLayoutInHUD|string|7572 \| 0x1d94|

## Recv

### m_bCPIsVisible

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|1 \| 0x1|
|002|int|2 \| 0x2|
|003|int|3 \| 0x3|
|004|int|4 \| 0x4|
|005|int|5 \| 0x5|
|006|int|6 \| 0x6|
|007|int|7 \| 0x7|

### m_flLazyCapPerc

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|
|004|float|16 \| 0x10|
|005|float|20 \| 0x14|
|006|float|24 \| 0x18|
|007|float|28 \| 0x1c|

### m_iTeamIcons

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|
|032|int|128 \| 0x80|
|033|int|132 \| 0x84|
|034|int|136 \| 0x88|
|035|int|140 \| 0x8c|
|036|int|144 \| 0x90|
|037|int|148 \| 0x94|
|038|int|152 \| 0x98|
|039|int|156 \| 0x9c|
|040|int|160 \| 0xa0|
|041|int|164 \| 0xa4|
|042|int|168 \| 0xa8|
|043|int|172 \| 0xac|
|044|int|176 \| 0xb0|
|045|int|180 \| 0xb4|
|046|int|184 \| 0xb8|
|047|int|188 \| 0xbc|
|048|int|192 \| 0xc0|
|049|int|196 \| 0xc4|
|050|int|200 \| 0xc8|
|051|int|204 \| 0xcc|
|052|int|208 \| 0xd0|
|053|int|212 \| 0xd4|
|054|int|216 \| 0xd8|
|055|int|220 \| 0xdc|
|056|int|224 \| 0xe0|
|057|int|228 \| 0xe4|
|058|int|232 \| 0xe8|
|059|int|236 \| 0xec|
|060|int|240 \| 0xf0|
|061|int|244 \| 0xf4|
|062|int|248 \| 0xf8|
|063|int|252 \| 0xfc|

### m_iTeamOverlays

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|
|032|int|128 \| 0x80|
|033|int|132 \| 0x84|
|034|int|136 \| 0x88|
|035|int|140 \| 0x8c|
|036|int|144 \| 0x90|
|037|int|148 \| 0x94|
|038|int|152 \| 0x98|
|039|int|156 \| 0x9c|
|040|int|160 \| 0xa0|
|041|int|164 \| 0xa4|
|042|int|168 \| 0xa8|
|043|int|172 \| 0xac|
|044|int|176 \| 0xb0|
|045|int|180 \| 0xb4|
|046|int|184 \| 0xb8|
|047|int|188 \| 0xbc|
|048|int|192 \| 0xc0|
|049|int|196 \| 0xc4|
|050|int|200 \| 0xc8|
|051|int|204 \| 0xcc|
|052|int|208 \| 0xd0|
|053|int|212 \| 0xd4|
|054|int|216 \| 0xd8|
|055|int|220 \| 0xdc|
|056|int|224 \| 0xe0|
|057|int|228 \| 0xe4|
|058|int|232 \| 0xe8|
|059|int|236 \| 0xec|
|060|int|240 \| 0xf0|
|061|int|244 \| 0xf4|
|062|int|248 \| 0xf8|
|063|int|252 \| 0xfc|

### m_iTeamReqCappers

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|
|032|int|128 \| 0x80|
|033|int|132 \| 0x84|
|034|int|136 \| 0x88|
|035|int|140 \| 0x8c|
|036|int|144 \| 0x90|
|037|int|148 \| 0x94|
|038|int|152 \| 0x98|
|039|int|156 \| 0x9c|
|040|int|160 \| 0xa0|
|041|int|164 \| 0xa4|
|042|int|168 \| 0xa8|
|043|int|172 \| 0xac|
|044|int|176 \| 0xb0|
|045|int|180 \| 0xb4|
|046|int|184 \| 0xb8|
|047|int|188 \| 0xbc|
|048|int|192 \| 0xc0|
|049|int|196 \| 0xc4|
|050|int|200 \| 0xc8|
|051|int|204 \| 0xcc|
|052|int|208 \| 0xd0|
|053|int|212 \| 0xd4|
|054|int|216 \| 0xd8|
|055|int|220 \| 0xdc|
|056|int|224 \| 0xe0|
|057|int|228 \| 0xe4|
|058|int|232 \| 0xe8|
|059|int|236 \| 0xec|
|060|int|240 \| 0xf0|
|061|int|244 \| 0xf4|
|062|int|248 \| 0xf8|
|063|int|252 \| 0xfc|

### m_flTeamCapTime

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|
|004|float|16 \| 0x10|
|005|float|20 \| 0x14|
|006|float|24 \| 0x18|
|007|float|28 \| 0x1c|
|008|float|32 \| 0x20|
|009|float|36 \| 0x24|
|010|float|40 \| 0x28|
|011|float|44 \| 0x2c|
|012|float|48 \| 0x30|
|013|float|52 \| 0x34|
|014|float|56 \| 0x38|
|015|float|60 \| 0x3c|
|016|float|64 \| 0x40|
|017|float|68 \| 0x44|
|018|float|72 \| 0x48|
|019|float|76 \| 0x4c|
|020|float|80 \| 0x50|
|021|float|84 \| 0x54|
|022|float|88 \| 0x58|
|023|float|92 \| 0x5c|
|024|float|96 \| 0x60|
|025|float|100 \| 0x64|
|026|float|104 \| 0x68|
|027|float|108 \| 0x6c|
|028|float|112 \| 0x70|
|029|float|116 \| 0x74|
|030|float|120 \| 0x78|
|031|float|124 \| 0x7c|
|032|float|128 \| 0x80|
|033|float|132 \| 0x84|
|034|float|136 \| 0x88|
|035|float|140 \| 0x8c|
|036|float|144 \| 0x90|
|037|float|148 \| 0x94|
|038|float|152 \| 0x98|
|039|float|156 \| 0x9c|
|040|float|160 \| 0xa0|
|041|float|164 \| 0xa4|
|042|float|168 \| 0xa8|
|043|float|172 \| 0xac|
|044|float|176 \| 0xb0|
|045|float|180 \| 0xb4|
|046|float|184 \| 0xb8|
|047|float|188 \| 0xbc|
|048|float|192 \| 0xc0|
|049|float|196 \| 0xc4|
|050|float|200 \| 0xc8|
|051|float|204 \| 0xcc|
|052|float|208 \| 0xd0|
|053|float|212 \| 0xd4|
|054|float|216 \| 0xd8|
|055|float|220 \| 0xdc|
|056|float|224 \| 0xe0|
|057|float|228 \| 0xe4|
|058|float|232 \| 0xe8|
|059|float|236 \| 0xec|
|060|float|240 \| 0xf0|
|061|float|244 \| 0xf4|
|062|float|248 \| 0xf8|
|063|float|252 \| 0xfc|

### m_iPreviousPoints

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|
|032|int|128 \| 0x80|
|033|int|132 \| 0x84|
|034|int|136 \| 0x88|
|035|int|140 \| 0x8c|
|036|int|144 \| 0x90|
|037|int|148 \| 0x94|
|038|int|152 \| 0x98|
|039|int|156 \| 0x9c|
|040|int|160 \| 0xa0|
|041|int|164 \| 0xa4|
|042|int|168 \| 0xa8|
|043|int|172 \| 0xac|
|044|int|176 \| 0xb0|
|045|int|180 \| 0xb4|
|046|int|184 \| 0xb8|
|047|int|188 \| 0xbc|
|048|int|192 \| 0xc0|
|049|int|196 \| 0xc4|
|050|int|200 \| 0xc8|
|051|int|204 \| 0xcc|
|052|int|208 \| 0xd0|
|053|int|212 \| 0xd4|
|054|int|216 \| 0xd8|
|055|int|220 \| 0xdc|
|056|int|224 \| 0xe0|
|057|int|228 \| 0xe4|
|058|int|232 \| 0xe8|
|059|int|236 \| 0xec|
|060|int|240 \| 0xf0|
|061|int|244 \| 0xf4|
|062|int|248 \| 0xf8|
|063|int|252 \| 0xfc|
|064|int|256 \| 0x100|
|065|int|260 \| 0x104|
|066|int|264 \| 0x108|
|067|int|268 \| 0x10c|
|068|int|272 \| 0x110|
|069|int|276 \| 0x114|
|070|int|280 \| 0x118|
|071|int|284 \| 0x11c|
|072|int|288 \| 0x120|
|073|int|292 \| 0x124|
|074|int|296 \| 0x128|
|075|int|300 \| 0x12c|
|076|int|304 \| 0x130|
|077|int|308 \| 0x134|
|078|int|312 \| 0x138|
|079|int|316 \| 0x13c|
|080|int|320 \| 0x140|
|081|int|324 \| 0x144|
|082|int|328 \| 0x148|
|083|int|332 \| 0x14c|
|084|int|336 \| 0x150|
|085|int|340 \| 0x154|
|086|int|344 \| 0x158|
|087|int|348 \| 0x15c|
|088|int|352 \| 0x160|
|089|int|356 \| 0x164|
|090|int|360 \| 0x168|
|091|int|364 \| 0x16c|
|092|int|368 \| 0x170|
|093|int|372 \| 0x174|
|094|int|376 \| 0x178|
|095|int|380 \| 0x17c|
|096|int|384 \| 0x180|
|097|int|388 \| 0x184|
|098|int|392 \| 0x188|
|099|int|396 \| 0x18c|
|100|int|400 \| 0x190|
|101|int|404 \| 0x194|
|102|int|408 \| 0x198|
|103|int|412 \| 0x19c|
|104|int|416 \| 0x1a0|
|105|int|420 \| 0x1a4|
|106|int|424 \| 0x1a8|
|107|int|428 \| 0x1ac|
|108|int|432 \| 0x1b0|
|109|int|436 \| 0x1b4|
|110|int|440 \| 0x1b8|
|111|int|444 \| 0x1bc|
|112|int|448 \| 0x1c0|
|113|int|452 \| 0x1c4|
|114|int|456 \| 0x1c8|
|115|int|460 \| 0x1cc|
|116|int|464 \| 0x1d0|
|117|int|468 \| 0x1d4|
|118|int|472 \| 0x1d8|
|119|int|476 \| 0x1dc|
|120|int|480 \| 0x1e0|
|121|int|484 \| 0x1e4|
|122|int|488 \| 0x1e8|
|123|int|492 \| 0x1ec|
|124|int|496 \| 0x1f0|
|125|int|500 \| 0x1f4|
|126|int|504 \| 0x1f8|
|127|int|508 \| 0x1fc|
|128|int|512 \| 0x200|
|129|int|516 \| 0x204|
|130|int|520 \| 0x208|
|131|int|524 \| 0x20c|
|132|int|528 \| 0x210|
|133|int|532 \| 0x214|
|134|int|536 \| 0x218|
|135|int|540 \| 0x21c|
|136|int|544 \| 0x220|
|137|int|548 \| 0x224|
|138|int|552 \| 0x228|
|139|int|556 \| 0x22c|
|140|int|560 \| 0x230|
|141|int|564 \| 0x234|
|142|int|568 \| 0x238|
|143|int|572 \| 0x23c|
|144|int|576 \| 0x240|
|145|int|580 \| 0x244|
|146|int|584 \| 0x248|
|147|int|588 \| 0x24c|
|148|int|592 \| 0x250|
|149|int|596 \| 0x254|
|150|int|600 \| 0x258|
|151|int|604 \| 0x25c|
|152|int|608 \| 0x260|
|153|int|612 \| 0x264|
|154|int|616 \| 0x268|
|155|int|620 \| 0x26c|
|156|int|624 \| 0x270|
|157|int|628 \| 0x274|
|158|int|632 \| 0x278|
|159|int|636 \| 0x27c|
|160|int|640 \| 0x280|
|161|int|644 \| 0x284|
|162|int|648 \| 0x288|
|163|int|652 \| 0x28c|
|164|int|656 \| 0x290|
|165|int|660 \| 0x294|
|166|int|664 \| 0x298|
|167|int|668 \| 0x29c|
|168|int|672 \| 0x2a0|
|169|int|676 \| 0x2a4|
|170|int|680 \| 0x2a8|
|171|int|684 \| 0x2ac|
|172|int|688 \| 0x2b0|
|173|int|692 \| 0x2b4|
|174|int|696 \| 0x2b8|
|175|int|700 \| 0x2bc|
|176|int|704 \| 0x2c0|
|177|int|708 \| 0x2c4|
|178|int|712 \| 0x2c8|
|179|int|716 \| 0x2cc|
|180|int|720 \| 0x2d0|
|181|int|724 \| 0x2d4|
|182|int|728 \| 0x2d8|
|183|int|732 \| 0x2dc|
|184|int|736 \| 0x2e0|
|185|int|740 \| 0x2e4|
|186|int|744 \| 0x2e8|
|187|int|748 \| 0x2ec|
|188|int|752 \| 0x2f0|
|189|int|756 \| 0x2f4|
|190|int|760 \| 0x2f8|
|191|int|764 \| 0x2fc|

### m_bTeamCanCap

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|1 \| 0x1|
|002|int|2 \| 0x2|
|003|int|3 \| 0x3|
|004|int|4 \| 0x4|
|005|int|5 \| 0x5|
|006|int|6 \| 0x6|
|007|int|7 \| 0x7|
|008|int|8 \| 0x8|
|009|int|9 \| 0x9|
|010|int|10 \| 0xa|
|011|int|11 \| 0xb|
|012|int|12 \| 0xc|
|013|int|13 \| 0xd|
|014|int|14 \| 0xe|
|015|int|15 \| 0xf|
|016|int|16 \| 0x10|
|017|int|17 \| 0x11|
|018|int|18 \| 0x12|
|019|int|19 \| 0x13|
|020|int|20 \| 0x14|
|021|int|21 \| 0x15|
|022|int|22 \| 0x16|
|023|int|23 \| 0x17|
|024|int|24 \| 0x18|
|025|int|25 \| 0x19|
|026|int|26 \| 0x1a|
|027|int|27 \| 0x1b|
|028|int|28 \| 0x1c|
|029|int|29 \| 0x1d|
|030|int|30 \| 0x1e|
|031|int|31 \| 0x1f|
|032|int|32 \| 0x20|
|033|int|33 \| 0x21|
|034|int|34 \| 0x22|
|035|int|35 \| 0x23|
|036|int|36 \| 0x24|
|037|int|37 \| 0x25|
|038|int|38 \| 0x26|
|039|int|39 \| 0x27|
|040|int|40 \| 0x28|
|041|int|41 \| 0x29|
|042|int|42 \| 0x2a|
|043|int|43 \| 0x2b|
|044|int|44 \| 0x2c|
|045|int|45 \| 0x2d|
|046|int|46 \| 0x2e|
|047|int|47 \| 0x2f|
|048|int|48 \| 0x30|
|049|int|49 \| 0x31|
|050|int|50 \| 0x32|
|051|int|51 \| 0x33|
|052|int|52 \| 0x34|
|053|int|53 \| 0x35|
|054|int|54 \| 0x36|
|055|int|55 \| 0x37|
|056|int|56 \| 0x38|
|057|int|57 \| 0x39|
|058|int|58 \| 0x3a|
|059|int|59 \| 0x3b|
|060|int|60 \| 0x3c|
|061|int|61 \| 0x3d|
|062|int|62 \| 0x3e|
|063|int|63 \| 0x3f|

### m_iTeamBaseIcons

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|

### m_iBaseControlPoints

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|

### m_bInMiniRound

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|1 \| 0x1|
|002|int|2 \| 0x2|
|003|int|3 \| 0x3|
|004|int|4 \| 0x4|
|005|int|5 \| 0x5|
|006|int|6 \| 0x6|
|007|int|7 \| 0x7|

### m_iWarnOnCap

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|

### m_flPathDistance

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|
|004|float|16 \| 0x10|
|005|float|20 \| 0x14|
|006|float|24 \| 0x18|
|007|float|28 \| 0x1c|

### m_iNumTeamMembers

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|
|032|int|128 \| 0x80|
|033|int|132 \| 0x84|
|034|int|136 \| 0x88|
|035|int|140 \| 0x8c|
|036|int|144 \| 0x90|
|037|int|148 \| 0x94|
|038|int|152 \| 0x98|
|039|int|156 \| 0x9c|
|040|int|160 \| 0xa0|
|041|int|164 \| 0xa4|
|042|int|168 \| 0xa8|
|043|int|172 \| 0xac|
|044|int|176 \| 0xb0|
|045|int|180 \| 0xb4|
|046|int|184 \| 0xb8|
|047|int|188 \| 0xbc|
|048|int|192 \| 0xc0|
|049|int|196 \| 0xc4|
|050|int|200 \| 0xc8|
|051|int|204 \| 0xcc|
|052|int|208 \| 0xd0|
|053|int|212 \| 0xd4|
|054|int|216 \| 0xd8|
|055|int|220 \| 0xdc|
|056|int|224 \| 0xe0|
|057|int|228 \| 0xe4|
|058|int|232 \| 0xe8|
|059|int|236 \| 0xec|
|060|int|240 \| 0xf0|
|061|int|244 \| 0xf4|
|062|int|248 \| 0xf8|
|063|int|252 \| 0xfc|

### m_iCappingTeam

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|

### m_iTeamInZone

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|

### m_bBlocked

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|1 \| 0x1|
|002|int|2 \| 0x2|
|003|int|3 \| 0x3|
|004|int|4 \| 0x4|
|005|int|5 \| 0x5|
|006|int|6 \| 0x6|
|007|int|7 \| 0x7|

### m_iOwner

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
