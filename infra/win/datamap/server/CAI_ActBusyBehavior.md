# CAI_ActBusyBehavior

Datamap server-side.

|Prop|Type|Offset|External|
|---|:-:|:-:|--:|
|m_ScheduleChannels|custom|12 \| 0xc||
|m_bEnabled|boolean|44 \| 0x2c||
|m_bForceActBusy|boolean|45 \| 0x2d||
|m_ForcedActivity|custom|48 \| 0x30||
|m_bTeleportToBusy|boolean|52 \| 0x34||
|m_bUseNearestBusy|boolean|53 \| 0x35||
|m_bLeaving|boolean|54 \| 0x36||
|m_bVisibleOnly|boolean|55 \| 0x37||
|m_bUseRenderBoundsForCollision|boolean|56 \| 0x38||
|m_flForcedMaxTime|float|60 \| 0x3c||
|m_bBusy|boolean|64 \| 0x40||
|m_bMovingToBusy|boolean|65 \| 0x41||
|m_bNeedsToPlayExitAnim|boolean|66 \| 0x42||
|m_flNextBusySearchTime|time|68 \| 0x44||
|m_flEndBusyAt|time|72 \| 0x48||
|m_flBusySearchRange|float|76 \| 0x4c||
|m_bInQueue|boolean|80 \| 0x50||
|m_iCurrentBusyAnim|integer|84 \| 0x54||
|m_hActBusyGoal|ehandle|88 \| 0x58||
|m_bNeedToSetBounds|boolean|92 \| 0x5c||
|m_hSeeEntity|ehandle|96 \| 0x60||
|m_fTimeLastSawSeeEntity|time|100 \| 0x64||
|m_bExitedBusyToDueLostSeeEntity|boolean|104 \| 0x68||
|m_bExitedBusyToDueSeeEnemy|boolean|105 \| 0x69||
|m_iNumConsecutivePathFailures|integer|108 \| 0x6c||
|m_bAutoFireWeapon|boolean|112 \| 0x70||
|m_flDeferUntil|time|116 \| 0x74||
|m_iNumEnemiesInSafeZone|integer|120 \| 0x78||
