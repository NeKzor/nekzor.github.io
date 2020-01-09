# C_WeaponStunStick
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
|m_nNextThinkTick|integer|240 \| 0xf0||
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
|m_hOwner|ehandle|3512 \| 0xdb8||
|m_nViewModelIndex|integer|3516 \| 0xdbc||
|m_flNextPrimaryAttack|float|3520 \| 0xdc0||
|m_flNextSecondaryAttack|float|3524 \| 0xdc4||
|m_iViewModelIndex|integer|3528 \| 0xdc8||
|m_iWorldModelIndex|integer|3532 \| 0xdcc||
|m_iState|integer|3536 \| 0xdd0||
|m_iPrimaryAmmoType|integer|3540 \| 0xdd4||
|m_iSecondaryAmmoType|integer|3544 \| 0xdd8||
|m_iClip1|integer|3548 \| 0xddc||
|m_iClip2|integer|3552 \| 0xde0||
|m_flTimeWeaponIdle|float|3556 \| 0xde4||
|m_flNextEmptySoundTime|float|3560 \| 0xde8||
|m_fMinRange1|float|3564 \| 0xdec||
|m_fMinRange2|float|3568 \| 0xdf0||
|m_fMaxRange1|float|3572 \| 0xdf4||
|m_fMaxRange2|float|3576 \| 0xdf8||
|m_fFireDuration|float|3580 \| 0xdfc||
|m_Activity|integer|3584 \| 0xe00||
|m_iPrimaryAmmoCount|integer|3588 \| 0xe04||
|m_iSecondaryAmmoCount|integer|3592 \| 0xe08||
|m_iszName|integer|3596 \| 0xe0c||
|m_bRemoveable|boolean|3600 \| 0xe10||
|m_bInReload|boolean|3601 \| 0xe11||
|m_bFireOnEmpty|boolean|3602 \| 0xe12||
|m_bFiresUnderwater|boolean|3603 \| 0xe13||
|m_bAltFiresUnderwater|boolean|3604 \| 0xe14||
|m_bReloadsSingly|boolean|3605 \| 0xe15||

## Embedded

### CCollisionProperty

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vecMins|vector|8 \| 0x8|
|m_vecMaxs|vector|20 \| 0x14|
|m_usSolidFlags|short|32 \| 0x20|
|m_nSolidType|character|34 \| 0x22|
|m_triggerBloat|character|35 \| 0x23|
