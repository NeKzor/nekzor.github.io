# CAI_Agent

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_IdealSchedule|integer|8 \| 0x8||
|m_ScheduleState|[AIAgentScheduleState_t](#aiagentschedulestate_t)|12 \| 0xc||
|m_failSchedule|integer|40 \| 0x28||
|m_bForceConditionsGather|boolean|172 \| 0xac||
|m_bConditionsGathered|boolean|173 \| 0xad||

## Embedded

### AIAgentScheduleState_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|iCurTask|integer|0 \| 0x0|
|fTaskStatus|integer|4 \| 0x4|
|timeStarted|time|8 \| 0x8|
|timeCurTaskStarted|time|12 \| 0xc|
|taskFailureCode|integer|16 \| 0x10|
|iTaskInterrupt|integer|20 \| 0x14|
|bScheduleWasInterrupted|boolean|24 \| 0x18|
