# CWeaponPortalgun

Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BasePortalCombatWeapon](#dt_baseportalcombatweapon)|0 \| 0x0|
|m_bCanFirePortal1|int|1500 \| 0x5dc|
|m_bCanFirePortal2|int|1501 \| 0x5dd|
|m_iLastFiredPortal|int|1504 \| 0x5e0|
|m_bOpenProngs|int|1508 \| 0x5e4|
|m_vecBluePortalPos|vector|1512 \| 0x5e8|
|m_vecOrangePortalPos|vector|1524 \| 0x5f4|
|m_fEffectsMaxSize1|float|1544 \| 0x608|
|m_fEffectsMaxSize2|float|1548 \| 0x60c|
|m_EffectState|int|1612 \| 0x64c|
|m_hPrimaryPortal|int|1616 \| 0x650|
|m_hSecondaryPortal|int|1620 \| 0x654|

## Recv

### DT_BasePortalCombatWeapon

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_WeaponPortalBase](#dt_weaponportalbase)|0 \| 0x0|

### DT_WeaponPortalBase

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseCombatWeapon](#dt_basecombatweapon)|0 \| 0x0|

### DT_BaseCombatWeapon

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseAnimating](#dt_baseanimating)|0 \| 0x0|
|LocalActiveWeaponData|[DT_LocalActiveWeaponData](#dt_localactiveweapondata)|0 \| 0x0|
|LocalWeaponData|[DT_LocalWeaponData](#dt_localweapondata)|0 \| 0x0|
|m_hOwner|int|1200 \| 0x4b0|
|m_iViewModelIndex|int|1216 \| 0x4c0|
|m_iWorldModelIndex|int|1220 \| 0x4c4|
|m_iState|int|1224 \| 0x4c8|

### DT_BaseAnimating

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseEntity](#dt_baseentity)|0 \| 0x0|
|serveranimdata|[DT_ServerAnimationData](#dt_serveranimationdata)|0 \| 0x0|
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
|m_flPoseParameter|[m_flPoseParameter](#m_flposeparameter)|960 \| 0x3c0|
|m_flEncodedController|[m_flEncodedController](#m_flencodedcontroller)|1056 \| 0x420|
|m_bClientSideAnimation|int|1072 \| 0x430|
|m_bClientSideFrameReset|int|1073 \| 0x431|
|m_nNewSequenceParity|int|1076 \| 0x434|
|m_nResetEventsParity|int|1080 \| 0x438|
|m_bSuppressAnimSounds|int|1084 \| 0x43c|
|m_nMuzzleFlashParity|int|1085 \| 0x43d|
|m_hLightingOrigin|int|1088 \| 0x440|
|m_flFrozen|float|1112 \| 0x458|

### DT_LocalActiveWeaponData

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nNextThinkTick|int|164 \| 0xa4|
|m_flNextPrimaryAttack|float|1208 \| 0x4b8|
|m_flNextSecondaryAttack|float|1212 \| 0x4bc|
|m_flTimeWeaponIdle|float|1244 \| 0x4dc|

### DT_LocalWeaponData

|Prop|Type|Offset|
|---|:-:|:-:|
|m_nViewModelIndex|int|1204 \| 0x4b4|
|m_iPrimaryAmmoType|int|1228 \| 0x4cc|
|m_iSecondaryAmmoType|int|1232 \| 0x4d0|
|m_iClip1|int|1236 \| 0x4d4|
|m_iClip2|int|1240 \| 0x4d8|

### DT_BaseEntity

|Prop|Type|Offset|
|---|:-:|:-:|
|AnimTimeMustBeFirst|[DT_AnimTimeMustBeFirst](#dt_animtimemustbefirst)|0 \| 0x0|
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
|m_Collision|[DT_CollisionProperty](#dt_collisionproperty)|232 \| 0xe8|
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
