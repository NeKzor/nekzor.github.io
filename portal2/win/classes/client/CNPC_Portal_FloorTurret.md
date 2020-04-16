# CNPC_Portal_FloorTurret

Class client-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_AI_BaseNPC](#dt_ai_basenpc)|0 \| 0x0|
|m_bOutOfAmmo|int|4932 \| 0x1344|
|m_bLaserOn|int|4933 \| 0x1345|
|m_bIsFiring|int|4934 \| 0x1346|
|m_sLaserHaloSprite|int|4940 \| 0x134c|

## Recv

### DT_AI_BaseNPC

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseCombatCharacter](#dt_basecombatcharacter)|0 \| 0x0|
|m_lifeState|int|855 \| 0x357|
|m_flTimePingEffect|float|4864 \| 0x1300|
|m_iDeathPose|int|4868 \| 0x1304|
|m_iDeathFrame|int|4872 \| 0x1308|
|m_iSpeedModRadius|int|4876 \| 0x130c|
|m_iSpeedModSpeed|int|4880 \| 0x1310|
|m_bPerformAvoidance|int|4884 \| 0x1314|
|m_bIsMoving|int|4885 \| 0x1315|
|m_bFadeCorpse|int|4886 \| 0x1316|
|m_bSpeedModActive|int|4887 \| 0x1317|
|m_bImportanRagdoll|int|4888 \| 0x1318|

### DT_BaseCombatCharacter

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseFlex](#dt_baseflex)|0 \| 0x0|
|bcc_localdata|[DT_BCCLocalPlayerExclusive](#dt_bcclocalplayerexclusive)|0 \| 0x0|
|m_hActiveWeapon|int|4836 \| 0x12e4|

### DT_BaseFlex

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseAnimatingOverlay](#dt_baseanimatingoverlay)|0 \| 0x0|
|m_viewtarget|vector|3616 \| 0xe20|
|m_flexWeight|[m_flexWeight](#m_flexweight)|3672 \| 0xe58|
|m_blinktoggle|int|4100 \| 0x1004|

### DT_BCCLocalPlayerExclusive

|Prop|Type|Offset|
|---|:-:|:-:|
|m_flNextAttack|float|4512 \| 0x11a0|
|m_hMyWeapons|[m_hMyWeapons](#m_hmyweapons)|4644 \| 0x1224|

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
