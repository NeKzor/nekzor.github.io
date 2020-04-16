# ScriptedNPCInteraction_t

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|iszInteractionName|string|0 \| 0x0||
|iFlags|integer|4 \| 0x4||
|iTriggerMethod|integer|8 \| 0x8||
|iLoopBreakTriggerMethod|integer|12 \| 0xc||
|vecRelativeOrigin|vector|16 \| 0x10||
|angRelativeAngles|vector|28 \| 0x1c||
|vecRelativeVelocity|vector|40 \| 0x28||
|flCameraDistance|float|52 \| 0x34||
|angCameraAngles|vector|56 \| 0x38||
|flDelay|float|68 \| 0x44||
|flDistSqr|float|72 \| 0x48||
|iszMyWeapon|string|76 \| 0x4c||
|iszTheirWeapon|string|80 \| 0x50||
|sPhases|[ScriptedNPCInteraction_Phases_t](#scriptednpcinteraction_phases_t)|84 \| 0x54||
|matDesiredLocalToWorld|vmatrix|108 \| 0x6c||
|bValidOnCurrentEnemy|boolean|172 \| 0xac||
|flNextAttemptTime|time|176 \| 0xb0||

## Embedded

### ScriptedNPCInteraction_Phases_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|iszSequence|string|0 \| 0x0|
|iActivity|integer|4 \| 0x4|
