# C_Portal_Player

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
|m_flCycle|float|2724 \| 0xaa4||
|m_flPlaybackRate|float|2728 \| 0xaa8||
|m_flPlaybackRate|float|2728 \| 0xaa8||
|m_nSkin|integer|2732 \| 0xaac||
|m_nSkin|integer|2732 \| 0xaac||
|m_nBody|integer|2736 \| 0xab0||
|m_nBody|integer|2736 \| 0xab0||
|m_nNewSequenceParity|integer|2740 \| 0xab4||
|m_nNewSequenceParity|integer|2740 \| 0xab4||
|m_nResetEventsParity|integer|2744 \| 0xab8||
|m_nResetEventsParity|integer|2744 \| 0xab8||
|m_flEncodedController|float|2756 \| 0xac4||
|m_flEncodedController|float|2756 \| 0xac4||
|m_nMuzzleFlashParity|character|2772 \| 0xad4||
|m_nSequence|integer|3316 \| 0xcf4||
|m_nSequence|integer|3316 \| 0xcf4||
|m_flNextAttack|float|4512 \| 0x11a0||
|m_iAmmo|integer|4516 \| 0x11a4||
|m_hMyWeapons|ehandle|4644 \| 0x1224||
|m_hActiveWeapon|ehandle|4836 \| 0x12e4||
|m_Local|[CPlayerLocalData](#cplayerlocaldata)|5016 \| 0x1398||
|pl|[CPlayerState](#cplayerstate)|5476 \| 0x1564||
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
|m_PaintPowers[BOUNCE_POWER]|[PaintPowerInfo_t](#paintpowerinfo_t)|6956 \| 0x1b2c||
|m_PaintPowers[SPEED_POWER]|[PaintPowerInfo_t](#paintpowerinfo_t)|7044 \| 0x1b84||
|m_PaintPowers[NO_POWER]|[PaintPowerInfo_t](#paintpowerinfo_t)|7132 \| 0x1bdc||
|m_hPortalEnvironment|ehandle|7256 \| 0x1c58||
|m_PortalLocal|[C_PortalPlayerLocalData](#c_portalplayerlocaldata)|7272 \| 0x1c68||
|m_flHullHeight|float|7808 \| 0x1e80||
|m_fLatestServerTeleport|float|8892 \| 0x22bc||
|m_matLatestServerTeleportationInverseMatrix|vmatrix|8896 \| 0x22c0||
|m_CachedJumpPower|[PaintPowerInfo_t](#paintpowerinfo_t)|8960 \| 0x2300||
|m_flCachedJumpPowerTime|float|9040 \| 0x2350||
|m_flUsePostTeleportationBoxTime|float|9044 \| 0x2354||
|m_flSpeedDecelerationTime|float|9048 \| 0x2358||
|m_bJumpWasPressedWhenForced|boolean|9058 \| 0x2362||

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

### PaintPowerInfo_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_SurfaceNormal|vector|4 \| 0x4|
|m_ContactPoint|vector|16 \| 0x10|
|m_PaintPowerType|integer|28 \| 0x1c|
|m_HandleToOther|ehandle|32 \| 0x20|
|m_State|integer|36 \| 0x24|
|m_IsOnThinSurface|boolean|40 \| 0x28|

### PaintPowerInfo_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_SurfaceNormal|vector|4 \| 0x4|
|m_ContactPoint|vector|16 \| 0x10|
|m_PaintPowerType|integer|28 \| 0x1c|
|m_HandleToOther|ehandle|32 \| 0x20|
|m_State|integer|36 \| 0x24|
|m_IsOnThinSurface|boolean|40 \| 0x28|

### PaintPowerInfo_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_SurfaceNormal|vector|4 \| 0x4|
|m_ContactPoint|vector|16 \| 0x10|
|m_PaintPowerType|integer|28 \| 0x1c|
|m_HandleToOther|ehandle|32 \| 0x20|
|m_State|integer|36 \| 0x24|
|m_IsOnThinSurface|boolean|40 \| 0x28|

### C_PortalPlayerLocalData

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_StickNormal|vector|160 \| 0xa0|
|m_OldStickNormal|vector|172 \| 0xac|
|m_vPreUpdateVelocity|vector|184 \| 0xb8|
|m_Up|vector|196 \| 0xc4|
|m_vStickRotationAxis|vector|208 \| 0xd0|
|m_StandHullMin|vector|220 \| 0xdc|
|m_StandHullMax|vector|232 \| 0xe8|
|m_DuckHullMin|vector|244 \| 0xf4|
|m_DuckHullMax|vector|256 \| 0x100|
|m_CachedStandHullMinAttempt|vector|268 \| 0x10c|
|m_CachedStandHullMaxAttempt|vector|280 \| 0x118|
|m_CachedDuckHullMinAttempt|vector|292 \| 0x124|
|m_CachedDuckHullMaxAttempt|vector|304 \| 0x130|
|m_vLocalUp|vector|316 \| 0x13c|
|m_vEyeOffset|vector|328 \| 0x148|
|m_qQuaternionPunch|vector|340 \| 0x154|
|m_flAirInputScale|float|368 \| 0x170|
|m_flCurrentStickTime|float|372 \| 0x174|
|m_nStickCameraState|integer|376 \| 0x178|
|m_InAirState|integer|380 \| 0x17c|
|m_bDoneStickInterp|boolean|384 \| 0x180|
|m_bDoneCorrectPitch|boolean|385 \| 0x181|
|m_bJumpedThisFrame|boolean|387 \| 0x183|
|m_bBouncedThisFrame|boolean|388 \| 0x184|
|m_bDuckedInAir|boolean|389 \| 0x185|
|m_hTractorBeam|ehandle|392 \| 0x188|
|m_bZoomedIn|boolean|400 \| 0x190|
|m_fBouncedTime|float|404 \| 0x194|
|m_bPreventedCrouchJumpThisFrame|boolean|408 \| 0x198|

### PaintPowerInfo_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_SurfaceNormal|vector|4 \| 0x4|
|m_ContactPoint|vector|16 \| 0x10|
|m_PaintPowerType|integer|28 \| 0x1c|
|m_HandleToOther|ehandle|32 \| 0x20|
|m_State|integer|36 \| 0x24|
|m_IsOnThinSurface|boolean|40 \| 0x28|
