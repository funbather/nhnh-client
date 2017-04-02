/**
 * DB/Skills/SkillDescription.js
 *
 * Skill Description tABLE
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */

define(["./SkillConst"], function( SKID )
{
	"use strict";


	var SkillDescription = {};

	SkillDescription[SKID.SWD_SOUL] = [
		"Soul of the Swordsman",
		"Innate Passive",
		" ",
		"+20% VIT",
		"+35% Base HP",
		"-10% Physical Damage Taken",
	].join("\n");

	SkillDescription[SKID.SWD_FORCEOFWILL] = [
		"Force of Will",
		"Passive",
		" ",
		"You take $x% less physical damage from attacks. The damage reduction grows as you lose HP, up to $y% when at ^4488BBCritical HP^000000.",
	].join("\n");

	SkillDescription[SKID.SWD_DAUNTLESS] = [
		"Dauntless",
		"Passive",
		" ",
		"Gain +$x% DEF for each enemy attacking you.",
	].join("\n");

	SkillDescription[SKID.SWD_HARDHEARTED] = [
		"Hardhearted",
		"Passive",
		" ",
		"+$x% DEF",
	].join("\n");

	SkillDescription[SKID.SWD_PAVISE] = [
		"Pavise",
		"Passive",
		"Requires: ^4488BBShield^000000",
		" ",
		"Gain +$x% to Physical Block Chance and +$y% to Magical Block Chance while wearing a shield.",
	].join("\n");

	SkillDescription[SKID.SWD_SWASHBUCKLING] = [
		"Swashbuckling",
		"Support Spell",
		"Range: $y",
		" ",
		"^4488BBProvoke^000000 nearby enemies into attacking you, while also lowering their ATK by $x% for 10 seconds.",
	].join("\n");

	SkillDescription[SKID.SWD_SECONDWIND] = [
		"Second Wind",
		"Support Spell",
		"Cooldown: $zs, Requires: ^4488BBCritical HP^000000",
		" ",
		"Heal $x% of your Max HP over $y seconds, and cleanse yourself of ^4488BBPoison^000000, ^4488BBIgnite^000000, ^4488BBBleeding^000000, and ^4488BBBlind^000000.",
	].join("\n");

	SkillDescription[SKID.SWD_SWAGGER] = [
		"Swagger",
		"Support Spell",
		"Range: 9",
		" ",
		"^4488BBProvoke^000000 an enemy, and make their attacks $x% less likely to hit you for 10 seconds.",
	].join("\n");

	SkillDescription[SKID.SWD_ENDURE] = [
		"Endure",
		"Support Spell",
		"Cooldown: 12s",
		" ",
		"Gain a barrier for 8 seconds that absorbs incoming damage, up to $x% of your Max HP.",
	].join("\n");

	SkillDescription[SKID.SWD_UMBOBLOW] = [
		"Umbo Blow",
		"Attack",
		"Range: 2, Requires: ^4488BBShield^000000",
		" ",
		"Deal $x% ATK damage with a powerful strike from your shield.",
		" ",
		"Umbo Blow deals a bonus $y% ATK damage for every 1% Physical Block Chance you have.",
	].join("\n");

	SkillDescription[SKID.SWD_METEORMASH] = [
		"Meteor Mash",
		"Attack",
		"Cooldown: 5s, Range: 2",
		" ",
		"Slam your shield down into the ground, dealing $x% ATK damage and ^4488BBSquashing^000000 all nearby enemies. ^4488BBSquashed^000000 enemies are ^4488BBProvoked^000000 and have -50% MSPD.",
	].join("\n");

	SkillDescription[SKID.SWD_SHIELDBOOMERANG] = [
		"Shield Boomerang",
		"Attack",
		"Range: 9, Requires: ^4488BBShield^000000",
		" ",
		"Fling your shield at an enemy, dealing $x% ATK damage and ^4488BBProvoking^000000 them on impact.",
	].join("\n");

	SkillDescription[SKID.SWD_SKULLCRACK] = [
		"Skullcrack",
		"Attack",
		"Range: 2",
		" ",
		"Deal $x% ATK damage to an enemy with a powerful blow, with a 35% chance to ^4488BBStun^000000 them for 2 seconds.",
	].join("\n");

	SkillDescription[SKID.SWD_SLEDGEHAMMER] = [
		"Sledgehammer",
		"Attack",
		"Cooldown: 2s, Range: 2",
		" ",
		"Deal $x% ATK damage to your target and all enemies within 2 tiles of them with a deadly swing of your weapon.",
	].join("\n");

	SkillDescription[SKID.THF_SOUL] = [
		"Soul of the Thief",
		"Innate Passive",
		" ",
		"+20% AGI",
		"+15% Physical Damage Dealt",
		"+0.2 Base ASPD",
	].join("\n");

	SkillDescription[SKID.THF_DOUBLESTRIKE] = [
		"Double Strike",
		"Passive",
		" ",
		"Your Basic Attacks have a $x% chance to hit twice.",
	].join("\n");

	SkillDescription[SKID.THF_REFLEXES] = [
		"Reflexes",
		"Passive",
		" ",
		"+$x% EVA",
	].join("\n");

	SkillDescription[SKID.THF_MERCILESS] = [
		"Merciless",
		"Passive",
		" ",
		"+$x% to CRIT",
		"+$y% to CRIT DMG",
	].join("\n");

	SkillDescription[SKID.THF_ADRENALINERUSH] = [
		"Adrenaline Rush",
		"Passive",
		" ",
		"+$x% to MSPD",
		"This bonus is doubled for 5 seconds after being attacked.",
	].join("\n");

	SkillDescription[SKID.THF_PICKPOCKET] = [
		"Pickpocket",
		"Passive",
		" ",
		"You have a $x% chance to gain a Coin Bag when killing an enemy.\n",
		"Coin Bags give a small amount of Munny and also have a chance of containing a crafting item.",
	].join("\n");

	SkillDescription[SKID.THF_CAMOUFLAGE] = [
		"Camouflage",
		"Support Spell",
		"Cooldown: 20s",
		" ",
		"Blend into your surroundings, gaining +$x% EVA and +20% to MSPD for 8 seconds.",
	].join("\n");

	SkillDescription[SKID.THF_DOUBLETEAM] = [
		"Double Team",
		"Support Spell",
		"Cooldown: 20s",
		" ",
		"Create an afterimage of yourself for $x seconds that copies all of your attacks. While the afterimage is active, you gain +$y% ASPD and your Basic Attacks will always Double Strike.",
		" ",
		"Using an offensive skill ends this effect.",
	].join("\n");

	SkillDescription[SKID.THF_BROWBEAT] = [
		"Browbeat",
		"Support Spell",
		"Range: 9",
		" ",
		"Very nicely coerce an enemy into giving up its valuable items. Browbeated enemies immediately become passive and have a $x% chance to drop an additional item when killed.",
	].join("\n");

	SkillDescription[SKID.THF_SONICSTRIKE] = [
		"Sonic Strike",
		"Attack",
		"Cooldown: 8s, Range: $x",
		" ",
		"Dash towards an enemy and deal $y% ATK damage on impact.",
		" ",
		"Sonic Strike's cooldown is refreshed when killing an enemy.",
	].join("\n");

	SkillDescription[SKID.THF_BONECUTTER] = [
		"Bonecutter",
		"Attack",
		"Range: 2",
		" ",
		"Deal $x% ATK damage with a deadly slash.",
		" ",
		"Bonecutter can Double Strike.",
	].join("\n");

	SkillDescription[SKID.THF_BLADEFLOURISH] = [
		"Blade Flourish",
		"Attack",
		"Cooldown: 4s, Range: 4",
		" ",
		"Deal $x% ATK damage to all enemies around you with a wide slash.",
	].join("\n");

	SkillDescription[SKID.THF_PUNCTURE] = [
		"Puncture",
		"Attack",
		"Range: 2",
		" ",
		"Deal $x% ATK damage and inflict ^4488BBBleeding^000000 on an enemy for $y seconds.",
	].join("\n");

	SkillDescription[SKID.ACO_SOUL] = [
		"Soul of the Acolyte",
		"Innate Passive",
		" ",
		"+20% MST",
		"+35% HP Regen",
		"+35% MP Regen",
		"+25% Buff Duration",
	].join("\n");

	SkillDescription[SKID.ACO_LIFELINK] = [
		"Life Link",
		"Passive",
		" ",
		"+$x% Healing Power\n",
		"When casting Cure on an ally, you are also healed for $y% of the amount."
	].join("\n");

	SkillDescription[SKID.ACO_BENEVOLENCE] = [
		"Benevolence",
		"Passive",
		" ",
		"Spells you cast consume $x% less MP when targeting an ally.",
	].join("\n");

	SkillDescription[SKID.ACO_SPIRITWARD] = [
		"Spirit Ward",
		"Passive",
		" ",
		"-$x% duration of status ailments inflicted on you.",
	].join("\n");

	SkillDescription[SKID.ACO_PURIFY] = [
		"Purify",
		"Support Spell",
		"Range: 9",
		" ",
		"Remove ^4488BBPoison^000000, ^4488BBIgnite^000000, ^4488BBBleeding^000000, ^4488BBSilence^000000, ^4488BBStun^000000, ^4488BBFreeze^000000, and ^4488BBBlind^000000 from an ally, and heal them for $x% MAG over 4 seconds.",
	].join("\n");

	SkillDescription[SKID.ACO_CURE] = [
		"Cure",
		"Support Spell",
		"Range: 9",
		" ",
		"Heal an ally for $x% MAG.",
	].join("\n");

	SkillDescription[SKID.ACO_RAISE] = [
		"Raise",
		"Support Spell",
		"Range: 9",
		" ",
		"Bring a fallen ally back to life with $x% of their Max HP, while also giving them a shield that provides damage immunity for 5 seconds.",
	].join("\n");

	SkillDescription[SKID.ACO_FORCEARMOR] = [
		"Force Armor",
		"Support Spell",
		"Range: 9",
		" ",
		"Grant a barrier to an ally that decreases physical damage taken by $x% for 60 seconds.",
	].join("\n");

	SkillDescription[SKID.ACO_GODSSTRENGTH] = [
		"God's Strength",
		"Support Spell",
		"Range: 9",
		" ",
		"Bless an ally with a heavenly aura, increasing their physical and magical damage by $x% for 60 seconds.",
	].join("\n");

	SkillDescription[SKID.ACO_HALLOWEDBOLT] = [
		"Hallowed Bolt",
		"Offensive Spell",
		"Range: 9",
		" ",
		"Deal $x% MAG damage to an enemy with holy magic.",
	].join("\n");

	SkillDescription[SKID.ACO_HEAVENLYBLOW] = [
		"Heavenly Blow",
		"Offensive Spell",
		"Range: 2",
		" ",
		"Embue your weapon with holy energies and strike an enemy, dealing $x% MAG + $y% ATK damage.",
	].join("\n");

	SkillDescription[SKID.MGN_SOUL] = [
		"Soul of the Magician",
		"Innate Passive",
		" ",
		"+20% INT",
		"+20% MP",
		"-10% Base Cast Time"
	].join("\n");

	SkillDescription[SKID.MGN_FIRELANCE] = [
		"Fire Lance",
		"Offensive Spell",
		"Range: 9",
		" ",
		"Launch two magical spears of fire at an enemy, dealing $x% MAG damage.",
	].join("\n");

	SkillDescription[SKID.MGN_INCINERATE] = [
		"Incinerate",
		"Offensive Spell",
		"Range: 9, Cooldown: 4s",
		" ",
		"Engulf an enemy in flames, dealing $x% MAG damage and ^4488BBIgniting^000000 them for $y seconds.",
	].join("\n");

	SkillDescription[SKID.MGN_EXPLOSION] = [
		"Explosion",
		"Offensive Spell",
		"Range: 9, Cooldown: 4s, Requires: ^4488BBIgnited Enemy^000000",
		" ",
		"Amplify the fire energies surrounding an ^4488BBIgnited^000000 enemy into an explosive burst of flames, dealing $x% damage to the target and any other enemies near them.",
	].join("\n");

	SkillDescription[SKID.MGN_COMET] = [
		"Comet",
		"Offensive Spell",
		"Range: 9, Cooldown: 8s",
		" ",
		"Focus all of your destructive energies and summon a large comet to strike an area, dealing a massive $x% MAG damage on impact.",
	].join("\n");

	SkillDescription[SKID.MGN_ICICLEEDGE] = [
		"Icicle Edge",
		"Offensive Spell",
		"Range: 9, Cooldown: 4s",
		" ",
		"Send a stream of frozen spikes at an enemy, dealing $x% MAG damage and applying ^4488BBChill^000000 to them and any enemy caught in the path between you and the target.",
	].join("\n");

	SkillDescription[SKID.MGN_CRYSTALLIZE] = [
		"Crystallize",
		"Support Spell",
		"Range: 9, Cooldown: 8s",
		" ",
		"Encase an enemy in ice, putting them into a ^4488BBDeep Freeze^000000 for $x seconds. Enemies frozen this way take $y% more damage and will not be unfrozen by being hit.",
	].join("\n");

	SkillDescription[SKID.MGN_ICENOVA] = [
		"Ice Nova",
		"Offensive Spell",
		"Cooldown: 8s",
		" ",
		"Release a wave of ice magic, dealing $x% MAG damage and ^4488BBChilling^000000 enemies around you.",
	].join("\n");

	SkillDescription[SKID.MGN_FROSTBITE] = [
		"Frostbite",
		"Offensive Spell",
		"Cooldown: 4s",
		" ",
		"Summon an icy windstorm that ^4488BBChills^000000 and deals $x% MAG damage to all nearby enemies. If Frostbite critically hits an enemy that is already chilled, they are ^4488BBFrozen^000000 for 15 seconds instead.",
	].join("\n");

	SkillDescription[SKID.MGN_LIGHTNINGBOLT] = [
		"Lightning Bolt",
		"Offensive Spell",
		"Range: 9",
		" ",
		"Strike an enemy with a bolt of lightning, dealing $x% MAG damage.",
	].join("\n");

	SkillDescription[SKID.MGN_IONPULSE] = [
		"Ion Pulse",
		"Offensive Spell",
		"Range: 9",
		" ",
		"Place down a magnetic field that pulls in all enemies within $y tiles. Pulled in enemies take $x% MAG damage and are ^4488BBStunned^000000 for 1 second.",
	].join("\n");

	SkillDescription[SKID.MGN_DISCHARGE] = [
		"Discharge",
		"Passive",
		" ",
		"You become charged with magic after casting an offensive spell, gaining a bonus $x% MAG as ATK on your next physical attack. If it's a basic attack, the bonus is doubled and deals splash damage around your target.",
	].join("\n");

	SkillDescription[SKID.MGN_STORMLOCUS] = [
		"Storm Locus",
		"Offensive Spell",
		"Range: 9",
		" ",
		"Place down a volatile well of magic energy that shocks nearby enemies for $x% MAG damage every time a player casts an offensive spell or performs a Discharge-enchanced attack near it.",
	].join("\n");

	return SkillDescription;
});