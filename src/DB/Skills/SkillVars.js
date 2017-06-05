define(["./SkillConst"], function( SK )
{
	"use strict";

	var SkillDesc = {};
	
	SkillDesc[SK.SWD_SOUL] = {};
	
	SkillDesc[SK.SWD_FORCEOFWILL] = {
		x: function(skl){ return (1 * skl); },
		y: function(skl){ return (3 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage Reduction -> ^DD3322" + SkillDesc[SK.SWD_FORCEOFWILL].x(skl) + "^000000 ~ ^DD3322" + SkillDesc[SK.SWD_FORCEOFWILL].y(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.SWD_DAUNTLESS] = {
		x: function(skl){ return (3 + 1 * skl); },
		r: function(skl) { return "\n\n^boNext Level^ld:\nDEF Bonus -> ^DD3322" + SkillDesc[SK.SWD_DAUNTLESS].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.SWD_HARDHEARTED] = {
		x: function(skl){ return (5 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDEF Bonus -> ^DD3322" + SkillDesc[SK.SWD_HARDHEARTED].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.SWD_PAVISE] = {
		x: function(skl){ return (1 * skl).toFixed(1); },
		y: function(skl){ return (0.5 * skl).toFixed(1); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nPhysical Block -> ^DD3322" + SkillDesc[SK.SWD_PAVISE].x(skl) + "^000000%\nMagic Block -> ^DD3322" + SkillDesc[SK.SWD_PAVISE].y(skl) + "^000000%";}
	};
	
	SkillDesc[SK.SWD_SWASHBUCKLING] = {
		x: function(skl){ return (15 + 3 * skl); },
		y: function(skl){ return (7 + parseInt(skl / 3)); },
		m: function(mst){ return "\n\nMastery: Enemies affected by Swashbuckling have their ATK lowered by an additional ^DD3322" + (mst * 0.1).toFixed(1) + "^000000%. (0.1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nRange -> ^DD3322" + SkillDesc[SK.SWD_SWASHBUCKLING].y(skl) + "^000000\nATK Reduction -> ^DD3322" + SkillDesc[SK.SWD_SWASHBUCKLING].x(skl) + "^000000%" }
	};
	
	SkillDesc[SK.SWD_SECONDWIND] = {
		x: function(skl){ return (40 + 6 * skl); },
		y: function(skl){ return (8 - parseInt(skl / 3)); },
		z: function(skl){ return (31 - skl); },
		m: function(mst){ return "\n\nMastery: Total amount healed is increased by ^DD3322" + (mst * 1) + "^000000%. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nCooldown -> ^DD3322" + SkillDesc[SK.SWD_SECONDWIND].z(skl) + "^000000 seconds\nHeal Amount -> ^DD3322" + SkillDesc[SK.SWD_SECONDWIND].x(skl) + "^000000% Max HP\nHeal Duration -> ^DD3322" + SkillDesc[SK.SWD_SECONDWIND].y(skl) + "^000000 seconds"; }
	};
	
	SkillDesc[SK.SWD_SWAGGER] = {
		x: function(skl){ return (10 + 3 * skl); },
		m: function(mst){ return "\n\nMastery: You are ^DD3322" + (mst * 1) + "^000000% more likely to block physical attacks from enemies affected by Swagger. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nHit% Reduction -> ^DD3322" + SkillDesc[SK.SWD_SWAGGER].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.SWD_ENDURE] = {
		x: function(skl){ return (15 + 3 * skl); },
		m: function(mst){ return "\n\nMastery: Endure also grants +^DD3322" + (mst * 1) + "^000000% DEF while active. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nBarrier HP -> ^DD3322" + SkillDesc[SK.SWD_ENDURE].x(skl) + "^000000% Max HP"; }
	};
	
	SkillDesc[SK.SWD_UMBOBLOW] = {
		x: function(skl){ return (250 + 30 * skl); },
		y: function(skl){ return (4.0 + 0.8 * skl).toFixed(1); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.SWD_UMBOBLOW].x(skl) + "^000000% ATK\nBlock Bonus -> ^DD3322" + SkillDesc[SK.SWD_UMBOBLOW].y(skl) + "^000000% ATK";}
	};
	
	SkillDesc[SK.SWD_METEORMASH] = {
		x: function(skl){ return (300 + 40 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.SWD_METEORMASH].x(skl) + "^000000% ATK"; }
	};

	SkillDesc[SK.SWD_SHIELDBOOMERANG] = {
		x: function(skl){ return (100 + 25 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.SWD_SHIELDBOOMERANG].x(skl) + "^000000% ATK"; }
	};
	
	SkillDesc[SK.SWD_SKULLCRACK] = {
		x: function(skl){ return (300 + 40 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.SWD_SKULLCRACK].x(skl) + "^000000% ATK"; }
	};
	
	SkillDesc[SK.SWD_SLEDGEHAMMER] = {
		x: function(skl){ return (300 + 60 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.SWD_SLEDGEHAMMER].x(skl) + "^000000% ATK"; }
	};
	
	SkillDesc[SK.THF_SOUL] = { };
	
	SkillDesc[SK.THF_DOUBLESTRIKE] = {
		x: function(skl){ return (10 + 6 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDouble Strike Chance -> ^DD3322" + SkillDesc[SK.THF_DOUBLESTRIKE].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.THF_REFLEXES] = {
		x: function(skl){ return (3 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDodge Chance -> ^DD3322" + SkillDesc[SK.THF_REFLEXES].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.THF_MERCILESS] = {
		x: function(skl){ return (0.6 * skl).toFixed(1); },
		y: function(skl){ return (3 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nCritical Chance -> ^DD3322" + SkillDesc[SK.THF_MERCILESS].x(skl) + "^000000%\nCritical Damage -> ^DD3322" + SkillDesc[SK.THF_MERCILESS].y(skl) + "^000000%";}
	};
	
	SkillDesc[SK.THF_ADRENALINERUSH] = {
		x: function(skl){ return (5 + 1.5 * skl).toFixed(1); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nMove Speed Bonus -> ^DD3322" + SkillDesc[SK.THF_ADRENALINERUSH].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.THF_PICKPOCKET] = {
		x: function(skl){ return (3.0 + 0.4 * skl).toFixed(1); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nSuccess Chance -> ^DD3322" + SkillDesc[SK.THF_PICKPOCKET].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.THF_CAMOUFLAGE] = {
		x: function(skl){ return (150 + 30 * skl); },
		m: function(mst){ return "\n\nMastery: You gain an additional ^DD3322" + (mst * 2) + "^000000 Evasion while Camouflage is active. (2/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nEvasion Bonus -> ^DD3322" + SkillDesc[SK.THF_CAMOUFLAGE].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.THF_DOUBLETEAM] = {
		x: function(skl){ return (5 + skl); },
		y: function(skl){ return (5 + skl); },
		m: function(mst){ return "\n\nMastery: You deal ^DD3322" + (mst * 0.5).toFixed(1) + "^000000% more physical damage while Double Team is active. (0.5%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDuration -> ^DD3322" + SkillDesc[SK.THF_DOUBLETEAM].x(skl) + "^000000 seconds\nAttack Speed Bonus -> ^DD3322" + SkillDesc[SK.THF_DOUBLETEAM].y(skl) + "^000000%";}
	};
	
	SkillDesc[SK.THF_BROWBEAT] = {
		x: function(skl){ return (20 + 2 * skl); },
		m: function(mst){ return "\n\nMastery: Enemies affected by Browbeat are ^DD3322" + (mst * 1) + "^000000% more likely to drop a bonus item. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nSuccess Chance -> ^DD3322" + SkillDesc[SK.THF_BROWBEAT].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.THF_SONICSTRIKE] = {
		x: function(skl){ return (6 + parseInt(skl / 3)); },
		y: function(skl){ return (150 + 30 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nRange -> ^DD3322" + SkillDesc[SK.THF_SONICSTRIKE].x(skl) + "^000000\nDamage -> ^DD3322" + SkillDesc[SK.THF_SONICSTRIKE].y(skl) + "^000000% ATK"; }
	};
	
	SkillDesc[SK.THF_BONECUTTER] = {
		x: function(skl){ return (250 + 30 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.THF_BONECUTTER].x(skl) + "^000000% ATK"; }
	};
	
	SkillDesc[SK.THF_BLADEFLOURISH] = {
		x: function(skl){ return (300 + 60 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.THF_BLADEFLOURISH].x(skl) + "^000000% ATK"; }
	};
	
	SkillDesc[SK.THF_PUNCTURE] = {
		x: function(skl){ return (100 + 25 * skl); },
		y: function(skl){ return (4 + parseInt(skl / 3)); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.THF_PUNCTURE].x(skl) + "^000000% ATK\nDuration -> ^DD3322" + SkillDesc[SK.THF_PUNCTURE].y(skl) + "^000000 seconds";}
	};
	
	SkillDesc[SK.ACO_SOUL] = { };
	
	SkillDesc[SK.ACO_LIFELINK] = {
		x: function(skl){ return (6 * skl); },
		y: function(skl){ return (10 + 4 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nHealing Power -> ^DD3322" + SkillDesc[SK.ACO_LIFELINK].x(skl) + "^000000%\nSelf Heal -> ^DD3322" + SkillDesc[SK.ACO_LIFELINK].y(skl) + "^000000%";}
	};
	
	SkillDesc[SK.ACO_BENEVOLENCE] = {
		x: function(skl){ return (10 + 5 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nMP Cost Reduction -> ^DD3322" + SkillDesc[SK.ACO_BENEVOLENCE].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.ACO_SPIRITWARD] = {
		x: function(skl){ return (15 + 5 * skl); },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDuration Reduction -> ^DD3322" + SkillDesc[SK.ACO_SPIRITWARD].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.ACO_PURIFY] = {
		x: function(skl){ return (50 + 10 * skl); },
		m: function(mst){ return "\n\nMastery: Total amount healed is increased by ^DD3322" + (mst * 1) + "^000000%. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nHeal Amount -> ^DD3322" + SkillDesc[SK.ACO_PURIFY].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.ACO_CURE] = {
		x: function(skl){ return (200 + 20 * skl); },
		m: function(mst){ return "\n\nMastery: Total amount healed is increased by ^DD3322" + (mst * 1) + "^000000%. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nHeal Amount -> ^DD3322" + SkillDesc[SK.ACO_CURE].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.ACO_RAISE] = {
		x: function(skl){ return (15 + 5 * skl); },
		m: function(mst){ return "\n\nMastery: Raise casts ^DD3322" + (mst * 1) + "^000000% faster. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nRevive HP -> ^DD3322" + SkillDesc[SK.ACO_RAISE].x(skl) + "^000000% Max HP"; }
	};
	
	SkillDesc[SK.ACO_FORCEARMOR] = {
		x: function(skl){ return (10 + 2 * skl); },
		m: function(mst){ return "\n\nMastery: Force Armor also grants +^DD3322" + (mst * 0.5).toFixed(1) + "^000000% DEF while active. (0.5%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage Reduction -> ^DD3322" + SkillDesc[SK.ACO_FORCEARMOR].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.ACO_GODSSTRENGTH] = {
		x: function(skl){ return (10 + 2 * skl); },
		m: function(mst){ return "\n\nMastery: God's Strength also grants +^DD3322" + (mst * 1) + "^000000% Base ATK while active. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage Increase -> ^DD3322" + SkillDesc[SK.ACO_GODSSTRENGTH].x(skl) + "^000000%"; }
	};
	
	SkillDesc[SK.ACO_HALLOWEDBOLT] = {
		x: function(skl){ return (300 + 40 * skl); },
		m: function(mst){ return "\n\nMastery: Hallowed Bolt deals ^DD3322" + (mst * 1) + "^000000% more damage. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.ACO_HALLOWEDBOLT].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.ACO_HEAVENLYBLOW] = {
		x: function(skl){ return (225 + 25 * skl); },
		y: function(skl){ return (225 + 25 * skl); },
		m: function(mst){ return "\n\nMastery: Heavenly Blow deals ^DD3322" + (mst * 2) + "^000000% more damage. (2%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.ACO_HEAVENLYBLOW].x(skl) + "^000000% MAG/ATK"; }
	};
	
	SkillDesc[SK.MGN_SOUL] = { };
	
	SkillDesc[SK.MGN_FIRELANCE] = {
		x: function(skl){ return (200 + 60 * skl); },
		m: function(mst){ return "\n\nMastery: Fire Lance casts ^DD3322" + (mst * 1) + "^000000% faster. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_FIRELANCE].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.MGN_INCINERATE] = {
		x: function(skl){ return (250 + 30 * skl); },
		y: function(skl){ return (4 + parseInt(skl / 3)); },
		m: function(mst){ return "\n\nMastery: Ignite applied by Incinerate deals ^DD3322" + (mst * 1) + "^000000% more damage per second. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_INCINERATE].x(skl) + "^000000% MAG\nDuration -> ^DD3322" + SkillDesc[SK.MGN_INCINERATE].y(skl) + "^000000 seconds";}
	};
	
	SkillDesc[SK.MGN_EXPLOSION] = {
		x: function(skl){ return (1200 + 240 * skl); },
		m: function(mst){ return "\n\nMastery: Explosion deals ^DD3322" + (mst * 1) + "^000000% more damage. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_EXPLOSION].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.MGN_COMET] = {
		x: function(skl){ return (2000 + 400 * skl); },
		m: function(mst){ return "\n\nMastery: Comet casts ^DD3322" + (mst * 1) + "^000000% faster. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_COMET].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.MGN_ICICLEEDGE] = {
		x: function(skl){ return (450 + 70 * skl); },
		m: function(mst){ return "\n\nMastery: Icicle Edge's cooldown expires ^DD3322" + (mst * 1) + "^000000% faster. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_ICICLEEDGE].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.MGN_CRYSTALLIZE] = {
		x: function(skl){ return (4 + parseInt(skl / 3)); },
		y: function(skl){ return (10 + 6 * skl); },
		m: function(mst){ return "\n\nMastery: Crystallize's damage amplification is ^DD3322" + (mst * 1) + "^000000% more potent. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDuration -> ^DD3322" + SkillDesc[SK.MGN_CRYSTALLIZE].x(skl) + "^000000 seconds\nDamage Amplification -> ^DD3322" + SkillDesc[SK.MGN_CRYSTALLIZE].y(skl) + "^000000%";}
	};
	
	SkillDesc[SK.MGN_ICENOVA] = {
		x: function(skl){ return (400 + 60 * skl); },
		m: function(mst){ return "\n\nMastery: Ice Nova's cooldown expires ^DD3322" + (mst * 1) + "^000000% faster. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_ICENOVA].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.MGN_FROSTBITE] = {
		x: function(skl){ return (100 + 40 * skl); },
		m: function(mst){ return "\n\nMastery: Frostbite is ^DD3322" + (mst * 1) + "^000000% more likely to critically hit. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_FROSTBITE].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.MGN_LIGHTNINGBOLT] = {
		x: function(skl){ return (300 + 40 * skl); },
		m: function(mst){ return "\n\nMastery: Lightning Bolt is ^DD3322" + (mst * 1) + "^000000% more likely to critically hit. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_LIGHTNINGBOLT].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.MGN_IONPULSE] = {
		x: function(skl){ return (250 + 30 * skl); },
		y: function(skl){ return (5 + parseInt(skl / 3)); },
		m: function(mst){ return "\n\nMastery: Stun applied by Ion Pulse lasts ^DD3322" + (mst * 1) + "^000000% longer. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_IONPULSE].x(skl) + "^000000% MAG\nPulse Range -> ^DD3322" + SkillDesc[SK.MGN_IONPULSE].y(skl) + "^000000";}
	};
	
	SkillDesc[SK.MGN_DISCHARGE] = {
		x: function(skl){ return (150 + 20 * skl); },
		m: function(mst){ return "\n\nMastery: You gain +^DD3322" + (mst * 2) + "^000000% ASPD while charged. (2%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_DISCHARGE].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.MGN_STORMLOCUS] = {
		x: function(skl){ return (100 + 20 * skl); },
		m: function(mst){ return "\n\nMastery: Storm Locus is +^DD3322" + (mst * 1) + "^000000% more likely to critically hit. (1%/MST)"; },
		r: function(skl){ return "\n\n^boNext Level^ld:\nDamage -> ^DD3322" + SkillDesc[SK.MGN_STORMLOCUS].x(skl) + "^000000% MAG"; }
	};
	
	SkillDesc[SK.ALL_BLINK] = { };
	return SkillDesc;
});