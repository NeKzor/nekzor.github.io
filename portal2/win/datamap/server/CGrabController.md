# CGrabController
Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_shadow|[game_shadowcontrol_params_t](#game_shadowcontrol_params_t)|4 \| 0x4||
|m_savedRotDamping|float|52 \| 0x34||
|m_savedMass|float|4148 \| 0x1034||
|m_timeToArrive|float|8244 \| 0x2034||
|m_errorTime|float|8248 \| 0x2038||
|m_error|float|8252 \| 0x203c||
|m_contactAmount|float|8256 \| 0x2040||
|m_angleAlignment|float|8260 \| 0x2044||
|m_bCarriedEntityBlocksLOS|boolean|8264 \| 0x2048||
|m_bIgnoreRelativePitch|boolean|8265 \| 0x2049||
|m_flLoadWeight|float|8268 \| 0x204c||
|m_bWasDragEnabled|boolean|8272 \| 0x2050||
|m_attachedEntity|ehandle|8276 \| 0x2054||
|m_vecPreferredCarryAngles|vector|8280 \| 0x2058||
|m_bHasPreferredCarryAngles|boolean|8292 \| 0x2064||
|m_flDistanceOffset|float|8296 \| 0x2068||
|m_attachedAnglesPlayerSpace|vector|8300 \| 0x206c||
|m_attachedPositionObjectSpace|vector|8312 \| 0x2078||
|m_bAllowObjectOverhead|boolean|8328 \| 0x2088||
|m_hHoldingPlayer|ehandle|8340 \| 0x2094||
|m_flAngleOffset|float|8344 \| 0x2098||
|m_flLengthOffset|float|8348 \| 0x209c||
|m_flTimeOffset|float|8352 \| 0x20a0||
|m_preVMModeCollisionGroup|integer|8356 \| 0x20a4||
|m_prePickupCollisionGroup|integer|8360 \| 0x20a8||
|m_oldTransmitState|integer|8364 \| 0x20ac||
|m_bOldShadowState|boolean|8368 \| 0x20b0||
|m_hOldLightingOrigin|ehandle|8372 \| 0x20b4||

## Embedded

### game_shadowcontrol_params_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|targetPosition|pos-vector|0 \| 0x0|
|targetRotation|vector|12 \| 0xc|
|maxAngular|float|24 \| 0x18|
|maxDampAngular|float|28 \| 0x1c|
|maxSpeed|float|32 \| 0x20|
|maxDampSpeed|float|36 \| 0x24|
|dampFactor|float|40 \| 0x28|
|teleportDistance|float|44 \| 0x2c|
