# C_BaseHLPlayer

Datamap client-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vecAbsVelocity|vector|144 \| 0x90||
|m_vecAbsOrigin|vector|156 \| 0x9c||
|m_vecOrigin|vector|168 \| 0xa8||
|m_vecAngVelocity|vector|180 \| 0xb4||
|m_angAbsRotation|vector|192 \| 0xc0||
|m_angRotation|vector|204 \| 0xcc||
|m_flGravity|float|216 \| 0xd8||
|m_flProxyRandomValue|float|220 \| 0xdc||
|m_iEFlags|integer|224 \| 0xe0||
|m_nWaterType|character|228 \| 0xe4||
|m_fEffects|integer|232 \| 0xe8||
|m_iTeamNum|integer|236 \| 0xec||
|m_nNextThinkTick|integer|240 \| 0xf0||
|m_iHealth|integer|244 \| 0xf4||
|m_iHealth|integer|244 \| 0xf4||
|m_fFlags|integer|248 \| 0xf8||
|m_vecViewOffset|vector|252 \| 0xfc||
|m_vecVelocity|vector|264 \| 0x108||
|m_vecBaseVelocity|vector|276 \| 0x114||
|m_vecBaseVelocity|vector|276 \| 0x114||
|m_angNetworkAngles|vector|288 \| 0x120||
|m_vecNetworkOrigin|vector|300 \| 0x12c||
|m_flFriction|float|312 \| 0x138||
|m_hNetworkMoveParent|ehandle|316 \| 0x13c||
|m_hOwnerEntity|ehandle|320 \| 0x140||
|m_hGroundEntity|ehandle|324 \| 0x144||
|m_hGroundEntity|ehandle|324 \| 0x144||
|m_nModelIndex|short|848 \| 0x350||
|m_nRenderFX|character|850 \| 0x352||
|m_nRenderMode|character|851 \| 0x353||
|m_MoveType|character|852 \| 0x354||
|m_MoveCollide|character|853 \| 0x355||
|m_nWaterLevel|character|854 \| 0x356||
|m_nWaterLevel|character|854 \| 0x356||
|m_lifeState|character|855 \| 0x357||
|m_Collision|[CCollisionProperty](#ccollisionproperty)|1040 \| 0x410||
|m_bEverHadPredictionErrorsForThisCommand|boolean|2604 \| 0xa2c||
|m_nPrevSequence|integer|2720 \| 0xaa0||
|m_flCycle|float|2724 \| 0xaa4||
|m_flPlaybackRate|float|2728 \| 0xaa8||
|m_nSkin|integer|2732 \| 0xaac||
|m_nBody|integer|2736 \| 0xab0||
|m_nNewSequenceParity|integer|2740 \| 0xab4||
|m_nResetEventsParity|integer|2744 \| 0xab8||
|m_flEncodedController|float|2756 \| 0xac4||
|m_nMuzzleFlashParity|character|2772 \| 0xad4||
|m_nSequence|integer|3316 \| 0xcf4||
|m_flNextAttack|float|4624 \| 0x1210||
|m_iAmmo|integer|4628 \| 0x1214||
|m_hMyWeapons|ehandle|4756 \| 0x1294||
|m_hActiveWeapon|ehandle|4948 \| 0x1354||
|m_Local|[CPlayerLocalData](#cplayerlocaldata)|5104 \| 0x13f0||
|pl|[CPlayerState](#cplayerstate)|5576 \| 0x15c8||
|m_iFOV|float|5596 \| 0x15dc||
|m_iFOVStart|float|5600 \| 0x15e0||
|m_afButtonLast|integer|5608 \| 0x15e8||
|m_afButtonPressed|integer|5612 \| 0x15ec||
|m_afButtonReleased|integer|5616 \| 0x15f0||
|m_nButtons|integer|5620 \| 0x15f4||
|m_nImpulse|integer|5624 \| 0x15f8||
|m_ladderSurfaceProps|integer|5628 \| 0x15fc||
|m_flPhysics|integer|5632 \| 0x1600||
|m_flFOVTime|float|5636 \| 0x1604||
|m_flWaterJumpTime|float|5640 \| 0x1608||
|m_flSwimSoundTime|float|5644 \| 0x160c||
|m_flStepSoundTime|float|5648 \| 0x1610||
|m_surfaceFriction|float|5652 \| 0x1614||
|m_vecLadderNormal|vector|5656 \| 0x1618||
|m_szAnimExtension|character|5668 \| 0x1624||
|m_iBonusProgress|integer|5704 \| 0x1648||
|m_iBonusChallenge|integer|5708 \| 0x164c||
|m_flMaxspeed|float|5712 \| 0x1650||
|m_hZoomOwner|ehandle|5716 \| 0x1654||
|m_vphysicsCollisionState|integer|5732 \| 0x1664||
|m_oldOrigin|vector|5736 \| 0x1668||
|m_bTouchedPhysObject|boolean|5748 \| 0x1674||
|m_bPhysicsWasFrozen|boolean|5749 \| 0x1675||
|m_vNewVPhysicsPosition|vector|5752 \| 0x1678||
|m_vNewVPhysicsVelocity|vector|5764 \| 0x1684||
|m_afPhysicsFlags|integer|5892 \| 0x1704||
|m_hVehicle|ehandle|5896 \| 0x1708||
|m_hLastWeapon|ehandle|5900 \| 0x170c||
|m_hViewModel|ehandle|5904 \| 0x1710||
|m_fOnTarget|boolean|5924 \| 0x1724||
|m_nTickBase|integer|6248 \| 0x1868||
|m_vecPreviouslyPredictedOrigin|vector|6512 \| 0x1970||
|m_HL2Local|[C_HL2PlayerLocalData](#c_hl2playerlocaldata)|7088 \| 0x1bb0||
|m_fIsSprinting|boolean|7192 \| 0x1c18||

## Embedded

### CCollisionProperty

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vecMins|vector|8 \| 0x8|
|m_vecMaxs|vector|20 \| 0x14|
|m_usSolidFlags|short|32 \| 0x20|
|m_nSolidType|character|34 \| 0x22|
|m_triggerBloat|character|35 \| 0x23|

### CPlayerLocalData

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_nStepside|integer|60 \| 0x3c|
|m_nOldButtons|integer|64 \| 0x40|
|m_flFOVRate|float|68 \| 0x44|
|m_bFOVSmooth|boolean|72 \| 0x48|
|m_iHideHUD|integer|76 \| 0x4c|
|m_nDuckTimeMsecs|integer|80 \| 0x50|
|m_nDuckJumpTimeMsecs|integer|84 \| 0x54|
|m_nJumpTimeMsecs|integer|88 \| 0x58|
|m_flFallVelocity|float|92 \| 0x5c|
|m_flStepSize|float|96 \| 0x60|
|m_vecPunchAngle|vector|100 \| 0x64|
|m_vecPunchAngleVel|vector|112 \| 0x70|
|m_bDucked|boolean|124 \| 0x7c|
|m_bDucking|boolean|125 \| 0x7d|
|m_bInDuckJump|boolean|126 \| 0x7e|
|m_bDrawViewmodel|boolean|128 \| 0x80|
|m_bWearingSuit|boolean|129 \| 0x81|
|m_bPoisoned|boolean|130 \| 0x82|
|m_bAllowAutoMovement|boolean|131 \| 0x83|

### CPlayerState

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|deadflag|boolean|4 \| 0x4|

### C_HL2PlayerLocalData

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_hLadder|ehandle|48 \| 0x30|
