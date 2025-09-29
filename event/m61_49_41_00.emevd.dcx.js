// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

$Event(0, Default, function() {
    // VANILLA
    RegisterBonfire(2049410000, 2049411950, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 2049410800, 30000, 20000, 20, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005870, 2049410800, 905580601, 25);
    $InitializeCommonEvent(0, 90005860, 2049410800, 0, 2049410800, 1, 30850, 0);
    $InitializeCommonEvent(0, 90005734, 4265, 2048429222, 2049412710, 2049412710, 2048429222, -1);
    $InitializeEvent(0, 2049410700, 2048429224, 4260, 4265, 2048429222);

    // YOUR ADDED BOSS (kept)
    $InitializeCommonEvent(0, 90005870, 2049417850, 920517100, 28);
    $InitializeCommonEvent(0, 90005860, 2049417850, 0, 2049417850, 1, 30805, 0);

    // >>> NEW: hook boss-death → set global flag 9297 (awards AWx Key via common 1200)
    $InitializeEvent(0, 2049417897);

    // YOUR EXTRAS (kept)
    $InitializeEvent(0, 2049412899, 2049410800);
    $InitializeEvent(1, 2049412899, 2049417850);
    $InitializeEvent(0, 62082580);
    // --- AWx: Boss defeat watcher (mirrors Crusader’s 31122800 pattern)
    $InitializeEvent(0, 2049417858);

});

// YOUR EXTRAS (kept)
$Event(62082580, Default, function() {
    RegisterLadder(68018582, 68018583, 68008582);
    RegisterLadder(68018584, 68018585, 68008584);
});

$Event(2049412899, Default, function(chrEntityId) {
    WaitFor(CharacterBackreadStatus(chrEntityId, NotEqual, 1));
    WaitFixedTimeFrames(1);
    SetSpEffect(chrEntityId, 93852);
    EndEvent();
});

// >>> NEW: AWx dragon defeat → raise 9297 so common 1200 awards ItemLot 2008038
$Event(2049417897, Restart, function() {
    // if item already awarded (e.g., on reload), do nothing
    EndIf(EventFlag(9297));
    // wait for the AWx dragon (entity 2049417850) to actually die
    WaitFor(CharacterHPValue(2049417850) <= 0);
    WaitFixedTimeSeconds(4);
    WaitFor(CharacterDead(2049417850));
    // raise the global “boss reward” flag watched by common 1200
    SetEventFlagID(9297, ON);
    EndEvent();
});

// ボス撃破 -- Defeat the boss (AWx dragon)
// Mirrors the Crusader flow: wait HP<=0 → 4s → PlaySE → wait dead → set reward flag.
// We DO NOT call the banner here (90005860 already does it for this boss).
$Event(2049417858, Restart, function() {
    EndIf(EventFlag(2049417850));                         // already cleared
    WaitFor(CharacterHPValue(2049417850) <= 0);           // boss HP hits 0
    WaitFixedTimeSeconds(4);
    PlaySE(2049417850, SoundType.SFX, 888880000);         // same SFX as Crusader
    WaitFor(CharacterDead(2049417850));                   // ensure death registered

    // Award hook: raise the global flag watched by common.emevd:1200
    // (You already added: InitializeEvent(97, 1200, 9297, 2008038, 0, 520777) in common)
    SetEventFlagID(9297, ON);

    // (Optional, if you want parity with Crusader’s “612xx” telemetry flag)
    // if (PlayerIsInOwnWorld()) { SetEventFlagID(61297, ON); }

    EndEvent();
});



// VANILLA HELPERS (present in vanilla; restored, not initialized)
$Event(2049412200, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 20011451) && CharacterHasSpEffect(chrEntityId, 20011450));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    ClearSpEffect(chrEntityId, 20011450);
    RestartEvent();
});

$Event(2049412201, Restart, function(chrEntityId) {
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 20011450)
            && CharacterRatioAIState(chrEntityId, AIStateType.Normal));
    SetSpEffect(chrEntityId, 20011450);
    ClearSpEffect(chrEntityId, 20011452);
    RestartEvent();
});

$Event(2049412202, Restart, function(chrEntityId) {
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 20011453) || CharacterHasSpEffect(chrEntityId, 20011451));
    if (!CharacterHasSpEffect(chrEntityId, 20011451)) {
        SetSpEffect(10000, 20011454);
    } else {
L0:
        SetSpEffect(10000, 20011455);
    }
L1:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2049412203, Restart, function(chrEntityId) {
    chrSp |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert)
        || CharacterAIState(chrEntityId, AIStateType.ActiveAlert)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    WaitFor(chrSp);
    chr = CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
    chr2 = CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
    chr3 = CharacterAIState(chrEntityId, AIStateType.Combat);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    SetSpEffect(chrEntityId, 20011458);
    chrSp |= !CharacterRidingMount(10000) || CharacterHasSpEffect(chrEntityId, 20011462);
    if (!chrSp) {
        SetSpEffect(10000, 20011461);
        SetSpEffect(chrEntityId, 20011462);
    }
    Goto(L20);
L1:
    SetSpEffect(chrEntityId, 20011459);
    Goto(L20);
L2:
    SetSpEffect(chrEntityId, 20011460);
    chrSp |= !CharacterRidingMount(10000) || CharacterHasSpEffect(chrEntityId, 20011462);
    if (!chrSp) {
        SetSpEffect(10000, 20011461);
        SetSpEffect(chrEntityId, 20011462);
    }
    Goto(L20);
L20:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// VANILLA (present and already in your file)
$Event(2049410700, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    SetEventFlagID(eventFlagId, OFF);
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(eventFlagId2) || !EventFlag(eventFlagId3));
    WaitFor(EventFlag(eventFlagId2) && EventFlag(eventFlagId3) && EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId, ON);
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId2)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId3)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId4));
    RestartEvent();
});

