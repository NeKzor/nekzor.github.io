# CTriggerCatapult
Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseTrigger](#DT_BaseTrigger)|0 \| 0x0|
|m_flRefireDelay|[m_flRefireDelay](#m_flRefireDelay)|1164 \| 0x48c|
|m_flPlayerVelocity|float|1300 \| 0x514|
|m_flPhysicsVelocity|float|1304 \| 0x518|
|m_vecLaunchAngles|vector|1308 \| 0x51c|
|m_ExactVelocityChoice|int|1324 \| 0x52c|
|m_bUseExactVelocity|int|1328 \| 0x530|
|m_bUseThresholdCheck|int|1329 \| 0x531|
|m_flLowerThreshold|float|1332 \| 0x534|
|m_flUpperThreshold|float|1336 \| 0x538|
|m_flEntryAngleTolerance|float|1340 \| 0x53c|
|m_hLaunchTarget|int|1344 \| 0x540|
|m_bOnlyVelocityCheck|int|1348 \| 0x544|
|m_bApplyAngularImpulse|int|1349 \| 0x545|
|m_bPlayersPassTriggerFilters|int|1350 \| 0x546|
|m_flAirControlSupressionTime|float|1352 \| 0x548|
|m_bDirectionSuppressAirControl|int|1356 \| 0x54c|

## Recv

### DT_BaseTrigger

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseToggle](#DT_BaseToggle)|0 \| 0x0|
|m_spawnflags|int|764 \| 0x2fc|
|m_bClientSidePredicted|int|1156 \| 0x484|

### m_flRefireDelay

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

### DT_BaseToggle

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseEntity](#DT_BaseEntity)|0 \| 0x0|
|m_vecFinalDest|vector|944 \| 0x3b0|
|m_movementType|int|968 \| 0x3c8|
|m_flMoveTargetTime|float|972 \| 0x3cc|

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
