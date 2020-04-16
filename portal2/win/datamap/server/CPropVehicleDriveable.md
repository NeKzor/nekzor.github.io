# CPropVehicleDriveable

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|CBaseEntityScriptThink|void|0 \| 0x0||
|CBaseEntityShadowCastDistThink|void|0 \| 0x0||
|CBaseEntitySUB_CallUseToggle|void|0 \| 0x0||
|CBaseEntitySUB_DoNothing|void|0 \| 0x0||
|CBaseEntitySUB_FadeOut|void|0 \| 0x0||
|CBaseEntitySUB_Remove|void|0 \| 0x0||
|CBaseEntitySUB_StartFadeOut|void|0 \| 0x0||
|CBaseEntitySUB_StartFadeOutInstant|void|0 \| 0x0||
|CBaseEntitySUB_Vanish|void|0 \| 0x0||
|InputAction|float|0 \| 0x0|Action|
|InputAddContext|string|0 \| 0x0|AddContext|
|InputAddOutput|string|0 \| 0x0|AddOutput|
|InputAlpha|integer|0 \| 0x0|Alpha|
|InputAlternativeSorting|boolean|0 \| 0x0|AlternativeSorting|
|InputBecomeRagdoll|void|0 \| 0x0|BecomeRagdoll|
|InputCallScriptFunction|string|0 \| 0x0|CallScriptFunction|
|InputClearContext|string|0 \| 0x0|ClearContext|
|InputClearParent|void|0 \| 0x0|ClearParent|
|InputColor|color32|0 \| 0x0|Color|
|InputDisableDamageForces|void|0 \| 0x0|DisableDamageForces|
|InputDisableDraw|void|0 \| 0x0|DisableDraw|
|InputDisableDrawInFastReflection|void|0 \| 0x0|DisableDrawInFastReflection|
|InputDisableReceivingFlashlight|void|0 \| 0x0|DisableReceivingFlashlight|
|InputDisableShadow|void|0 \| 0x0|DisableShadow|
|InputDispatchResponse|string|0 \| 0x0|DispatchResponse|
|InputEnableDamageForces|void|0 \| 0x0|EnableDamageForces|
|InputEnableDraw|void|0 \| 0x0|EnableDraw|
|InputEnableDrawInFastReflection|void|0 \| 0x0|EnableDrawInFastReflection|
|InputEnableReceivingFlashlight|void|0 \| 0x0|EnableReceivingFlashlight|
|InputEnableShadow|void|0 \| 0x0|EnableShadow|
|InputFireUser1|string|0 \| 0x0|FireUser1|
|InputFireUser2|string|0 \| 0x0|FireUser2|
|InputFireUser3|string|0 \| 0x0|FireUser3|
|InputFireUser4|string|0 \| 0x0|FireUser4|
|InputHandBrakeOff|void|0 \| 0x0|HandBrakeOff|
|InputHandBrakeOn|void|0 \| 0x0|HandBrakeOn|
|InputIgnite|integer|0 \| 0x0|IgniteNumHitboxFires|
|InputIgnite|void|0 \| 0x0|Ignite|
|InputIgnite|float|0 \| 0x0|IgniteHitboxFireScale|
|InputIgniteLifetime|float|0 \| 0x0|IgniteLifetime|
|InputKill|void|0 \| 0x0|Kill|
|InputKillHierarchy|void|0 \| 0x0|KillHierarchy|
|InputLock|void|0 \| 0x0|Lock|
|InputRemoveContext|string|0 \| 0x0|RemoveContext|
|InputRemovePaint|void|0 \| 0x0|RemovePaint|
|InputRunScript|string|0 \| 0x0|RunScriptCode|
|InputRunScriptFile|string|0 \| 0x0|RunScriptFile|
|InputSetDamageFilter|string|0 \| 0x0|SetDamageFilter|
|InputSetLightingOrigin|string|0 \| 0x0|SetLightingOrigin|
|InputSetLightingOriginRelative|string|0 \| 0x0|SetLightingOriginHack|
|InputSetLocalAngles|string|0 \| 0x0|SetLocalAngles|
|InputSetLocalOrigin|string|0 \| 0x0|SetLocalOrigin|
|InputSetParent|string|0 \| 0x0|SetParent|
|InputSetParentAttachment|string|0 \| 0x0|SetParentAttachment|
|InputSetParentAttachmentMaintainOffset|string|0 \| 0x0|SetParentAttachmentMaintainOffset|
|InputSetTeam|integer|0 \| 0x0|SetTeam|
|InputSteering|float|0 \| 0x0|Steer|
|InputThrottle|float|0 \| 0x0|Throttle|
|InputTurnOff|void|0 \| 0x0|TurnOff|
|InputTurnOn|void|0 \| 0x0|TurnOn|
|InputUnlock|void|0 \| 0x0|Unlock|
|InputUse|void|0 \| 0x0|Use|
|m_iObjectCapsCache|integer|4 \| 0x4||
|m_pfnMoveDone|function|8 \| 0x8||
|m_pfnThink|function|12 \| 0xc||
|m_Network|[CServerNetworkProperty](#cservernetworkproperty)|16 \| 0x10||
|m_iClassname|string|96 \| 0x60|classname|
|m_flPrevAnimTime|time|100 \| 0x64||
|m_flAnimTime|time|104 \| 0x68||
|m_flSimulationTime|time|108 \| 0x6c||
|m_nLastThinkTick|tick|112 \| 0x70||
|touchStamp|integer|116 \| 0x74||
|m_aThinkFunctions|custom|120 \| 0x78||
|m_ResponseContexts|custom|140 \| 0x8c||
|m_iszResponseContext|string|160 \| 0xa0|ResponseContext|
|m_nNextThinkTick|tick|164 \| 0xa4|nextthink|
|m_fEffects|integer|168 \| 0xa8|effects|
|m_ModelName|modelname|172 \| 0xac|model|
|m_target|string|180 \| 0xb4|target|
|m_nRenderFX|character|184 \| 0xb8|renderfx|
|m_nRenderMode|character|185 \| 0xb9|rendermode|
|m_nModelIndex|short|186 \| 0xba|modelindex|
|m_clrRender|color32|188 \| 0xbc|rendercolor|
|m_nSimulationTick|tick|192 \| 0xc0||
|m_iEFlags|integer|200 \| 0xc8||
|m_fFlags|integer|204 \| 0xcc||
|m_iName|string|208 \| 0xd0||
|m_pParent|ehandle|212 \| 0xd4||
|m_nTransmitStateOwnedCounter|character|216 \| 0xd8||
|m_iParentAttachment|character|217 \| 0xd9||
|m_MoveType|character|218 \| 0xda|MoveType|
|m_MoveCollide|character|219 \| 0xdb||
|m_hMoveParent|ehandle|220 \| 0xdc||
|m_hMoveChild|ehandle|224 \| 0xe0||
|m_hMovePeer|ehandle|228 \| 0xe4||
|m_Collision|[CCollisionProperty](#ccollisionproperty)|232 \| 0xe8||
|m_hOwnerEntity|ehandle|324 \| 0x144||
|m_CollisionGroup|integer|328 \| 0x148|CollisionGroup|
|m_pPhysicsObject|custom|332 \| 0x14c||
|m_nWaterType|character|338 \| 0x152||
|m_nWaterLevel|character|339 \| 0x153|waterlevel|
|m_flNavIgnoreUntilTime|time|340 \| 0x154||
|m_hGroundEntity|ehandle|344 \| 0x158||
|m_flGroundChangeTime|time|348 \| 0x15c||
|m_vecBaseVelocity|vector|352 \| 0x160|basevelocity|
|m_vecAbsVelocity|vector|364 \| 0x16c||
|m_vecAngVelocity|vector|376 \| 0x178|avelocity|
|m_rgflCoordinateFrame|float|388 \| 0x184||
|m_flFriction|float|436 \| 0x1b4|friction|
|m_flElasticity|float|440 \| 0x1b8||
|m_flLocalTime|float|444 \| 0x1bc|ltime|
|m_flVPhysicsUpdateLocalTime|float|448 \| 0x1c0||
|m_flMoveDoneTime|float|452 \| 0x1c4||
|m_vecAbsOrigin|pos-vector|460 \| 0x1cc||
|m_angAbsRotation|vector|472 \| 0x1d8||
|m_vecVelocity|vector|484 \| 0x1e4|velocity|
|m_pBlocker|ehandle|496 \| 0x1f0||
|m_iTextureFrameIndex|character|500 \| 0x1f4|texframeindex|
|m_bSimulatedEveryTick|boolean|501 \| 0x1f5||
|m_bAnimatedEveryTick|boolean|502 \| 0x1f6||
|m_bAlternateSorting|boolean|503 \| 0x1f7||
|m_nMinCPULevel|character|504 \| 0x1f8|mincpulevel|
|m_nMaxCPULevel|character|505 \| 0x1f9|maxcpulevel|
|m_nMinGPULevel|character|506 \| 0x1fa|mingpulevel|
|m_nMaxGPULevel|character|507 \| 0x1fb|maxgpulevel|
|m_iGlobalname|string|508 \| 0x1fc|globalname|
|m_iParent|string|512 \| 0x200|parentname|
|m_iHammerID|integer|516 \| 0x204|hammerid|
|m_flSpeed|float|520 \| 0x208|speed|
|m_iMaxHealth|integer|524 \| 0x20c|max_health|
|m_iHealth|integer|528 \| 0x210|health|
|m_iszDamageFilterName|string|532 \| 0x214|damagefilter|
|m_hDamageFilter|ehandle|536 \| 0x218||
|m_pfnTouch|function|540 \| 0x21c||
|m_pfnUse|function|544 \| 0x220||
|m_pfnBlocked|function|548 \| 0x224||
|m_bClientSideRagdoll|boolean|552 \| 0x228||
|m_lifeState|character|553 \| 0x229||
|m_takedamage|character|554 \| 0x22a||
|m_OnUser1|custom|560 \| 0x230|OnUser1|
|m_OnUser2|custom|584 \| 0x248|OnUser2|
|m_OnUser3|custom|608 \| 0x260|OnUser3|
|m_OnUser4|custom|632 \| 0x278|OnUser4|
|m_vecOrigin|vector|700 \| 0x2bc||
|m_angRotation|vector|712 \| 0x2c8||
|m_vecViewOffset|vector|728 \| 0x2d8|view_ofs|
|m_iInitialTeamNum|integer|752 \| 0x2f0|TeamNum|
|m_iTeamNum|integer|756 \| 0x2f4|teamnumber|
|m_spawnflags|integer|764 \| 0x2fc|spawnflags|
|m_AIAddOn|string|768 \| 0x300|addon|
|m_flGravity|float|772 \| 0x304|gravity|
|m_hEffectEntity|ehandle|776 \| 0x308||
|m_fadeMinDist|float|780 \| 0x30c|fademindist|
|m_fadeMaxDist|float|784 \| 0x310|fademaxdist|
|m_flFadeScale|float|788 \| 0x314|fadescale|
|m_flShadowCastDistance|float|792 \| 0x318|shadowcastdist|
|m_flDesiredShadowCastDistance|float|796 \| 0x31c||
|m_iSignifierName|string|800 \| 0x320||
|m_bLagCompensate|boolean|805 \| 0x325|LagCompensate|
|m_bForcePurgeFixedupStrings|boolean|806 \| 0x326||
|m_debugOverlays|integer|812 \| 0x32c||
|m_iszVScripts|string|820 \| 0x334|vscripts|
|m_iszScriptThinkFunction|string|824 \| 0x338|thinkfunction|
|m_iszScriptId|string|852 \| 0x354||
|m_flGroundSpeed|float|860 \| 0x35c||
|m_flLastEventCheck|time|864 \| 0x360||
|m_nSkin|integer|892 \| 0x37c|ModelSkin|
|m_nSkin|integer|892 \| 0x37c|skin|
|m_nBody|integer|896 \| 0x380|SetBodyGroup|
|m_nBody|integer|896 \| 0x380|body|
|m_nHitboxSet|integer|900 \| 0x384|hitboxset|
|m_flModelScale|float|904 \| 0x388|ModelScale|
|m_flPlaybackRate|float|908 \| 0x38c|playbackrate|
|m_pIk|custom|936 \| 0x3a8||
|m_iIKCounter|integer|940 \| 0x3ac||
|m_bSequenceFinished|boolean|944 \| 0x3b0||
|m_bSequenceLoops|boolean|945 \| 0x3b1||
|m_flDissolveStartTime|time|948 \| 0x3b4||
|m_flCycle|float|952 \| 0x3b8|cycle|
|m_nSequence|integer|956 \| 0x3bc|sequence|
|m_flPoseParameter|float|960 \| 0x3c0||
|m_flEncodedController|float|1056 \| 0x420||
|m_bClientSideAnimation|boolean|1072 \| 0x430||
|m_bClientSideFrameReset|boolean|1073 \| 0x431||
|m_nNewSequenceParity|integer|1076 \| 0x434||
|m_nResetEventsParity|integer|1080 \| 0x438||
|m_bSuppressAnimSounds|boolean|1084 \| 0x43c|SuppressAnimSounds|
|m_nMuzzleFlashParity|character|1085 \| 0x43d||
|m_hLightingOrigin|ehandle|1088 \| 0x440||
|m_hLightingOriginRelative|ehandle|1092 \| 0x444||
|m_iszLightingOriginRelative|string|1096 \| 0x448|LightingOriginHack|
|m_iszLightingOrigin|string|1100 \| 0x44c|LightingOrigin|
|m_fBoneCacheFlags|short|1108 \| 0x454||
|m_flFrozen|float|1112 \| 0x458||
|m_flFrozenThawRate|float|1124 \| 0x464||
|m_flFrozenMax|float|1128 \| 0x468||
|m_OnIgnite|custom|1132 \| 0x46c|OnIgnite|
|m_OnFizzled|custom|1156 \| 0x484|OnFizzled|
|m_VehiclePhysics|[CFourWheelVehiclePhysics](#cfourwheelvehiclephysics)|1204 \| 0x4b4||
|m_VehiclePhysics.m_pVehicle|custom|1240 \| 0x4d8||
|m_VehiclePhysics.m_pWheels|custom|1284 \| 0x504||
|m_nVehicleType|integer|1516 \| 0x5ec||
|m_vehicleScript|string|1520 \| 0x5f0|VehicleScript|
|m_vecSmoothedVelocity|vector|1524 \| 0x5f4||
|m_hPhysicsAttacker|ehandle|1536 \| 0x600||
|m_flLastPhysicsInfluenceTime|time|1540 \| 0x604||
|m_pServerVehicle|[CFourWheelServerVehicle](#cfourwheelservervehicle)|1552 \| 0x610||
|m_playerOn|custom|1556 \| 0x614|PlayerOn|
|m_playerOff|custom|1580 \| 0x62c|PlayerOff|
|m_pressedAttack|custom|1604 \| 0x644|PressedAttack|
|m_pressedAttack2|custom|1628 \| 0x65c|PressedAttack2|
|m_attackaxis|custom|1652 \| 0x674|AttackAxis|
|m_attack2axis|custom|1676 \| 0x68c|Attack2Axis|
|m_hPlayer|ehandle|1700 \| 0x6a4||
|m_nSpeed|integer|1704 \| 0x6a8||
|m_nRPM|integer|1708 \| 0x6ac||
|m_flThrottle|float|1712 \| 0x6b0||
|m_nBoostTimeLeft|integer|1716 \| 0x6b4||
|m_nHasBoost|integer|1720 \| 0x6b8||
|m_vecEyeExitEndpoint|pos-vector|1724 \| 0x6bc||
|m_vecGunCrosshair|vector|1736 \| 0x6c8||
|m_bUnableToFire|boolean|1748 \| 0x6d4||
|m_bHasGun|boolean|1749 \| 0x6d5|EnableGun|
|m_nScannerDisabledWeapons|boolean|1750 \| 0x6d6||
|m_nScannerDisabledVehicle|boolean|1751 \| 0x6d7||
|m_hNPCDriver|ehandle|1752 \| 0x6d8||
|m_hKeepUpright|ehandle|1756 \| 0x6dc||
|m_bEngineLocked|boolean|1760 \| 0x6e0||
|m_bLocked|boolean|1761 \| 0x6e1|VehicleLocked|
|m_flMinimumSpeedToEnterExit|float|1764 \| 0x6e4||
|m_bEnterAnimOn|boolean|1768 \| 0x6e8||
|m_bExitAnimOn|boolean|1769 \| 0x6e9||
|m_flTurnOffKeepUpright|time|1772 \| 0x6ec||

## Embedded

### CServerNetworkProperty

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_hParent|ehandle|52 \| 0x34|

### CCollisionProperty

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vecMins|vector|8 \| 0x8|
|m_vecMaxs|vector|20 \| 0x14|
|m_usSolidFlags|short|32 \| 0x20|
|m_nSolidType|character|34 \| 0x22|solid
|m_triggerBloat|character|35 \| 0x23|
|m_flRadius|float|36 \| 0x24|
|m_nSurroundType|character|42 \| 0x2a|
|m_vecSpecifiedSurroundingMins|vector|44 \| 0x2c|
|m_vecSpecifiedSurroundingMaxs|vector|56 \| 0x38|
|m_vecSurroundingMins|vector|68 \| 0x44|
|m_vecSurroundingMaxs|vector|80 \| 0x50|

### CFourWheelVehiclePhysics

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_controls.throttle|float|12 \| 0xc|
|m_controls.steering|float|16 \| 0x10|
|m_controls.brake|float|20 \| 0x14|
|m_controls.boost|float|24 \| 0x18|
|m_controls.handbrake|boolean|28 \| 0x1c|
|m_controls.handbrakeLeft|boolean|29 \| 0x1d|
|m_controls.handbrakeRight|boolean|30 \| 0x1e|
|m_controls.brakepedal|boolean|31 \| 0x1f|
|m_controls.bHasBrakePedal|boolean|32 \| 0x20|
|m_nSpeed|integer|40 \| 0x28|
|m_nLastSpeed|integer|44 \| 0x2c|
|m_nRPM|integer|48 \| 0x30|
|m_fLastBoost|float|52 \| 0x34|
|m_nBoostTimeLeft|integer|56 \| 0x38|
|m_nHasBoost|integer|60 \| 0x3c|
|m_maxThrottle|float|64 \| 0x40|
|m_flMaxRevThrottle|float|68 \| 0x44|
|m_flMaxSpeed|float|72 \| 0x48|
|m_actionSpeed|float|76 \| 0x4c|
|m_wheelCount|integer|96 \| 0x60|
|m_wheelPosition|vector|100 \| 0x64|
|m_wheelRotation|vector|148 \| 0x94|
|m_wheelBaseHeight|float|196 \| 0xc4|
|m_wheelTotalHeight|float|212 \| 0xd4|
|m_poseParameters|integer|228 \| 0xe4|
|m_actionValue|float|276 \| 0x114|
|m_actionScale|float|280 \| 0x118|actionScale
|m_debugRadius|float|284 \| 0x11c|
|m_throttleRate|float|288 \| 0x120|
|m_throttleStartTime|float|292 \| 0x124|
|m_throttleActiveTime|float|296 \| 0x128|
|m_turboTimer|float|300 \| 0x12c|
|m_flVehicleVolume|float|304 \| 0x130|
|m_bIsOn|boolean|308 \| 0x134|
|m_bLastThrottle|boolean|309 \| 0x135|
|m_bLastBoost|boolean|310 \| 0x136|
|m_bLastSkid|boolean|311 \| 0x137|

### CFourWheelServerVehicle

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_PassengerInfo|custom|4 \| 0x4|
|m_nNPCButtons|integer|52 \| 0x34|
|m_nPrevNPCButtons|integer|56 \| 0x38|
|m_flTurnDegrees|float|60 \| 0x3c|
|m_iCurrentExitAnim|integer|108 \| 0x6c|
|m_vecCurrentExitEndPoint|pos-vector|112 \| 0x70|
|m_savedViewOffset|vector|124 \| 0x7c|
|m_hExitBlocker|ehandle|136 \| 0x88|
|m_chPreviousTextureType|character|140 \| 0x8c|
|m_vehicleSounds|[vehiclesounds_t](#vehiclesounds_t)|144 \| 0x90|
|m_flVehicleVolume|float|384 \| 0x180|
|m_iSoundGear|integer|388 \| 0x184|
|m_flSpeedPercentage|float|392 \| 0x188|
|m_pStateSound|custom|396 \| 0x18c|
|m_pStateSoundFade|custom|400 \| 0x190|
|m_soundState|integer|404 \| 0x194|
|m_soundStateStartTime|time|408 \| 0x198|
|m_lastSpeed|float|412 \| 0x19c|
|m_ViewSmoothing|[ViewSmoothingData_t](#viewsmoothingdata_t)|416 \| 0x1a0|

### vehiclesounds_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|pGears|custom|4 \| 0x4|
|crashSounds|custom|24 \| 0x18|
|iszSound|string|44 \| 0x2c|
|iszStateSounds|string|80 \| 0x50|
|minStateTime|float|160 \| 0xa0|

### ViewSmoothingData_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|flFOV|float|24 \| 0x18|
|bRunningEnterExit|boolean|61 \| 0x3d|
|bWasRunningAnim|boolean|62 \| 0x3e|
|flEnterExitStartTime|float|64 \| 0x40|
|flEnterExitDuration|float|68 \| 0x44|
|vecAnglesSaved|vector|72 \| 0x48|
|vecOriginSaved|pos-vector|84 \| 0x54|
|vecAngleDiffSaved|vector|96 \| 0x60|
|vecAngleDiffMin|vector|108 \| 0x6c|
