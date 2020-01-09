# CPortal_Player
Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BasePlayer](#DT_BasePlayer)|0 \| 0x0|
|m_angRotation|int|0 \| 0x0|
|m_blinktoggle|int|0 \| 0x0|
|m_flAnimTime|int|0 \| 0x0|
|m_flCycle|int|0 \| 0x0|
|m_flexWeight|int|0 \| 0x0|
|m_flPlaybackRate|int|0 \| 0x0|
|m_flPoseParameter|int|0 \| 0x0|
|m_nNewSequenceParity|int|0 \| 0x0|
|m_nResetEventsParity|int|0 \| 0x0|
|m_nSequence|int|0 \| 0x0|
|m_vecOrigin|int|0 \| 0x0|
|m_vecViewOffset[0]|int|0 \| 0x0|
|m_vecViewOffset[1]|int|0 \| 0x0|
|m_vecViewOffset[2]|int|0 \| 0x0|
|m_viewtarget|int|0 \| 0x0|
|overlay_vars|int|0 \| 0x0|
|portallocaldata|[DT_PortalLocalPlayerExclusive](#DT_PortalLocalPlayerExclusive)|0 \| 0x0|
|portalnonlocaldata|[DT_PortalNonLocalPlayerExclusive](#DT_PortalNonLocalPlayerExclusive)|0 \| 0x0|
|m_bUseVMGrab|int|4965 \| 0x1365|
|m_bUsingVMGrabState|int|4966 \| 0x1366|
|m_hAttachedObject|int|4980 \| 0x1374|
|m_hRagdoll|int|5036 \| 0x13ac|
|m_bPitchReorientation|int|5040 \| 0x13b0|
|m_hPortalEnvironment|int|5044 \| 0x13b4|
|m_PortalLocal|[DT_PortalLocal](#DT_PortalLocal)|5060 \| 0x13c4|
|m_angEyeAngles[0]|float|5488 \| 0x1570|
|m_angEyeAngles[1]|float|5492 \| 0x1574|
|m_iSpawnInterpCounter|int|5508 \| 0x1584|
|m_iPlayerSoundType|int|5512 \| 0x1588|
|m_bPingDisabled|int|5536 \| 0x15a0|
|m_bTauntDisabled|int|5537 \| 0x15a1|
|m_bTauntRemoteView|int|5538 \| 0x15a2|
|m_vecRemoteViewOrigin|vector|5540 \| 0x15a4|
|m_vecRemoteViewAngles|vector|5552 \| 0x15b0|
|m_fTauntCameraDistance|float|5564 \| 0x15bc|
|m_nTeamTauntState|int|5568 \| 0x15c0|
|m_vTauntPosition|vector|5572 \| 0x15c4|
|m_vTauntAngles|vector|5584 \| 0x15d0|
|m_vPreTauntAngles|vector|5596 \| 0x15dc|
|m_bTrickFire|int|5608 \| 0x15e8|
|m_hTauntPartnerInRange|int|5612 \| 0x15ec|
|m_szTauntForce|string|5616 \| 0x15f0|
|m_bHeldObjectOnOppositeSideOfPortal|int|5680 \| 0x1630|
|m_hHeldObjectPortal|int|5684 \| 0x1634|
|m_StatsThisLevel|[DT_PortalPlayerStatistics](#DT_PortalPlayerStatistics)|5696 \| 0x1640|
|m_bIsHoldingSomething|int|5748 \| 0x1674|
|m_iSpawnCounter|int|5756 \| 0x167c|
|m_Shared|[DT_PortalPlayerShared](#DT_PortalPlayerShared)|5760 \| 0x1680|
|m_flMotionBlurAmount|float|6000 \| 0x1770|
|m_bWantsToSwapGuns|int|6004 \| 0x1774|
|m_bPotatos|int|6006 \| 0x1776|
|m_flHullHeight|float|6044 \| 0x179c|

## Recv

### DT_BasePlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseCombatCharacter](#DT_BaseCombatCharacter)|0 \| 0x0|
|localdata|[DT_LocalPlayerExclusive](#DT_LocalPlayerExclusive)|0 \| 0x0|
|m_hViewModel|array|0 \| 0x0|
|m_fFlags|int|204 \| 0xcc|
|m_hGroundEntity|int|344 \| 0x158|
|m_iHealth|int|528 \| 0x210|
|m_lifeState|int|553 \| 0x229|
|m_PlayerFog.m_hCtrl|int|2700 \| 0xa8c|
|m_hPostProcessCtrl|int|2776 \| 0xad8|
|m_hColorCorrectionCtrl|int|2780 \| 0xadc|
|pl|[DT_PlayerState](#DT_PlayerState)|2804 \| 0xaf4|
|m_hUseEntity|int|2960 \| 0xb90|
|m_afPhysicsFlags|int|2972 \| 0xb9c|
|m_hVehicle|int|2976 \| 0xba0|
|m_iBonusProgress|int|2988 \| 0xbac|
|m_iBonusChallenge|int|2992 \| 0xbb0|
|m_iObserverMode|int|3044 \| 0xbe4|
|m_iFOV|int|3048 \| 0xbe8|
|m_iDefaultFOV|int|3052 \| 0xbec|
|m_iFOVStart|int|3056 \| 0xbf0|
|m_flFOVTime|float|3060 \| 0xbf4|
|m_hObserverTarget|int|3068 \| 0xbfc|
|m_hZoomOwner|int|3076 \| 0xc04|
|m_vphysicsCollisionState|int|3108 \| 0xc24|
|m_hViewModel|int|3588 \| 0xe04|
|m_flMaxspeed|float|3704 \| 0xe78|
|m_ladderSurfaceProps|int|3708 \| 0xe7c|
|m_vecLadderNormal|vector|3712 \| 0xe80|
|m_hViewEntity|int|3840 \| 0xf00|
|m_bShouldDrawPlayerWhileUsingViewEntity|int|3844 \| 0xf04|
|m_szLastPlaceName|string|3992 \| 0xf98|
|m_ubEFNoInterpParity|int|4104 \| 0x1008|

### DT_PortalLocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_EntityPortalledNetworkMessages|[_ST_m_EntityPortalledNetworkMessages_32](#_ST_m_EntityPortalledNetworkMessages_32)|0 \| 0x0|
|m_vecOrigin|vectorXy|700 \| 0x2bc|
|m_vecOrigin[2]|float|708 \| 0x2c4|
|m_vecViewOffset|vector|728 \| 0x2d8|
|m_vecCarriedObjectAngles|vector|4984 \| 0x1378|
|m_vecCarriedObject_CurPosToTargetPos|vector|4996 \| 0x1384|
|m_vecCarriedObject_CurAngToTargetAng|vector|5008 \| 0x1390|
|m_iEntityPortalledNetworkMessageCount|int|6068 \| 0x17b4|

### DT_PortalNonLocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_vecOrigin|vectorXy|700 \| 0x2bc|
|m_vecOrigin[2]|float|708 \| 0x2c4|
|m_vecViewOffset[0]|float|728 \| 0x2d8|
|m_vecViewOffset[1]|float|732 \| 0x2dc|
|m_vecViewOffset[2]|float|736 \| 0x2e0|

### DT_PortalLocal

|Prop|Type|Offset|
|---|:-:|:-:|
|m_bShowingViewFinder|int|4 \| 0x4|
|m_flAirControlSupressionTime|float|8 \| 0x8|
|m_nLocatorEntityIndices|[m_nLocatorEntityIndices](#m_nLocatorEntityIndices)|12 \| 0xc|
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
|m_PaintedPowerTimer|[DT_CountdownTimer](#DT_CountdownTimer)|356 \| 0x164|
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

### DT_PortalPlayerStatistics

|Prop|Type|Offset|
|---|:-:|:-:|
|iNumPortalsPlaced|int|4 \| 0x4|
|iNumStepsTaken|int|8 \| 0x8|
|fNumSecondsTaken|float|12 \| 0xc|
|fDistanceTaken|float|16 \| 0x10|

### DT_PortalPlayerShared

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nPlayerCond|int|4 \| 0x4|

### DT_BaseCombatCharacter

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseFlex](#DT_BaseFlex)|0 \| 0x0|
|bcc_localdata|[DT_BCCLocalPlayerExclusive](#DT_BCCLocalPlayerExclusive)|0 \| 0x0|
|m_hActiveWeapon|int|2140 \| 0x85c|

### DT_LocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nNextThinkTick|int|164 \| 0xa4|
|m_nWaterLevel|int|339 \| 0x153|
|m_vecBaseVelocity|vector|352 \| 0x160|
|m_flFriction|float|436 \| 0x1b4|
|m_vecVelocity[0]|float|484 \| 0x1e4|
|m_vecVelocity[1]|float|488 \| 0x1e8|
|m_vecVelocity[2]|float|492 \| 0x1ec|
|m_vecViewOffset[0]|float|728 \| 0x2d8|
|m_vecViewOffset[1]|float|732 \| 0x2dc|
|m_vecViewOffset[2]|float|736 \| 0x2e0|
|m_iAmmo|[m_iAmmo](#m_iAmmo)|1820 \| 0x71c|
|m_Local|[DT_Local](#DT_Local)|2192 \| 0x890|
|m_fOnTarget|int|2880 \| 0xb40|
|m_flDeathTime|float|3036 \| 0xbdc|
|m_hTonemapController|int|3132 \| 0xc3c|
|m_nTickBase|int|3792 \| 0xed0|
|m_hLastWeapon|int|3804 \| 0xedc|
|m_hConstraintEntity|int|3848 \| 0xf08|
|m_vecConstraintCenter|vector|3852 \| 0xf0c|
|m_flConstraintRadius|float|3864 \| 0xf18|
|m_flConstraintWidth|float|3868 \| 0xf1c|
|m_flConstraintSpeedFactor|float|3872 \| 0xf20|
|m_bConstraintPastRadius|int|3876 \| 0xf24|
|m_flLaggedMovementValue|float|3912 \| 0xf48|

### DT_PlayerState

|Prop|Type|Offset|
|---|:-:|:-:|
|deadflag|int|4 \| 0x4|

### _ST_m_EntityPortalledNetworkMessages_32

|Prop|Type|Offset|
|---|:-:|:-:|
|000|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|001|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|002|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|003|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|004|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|005|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|006|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|007|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|008|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|009|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|010|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|011|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|012|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|013|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|014|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|015|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|016|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|017|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|018|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|019|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|020|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|021|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|022|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|023|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|024|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|025|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|026|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|027|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|028|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|029|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|030|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|031|[DT_EntityPortalledNetworkMessage](#DT_EntityPortalledNetworkMessage)|0 \| 0x0|
|lengthproxy|[_LPT_m_EntityPortalledNetworkMessages_32](#_LPT_m_EntityPortalledNetworkMessages_32)|0 \| 0x0|

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
|baseclass|[DT_BaseAnimatingOverlay](#DT_BaseAnimatingOverlay)|0 \| 0x0|
|m_flexWeight|[m_flexWeight](#m_flexWeight)|1220 \| 0x4c4|
|m_viewtarget|vector|1604 \| 0x644|
|m_blinktoggle|int|1616 \| 0x650|

### DT_BCCLocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_flNextAttack|float|1704 \| 0x6a8|
|m_hMyWeapons|[m_hMyWeapons](#m_hMyWeapons)|1948 \| 0x79c|

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
|m_chAreaBits|[m_chAreaBits](#m_chAreaBits)|4 \| 0x4|
|m_chAreaPortalBits|[m_chAreaPortalBits](#m_chAreaPortalBits)|36 \| 0x24|
|m_iHideHUD|int|60 \| 0x3c|
|m_flFOVRate|float|64 \| 0x40|
|m_bDucked|int|80 \| 0x50|
|m_bDucking|int|81 \| 0x51|
|m_bInDuckJump|int|82 \| 0x52|
|m_nDuckTimeMsecs|int|84 \| 0x54|
|m_nDuckJumpTimeMsecs|int|88 \| 0x58|
|m_nJumpTimeMsecs|int|92 \| 0x5c|
|m_flFallVelocity|float|100 \| 0x64|
|m_vecPunchAngle|vector|112 \| 0x70|
|m_vecPunchAngleVel|vector|124 \| 0x7c|
|m_bDrawViewmodel|int|136 \| 0x88|
|m_bWearingSuit|int|137 \| 0x89|
|m_bPoisoned|int|138 \| 0x8a|
|m_flStepSize|float|140 \| 0x8c|
|m_bAllowAutoMovement|int|144 \| 0x90|
|m_skybox3d.scale|int|152 \| 0x98|
|m_skybox3d.origin|vector|156 \| 0x9c|
|m_skybox3d.area|int|168 \| 0xa8|
|m_skybox3d.fog.dirPrimary|vector|176 \| 0xb0|
|m_skybox3d.fog.colorPrimary|int|188 \| 0xbc|
|m_skybox3d.fog.colorSecondary|int|192 \| 0xc0|
|m_skybox3d.fog.start|float|204 \| 0xcc|
|m_skybox3d.fog.end|float|208 \| 0xd0|
|m_skybox3d.fog.maxdensity|float|216 \| 0xd8|
|m_skybox3d.fog.enable|int|240 \| 0xf0|
|m_skybox3d.fog.blend|int|241 \| 0xf1|
|m_skybox3d.fog.HDRColorScale|float|244 \| 0xf4|
|m_audio.localSound[0]|vector|388 \| 0x184|
|m_audio.localSound[1]|vector|400 \| 0x190|
|m_audio.localSound[2]|vector|412 \| 0x19c|
|m_audio.localSound[3]|vector|424 \| 0x1a8|
|m_audio.localSound[4]|vector|436 \| 0x1b4|
|m_audio.localSound[5]|vector|448 \| 0x1c0|
|m_audio.localSound[6]|vector|460 \| 0x1cc|
|m_audio.localSound[7]|vector|472 \| 0x1d8|
|m_audio.soundscapeIndex|int|484 \| 0x1e4|
|m_audio.localBits|int|488 \| 0x1e8|
|m_audio.entIndex|int|492 \| 0x1ec|

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
|baseclass|[DT_BaseAnimating](#DT_BaseAnimating)|0 \| 0x0|
|overlay_vars|[DT_OverlayVars](#DT_OverlayVars)|0 \| 0x0|

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
|baseclass|[DT_BaseEntity](#DT_BaseEntity)|0 \| 0x0|
|serveranimdata|[DT_ServerAnimationData](#DT_ServerAnimationData)|0 \| 0x0|
|m_bClientSideRagdoll|int|552 \| 0x228|
|m_nForceBone|int|876 \| 0x36c|
|m_vecForce|vector|880 \| 0x370|
|m_nSkin|int|892 \| 0x37c|
|m_nBody|int|896 \| 0x380|
|m_nHitboxSet|int|900 \| 0x384|
|m_flModelScale|float|904 \| 0x388|
|m_flPlaybackRate|float|908 \| 0x38c|
|m_ScaleType|int|912 \| 0x390|
|m_nSequence|int|956 \| 0x3bc|
|m_flPoseParameter|[m_flPoseParameter](#m_flPoseParameter)|960 \| 0x3c0|
|m_flEncodedController|[m_flEncodedController](#m_flEncodedController)|1056 \| 0x420|
|m_bClientSideAnimation|int|1072 \| 0x430|
|m_bClientSideFrameReset|int|1073 \| 0x431|
|m_nNewSequenceParity|int|1076 \| 0x434|
|m_nResetEventsParity|int|1080 \| 0x438|
|m_bSuppressAnimSounds|int|1084 \| 0x43c|
|m_nMuzzleFlashParity|int|1085 \| 0x43d|
|m_hLightingOrigin|int|1088 \| 0x440|
|m_flFrozen|float|1112 \| 0x458|

### DT_OverlayVars

|Prop|Type|Offset|
|---|:-:|:-:|
|m_AnimOverlay|[_ST_m_AnimOverlay_15](#_ST_m_AnimOverlay_15)|0 \| 0x0|

### DT_BaseEntity

|Prop|Type|Offset|
|---|:-:|:-:|
|AnimTimeMustBeFirst|[DT_AnimTimeMustBeFirst](#DT_AnimTimeMustBeFirst)|0 \| 0x0|
|m_iObjectCapsCache|int|4 \| 0x4|
|m_flSimulationTime|int|108 \| 0x6c|
|m_fEffects|int|168 \| 0xa8|
|m_nRenderFX|int|184 \| 0xb8|
|m_nRenderMode|int|185 \| 0xb9|
|m_nModelIndex|int|186 \| 0xba|
|m_clrRender|int|188 \| 0xbc|
|m_iName|string|208 \| 0xd0|
|m_iParentAttachment|int|217 \| 0xd9|
|movetype|int|218 \| 0xda|
|movecollide|int|219 \| 0xdb|
|moveparent|int|220 \| 0xdc|
|m_Collision|[DT_CollisionProperty](#DT_CollisionProperty)|232 \| 0xe8|
|m_hOwnerEntity|int|324 \| 0x144|
|m_CollisionGroup|int|328 \| 0x148|
|m_flElasticity|float|440 \| 0x1b8|
|m_iTextureFrameIndex|int|500 \| 0x1f4|
|m_bSimulatedEveryTick|int|501 \| 0x1f5|
|m_bAnimatedEveryTick|int|502 \| 0x1f6|
|m_bAlternateSorting|int|503 \| 0x1f7|
|m_nMinCPULevel|int|504 \| 0x1f8|
|m_nMaxCPULevel|int|505 \| 0x1f9|
|m_nMinGPULevel|int|506 \| 0x1fa|
|m_nMaxGPULevel|int|507 \| 0x1fb|
|m_cellbits|int|684 \| 0x2ac|
|m_cellX|int|688 \| 0x2b0|
|m_cellY|int|692 \| 0x2b4|
|m_cellZ|int|696 \| 0x2b8|
|m_vecOrigin|vector|700 \| 0x2bc|
|m_angRotation|vector|712 \| 0x2c8|
|m_iTeamNum|int|756 \| 0x2f4|
|m_hEffectEntity|int|776 \| 0x308|
|m_fadeMinDist|float|780 \| 0x30c|
|m_fadeMaxDist|float|784 \| 0x310|
|m_flFadeScale|float|788 \| 0x314|
|m_flShadowCastDistance|float|792 \| 0x318|
|m_iSignifierName|string|800 \| 0x320|

### DT_ServerAnimationData

|Prop|Type|Offset|
|---|:-:|:-:|
|m_flCycle|float|952 \| 0x3b8|

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

### m_flEncodedController

|Prop|Type|Offset|
|---|:-:|:-:|
|000|float|0 \| 0x0|
|001|float|4 \| 0x4|
|002|float|8 \| 0x8|
|003|float|12 \| 0xc|

### _ST_m_AnimOverlay_15

|Prop|Type|Offset|
|---|:-:|:-:|
|000|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|001|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|002|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|003|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|004|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|005|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|006|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|007|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|008|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|009|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|010|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|011|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|012|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|013|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|014|[DT_Animationlayer](#DT_Animationlayer)|0 \| 0x0|
|lengthproxy|[_LPT_m_AnimOverlay_15](#_LPT_m_AnimOverlay_15)|0 \| 0x0|

### DT_AnimTimeMustBeFirst

|Prop|Type|Offset|
|---|:-:|:-:|
|m_flAnimTime|int|104 \| 0x68|

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
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### DT_Animationlayer

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nSequence|int|8 \| 0x8|
|m_flCycle|float|12 \| 0xc|
|m_flPrevCycle|float|16 \| 0x10|
|m_flWeight|float|20 \| 0x14|
|m_nOrder|int|60 \| 0x3c|

### _LPT_m_AnimOverlay_15

|Prop|Type|Offset|
|---|:-:|:-:|
|lengthprop15|int|0 \| 0x0|
