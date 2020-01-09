# CBaseGrenade
Datamap client-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vecAbsVelocity|vector|144 \| 0x90||
|m_vecAbsOrigin|vector|156 \| 0x9c||
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
|m_vecVelocity|vector|264 \| 0x108||
|m_vecBaseVelocity|vector|276 \| 0x114||
|m_angNetworkAngles|vector|288 \| 0x120||
|m_vecNetworkOrigin|vector|300 \| 0x12c||
|m_flFriction|float|312 \| 0x138||
|m_hNetworkMoveParent|ehandle|316 \| 0x13c||
|m_hOwnerEntity|ehandle|320 \| 0x140||
|m_hGroundEntity|ehandle|324 \| 0x144||
|m_nModelIndex|short|848 \| 0x350||
|m_nRenderFX|character|850 \| 0x352||
|m_nRenderMode|character|851 \| 0x353||
|m_MoveType|character|852 \| 0x354||
|m_MoveCollide|character|853 \| 0x355||
|m_nWaterLevel|character|854 \| 0x356||
|m_Collision|[CCollisionProperty](#CCollisionProperty)|1040 \| 0x410||
|m_bEverHadPredictionErrorsForThisCommand|boolean|2604 \| 0xa2c||
|m_nPrevSequence|integer|2720 \| 0xaa0||
|m_flCycle|float|2724 \| 0xaa4||
|m_flPlaybackRate|float|2728 \| 0xaa8||
|m_nSkin|integer|2732 \| 0xaac||
|m_nBody|integer|2736 \| 0xab0||
|m_nNewSequenceParity|integer|2740 \| 0xab4||
|m_nResetEventsParity|integer|2744 \| 0xab8||
|m_flEncodedController|float|2756 \| 0xac4||
|m_nMuzzleFlashParity|character|2772 \| 0xad4||
|m_nSequence|integer|3316 \| 0xcf4||
|m_flNextAttack|float|4512 \| 0x11a0||
|m_flNextAttack|float|4512 \| 0x11a0||
|m_iAmmo|integer|4516 \| 0x11a4||
|m_hMyWeapons|ehandle|4644 \| 0x1224||
|m_hActiveWeapon|ehandle|4836 \| 0x12e4||
|m_bIsLive|boolean|4865 \| 0x1301||
|m_DmgRadius|boolean|4868 \| 0x1304||
|m_flDamage|float|4880 \| 0x1310||
|m_hThrower|ehandle|4888 \| 0x1318||

## Embedded

### CCollisionProperty

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vecMins|vector|8 \| 0x8|
|m_vecMaxs|vector|20 \| 0x14|
|m_usSolidFlags|short|32 \| 0x20|
|m_nSolidType|character|34 \| 0x22|
|m_triggerBloat|character|35 \| 0x23|
