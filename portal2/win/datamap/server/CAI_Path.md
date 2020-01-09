# CAI_Path
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_goalTolerance|float|4 \| 0x4||
|m_activity|custom|8 \| 0x8||
|m_sequence|integer|12 \| 0xc||
|m_target|ehandle|16 \| 0x10||
|m_vecTargetOffset|vector|20 \| 0x14||
|m_waypointTolerance|float|32 \| 0x20||
|m_arrivalActivity|custom|36 \| 0x24||
|m_arrivalSequence|integer|40 \| 0x28||
|m_bGoalPosSet|boolean|48 \| 0x30||
|m_goalPos|pos-vector|52 \| 0x34||
|m_bGoalTypeSet|boolean|64 \| 0x40||
|m_goalType|integer|68 \| 0x44||
|m_goalFlags|integer|72 \| 0x48||
|m_routeStartTime|time|76 \| 0x4c||
|m_goalDirection|vector|80 \| 0x50||
|m_goalDirectionTarget|ehandle|92 \| 0x5c||
|m_goalSpeed|float|96 \| 0x60||
|m_goalSpeedTarget|ehandle|100 \| 0x64||
|m_goalStoppingDistance|float|104 \| 0x68||
