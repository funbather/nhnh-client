define(["./SkillConst"], function( SK )
{
	"use strict";

	var SkillDesc = {};
	
	SkillDesc[SK.SWD_SOUL] = {};
	
	SkillDesc[SK.SWD_FORCEOFWILL] = {
		x: function(skl){ return (1 * skl); },
		y: function(skl){ return (3 * skl); }
	};
	
	SkillDesc[SK.SWD_DAUNTLESS] = {
		x: function(skl){ return (1 * skl); }
	};
	
	SkillDesc[SK.SWD_HARDHEARTED] = {
		x: function(skl){ return (4 * skl); }
	};
	
	SkillDesc[SK.SWD_PAVISE] = {
		x: function(skl){ return (1 * skl).toFixed(1); },
		y: function(skl){ return (0.5 * skl).toFixed(1); }
	};
	
	SkillDesc[SK.SWD_SWASHBUCKLING] = {
		x: function(skl){ return (15 + 3 * skl); },
		y: function(skl){ return (5 + parseInt(skl / 3)); }
	};
	
	SkillDesc[SK.SWD_SECONDWIND] = {
		x: function(skl){ return (40 + 6 * skl); },
		y: function(skl){ return (10 - parseInt(skl / 3)); },
		z: function(skl){ return (31 - skl); }
	};
	
	SkillDesc[SK.SWD_SWAGGER] = {
		x: function(skl){ return (10 + 6 * skl); }
	};
	
	SkillDesc[SK.SWD_ENDURE] = {
		x: function(skl){ return (15 + 3 * skl); }
	};
	
	SkillDesc[SK.SWD_UMBOBLOW] = {
		x: function(skl){ return (250 + 30 * skl); },
		y: function(skl){ return (4.0 + 0.8 * skl).toFixed(1); }
	};
	
	SkillDesc[SK.SWD_METEORMASH] = {
		x: function(skl){ return (300 + 40 * skl); }
	};

	SkillDesc[SK.SWD_SHIELDBOOMERANG] = {
		x: function(skl){ return (100 + 25 * skl); }
	};
	
	SkillDesc[SK.SWD_SKULLCRACK] = {
		x: function(skl){ return (300 + 40 * skl); }
	};
	
	SkillDesc[SK.SWD_SLEDGEHAMMER] = {
		x: function(skl){ return (300 + 60 * skl); }
	};
	
	SkillDesc[SK.THF_SOUL] = { };
	
	SkillDesc[SK.THF_DOUBLESTRIKE] = {
		x: function(skl){ return (4 * skl); }
	};
	
	SkillDesc[SK.THF_REFLEXES] = {
		x: function(skl){ return (3 * skl); }
	};
	
	SkillDesc[SK.THF_MERCILESS] = {
		x: function(skl){ return (0.6 * skl).toFixed(1); },
		y: function(skl){ return (3 * skl); }
	};
	
	SkillDesc[SK.THF_ADRENALINERUSH] = {
		x: function(skl){ return (1.5 * skl).toFixed(1); }
	};
	
	SkillDesc[SK.THF_PICKPOCKET] = {
		x: function(skl){ return (3.0 + 0.4 * skl).toFixed(1); }
	};
	
	SkillDesc[SK.THF_CAMOUFLAGE] = {
		x: function(skl){ return (150 + 30 * skl); }
	};
	
	SkillDesc[SK.THF_DOUBLETEAM] = {
		x: function(skl){ return (5 + skl); },
		y: function(skl){ return (5 + skl); }
	};
	
	SkillDesc[SK.THF_SONICSTRIKE] = {
		x: function(skl){ return (6 + parseInt(skl / 3)); },
		y: function(skl){ return (150 + 30 * skl); }
	};
	
	SkillDesc[SK.THF_BONECUTTER] = {
		x: function(skl){ return (250 + 30 * skl); }
	};
	
	SkillDesc[SK.THF_BLADEFLOURISH] = {
		x: function(skl){ return (300 + 60 * skl); }
	};
	
	SkillDesc[SK.THF_PUNCTURE] = {
		x: function(skl){ return (100 + 25 * skl); },
		y: function(skl){ return (4 + parseInt(skl / 3)); }
	};
	
	SkillDesc[SK.ACO_SOUL] = { };
	
	SkillDesc[SK.ACO_LIFELINK] = {
		x: function(skl){ return (6 * skl); },
		y: function(skl){ return (10 + 2 * skl); }
	};
	
	SkillDesc[SK.ACO_BENEVOLENCE] = {
		x: function(skl){ return (5 * skl); }
	};
	
	SkillDesc[SK.ACO_SPIRITWARD] = {
		x: function(skl){ return (15 + 5 * skl); }
	};
	
	SkillDesc[SK.ACO_PURIFY] = {
		x: function(skl){ return (50 + 10 * skl); }
	};
	
	SkillDesc[SK.ACO_CURE] = {
		x: function(skl){ return (200 + 20 * skl); }
	};
	
	SkillDesc[SK.ACO_RAISE] = {
		x: function(skl){ return (15 + 5 * skl); }
	};
	
	SkillDesc[SK.ACO_FORCEARMOR] = {
		x: function(skl){ return (10 + 2 * skl); }
	};
	
	SkillDesc[SK.ACO_GODSSTRENGTH] = {
		x: function(skl){ return (10 + 2 * skl); }
	};
	
	SkillDesc[SK.ACO_HALLOWEDBOLT] = {
		x: function(skl){ return (300 + 40 * skl); }
	};
	
	SkillDesc[SK.ACO_HEAVENLYBLOW] = {
		x: function(skl){ return (225 + 25 * skl); },
		y: function(skl){ return (225 + 25 * skl); }
	};
	return SkillDesc;
});