# CAI_Navigator

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_navType|integer|12 \| 0xc||
|m_fNavComplete|boolean|16 \| 0x10||
|m_bLastNavFailed|boolean|17 \| 0x11||
|m_pPath|[CAI_Path](#cai_path)|36 \| 0x24||
|m_bValidateActivitySpeed|boolean|56 \| 0x38||
|m_bCalledStartMove|boolean|57 \| 0x39||
|m_bNotOnNetwork|boolean|58 \| 0x3a||
|m_flNextSimplifyTime|time|60 \| 0x3c||
|m_bForcedSimplify|boolean|64 \| 0x40||
|m_flLastSuccessfulSimplifyTime|time|68 \| 0x44||
|m_flTimeLastAvoidanceTriangulate|time|72 \| 0x48||
|m_timePathRebuildMax|float|76 \| 0x4c||
|m_timePathRebuildDelay|float|80 \| 0x50||
|m_timePathRebuildFail|time|84 \| 0x54||
|m_timePathRebuildNext|time|88 \| 0x58||
|m_fRememberStaleNodes|boolean|92 \| 0x5c||
|m_bNoPathcornerPathfinds|boolean|93 \| 0x5d||
|m_hBigStepGroundEnt|ehandle|124 \| 0x7c||
|m_hLastBlockingEnt|ehandle|128 \| 0x80||

## Embedded

### CAI_Path

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_goalTolerance|float|4 \| 0x4|
|m_activity|custom|8 \| 0x8|
|m_sequence|integer|12 \| 0xc|
|m_target|ehandle|16 \| 0x10|
|m_vecTargetOffset|vector|20 \| 0x14|
|m_waypointTolerance|float|32 \| 0x20|
|m_arrivalActivity|custom|36 \| 0x24|
|m_arrivalSequence|integer|40 \| 0x28|
|m_bGoalPosSet|boolean|48 \| 0x30|
|m_goalPos|pos-vector|52 \| 0x34|
|m_bGoalTypeSet|boolean|64 \| 0x40|
|m_goalType|integer|68 \| 0x44|
|m_goalFlags|integer|72 \| 0x48|
|m_routeStartTime|time|76 \| 0x4c|
|m_goalDirection|vector|80 \| 0x50|
|m_goalDirectionTarget|ehandle|92 \| 0x5c|
|m_goalSpeed|float|96 \| 0x60|
|m_goalSpeedTarget|ehandle|100 \| 0x64|
|m_goalStoppingDistance|float|104 \| 0x68|
