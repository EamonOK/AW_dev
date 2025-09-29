// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

// m61_49_42_00.emevd

$Event(0, Default, function() {
    // ===== VANILLA (unchanged) =====
    $InitializeCommonEvent(0, 90005261, 2049420200, 2049422200, 45, 0, -1);
    $InitializeEvent(0, 2049422200, 2049420200, 2049420300);
    $InitializeEvent(0, 2049422201, 2049420200);
    $InitializeEvent(0, 2049422202, 2049420200);
    $InitializeEvent(0, 2049422203, 2049420200);
    $InitializeCommonEvent(0, 90005301, 2049420200, 2049420200, 2049420700, 0, 0);
    $InitializeEvent(1, 2049422200, 2049420202, 2049420302);
    $InitializeEvent(1, 2049422201, 2049420202);
    $InitializeEvent(1, 2049422202, 2049420202);
    $InitializeEvent(1, 2049422203, 2049420202);
    $InitializeCommonEvent(0, 90005301, 2049420202, 2049420202, 2049420720, 0, 0);
    $InitializeCommonEvent(0, 90005638, 2049420600, 2049421600, 2049421601);
    $InitializeEvent(0, 2049422500, 2049421550, 2049422550);
    $InitializeEvent(1, 2049422500, 2049421551, 2049422551);
    $InitializeEvent(2, 2049422500, 2049421552, 2049422552);
    $InitializeEvent(3, 2049422500, 2049421553, 2049422553);
    $InitializeEvent(4, 2049422500, 2049421554, 2049422554);
    $InitializeEvent(6, 2049422500, 2049421556, 2049422556);
    $InitializeEvent(7, 2049422500, 2049421557, 2049422557);
    $InitializeEvent(8, 2049422500, 2049421558, 2049422558);
    $InitializeEvent(9, 2049422500, 2049421559, 2049422559);
    $InitializeEvent(10, 2049422500, 2049421560, 2049422560);
    $InitializeEvent(11, 2049422500, 2049421561, 2049422561);
    $InitializeEvent(12, 2049422500, 2049421562, 2049422562);
    $InitializeEvent(13, 2049422500, 2049421563, 2049422563);
    $InitializeEvent(14, 2049422500, 2049421564, 2049422564);
    $InitializeCommonEvent(0, 90005706, 2049420700, 30011, 2049422700);
    $InitializeEvent(0, 2049420700, 2049421700, 2049420700);

    // ===== OUR MOVED GRACE (kept, no bonfire swap) =====
    // Use the original lit flag for this site and your moved AEG099_060_9001.
    const GRACE_LIT_FLAG = 2048430001;
    const GRACE_ASSET    = 2049421951; // your moved grace orb's asset EntityID
    RegisterBonfire(GRACE_LIT_FLAG, GRACE_ASSET, 0, 0, 0, 5);
    
    
    // DOOR
    $InitializeCommonEvent(0, 90005511, 61490560, 61491560, 61493560, 27043, 0);
    $InitializeCommonEvent(0, 90005512, 61490560, 61492560, 61492561);
    
});






// ===== vanilla map events (unchanged) =====
$Event(2049422200, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(CharacterHasSpEffect(chrEntityId, 20011451) && CharacterHasSpEffect(chrEntityId, 20011450));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    ClearSpEffect(chrEntityId, 20011450);
    RestartEvent();
});

$Event(2049422201, Restart, function(chrEntityId) {
    if (CharacterDead(chrEntityId)) { EndEvent(); }
    SetSpEffect(chrEntityId, 20011470);
    SetSpEffect(chrEntityId, 19690);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(CharacterHasSpEffect(chrEntityId, 20011471));
    ClearSpEffect(chrEntityId, 20011470);
    CreateNPCPart(chrEntityId, 10, NPCPartType.Part10, 99999, 1, 1, false, false);
    SetNPCPartSEAndSFX(chrEntityId, 10, 109, 109, -1, 113, -1);
    EnableCharacterHPBarDisplay(chrEntityId);
    SetSpEffect(chrEntityId, 20011472);
});

$Event(2049422202, Restart, function(chrEntityId) {
    if (CharacterDead(chrEntityId)) { EndEvent(); }
    WaitFor(CharacterHasSpEffect(chrEntityId, 20011453) || CharacterHasSpEffect(chrEntityId, 20011451));
    if (!CharacterHasSpEffect(chrEntityId, 20011451)) {
        SetSpEffect(10000, 20011454);
    } else {
        SetSpEffect(10000, 20011455);
    }
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2049422203, Restart, function(chrEntityId) {
    if (CharacterDead(chrEntityId)) { EndEvent(); }
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.PassiveAlert)
        || CharacterAIState(chrEntityId, AIStateType.ActiveAlert)
        || CharacterAIState(chrEntityId, AIStateType.Combat)
    );
    chr  = CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
    chr2 = CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
    chr3 = CharacterAIState(chrEntityId, AIStateType.Combat);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    SetSpEffect(chrEntityId, 20011458);
    SetSpEffect(chrEntityId, 20011474);
    Goto(L20);
L1:
    SetSpEffect(chrEntityId, 20011459);
    Goto(L20);
    SetSpEffect(chrEntityId, 20011474);
L2:
    SetSpEffect(chrEntityId, 20011460);
    SetSpEffect(chrEntityId, 20011475);
L20:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2049422500, Restart, function(entityId, areaEntityId) {
    WaitFor(
        HasDamageType(entityId, 0, DamageType.Unspecified)
        || (InArea(10000, areaEntityId)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)))
    );
    WaitFixedTimeSeconds(0.1);
    PlaySE(entityId, SoundType.EnvironmentalSound, 610200888);
    SpawnOneshotSFX(TargetEntityType.Asset, entityId, 100, 861221);
    TriggerAISound(8000, areaEntityId, TargetEntityType.Area);
    WaitFixedTimeSeconds(1.5);
    TriggerAISound(8000, areaEntityId, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2049420700, Restart, function(assetEntityId, chrEntityId) {
    WaitFixedTimeFrames(1);
    EnableAssetInvunerability(assetEntityId);
    WarpAssetToCharacter(assetEntityId, chrEntityId, -1);
    EndEvent();
});
