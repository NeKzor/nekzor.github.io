# HintNodeData

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|strEntityName|string|0 \| 0x0||
|nHintType|short|16 \| 0x10|hinttype|
|nNodeID|integer|20 \| 0x14||
|strGroup|string|24 \| 0x18|Group|
|iDisabled|integer|28 \| 0x1c|StartHintDisabled|
|iszGenericType|string|32 \| 0x20|generictype|
|iszActivityName|string|36 \| 0x24|hintactivity|
|nTargetWCNodeID|integer|40 \| 0x28|TargetNode|
|fIgnoreFacing|integer|44 \| 0x2c|IgnoreFacing|
|minState|integer|48 \| 0x30|MinimumState|
|maxState|integer|52 \| 0x34|MaximumState|
|nRadius|integer|56 \| 0x38|radius|
|nWCNodeID|integer|60 \| 0x3c|nodeid|
