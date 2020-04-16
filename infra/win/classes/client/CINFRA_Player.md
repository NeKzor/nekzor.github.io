# CINFRA_Player

Class client-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_Portal_Player](#dt_portal_player)|0 \| 0x0|
|flashlightEnabled|int|9352 \| 0x2488|
|flashlightClip|int|9356 \| 0x248c|
|lastDamageTypeReceived|int|9476 \| 0x2504|
|heldObject|int|9492 \| 0x2514|
|currentDocument|int|9496 \| 0x2518|
|currentPhoneCall|int|9500 \| 0x251c|
|rampSlowFactor|float|9504 \| 0x2520|
|hasUpgradedFlashlight|int|9508 \| 0x2524|
|flashlightHoldStartTime|float|9512 \| 0x2528|
|flashlightBoostStartTime|float|9516 \| 0x252c|

## Recv

### DT_Portal_Player

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BasePlayer](#dt_baseplayer)|0 \| 0x0|
|portallocaldata|[DT_PortalLocalPlayerExclusive](#dt_portallocalplayerexclusive)|0 \| 0x0|
|portalnonlocaldata|[DT_PortalNonLocalPlayerExclusive](#dt_portalnonlocalplayerexclusive)|0 \| 0x0|
|m_bPitchReorientation|int|7380 \| 0x1cd4|
|m_hPortalEnvironment|int|7396 \| 0x1ce4|
|m_PortalLocal|[DT_PortalLocal](#dt_portallocal)|7412 \| 0x1cf4|
|m_flMotionBlurAmount|float|7860 \| 0x1eb4|
|m_angEyeAngles[0]|float|7872 \| 0x1ec0|
|m_angEyeAngles[1]|float|7876 \| 0x1ec4|
|m_flHullHeight|float|7948 \| 0x1f0c|
|m_hRagdoll|int|8060 \| 0x1f7c|
|m_iSpawnInterpCounter|int|8140 \| 0x1fcc|
|m_iPlayerSoundType|int|8148 \| 0x1fd4|
|m_bHeldObjectOnOppositeSideOfPortal|int|8152 \| 0x1fd8|
|m_hHeldObjectPortal|int|8156 \| 0x1fdc|
|m_bIsHoldingSomething|int|8288 \| 0x2060|
|m_bPingDisabled|int|8332 \| 0x208c|
|m_bTauntDisabled|int|8333 \| 0x208d|
|m_bTauntRemoteView|int|8334 \| 0x208e|
|m_vecRemoteViewOrigin|vector|8336 \| 0x2090|
|m_vecRemoteViewAngles|vector|8348 \| 0x209c|
|m_fTauntCameraDistance|float|8360 \| 0x20a8|
|m_nTeamTauntState|int|8372 \| 0x20b4|
|m_vTauntPosition|vector|8376 \| 0x20b8|
|m_vTauntAngles|vector|8388 \| 0x20c4|
|m_vPreTauntAngles|vector|8400 \| 0x20d0|
|m_bTrickFire|int|8412 \| 0x20dc|
|m_hTauntPartnerInRange|int|8416 \| 0x20e0|
|m_szTauntForce|string|8420 \| 0x20e4|
|m_bUseVMGrab|int|8541 \| 0x215d|
|m_bUsingVMGrabState|int|8542 \| 0x215e|
|m_hAttachedObject|int|8544 \| 0x2160|
|m_iSpawnCounter|int|9028 \| 0x2344|
|m_bWantsToSwapGuns|int|9213 \| 0x23fd|
|m_bPotatos|int|9214 \| 0x23fe|
|m_Shared|[DT_PortalPlayerShared](#dt_portalplayershared)|9232 \| 0x2410|
|m_StatsThisLevel|[DT_PortalPlayerStatistics](#dt_portalplayerstatistics)|9300 \| 0x2454|

### DT_BasePlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseCombatCharacter](#dt_basecombatcharacter)|0 \| 0x0|
|localdata|[DT_LocalPlayerExclusive](#dt_localplayerexclusive)|0 \| 0x0|
|m_hViewModel|array|0 \| 0x0|
|m_iHealth|int|244 \| 0xf4|
|m_fFlags|int|248 \| 0xf8|
|m_hGroundEntity|int|324 \| 0x144|
|m_lifeState|int|855 \| 0x357|
|pl|[DT_PlayerState](#dt_playerstate)|5576 \| 0x15c8|
|m_iFOV|float|5596 \| 0x15dc|
|m_iFOVStart|float|5600 \| 0x15e0|
|m_ladderSurfaceProps|int|5628 \| 0x15fc|
|m_flFOVTime|float|5636 \| 0x1604|
|m_vecLadderNormal|vector|5656 \| 0x1618|
|m_iBonusProgress|int|5704 \| 0x1648|
|m_iBonusChallenge|int|5708 \| 0x164c|
|m_flMaxspeed|float|5712 \| 0x1650|
|m_hZoomOwner|int|5716 \| 0x1654|
|m_vphysicsCollisionState|int|5732 \| 0x1664|
|m_afPhysicsFlags|int|5892 \| 0x1704|
|m_hVehicle|int|5896 \| 0x1708|
|m_hViewModel[0]|int|5904 \| 0x1710|
|m_hUseEntity|int|5928 \| 0x1728|
|m_iDefaultFOV|float|5932 \| 0x172c|
|m_hViewEntity|int|5944 \| 0x1738|
|m_bShouldDrawPlayerWhileUsingViewEntity|int|5948 \| 0x173c|
|m_iObserverMode|int|5984 \| 0x1760|
|m_hObserverTarget|int|5988 \| 0x1764|
|m_szLastPlaceName|string|6524 \| 0x197c|
|m_ubEFNoInterpParity|int|6560 \| 0x19a0|
|m_hPostProcessCtrl|int|7004 \| 0x1b5c|
|m_hColorCorrectionCtrl|int|7008 \| 0x1b60|
|m_PlayerFog.m_hCtrl|int|7016 \| 0x1b68|

### DT_PortalLocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_EntityPortalledNetworkMessages|[_ST_m_EntityPortalledNetworkMessages_32](#_st_m_entityportallednetworkmessages_32)|0 \| 0x0|
|m_vecViewOffset|vector|252 \| 0xfc|
|m_vecOrigin|vectorXy|300 \| 0x12c|
|m_vecOrigin[2]|float|308 \| 0x134|
|m_vecCarriedObjectAngles|vector|8824 \| 0x2278|
|m_vecCarriedObject_CurPosToTargetPos|vector|8844 \| 0x228c|
|m_vecCarriedObject_CurAngToTargetAng|vector|8856 \| 0x2298|
|m_iEntityPortalledNetworkMessageCount|int|9340 \| 0x247c|

### DT_PortalNonLocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_vecViewOffset[0]|float|252 \| 0xfc|
|m_vecViewOffset[1]|float|256 \| 0x100|
|m_vecViewOffset[2]|float|260 \| 0x104|
|m_vecOrigin|vectorXy|300 \| 0x12c|
|m_vecOrigin[2]|float|308 \| 0x134|

### DT_PortalLocal

|Prop|Type|Offset|
|---|:-:|:-:|
|m_bShowingViewFinder|int|4 \| 0x4|
|m_flAirControlSupressionTime|float|8 \| 0x8|
|m_nLocatorEntityIndices|[m_nLocatorEntityIndices](#m_nlocatorentityindices)|12 \| 0xc|
|m_bPlacingPhoto|int|76 \| 0x4c|
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
|m_PaintedPowerType|int|352 \| 0x160|
|m_PaintedPowerTimer|[DT_CountdownTimer](#dt_countdowntimer)|356 \| 0x164|
|m_flAirInputScale|float|368 \| 0x170|
|m_flCurrentStickTime|float|372 \| 0x174|
|m_nStickCameraState|int|376 \| 0x178|
|m_InAirState|int|380 \| 0x17c|
|m_bDoneStickInterp|int|384 \| 0x180|
|m_bDoneCorrectPitch|int|385 \| 0x181|
|m_bJumpedThisFrame|int|387 \| 0x183|
|m_bBouncedThisFrame|int|388 \| 0x184|
|m_bDuckedInAir|int|389 \| 0x185|
|m_hTractorBeam|int|392 \| 0x188|
|m_bZoomedIn|int|400 \| 0x190|
|m_fBouncedTime|float|404 \| 0x194|
|m_bPreventedCrouchJumpThisFrame|int|408 \| 0x198|

### DT_PortalPlayerShared

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nPlayerCond|int|4 \| 0x4|

### DT_PortalPlayerStatistics

|Prop|Type|Offset|
|---|:-:|:-:|
|iNumPortalsPlaced|int|4 \| 0x4|
|iNumStepsTaken|int|8 \| 0x8|
|fNumSecondsTaken|float|12 \| 0xc|
|fDistanceTaken|float|16 \| 0x10|

### DT_BaseCombatCharacter

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseFlex](#dt_baseflex)|0 \| 0x0|
|bcc_localdata|[DT_BCCLocalPlayerExclusive](#dt_bcclocalplayerexclusive)|0 \| 0x0|
|m_hActiveWeapon|int|4948 \| 0x1354|

### DT_LocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nNextThinkTick|int|240 \| 0xf0|
|m_vecViewOffset[0]|float|252 \| 0xfc|
|m_vecViewOffset[1]|float|256 \| 0x100|
|m_vecViewOffset[2]|float|260 \| 0x104|
|m_vecVelocity[0]|float|264 \| 0x108|
|m_vecVelocity[1]|float|268 \| 0x10c|
|m_vecVelocity[2]|float|272 \| 0x110|
|m_vecBaseVelocity|vector|276 \| 0x114|
|m_flFriction|float|312 \| 0x138|
|m_nWaterLevel|int|854 \| 0x356|
|m_iAmmo|[m_iAmmo](#m_iammo)|4628 \| 0x1214|
|m_Local|[DT_Local](#dt_local)|5104 \| 0x13f0|
|m_hTonemapController|int|5572 \| 0x15c4|
|m_hLastWeapon|int|5900 \| 0x170c|
|m_fOnTarget|int|5924 \| 0x1724|
|m_hConstraintEntity|int|5952 \| 0x1740|
|m_vecConstraintCenter|vector|5956 \| 0x1744|
|m_flConstraintRadius|float|5968 \| 0x1750|
|m_flConstraintWidth|float|5972 \| 0x1754|
|m_flConstraintSpeedFactor|float|5976 \| 0x1758|
|m_bConstraintPastRadius|int|5980 \| 0x175c|
|m_flDeathTime|float|6020 \| 0x1784|
|m_nTickBase|int|6248 \| 0x1868|
|m_flLaggedMovementValue|float|6492 \| 0x195c|

### DT_PlayerState

|Prop|Type|Offset|
|---|:-:|:-:|
|deadflag|int|4 \| 0x4|

### _ST_m_EntityPortalledNetworkMessages_32

|Prop|Type|Offset|
|---|:-:|:-:|
|000|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|001|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|002|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|003|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|004|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|005|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|006|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|007|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|008|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|009|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|010|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|011|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|012|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|013|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|014|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|015|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|016|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|017|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|018|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|019|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|020|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|021|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|022|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|023|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|024|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|025|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|026|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|027|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|028|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|029|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|030|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|031|[DT_EntityPortalledNetworkMessage](#dt_entityportallednetworkmessage)|0 \| 0x0|
|lengthproxy|[_LPT_m_EntityPortalledNetworkMessages_32](#_lpt_m_entityportallednetworkmessages_32)|0 \| 0x0|

### m_nLocatorEntityIndices

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|

### DT_CountdownTimer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_duration|float|4 \| 0x4|
|m_timestamp|float|8 \| 0x8|

### DT_BaseFlex

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseAnimatingOverlay](#dt_baseanimatingoverlay)|0 \| 0x0|
|m_viewtarget|vector|3616 \| 0xe20|
|m_flexWeight|[m_flexWeight](#m_flexweight)|3672 \| 0xe58|
|m_blinktoggle|int|4100 \| 0x1004|
|m_vecLean|vector|4512 \| 0x11a0|
|m_vecShift|vector|4568 \| 0x11d8|

### DT_BCCLocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_flNextAttack|float|4624 \| 0x1210|
|m_hMyWeapons|[m_hMyWeapons](#m_hmyweapons)|4756 \| 0x1294|

### m_iAmmo

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|

### DT_Local

|Prop|Type|Offset|
|---|:-:|:-:|
|m_chAreaBits|[m_chAreaBits](#m_chareabits)|4 \| 0x4|
|m_chAreaPortalBits|[m_chAreaPortalBits](#m_chareaportalbits)|36 \| 0x24|
|m_flFOVRate|float|68 \| 0x44|
|m_bFOVSmooth|int|72 \| 0x48|
|m_iHideHUD|int|76 \| 0x4c|
|m_nDuckTimeMsecs|int|80 \| 0x50|
|m_nDuckJumpTimeMsecs|int|84 \| 0x54|
|m_nJumpTimeMsecs|int|88 \| 0x58|
|m_flFallVelocity|float|92 \| 0x5c|
|m_flStepSize|float|96 \| 0x60|
|m_vecPunchAngle|vector|100 \| 0x64|
|m_vecPunchAngleVel|vector|112 \| 0x70|
|m_bDucked|int|124 \| 0x7c|
|m_bDucking|int|125 \| 0x7d|
|m_bInDuckJump|int|126 \| 0x7e|
|m_bDrawViewmodel|int|128 \| 0x80|
|m_bWearingSuit|int|129 \| 0x81|
|m_bPoisoned|int|130 \| 0x82|
|m_bAllowAutoMovement|int|131 \| 0x83|
|m_skybox3d.scale|int|248 \| 0xf8|
|m_skybox3d.origin|vector|252 \| 0xfc|
|m_skybox3d.area|int|264 \| 0x108|
|m_skybox3d.fog.dirPrimary|vector|272 \| 0x110|
|m_skybox3d.fog.colorPrimary|int|284 \| 0x11c|
|m_skybox3d.fog.colorSecondary|int|288 \| 0x120|
|m_skybox3d.fog.start|float|300 \| 0x12c|
|m_skybox3d.fog.end|float|304 \| 0x130|
|m_skybox3d.fog.maxdensity|float|312 \| 0x138|
|m_skybox3d.fog.enable|int|336 \| 0x150|
|m_skybox3d.fog.blend|int|337 \| 0x151|
|m_skybox3d.fog.HDRColorScale|float|340 \| 0x154|
|m_audio.localSound[0]|vector|348 \| 0x15c|
|m_audio.localSound[1]|vector|360 \| 0x168|
|m_audio.localSound[2]|vector|372 \| 0x174|
|m_audio.localSound[3]|vector|384 \| 0x180|
|m_audio.localSound[4]|vector|396 \| 0x18c|
|m_audio.localSound[5]|vector|408 \| 0x198|
|m_audio.localSound[6]|vector|420 \| 0x1a4|
|m_audio.localSound[7]|vector|432 \| 0x1b0|
|m_audio.soundscapeIndex|int|444 \| 0x1bc|
|m_audio.localBits|int|448 \| 0x1c0|
|m_audio.entIndex|int|452 \| 0x1c4|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### DT_EntityPortalledNetworkMessage

|Prop|Type|Offset|
|---|:-:|:-:|
|m_hEntity|int|0 \| 0x0|
|m_hPortal|int|4 \| 0x4|
|m_fTime|float|8 \| 0x8|
|m_bForcedDuck|int|12 \| 0xc|
|m_iMessageCount|int|16 \| 0x10|

### _LPT_m_EntityPortalledNetworkMessages_32

|Prop|Type|Offset|
|---|:-:|:-:|
|lengthprop32|int|0 \| 0x0|

### DT_BaseAnimatingOverlay

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseAnimating](#dt_baseanimating)|0 \| 0x0|
|overlay_vars|[DT_OverlayVars](#dt_overlayvars)|0 \| 0x0|

### m_flexWeight

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|
|004|float|16 \| 0x10|
|005|float|20 \| 0x14|
|006|float|24 \| 0x18|
|007|float|28 \| 0x1c|
|008|float|32 \| 0x20|
|009|float|36 \| 0x24|
|010|float|40 \| 0x28|
|011|float|44 \| 0x2c|
|012|float|48 \| 0x30|
|013|float|52 \| 0x34|
|014|float|56 \| 0x38|
|015|float|60 \| 0x3c|
|016|float|64 \| 0x40|
|017|float|68 \| 0x44|
|018|float|72 \| 0x48|
|019|float|76 \| 0x4c|
|020|float|80 \| 0x50|
|021|float|84 \| 0x54|
|022|float|88 \| 0x58|
|023|float|92 \| 0x5c|
|024|float|96 \| 0x60|
|025|float|100 \| 0x64|
|026|float|104 \| 0x68|
|027|float|108 \| 0x6c|
|028|float|112 \| 0x70|
|029|float|116 \| 0x74|
|030|float|120 \| 0x78|
|031|float|124 \| 0x7c|
|032|float|128 \| 0x80|
|033|float|132 \| 0x84|
|034|float|136 \| 0x88|
|035|float|140 \| 0x8c|
|036|float|144 \| 0x90|
|037|float|148 \| 0x94|
|038|float|152 \| 0x98|
|039|float|156 \| 0x9c|
|040|float|160 \| 0xa0|
|041|float|164 \| 0xa4|
|042|float|168 \| 0xa8|
|043|float|172 \| 0xac|
|044|float|176 \| 0xb0|
|045|float|180 \| 0xb4|
|046|float|184 \| 0xb8|
|047|float|188 \| 0xbc|
|048|float|192 \| 0xc0|
|049|float|196 \| 0xc4|
|050|float|200 \| 0xc8|
|051|float|204 \| 0xcc|
|052|float|208 \| 0xd0|
|053|float|212 \| 0xd4|
|054|float|216 \| 0xd8|
|055|float|220 \| 0xdc|
|056|float|224 \| 0xe0|
|057|float|228 \| 0xe4|
|058|float|232 \| 0xe8|
|059|float|236 \| 0xec|
|060|float|240 \| 0xf0|
|061|float|244 \| 0xf4|
|062|float|248 \| 0xf8|
|063|float|252 \| 0xfc|
|064|float|256 \| 0x100|
|065|float|260 \| 0x104|
|066|float|264 \| 0x108|
|067|float|268 \| 0x10c|
|068|float|272 \| 0x110|
|069|float|276 \| 0x114|
|070|float|280 \| 0x118|
|071|float|284 \| 0x11c|
|072|float|288 \| 0x120|
|073|float|292 \| 0x124|
|074|float|296 \| 0x128|
|075|float|300 \| 0x12c|
|076|float|304 \| 0x130|
|077|float|308 \| 0x134|
|078|float|312 \| 0x138|
|079|float|316 \| 0x13c|
|080|float|320 \| 0x140|
|081|float|324 \| 0x144|
|082|float|328 \| 0x148|
|083|float|332 \| 0x14c|
|084|float|336 \| 0x150|
|085|float|340 \| 0x154|
|086|float|344 \| 0x158|
|087|float|348 \| 0x15c|
|088|float|352 \| 0x160|
|089|float|356 \| 0x164|
|090|float|360 \| 0x168|
|091|float|364 \| 0x16c|
|092|float|368 \| 0x170|
|093|float|372 \| 0x174|
|094|float|376 \| 0x178|
|095|float|380 \| 0x17c|

### m_hMyWeapons

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|4 \| 0x4|
|002|int|8 \| 0x8|
|003|int|12 \| 0xc|
|004|int|16 \| 0x10|
|005|int|20 \| 0x14|
|006|int|24 \| 0x18|
|007|int|28 \| 0x1c|
|008|int|32 \| 0x20|
|009|int|36 \| 0x24|
|010|int|40 \| 0x28|
|011|int|44 \| 0x2c|
|012|int|48 \| 0x30|
|013|int|52 \| 0x34|
|014|int|56 \| 0x38|
|015|int|60 \| 0x3c|
|016|int|64 \| 0x40|
|017|int|68 \| 0x44|
|018|int|72 \| 0x48|
|019|int|76 \| 0x4c|
|020|int|80 \| 0x50|
|021|int|84 \| 0x54|
|022|int|88 \| 0x58|
|023|int|92 \| 0x5c|
|024|int|96 \| 0x60|
|025|int|100 \| 0x64|
|026|int|104 \| 0x68|
|027|int|108 \| 0x6c|
|028|int|112 \| 0x70|
|029|int|116 \| 0x74|
|030|int|120 \| 0x78|
|031|int|124 \| 0x7c|
|032|int|128 \| 0x80|
|033|int|132 \| 0x84|
|034|int|136 \| 0x88|
|035|int|140 \| 0x8c|
|036|int|144 \| 0x90|
|037|int|148 \| 0x94|
|038|int|152 \| 0x98|
|039|int|156 \| 0x9c|
|040|int|160 \| 0xa0|
|041|int|164 \| 0xa4|
|042|int|168 \| 0xa8|
|043|int|172 \| 0xac|
|044|int|176 \| 0xb0|
|045|int|180 \| 0xb4|
|046|int|184 \| 0xb8|
|047|int|188 \| 0xbc|

### m_chAreaBits

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|1 \| 0x1|
|002|int|2 \| 0x2|
|003|int|3 \| 0x3|
|004|int|4 \| 0x4|
|005|int|5 \| 0x5|
|006|int|6 \| 0x6|
|007|int|7 \| 0x7|
|008|int|8 \| 0x8|
|009|int|9 \| 0x9|
|010|int|10 \| 0xa|
|011|int|11 \| 0xb|
|012|int|12 \| 0xc|
|013|int|13 \| 0xd|
|014|int|14 \| 0xe|
|015|int|15 \| 0xf|
|016|int|16 \| 0x10|
|017|int|17 \| 0x11|
|018|int|18 \| 0x12|
|019|int|19 \| 0x13|
|020|int|20 \| 0x14|
|021|int|21 \| 0x15|
|022|int|22 \| 0x16|
|023|int|23 \| 0x17|
|024|int|24 \| 0x18|
|025|int|25 \| 0x19|
|026|int|26 \| 0x1a|
|027|int|27 \| 0x1b|
|028|int|28 \| 0x1c|
|029|int|29 \| 0x1d|
|030|int|30 \| 0x1e|
|031|int|31 \| 0x1f|

### m_chAreaPortalBits

|Prop|Type|Offset|
|---|:-:|:-:|
|000|int|0 \| 0x0|
|001|int|1 \| 0x1|
|002|int|2 \| 0x2|
|003|int|3 \| 0x3|
|004|int|4 \| 0x4|
|005|int|5 \| 0x5|
|006|int|6 \| 0x6|
|007|int|7 \| 0x7|
|008|int|8 \| 0x8|
|009|int|9 \| 0x9|
|010|int|10 \| 0xa|
|011|int|11 \| 0xb|
|012|int|12 \| 0xc|
|013|int|13 \| 0xd|
|014|int|14 \| 0xe|
|015|int|15 \| 0xf|
|016|int|16 \| 0x10|
|017|int|17 \| 0x11|
|018|int|18 \| 0x12|
|019|int|19 \| 0x13|
|020|int|20 \| 0x14|
|021|int|21 \| 0x15|
|022|int|22 \| 0x16|
|023|int|23 \| 0x17|

### DT_BaseAnimating

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseEntity](#dt_baseentity)|0 \| 0x0|
|serveranimdata|[DT_ServerAnimationData](#dt_serveranimationdata)|0 \| 0x0|
|m_bClientSideRagdoll|int|881 \| 0x371|
|m_nHitboxSet|int|2696 \| 0xa88|
|m_flPlaybackRate|float|2728 \| 0xaa8|
|m_nSkin|int|2732 \| 0xaac|
|m_nBody|int|2736 \| 0xab0|
|m_nNewSequenceParity|int|2740 \| 0xab4|
|m_nResetEventsParity|int|2744 \| 0xab8|
|m_flEncodedController|[m_flEncodedController](#m_flencodedcontroller)|2756 \| 0xac4|
|m_nMuzzleFlashParity|int|2772 \| 0xad4|
|m_vecForce|vector|2792 \| 0xae8|
|m_nForceBone|int|2804 \| 0xaf4|
|m_bClientSideFrameReset|int|2856 \| 0xb28|
|m_flFrozen|float|2860 \| 0xb2c|
|m_flModelScale|float|2940 \| 0xb7c|
|m_ScaleType|int|2944 \| 0xb80|
|m_flPoseParameter|[m_flPoseParameter](#m_flposeparameter)|2988 \| 0xbac|
|m_bClientSideAnimation|int|3284 \| 0xcd4|
|m_nSequence|int|3316 \| 0xcf4|
|m_hLightingOrigin|int|3452 \| 0xd7c|
|m_bSuppressAnimSounds|int|3458 \| 0xd82|

### DT_OverlayVars

|Prop|Type|Offset|
|---|:-:|:-:|
|m_AnimOverlay|[_ST_m_AnimOverlay_15](#_st_m_animoverlay_15)|0 \| 0x0|

### DT_BaseEntity

|Prop|Type|Offset|
|---|:-:|:-:|
|AnimTimeMustBeFirst|[DT_AnimTimeMustBeFirst](#dt_animtimemustbefirst)|0 \| 0x0|
|movecollide|int|0 \| 0x0|
|movetype|int|0 \| 0x0|
|m_clrRender|int|108 \| 0x6c|
|m_cellbits|int|112 \| 0x70|
|m_cellX|int|120 \| 0x78|
|m_cellY|int|124 \| 0x7c|
|m_cellZ|int|128 \| 0x80|
|m_fEffects|int|232 \| 0xe8|
|m_iTeamNum|int|236 \| 0xec|
|m_angRotation|vector|288 \| 0x120|
|m_vecOrigin|vector|300 \| 0x12c|
|moveparent|int|316 \| 0x13c|
|m_hOwnerEntity|int|320 \| 0x140|
|m_iName|string|328 \| 0x148|
|m_iSignifierName|string|588 \| 0x24c|
|m_nModelIndex|int|848 \| 0x350|
|m_nRenderFX|int|850 \| 0x352|
|m_nRenderMode|int|851 \| 0x353|
|m_flSimulationTime|int|864 \| 0x360|
|m_iObjectCapsCache|int|960 \| 0x3c0|
|m_iParentAttachment|int|992 \| 0x3e0|
|m_fadeMinDist|float|1000 \| 0x3e8|
|m_fadeMaxDist|float|1004 \| 0x3ec|
|m_flFadeScale|float|1008 \| 0x3f0|
|m_Collision|[DT_CollisionProperty](#dt_collisionproperty)|1040 \| 0x410|
|m_flElasticity|float|1168 \| 0x490|
|m_flShadowCastDistance|float|1172 \| 0x494|
|m_CollisionGroup|int|1384 \| 0x568|
|m_bSimulatedEveryTick|int|2606 \| 0xa2e|
|m_bAnimatedEveryTick|int|2607 \| 0xa2f|
|m_bAlternateSorting|int|2608 \| 0xa30|
|m_nMinCPULevel|int|2609 \| 0xa31|
|m_nMaxCPULevel|int|2610 \| 0xa32|
|m_nMinGPULevel|int|2611 \| 0xa33|
|m_nMaxGPULevel|int|2612 \| 0xa34|
|m_iTextureFrameIndex|int|2613 \| 0xa35|
|m_hEffectEntity|int|2624 \| 0xa40|

### DT_ServerAnimationData

|Prop|Type|Offset|
|---|:-:|:-:|
|m_flCycle|float|2724 \| 0xaa4|

### m_flEncodedController

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|

### m_flPoseParameter

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|
|004|float|16 \| 0x10|
|005|float|20 \| 0x14|
|006|float|24 \| 0x18|
|007|float|28 \| 0x1c|
|008|float|32 \| 0x20|
|009|float|36 \| 0x24|
|010|float|40 \| 0x28|
|011|float|44 \| 0x2c|
|012|float|48 \| 0x30|
|013|float|52 \| 0x34|
|014|float|56 \| 0x38|
|015|float|60 \| 0x3c|
|016|float|64 \| 0x40|
|017|float|68 \| 0x44|
|018|float|72 \| 0x48|
|019|float|76 \| 0x4c|
|020|float|80 \| 0x50|
|021|float|84 \| 0x54|
|022|float|88 \| 0x58|
|023|float|92 \| 0x5c|

### _ST_m_AnimOverlay_15

|Prop|Type|Offset|
|---|:-:|:-:|
|000|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|001|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|002|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|003|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|004|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|005|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|006|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|007|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|008|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|009|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|010|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|011|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|012|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|013|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|014|[DT_Animationlayer](#dt_animationlayer)|0 \| 0x0|
|lengthproxy|[_LPT_m_AnimOverlay_15](#_lpt_m_animoverlay_15)|0 \| 0x0|

### DT_AnimTimeMustBeFirst

|Prop|Type|Offset|
|---|:-:|:-:|
|m_flAnimTime|int|856 \| 0x358|

### DT_CollisionProperty

|Prop|Type|Offset|
|---|:-:|:-:|
|m_vecMins|vector|8 \| 0x8|
|m_vecMaxs|vector|20 \| 0x14|
|m_usSolidFlags|int|32 \| 0x20|
|m_nSolidType|int|34 \| 0x22|
|m_triggerBloat|int|35 \| 0x23|
|m_nSurroundType|int|42 \| 0x2a|
|m_vecSpecifiedSurroundingMins|vector|44 \| 0x2c|
|m_vecSpecifiedSurroundingMaxs|vector|56 \| 0x38|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nOrder|int|8 \| 0x8|
|m_nSequence|int|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_flCycle|float|28 \| 0x1c|

### _LPT_m_AnimOverlay_15

|Prop|Type|Offset|
|---|:-:|:-:|
|lengthprop15|int|0 \| 0x0|
