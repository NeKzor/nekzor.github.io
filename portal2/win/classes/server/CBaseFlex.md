# CBaseFlex

Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseAnimatingOverlay](#dt_baseanimatingoverlay)|0 \| 0x0|
|m_flexWeight|[m_flexWeight](#m_flexweight)|1220 \| 0x4c4|
|m_viewtarget|vector|1604 \| 0x644|
|m_blinktoggle|int|1616 \| 0x650|

## Recv

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

### DT_OverlayVars

|Prop|Type|Offset|
|---|:-:|:-:|
|m_AnimOverlay|[_ST_m_AnimOverlay_15](#_st_m_animoverlay_15)|0 \| 0x0|

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
