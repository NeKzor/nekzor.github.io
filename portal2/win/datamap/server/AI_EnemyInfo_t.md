# AI_EnemyInfo_t

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|hEnemy|ehandle|0 \| 0x0||
|vLastKnownLocation|pos-vector|4 \| 0x4||
|vLastSeenLocation|pos-vector|16 \| 0x10||
|timeLastSeen|time|28 \| 0x1c||
|timeFirstSeen|time|32 \| 0x20||
|timeLastReacquired|time|36 \| 0x24||
|timeValidEnemy|time|40 \| 0x28||
|timeLastReceivedDamageFrom|time|44 \| 0x2c||
|timeAtFirstHand|time|48 \| 0x30||
|nFaction|integer|52 \| 0x34||
|bDangerMemory|boolean|56 \| 0x38||
|bEludedMe|boolean|57 \| 0x39||
|bUnforgettable|boolean|58 \| 0x3a||
|bMobbedMe|boolean|59 \| 0x3b||
