define(function(require)
{
	'use strict';


	/**
	 * Dependencies
	 */
	var Configs          = require('Core/Configs');
	var Context          = require('Core/Context');
	var Preferences      = require('Core/Preferences');
	var Keybinds         = require('Preferences/Keybinds');
	var Renderer         = require('Renderer/Renderer');
	var UIManager        = require('UI/UIManager');
	var UIComponent      = require('UI/UIComponent');
	var htmlText         = require('text!./KeyConfig.html');
	var cssText          = require('text!./KeyConfig.css');


	/**
	 * Create Component
	 */
	var KeyConfig = new UIComponent( 'KeyConfig', htmlText, cssText );


	/**
	 * @var {Preferences} KeyConfig
	 */
	var _preferences = Preferences.get('KeyConfig', {
		x:    300,
		y:    300
	}, 1.1);

	var _functions = {
		"key11": { component:'ShortCut', cmd:'EXECUTE0' },
		"key12": { component:'ShortCut', cmd:'EXECUTE1' },
		"key13": { component:'ShortCut', cmd:'EXECUTE2' },
		"key14": { component:'ShortCut', cmd:'EXECUTE3' },
		"key15": { component:'ShortCut', cmd:'EXECUTE4' },
		"key16": { component:'ShortCut', cmd:'EXECUTE5' },
		"key17": { component:'ShortCut', cmd:'EXECUTE6' },
		"key18": { component:'ShortCut', cmd:'EXECUTE7' },
		"key19": { component:'ShortCut', cmd:'EXECUTE8' },
		
		"key21": { component:'ShortCut', cmd:'EXECUTE9' },
		"key22": { component:'ShortCut', cmd:'EXECUTE10' },
		"key23": { component:'ShortCut', cmd:'EXECUTE11' },
		"key24": { component:'ShortCut', cmd:'EXECUTE12' },
		"key25": { component:'ShortCut', cmd:'EXECUTE13' },
		"key26": { component:'ShortCut', cmd:'EXECUTE14' },
		"key27": { component:'ShortCut', cmd:'EXECUTE15' },
		"key28": { component:'ShortCut', cmd:'EXECUTE16' },
		"key29": { component:'ShortCut', cmd:'EXECUTE17' },
		
		"key31": { component:'ShortCut', cmd:'EXECUTE18' },
		"key32": { component:'ShortCut', cmd:'EXECUTE19' },
		"key33": { component:'ShortCut', cmd:'EXECUTE20' },
		"key34": { component:'ShortCut', cmd:'EXECUTE21' },
		"key35": { component:'ShortCut', cmd:'EXECUTE22' },
		"key36": { component:'ShortCut', cmd:'EXECUTE23' },
		"key37": { component:'ShortCut', cmd:'EXECUTE24' },
		"key38": { component:'ShortCut', cmd:'EXECUTE25' },
		"key39": { component:'ShortCut', cmd:'EXECUTE26' },
		
		"keyHK": { component:'ShortCut', cmd:'EXTEND' },
		
		"keyEQ": { component:'Equipment', cmd:'TOGGLE' },
		"keyIV": { component:'Inventory', cmd:'TOGGLE' },
		"keySL": { component:'SkillList', cmd:'TOGGLE' },
		"keyPA": { component:'PartyFriends', cmd:'PARTY' },
		"keyFR": { component:'PartyFriends', cmd:'FRIEND' },
		"keyEM": { component:'Emoticons', cmd:'TOGGLE' },
		
		"blank": { component:'ShortCut', cmd:'EXECUTE27' }
	};
	
	
	// ascii -> keyeventhandler
	var _specialkeys = {
		96: 192, // `
		91: 219, // [
		93: 221, // ]
		47: 191, // /
		59: 186, // ;
		46: 190, // .
		61: 187, // =
		92: 220, // \
		45: 189, // -
		39: 222, // '
		44: 188, // ,
	};

	/**
	 * Initialize UI
	 */
	KeyConfig.init = function Init()
	{
		this.ui.find('.base').mousedown(function(event) {
			event.stopImmediatePropagation();
			return false;
		});

		this.ui.find('.close').click(this.remove.bind(this));
		this.ui.find('.save').click(onSaveConfig);

		this.draggable(this.ui.find('.titlebar'));
	};



	/**
	 * When append the element to html
	 */
	KeyConfig.onAppend = function OnAppend()
	{
		this.ui.css({
			top:  _preferences.y,
			left: _preferences.x,
		});

		this.ui.find('#key11').val(Keybinds.key11);
		this.ui.find('#key12').val(Keybinds.key12);
		this.ui.find('#key13').val(Keybinds.key13);
		this.ui.find('#key14').val(Keybinds.key14);
		this.ui.find('#key15').val(Keybinds.key15);
		this.ui.find('#key16').val(Keybinds.key16);
		this.ui.find('#key17').val(Keybinds.key17);
		this.ui.find('#key18').val(Keybinds.key18);
		this.ui.find('#key19').val(Keybinds.key19);
		
		this.ui.find('#key21').val(Keybinds.key21);
		this.ui.find('#key22').val(Keybinds.key22);
		this.ui.find('#key23').val(Keybinds.key23);
		this.ui.find('#key24').val(Keybinds.key24);
		this.ui.find('#key25').val(Keybinds.key25);
		this.ui.find('#key26').val(Keybinds.key26);
		this.ui.find('#key27').val(Keybinds.key27);
		this.ui.find('#key28').val(Keybinds.key28);
		this.ui.find('#key29').val(Keybinds.key29);
		
		this.ui.find('#key31').val(Keybinds.key31);
		this.ui.find('#key32').val(Keybinds.key32);
		this.ui.find('#key33').val(Keybinds.key33);
		this.ui.find('#key34').val(Keybinds.key34);
		this.ui.find('#key35').val(Keybinds.key35);
		this.ui.find('#key36').val(Keybinds.key36);
		this.ui.find('#key37').val(Keybinds.key37);
		this.ui.find('#key38').val(Keybinds.key38);
		this.ui.find('#key39').val(Keybinds.key39);
		
		this.ui.find('#keyHK').val(Keybinds.keyHK);

		this.ui.find('#keyEQ').val(Keybinds.keyEQ);
		this.ui.find('#keyIV').val(Keybinds.keyIV);
		this.ui.find('#keySL').val(Keybinds.keySL);
		this.ui.find('#keyPA').val(Keybinds.keyPA);
		this.ui.find('#keyFR').val(Keybinds.keyFR);
		this.ui.find('#keyEM').val(Keybinds.keyEM);
	};


	/**
	 * Once remove, save preferences
	 */
	KeyConfig.onRemove = function OnRemove()
	{
		_preferences.x    = parseInt(this.ui.css('left'), 10);
		_preferences.y    = parseInt(this.ui.css('top'), 10);
		_preferences.save();
	};


	/**
	 * Modify game details to perform faster
	 */
	function onSaveConfig() {
		var binds = document.getElementsByClassName("keyconf");
		var keystr, keyval;
		
		Keybinds.keys = {};
	
		for( var i = 0; i < binds.length; i++ ) {
			keystr = (binds[i].value).toUpperCase();
			keyval = _specialkeys[keystr.charCodeAt(0)] ? _specialkeys[keystr.charCodeAt(0)] : keystr.charCodeAt(0);
			binds[i].style.backgroundColor = "#FFFFFF";
			
			if( !keyval || keyval == 32 || Keybinds.keys[keyval]) {
					binds[i].style.backgroundColor = "#FFAA99";
					binds[i].value = "";
					keystr = "";
					keyval = 9999;
			}
		
			Keybinds[binds[i].id] = keystr;
			Keybinds.keys[keyval] = (keyval == 9999) ? _functions["blank"] : _functions[binds[i].id];
			Keybinds.save();

			Configs.set(binds[i].id, keystr);
		}
	}

	/**
	 * Create component and export it
	 */
	return UIManager.addComponent(KeyConfig);
});