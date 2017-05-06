/**
 * DB/Status/StatusState.js
 *
 * List of status state
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */

define(function()
{
	"use strict";

	return {

		BodyState: {
			STONE        : 1,
			FREEZE       : 2,
			STUN         : 3,
			SLEEP        : 4,
			STONEWAIT    : 6,
			BURNING      : 7,
			IMPRISON     : 8,
			CRYSTALIZE   : 9,
		},

		HealthState: {
			POISON       : 0x00001,
			CURSE        : 0x00002,
			SILENCE      : 0x00004,
			SIGNUMCRUCIS : 0x00008,
			BLIND        : 0x00010,
			ANGELUS      : 0x00020,
			BLEEDING     : 0x00040,
			DPOISON      : 0x00080,
			FEAR         : 0x00100,
			IGNITE       : 0x00200,
			MARKED       : 0x00400,
			SHATTER      : 0x00800,
			CAMO         : 0x01000,
			FORCEARMOR   : 0x02000,
			GODSSTRENGTH : 0x04000,
			SQUASHED     : 0x08000,
			CHILLED      : 0x10000,
			DEEPFREEZE   : 0x20000,
			DOUBLETEAM   : 0x40000,
		},

		EffectState: {
			NOTHING      : 0x00000000,
			SIGHT        : 0x00000001,
			HIDE         : 0x00000002,
			CLOAK        : 0x00000004,
			FALCON       : 0x00000010,
			RIDING       : 0x00000020,
			INVISIBLE    : 0x00000040,
			ORCISH       : 0x00000800,
			WEDDING      : 0x00001000,
			RUWACH       : 0x00002000,
			CHASEWALK    : 0x00004000,
			//FLYING       : 0x00008000,
			XMAS         : 0x00010000,
			TRANSFORM    : 0x00020000,
			SUMMER       : 0x00040000,
			DRAGON1      : 0x00080000,
			WUG          : 0x00100000,
			WUGRIDER     : 0x00200000,
			MADOGEAR     : 0x00400000,
			DRAGON2      : 0x00800000,
			DRAGON3      : 0x01000000,
			DRAGON4      : 0x02000000,
			DRAGON5      : 0x04000000,
			HANBOK       : 0x08000000,
			OKTOBERFEST  : 0x10000000,

			CART1        : 0x00000008,
			CART2        : 0x00000080,
			CART3        : 0x00000100,
			CART4        : 0x00000200,
			CART5        : 0x00000400,
		}
	};
});