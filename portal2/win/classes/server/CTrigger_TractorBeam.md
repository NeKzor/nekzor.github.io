# CTrigger_TractorBeam
Class server-side.

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseVPhysicsTrigger](#DT_BaseVPhysicsTrigger)|0 \| 0x0|
|m_bDisabled|int|860 \| 0x35c|
|m_gravityScale|float|904 \| 0x388|
|m_addAirDensity|float|908 \| 0x38c|
|m_linearLimit|float|912 \| 0x390|
|m_linearLimitDelta|float|916 \| 0x394|
|m_linearLimitTime|float|920 \| 0x398|
|m_linearLimitStart|float|924 \| 0x39c|
|m_linearLimitStartTime|float|928 \| 0x3a0|
|m_linearScale|float|932 \| 0x3a4|
|m_angularLimit|float|936 \| 0x3a8|
|m_angularScale|float|940 \| 0x3ac|
|m_linearForceAngles|vector|944 \| 0x3b0|
|m_hProxyEntity|int|956 \| 0x3bc|
|m_vStart|vector|960 \| 0x3c0|
|m_vEnd|vector|972 \| 0x3cc|
|m_linearForce|float|984 \| 0x3d8|
|m_flRadius|float|988 \| 0x3dc|
|m_bReversed|int|992 \| 0x3e0|
|m_bFromPortal|int|993 \| 0x3e1|
|m_bToPortal|int|994 \| 0x3e2|
|m_bDisablePlayerMove|int|995 \| 0x3e3|

## Recv

### DT_BaseVPhysicsTrigger

|Prop|Type|Offset|
|---|:-:|:-:|
|baseclass|[DT_BaseEntity](#DT_BaseEntity)|0 \| 0x0|

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
