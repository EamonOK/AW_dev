// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 9005810, 28000800, 28000000, 28000950, 28001950, 5);
    RegisterBonfire(28000001, 28001951, 0, 0, 0, 5);
    RegisterBonfire(28000002, 28001952, 0, 0, 0, 5);
    RegisterBonfire(28000003, 28001953, 0, 0, 0, 5);
    //$InitializeEvent(0, 28004540); ////// test close door

     // --- DOOR: switch from plain to key-locked (gaol-style) ---
    // $InitializeCommonEvent(0, 90005515, 28008540, 28001540);    // (old: no key)
    $InitializeCommonEvent(0, 
        90005510,
        28008540,   // persistence flag (same as before)
        28001540,   // DOOR asset (AEG4644_013_0500)
        28003540,   // KEY PLAQUE ObjAct asset (AEG449_008_0500)  <-- add this to the map
//        464013,     // ObjActParam for the plaque
        464015,
//        20208005, old depreciated key mssg
        20208038,   // “key token” for Goods 2008038 (2020 + 8038)
        0);         // reserved/unused, keep 0

    
    $InitializeEvent(0, 28000800);
    $InitializeEvent(0, 28002810);
    $InitializeEvent(0, 28002811);
    $InitializeEvent(0, 28002849);
    $InitializeEvent(0, 28002814);
    $InitializeEvent(0, 28002816);
    $InitializeEvent(0, 28002820);
    $InitializeEvent(0, 28002821);
    $InitializeEvent(0, 28002822);
    $InitializeEvent(0, 28002823);
    $InitializeCommonEvent(0, 90005200, 28000310, 30000, 20000, 28002310, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005260, 28000200, 28002203, 9, 0, 0);
    $InitializeCommonEvent(0, 90005260, 28000201, 28002203, 9, 0, 0);
    $InitializeCommonEvent(0, 90005260, 28000202, 28002203, 9, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000203, 28002203, 0, 0);
    $InitializeCommonEvent(0, 90005251, 28000205, 10, 0, 0);
    $InitializeCommonEvent(0, 90005221, 28000204, 30001, 20001, 0, 0);
    $InitializeCommonEvent(0, 90005221, 28000207, 30000, 20000, 0, 0);
    $InitializeEvent(1, 28002280, 28000281, 28002289, 1.2, 0, 1);
    $InitializeEvent(2, 28002280, 28000282, 28002289, 0.7, 0, 3);
    $InitializeEvent(3, 28002280, 28000283, 28002289, 0.5, 0, 10);
    $InitializeEvent(4, 28002280, 28000284, 28002289, 1, 0, 10);
    $InitializeEvent(5, 28002280, 28000285, 28002289, 1.7, 0, 7);
    $InitializeEvent(6, 28002280, 28000286, 28002289, 1.3, 0, 1.5);
    $InitializeEvent(7, 28002280, 28000287, 28002289, 1, 0, 0);
    $InitializeEvent(9, 28002280, 28000380, 28002289, 0.5, 0, 4);
    $InitializeCommonEvent(0, 90005250, 28000210, 28002210, 1.4, 0);
    $InitializeCommonEvent(0, 90005250, 28000211, 28002210, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000212, 28002210, 0.7, 0);
    $InitializeCommonEvent(0, 90005250, 28000216, 28002216, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000217, 28002216, 0.7, 0);
    $InitializeCommonEvent(0, 90005250, 28000215, 28002215, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000214, 28002214, 0, 0);
    $InitializeCommonEvent(0, 90005261, 28000229, 28002229, 5, 0, 3010);
    $InitializeEvent(0, 28002229);
    $InitializeCommonEvent(0, 90005250, 28000227, 28002227, 0, 3001);
    $InitializeCommonEvent(0, 90005200, 28000311, 30000, 20000, 28002311, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000220, 28002220, 0, 3003);
    $InitializeCommonEvent(0, 90005211, 28000221, 30000, 20000, 28002221, 4, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 28000222, 30000, 20000, 28002222, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 28000223, 30000, 20000, 28002222, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000224, 28002222, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000350, 28002350, 1, 0);
    $InitializeCommonEvent(0, 90005250, 28000351, 28002351, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000354, 28002354, 0, 0);
    $InitializeEvent(0, 28002355, 28000355, 6, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000390, 28002390, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000358, 28002358, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000360, 28002360, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000361, 28002361, 0, 0);
    $InitializeCommonEvent(0, 90005250, 28000362, 28002360, 0, 0);
    $InitializeEvent(0, 28002580);
    $InitializeCommonEvent(0, 90005520, 28000589, 28001588, 28000588, 28000859);
    $InitializeEvent(0, 28002498);
    $InitializeCommonEvent(0, 90005525, 28000610, 28001610);
    $InitializeCommonEvent(1, 90005525, 28000611, 28001611);
    $InitializeCommonEvent(0, 90005540, 28008500, 28001500, 28001501, 28003500, 464009, 12, 20);
    $InitializeCommonEvent(1, 90005540, 28008502, 28001502, 28001503, 28003502, 464009, 12, 20);
    $InitializeCommonEvent(0, 90005515, 28008541, 28001541);
    $InitializeEvent(0, 28000700, 28000800, 28000801, 28000800, 115); ////
    $InitializeEvent(0, 28000701, 28000800, 28002700, 2, 28002706, 28002707, 2.5, 28002705, 28002701, 28002801, 28002709, 28002708);
    $InitializeEvent(0, 28000702, 28000800, 28009210, 28002700, 28002702);
    $InitializeEvent(1, 28000702, 28000800, 28009211, 28002701, 28002703);
    $InitializeEvent(2, 28000702, 28000800, 28009212, 28002702, 28002704);
    $InitializeCommonEvent(0, 90005706, 28000700, 30020, 0);
    $InitializeCommonEvent(0, 90005706, 28000701, 30021, 0);
});

$Event(28002580, Default, function() {
    RegisterLadder(28000580, 28000581, 28001580);
    RegisterLadder(28000582, 28000583, 28001582);
    RegisterLadder(28000584, 28000585, 28001584);
    RegisterLadder(28000586, 28000587, 28001586);
});

// ------------------------------------------
// test door
// One-time closer for AEG4644_013_0500 (ObjAct flag 28008540)
//$Event(28004540, Default, function() {
//    EndIf(!PlayerIsInOwnWorld());
//    // tiny wait so assets are loaded
//    WaitFixedTimeFrames(1);
//    SetEventFlagID(28008540, OFF);            // clear the ObjAct persistence
//    ReproduceAssetAnimation(28001540, 0);     // snap the door asset to its default (closed) anim
//    EndEvent();
//});


// If the door is not marked opened in the save, ensure the mesh spawns CLOSED.
$Event(28004542, Restart, function() {
    WaitFixedTimeFrames(1);          // ensure assets are loaded
    EndIf(EventFlag(28008540));      // if opened in save, do nothing (let it stay open)
    ReproduceAssetAnimation(28001540, 0); // closed pose
});


// ------------------------------------------


$Event(28002229, Default, function() {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.BluePhantom)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 28002228));
        SetNetworkconnectedThisEventSlot(ON);
    }
L0:
    ChangeCharacterPatrolBehavior(28000229, 28002399);
});

$Event(28002280, Restart, function(chrEntityId, areaEntityId, timeSeconds, animationId, timeSeconds2) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    SetSpEffect(chrEntityId, 8082);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    areaChrSp = InArea(10000, areaEntityId) && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
    WaitFixedTimeSeconds(timeSeconds2);
    ClearSpEffect(chrEntityId, 8082);
});

$Event(28002355, Restart, function(chrEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    flagArea = EventFlag(28008500) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    flagAreaChrSp = flagArea && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || flagAreaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (flagAreaChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

$Event(28002498, Restart, function() {
    if (!EventFlag(28000589)) {
        ModifyNavimeshConnectionBitflag(28002498, NavimeshType.Solid, BitopType.Add);
        WaitFor(EventFlag(28000589));
    }
L0:
    ModifyNavimeshConnectionBitflag(28002498, NavimeshType.Solid, BitopType.Delete);
    EndEvent();
});

$Event(28000800, Restart, function() {
    EndIf(EventFlag(28000800));
    WaitFor(CharacterHPValue(28000800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(28000800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(28000800));
    HandleBossDefeatAndDisplayBanner(28000800, TextBannerType.LegendFelled);
    SetEventFlagID(28000800, ON);
    SetEventFlagID(9156, ON);
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(61156, ON);
    }
});

$Event(28002810, Restart, function() {
    if (EventFlag(28000800)) {
        DisableCharacter(28005800);
        DisableCharacterCollision(28005800);
        ForceCharacterDeath(28005800, false);
        EndEvent();
    }
L0:
    if (!PlayerIsInOwnWorld() && EventFlag(28003811)) {
        EndEvent();
    }
L0:
    DisableCharacterAI(28005800);
    DisableCharacterGravity(28000800);
    DisableCharacterCollision(28000800);
    DisableCharacter(28000800);
    SetCharacterAIId(28000801, 500000003);
    DisableCharacterAI(28000801);
    EnableCharacterInvincibility(28000801);
    ForceAnimationPlayback(28000801, 30000, false, false, false);
    if (!EventFlag(28000801)) {
        WaitFor(EventFlag(28000814));
    } else {
L1:
        WaitFor(EventFlag(28002805) && InArea(10000, 28002800));
    }
L2:
    SetEventFlagID(28002700, ON);
    EnableCharacterAI(28000801);
    ForceAnimationPlayback(28000801, 20000, false, true, false);
    DisableCharacterInvincibility(28000801);
    ForceAnimationPlayback(28000801, 20, false, false, false);
    SetEventFlagID(28002708, ON);
    SetNetworkconnectedEventFlagID(28000801, ON);
});

$Event(28002811, Restart, function() {
    EndIf(EventFlag(28000800));
    if (!PlayerIsInOwnWorld() && EventFlag(28003811)) {
        DisableCharacter(28000801);
        DisableCharacterCollision(28000801);
        WarpCharacterAndCopyFloor(28000800, TargetEntityType.Area, 28002812, -1, 28000801);
        EnableCharacterGravity(28000800);
        EnableCharacterCollision(28000800);
        EnableCharacter(28000800);
        EnableCharacterAI(28000800);
        SetNetworkUpdateRate(28000800, true, CharacterUpdateFrequency.AlwaysUpdate);
        DisplayBossHealthBar(Enabled, 28000800, 0, 905051000);
        EndEvent();
    }
L0:
    SetSpEffect(28000100, 9531);
    WaitFor(CharacterHPValue(28000801) < 1);
    SetEventFlagID(28003811, ON);
    EnableCharacter(28000800);
    DisableCharacterCollision(28000801);
    WaitFixedTimeSeconds(5);
    if (PlayerIsInOwnWorld()) {
        PlayCutsceneToPlayerAndWarp(28000000, CutscenePlayMode.Skippable, 28002810, 28000000, 10000, 28000000, false);
    } else {
        PlayCutsceneToPlayer(28000000, CutscenePlayMode.Skippable, 10000);
    }
    WaitFixedTimeRealFrames(1);
    if (PlayerIsInOwnWorld()) {
        SetCameraAngle(8.26, 7.79);
    }
    SetEventFlagID(28002801, ON);
    SetEventFlagID(28002802, ON);
    DisableCharacter(28000801);
    WarpCharacterAndCopyFloor(28000800, TargetEntityType.Area, 28002812, -1, 28000801);
    EnableCharacterGravity(28000800);
    EnableCharacterCollision(28000800);
    WaitFixedTimeRealFrames(1);
    ForceAnimationPlayback(28000800, 20000, false, false, false);
    EnableCharacterAI(28000800);
    SetNetworkUpdateRate(28000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 28000800, 0, 905051000);
    SetSpEffect(28000100, 9532);
});

$Event(28002814, Restart, function() {
    EndIf(EventFlag(28000800));
    EndIf(EventFlag(28000801));
    SetEventFlagID(28000814, OFF);
    WaitFor(InArea(10000, 28002814));
    SetEventFlagID(28000814, ON);
});

$Event(28002815, Restart, function(eventFlagId, assetEntityId, sfxId) {
    DisableNetworkSync();
    DisableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom)
            || CharacterType(10000, TargetType.Invader)
            || CharacterType(10000, TargetType.Invader2)
            || CharacterType(10000, TargetType.Invader3))
            && !EventFlag(eventFlagId))
            || ((CharacterType(10000, TargetType.WhitePhantom)
                || CharacterType(10000, TargetType.BluePhantom))
                && !EventFlag(eventFlagId))
            || ((EventFlag(28000814) || EventFlag(28000801)) && !EventFlag(eventFlagId))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && !CharacterType(10000, TargetType.WhitePhantom))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, assetEntityId, 1, 1)));
    EnableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    CreateAssetfollowingSFX(assetEntityId, 101, sfxId);
    WaitFor(
        !((CharacterType(10000, TargetType.BlackPhantom)
            || CharacterType(10000, TargetType.Invader)
            || CharacterType(10000, TargetType.Invader2)
            || CharacterType(10000, TargetType.Invader3))
            && !EventFlag(eventFlagId))
            && !((CharacterType(10000, TargetType.WhitePhantom)
                || CharacterType(10000, TargetType.BluePhantom))
                && !EventFlag(eventFlagId))
            && !((EventFlag(28000814) || EventFlag(28000801)) && !EventFlag(eventFlagId))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && !CharacterType(10000, TargetType.WhitePhantom))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, assetEntityId, 1, 1)));
    RestartEvent();
});

$Event(28002816, Restart, function() {
    EndIf(EventFlag(28000800));
    WaitFor(EventFlag(28002709));
    SetCharacterAIId(28000801, 50500000);
    EnableCharacterAI(28000801);
});

$Event(28002820, Restart, function() {
    EndIf(EventFlag(28000800));
    WaitFor(CharacterHasSpEffect(28000800, 20010269));
    SetEventFlagID(28002820, ON);
});

$Event(28002821, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(28000800));
    ChangeWeather(Weather.None, -1, false);
    WaitFor(InArea(10000, 28002821) && EventFlag(28002820));
    ChangeWeather(Weather.WindyPuffyClouds, -1, true);
    DeleteAssetfollowingSFX(28001821, true);
    CreateAssetfollowingSFX(28001821, 200, 828710);
    WaitFor(EventFlag(28000800));
    ChangeWeather(Weather.None, -1, false);
    DeleteAssetfollowingSFX(28001821, true);
});

$Event(28002822, Restart, function() {
    EndIf(EventFlag(28000800));
    dmg = HasDamageType(28000801, 0, DamageType.Unspecified);
    WaitFor(EventFlag(28002700) && (EventFlag(28002701) || dmg));
    if (dmg.Passed) {
        SetEventFlagID(28002705, ON);
    }
    SetEventFlagID(28002801, ON);
});

$Event(28002823, Restart, function() {
    EndIf(EventFlag(28000800));
    WaitFor(CharacterHasSpEffect(28000800, 20010298));
    SetEventFlagID(28002823, ON);
});

$Event(28002830, Restart, function(eventFlagId, bgmBossConvParamId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, value, value2) {
    DisableNetworkSync();
    if (EventFlag(eventFlagId)) {
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(eventFlagId2, OFF);
    }
    flag &= EventFlag(eventFlagId2);
    if (!PlayerIsInOwnWorld()) {
        flag &= EventFlag(eventFlagId3);
    }
    if (0 != eventFlagId4) {
        flag &= EventFlag(eventFlagId4);
    }
    WaitFor(flag);
    WaitFixedTimeFrames(1);
    if (!EventFlag(eventFlagId5)) {
        hpFlag |= CharacterHPValue(28000801) <= 0;
    }
    hpFlag |= EventFlag(eventFlagId5) || EventFlag(eventFlagId);
    WaitFor(hpFlag);
    SetBossBGM(bgmBossConvParamId, BossBGMState.Stop1);
    WaitFor(EventFlag(eventFlagId5) || EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId)) {
        WaitFixedTimeFrames(1);
        if (Signed(value) != 0) {
        }
        SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp);
        WaitFor(EventFlag(28002823) || EventFlag(eventFlagId));
        if (!EventFlag(eventFlagId)) {
            SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp2);
            WaitFor(EventFlag(eventFlagId));
        }
    }
L1:
    if (Signed(value2) != 1) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
        EndEvent();
    }
    SetBossBGM(bgmBossConvParamId, BossBGMState.Stop1);
});

$Event(28002849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 28000800, 28001800, 28002800, 28002805, 28005800, 10000, 28000801, 28002801);
    $InitializeCommonEvent(0, 9005801, 28000800, 28001800, 28002800, 28002805, 28002806, 10000);
    $InitializeEvent(0, 28002815, 28000800, 28001800, 3);
    $InitializeEvent(0, 28002830, 28000800, 505000, 28002805, 28002806, 28002801, 28002802, 1, 0);
});

$Event(28000700, Restart, function(eventFlagId, chrEntityId, chrEntityId2, range) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    SetCharacterTalkRange(chrEntityId, range);
    if (0 != chrEntityId2) {
        SetCharacterTalkRange(chrEntityId2, range);
    }
    EndEvent();
});

$Event(28000701, Restart, function(eventFlagId, eventFlagId2, timeSeconds, eventFlagId3, eventFlagId4, targetTimeSeconds, eventFlagId5, eventFlagId6, areaEntityId, eventFlagId7, eventFlagId8) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    GotoIf(L0, !EventFlag(eventFlagId3));
    Goto(L1);
L0:
    WaitFor(EventFlag(eventFlagId2));
    WaitFixedTimeSeconds(timeSeconds);
    SetEventFlagID(eventFlagId3, ON);
    RestartEvent();
L1:
    WaitFor(EventFlag(eventFlagId4));
    WaitFor(
        ElapsedSeconds(targetTimeSeconds)
            || (EventFlag(eventFlagId8) && InArea(20000, areaEntityId))
            || EventFlag(eventFlagId5));
    SetNetworkconnectedEventFlagID(eventFlagId7, ON);
    EndIf(EventFlag(eventFlagId5));
    SetEventFlagID(eventFlagId6, ON);
    EndEvent();
});

$Event(28000702, Restart, function(eventFlagId, eventFlagId2, areaEntityId, eventFlagId3) {
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        InArea(20000, areaEntityId)
            || EventFlag(eventFlagId)
            || EventFlag(eventFlagId2)
            || EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId3));
    SetEventFlagID(eventFlagId3, ON);
    EndEvent();
});
