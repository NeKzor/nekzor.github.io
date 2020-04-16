# CBeam

Datamap client-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_clrRender|integer|108 \| 0x6c||
|m_vecAbsVelocity|vector|144 \| 0x90||
|m_vecAbsOrigin|vector|156 \| 0x9c||
|m_vecOrigin|vector|168 \| 0xa8||
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
|m_iHealth|integer|244 \| 0xf4||
|m_fFlags|integer|248 \| 0xf8||
|m_vecViewOffset|vector|252 \| 0xfc||
|m_vecVelocity|vector|264 \| 0x108||
|m_vecBaseVelocity|vector|276 \| 0x114||
|m_angNetworkAngles|vector|288 \| 0x120||
|m_vecNetworkOrigin|vector|300 \| 0x12c||
|m_flFriction|float|312 \| 0x138||
|m_hNetworkMoveParent|ehandle|316 \| 0x13c||
|m_hOwnerEntity|ehandle|320 \| 0x140||
|m_hGroundEntity|ehandle|324 \| 0x144||
|m_nModelIndex|short|848 \| 0x350||
|m_nModelIndex|integer|848 \| 0x350||
|m_nRenderFX|integer|850 \| 0x352||
|m_nRenderFX|character|850 \| 0x352||
|m_nRenderMode|integer|851 \| 0x353||
|m_nRenderMode|character|851 \| 0x353||
|m_MoveType|character|852 \| 0x354||
|m_MoveCollide|character|853 \| 0x355||
|m_nWaterLevel|character|854 \| 0x356||
|m_Collision|[CCollisionProperty](#ccollisionproperty)|1040 \| 0x410||
|m_bEverHadPredictionErrorsForThisCommand|boolean|2604 \| 0xa2c||
|m_flFrameRate|float|2688 \| 0xa80||
|m_nNumBeamEnts|integer|2704 \| 0xa90||
|m_nHaloIndex|integer|2712 \| 0xa98||
|m_nBeamType|integer|2716 \| 0xa9c||
|m_hAttachEntity|ehandle|2724 \| 0xaa4||
|m_nAttachIndex|integer|2764 \| 0xacc||
|m_fWidth|float|2804 \| 0xaf4||
|m_fEndWidth|float|2808 \| 0xaf8||
|m_fFadeLength|float|2812 \| 0xafc||
|m_fHaloScale|float|2816 \| 0xb00||
|m_fAmplitude|float|2820 \| 0xb04||
|m_fStartFrame|float|2824 \| 0xb08||
|m_fSpeed|float|2828 \| 0xb0c||
|m_flFrame|float|2832 \| 0xb10||
|m_vecEndPos|vector|2840 \| 0xb18||

## Embedded

### CCollisionProperty

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vecMins|vector|8 \| 0x8|
|m_vecMaxs|vector|20 \| 0x14|
|m_usSolidFlags|short|32 \| 0x20|
|m_nSolidType|character|34 \| 0x22|
|m_triggerBloat|character|35 \| 0x23|
