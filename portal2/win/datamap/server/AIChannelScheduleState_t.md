# AIChannelScheduleState_t

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|bActive|boolean|0 \| 0x0||
|iCurTask|integer|16 \| 0x10||
|fTaskStatus|integer|20 \| 0x14||
|timeStarted|time|24 \| 0x18||
|timeCurTaskStarted|time|28 \| 0x1c||
|taskFailureCode|integer|32 \| 0x20||
|bScheduleWasInterrupted|boolean|36 \| 0x24||
