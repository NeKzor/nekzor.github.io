# AIScheduleState_t
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|iCurTask|integer|0 \| 0x0||
|fTaskStatus|integer|4 \| 0x4||
|timeStarted|time|8 \| 0x8||
|timeCurTaskStarted|time|12 \| 0xc||
|taskFailureCode|integer|16 \| 0x10||
|iTaskInterrupt|integer|20 \| 0x14||
|bTaskRanAutomovement|boolean|24 \| 0x18||
|bTaskUpdatedYaw|boolean|25 \| 0x19||
|bScheduleWasInterrupted|boolean|26 \| 0x1a||
