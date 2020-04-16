# CPropWeightedCube

Class client-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_PhysicsProp](#dt_physicsprop)|0 \| 0x0|

## Recv

### DT_PhysicsProp

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BreakableProp](#dt_breakableprop)|0 \| 0x0|
|m_spawnflags|int|956 \| 0x3bc|
|m_bAwake|int|3536 \| 0xdd0|

### DT_BreakableProp

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseAnimating](#dt_baseanimating)|0 \| 0x0|
|m_qPreferredPlayerCarryAngles|vector|3516 \| 0xdbc|
|m_bClientPhysics|int|3528 \| 0xdc8|

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
