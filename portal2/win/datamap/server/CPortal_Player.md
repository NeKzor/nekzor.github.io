# CPortal_Player

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|CBaseEntityScriptThink|void|0 \| 0x0||
|CBaseEntityShadowCastDistThink|void|0 \| 0x0||
|CBaseEntitySUB_CallUseToggle|void|0 \| 0x0||
|CBaseEntitySUB_DoNothing|void|0 \| 0x0||
|CBaseEntitySUB_FadeOut|void|0 \| 0x0||
|CBaseEntitySUB_Remove|void|0 \| 0x0||
|CBaseEntitySUB_StartFadeOut|void|0 \| 0x0||
|CBaseEntitySUB_StartFadeOutInstant|void|0 \| 0x0||
|CBaseEntitySUB_Vanish|void|0 \| 0x0||
|CBasePlayerPlayerDeathThink|void|0 \| 0x0||
|CPortal_PlayerPlayerCatchPatnerNotConnectingThink|void|0 \| 0x0||
|CPortal_PlayerPlayerTransitionCompleteThink|void|0 \| 0x0||
|InputAddContext|string|0 \| 0x0|AddContext|
|InputAddOutput|string|0 \| 0x0|AddOutput|
|InputAlpha|integer|0 \| 0x0|Alpha|
|InputAlternativeSorting|boolean|0 \| 0x0|AlternativeSorting|
|InputBecomeRagdoll|void|0 \| 0x0|BecomeRagdoll|
|InputCallScriptFunction|string|0 \| 0x0|CallScriptFunction|
|InputClearContext|string|0 \| 0x0|ClearContext|
|InputClearParent|void|0 \| 0x0|ClearParent|
|InputColor|color32|0 \| 0x0|Color|
|InputDisableDamageForces|void|0 \| 0x0|DisableDamageForces|
|InputDisableDraw|void|0 \| 0x0|DisableDraw|
|InputDisableDrawInFastReflection|void|0 \| 0x0|DisableDrawInFastReflection|
|InputDisableReceivingFlashlight|void|0 \| 0x0|DisableReceivingFlashlight|
|InputDisableShadow|void|0 \| 0x0|DisableShadow|
|InputDispatchResponse|string|0 \| 0x0|DispatchResponse|
|InputEnableDamageForces|void|0 \| 0x0|EnableDamageForces|
|InputEnableDraw|void|0 \| 0x0|EnableDraw|
|InputEnableDrawInFastReflection|void|0 \| 0x0|EnableDrawInFastReflection|
|InputEnableReceivingFlashlight|void|0 \| 0x0|EnableReceivingFlashlight|
|InputEnableShadow|void|0 \| 0x0|EnableShadow|
|InputFireUser1|string|0 \| 0x0|FireUser1|
|InputFireUser2|string|0 \| 0x0|FireUser2|
|InputFireUser3|string|0 \| 0x0|FireUser3|
|InputFireUser4|string|0 \| 0x0|FireUser4|
|InputIgnite|float|0 \| 0x0|IgniteHitboxFireScale|
|InputIgnite|integer|0 \| 0x0|IgniteNumHitboxFires|
|InputIgnite|void|0 \| 0x0|Ignite|
|InputIgniteLifetime|float|0 \| 0x0|IgniteLifetime|
|InputKill|void|0 \| 0x0|Kill|
|InputKilledNPC|void|0 \| 0x0|KilledNPC|
|InputKillHierarchy|void|0 \| 0x0|KillHierarchy|
|InputRemoveContext|string|0 \| 0x0|RemoveContext|
|InputRemovePaint|void|0 \| 0x0|RemovePaint|
|InputRunScript|string|0 \| 0x0|RunScriptCode|
|InputRunScriptFile|string|0 \| 0x0|RunScriptFile|
|InputSetDamageFilter|string|0 \| 0x0|SetDamageFilter|
|InputSetFogController|string|0 \| 0x0|SetFogController|
|InputSetHealth|integer|0 \| 0x0|SetHealth|
|InputSetHUDVisibility|boolean|0 \| 0x0|SetHUDVisibility|
|InputSetLightingOrigin|string|0 \| 0x0|SetLightingOrigin|
|InputSetLightingOriginRelative|string|0 \| 0x0|SetLightingOriginHack|
|InputSetLocalAngles|string|0 \| 0x0|SetLocalAngles|
|InputSetLocalOrigin|string|0 \| 0x0|SetLocalOrigin|
|InputSetParent|string|0 \| 0x0|SetParent|
|InputSetParentAttachment|string|0 \| 0x0|SetParentAttachment|
|InputSetParentAttachmentMaintainOffset|string|0 \| 0x0|SetParentAttachmentMaintainOffset|
|InputSetTeam|integer|0 \| 0x0|SetTeam|
|InputUse|void|0 \| 0x0|Use|
|m_iObjectCapsCache|integer|4 \| 0x4||
|m_pfnMoveDone|function|8 \| 0x8||
|m_pfnThink|function|12 \| 0xc||
|m_Network|[CServerNetworkProperty](#cservernetworkproperty)|16 \| 0x10||
|m_iClassname|string|96 \| 0x60|classname|
|m_flPrevAnimTime|time|100 \| 0x64||
|m_flAnimTime|time|104 \| 0x68||
|m_flSimulationTime|time|108 \| 0x6c||
|m_nLastThinkTick|tick|112 \| 0x70||
|touchStamp|integer|116 \| 0x74||
|m_aThinkFunctions|custom|120 \| 0x78||
|m_ResponseContexts|custom|140 \| 0x8c||
|m_iszResponseContext|string|160 \| 0xa0|ResponseContext|
|m_nNextThinkTick|tick|164 \| 0xa4|nextthink|
|m_fEffects|integer|168 \| 0xa8|effects|
|m_ModelName|modelname|172 \| 0xac|model|
|m_target|string|180 \| 0xb4|target|
|m_nRenderFX|character|184 \| 0xb8|renderfx|
|m_nRenderMode|character|185 \| 0xb9|rendermode|
|m_nModelIndex|short|186 \| 0xba|modelindex|
|m_clrRender|color32|188 \| 0xbc|rendercolor|
|m_nSimulationTick|tick|192 \| 0xc0||
|m_iEFlags|integer|200 \| 0xc8||
|m_fFlags|integer|204 \| 0xcc||
|m_iName|string|208 \| 0xd0||
|m_pParent|ehandle|212 \| 0xd4||
|m_nTransmitStateOwnedCounter|character|216 \| 0xd8||
|m_iParentAttachment|character|217 \| 0xd9||
|m_MoveType|character|218 \| 0xda|MoveType|
|m_MoveCollide|character|219 \| 0xdb||
|m_hMoveParent|ehandle|220 \| 0xdc||
|m_hMoveChild|ehandle|224 \| 0xe0||
|m_hMovePeer|ehandle|228 \| 0xe4||
|m_Collision|[CCollisionProperty](#ccollisionproperty)|232 \| 0xe8||
|m_hOwnerEntity|ehandle|324 \| 0x144||
|m_CollisionGroup|integer|328 \| 0x148|CollisionGroup|
|m_pPhysicsObject|custom|332 \| 0x14c||
|m_nWaterType|character|338 \| 0x152||
|m_nWaterLevel|character|339 \| 0x153|waterlevel|
|m_flNavIgnoreUntilTime|time|340 \| 0x154||
|m_hGroundEntity|ehandle|344 \| 0x158||
|m_flGroundChangeTime|time|348 \| 0x15c||
|m_vecBaseVelocity|vector|352 \| 0x160|basevelocity|
|m_vecAbsVelocity|vector|364 \| 0x16c||
|m_vecAngVelocity|vector|376 \| 0x178|avelocity|
|m_rgflCoordinateFrame|float|388 \| 0x184||
|m_flFriction|float|436 \| 0x1b4|friction|
|m_flElasticity|float|440 \| 0x1b8||
|m_flLocalTime|float|444 \| 0x1bc|ltime|
|m_flVPhysicsUpdateLocalTime|float|448 \| 0x1c0||
|m_flMoveDoneTime|float|452 \| 0x1c4||
|m_vecAbsOrigin|pos-vector|460 \| 0x1cc||
|m_angAbsRotation|vector|472 \| 0x1d8||
|m_vecVelocity|vector|484 \| 0x1e4|velocity|
|m_pBlocker|ehandle|496 \| 0x1f0||
|m_iTextureFrameIndex|character|500 \| 0x1f4|texframeindex|
|m_bSimulatedEveryTick|boolean|501 \| 0x1f5||
|m_bAnimatedEveryTick|boolean|502 \| 0x1f6||
|m_bAlternateSorting|boolean|503 \| 0x1f7||
|m_nMinCPULevel|character|504 \| 0x1f8|mincpulevel|
|m_nMaxCPULevel|character|505 \| 0x1f9|maxcpulevel|
|m_nMinGPULevel|character|506 \| 0x1fa|mingpulevel|
|m_nMaxGPULevel|character|507 \| 0x1fb|maxgpulevel|
|m_iGlobalname|string|508 \| 0x1fc|globalname|
|m_iParent|string|512 \| 0x200|parentname|
|m_iHammerID|integer|516 \| 0x204|hammerid|
|m_flSpeed|float|520 \| 0x208|speed|
|m_iMaxHealth|integer|524 \| 0x20c|max_health|
|m_iHealth|integer|528 \| 0x210|health|
|m_iszDamageFilterName|string|532 \| 0x214|damagefilter|
|m_hDamageFilter|ehandle|536 \| 0x218||
|m_pfnTouch|function|540 \| 0x21c||
|m_pfnUse|function|544 \| 0x220||
|m_pfnBlocked|function|548 \| 0x224||
|m_bClientSideRagdoll|boolean|552 \| 0x228||
|m_lifeState|character|553 \| 0x229||
|m_takedamage|character|554 \| 0x22a||
|m_OnUser1|custom|560 \| 0x230|OnUser1|
|m_OnUser2|custom|584 \| 0x248|OnUser2|
|m_OnUser3|custom|608 \| 0x260|OnUser3|
|m_OnUser4|custom|632 \| 0x278|OnUser4|
|m_vecOrigin|vector|700 \| 0x2bc||
|m_angRotation|vector|712 \| 0x2c8||
|m_vecViewOffset|vector|728 \| 0x2d8|view_ofs|
|m_iInitialTeamNum|integer|752 \| 0x2f0|TeamNum|
|m_iTeamNum|integer|756 \| 0x2f4|teamnumber|
|m_spawnflags|integer|764 \| 0x2fc|spawnflags|
|m_AIAddOn|string|768 \| 0x300|addon|
|m_flGravity|float|772 \| 0x304|gravity|
|m_hEffectEntity|ehandle|776 \| 0x308||
|m_fadeMinDist|float|780 \| 0x30c|fademindist|
|m_fadeMaxDist|float|784 \| 0x310|fademaxdist|
|m_flFadeScale|float|788 \| 0x314|fadescale|
|m_flShadowCastDistance|float|792 \| 0x318|shadowcastdist|
|m_flDesiredShadowCastDistance|float|796 \| 0x31c||
|m_iSignifierName|string|800 \| 0x320||
|m_bLagCompensate|boolean|805 \| 0x325|LagCompensate|
|m_bForcePurgeFixedupStrings|boolean|806 \| 0x326||
|m_debugOverlays|integer|812 \| 0x32c||
|m_iszVScripts|string|820 \| 0x334|vscripts|
|m_iszScriptThinkFunction|string|824 \| 0x338|thinkfunction|
|m_iszScriptId|string|852 \| 0x354||
|m_flGroundSpeed|float|860 \| 0x35c||
|m_flLastEventCheck|time|864 \| 0x360||
|m_nSkin|integer|892 \| 0x37c|skin|
|m_nSkin|integer|892 \| 0x37c|ModelSkin|
|m_nBody|integer|896 \| 0x380|body|
|m_nBody|integer|896 \| 0x380|SetBodyGroup|
|m_nHitboxSet|integer|900 \| 0x384|hitboxset|
|m_flModelScale|float|904 \| 0x388|ModelScale|
|m_flPlaybackRate|float|908 \| 0x38c|playbackrate|
|m_pIk|custom|936 \| 0x3a8||
|m_iIKCounter|integer|940 \| 0x3ac||
|m_bSequenceFinished|boolean|944 \| 0x3b0||
|m_bSequenceLoops|boolean|945 \| 0x3b1||
|m_flDissolveStartTime|time|948 \| 0x3b4||
|m_flCycle|float|952 \| 0x3b8|cycle|
|m_nSequence|integer|956 \| 0x3bc|sequence|
|m_flPoseParameter|float|960 \| 0x3c0||
|m_flEncodedController|float|1056 \| 0x420||
|m_bClientSideAnimation|boolean|1072 \| 0x430||
|m_bClientSideFrameReset|boolean|1073 \| 0x431||
|m_nNewSequenceParity|integer|1076 \| 0x434||
|m_nResetEventsParity|integer|1080 \| 0x438||
|m_bSuppressAnimSounds|boolean|1084 \| 0x43c|SuppressAnimSounds|
|m_nMuzzleFlashParity|character|1085 \| 0x43d||
|m_hLightingOrigin|ehandle|1088 \| 0x440||
|m_hLightingOriginRelative|ehandle|1092 \| 0x444||
|m_iszLightingOriginRelative|string|1096 \| 0x448|LightingOriginHack|
|m_iszLightingOrigin|string|1100 \| 0x44c|LightingOrigin|
|m_fBoneCacheFlags|short|1108 \| 0x454||
|m_flFrozen|float|1112 \| 0x458||
|m_flFrozenThawRate|float|1124 \| 0x464||
|m_flFrozenMax|float|1128 \| 0x468||
|m_OnIgnite|custom|1132 \| 0x46c|OnIgnite|
|m_OnFizzled|custom|1156 \| 0x484|OnFizzled|
|m_AnimOverlay|custom|1200 \| 0x4b0||
|m_flexWeight|float|1220 \| 0x4c4||
|m_viewtarget|pos-vector|1604 \| 0x644||
|m_flAllowResponsesEndTime|time|1668 \| 0x684||
|m_flLastFlexAnimationTime|time|1696 \| 0x6a0||
|m_bForceServerRagdoll|boolean|1700 \| 0x6a4||
|m_bPreventWeaponPickup|boolean|1701 \| 0x6a5||
|m_flNextAttack|time|1704 \| 0x6a8||
|m_eHull|integer|1708 \| 0x6ac|HullType|
|m_bloodColor|integer|1712 \| 0x6b0|BloodColor|
|m_flFieldOfView|float|1716 \| 0x6b4||
|m_HackedGunPos|vector|1720 \| 0x6b8||
|m_RelationshipString|string|1732 \| 0x6c4|Relationship|
|m_impactEnergyScale|float|1736 \| 0x6c8|physdamagescale|
|m_LastHitGroup|integer|1756 \| 0x6dc||
|m_flDamageAccumulator|float|1760 \| 0x6e0||
|m_iDamageCount|integer|1764 \| 0x6e4||
|m_CurrentWeaponProficiency|integer|1768 \| 0x6e8||
|m_Relationship|custom|1772 \| 0x6ec||
|m_nFaction|integer|1792 \| 0x700||
|m_hTriggerFogList|custom|1796 \| 0x704||
|m_hLastFogTrigger|ehandle|1816 \| 0x718||
|m_iAmmo|integer|1820 \| 0x71c||
|m_hMyWeapons|ehandle|1948 \| 0x79c||
|m_hActiveWeapon|ehandle|2140 \| 0x85c||
|m_StuckLast|integer|2188 \| 0x88c||
|m_Local|[CPlayerLocalData](#cplayerlocaldata)|2192 \| 0x890||
|m_PlayerFog|[fogplayerparams_t](#fogplayerparams_t)|2696 \| 0xa88||
|m_hPostProcessCtrl|ehandle|2776 \| 0xad8||
|m_hColorCorrectionCtrl|ehandle|2780 \| 0xadc||
|m_hTriggerSoundscapeList|custom|2784 \| 0xae0||
|pl|[CPlayerState](#cplayerstate)|2804 \| 0xaf4||
|m_nButtons|integer|2856 \| 0xb28||
|m_afButtonPressed|integer|2860 \| 0xb2c||
|m_afButtonReleased|integer|2864 \| 0xb30||
|m_afButtonLast|integer|2868 \| 0xb34||
|m_afButtonDisabled|integer|2872 \| 0xb38||
|m_afButtonForced|integer|2876 \| 0xb3c||
|m_szAnimExtension|character|2881 \| 0xb41||
|m_nUpdateRate|integer|2916 \| 0xb64||
|m_fLerpTime|float|2920 \| 0xb68||
|m_bLagCompensation|boolean|2924 \| 0xb6c||
|m_bPredictWeapons|boolean|2925 \| 0xb6d||
|m_vecAdditionalPVSOrigin|pos-vector|2932 \| 0xb74||
|m_vecCameraPVSOrigin|pos-vector|2944 \| 0xb80||
|m_bDropEnabled|boolean|2956 \| 0xb8c||
|m_bDuckEnabled|boolean|2957 \| 0xb8d||
|m_hUseEntity|ehandle|2960 \| 0xb90||
|m_iTrain|integer|2964 \| 0xb94||
|m_iRespawnFrames|float|2968 \| 0xb98||
|m_afPhysicsFlags|integer|2972 \| 0xb9c||
|m_hVehicle|ehandle|2976 \| 0xba0||
|m_bPauseBonusProgress|boolean|2984 \| 0xba8||
|m_iBonusProgress|integer|2988 \| 0xbac||
|m_iBonusChallenge|integer|2992 \| 0xbb0||
|m_flTimeLastTouchedGround|time|2996 \| 0xbb4||
|m_lastDamageAmount|integer|3000 \| 0xbb8||
|m_fTimeLastHurt|time|3004 \| 0xbbc||
|m_DmgOrigin|vector|3008 \| 0xbc0||
|m_DmgTake|float|3020 \| 0xbcc||
|m_DmgSave|float|3024 \| 0xbd0||
|m_bitsDamageType|integer|3028 \| 0xbd4||
|m_bitsHUDDamage|integer|3032 \| 0xbd8||
|m_flDeathTime|time|3036 \| 0xbdc||
|m_flDeathAnimTime|time|3040 \| 0xbe0||
|m_iObserverMode|integer|3044 \| 0xbe4||
|m_iFOV|integer|3048 \| 0xbe8||
|m_iDefaultFOV|integer|3052 \| 0xbec||
|m_iFOVStart|integer|3056 \| 0xbf0||
|m_flFOVTime|time|3060 \| 0xbf4||
|m_iObserverLastMode|integer|3064 \| 0xbf8||
|m_hObserverTarget|ehandle|3068 \| 0xbfc||
|m_bForcedObserverMode|boolean|3072 \| 0xc00||
|m_hZoomOwner|ehandle|3076 \| 0xc04||
|m_tbdPrev|time|3080 \| 0xc08||
|m_idrowndmg|integer|3084 \| 0xc0c||
|m_idrownrestored|integer|3088 \| 0xc10||
|m_nPoisonDmg|integer|3092 \| 0xc14||
|m_nPoisonRestored|integer|3096 \| 0xc18||
|m_rgbTimeBasedDamage|character|3100 \| 0xc1c||
|m_iSuicideCustomKillFlags|integer|3116 \| 0xc2c||
|m_oldOrigin|pos-vector|3168 \| 0xc60||
|m_vecSmoothedVelocity|vector|3180 \| 0xc6c||
|m_iTargetVolume|integer|3200 \| 0xc80||
|m_rgItems|integer|3204 \| 0xc84||
|m_flSuitUpdate|time|3236 \| 0xca4||
|m_rgSuitPlayList|integer|3240 \| 0xca8||
|m_iSuitPlayNext|integer|3256 \| 0xcb8||
|m_rgiSuitNoRepeat|integer|3260 \| 0xcbc||
|m_rgflSuitNoRepeatTime|time|3388 \| 0xd3c||
|m_fInitHUD|boolean|3528 \| 0xdc8||
|m_iFrags|integer|3552 \| 0xde0||
|m_iDeaths|integer|3556 \| 0xde4||
|m_flNextDecalTime|time|3560 \| 0xde8||
|m_ArmorValue|integer|3568 \| 0xdf0||
|m_AirFinished|time|3572 \| 0xdf4||
|m_PainFinished|time|3576 \| 0xdf8||
|m_iPlayerLocked|integer|3580 \| 0xdfc||
|m_hViewModel|ehandle|3588 \| 0xe04||
|m_flStepSoundTime|float|3696 \| 0xe70||
|m_bAllowInstantSpawn|boolean|3700 \| 0xe74||
|m_flMaxspeed|float|3704 \| 0xe78||
|m_vecLadderNormal|vector|3712 \| 0xe80||
|m_flWaterJumpTime|time|3724 \| 0xe8c||
|m_vecWaterJumpVel|vector|3728 \| 0xe90||
|m_nImpulse|integer|3740 \| 0xe9c||
|m_flSwimSoundTime|time|3744 \| 0xea0||
|m_flFlashTime|time|3748 \| 0xea4||
|m_nDrownDmgRate|integer|3752 \| 0xea8||
|m_nNumCrouches|integer|3756 \| 0xeac||
|m_bDuckToggled|boolean|3760 \| 0xeb0||
|m_flForwardMove|float|3764 \| 0xeb4||
|m_flSideMove|float|3768 \| 0xeb8||
|m_nNumCrateHudHints|integer|3772 \| 0xebc||
|m_fLastPlayerTalkTime|float|3800 \| 0xed8||
|m_hLastWeapon|ehandle|3804 \| 0xedc||
|m_flOldPlayerZ|float|3828 \| 0xef4||
|m_flOldPlayerViewOffsetZ|float|3832 \| 0xef8||
|m_bPlayerUnderwater|boolean|3836 \| 0xefc||
|m_hViewEntity|ehandle|3840 \| 0xf00||
|m_bShouldDrawPlayerWhileUsingViewEntity|boolean|3844 \| 0xf04||
|m_hConstraintEntity|ehandle|3848 \| 0xf08||
|m_vecConstraintCenter|pos-vector|3852 \| 0xf0c||
|m_flConstraintRadius|float|3864 \| 0xf18||
|m_flConstraintWidth|float|3868 \| 0xf1c||
|m_flConstraintSpeedFactor|float|3872 \| 0xf20||
|m_bConstraintPastRadius|boolean|3876 \| 0xf24||
|m_szNetname|character|3877 \| 0xf25||
|m_flLaggedMovementValue|float|3912 \| 0xf48||
|m_vNewVPhysicsPosition|vector|3916 \| 0xf4c||
|m_vNewVPhysicsVelocity|vector|3928 \| 0xf58||
|m_flVehicleViewFOV|float|3964 \| 0xf7c||
|m_vecPreviouslyPredictedOrigin|pos-vector|3972 \| 0xf84||
|m_szLastPlaceName|character|3992 \| 0xf98||
|m_szNetworkIDString|character|4010 \| 0xfaa||
|m_bSinglePlayerGameEnding|boolean|4102 \| 0x1006||
|m_autoKickDisabled|boolean|4112 \| 0x1010||
|m_iPaintPower|integer|4684 \| 0x124c||
|m_hGrabbedEntity|ehandle|4956 \| 0x135c||
|m_hPortalThroughWhichGrabOccured|ehandle|4960 \| 0x1360||
|m_bForcingDrop|boolean|4964 \| 0x1364||
|m_bUseVMGrab|boolean|4965 \| 0x1365||
|m_bUsingVMGrabState|boolean|4966 \| 0x1366||
|m_flUseKeyStartTime|time|4968 \| 0x1368||
|m_flAutoGrabLockOutTime|time|4972 \| 0x136c||
|m_ForcedGrabController|integer|4976 \| 0x1370||
|m_hAttachedObject|ehandle|4980 \| 0x1374||
|m_vecTotalBulletForce|vector|5020 \| 0x139c||
|m_bSilentDropAndPickup|boolean|5032 \| 0x13a8||
|m_hRagdoll|ehandle|5036 \| 0x13ac||
|m_bPitchReorientation|boolean|5040 \| 0x13b0||
|m_hPortalEnvironment|ehandle|5044 \| 0x13b4||
|m_vWorldSpaceCenterHolder|pos-vector|5048 \| 0x13b8||
|m_PortalLocal|[CPortalPlayerLocalData](#cportalplayerlocaldata)|5060 \| 0x13c4||
|m_pWooshSound|custom|5476 \| 0x1564||
|m_pGrabSound|custom|5480 \| 0x1568||
|m_nWheatleyMonitorDestructionCount|integer|5484 \| 0x156c||
|m_angEyeAngles|vector|5488 \| 0x1570||
|m_iLastWeaponFireUsercmd|integer|5504 \| 0x1580||
|m_iSpawnInterpCounter|integer|5508 \| 0x1584||
|m_iPlayerSoundType|integer|5512 \| 0x1588||
|m_bPingDisabled|boolean|5536 \| 0x15a0||
|m_bTauntDisabled|boolean|5537 \| 0x15a1||
|m_bTauntRemoteView|boolean|5538 \| 0x15a2||
|m_bTauntRemoteViewFOVFixup|boolean|5539 \| 0x15a3||
|m_vecRemoteViewOrigin|pos-vector|5540 \| 0x15a4||
|m_vecRemoteViewAngles|vector|5552 \| 0x15b0||
|m_fTauntCameraDistance|float|5564 \| 0x15bc||
|m_nTeamTauntState|integer|5568 \| 0x15c0||
|m_vTauntPosition|pos-vector|5572 \| 0x15c4||
|m_vTauntAngles|vector|5584 \| 0x15d0||
|m_vPreTauntAngles|vector|5596 \| 0x15dc||
|m_bTrickFire|boolean|5608 \| 0x15e8||
|m_hTauntPartnerInRange|ehandle|5612 \| 0x15ec||
|m_szTauntForce|character|5616 \| 0x15f0||
|m_bHeldObjectOnOppositeSideOfPortal|boolean|5680 \| 0x1630||
|m_hHeldObjectPortal|ehandle|5684 \| 0x1634||
|m_bIntersectingPortalPlane|boolean|5688 \| 0x1638||
|m_bStuckOnPortalCollisionObject|boolean|5689 \| 0x1639||
|m_fNeuroToxinDamageTime|time|5692 \| 0x163c||
|m_StatsThisLevel|[PortalPlayerStatistics_t](#portalplayerstatistics_t)|5696 \| 0x1640||
|m_fTimeLastNumSecondsUpdate|time|5716 \| 0x1654||
|m_iNumCamerasDetatched|integer|5732 \| 0x1664||
|m_flLastPingTime|float|5736 \| 0x1668||
|m_bClientCheckPVSDirty|boolean|5740 \| 0x166c||
|m_flUseKeyCooldownTime|time|5744 \| 0x1670||
|m_bIsHoldingSomething|boolean|5748 \| 0x1674||
|m_bWasDroppedByOtherPlayerWhileTaunting|boolean|5757 \| 0x167d||
|m_nPortalsEnteredInAirFlags|integer|5988 \| 0x1764||
|m_nAirTauntCount|integer|5992 \| 0x1768||
|m_flMotionBlurAmount|float|6000 \| 0x1770||
|m_bPotatos|boolean|6006 \| 0x1776||
|m_PlayerGunType|integer|6008 \| 0x1778||
|m_bSpawnFromDeath|boolean|6016 \| 0x1780||
|m_flHullHeight|float|6044 \| 0x179c||

## Embedded

### CServerNetworkProperty

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_hParent|ehandle|52 \| 0x34|

### CCollisionProperty

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_vecMins|vector|8 \| 0x8|
|m_vecMaxs|vector|20 \| 0x14|
|m_usSolidFlags|short|32 \| 0x20|
|m_nSolidType|character|34 \| 0x22|solid
|m_triggerBloat|character|35 \| 0x23|
|m_flRadius|float|36 \| 0x24|
|m_nSurroundType|character|42 \| 0x2a|
|m_vecSpecifiedSurroundingMins|vector|44 \| 0x2c|
|m_vecSpecifiedSurroundingMaxs|vector|56 \| 0x38|
|m_vecSurroundingMins|vector|68 \| 0x44|
|m_vecSurroundingMaxs|vector|80 \| 0x50|

### CPlayerLocalData

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_chAreaBits|character|4 \| 0x4|
|m_chAreaPortalBits|character|36 \| 0x24|
|m_iHideHUD|integer|60 \| 0x3c|
|m_flFOVRate|float|64 \| 0x40|
|m_vecOverViewpoint|vector|68 \| 0x44|
|m_bDucked|boolean|80 \| 0x50|
|m_bDucking|boolean|81 \| 0x51|
|m_bInDuckJump|boolean|82 \| 0x52|
|m_nDuckTimeMsecs|integer|84 \| 0x54|
|m_nDuckJumpTimeMsecs|integer|88 \| 0x58|
|m_nJumpTimeMsecs|integer|92 \| 0x5c|
|m_nStepside|integer|96 \| 0x60|
|m_flFallVelocity|float|100 \| 0x64|
|m_nOldButtons|integer|104 \| 0x68|
|m_vecPunchAngle|vector|112 \| 0x70|
|m_vecPunchAngleVel|vector|124 \| 0x7c|
|m_bDrawViewmodel|boolean|136 \| 0x88|
|m_bWearingSuit|boolean|137 \| 0x89|
|m_bPoisoned|boolean|138 \| 0x8a|
|m_flStepSize|float|140 \| 0x8c|
|m_bAllowAutoMovement|boolean|144 \| 0x90|
|m_skybox3d|[sky3dparams_t](#sky3dparams_t)|148 \| 0x94|
|m_fog|[fogparams_t](#fogparams_t)|308 \| 0x134|
|m_audio|[audioparams_t](#audioparams_t)|384 \| 0x180|

### fogplayerparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_hCtrl|ehandle|4 \| 0x4|
|m_flTransitionTime|float|8 \| 0x8|
|m_OldColor|color32|12 \| 0xc|
|m_flOldStart|float|16 \| 0x10|
|m_flOldEnd|float|20 \| 0x14|
|m_NewColor|color32|36 \| 0x24|
|m_flNewStart|float|40 \| 0x28|
|m_flNewEnd|float|44 \| 0x2c|

### CPlayerState

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|deadflag|boolean|4 \| 0x4|
|v_angle|vector|8 \| 0x8|

### CPortalPlayerLocalData

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_bShowingViewFinder|boolean|4 \| 0x4|
|m_flAirControlSupressionTime|float|8 \| 0x8|
|m_nLocatorEntityIndices|integer|12 \| 0xc|
|m_bPlacingPhoto|boolean|76 \| 0x4c|
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
|m_PaintedPowerType|integer|352 \| 0x160|
|m_flAirInputScale|float|368 \| 0x170|
|m_flCurrentStickTime|float|372 \| 0x174|
|m_nStickCameraState|integer|376 \| 0x178|
|m_InAirState|integer|380 \| 0x17c|
|m_bDoneStickInterp|boolean|384 \| 0x180|
|m_bDoneCorrectPitch|boolean|385 \| 0x181|
|m_bAttemptHullResize|boolean|386 \| 0x182|
|m_bJumpedThisFrame|boolean|387 \| 0x183|
|m_bBouncedThisFrame|boolean|388 \| 0x184|
|m_bDuckedInAir|boolean|389 \| 0x185|
|m_hTractorBeam|ehandle|392 \| 0x188|
|m_bZoomedIn|boolean|400 \| 0x190|
|m_fBouncedTime|time|404 \| 0x194|
|m_bPreventedCrouchJumpThisFrame|boolean|408 \| 0x198|

### PortalPlayerStatistics_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|iNumPortalsPlaced|integer|4 \| 0x4|
|iNumStepsTaken|integer|8 \| 0x8|
|fNumSecondsTaken|float|12 \| 0xc|
|fDistanceTaken|float|16 \| 0x10|

### sky3dparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|scale|integer|4 \| 0x4|
|origin|vector|8 \| 0x8|
|area|integer|20 \| 0x14|
|fog|[fogparams_t](#fogparams_t)|24 \| 0x18|

### fogparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|dirPrimary|vector|4 \| 0x4|
|colorPrimary|color32|16 \| 0x10|
|colorSecondary|color32|20 \| 0x14|
|colorPrimaryLerpTo|color32|24 \| 0x18|
|colorSecondaryLerpTo|color32|28 \| 0x1c|
|start|float|32 \| 0x20|
|end|float|36 \| 0x24|
|farz|float|40 \| 0x28|
|maxdensity|float|44 \| 0x2c|
|startLerpTo|float|48 \| 0x30|
|endLerpTo|float|52 \| 0x34|
|maxdensityLerpTo|float|56 \| 0x38|
|lerptime|time|60 \| 0x3c|
|duration|float|64 \| 0x40|
|enable|boolean|68 \| 0x44|
|blend|boolean|69 \| 0x45|

### audioparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|localSound|vector|4 \| 0x4|
|soundscapeIndex|integer|100 \| 0x64|
|localBits|integer|104 \| 0x68|
|entIndex|integer|108 \| 0x6c|

### fogparams_t

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|dirPrimary|vector|4 \| 0x4|
|colorPrimary|color32|16 \| 0x10|
|colorSecondary|color32|20 \| 0x14|
|colorPrimaryLerpTo|color32|24 \| 0x18|
|colorSecondaryLerpTo|color32|28 \| 0x1c|
|start|float|32 \| 0x20|
|end|float|36 \| 0x24|
|farz|float|40 \| 0x28|
|maxdensity|float|44 \| 0x2c|
|startLerpTo|float|48 \| 0x30|
|endLerpTo|float|52 \| 0x34|
|maxdensityLerpTo|float|56 \| 0x38|
|lerptime|time|60 \| 0x3c|
|duration|float|64 \| 0x40|
|enable|boolean|68 \| 0x44|
|blend|boolean|69 \| 0x45|
