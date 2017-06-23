define(function(require)
{
	'use strict';


	/**
	 * Dependencies
	 */
	var DB                 = require('DB/DBManager');
	var jQuery             = require('Utils/jquery');
	var Client             = require('Core/Client');
	var Events             = require('Core/Events');
	var Renderer           = require('Renderer/Renderer');
	var UIManager          = require('UI/UIManager');
	var UIComponent        = require('UI/UIComponent');
	var htmlText           = require('text!./CubeOpen.html');
	var cssText            = require('text!./CubeOpen.css');


	/**
	 * Create component
	 */
	var CubeOpen = new UIComponent( 'CubeOpen', htmlText, cssText );
	CubeOpen.needFocus = true;

	/**
	 * Initialize component
	 */
	CubeOpen.init = function init() {
		this.ui.css('zIndex', 45); // Between Interface and Game Announce
		this.ui.on('mousedown', onClick);
	};

	/**
	 * Once append to body
	 */
	CubeOpen.onAppend = function onAppend() {
		this.ui.css('left', ( Renderer.width - (this.ui.width()) ) >> 1 );
		//this.ui.css('left', Renderer.width * 5);
	};

	function onClick() {
		CubeOpen.ui.trigger('mouseleave');
		this.remove();
	};


	/**
	 * Add item informations
	 *
	 * @param {object} item
	 */
	CubeOpen.set = function set( item ) {
		var it       = DB.getItemInfo(item.ITID);
		var display  = it.identifiedDisplayName;
		var resource = it.identifiedResourceName;
		
		var desc = "^bo" + DB.getItemName(item) + "^ld\n\n" + DB.formatDesc(item, 2, item.cubelvl);
		desc = desc.replace(/FFFFFF/g, "000000");
		desc = desc.replace(/99BBFF/g, "6699BB");
		
		this.ui.find('.content').html(
			'<center>' +
				'<img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" class="'+ item.ITID + ' width="120" height="160"/>' +
			'</center> </br>' +
			'<span class="description"></span>' +
			'</br></br>' +
			'<center>' +
				'<strong>Click to dismiss.</strong>' +
			'</center>'
		);
		
		(this.ui.find('.description')).text(desc);
		this.ui.css('left', ( Renderer.width - (this.ui.width()) ) >> 1 );

		Client.loadFile( DB.INTERFACE_PATH + 'collection/' + resource + '.bmp', (function(url){ this.ui.find('img.' + item.ITID).attr('src', url); }).bind(this));
	};


	/**
	 * Create component and return it
	 */
	return UIManager.addComponent(CubeOpen);
});
