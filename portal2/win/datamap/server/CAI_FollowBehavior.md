# CAI_FollowBehavior
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_ScheduleChannels|custom|12 \| 0xc||
|m_hFollowTarget|ehandle|48 \| 0x30||
|m_FollowNavGoal|[AI_FollowNavInfo_t](#AI_FollowNavInfo_t)|52 \| 0x34||
|m_flTimeUpdatedFollowPosition|time|108 \| 0x6c||
|m_bFirstFacing|boolean|112 \| 0x70||
|m_flTimeFollowTargetVisible|time|116 \| 0x74||
|m_TargetMonitor|[CAI_MoveMonitor](#CAI_MoveMonitor)|120 \| 0x78||
|m_bTargetUnreachable|boolean|136 \| 0x88||
|m_bFollowNavFailed|boolean|137 \| 0x89||
|m_nFailedFollowAttempts|integer|140 \| 0x8c||
|m_flTimeFailFollowStarted|time|144 \| 0x90||
|m_vFollowMoveAnchor|pos-vector|148 \| 0x94||
|m_bMovingToCover|boolean|160 \| 0xa0||
|m_flOriginalEnemyDiscardTime|float|164 \| 0xa4||
|m_SavedDistTooFar|float|168 \| 0xa8||
|m_FollowDelay|[CRandStopwatch](#CRandStopwatch)|172 \| 0xac||
|m_RepathOnFollowTimer|[CSimpleSimTimer](#CSimpleSimTimer)|188 \| 0xbc||
|m_CurrentFollowActivity|custom|192 \| 0xc0||
|m_TimeBlockUseWaitPoint|[CRandSimTimer](#CRandSimTimer)|196 \| 0xc4||
|m_TimeCheckForWaitPoint|[CSimTimer](#CSimTimer)|208 \| 0xd0||
|m_pInterruptWaitPoint|classptr|216 \| 0xd8||
|m_TimeBeforeSpreadFacing|[CRandSimTimer](#CRandSimTimer)|220 \| 0xdc||
|m_TimeNextSpreadFacing|[CRandSimTimer](#CRandSimTimer)|232 \| 0xe8||
|m_params|[AI_FollowParams_t](#AI_FollowParams_t)|252 \| 0xfc||
|m_hFollowGoalEnt|ehandle|260 \| 0x104||

## Embedded

### AI_FollowNavInfo_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|flags|integer|0 \| 0x0|
|position|pos-vector|4 \| 0x4|
|range|float|16 \| 0x10|
|Zrange|float|20 \| 0x14|
|tolerance|float|24 \| 0x18|
|followPointTolerance|float|28 \| 0x1c|
|targetMoveTolerance|float|32 \| 0x20|
|repathOnRouteTolerance|float|36 \| 0x24|
|walkTolerance|float|40 \| 0x28|
|coverTolerance|float|44 \| 0x2c|
|enemyLOSTolerance|float|48 \| 0x30|
|chaseEnemyTolerance|float|52 \| 0x34|

### CAI_MoveMonitor

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vMark|pos-vector|0 \| 0x0|
|m_flMarkTolerance|float|12 \| 0xc|

### CRandStopwatch

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_next|time|0 \| 0x0|
|m_fIsRunning|boolean|4 \| 0x4|
|m_minInterval|float|8 \| 0x8|
|m_maxInterval|float|12 \| 0xc|

### CSimpleSimTimer

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_next|time|0 \| 0x0|

### CRandSimTimer

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_next|time|0 \| 0x0|
|m_minInterval|float|4 \| 0x4|
|m_maxInterval|float|8 \| 0x8|

### CSimTimer

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_next|time|0 \| 0x0|
|m_interval|float|4 \| 0x4|

### CRandSimTimer

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_next|time|0 \| 0x0|
|m_minInterval|float|4 \| 0x4|
|m_maxInterval|float|8 \| 0x8|

### CRandSimTimer

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_next|time|0 \| 0x0|
|m_minInterval|float|4 \| 0x4|
|m_maxInterval|float|8 \| 0x8|

### AI_FollowParams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|formation|integer|0 \| 0x0|
|bNormalMemoryDiscard|boolean|4 \| 0x4|
