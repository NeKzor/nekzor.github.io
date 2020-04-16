# CAI_FreePass

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_hTarget|ehandle|8 \| 0x8||
|m_FreePassTimeRemaining|float|12 \| 0xc||
|m_FreePassMoveMonitor|[CAI_MoveMonitor](#cai_movemonitor)|16 \| 0x10||
|m_Params|[AI_FreePassParams_t](#ai_freepassparams_t)|32 \| 0x20||

## Embedded

### CAI_MoveMonitor

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vMark|pos-vector|0 \| 0x0|
|m_flMarkTolerance|float|12 \| 0xc|

### AI_FreePassParams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|timeToTrigger|float|0 \| 0x0|freepass_timetotrigger
|duration|float|4 \| 0x4|freepass_duration
|moveTolerance|float|8 \| 0x8|freepass_movetolerance
|refillRate|float|12 \| 0xc|freepass_refillrate
|coverDist|float|16 \| 0x10|
|peekTime|float|20 \| 0x14|freepass_peektime
|peekTimeAfterDamage|float|24 \| 0x18|
|peekEyeDist|float|28 \| 0x1c|
|peekEyeDistZ|float|32 \| 0x20|
