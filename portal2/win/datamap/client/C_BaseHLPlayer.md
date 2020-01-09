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
|m_Collision|[CCollisionProperty](#CCollisionProperty)|1040 \| 0x410||
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
|m_flNextAttack|float|4512 \| 0x11a0||
|m_iAmmo|integer|4516 \| 0x11a4||
|m_hMyWeapons|ehandle|4644 \| 0x1224||
|m_hActiveWeapon|ehandle|4836 \| 0x12e4||
|m_Local|[CPlayerLocalData](#CPlayerLocalData)|5016 \| 0x1398||
|pl|[CPlayerState](#CPlayerState)|5476 \| 0x1564||
|m_iFOV|integer|5496 \| 0x1578||
|m_iFOVStart|integer|5500 \| 0x157c||
|m_afButtonLast|integer|5504 \| 0x1580||
|m_afButtonPressed|integer|5508 \| 0x1584||
|m_afButtonReleased|integer|5512 \| 0x1588||
|m_nButtons|integer|5516 \| 0x158c||
|m_nImpulse|integer|5520 \| 0x1590||
|m_ladderSurfaceProps|integer|5524 \| 0x1594||
|m_flPhysics|integer|5528 \| 0x1598||
|m_flFOVTime|float|5532 \| 0x159c||
|m_flWaterJumpTime|float|5536 \| 0x15a0||
|m_flSwimSoundTime|float|5540 \| 0x15a4||
|m_flStepSoundTime|float|5544 \| 0x15a8||
|m_surfaceFriction|float|5548 \| 0x15ac||
|m_vecLadderNormal|vector|5552 \| 0x15b0||
|m_szAnimExtension|character|5564 \| 0x15bc||
|m_iBonusProgress|integer|5600 \| 0x15e0||
|m_iBonusChallenge|integer|5604 \| 0x15e4||
|m_flMaxspeed|float|5608 \| 0x15e8||
|m_hZoomOwner|ehandle|5612 \| 0x15ec||
|m_vphysicsCollisionState|integer|5628 \| 0x15fc||
|m_oldOrigin|vector|5632 \| 0x1600||
|m_bTouchedPhysObject|boolean|5644 \| 0x160c||
|m_bPhysicsWasFrozen|boolean|5645 \| 0x160d||
|m_vNewVPhysicsPosition|vector|5648 \| 0x1610||
|m_vNewVPhysicsVelocity|vector|5660 \| 0x161c||
|m_afPhysicsFlags|integer|5768 \| 0x1688||
|m_hVehicle|ehandle|5772 \| 0x168c||
|m_hLastWeapon|ehandle|5776 \| 0x1690||
|m_hViewModel|ehandle|5780 \| 0x1694||
|m_fOnTarget|boolean|5800 \| 0x16a8||
|m_nTickBase|integer|5996 \| 0x176c||
|m_vecPreviouslyPredictedOrigin|vector|6368 \| 0x18e0||
|m_HL2Local|[C_HL2PlayerLocalData](#C_HL2PlayerLocalData)|6944 \| 0x1b20||
|m_fIsSprinting|boolean|7048 \| 0x1b88||

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
|m_iHideHUD|integer|72 \| 0x48|
|m_nDuckTimeMsecs|integer|76 \| 0x4c|
|m_nDuckJumpTimeMsecs|integer|80 \| 0x50|
|m_nJumpTimeMsecs|integer|84 \| 0x54|
|m_flFallVelocity|float|88 \| 0x58|
|m_flStepSize|float|92 \| 0x5c|
|m_vecPunchAngle|vector|96 \| 0x60|
|m_vecPunchAngleVel|vector|108 \| 0x6c|
|m_bDucked|boolean|120 \| 0x78|
|m_bDucking|boolean|121 \| 0x79|
|m_bInDuckJump|boolean|122 \| 0x7a|
|m_bDrawViewmodel|boolean|123 \| 0x7b|
|m_bWearingSuit|boolean|124 \| 0x7c|
|m_bPoisoned|boolean|125 \| 0x7d|
|m_bAllowAutoMovement|boolean|126 \| 0x7e|

### CPlayerState

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|deadflag|boolean|4 \| 0x4|

### C_HL2PlayerLocalData

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_hLadder|ehandle|48 \| 0x30|
