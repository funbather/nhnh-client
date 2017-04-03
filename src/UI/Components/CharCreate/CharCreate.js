/**
 * UI/Components/CharCreate/CharCreate.js
 *
 * Chararacter Creation windows
 *
 * This file is part of ROBrowser, Ragnarok Online in the Web Browser (http://www.robrowser.com/).
 *
 * @author Vincent Thibault
 */
define(function(require)
{
	'use strict';


	/**
	 * Dependencies
	 */
	var Renderer           = require('Renderer/Renderer');
	var KEYS               = require('Controls/KeyEventHandler');
	var Entity             = require('Renderer/Entity/Entity');
	var SpriteRenderer     = require('Renderer/SpriteRenderer');
	var Camera             = require('Renderer/Camera');
	var UIManager          = require('UI/UIManager');
	var UIComponent        = require('UI/UIComponent');
	var htmlText           = require('text!./CharCreate.html');
	var cssText            = require('text!./CharCreate.css');


	/**
	 * Create Chararacter Selection namespace
	 */
	var CharCreate = new UIComponent( 'CharCreate', htmlText, cssText );


	/**
	 * @var {boolean} account sex
	 */
	var _accountSex = 0;


	/**
	 * @var {canvas} graphics object
	 */
	var _graph;


	/**
	 * @var {object} chargen info
	 */
	var _chargen = {
		entity: new Entity(),
		ctx:    null,
		render: false,
		tick:   0
	};


	/**
	 * Initialize UI
	 */
	CharCreate.init = function init()
	{
		//_graph       = this.ui.find('.graph canvas')[0].getContext('2d');
		_chargen.ctx = this.ui.find('.chargen canvas')[0].getContext('2d');

		// Setup GUI
		this.ui.css({
			top: (Renderer.height-342)/2,
			left: (Renderer.width-576)/2
		});

		//this.draggable();

		// Bind Events
		this.ui.find('.chargen .left' ).mousedown(updateCharacterGeneric('head', -1));
		this.ui.find('.chargen .right').mousedown(updateCharacterGeneric('head', +1));
		this.ui.find('.chargen .up'   ).mousedown(updateCharacterGeneric('headpalette', +1));
		this.ui.find('.statbutton'    ).mousedown(updateStats);
		this.ui.find('.male'          ).mousedown(updateCharacterGeneric('sex', 1));
		this.ui.find('.female'        ).mousedown(updateCharacterGeneric('sex', 0));
		this.ui.find('.pickSWD'       ).mousedown(updateCharacterGeneric('job', 0x01000001));
		this.ui.find('.pickTHF'       ).mousedown(updateCharacterGeneric('job', 0x06000010));
		this.ui.find('.pickACO'       ).mousedown(updateCharacterGeneric('job', 0x0B000100));
		this.ui.find('.pickMGN'       ).mousedown(updateCharacterGeneric('job', 0x15001000));
		//this.ui.find('.graph button'  ).mousedown(updateStats);

		this.ui.find('input').mousedown(function(event){
			this.focus();
			event.stopImmediatePropagation();
		});

		this.ui.find('.cancel').click(cancel);
		this.ui.find('.make').click(create);
	};


	/**
	 * Setter for AccountSex
	 *
	 * @param {number} sex
	 */
	CharCreate.setAccountSex = function setAccountSex( sex )
	{
		_accountSex = sex;
	};


	/**
	 * Once add to HTML, start rendering
	 */
	CharCreate.onAppend = function onAppend()
	{
		_chargen.render = true;
		_chargen.entity.set({
			sex:_accountSex,
			job:    1,
			head:   2,
			action: 0
		});
		
		_chargen.entity.setAction({
			action: _chargen.entity.ACTION.WALK,
			frame:  0,
			play:   true,
			repeat: true
		});

		this.ui.find('input').val('').focus();

		Renderer.render(render);
	};


	/**
	 * Remove component from HTML
	 * Stop rendering
	 */
	CharCreate.onRemove = function onRemove()
	{
		Renderer.stop(render);
	};


	/**
	 * Key Handler
	 *
	 * @param {object} event
	 * @return {boolean}
	 */
	CharCreate.onKeyDown = function onKeyDown( event )
	{
		if (event.which === KEYS.ESCAPE) {
			event.stopImmediatePropagation();
			cancel();
			return false;
		}

		return true;
	};


	/**
	 * Generic function to get a direct proxy to updateCharacter
	 *
	 * @param {string} type
	 * @param {number} value
	 */
	function updateCharacterGeneric( type, value )
	{
		return function( event) {
			updateCharacter( type, value );
			event.stopImmediatePropagation();
			return false;
		};
	}





	/**
	 * Send back informations to send the packet
	 */
	function create()
	{
		var ui = CharCreate.ui;

		CharCreate.onCharCreationRequest(
			ui.find('input').val(),
			parseInt( ui.find('.info .str').text(), 10),
			parseInt( ui.find('.info .agi').text(), 10),
			parseInt( ui.find('.info .vit').text(), 10),
			parseInt( ui.find('.info .int').text(), 10),
			parseInt( ui.find('.info .mst').text(), 10),
			0,
			_chargen.entity.head,
			_chargen.entity.headpalette,
			_chargen.entity.sex,
			0,
			parseJobClass( ui.find('.jobname').text())
		);
	}

	function parseJobClass( name ) {
		switch (name) {
			case "Swordsman": return 0x01000001;
			case "Thief": return 0x06000010;
			case "Acolyte": return 0x0B000100;
			case "Magician": return 0x15001000;
		}
		return 0x01000001;
	}

	/**
	 * Exit the window
	 */
	function cancel()
	{
		CharCreate.onExitRequest();
	}


	/**
	 * Update character hairstyle and haircolor
	 *
	 * @param {string} type (head or headpalette)
	 * @param {number} increment (-1 or +1)
	 */
	function updateCharacter( type, increment )
	{
		switch (type) {
			case 'head':
				var head = _chargen.entity.head + increment;

				if (head < 2) {
					head = 26;
				}

				if (head > 26) {
					head =  2;
				}

				_chargen.entity.head = head;
				break;

			case 'headpalette':
				_chargen.entity.headpalette += increment;
				_chargen.entity.headpalette %= 10;
				break;
				
			case 'sex':
				_chargen.entity.sex = increment;
				break;
				
			case 'job':
				//_chargen.entity.classes = increment;
				
				switch (increment) {
					case 0x01000001:
						_chargen.entity.job = 1;
						CharCreate.ui.find('.jobname').text("Swordsman");
						break;
					case 0x06000010:
						_chargen.entity.job = 6;
						CharCreate.ui.find('.jobname').text("Thief");
						break;
					case 0x0B000100:
						_chargen.entity.job = 4;
						CharCreate.ui.find('.jobname').text("Acolyte");
						break;
					case 0x15001000:
						_chargen.entity.job = 2;
						CharCreate.ui.find('.jobname').text("Magician");
						break;
				}
				break;
		}

		render();
	}


	/**
	 * Update the stats and polygon
	 */
	function updateStats()
	{
		var str = this.className;
		
		// No more points remaining
		if (CharCreate.ui.find('.info .left')[0].textContent === '0' && str.substring(14,17) == "add") {
			return;
		}
		
		// Stop at zero
		if (CharCreate.ui.find('.info .' + str.substring(11,14))[0].textContent === '0' && str.substr(14,17) == "sub") {
			return;
		}

		// Update infos
		if(str.substring(14,17) == "add") {
			CharCreate.ui.find('.info .' + str.substring(11,14))[0].textContent++;
			CharCreate.ui.find('.info .left')[0].textContent--;
		} else {
			CharCreate.ui.find('.info .' + str.substring(11,14))[0].textContent--;
			CharCreate.ui.find('.info .left')[0].textContent++;
		}
	}

	/**
	 * Rendering the Character
	 */
	function render( tick )
	{
		// Update direction each 1000ms
		if (_chargen.tick + 1000 < tick) {
			Camera.direction++;
			Camera.direction %= 8;
			_chargen.tick = tick;
		}

		// Rendering
		SpriteRenderer.bind2DContext(_chargen.ctx, 32, 115);
		_chargen.ctx.clearRect(0, 0, _chargen.ctx.canvas.width, _chargen.ctx.canvas.height );
		_chargen.entity.renderEntity();
	}


	/**
	 * Callback to define
	 */
	CharCreate.onExitRequest = function OnExitRequest(){};


	/**
	 * Abstract callback to define
	 */
	CharCreate.onCharCreationRequest = function OnCharCreationRequest(){};


	/**
	 * Create componentand export it
	 */
	return UIManager.addComponent(CharCreate);
});