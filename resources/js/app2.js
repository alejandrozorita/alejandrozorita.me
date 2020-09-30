(function($) { 
	"use strict";
	
(function($) {
$(function() {
jQuery('#loopedSlider').prepend("<a href='#' class='previous'>&lt;</a><a href='#' class='next'>&gt;</a>");
	jQuery('#loopedSlider').loopedSlider({
		autoHeight: 500
	});
});
});



// for banner height js
var windowWidth = $(window).width();
    var windowHeight =$(window).height();
    //$('.banner').css({'width':windowWidth ,'height':windowHeight -"60" });
	
	


// for portfoli filter jquary
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});




// for portfoli lightbox jquary
jQuery(function($) {
	var $chosenSheet,
	$stylesheets = $( "a[id^=theme-]" );
	
	// run rlightbox
	$( ".lb" ).rlightbox();
	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});
});





// for skill chat jquary
$(document).ready(function(e) {
//var windowBottom = $(window).height();
var index=0;
$(document).scroll(function(){
	var top = $('.technical').height()-$(window).scrollTop();
	if(top<-300){
		if(index==0){	
			
			$('.chart').easyPieChart({
				easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});
			
		}
		index++;
	}
})
//console.log(nagativeValue)
});




// Somth page scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top -60
        }, 1000);
        return false;
      }
    }
  });
});




// chart loding
$(window).load(function() {
	
	var chart = window.chart = $('.chart').data('easyPieChart');
	$('.js_update').on('click', function() {
		chart.update(Math.random()*100);
	});
});


}(jQuery));

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/**
 * jquery.gridrotator.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */
;( function( jQuery, window, undefined ) {
	
	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var jQueryevent = jQuery.event,
	jQueryspecial,
	resizeTimeout;

	jQueryspecial = jQueryevent.special.debouncedresize = {
		setup: function() {
			jQuery( this ).on( "resize", jQueryspecial.handler );
		},
		teardown: function() {
			jQuery( this ).off( "resize", jQueryspecial.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					jQueryevent.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, jQueryspecial.threshold );
		},
		threshold: 100
	};

	// http://www.hardcode.nl/subcategory_1/article_317-array-shuffle-function
	Array.prototype.shuffle = function() {
		var i=this.length,p,t;
		while (i--) {
			p = Math.floor(Math.random()*i);
			t = this[i];
			this[i]=this[p];
			this[p]=t;
		}
		return this;
	};

	// HTML5 PageVisibility API
	// http://www.html5rocks.com/en/tutorials/pagevisibility/intro/
	// by Joe Marini (@joemarini)
	function getHiddenProp(){
		var prefixes = ['webkit','moz','ms','o'];

		// if 'hidden' is natively supported just return it
		if ('hidden' in document) return 'hidden';

		// otherwise loop over all the known prefixes until we find one
		for (var i = 0; i < prefixes.length; i++){
			if ((prefixes[i] + 'Hidden') in document) 
				return prefixes[i] + 'Hidden';
		}

		// otherwise it's not supported
		return null;
	}
	function isHidden() {
		var prop = getHiddenProp();
		if (!prop) return false;

		return document[prop];
	}

	function isEmpty( obj ) {
		return Object.keys(obj).length === 0;
	}

	// global
	var jQuerywindow = jQuery( window ),
		Modernizr = window.Modernizr;

	jQuery.GridRotator = function( options, element ) {
		
		this.jQueryel = jQuery( element );
		if( Modernizr.backgroundsize ) {

			var self = this;
			this.jQueryel.addClass( 'ri-grid-loading' );
			this._init( options );

		}
		
	};

	// the options
	jQuery.GridRotator.defaults = {
		// number of rows
		rows : 2,
		// number of columns 
		columns : 4,
		w1024 : { rows : 3, columns : 8 },
		w768 : {rows : 3,columns : 7 },
		w480 : {rows : 3,columns : 5 },
		w320 : {rows : 2,columns : 4 },
		w240 : {rows : 2,columns : 3 },
		// step: number of items that are replaced at the same time
		// random || [some number]
		// note: for performance issues, the number "can't" be > options.maxStep
		step : 'random',
		// change it as you wish..
		maxStep : 3,
		// prevent user to click the items
		preventClick : true,
		// animation type
		// showHide || fadeInOut || 
		// slideLeft || slideRight || slideTop || slideBottom || 
		// rotateBottom || rotateLeft || rotateRight || rotateTop || 
		// scale ||
		// rotate3d ||
		// rotateLeftScale || rotateRightScale || rotateTopScale || rotateBottomScale || 
		// random
		animType : 'random',
		// animation speed
		animSpeed : 800,
		// animation easings
		animEasingOut : 'linear',
		animEasingIn: 'linear',
		// the item(s) will be replaced every 3 seconds
		// note: for performance issues, the time "can't" be < 300 ms
		interval : 3000,
		// if false the animations will not start
		// use false if onhover is true for example
		slideshow : true,
		// if true the items will switch when hovered
		onhover : false,
		// ids of elements that shouldn't change
		nochange : []
	};

	jQuery.GridRotator.prototype = {

		_init : function( options ) {
			
			// options
			this.options = jQuery.extend( true, {}, jQuery.GridRotator.defaults, options );
			// cache some elements + variables
			this._config();

		},
		_config : function() {

			var self = this,
				transEndEventNames = {
					'WebkitTransition' : 'webkitTransitionEnd',
					'MozTransition' : 'transitionend',
					'OTransition' : 'oTransitionEnd',
					'msTransition' : 'MSTransitionEnd',
					'transition' : 'transitionend'
				};

			// support CSS transitions and 3d transforms
			this.supportTransitions = Modernizr.csstransitions;
			this.supportTransforms3D = Modernizr.csstransforms3d;

			this.transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ] + '.gridrotator';

			// all animation types for the random option
			this.animTypes = this.supportTransforms3D ? [
				'fadeInOut',
				'slideLeft', 
				'slideRight', 
				'slideTop', 
				'slideBottom', 
				'rotateLeft', 
				'rotateRight', 
				'rotateTop', 
				'rotateBottom', 
				'scale', 
				'rotate3d', 
				'rotateLeftScale', 
				'rotateRightScale', 
				'rotateTopScale', 
				'rotateBottomScale' ] :
				[ 'fadeInOut', 'slideLeft', 'slideRight', 'slideTop', 'slideBottom' ];

			this.animType = this.options.animType;

			if( this.animType !== 'random' && !this.supportTransforms3D && jQuery.inArray( this.animType, this.animTypes ) === -1 && this.animType !== 'showHide' ) {

				// fallback to 'fadeInOut' if user sets a type which is not supported
				this.animType = 'fadeInOut';

			}

			this.animTypesTotal	= this.animTypes.length;

			// the <ul> where the items are placed
			this.jQuerylist = this.jQueryel.children( 'ul' );
			// remove images and add background-image to anchors
			// preload the images before
			var loaded = 0,
				jQueryimgs = this.jQuerylist.find( 'img' ),
				count = jQueryimgs.length;

			jQueryimgs.each( function() {

				var jQueryimg = jQuery( this ), src = jQueryimg.attr( 'src' );

				jQuery( '<img/>' ).load( function() {

					++loaded;
					jQueryimg.parent().css( 'background-image', 'url(' + src + ')' );

					if( loaded === count ) {

						jQueryimgs.remove();
						self.jQueryel.removeClass( 'ri-grid-loading' );
						// the items
						self.jQueryitems = self.jQuerylist.children( 'li' );
						// make a copy of the items
						self.jQueryitemsCache = self.jQueryitems.clone();
						// total number of items
						self.itemsTotal = self.jQueryitems.length;
						// the items that will be out of the grid
						// actually the item's child (anchor element)
						self.outItems= [];
						self._layout( function() {
							self._initEvents();
						} );
						// replace [options.step] items after [options.interval] time
						// the items that go out are randomly chosen, while the ones that get in
						// follow a "First In First Out" logic
						self._start();

					}

				} ).attr( 'src', src )
				 
			} );

		},
		_layout : function( callback ) {

			var self = this;

			// sets the grid dimentions based on the container's width
			this._setGridDim();

			// reset
			this.jQuerylist.empty();
			this.jQueryitems = this.jQueryitemsCache.clone().appendTo( this.jQuerylist );
			
			var jQueryoutItems = this.jQueryitems.filter( ':gt(' + ( this.showTotal - 1 ) + ')' ),
				jQueryoutAItems = jQueryoutItems.children( 'a' );

			this.outItems.length = 0;

			jQueryoutAItems.each( function( i ) {
				self.outItems.push( jQuery( this ) );
			} );

			jQueryoutItems.remove();

				// container's width
			var containerWidth = ( document.defaultView ) ? parseInt( document.defaultView.getComputedStyle( this.jQueryel.get( 0 ), null ).width ) : this.jQueryel.width(),
				// item's width
				itemWidth = Math.floor( containerWidth / this.columns ),
				// calculate gap
				gapWidth = containerWidth - ( this.columns * Math.floor( itemWidth ) );

			for( var i = 0; i < this.rows; ++i ) {

				for( var j = 0; j < this.columns; ++j ) {

					var idx = this.columns * i + j,
						jQueryitem = this.jQueryitems.eq( idx );

					jQueryitem.css( {
						width : j < Math.floor( gapWidth ) ? itemWidth + 1 : itemWidth,
						height : itemWidth
					} );

					if( jQuery.inArray( idx, this.options.nochange ) !== -1 ) {
						jQueryitem.addClass( 'ri-nochange' ).data( 'nochange', true );
					}

				}

			}

			if( this.options.preventClick ) {

				this.jQueryitems.children().css( 'cursor', 'default' ).on( 'click.gridrotator', false );

			}

			if( callback ) {
				callback.call();
			}

		},
		// set the grid rows and columns
		_setGridDim	 : function() {

			// container's width
			var c_w = this.jQueryel.width();

			// we will choose the number of rows/columns according to the container's width and the values set in the plugin options 
			switch( true ) {
				case ( c_w < 240 ) : this.rows = this.options.w240.rows; this.columns = this.options.w240.columns; break;
				case ( c_w < 320 ) : this.rows = this.options.w320.rows; this.columns = this.options.w320.columns; break;
				case ( c_w < 480 ) : this.rows = this.options.w480.rows; this.columns = this.options.w480.columns; break;
				case ( c_w < 768 ) : this.rows = this.options.w768.rows; this.columns = this.options.w768.columns; break;
				case ( c_w < 1024 ) : this.rows = this.options.w1024.rows; this.columns = this.options.w1024.columns; break;
				default : this.rows = this.options.rows; this.columns = this.options.columns; break;
			}

			this.showTotal = this.rows * this.columns;

		},
		// init window resize event
		_initEvents : function() {

			var self = this;

			jQuerywindow.on( 'debouncedresize.gridrotator', function() {
				self._layout();
			} );

			// use the property name to generate the prefixed event name
			var visProp = getHiddenProp();
			
			// HTML5 PageVisibility API
			// http://www.html5rocks.com/en/tutorials/pagevisibility/intro/
			// by Joe Marini (@joemarini)
			if (visProp) {

				var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
				document.addEventListener(evtname, function() { self._visChange(); } );

			}

			if( !Modernizr.touch && this.options.onhover ) {
				
				self.jQueryitems.on( 'mouseenter.gridrotator', function() {

					var jQueryitem = jQuery( this );
					if( !jQueryitem.data( 'active' ) && !jQueryitem.data( 'hovered' ) && !jQueryitem.data( 'nochange' ) ) {
						jQueryitem.data( 'hovered', true );
						self._replace( jQueryitem );
					}

				} ).on( 'mouseleave.gridrotator', function() {

					jQuery( this ).data( 'hovered', false );

				} );

			}

		},
		_visChange : function() {

			isHidden() ? clearTimeout( this.playtimeout ) : this._start();

		},
		// start rotating elements
		_start : function() {

			if( this.showTotal < this.itemsTotal && this.options.slideshow ) {
				this._showNext();
			}

		},
		// get which type of animation
		_getAnimType : function() {

			return this.animType === 'random' ? this.animTypes[ Math.floor( Math.random() * this.animTypesTotal ) ] : this.animType;

		},
		// get css properties for the transition effect
		_getAnimProperties : function( jQueryout ) {

			var startInProp = {}, startOutProp = {}, endInProp = {}, endOutProp = {},
				animType = this._getAnimType(), speed, delay = 0;

			switch( animType ) {

				case 'showHide' :
					
					speed = 0;
					endOutProp.opacity = 0;
					break;

				case 'fadeInOut' :

					endOutProp.opacity = 0;
					break;

				case 'slideLeft' :
					
					startInProp.left = jQueryout.width();
					endInProp.left = 0;
					endOutProp.left = -jQueryout.width();
					break;

				case 'slideRight' :
					
					startInProp.left = -jQueryout.width();
					endInProp.left = 0;
					endOutProp.left = jQueryout.width();
					break;

				case 'slideTop' :
					
					startInProp.top = jQueryout.height();
					endInProp.top = 0;
					endOutProp.top = -jQueryout.height();
					break;

				case 'slideBottom' :
					
					startInProp.top = -jQueryout.height();
					endInProp.top = 0;
					endOutProp.top = jQueryout.height();
					break;

				case 'rotateLeft' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'rotateY(90deg)';
					endInProp.transform = 'rotateY(0deg)';
					delay = speed;
					endOutProp.transform = 'rotateY(-90deg)';
					break;

				case 'rotateRight' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'rotateY(-90deg)';
					endInProp.transform = 'rotateY(0deg)';
					delay = speed;
					endOutProp.transform = 'rotateY(90deg)';
					break;

				case 'rotateTop' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform= 'rotateX(90deg)';
					endInProp.transform = 'rotateX(0deg)';
					delay = speed;
					endOutProp.transform = 'rotateX(-90deg)';
					break;

				case 'rotateBottom' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'rotateX(-90deg)';
					endInProp.transform = 'rotateX(0deg)';
					delay = speed;
					endOutProp.transform = 'rotateX(90deg)';
					break;

				case 'scale' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'scale(0)';
					startOutProp.transform = 'scale(1)';
					endInProp.transform = 'scale(1)';
					delay = speed;
					endOutProp.transform = 'scale(0)';
					break;

				case 'rotateLeftScale' :
					
					startOutProp.transform = 'scale(1)';
					speed = this.options.animSpeed / 2;	
					startInProp.transform = 'scale(0.3) rotateY(90deg)';
					endInProp.transform = 'scale(1) rotateY(0deg)';
					delay = speed;
					endOutProp.transform = 'scale(0.3) rotateY(-90deg)';
					break;

				case 'rotateRightScale' :
					
					startOutProp.transform = 'scale(1)';
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'scale(0.3) rotateY(-90deg)';
					endInProp.transform = 'scale(1) rotateY(0deg)';
					delay = speed;
					endOutProp.transform = 'scale(0.3) rotateY(90deg)';
					break;

				case 'rotateTopScale' :
					
					startOutProp.transform = 'scale(1)';
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'scale(0.3) rotateX(90deg)';
					endInProp.transform = 'scale(1) rotateX(0deg)';
					delay = speed;
					endOutProp.transform = 'scale(0.3) rotateX(-90deg)';
					break;

				case 'rotateBottomScale' :
					
					startOutProp.transform = 'scale(1)';
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'scale(0.3) rotateX(-90deg)';
					endInProp.transform = 'scale(1) rotateX(0deg)';
					delay = speed;
					endOutProp.transform = 'scale(0.3) rotateX(90deg)';
					break;

				case 'rotate3d' :
					
					speed = this.options.animSpeed / 2;
					startInProp.transform = 'rotate3d( 1, 1, 0, 90deg )';
					endInProp.transform = 'rotate3d( 1, 1, 0, 0deg )';
					delay = speed;
					endOutProp.transform = 'rotate3d( 1, 1, 0, -90deg )';
					break;

			}

			return {
				startInProp : startInProp,
				startOutProp : startOutProp,
				endInProp : endInProp,
				endOutProp : endOutProp,				
				delay : delay,
				animSpeed : speed != undefined ? speed : this.options.animSpeed
			};

		},
		// show next [option.step] elements
		_showNext : function( time ) {

			var self = this;

			clearTimeout( this.playtimeout );

			this.playtimeout = setTimeout( function() {

				var step = self.options.step, max= self.options.maxStep, min = 1;
				
				if( max > self.showTotal ) {
					max = self.showTotal;
				}

					// number of items to swith at this point of time
				var nmbOut	= step === 'random' ? Math.floor( Math.random() * max + min ) : Math.min( Math.abs( step ) , max ) ,
					// array with random indexes. These will be the indexes of the items we will replace
					randArr	= self._getRandom( nmbOut, self.showTotal );

				for( var i = 0; i < nmbOut; ++i ) {

					// element to go out
					var jQueryout = self.jQueryitems.eq( randArr[ i ] );

					// if element is active, which means it is currently animating,
					// then we need to get different positions.. 
					if( jQueryout.data( 'active' ) || jQueryout.data( 'nochange' ) ) {

						// one of the items is active, call again..
						self._showNext( 1 );
						return false;

					}

					self._replace( jQueryout );

				}

				// again and again..
				self._showNext();

			}, time || Math.max( Math.abs( this.options.interval ) , 300 ) );

		},
		_replace : function( jQueryout ) {

			jQueryout.data( 'active', true );

			var self = this,
				jQueryoutA = jQueryout.children( 'a:last' ),
				newElProp = {
					width : jQueryoutA.width(),
					height : jQueryoutA.height()
				};

			// element stays active
			jQueryout.data( 'active', true );

			// get the element (anchor) that will go in (first one inserted in this.outItems)
			var jQueryinA = this.outItems.shift();

			// save element that went out
			this.outItems.push( jQueryoutA.clone().css( 'transition', 'none' ) );
			
			// prepend in element
			jQueryinA.css( newElProp ).prependTo( jQueryout );

			var animProp = this._getAnimProperties( jQueryoutA );

			jQueryinA.css( animProp.startInProp );
			jQueryoutA.css( animProp.startOutProp );
			
			this._setTransition( jQueryinA, 'all', animProp.animSpeed, animProp.delay, this.options.animEasingIn );
			this._setTransition( jQueryoutA, 'all', animProp.animSpeed, 0, this.options.animEasingOut );

			this._applyTransition( jQueryinA, animProp.endInProp, animProp.animSpeed, function() {

				var jQueryel = jQuery( this ),
					t = animProp.animSpeed === self.options.animSpeed && isEmpty( animProp.endInProp ) ? animProp.animSpeed : 0;
					
				setTimeout( function() {
					
					if( self.supportTransitions ) {
						jQueryel.off( self.transEndEventName );
					}
					
					jQueryel.next().remove();
					jQueryel.parent().data( 'active', false );

				}, t );

			}, animProp.animSpeed === 0 || isEmpty( animProp.endInProp ) );
			this._applyTransition( jQueryoutA, animProp.endOutProp, animProp.animSpeed );

		},
		_getRandom : function( cnt, limit ) {

			var randArray = [];

			for( var i = 0; i < limit; ++i ) {
				randArray.push( i )
			}
			
			return randArray.shuffle().slice( 0, cnt );

		},
		_setTransition : function( el, prop, speed, delay, easing ) {

			setTimeout( function() {
				el.css( 'transition', prop + ' ' + speed + 'ms ' + delay + 'ms ' + easing );
			}, 25 );

		},
		_applyTransition : function( el, styleCSS, speed, fncomplete, force ) {

			var self = this;
			setTimeout( function() {
				jQuery.fn.applyStyle = self.supportTransitions ? jQuery.fn.css : jQuery.fn.animate;

				if( fncomplete && self.supportTransitions ) {

					el.on( self.transEndEventName, fncomplete );

					if( force ) {
						fncomplete.call( el );					
					}

				}

				fncomplete = fncomplete || function() { return false; };

				el.stop().applyStyle( styleCSS, jQuery.extend( true, [], { duration : speed + 'ms', complete : fncomplete } ) );
			}, 25 );

		}

	};
	
	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );
		
		}

	};
	
	jQuery.fn.gridrotator = function( options ) {

		var instance = jQuery.data( this, 'gridrotator' );
		
		if ( typeof options === 'string' ) {
			
			var args = Array.prototype.slice.call( arguments, 1 );
			
			this.each(function() {
			
				if ( !instance ) {

					logError( "cannot call methods on gridrotator prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;
				
				}
				
				if ( !jQuery.isFunction( instance[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for gridrotator instance" );
					return;
				
				}
				
				instance[ options ].apply( instance, args );
			
			});
		
		} 
		else {
		
			this.each(function() {
				
				if ( instance ) {

					instance._init();
				
				}
				else {

					instance = jQuery.data( this, 'gridrotator', new jQuery.GridRotator( options, this ) );
				
				}

			});
		
		}
		
		return instance;
		
	};
	
} )( jQuery, window );

/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time license fee
 * http://metafizzy.co/#licenses
 *
 * Copyright 2012 David DeSandro / Metafizzy
 */

/*jshint asi: true, browser: true, curly: true, eqeqeq: true, forin: false, immed: false, newcap: true, noempty: true, strict: true, undef: true */
/*global jQuery: false */

(function( window, $, undefined ){

  'use strict';

  // get global vars
  var document = window.document;
  var Modernizr = window.Modernizr;

  // helper function
  var capitalize = function( str ) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // ========================= getStyleProperty by kangax ===============================
  // http://perfectionkills.com/feature-testing-css-properties/

  var prefixes = 'Moz Webkit O Ms'.split(' ');

  var getStyleProperty = function( propName ) {
    var style = document.documentElement.style,
        prefixed;

    // test standard property first
    if ( typeof style[propName] === 'string' ) {
      return propName;
    }

    // capitalize
    propName = capitalize( propName );

    // test vendor specific properties
    for ( var i=0, len = prefixes.length; i < len; i++ ) {
      prefixed = prefixes[i] + propName;
      if ( typeof style[ prefixed ] === 'string' ) {
        return prefixed;
      }
    }
  };

  var transformProp = getStyleProperty('transform'),
      transitionProp = getStyleProperty('transitionProperty');


  // ========================= miniModernizr ===============================
  // <3<3<3 and thanks to Faruk and Paul for doing the heavy lifting

  /*!
   * Modernizr v1.6ish: miniModernizr for Isotope
   * http://www.modernizr.com
   *
   * Developed by:
   * - Faruk Ates  http://farukat.es/
   * - Paul Irish  http://paulirish.com/
   *
   * Copyright (c) 2009-2010
   * Dual-licensed under the BSD or MIT licenses.
   * http://www.modernizr.com/license/
   */

  /*
   * This version whittles down the script just to check support for
   * CSS transitions, transforms, and 3D transforms.
  */

  var tests = {
    csstransforms: function() {
      return !!transformProp;
    },

    csstransforms3d: function() {
      var test = !!getStyleProperty('perspective');
      // double check for Chrome's false positive
      if ( test ) {
        var vendorCSSPrefixes = ' -o- -moz- -ms- -webkit- -khtml- '.split(' '),
            mediaQuery = '@media (' + vendorCSSPrefixes.join('transform-3d),(') + 'modernizr)',
            $style = $('<style>' + mediaQuery + '{#modernizr{height:3px}}' + '</style>')
                        .appendTo('head'),
            $div = $('<div id="modernizr" />').appendTo('html');

        test = $div.height() === 6;

        $div.remove();
        $style.remove();
      }
      return test;
    },

    csstransitions: function() {
      return !!transitionProp;
    }
  };

  var testName;

  if ( Modernizr ) {
    // if there's a previous Modernzir, check if there are necessary tests
    for ( testName in tests) {
      if ( !Modernizr.hasOwnProperty( testName ) ) {
        // if test hasn't been run, use addTest to run it
        Modernizr.addTest( testName, tests[ testName ] );
      }
    }
  } else {
    // or create new mini Modernizr that just has the 3 tests
    Modernizr = window.Modernizr = {
      _version : '1.6ish: miniModernizr for Isotope'
    };

    var classes = ' ';
    var result;

    // Run through tests
    for ( testName in tests) {
      result = tests[ testName ]();
      Modernizr[ testName ] = result;
      classes += ' ' + ( result ?  '' : 'no-' ) + testName;
    }

    // Add the new classes to the <html> element.
    $('html').addClass( classes );
  }


  // ========================= isoTransform ===============================

  /**
   *  provides hooks for .css({ scale: value, translate: [x, y] })
   *  Progressively enhanced CSS transforms
   *  Uses hardware accelerated 3D transforms for Safari
   *  or falls back to 2D transforms.
   */

  if ( Modernizr.csstransforms ) {

        // i.e. transformFnNotations.scale(0.5) >> 'scale3d( 0.5, 0.5, 1)'
    var transformFnNotations = Modernizr.csstransforms3d ?
      { // 3D transform functions
        translate : function ( position ) {
          return 'translate3d(' + position[0] + 'px, ' + position[1] + 'px, 0) ';
        },
        scale : function ( scale ) {
          return 'scale3d(' + scale + ', ' + scale + ', 1) ';
        }
      } :
      { // 2D transform functions
        translate : function ( position ) {
          return 'translate(' + position[0] + 'px, ' + position[1] + 'px) ';
        },
        scale : function ( scale ) {
          return 'scale(' + scale + ') ';
        }
      }
    ;

    var setIsoTransform = function ( elem, name, value ) {
          // unpack current transform data
      var data =  $.data( elem, 'isoTransform' ) || {},
          newData = {},
          fnName,
          transformObj = {},
          transformValue;

      // i.e. newData.scale = 0.5
      newData[ name ] = value;
      // extend new value over current data
      $.extend( data, newData );

      for ( fnName in data ) {
        transformValue = data[ fnName ];
        transformObj[ fnName ] = transformFnNotations[ fnName ]( transformValue );
      }

      // get proper order
      // ideally, we could loop through this give an array, but since we only have
      // a couple transforms we're keeping track of, we'll do it like so
      var translateFn = transformObj.translate || '',
          scaleFn = transformObj.scale || '',
          // sorting so translate always comes first
          valueFns = translateFn + scaleFn;

      // set data back in elem
      $.data( elem, 'isoTransform', data );

      // set name to vendor specific property
      elem.style[ transformProp ] = valueFns;
    };

    // ==================== scale ===================

    $.cssNumber.scale = true;

    $.cssHooks.scale = {
      set: function( elem, value ) {
        // uncomment this bit if you want to properly parse strings
        // if ( typeof value === 'string' ) {
        //   value = parseFloat( value );
        // }
        setIsoTransform( elem, 'scale', value );
      },
      get: function( elem, computed ) {
        var transform = $.data( elem, 'isoTransform' );
        return transform && transform.scale ? transform.scale : 1;
      }
    };

    $.fx.step.scale = function( fx ) {
      $.cssHooks.scale.set( fx.elem, fx.now+fx.unit );
    };


    // ==================== translate ===================

    $.cssNumber.translate = true;

    $.cssHooks.translate = {
      set: function( elem, value ) {

        // uncomment this bit if you want to properly parse strings
        // if ( typeof value === 'string' ) {
        //   value = value.split(' ');
        // }
        //
        // var i, val;
        // for ( i = 0; i < 2; i++ ) {
        //   val = value[i];
        //   if ( typeof val === 'string' ) {
        //     val = parseInt( val );
        //   }
        // }

        setIsoTransform( elem, 'translate', value );
      },

      get: function( elem, computed ) {
        var transform = $.data( elem, 'isoTransform' );
        return transform && transform.translate ? transform.translate : [ 0, 0 ];
      }
    };

  }

  // ========================= get transition-end event ===============================
  var transitionEndEvent, transitionDurProp;

  if ( Modernizr.csstransitions ) {
    transitionEndEvent = {
      WebkitTransitionProperty: 'webkitTransitionEnd',  // webkit
      MozTransitionProperty: 'transitionend',
      OTransitionProperty: 'oTransitionEnd otransitionend',
      transitionProperty: 'transitionend'
    }[ transitionProp ];

    transitionDurProp = getStyleProperty('transitionDuration');
  }

  // ========================= smartresize ===============================

  /*
   * smartresize: debounced resize event for jQuery
   *
   * latest version and complete README available on Github:
   * https://github.com/louisremi/jquery.smartresize.js
   *
   * Copyright 2011 @louis_remi
   * Licensed under the MIT license.
   */

  var $event = $.event,
      dispatchMethod = $.event.handle ? 'handle' : 'dispatch',
      resizeTimeout;

  $event.special.smartresize = {
    setup: function() {
      $(this).bind( "resize", $event.special.smartresize.handler );
    },
    teardown: function() {
      $(this).unbind( "resize", $event.special.smartresize.handler );
    },
    handler: function( event, execAsap ) {
      // Save the context
      var context = this,
          args = arguments;

      // set correct event type
      event.type = "smartresize";

      if ( resizeTimeout ) { clearTimeout( resizeTimeout ); }
      resizeTimeout = setTimeout(function() {
        $event[ dispatchMethod ].apply( context, args );
      }, execAsap === "execAsap"? 0 : 100 );
    }
  };

  $.fn.smartresize = function( fn ) {
    return fn ? this.bind( "smartresize", fn ) : this.trigger( "smartresize", ["execAsap"] );
  };



// ========================= Isotope ===============================


  // our "Widget" object constructor
  $.Isotope = function( options, element, callback ){
    this.element = $( element );

    this._create( options );
    this._init( callback );
  };

  // styles of container element we want to keep track of
  var isoContainerStyles = [ 'width', 'height' ];

  var $window = $(window);

  $.Isotope.settings = {
    resizable: true,
    layoutMode : 'masonry',
    containerClass : 'isotope',
    itemClass : 'isotope-item',
    hiddenClass : 'isotope-hidden',
    hiddenStyle: { opacity: 0, scale: 0.001 },
    visibleStyle: { opacity: 1, scale: 1 },
    containerStyle: {
      position: 'relative',
      overflow: 'hidden'
    },
    animationEngine: 'best-available',
    animationOptions: {
      queue: false,
      duration: 800
    },
    sortBy : 'original-order',
    sortAscending : true,
    resizesContainer : true,
    transformsEnabled: true,
    itemPositionDataEnabled: false
  };

  $.Isotope.prototype = {

    // sets up widget
    _create : function( options ) {

      this.options = $.extend( {}, $.Isotope.settings, options );

      this.styleQueue = [];
      this.elemCount = 0;

      // get original styles in case we re-apply them in .destroy()
      var elemStyle = this.element[0].style;
      this.originalStyle = {};
      // keep track of container styles
      var containerStyles = isoContainerStyles.slice(0);
      for ( var prop in this.options.containerStyle ) {
        containerStyles.push( prop );
      }
      for ( var i=0, len = containerStyles.length; i < len; i++ ) {
        prop = containerStyles[i];
        this.originalStyle[ prop ] = elemStyle[ prop ] || '';
      }
      // apply container style from options
      this.element.css( this.options.containerStyle );

      this._updateAnimationEngine();
      this._updateUsingTransforms();

      // sorting
      var originalOrderSorter = {
        'original-order' : function( $elem, instance ) {
          instance.elemCount ++;
          return instance.elemCount;
        },
        random : function() {
          return Math.random();
        }
      };

      this.options.getSortData = $.extend( this.options.getSortData, originalOrderSorter );

      // need to get atoms
      this.reloadItems();

      // get top left position of where the bricks should be
      this.offset = {
        left: parseInt( ( this.element.css('padding-left') || 0 ), 10 ),
        top: parseInt( ( this.element.css('padding-top') || 0 ), 10 )
      };

      // add isotope class first time around
      var instance = this;
      setTimeout( function() {
        instance.element.addClass( instance.options.containerClass );
      }, 0 );

      // bind resize method
      if ( this.options.resizable ) {
        $window.bind( 'smartresize.isotope', function() {
          instance.resize();
        });
      }

      // dismiss all click events from hidden events
      this.element.delegate( '.' + this.options.hiddenClass, 'click', function(){
        return false;
      });

    },

    _getAtoms : function( $elems ) {
      var selector = this.options.itemSelector,
          // filter & find
          $atoms = selector ? $elems.filter( selector ).add( $elems.find( selector ) ) : $elems,
          // base style for atoms
          atomStyle = { position: 'absolute' };

      // filter out text nodes
      $atoms = $atoms.filter( function( i, atom ) {
        return atom.nodeType === 1;
      });

      if ( this.usingTransforms ) {
        atomStyle.left = 0;
        atomStyle.top = 0;
      }

      $atoms.css( atomStyle ).addClass( this.options.itemClass );

      this.updateSortData( $atoms, true );

      return $atoms;
    },

    // _init fires when your instance is first created
    // (from the constructor above), and when you
    // attempt to initialize the widget again (by the bridge)
    // after it has already been initialized.
    _init : function( callback ) {

      this.$filteredAtoms = this._filter( this.$allAtoms );
      this._sort();
      this.reLayout( callback );

    },

    option : function( opts ){
      // change options AFTER initialization:
      // signature: $('#foo').bar({ cool:false });
      if ( $.isPlainObject( opts ) ){
        this.options = $.extend( true, this.options, opts );

        // trigger _updateOptionName if it exists
        var updateOptionFn;
        for ( var optionName in opts ) {
          updateOptionFn = '_update' + capitalize( optionName );
          if ( this[ updateOptionFn ] ) {
            this[ updateOptionFn ]();
          }
        }
      }
    },

    // ====================== updaters ====================== //
    // kind of like setters

    _updateAnimationEngine : function() {
      var animationEngine = this.options.animationEngine.toLowerCase().replace( /[ _\-]/g, '');
      var isUsingJQueryAnimation;
      // set applyStyleFnName
      switch ( animationEngine ) {
        case 'css' :
        case 'none' :
          isUsingJQueryAnimation = false;
          break;
        case 'jquery' :
          isUsingJQueryAnimation = true;
          break;
        default : // best available
          isUsingJQueryAnimation = !Modernizr.csstransitions;
      }
      this.isUsingJQueryAnimation = isUsingJQueryAnimation;
      this._updateUsingTransforms();
    },

    _updateTransformsEnabled : function() {
      this._updateUsingTransforms();
    },

    _updateUsingTransforms : function() {
      var usingTransforms = this.usingTransforms = this.options.transformsEnabled &&
        Modernizr.csstransforms && Modernizr.csstransitions && !this.isUsingJQueryAnimation;

      // prevent scales when transforms are disabled
      if ( !usingTransforms ) {
        delete this.options.hiddenStyle.scale;
        delete this.options.visibleStyle.scale;
      }

      this.getPositionStyles = usingTransforms ? this._translate : this._positionAbs;
    },


    // ====================== Filtering ======================

    _filter : function( $atoms ) {
      var filter = this.options.filter === '' ? '*' : this.options.filter;

      if ( !filter ) {
        return $atoms;
      }

      var hiddenClass    = this.options.hiddenClass,
          hiddenSelector = '.' + hiddenClass,
          $hiddenAtoms   = $atoms.filter( hiddenSelector ),
          $atomsToShow   = $hiddenAtoms;

      if ( filter !== '*' ) {
        $atomsToShow = $hiddenAtoms.filter( filter );
        var $atomsToHide = $atoms.not( hiddenSelector ).not( filter ).addClass( hiddenClass );
        this.styleQueue.push({ $el: $atomsToHide, style: this.options.hiddenStyle });
      }

      this.styleQueue.push({ $el: $atomsToShow, style: this.options.visibleStyle });
      $atomsToShow.removeClass( hiddenClass );

      return $atoms.filter( filter );
    },

    // ====================== Sorting ======================

    updateSortData : function( $atoms, isIncrementingElemCount ) {
      var instance = this,
          getSortData = this.options.getSortData,
          $this, sortData;
      $atoms.each(function(){
        $this = $(this);
        sortData = {};
        // get value for sort data based on fn( $elem ) passed in
        for ( var key in getSortData ) {
          if ( !isIncrementingElemCount && key === 'original-order' ) {
            // keep original order original
            sortData[ key ] = $.data( this, 'isotope-sort-data' )[ key ];
          } else {
            sortData[ key ] = getSortData[ key ]( $this, instance );
          }
        }
        // apply sort data to element
        $.data( this, 'isotope-sort-data', sortData );
      });
    },

    // used on all the filtered atoms
    _sort : function() {

      var sortBy = this.options.sortBy,
          getSorter = this._getSorter,
          sortDir = this.options.sortAscending ? 1 : -1,
          sortFn = function( alpha, beta ) {
            var a = getSorter( alpha, sortBy ),
                b = getSorter( beta, sortBy );
            // fall back to original order if data matches
            if ( a === b && sortBy !== 'original-order') {
              a = getSorter( alpha, 'original-order' );
              b = getSorter( beta, 'original-order' );
            }
            return ( ( a > b ) ? 1 : ( a < b ) ? -1 : 0 ) * sortDir;
          };

      this.$filteredAtoms.sort( sortFn );
    },

    _getSorter : function( elem, sortBy ) {
      return $.data( elem, 'isotope-sort-data' )[ sortBy ];
    },

    // ====================== Layout Helpers ======================

    _translate : function( x, y ) {
      return { translate : [ x, y ] };
    },

    _positionAbs : function( x, y ) {
      return { left: x, top: y };
    },

    _pushPosition : function( $elem, x, y ) {
      x = Math.round( x + this.offset.left );
      y = Math.round( y + this.offset.top );
      var position = this.getPositionStyles( x, y );
      this.styleQueue.push({ $el: $elem, style: position });
      if ( this.options.itemPositionDataEnabled ) {
        $elem.data('isotope-item-position', {x: x, y: y} );
      }
    },


    // ====================== General Layout ======================

    // used on collection of atoms (should be filtered, and sorted before )
    // accepts atoms-to-be-laid-out to start with
    layout : function( $elems, callback ) {

      var layoutMode = this.options.layoutMode;

      // layout logic
      this[ '_' +  layoutMode + 'Layout' ]( $elems );

      // set the size of the container
      if ( this.options.resizesContainer ) {
        var containerStyle = this[ '_' +  layoutMode + 'GetContainerSize' ]();
        this.styleQueue.push({ $el: this.element, style: containerStyle });
      }

      this._processStyleQueue( $elems, callback );

      this.isLaidOut = true;
    },

    _processStyleQueue : function( $elems, callback ) {
      // are we animating the layout arrangement?
      // use plugin-ish syntax for css or animate
      var styleFn = !this.isLaidOut ? 'css' : (
            this.isUsingJQueryAnimation ? 'animate' : 'css'
          ),
          animOpts = this.options.animationOptions,
          onLayout = this.options.onLayout,
          objStyleFn, processor,
          triggerCallbackNow, callbackFn;

      // default styleQueue processor, may be overwritten down below
      processor = function( i, obj ) {
        obj.$el[ styleFn ]( obj.style, animOpts );
      };

      if ( this._isInserting && this.isUsingJQueryAnimation ) {
        // if using styleQueue to insert items
        processor = function( i, obj ) {
          // only animate if it not being inserted
          objStyleFn = obj.$el.hasClass('no-transition') ? 'css' : styleFn;
          obj.$el[ objStyleFn ]( obj.style, animOpts );
        };

      } else if ( callback || onLayout || animOpts.complete ) {
        // has callback
        var isCallbackTriggered = false,
            // array of possible callbacks to trigger
            callbacks = [ callback, onLayout, animOpts.complete ],
            instance = this;
        triggerCallbackNow = true;
        // trigger callback only once
        callbackFn = function() {
          if ( isCallbackTriggered ) {
            return;
          }
          var hollaback;
          for (var i=0, len = callbacks.length; i < len; i++) {
            hollaback = callbacks[i];
            if ( typeof hollaback === 'function' ) {
              hollaback.call( instance.element, $elems, instance );
            }
          }
          isCallbackTriggered = true;
        };

        if ( this.isUsingJQueryAnimation && styleFn === 'animate' ) {
          // add callback to animation options
          animOpts.complete = callbackFn;
          triggerCallbackNow = false;

        } else if ( Modernizr.csstransitions ) {
          // detect if first item has transition
          var i = 0,
              firstItem = this.styleQueue[0],
              testElem = firstItem && firstItem.$el,
              styleObj;
          // get first non-empty jQ object
          while ( !testElem || !testElem.length ) {
            styleObj = this.styleQueue[ i++ ];
            // HACK: sometimes styleQueue[i] is undefined
            if ( !styleObj ) {
              return;
            }
            testElem = styleObj.$el;
          }
          // get transition duration of the first element in that object
          // yeah, this is inexact
          var duration = parseFloat( getComputedStyle( testElem[0] )[ transitionDurProp ] );
          if ( duration > 0 ) {
            processor = function( i, obj ) {
              obj.$el[ styleFn ]( obj.style, animOpts )
                // trigger callback at transition end
                .one( transitionEndEvent, callbackFn );
            };
            triggerCallbackNow = false;
          }
        }
      }

      // process styleQueue
      $.each( this.styleQueue, processor );

      if ( triggerCallbackNow ) {
        callbackFn();
      }

      // clear out queue for next time
      this.styleQueue = [];
    },


    resize : function() {
      if ( this[ '_' + this.options.layoutMode + 'ResizeChanged' ]() ) {
        this.reLayout();
      }
    },


    reLayout : function( callback ) {

      this[ '_' +  this.options.layoutMode + 'Reset' ]();
      this.layout( this.$filteredAtoms, callback );

    },

    // ====================== Convenience methods ======================

    // ====================== Adding items ======================

    // adds a jQuery object of items to a isotope container
    addItems : function( $content, callback ) {
      var $newAtoms = this._getAtoms( $content );
      // add new atoms to atoms pools
      this.$allAtoms = this.$allAtoms.add( $newAtoms );

      if ( callback ) {
        callback( $newAtoms );
      }
    },

    // convienence method for adding elements properly to any layout
    // positions items, hides them, then animates them back in <--- very sezzy
    insert : function( $content, callback ) {
      // position items
      this.element.append( $content );

      var instance = this;
      this.addItems( $content, function( $newAtoms ) {
        var $newFilteredAtoms = instance._filter( $newAtoms );
        instance._addHideAppended( $newFilteredAtoms );
        instance._sort();
        instance.reLayout();
        instance._revealAppended( $newFilteredAtoms, callback );
      });

    },

    // convienence method for working with Infinite Scroll
    appended : function( $content, callback ) {
      var instance = this;
      this.addItems( $content, function( $newAtoms ) {
        instance._addHideAppended( $newAtoms );
        instance.layout( $newAtoms );
        instance._revealAppended( $newAtoms, callback );
      });
    },

    // adds new atoms, then hides them before positioning
    _addHideAppended : function( $newAtoms ) {
      this.$filteredAtoms = this.$filteredAtoms.add( $newAtoms );
      $newAtoms.addClass('no-transition');

      this._isInserting = true;

      // apply hidden styles
      this.styleQueue.push({ $el: $newAtoms, style: this.options.hiddenStyle });
    },

    // sets visible style on new atoms
    _revealAppended : function( $newAtoms, callback ) {
      var instance = this;
      // apply visible style after a sec
      setTimeout( function() {
        // enable animation
        $newAtoms.removeClass('no-transition');
        // reveal newly inserted filtered elements
        instance.styleQueue.push({ $el: $newAtoms, style: instance.options.visibleStyle });
        instance._isInserting = false;
        instance._processStyleQueue( $newAtoms, callback );
      }, 10 );
    },

    // gathers all atoms
    reloadItems : function() {
      this.$allAtoms = this._getAtoms( this.element.children() );
    },

    // removes elements from Isotope widget
    remove: function( $content, callback ) {
      // remove elements immediately from Isotope instance
      this.$allAtoms = this.$allAtoms.not( $content );
      this.$filteredAtoms = this.$filteredAtoms.not( $content );
      // remove() as a callback, for after transition / animation
      var instance = this;
      var removeContent = function() {
        $content.remove();
        if ( callback ) {
          callback.call( instance.element );
        }
      };

      if ( $content.filter( ':not(.' + this.options.hiddenClass + ')' ).length ) {
        // if any non-hidden content needs to be removed
        this.styleQueue.push({ $el: $content, style: this.options.hiddenStyle });
        this._sort();
        this.reLayout( removeContent );
      } else {
        // remove it now
        removeContent();
      }

    },

    shuffle : function( callback ) {
      this.updateSortData( this.$allAtoms );
      this.options.sortBy = 'random';
      this._sort();
      this.reLayout( callback );
    },

    // destroys widget, returns elements and container back (close) to original style
    destroy : function() {

      var usingTransforms = this.usingTransforms;
      var options = this.options;

      this.$allAtoms
        .removeClass( options.hiddenClass + ' ' + options.itemClass )
        .each(function(){
          var style = this.style;
          style.position = '';
          style.top = '';
          style.left = '';
          style.opacity = '';
          if ( usingTransforms ) {
            style[ transformProp ] = '';
          }
        });

      // re-apply saved container styles
      var elemStyle = this.element[0].style;
      for ( var prop in this.originalStyle ) {
        elemStyle[ prop ] = this.originalStyle[ prop ];
      }

      this.element
        .unbind('.isotope')
        .undelegate( '.' + options.hiddenClass, 'click' )
        .removeClass( options.containerClass )
        .removeData('isotope');

      $window.unbind('.isotope');

    },


    // ====================== LAYOUTS ======================

    // calculates number of rows or columns
    // requires columnWidth or rowHeight to be set on namespaced object
    // i.e. this.masonry.columnWidth = 200
    _getSegments : function( isRows ) {
      var namespace = this.options.layoutMode,
          measure  = isRows ? 'rowHeight' : 'columnWidth',
          size     = isRows ? 'height' : 'width',
          segmentsName = isRows ? 'rows' : 'cols',
          containerSize = this.element[ size ](),
          segments,
                    // i.e. options.masonry && options.masonry.columnWidth
          segmentSize = this.options[ namespace ] && this.options[ namespace ][ measure ] ||
                    // or use the size of the first item, i.e. outerWidth
                    this.$filteredAtoms[ 'outer' + capitalize(size) ](true) ||
                    // if there's no items, use size of container
                    containerSize;

      segments = Math.floor( containerSize / segmentSize );
      segments = Math.max( segments, 1 );

      // i.e. this.masonry.cols = ....
      this[ namespace ][ segmentsName ] = segments;
      // i.e. this.masonry.columnWidth = ...
      this[ namespace ][ measure ] = segmentSize;

    },

    _checkIfSegmentsChanged : function( isRows ) {
      var namespace = this.options.layoutMode,
          segmentsName = isRows ? 'rows' : 'cols',
          prevSegments = this[ namespace ][ segmentsName ];
      // update cols/rows
      this._getSegments( isRows );
      // return if updated cols/rows is not equal to previous
      return ( this[ namespace ][ segmentsName ] !== prevSegments );
    },

    // ====================== Masonry ======================

    _masonryReset : function() {
      // layout-specific props
      this.masonry = {};
      // FIXME shouldn't have to call this again
      this._getSegments();
      var i = this.masonry.cols;
      this.masonry.colYs = [];
      while (i--) {
        this.masonry.colYs.push( 0 );
      }
    },

    _masonryLayout : function( $elems ) {
      var instance = this,
          props = instance.masonry;
      $elems.each(function(){
        var $this  = $(this),
            //how many columns does this brick span
            colSpan = Math.ceil( $this.outerWidth(true) / props.columnWidth );
        colSpan = Math.min( colSpan, props.cols );

        if ( colSpan === 1 ) {
          // if brick spans only one column, just like singleMode
          instance._masonryPlaceBrick( $this, props.colYs );
        } else {
          // brick spans more than one column
          // how many different places could this brick fit horizontally
          var groupCount = props.cols + 1 - colSpan,
              groupY = [],
              groupColY,
              i;

          // for each group potential horizontal position
          for ( i=0; i < groupCount; i++ ) {
            // make an array of colY values for that one group
            groupColY = props.colYs.slice( i, i+colSpan );
            // and get the max value of the array
            groupY[i] = Math.max.apply( Math, groupColY );
          }

          instance._masonryPlaceBrick( $this, groupY );
        }
      });
    },

    // worker method that places brick in the columnSet
    //   with the the minY
    _masonryPlaceBrick : function( $brick, setY ) {
      // get the minimum Y value from the columns
      var minimumY = Math.min.apply( Math, setY ),
          shortCol = 0;

      // Find index of short column, the first from the left
      for (var i=0, len = setY.length; i < len; i++) {
        if ( setY[i] === minimumY ) {
          shortCol = i;
          break;
        }
      }

      // position the brick
      var x = this.masonry.columnWidth * shortCol,
          y = minimumY;
      this._pushPosition( $brick, x, y );

      // apply setHeight to necessary columns
      var setHeight = minimumY + $brick.outerHeight(true),
          setSpan = this.masonry.cols + 1 - len;
      for ( i=0; i < setSpan; i++ ) {
        this.masonry.colYs[ shortCol + i ] = setHeight;
      }

    },

    _masonryGetContainerSize : function() {
      var containerHeight = Math.max.apply( Math, this.masonry.colYs );
      return { height: containerHeight };
    },

    _masonryResizeChanged : function() {
      return this._checkIfSegmentsChanged();
    },

    // ====================== fitRows ======================

    _fitRowsReset : function() {
      this.fitRows = {
        x : 0,
        y : 0,
        height : 0
      };
    },

    _fitRowsLayout : function( $elems ) {
      var instance = this,
          containerWidth = this.element.width(),
          props = this.fitRows;

      $elems.each( function() {
        var $this = $(this),
            atomW = $this.outerWidth(true),
            atomH = $this.outerHeight(true);

        if ( props.x !== 0 && atomW + props.x > containerWidth ) {
          // if this element cannot fit in the current row
          props.x = 0;
          props.y = props.height;
        }

        // position the atom
        instance._pushPosition( $this, props.x, props.y );

        props.height = Math.max( props.y + atomH, props.height );
        props.x += atomW;

      });
    },

    _fitRowsGetContainerSize : function () {
      return { height : this.fitRows.height };
    },

    _fitRowsResizeChanged : function() {
      return true;
    },


    // ====================== cellsByRow ======================

    _cellsByRowReset : function() {
      this.cellsByRow = {
        index : 0
      };
      // get this.cellsByRow.columnWidth
      this._getSegments();
      // get this.cellsByRow.rowHeight
      this._getSegments(true);
    },

    _cellsByRowLayout : function( $elems ) {
      var instance = this,
          props = this.cellsByRow;
      $elems.each( function(){
        var $this = $(this),
            col = props.index % props.cols,
            row = Math.floor( props.index / props.cols ),
            x = ( col + 0.5 ) * props.columnWidth - $this.outerWidth(true) / 2,
            y = ( row + 0.5 ) * props.rowHeight - $this.outerHeight(true) / 2;
        instance._pushPosition( $this, x, y );
        props.index ++;
      });
    },

    _cellsByRowGetContainerSize : function() {
      return { height : Math.ceil( this.$filteredAtoms.length / this.cellsByRow.cols ) * this.cellsByRow.rowHeight + this.offset.top };
    },

    _cellsByRowResizeChanged : function() {
      return this._checkIfSegmentsChanged();
    },


    // ====================== straightDown ======================

    _straightDownReset : function() {
      this.straightDown = {
        y : 0
      };
    },

    _straightDownLayout : function( $elems ) {
      var instance = this;
      $elems.each( function( i ){
        var $this = $(this);
        instance._pushPosition( $this, 0, instance.straightDown.y );
        instance.straightDown.y += $this.outerHeight(true);
      });
    },

    _straightDownGetContainerSize : function() {
      return { height : this.straightDown.y };
    },

    _straightDownResizeChanged : function() {
      return true;
    },


    // ====================== masonryHorizontal ======================

    _masonryHorizontalReset : function() {
      // layout-specific props
      this.masonryHorizontal = {};
      // FIXME shouldn't have to call this again
      this._getSegments( true );
      var i = this.masonryHorizontal.rows;
      this.masonryHorizontal.rowXs = [];
      while (i--) {
        this.masonryHorizontal.rowXs.push( 0 );
      }
    },

    _masonryHorizontalLayout : function( $elems ) {
      var instance = this,
          props = instance.masonryHorizontal;
      $elems.each(function(){
        var $this  = $(this),
            //how many rows does this brick span
            rowSpan = Math.ceil( $this.outerHeight(true) / props.rowHeight );
        rowSpan = Math.min( rowSpan, props.rows );

        if ( rowSpan === 1 ) {
          // if brick spans only one column, just like singleMode
          instance._masonryHorizontalPlaceBrick( $this, props.rowXs );
        } else {
          // brick spans more than one row
          // how many different places could this brick fit horizontally
          var groupCount = props.rows + 1 - rowSpan,
              groupX = [],
              groupRowX, i;

          // for each group potential horizontal position
          for ( i=0; i < groupCount; i++ ) {
            // make an array of colY values for that one group
            groupRowX = props.rowXs.slice( i, i+rowSpan );
            // and get the max value of the array
            groupX[i] = Math.max.apply( Math, groupRowX );
          }

          instance._masonryHorizontalPlaceBrick( $this, groupX );
        }
      });
    },

    _masonryHorizontalPlaceBrick : function( $brick, setX ) {
      // get the minimum Y value from the columns
      var minimumX  = Math.min.apply( Math, setX ),
          smallRow  = 0;
      // Find index of smallest row, the first from the top
      for (var i=0, len = setX.length; i < len; i++) {
        if ( setX[i] === minimumX ) {
          smallRow = i;
          break;
        }
      }

      // position the brick
      var x = minimumX,
          y = this.masonryHorizontal.rowHeight * smallRow;
      this._pushPosition( $brick, x, y );

      // apply setHeight to necessary columns
      var setWidth = minimumX + $brick.outerWidth(true),
          setSpan = this.masonryHorizontal.rows + 1 - len;
      for ( i=0; i < setSpan; i++ ) {
        this.masonryHorizontal.rowXs[ smallRow + i ] = setWidth;
      }
    },

    _masonryHorizontalGetContainerSize : function() {
      var containerWidth = Math.max.apply( Math, this.masonryHorizontal.rowXs );
      return { width: containerWidth };
    },

    _masonryHorizontalResizeChanged : function() {
      return this._checkIfSegmentsChanged(true);
    },


    // ====================== fitColumns ======================

    _fitColumnsReset : function() {
      this.fitColumns = {
        x : 0,
        y : 0,
        width : 0
      };
    },

    _fitColumnsLayout : function( $elems ) {
      var instance = this,
          containerHeight = this.element.height(),
          props = this.fitColumns;
      $elems.each( function() {
        var $this = $(this),
            atomW = $this.outerWidth(true),
            atomH = $this.outerHeight(true);

        if ( props.y !== 0 && atomH + props.y > containerHeight ) {
          // if this element cannot fit in the current column
          props.x = props.width;
          props.y = 0;
        }

        // position the atom
        instance._pushPosition( $this, props.x, props.y );

        props.width = Math.max( props.x + atomW, props.width );
        props.y += atomH;

      });
    },

    _fitColumnsGetContainerSize : function () {
      return { width : this.fitColumns.width };
    },

    _fitColumnsResizeChanged : function() {
      return true;
    },



    // ====================== cellsByColumn ======================

    _cellsByColumnReset : function() {
      this.cellsByColumn = {
        index : 0
      };
      // get this.cellsByColumn.columnWidth
      this._getSegments();
      // get this.cellsByColumn.rowHeight
      this._getSegments(true);
    },

    _cellsByColumnLayout : function( $elems ) {
      var instance = this,
          props = this.cellsByColumn;
      $elems.each( function(){
        var $this = $(this),
            col = Math.floor( props.index / props.rows ),
            row = props.index % props.rows,
            x = ( col + 0.5 ) * props.columnWidth - $this.outerWidth(true) / 2,
            y = ( row + 0.5 ) * props.rowHeight - $this.outerHeight(true) / 2;
        instance._pushPosition( $this, x, y );
        props.index ++;
      });
    },

    _cellsByColumnGetContainerSize : function() {
      return { width : Math.ceil( this.$filteredAtoms.length / this.cellsByColumn.rows ) * this.cellsByColumn.columnWidth };
    },

    _cellsByColumnResizeChanged : function() {
      return this._checkIfSegmentsChanged(true);
    },

    // ====================== straightAcross ======================

    _straightAcrossReset : function() {
      this.straightAcross = {
        x : 0
      };
    },

    _straightAcrossLayout : function( $elems ) {
      var instance = this;
      $elems.each( function( i ){
        var $this = $(this);
        instance._pushPosition( $this, instance.straightAcross.x, 0 );
        instance.straightAcross.x += $this.outerWidth(true);
      });
    },

    _straightAcrossGetContainerSize : function() {
      return { width : this.straightAcross.x };
    },

    _straightAcrossResizeChanged : function() {
      return true;
    }

  };


  // ======================= imagesLoaded Plugin ===============================
  /*!
   * jQuery imagesLoaded plugin v1.1.0
   * http://github.com/desandro/imagesloaded
   *
   * MIT License. by Paul Irish et al.
   */


  // $('#my-container').imagesLoaded(myFunction)
  // or
  // $('img').imagesLoaded(myFunction)

  // execute a callback when all images have loaded.
  // needed because .load() doesn't work on cached images

  // callback function gets image collection as argument
  //  `this` is the container

  $.fn.imagesLoaded = function( callback ) {
    var $this = this,
        $images = $this.find('img').add( $this.filter('img') ),
        len = $images.length,
        blank = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==',
        loaded = [];

    function triggerCallback() {
      callback.call( $this, $images );
    }

    function imgLoaded( event ) {
      var img = event.target;
      if ( img.src !== blank && $.inArray( img, loaded ) === -1 ){
        loaded.push( img );
        if ( --len <= 0 ){
          setTimeout( triggerCallback );
          $images.unbind( '.imagesLoaded', imgLoaded );
        }
      }
    }

    // if no images, trigger immediately
    if ( !len ) {
      triggerCallback();
    }

    $images.bind( 'load.imagesLoaded error.imagesLoaded',  imgLoaded ).each( function() {
      // cached images don't fire load sometimes, so we reset src.
      var src = this.src;
      // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
      // data uri bypasses webkit log warning (thx doug jones)
      this.src = blank;
      this.src = src;
    });

    return $this;
  };


  // helper function for logging errors
  // $.error breaks jQuery chaining
  var logError = function( message ) {
    if ( window.console ) {
      window.console.error( message );
    }
  };

  // =======================  Plugin bridge  ===============================
  // leverages data method to either create or return $.Isotope constructor
  // A bit from jQuery UI
  //   https://github.com/jquery/jquery-ui/blob/master/ui/jquery.ui.widget.js
  // A bit from jcarousel
  //   https://github.com/jsor/jcarousel/blob/master/lib/jquery.jcarousel.js

  $.fn.isotope = function( options, callback ) {
    if ( typeof options === 'string' ) {
      // call method
      var args = Array.prototype.slice.call( arguments, 1 );

      this.each(function(){
        var instance = $.data( this, 'isotope' );
        if ( !instance ) {
          logError( "cannot call methods on isotope prior to initialization; " +
              "attempted to call method '" + options + "'" );
          return;
        }
        if ( !$.isFunction( instance[options] ) || options.charAt(0) === "_" ) {
          logError( "no such method '" + options + "' for isotope instance" );
          return;
        }
        // apply method
        instance[ options ].apply( instance, args );
      });
    } else {
      this.each(function() {
        var instance = $.data( this, 'isotope' );
        if ( instance ) {
          // apply options & init
          instance.option( options );
          instance._init( callback );
        } else {
          // initialize new instance
          $.data( this, 'isotope', new $.Isotope( options, this, callback ) );
        }
      });
    }
    // return jQuery object
    // so plugin methods do not have to
    return this;
  };

})( window, jQuery );
(function($) {

	/**
	 * Spoofs placeholders in browsers that don't support them (eg Firefox 3)
	 * 
	 * Copyright 2011 Dan Bentley
	 * Licensed under the Apache License 2.0
	 *
	 * Author: Dan Bentley [github.com/danbentley]
	 */

	// Return if native support is available.
	if ("placeholder" in document.createElement("input")) return;

	$(document).ready(function(){
		$(':input[placeholder]').not(':password').each(function() {
			setupPlaceholder($(this));
		});

		$(':password[placeholder]').each(function() {
			setupPasswords($(this));
		});
	   
		$('form').submit(function(e) {
			clearPlaceholdersBeforeSubmit($(this));
		});
	});

	function setupPlaceholder(input) {

		var placeholderText = input.attr('placeholder');

		setPlaceholderOrFlagChanged(input, placeholderText);
		input.focus(function(e) {
			if (input.data('changed') === true) return;
			if (input.val() === placeholderText) input.val('');
		}).blur(function(e) {
			if (input.val() === '') input.val(placeholderText); 
		}).change(function(e) {
			input.data('changed', input.val() !== '');
		});
	}

	function setPlaceholderOrFlagChanged(input, text) {
		(input.val() === '') ? input.val(text) : input.data('changed', true);
	}

	function setupPasswords(input) {
		var passwordPlaceholder = createPasswordPlaceholder(input);
		input.after(passwordPlaceholder);

		(input.val() === '') ? input.hide() : passwordPlaceholder.hide();

		$(input).blur(function(e) {
			if (input.val() !== '') return;
			input.hide();
			passwordPlaceholder.show();
		});
			
		$(passwordPlaceholder).focus(function(e) {
			input.show().focus();
			passwordPlaceholder.hide();
		});
	}

	function createPasswordPlaceholder(input) {
		return $('<input>').attr({
			placeholder: input.attr('placeholder'),
			value: input.attr('placeholder'),
			id: input.attr('id'),
			readonly: true
		}).addClass(input.attr('class'));
	}

	function clearPlaceholdersBeforeSubmit(form) {
		form.find(':input[placeholder]').each(function() {
			if ($(this).data('changed') === true) return;
			if ($(this).val() === $(this).attr('placeholder')) $(this).val('');
		});
	}
})(jQuery);

(function($) {

	/**
	 * Spoofs placeholders in browsers that don't support them (eg Firefox 3)
	 * 
	 * Copyright 2011 Dan Bentley
	 * Licensed under the Apache License 2.0
	 *
	 * Author: Dan Bentley [github.com/danbentley]
	 */

	// Return if native support is available.
	if ("placeholder" in document.createElement("input")) return;

	$(document).ready(function(){
		$(':input[placeholder]').not(':password').each(function() {
			setupPlaceholder($(this));
		});

		$(':password[placeholder]').each(function() {
			setupPasswords($(this));
		});
	   
		$('form').submit(function(e) {
			clearPlaceholdersBeforeSubmit($(this));
		});
	});

	function setupPlaceholder(input) {

		var placeholderText = input.attr('placeholder');

		setPlaceholderOrFlagChanged(input, placeholderText);
		input.focus(function(e) {
			if (input.data('changed') === true) return;
			if (input.val() === placeholderText) input.val('');
		}).blur(function(e) {
			if (input.val() === '') input.val(placeholderText); 
		}).change(function(e) {
			input.data('changed', input.val() !== '');
		});
	}

	function setPlaceholderOrFlagChanged(input, text) {
		(input.val() === '') ? input.val(text) : input.data('changed', true);
	}

	function setupPasswords(input) {
		var passwordPlaceholder = createPasswordPlaceholder(input);
		input.after(passwordPlaceholder);

		(input.val() === '') ? input.hide() : passwordPlaceholder.hide();

		$(input).blur(function(e) {
			if (input.val() !== '') return;
			input.hide();
			passwordPlaceholder.show();
		});
			
		$(passwordPlaceholder).focus(function(e) {
			input.show().focus();
			passwordPlaceholder.hide();
		});
	}

	function createPasswordPlaceholder(input) {
		return $('<input>').attr({
			placeholder: input.attr('placeholder'),
			value: input.attr('placeholder'),
			id: input.attr('id'),
			readonly: true
		}).addClass(input.attr('class'));
	}

	function clearPlaceholdersBeforeSubmit(form) {
		form.find(':input[placeholder]').each(function() {
			if ($(this).data('changed') === true) return;
			if ($(this).val() === $(this).attr('placeholder')) $(this).val('');
		});
	}
})(jQuery);

/*
 * jQuery UI rlightbox2
 *
 * Copyright 2011 Wojciech ‘rrh’ Ryrych
 * licensed under the MIT license
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget( "ui.rlightbox", {
	options: {
		animationSpeed: "fast",
		setPrefix: "lb",
		showMap: true,
		counterDelimiter: " / ",
		videoWidth: 640,
		videoHeight: 385,
		errorMessage: "Oh dear! Something went wrong! If the problem still appears let the page’s admin know. Would you like to try again or reject the content?",
		againButtonLabel: "Try again",
		rejectButtonLabel: "Reject this content",
		overwriteTitle: false,
		keys: {
			next: [78, 39],
			previous: [80, 37],
			close: [67, 27],
			panorama: [90, null]
		},
		loop: false
	},

	_create: function() {
		var _setElement,
			global = $.ui.rlightbox.global,
			self = this;

		// init the lightbox – do in only once
		global.getLightbox();

		// which type content belongs to: youtube, vimeo, flash, image, etc.
		// what is its url, title (for images), etc …
		_setElement = global.extractAnchor( this );

		// add type, url, jQuery element and title of content to a set if content is supported by the lightbox
		// otherwise fall silently
		if ( _setElement.type !== undefined ) {

			global.addToSet( _setElement );

			// open the lightbox upon click
			this.element.click(function(event) {
				global.open( self );
				event.preventDefault();
			});
		}
	},

	_setOption: function( key, value ) {
	}
});

// In almost every jQuery UI plugin, in an element the plugin is initialised on
// its initial DOM structure it transformed into the plugin's one. Therefore
// ‘this’ always refers to the plugin instance.
// rlightbox takes other approach: there are many elements (anchors) the plugin
// is installed on, but there is only one UI – one DOM structure.
// If we put all these below methods in the widget factory's scope, (the same as
// options and _create) and created only one UI, the UI would have ‘this’ scope
// of the first matched element – the first element in the DOM that rlightbox
// is initialised on. Since different instances can have different
// set of options, ‘this.options’ would always refer to the first instance.
// Since in rlightbox we don’t operate on elements directly but only get their
// urls, all methods are placed in the extended scope of the plugin:
// ‘$.ui.rlightbox.global’. An instance ‘this’ scope is merely used when we
// use options.
$.extend($.ui.rlightbox, {
	global: {
		addToSet: function( setElement ) {

			// set structure is following:
			// sets: {
			//		setName: [
			//			{
			//				url: "http://www.youtube.com?v=u408408598,
			//				type: "youtube"
			//			},
			//			{…}
			//		],
			//		setName2: […]
			//
			var _setName = this.getSetName( setElement.self ),
				_sets = $.ui.rlightbox.global.sets,
				_options = setElement.self.options,
				_setPrefix = _options.setPrefix,
				_class = "." + _setPrefix + "_" + _setName,
				_setElementIndex = $( _class ).index( setElement.element );

			if ( !_sets[_setName] ) {

				// first time - such set had not been created before
				_sets[_setName] = [];
				_sets[_setName].push( setElement );
			} else {

				// set exists yet - just add element to it
				_sets[_setName].splice( _setElementIndex, 0 , setElement );
			}
		},
		
		checkButtonsState: function() {
			var data = this.data,
				$lb = this.$lightbox,
				_currentSet = data.currentSet,
				_totalElements = data.totalElementsNumber,
				_currentElement = data.currentElementNumber,
				_isLoop = data.currentSetElement.self.options.loop;
				
			// if lightbox is opened and there is only one element
			// single element or one element in named set
			if ( _currentSet === "single" || _totalElements === 1 ) {
				this.setButtonState( "disabled" );
			} else if ( _currentElement === 1 && _isLoop === false ) {
				
				// in case of 1st element when loop is disabled
				this.setButtonState( "disabled", $lb.prev );
				
				// when there are only two elements in a set
				this.setButtonState( "default", $lb.next );
			} else if ( _currentElement === _totalElements && _isLoop === false ) {
				
				// in case of last element
				this.setButtonState( "disabled", $lb.next );
				
				// when there are only two elements in a set
				this.setButtonState( "default", $lb.prev );				
			} else {
				
				// between first and last elements or when the loop is enabled
				this.setButtonState( "default" );
			}
		},		

		checkMinimalSize: function( size, number ) {

			// checks if the ‘number’ of a given ‘size’ (width, height) is smaller
			// then the minimal lightbox size. If so, it returns the minimal size
			// otherwise it returns the ‘number’
			var data = this.data,
				_minimalLightboxSize = data.minimalLightboxSize,
				_minimalLightboxWidth = _minimalLightboxSize.width,
				_minimalLightboxHeight = _minimalLightboxSize.height;

			if ( size === "width" ) {
				if ( number < _minimalLightboxWidth ) {
					return _minimalLightboxWidth;
				} else {
					return number;
				}
			} else if ( size === "height" ) {
				if ( number < _minimalLightboxHeight ) {
					return _minimalLightboxHeight;
				} else {
					return number;
				}
			}			
		},

		closeLightbox: function() {
			var data = this.data,
				$lb = this.$lightbox;

			if ( data.ready ) {
				$lb.overlay
					.add( $lb.root )
					.add ( $lb.header )
					.hide();

				$( "body" ).css( "overflow", "visible" );

				// remove content and restore its initial size
				$lb.content
					.empty()
					.width( 20 )
					.height( 20 );
					
				// hide arrow cue
				this.hideArrow();
				
				// reset control buttons states to default
				this.setButtonState( "default" );

				// reset panorama
				this.panoramaHideIcon();

				// reset the counter
				data.currentElementNumber = null;
				data.totalElementsNumber = null;

				// remove old title
				$lb.title.empty();		

				// hide the map
				this.panoramaHideMap();

				// lightbox is not ready again
				data.ready = false;
			}
		},

		createStructure: function() {
			var data= this.data;

			// append the structure
			$( data.htmlLightbox )
				.appendTo( "body" )
				.after( data.htmlMap )
				.after( data.htmlOverlay );
		},

		destroy: function() {

			// unwrap $currentElement from jQuery wrapped object and
			// prevents it from being acted upon, unbinding event handlers
			var data = this.data,
				$currentElement = data.currentSetElement.element;

			// code taken from jqury.ui.widget.js – it is the default behaviour
			// from the widget factory but we can’t call it because it acts upon
			// this.element – we have to act on a arbitrary one
			$currentElement
				.unbind( "." + "rlightbox" )
				.unbind( "click" )
				.removeData( "rlightbox" );
		},

		extractAnchor: function( thisElement ) {

			// _extractAnchor elicits information from anchor element (DOM A element)
			// @url are used for loading content such as images, youtube videos, etc
			// @type is needed to choose suitable loading method in _queueLoadContent
			// @title is used to dispay title of an image or flash content (.flv) –
			// since youtube and vimeo content is got via oembed, title is got later after loading the content
			// $element keeps jQuery object of an anchor and it’s used for example
			// in _getCurrentElementNumber to get the index in array in a set of clicked content
			var _result = {type: undefined},
				$anchor = $( thisElement.element ),
				_url = $anchor.attr( "href" ),
				_service = {
					youtube: {
						urls: [/(http:\/\/www\.youtube\.com\/watch\?v=([\w-_]+))&?/],
						type: "youtube"
					},
					image: {
						urls: [/.jpg$|.png$|.gif$/],
						type: "image"
					},
					vimeo: {
						urls: [/(http:\/\/vimeo\.com\/groups\/\w+\/videos\/(\w+))&?/, /(http:\/\/vimeo\.com\/(\w+))&?/],
						type: "vimeo"
					},
					flash: {
						urls: [/.swf/],
						type: "flash"
					}
				};

			$.each(_service,
				function(name, content) {
					var _found = false;

					// outer loop: _content.youtube, _content.image, etc.
					$.each(content.urls,
						function( index, regExp ) {
							var _res = regExp.exec( _url );

							// inner loop: urls array
							if ( _res !== null ) {

								// for Youtube, Vimeo we return a normalised url
								// without additional parameters
								_result = {
									url: _res[1],
									id: _res[2],
									type: content.type,
									element: $anchor,
									self: thisElement
								};

								// image and flash urls are not normalised; in case of flash content
								// there may be &with and &height parameters
								if ( content.type === "image" || content.type === "flash" || thisElement.options.overwriteTitle ) {
									_result.title = $anchor.attr( "title" );
									_result.url = _url;
								}

								_found = true;

								// break the loop
								return false;
							}
						});

					if ( _found ) {

						// no need to loop
						return false;
					}
				});

			return _result;
		},
		
		getAvailableScreenSize: function() {
			var data = this.data,
				_padding = data.lightboxPadding;

			return {
				width: this.getWindowSize( "width" ) - _padding,
				height: this.getWindowSize( "height" ) - data.headerHeight - _padding
			};
		},		

		getCurrentElementNumber: function( element ) {
			var _currentNumber,
				data = this.data,
				sets = this.sets,
				self = this,
				_currentSet = sets[data.currentSet];

			// returns a 1 based ordinal number of an image in a set
			$.each(_currentSet, function(i, v) {

				// compare DOM elements
				if ( $(element).get(0) === v.element.get(0) ) {
					_currentNumber = i + 1;

					// exit $.each()
					return false;
				}
			});
			return _currentNumber;
		},

		getImageStatus: function( width, height ) {

			// statuses (concern both sides):
			// 1 - content fits the window and is larger than minimal lightbox size
			// -1 - content fits the window but is smaller or equal to minimal lightbox size
			// 2 - content is larger than the window
			var _statusWidth, _statusHeight,
				data = this.data,
				_currentElement = data.currentSetElement,
				_windowWidth = this.getWindowSize( "width" ),
				_windowHeight = this.getWindowSize( "height" ),
				_minimalLightboxWidth = data.minimalLightboxSize.width,
				_minimalLightboxHeight = data.minimalLightboxSize.height,
				_imageWidth = _currentElement.width,
				_imageHeight = _currentElement.height,
				_lightboxPadding = data.lightboxPadding,
				_headerHeight = data.headerHeight;

			if ( width <= _minimalLightboxWidth ) {
				_statusWidth = -1;
			} else if ( width > _minimalLightboxWidth && width + _lightboxPadding <= _windowWidth ) {
				_statusWidth = 1;
			} else {
				_statusWidth = 2;
			}

			if ( height <= _minimalLightboxHeight ) {
				_statusHeight = -1;
			} else if ( height > _minimalLightboxHeight && _windowHeight >= height + _lightboxPadding + _headerHeight ) {
				_statusHeight = 1;
			} else {
				_statusHeight = 2;
			}

			return {
				statusWidth: _statusWidth,
				statusHeight: _statusHeight
			};
		},		

		getLightbox: function() {
			var data = this.data,
				$lb = this.$lightbox,
				self = this;

			// do it only once!
			if ( !$lb.root ) {

				// create the DOM structure of the lightbox
				this.createStructure();

				// remember references to lightbox structure
				this.setReferences();

				// close the lightbox upon clicking on the close button and the overlay
				$lb.close.add( $lb.overlay ).click( $.proxy(this.closeLightbox, this) );
				
				// goes to the next element when button is clicked
				$lb.next.click( $.proxy(this.next, this) );
				
				// and goes to the prev element when prev button is clicked
				$lb.prev.click( $.proxy(this.prev, this) );			

				// highlight buttons when mouse hovers over them
				$lb.next
					.add( $lb.prev )
					.add( $lb.next )
					//.add( $lb.play )
					.add( $lb.close )
					.hover(
						function() {
							if ( $(this).is(":not(.ui-state-disabled)") ) {
								self.setButtonState( "highlight", $(this) );
							}
						},
						function() {
							if ( $(this).is(":not(.ui-state-disabled)") ) {
								self.setButtonState( "default", $(this) );								
							}
						}
					);		

				// add handlers to the content container
				$lb.contentContainer
					.mousemove( $.proxy(this.showArrow, this) )
					.mousemove( $.proxy(this.checkSide, this) )
					.mousemove( $.proxy(this.setCursor, this) )
					.click(
						function() {
							if ( data.side === "left" ) {
								self.prev.apply( self );
							} else if ( data.side === "right" ) {
								self.next.apply( self );
							}
						}
					)
					.mousedown( $.proxy(this.panoramaStart, this) )
					.mouseup( $.proxy(this.panoramaStop, this ) )				
					.mouseleave(
						function() {
							self.hideArrow.apply( self );
							data.side = "";
						}
					);

				// zoom in or zoom out an image
				$lb.panoramaIcon
					.click( $.proxy(this.panoramaToggle, this) )
					.hover( $.proxy(this.panoramaHighlight, this) );

				// resize lightbox when window size changes
				$( window ).bind( "resize.rlightbox", $.proxy(this.liveResize, this) );

				// keyboard navigation
				$( document ).keyup( $.proxy(this.handleKeyboard, this) );			
			}
		},

		getOptimalSize: function( size, number ) {

			// returns size not smaller than the minimal size and not bigger than
			// the window size

			var data = this.data,
				_minimalLightboxSize = data.minimalLightboxSize,
				_minimalLightboxWidth = _minimalLightboxSize.width,
				_minimalLightboxHeight = _minimalLightboxSize.height,
				_screenSize = this.getAvailableScreenSize(),
				_screenWidth = _screenSize.width,
				_screenHeight = _screenSize.height;

			if ( size === "width" ) {
				if ( number < _minimalLightboxWidth ) {
					return _minimalLightboxWidth;
				} else if ( number > _screenWidth ) {
					return _screenWidth;
				} else {
					return number;
				}
			} else if ( size === "height" ) {
				if ( number < _minimalLightboxHeight ) {
					return _minimalLightboxHeight;
				} else if ( number > _screenHeight ) {
					return _screenHeight;
				} else {
					return number;
				}
			}
		},

		getParam: function( param, url ) {

			// with param ‘with’ and url ‘foo.flv?width=100" it returns ‘100’
			var _result,
				_regExpString = "[\\?&]" + param + "=(\\w+)",
				_regExp = new RegExp( _regExpString );

			_result = _regExp.exec( url );

			if ( _result !== null ) {
				return _result[1];
			} else {
				return null;
			}
		},

		getSetName: function( thisElement ) {

			// if an anchor has class of e.g. ‘lb_gallery’ _getSetName() returns ‘gallery’ string as a set
			// otherwise it returns "single" - single content is placed under "single" set  
			var _classNames = $( thisElement.element ).attr( "class" ),
				_classPrefix = thisElement.options.setPrefix + "_",
				_classPattern = new RegExp( _classPrefix + "([\\w-_]+)" ),
				_name = _classPattern.exec( _classNames );

			return _name ? _name[1] : "single";
		},
		
		checkSide: function( event ) {
			var data = this.data,
				$lb = this.$lightbox,
				$container = $lb.contentContainer,
				_pos = event.pageX - $container.offset().left,
				_center = Math.round( $container.width() / 2 ),
				_currentElementNumber = data.currentElementNumber,
				_totalElementsNumber = data.totalElementsNumber;

			if ( _pos <= _center ) {
				data.side = "left";
			} else if ( _pos > _center ) {
				data.side = "right";
			}
			
			// for Panorama to work in IE7 & IE8			
			event.preventDefault();
		},

		getSizes: function() {
			var _statuses, _statusWidth, _statusHeight, _imageTargetWidth, _imageTargetHeight, _lightboxTargetWidth, _lightboxTargetHeight,
				_heightRatio, _widthRatio,
				$lb = this.$lightbox,
				data = this.data,
				self = this,
				_currentElement = data.currentSetElement,
				_windowWidth = this.getWindowSize( "width" ),
				_windowHeight = this.getWindowSize( "height" ),
				_minimalLightboxWidth = data.minimalLightboxSize.width,
				_minimalLightboxHeight = data.minimalLightboxSize.height,
				_imageWidth = _currentElement.width,
				_imageHeight = _currentElement.height,
				_lightboxPadding = data.lightboxPadding,
				_headerHeight = data.headerHeight;

			function _calculateSizes( w, h ) {
				_statuses = self.getImageStatus( w, h );
				_statusWidth = _statuses.statusWidth;
				_statusHeight = _statuses.statusHeight;

				// if image fits the window
				if ( ((_statusWidth === 1 || _statusWidth === -1) && _statusHeight !== 2) && ((_statusHeight === 1 || _statusHeight === -1) && _statusWidth !== 2) ) {
					if ( _statusWidth === 1 ) {
						_lightboxTargetWidth = w;
					} else if ( _statusWidth === -1 ) {
						_lightboxTargetWidth = _minimalLightboxWidth;
					}
					_imageTargetWidth = w;

					if ( _statusHeight === 1 ) {
						_lightboxTargetHeight = h;
					} else if ( _statusHeight === -1 ) {
						_lightboxTargetHeight = _minimalLightboxHeight;
					}
					_imageTargetHeight = h;
				} else if ( _statusWidth === 2 || _statusHeight === 2 ) {

					// height is larger than window, width fits the window
					if ( _statusWidth === 1 || _statusWidth === -1 ) {
						_lightboxTargetHeight = _windowHeight - _headerHeight - _lightboxPadding;
						_imageTargetHeight = _lightboxTargetHeight;						
						_heightRatio = _lightboxTargetHeight / h;

						if (_statusWidth === -1) {
							_lightboxTargetWidth = _minimalLightboxWidth;
							_imageTargetWidth = Math.ceil( w * _heightRatio );
						} else {
							_lightboxTargetWidth = Math.ceil( w * _heightRatio ) - _lightboxPadding;
							_imageTargetWidth = _lightboxTargetWidth;

							if ( _imageTargetWidth <= _minimalLightboxWidth ) {
								_calculateSizes( _imageTargetWidth, _imageTargetHeight );
							}
						}
					} else if ( _statusHeight === 1 || _statusHeight === -1 ) {

						// width is larger than window, height fit the window
						_lightboxTargetWidth = _windowWidth - _lightboxPadding;
						_imageTargetWidth = _lightboxTargetWidth;						
						_widthRatio = _lightboxTargetWidth / w;

						if ( _statusHeight === -1 ) {
							_lightboxTargetHeight = _minimalLightboxHeight;
							_imageTargetHeight = Math.ceil( h * _widthRatio );
						} else {
							_lightboxTargetHeight = Math.ceil( h * _widthRatio ) - _headerHeight - _lightboxPadding;
							_imageTargetHeight = _lightboxTargetHeight;

							if ( _imageTargetHeight <= _minimalLightboxHeight ) {
								_calculateSizes( _imageTargetWidth, _imageTargetHeight );
							}
						}
					} else {

						// both width and height are larger than window
						if ( w > h ) {
							_lightboxTargetWidth = _windowWidth - _lightboxPadding;
							_imageTargetWidth = _lightboxTargetWidth;
							_widthRatio = _lightboxTargetWidth / w;
							_lightboxTargetHeight = Math.ceil( h * _widthRatio ) - _lightboxPadding - _headerHeight;
							_imageTargetHeight = _lightboxTargetHeight;

							// if after scaling an image is smaller or bigger
							if ( _imageTargetHeight <= _minimalLightboxHeight || _lightboxTargetHeight + _lightboxPadding + _headerHeight > _windowHeight ) {
								_calculateSizes( _imageTargetWidth, _imageTargetHeight );
							}
						} else {
							_lightboxTargetHeight = _windowHeight - _headerHeight - _lightboxPadding;
							_imageTargetHeight = _lightboxTargetHeight;							
							_heightRatio = _lightboxTargetHeight / h;
							_lightboxTargetWidth = Math.ceil( w * _heightRatio ) - _lightboxPadding;
							_imageTargetWidth = _lightboxTargetWidth;

							if ( _imageTargetWidth <= _minimalLightboxWidth || _lightboxTargetWidth > _windowWidth ) {
								_calculateSizes( _imageTargetWidth, _imageTargetHeight );
							}
						}
					}
				}
			}
			_calculateSizes( _imageWidth, _imageHeight );

			return {
				imageTargetWidth: _imageTargetWidth,
				imageTargetHeight: _imageTargetHeight,
				lightboxTargetWidth: _lightboxTargetWidth,
				lightboxTargetHeight: _lightboxTargetHeight,
				statusWidth: _statusWidth,
				statusHeight: _statusHeight
			};
		},

		getWindowSize: function( size ) {
			var data = this.data,
				_windowWidth = $( window ).width(),
				_windowHeight = $( window ).height(),
				_minimalLightboxSize = data.minimalLightboxSize,
				_lightboxPadding = data.lightboxPadding,
				_headerHeight = data.headerHeight,
				_minimalLightboxWidth = _minimalLightboxSize.width + _lightboxPadding,
				_minimalLightboxHeight = _minimalLightboxSize.height + _lightboxPadding + _headerHeight;

			if ( size === "width" ) {
				if ( _windowWidth < _minimalLightboxWidth ) {
					return _minimalLightboxWidth;
				} else {
					return _windowWidth;
				}
			} else {
				if ( _windowHeight < _minimalLightboxHeight ) {
					return _minimalLightboxHeight;
				} else {
					return _windowHeight;
				}
			}
		},

		handleKeyboard: function( event ) {
			var data = this.data,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options,
				_keys = _options.keys,
				_key = event.which;

			if ( data.ready === false ) {
				return;
			}

			// handle pressing keys
			if ( _key === _keys.next[0] || _key === _keys.next[1] ) {

				// next keys: [N] & [→]
				// load next content if possible
				this.next();
			} else if ( _key === _keys.previous[0] || _key === _keys.previous[1] ) {

				// prev keys: [P] & [←]
				// load previous content if possible
				this.prev();
			} else if ( _key === _keys.close[0] || _key === _keys.close[1] ) {

				// close keys: [C] & [ESC]
				this.closeLightbox();
			} else if ( (_key === _keys.panorama[0] || _key === _keys.panorama[1]) && _currentElement.type === "image" ) {

				// panorama keys: [Z]
				this.panoramaToggle( event );
			}
		},
		
		hideArrow: function() {
			var $lb = this.$lightbox,
				$arrow = $lb.arrow;
				
			$arrow.hide();
		},		

		liveResize: function() {
			var data = this.data,
				self = this,
				$lb = this.$lightbox,
				_elementType = data.currentSetElement.type;

			// resizes an image when size of the browser window resizes and when Panorama is turned off
			if ( data.ready && data.panoramaOn === false && _elementType === "image" ) {
				this.queueResizeLightbox();
				this.updateTitleWidth();
				this.queueCenterContent();
				this.panoramaCheckAvailability();
			} else if ( data.ready && data.panoramaOn && _elementType === "image" ) {

				// otherwise keep the lightbox centered especially when window is bigger than the lightbox
				this.queueCenterLightbox();
				this.panoramaShrink();
				this.panoramaCheckAvailability();
			} else if ( data.ready && _elementType !== "image" ) {
				this.queueCenterLightbox();
			}
		},

		loadContentFlash: function( url ) {
			var _width, _height, $contentWrapper,
				data = this.data,
				$lb = this.$lightbox,
				self = this,
				$content = $lb.content,
				_dfd = $.Deferred(),
				_structure = data.htmlFlash,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options;

			// show the spinner
			$content.addClass( "ui-lightbox-loader" );

			function _load() {

				// get width and height from parameters: &with & &height
				// if any exist; ‘inline’ width and height overwrite that of options
				_width = self.getParam( "width", url );
				_height = self.getParam( "height", url );

				// if &width and &height are invalid, use a default one
				if ( _width === null || isNaN(_width) ) {
					_width = _options.videoWidth;
				}

				if ( _height === null || isNaN(_height) ) {
					_height = _options.videoHeight;
				}

				_currentElement.width = _width;
				_currentElement.height = _height;				

				// use real data
				_structure = self.replaceHtmlPatterns(_structure,
					{
						width: _width,
						height: _height,
						url: url
					}
				);

				// we have to add ‘width’ and ‘height’ to the $contentWrapper
				// explicitly since browsers can’t inherit them
				$contentWrapper = $( "<div></div>" );
				$contentWrapper.css(
					{
						display: "none",
						width: _width,
						height: _height
					}
				);

				// add structure
				$content
					.removeClass( "ui-lightbox-loader" )
					.empty()
					.append( _structure )
					.children()
						.wrap( $contentWrapper );
				
				_dfd.resolve();
			}

			// delay ‘_load’ because we have to return promise
			setTimeout( _load, 1000 );

			return _dfd.promise();
		},

		loadContentImage: function( url ) {
			var $lb = this.$lightbox,
				data = this.data,
				self = this,
				_currentElement = data.currentSetElement,
				_dfd = $.Deferred(),
				$newImage = $( "<img />" );
				
			// show spinner
			$lb.content.addClass( "ui-lightbox-loader" );

			$newImage
				.attr( "src", url )
				.bind("load",
					function() {
						$( this ).unbind( "load" );
						
						// keep original size of an image – needed when resizing
						_currentElement.width = this.width;
						_currentElement.height = this.height;

						// add the loaded image and hide it
						$lb.content
							.removeClass( "ui-lightbox-loader" )			
							.empty()
							.append( this )
							.children()
								.hide();

						// continue the animation queue
						_dfd.resolve();					
					}
				)
				.error(
					function() {
						$lb.content.removeClass( "ui-lightbox-loader" );
						self.showErrorMessage();

						// continue the animation queue
						_dfd.resolve();
					}
				)				
				.each(
					function() {
						// the code comes from https://github.com/desandro/imagesloaded
						// cached images don't fire load sometimes, so we reset src.
						if ( this.complete || this.complete === undefined ){
						  var src = this.src;
						  // webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
						  // data uri bypasses webkit log warning (thx doug jones)
						  this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
						  this.src = src;
						}						
					}
				);				

			return _dfd.promise();
		},

		loadContentVimeo: function( url ) {
			var _width, _height,
				data = this.data,
				$lb = this.$lightbox,			
				self = this,
				_dfd = $.Deferred(),
				_apiEnd = data.providers.vimeo,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options,
				_minimalLightboxSize = data.minimalLightboxSize;

			// show loader
			$lb.content.addClass( "ui-lightbox-loader" );

			$.ajax(
				{
					url: _apiEnd,
					data: {
						url: url,
						maxwidth: _options.videoWidth,
						maxheight: _options.videoHeight
					},
					dataType: "jsonp",
					timeout: 5000
				}
			)
			.success(
				function( data ) {

					// add embedded code
					$lb.content
						.removeClass( "ui-lightbox-loader" )
						.empty()
						.append( data.html )
						.children()
							.wrap( "<div style='display: none'></div>" )
							.end()
						.find( "div:first" )
							.width( data.width )
							.height( data.height );							

					// remember video title
					if ( _options.overwriteTitle === false ) {
						_currentElement.title = data.title;
					}

					// and returned width and height
					_currentElement.width = data.width;
					_currentElement.height = data.height;

					// continue the animation queue
					_dfd.resolve();
				}
			)
			.error(function() {
				$lb.content.removeClass( "ui-lightbox-loader" );
				self.showErrorMessage();

				// continue the animation queue
				_dfd.resolve();
			});

			return _dfd.promise();
		},
		
		loadContentYoutube: function( url ) {
			var $contentWrapper,
				data = this.data,
				$lb = this.$lightbox,
				$content = $lb.content,
				self = this,
				_dfd = $.Deferred(),
				_apiEnd = data.providers.youtube,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options,
				_minimalLightboxSize = data.minimalLightboxSize,
				_width = _options.videoWidth,
				_height = _options.videoHeight,
				_structure = data.htmlYoutube;
				
			function _showError() {
				$lb.content.removeClass( "ui-lightbox-loader" );
				self.showErrorMessage();

				// continue the animation queue
				_dfd.resolve();				
			}
			
			// show loader
			$lb.content.addClass( "ui-lightbox-loader" );
			$.ajax(
				{
					url: _apiEnd + _currentElement.id + "?callback=?",
					data: {
						v: 2,
						alt: "jsonc",
						prettyprint: true
					},
					dataType: "jsonp",
					timeout: 5000
				}
			)
			.success(
				function( json ) {
					// if response is successful but there is an error
					if ( json.error ) {
						_showError();
						return;
					}

					// use real data
					_structure = self.replaceHtmlPatterns(_structure,
						{
							width: _width,
							height: _height,
							url: _currentElement.id
						}
					);
					
					// we have to add ‘width’ and ‘height’ to the $contentWrapper
					// explicitly since browsers can’t inherit them
					$contentWrapper = $( "<div></div>" );
					$contentWrapper.css(
						{
							display: "none",
							width: _width,
							height: _height
						}
					);
	
					// add structure
					$content
						.removeClass( "ui-lightbox-loader" )
						.empty()
						.append( _structure )
						.children()
							.wrap( $contentWrapper );
							
						// remember video title
						if ( _options.overwriteTitle === false ) {
							_currentElement.title = json.data.title;
						}
	
						// and returned width and height
						_currentElement.width = _width;
						_currentElement.height = _height;							
					
					_dfd.resolve();					
				}
			)
			.error(function() {
				_showError();
			});

			return _dfd.promise();
		},
		
		navigationGoToElement: function( number ) {

			// goes to a custom element
			var data = this.data,
				sets = this.sets,
				$lb = this.$lightbox,
				_currentSet = data.currentSet;

			// which element go to
			data.currentElementNumber = number;
			data.currentSetElement = sets[_currentSet][number - 1];

			// reload animation queue and trigger it
			this.setNextQueue();
			$lb.queueContainer.next.dequeue( "lightboxNext" );
		},		
		
		next: function() {
			var data = this.data,
				sets = this.sets,
				$lb = this.$lightbox,
				_isReady = data.ready,
				_isPanoramaOn = data.panoramaOn,
				_set = data.currentSet,
				_currentElementNumber = data.currentElementNumber,
				_totalElementsNumber = data.totalElementsNumber,
				_options = data.currentSetElement.self.options,
				_isLoop = _options.loop,
				_play = true;
				
			if ( _isReady && _set !== "single" && _isPanoramaOn === false ) {
				if ( _currentElementNumber + 1 <= _totalElementsNumber ) {
					data.currentElementNumber = _currentElementNumber = _currentElementNumber + 1;			
				} else if ( _currentElementNumber + 1 > _totalElementsNumber && _isLoop ) {
					data.currentElementNumber = _currentElementNumber = 1;
				} else {
					// to prevent form loading last element again when loop is disabled
					_play = false;
				}
				
				if ( _play) {
					data.currentSetElement = sets[_set][_currentElementNumber - 1];
	
					// next element - trigger the queue ‘next’ - first update it
					this.setNextQueue();
					$lb.queueContainer.next.dequeue( "lightboxNext" );					
				}
			}
		},

		open: function( thisElement ) {
			var data = this.data,
				sets = this.sets,
				$lb = this.$lightbox,
				_jqElement = thisElement.element,//TODO
				_currentSet = this.getSetName( thisElement ),
				_currentUrl = $( _jqElement ).attr( "href" );

			// remember which set content belongs to
			data.currentSet = _currentSet;

			// determine and remember how many elements belong to a set
			// determine the current (and clicked) element in a set
			data.totalElementsNumber = sets[_currentSet].length;
			data.currentElementNumber = this.getCurrentElementNumber( _jqElement );

			// keep a reference to a current element in a set (consisting of a url, type…)
			data.currentSetElement = sets[_currentSet][data.currentElementNumber - 1];

			// set animation queues
			this.setOpenQueue();
			this.setNextQueue();
			
			// to fade or not to fade…
			this.checkButtonsState();		

			// start opening the lighbox
			$lb.queueContainer.open.dequeue( "lightboxOpen" );
		},

		panoramaCenterContent: function() {
			var _left, _top,
				data = this.data,
				$lb = this.$lightbox,
				_currentElement = data.currentSetElement,
				_screenSize = this.getAvailableScreenSize(),
				_screenWidth = _screenSize.width,
				_screenHeight = _screenSize.height,
				_imageWidth = _currentElement.width,
				_imageHeight = _currentElement.height,
				$content = $lb.content,
				$img = $content.find( "img" );

			// if width of an image was bigger than the available screen space and if we divided the both size by two
			// the left position of the image would be placed outside the content container; e.g. having
			// the screen size of 1200px wide and an image of 2000px wide, the left css property would
			// have value of -200px and thus the 200px would not be visible
			if ( _screenWidth < _imageWidth ) {
				_left = 0;
			} else {
				_left = $content.width() / 2 - $img.width() / 2;
			}

			if ( _screenHeight < _imageHeight ) {
				_top = 0;
			} else {
				_top = $content.height() / 2 - $img.height() / 2;
			}

			$img.css({
				top: _top,
				left: _left
			});
		},

		panoramaCheckAvailability: function() {

			// checks if we can turn on Panorama mode™ ;)
			// having loaded an image we save its original size
			// if the orignal image size is larger than window size we have to
			// scale down the image so it ends up with smaller image size;
			// Panorama™ is enabled only when the image can’t be displayed in its
			// orignal size.
			var data = this.data,
				_currentElement = data.currentSetElement,
				_originalImageWidth = _currentElement.width,
				_originalImageHeight = _currentElement.height,
				_currentImageWidth = _currentElement.currentWidth,
				_currentImageHeight = _currentElement.currentHeight;

			if ( _currentImageWidth < _originalImageWidth || _currentImageHeight < _originalImageHeight ) {
				this.panoramaShowIcon( "expand" );
				
				// cuz we don’t want to check it twice in panoramaToggle()
				data.enablePanorama = true;
			} else {
				data.enablePanorama = false;
				this.panoramaHideIcon();
			}
		},		

		panoramaExpand: function( event ) {

			// _panoramaExpand does the main goal of the Panorama™: it displays the natural image size
			var data = this.data,
				$lb = this.$lightbox,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options;

			// let know that we can scroll now
			data.panoramaOn = true;

			// show the zoom out icon; we add hover state because when we click
			// the icon we lose focus and state end up with normal state
			// not when key is pressed
			if ( event.type === "click" ) {
				this.panoramaShowIcon( "shrink", "-hover" );
			} else {
				this.panoramaShowIcon( "shrink" );
			}
			
			// fixes issue with Panorama in Firefox 3.0, 3.5, 3.6
			$lb.content.css( "overflow", "hidden" );
			
			// give the natural size to the image
			$lb.content
				.find( "img" )
					.width( _currentElement.width )
					.height( _currentElement.height );

			// enlarge lightbox’s content to fit the screen best
			this.panoramaSetContentSize();

			// center the content and the whole lightbox
			this.panoramaCenterContent();
			this.queueCenterLightbox();
			
			// update header width
			this.updateTitleWidth();

			// show the map
			if ( _options.showMap ) {
				this.panoramaShowMap();
			}
			
			// hide arrow cue
			this.hideArrow();
			
			// reset cursor when there is no movement; for example
			// cursor was ‘pointer’, [Z] buttons was pressed (‘default’ cursor)
			// [Z] was pressed again → cursor is still ‘pointer’
			this.setCursor();
		},

		panoramaHideIcon: function() {
			var data = this.data,
				$lb = this.$lightbox;

			$lb.panoramaIcon
				.hide()
				.removeClass( "ui-lightbox-panorama-icon-expand ui-lightbox-panorama-icon-shrink" );
			data.panoramaOn = false;			
		},

		panoramaHideMap: function() {
			var $lb = this.$lightbox;
				
			// hide the map
			$lb.map.hide();

			// reset position of the viewport
			// -1 prevents from overlapping the map border
			$lb.viewport.css({
				left: -1,
				top: -1
			});		
		},		

		panoramaHighlight: function() {
			var _suffixPosition,
				$lb = this.$lightbox,
				_suffix = "-hover";

			$lb.panoramaIcon.attr("class",
				function(index, oldValue) {
					_suffixPosition = oldValue.indexOf( _suffix );
					if ( _suffixPosition !== -1 ) {
						return oldValue.slice( 0, _suffixPosition );
					} else {
						return oldValue + _suffix;
					}
				});		
		},

		panoramaSetContentSize: function() {
			var _contentWidth, _contentHeight,
				data = this.data,
				$lb = this.$lightbox,
				_currentElement = data.currentSetElement,
				_minLightboxSize = data.minimalLightboxSize,
				_minLightboxWidth = _minLightboxSize.width,
				_minLightboxHeight = _minLightboxSize.height,
				_screenSize = this.getAvailableScreenSize(),
				_screenWidth = _screenSize.width,
				_screenHeight = _screenSize.height,
				_imageWidth = _currentElement.width,
				_imageHeight = _currentElement.height;

				// show the most part of an image
				// e.g. suppose that we have an image of 3600px × 500px size and the available space in the browser
				// is 1268px × 806px taking into account default Firefox toolbars, scrollbars, etc.
				// Opening such an image results in displaing it (after resizing) of 1268px × 176px (the ratio must have been kept).
				// Now we would like to switch to the Panorama mode™. ;) The goal of panorama is to show the original size of the image
				// (that is 3600px × 500px in this example). But we just cannot display such big size in the smaller screen size.
				// We are confined to our example screen size (1268 × 806). The point is to display as much as possible.
				// Our width is bigger than those of the screen (1268) so we can only use the latter → if an image size is bigger than the screen size
				// limit it to the size of the screen. As for the height, before applying the panorama it was of 176px. But we have more space available on the screen (806px).
				// So instead of displaying 176px of height we can display the natural size of the image height — 500px.
				// But for example if the height was of 150px we cannot use this size because the minmal lightbox size is 300px. Use 300px size then.
				// It is how the magic goes! :D
				if ( _imageWidth > _screenWidth ) {
					_contentWidth = _screenWidth;
				} else if ( _imageWidth <= _minLightboxWidth ) {
					_contentWidth = _minLightboxWidth;
				} else {
					_contentWidth = _imageWidth;
				}

				if ( _imageHeight > _screenHeight ) {
					_contentHeight = _screenHeight;
				} else if ( _imageHeight <= _minLightboxHeight ) {
					_contentHeight = _minLightboxHeight;
				} else {
					_contentHeight = _imageHeight;
				}

				$lb.content
					.width( _contentWidth )
					.height( _contentHeight );
		},

		panoramaShowIcon: function( icon, state ) {
			var $lb = this.$lightbox,
				_state = state || "",
				_newClass = "ui-lightbox-panorama-icon-" + icon + _state;

				$lb.panoramaIcon
					.show()
					.removeClass()
					.addClass( _newClass );			
		},

		panoramaShowMap: function() {
			var _mapViewportWidth, _mapViewportHeight, _mapViewportWidthRatio, _mapViewportHeightRatio,
				_contentViewportWidth, _contentViewportHeight,
				data = this.data,
				_minimalLightboxSize = data.minimalLightboxSize,
				$lb = this.$lightbox,
				$content = $lb.content,
				$image = $content.find( "img" ),
				_imageWidth = $image.width(),
				_imageHeight = $image.height(),
				_currentElement = data.currentSetElement,
				_mapSize = data.mapSize;

			// show the map and give the viewport relevant size
			// give the viewport relevant size
			_mapViewportWidthRatio = _mapSize.width / _currentElement.width;
			_mapViewportHeightRatio = _mapSize.height / _currentElement.height;

			// content doesn't cover whole container
			if ( _imageWidth < _minimalLightboxSize.width ) {
				_contentViewportWidth = _imageWidth;
			} else {
				_contentViewportWidth = $content.width();
			}

			if ( _imageHeight < _minimalLightboxSize.height ) {
				_contentViewportHeight = _imageHeight;
			} else {
				_contentViewportHeight = $content.height();
			}

			_mapViewportWidth = Math.ceil( _contentViewportWidth * _mapViewportWidthRatio );
			_mapViewportHeight = Math.ceil( _contentViewportHeight * _mapViewportHeightRatio );

			$lb.viewport
				.width( _mapViewportWidth )
				.height( _mapViewportHeight );

			// show the map
			$lb.map.show();

			// used when you scroll the content
			data.viewportRatio = {
				width: _mapViewportWidthRatio,
				height: _mapViewportHeightRatio
			};

		},

		panoramaShrink: function( event ) {
			var data = this.data,
				$lb = this.$lightbox;

			// _panoramaShrink retores the previous size of an image
			data.panoramaOn = false;

			// show the zoom out icon; we add hover state because when we click
			// the icon we lose focus and state end up with normal state
			// not when key is pressed
			if ( event && event.type === "click" ) {
				this.panoramaShowIcon( "expand", "-hover" );
			} else {
				this.panoramaShowIcon( "expand" );
			}

			// resize an image to its previous size and center it
			this.queueResizeLightbox();
			this.queueCenterContent();
			
			// fixes issue with Panorama in Firefox 3.0, 3.5, 3.6
			$lb.content.css( "overflow", "visible" );			
			
			// update header width
			this.updateTitleWidth();

			// hide the map
			this.panoramaHideMap();
			
			// reset cursor when there is no movement; for example
			// cursor was ‘pointer’, [Z] buttons was pressed (‘default’ cursor)
			// [Z] was pressed again → cursor is still ‘pointer’
			this.setCursor();
		},		

		panoramaStart: function( event ) {
			var data = this.data,
				$lb = this.$lightbox;

			// remember starting point to calculate distance in _panoramaStop()
			data.panoramaPosition =
				{
					xStart: event.pageX,
					yStart: event.pageY
				};

			event.preventDefault();
		},

		panoramaStop: function( event ) {

			// calculate the distance between the starting point from _panoramaStart and this one
			// we use the oposite vector (-1) because dragging the mouse left we move right
			var data = this.data,
				$lb = this.$lightbox,
				_distX = ( event.pageX - data.panoramaPosition.xStart ) * -1,
				_distY = ( event.pageY - data.panoramaPosition.yStart ) * -1,
				$content = $lb.content,
				_viewportRatio = data.viewportRatio;

			// if we are in the panorama mode (the panorama icon was clicked)
			if ( data.panoramaOn ) {
				$content
					.scrollLeft( $content.scrollLeft() + _distX )
					.scrollTop( $content.scrollTop() + _distY );

				// show the relevant part of the map
				// subtrack 1 so that the viewport doesn’t overlap the map border
				$lb.viewport.css({
					left: $content.scrollLeft() * _viewportRatio.width - 1,
					top: $content.scrollTop() * _viewportRatio.height - 1
				});
			}

			event.stopPropagation();
		},
		
		panoramaToggle: function( event ) {

			// switches between _panoramaExpand and _panoramaShrink
			// we couldn’t use .toggle( expand, shrink ) on panorama icon because when lb is closed after panorama was turned on (we were in the panorama mode)
			// and open again and next image once again can be zoomed we need to make sure that
			// expand is the first action – using jQuery .toggle() ‘expand’ would be the fist action again (because of its internal queue)
			var data = this.data,
				_panoramaOn = data.panoramaOn,
				_isPanoramaEnabled = data.enablePanorama;

			if ( _isPanoramaEnabled && _panoramaOn === false ) {
				this.panoramaExpand( event );
			} else if ( _isPanoramaEnabled && _panoramaOn ) {
				this.panoramaShrink( event );			
			}
		},
		
		prev: function() {
			var data = this.data,
				sets = this.sets,
				$lb = this.$lightbox,
				_isReady = data.ready,
				_isPanoramaOn = data.panoramaOn,
				_set = data.currentSet,
				_currentElementNumber = data.currentElementNumber,
				_totalElementsNumber = data.totalElementsNumber,
				_options = data.currentSetElement.self.options,
				_isLoop = _options.loop,
				_play = true;
				
			if ( _isReady && _set !== "single" && _isPanoramaOn === false ) {
				if ( _currentElementNumber - 1 >= 1 ) {
					data.currentElementNumber = _currentElementNumber = _currentElementNumber - 1;			
				} else if ( _currentElementNumber - 1 < 1 && _isLoop ) {
					data.currentElementNumber = _currentElementNumber = _totalElementsNumber;
				} else {
					// to prevent from loading first element again when loop is disabled
					_play = false;
				}

				if ( _play ) {
					data.currentSetElement = sets[_set][_currentElementNumber - 1];
	
					// next element - trigger the queue ‘next’ - first update it
					this.setNextQueue();
					$lb.queueContainer.next.dequeue( "lightboxNext" );					
				}
			}		
		},

		removeSetElement: function( number ) {
			// when there is an error while loading content, in the error screen
			// there is a possibility to reject content that might have a wrong
			// url; _removeSetElement removes rejects such content in order to
			// the error message not appear again;
			// the method prevents rlightbox from being acted upon such content
			var data = this.data,
				sets = this.sets,
				_currentSet = data.currentSet,
				_total = data.totalElementsNumber;

			// remove given element from a set
			sets[_currentSet].splice( number - 1, 1 );

			// if there is only one element left, close the lightbox, otherwise load next element
			if( _total === 1 || _currentSet === "single" ) {
				this.closeLightbox();

				// remove the instance from encapsulated DOM element (jquery one)
				this.destroy();
			} else {
				this.destroy();

				// update total element numbers
				data.totalElementsNumber = sets[_currentSet].length;

				// go to a new element
				if ( number === _total ) {
					this.navigationGoToElement( number - 1 );
				} else {
					this.navigationGoToElement( number );
				}
			}
		},

		replaceHtmlPatterns: function( htmlString, patterns ) {

			// replaces patterns like {width} used in html e.g in data.htmlFlash
			// with real data given in patterns object
			$.each(patterns, function(key, value) {
				var _regExp = new RegExp( "{" + key + "}", "g" );
				htmlString = htmlString.replace( _regExp, value );
			});

			return htmlString;
		},
		
		setButtonState: function( state, jqElement ) {
			var $lb = this.$lightbox,
				jqElem = jqElement || $lb.controlButtons;
				
			switch ( state ) {
				case "default":
					jqElem.removeClass( "ui-state-highlight ui-state-disabled" );
					break;
				
				case "highlight":
					jqElem.addClass( "ui-state-highlight" );
					break;
				
				case "disabled":
					jqElem.addClass( "ui-state-disabled" );
					break;
			}
		},
		
		setCursor: function( event ) {
			var data = this.data,
				$lb = this.$lightbox,
				$contentContainer = $lb.contentContainer,
				_currentSet = data.currentSet,
				_currentSetElement = data.currentSetElement,
				_setElementType = data.currentSetElement.type,
				_totalElements = data.totalElementsNumber,
				_currentElement = data.currentElementNumber,
				_side = data.side,
				_panoramaEnabled = data.panoramaOn,
				_isError = data.showErrorMessage,
				_options = _currentSetElement.self.options,
				_isLoop = _options.loop;
			
			if ( data.ready ) {
				if ( (_currentSet === "single" || _totalElements === 1 || _currentElement === 1 && _side === "left" || _currentElement === _totalElements && _side === "right") && _panoramaEnabled === false && (_setElementType === "image" || (_setElementType !== "image" && _isError)) ) {

					// single element or single element in a named set or first element in a set or last element in a set
					// WHEN panorama is DISABLED, and when element type is ‘image’ or the Error Screen is shown
					// and when loop is DISABLED
					if ( _isLoop === false ) {
						$contentContainer.css( "cursor", "default" );						
					} else {
						
						// otherwise show ‘pointer’ in cases mentioned above
						$contentContainer.css( "cursor", "pointer" );						
					}

				} else if ( _panoramaEnabled ) {

					// panorama is enabled
					$contentContainer.css( "cursor", "move" );
				} else if ( _setElementType === "image" || (_setElementType !== "image" && _isError) ) {
					
					// between first and last element in an image set or when the Error Screen is shown
					$contentContainer.css( "cursor", "pointer" );
				} else {

					// for flash videos
					$contentContainer.css( "cursor", "auto" );
				}
			} else {
				$contentContainer.css( "cursor", "default" );
			}
			
			// for Panorama to work in IE7 & IE8
			if ( event ) {
				event.preventDefault();
			}
		},
		
		setNextQueue: function() {

			// for description take a look at _setOpenQueue method
			var $lb = this.$lightbox,
				queueList = [
					$.proxy( this.queueSlideUpHeader, this ),
					$.proxy( this.queueHideContent, this ),
					$.proxy( this.queueLoadContent, this ),
					$.proxy( this.queueResizeLightbox, this ),
					$.proxy( this.queueCenterContent, this ),
					$.proxy( this.queueShowContent, this ),
					$.proxy( this.queueSlideDownHeader, this )
				];

			// place start animation queue in the queue container
			$lb.queueContainer.next.queue( "lightboxNext", queueList );
		},

		setOpenQueue: function() {
			// we have two animated queues: one to open the lightbox and the second to perform next/previous operation
			// half of the operations are the same - they ovelap, and the rest such as ‘show the overlay’, ‘center lightbox’,
			// ‘slide up the header’ and ‘hide content’ are run only in one queue not in both
			// thus to not repeat oneself we keep in the queue lists only references to these methods
			// each one of these methods (that begin with _queue…) are passed ‘next’ parameter that is a reference to another
			// method in the queue.
			// $proxy is needed to have an access to a ‘global’ scope of the plugin – every method that is called in the queue
			// is run in its internal scope - we need to have an access to such method as _getSizes, _open, etc - one the same level.

			var $lb = this.$lightbox,
				queueList = [
					$.proxy( this.queueShowOverlay, this ),
					$.proxy( this.queueCenterLightbox, this ),
					$.proxy( this.queueLoadContent, this ),
					$.proxy( this.queueResizeLightbox, this ),
					$.proxy( this.queueCenterContent, this ),
					$.proxy( this.queueShowContent, this ),
					$.proxy( this.queueSlideDownHeader, this )
				];

			// place start animation queue in the queue container
			$lb.queueContainer.open.queue( "lightboxOpen", queueList );
		},		

		setReferences: function() {
			var $lb = this.$lightbox;

			// save references to wrapped set for later use
			$lb.root = $( "#ui-lightbox" );
			$lb.panoramaIcon = $lb.root.find( "#ui-lightbox-panorama-icon" );
			$lb.contentContainer = $lb.root.find( "#ui-lightbox-content-container" );
			$lb.content = $lb.contentContainer.find( "#ui-lightbox-content" );
			$lb.arrow = $lb.contentContainer.find( "#ui-lightbox-arrow" );
			$lb.header = $lb.root.find( "#ui-lightbox-bottombar" );
			$lb.headerWrapper = $lb.header.find( "#ui-lightbox-title-wrapper" );		
			$lb.overlay = $( "#ui-lightbox-overlay" );
			$lb.next = $lb.root.find( "#ui-lightbox-button-next" );
			$lb.prev = $lb.root.find( "#ui-lightbox-button-prev" );
			//$lb.play = $lb.root.find( "#ui-lightbox-button-play" );
			$lb.controlButtons = $lb.next.add( $lb.prev );//.add( $lb.play );
			$lb.close = $lb.root.find( "#ui-lightbox-button-close" );
			$lb.counter = $lb.root.find( "#ui-lightbox-counter" );
			$lb.title = $lb.root.find( "#ui-lightbox-title" );
			$lb.map = $( "#ui-lightbox-map" );
			$lb.viewport = $lb.map.children().eq( 0 );
			$lb.queueContainer = {
				open: $({}),
				next: $({})
			};
		},
		
		showArrow: function( event ) {
			var data = this.data,
				$lb = this.$lightbox,
				$arrow = $lb.arrow,
				_isError = data.showErrorMessage,
				_side = data.side,
				_currentElement = data.currentElementNumber,
				_totalElements = data.totalElementsNumber,
				_isLoop = data.currentSetElement.self.options.loop;
			
			// show arrow cues only in image set or in The Error Screen when it is part of a set
			if ( data.ready && data.currentSet !== "single" && (data.currentSetElement.type === "image" || _isError) && data.panoramaOn === false ) {

				if ( _side === "left" && (_currentElement > 1 || _isLoop) ) {
					$arrow
						.show()
						.removeClass("ui-lightbox-arrow-next ui-corner-left")
						.addClass("ui-lightbox-arrow-prev ui-corner-right")
						.find("span")
							.removeClass("ui-icon-carat-1-e")
							.addClass("ui-icon-carat-1-w");
				} else if ( _side === "right" && (_currentElement < _totalElements || _isLoop) ) {
					$arrow
						.show()
						.removeClass("ui-lightbox-arrow-prev ui-corner-right")
						.addClass("ui-lightbox-arrow-next ui-corner-left")
						.find("span")
							.removeClass("ui-icon-carat-1-w")
							.addClass("ui-icon-carat-1-e");
				} else {
					this.hideArrow();
				}
			}
			
			// for Panorama to work in IE7 & IE8			
			if ( event ) {
				event.preventDefault();
			}
		},		

		showErrorMessage: function() {

			// shows a screen with a message that content could not be loaded
			// and two buttons: one to try to load content again and one to
			// reject the content; in order to keep the dependencie to minimum
			// buttons are not jQuery UI widgets but use their CSS classes
			var $again, $reject, $structure,
				data = this.data,
				$lb = this.$lightbox,
				self = this,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options,
				_currentElementNumber = data.currentElementNumber,
				_errorMessage = _options.errorMessage,
				_againLabel = _options.againButtonLabel,
				_rejectLabel = _options.rejectButtonLabel,
				_structure = data.htmlErrorScreen,
				_errorScreenSize = data.errorScreenSize,
				_errorScreenWidth = _errorScreenSize.width,
				_errorScreenHeight = _errorScreenSize.height;

			// use real data
			_structure = self.replaceHtmlPatterns(_structure,
				{
					message: _errorMessage,
					labelAgain: _againLabel,
					labelReject: _rejectLabel				
				}
			);			
				
			$structure = $( _structure );

			$again = $structure.find( "#ui-lightbox-error-footer-again" );
			$reject = $structure.find( "#ui-lightbox-error-footer-reject" );
			// ‘again’ button give a user a chance to try loading content again
			$again
				.click(function() {
					self.navigationGoToElement( _currentElementNumber );
				})
				.hover(
					function() {
						$( this ).toggleClass( "ui-state-hover" );
					}
				);

			// removes the broken content from list of known contents
			$reject
				.click(function() {
					self.removeSetElement( _currentElementNumber );
				})
				.hover(
					function() {
						$( this ).toggleClass( "ui-state-hover" );
					}
				);			

			// treat the message as a normal content
			$lb.content
				.empty()
				.append( $structure )
				.find( "#ui-lightbox-error" )
					.width( _errorScreenWidth )
					.height( _errorScreenHeight )
					.end()
				.children()
					.hide();

			// because we don’t want to break the animation queue we need to tell
			// subsequent functions in the queue that an error occured
			data.showErrorMessage = true;
		},

		updateCounter: function() {
			var _current, _total, _newCounter,
				data = this.data,
				$lb = this.$lightbox,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options,
				_currentSet = data.currentSet;

				if ( _currentSet !== "single" ) {
					_current = data.currentElementNumber;
					_total = data.totalElementsNumber;
				} else {
					_current = 1;
					_total = 1;
				}

				_newCounter = _current + _options.counterDelimiter + _total;

			$lb.counter.text( _newCounter );
		},

		updateTitle: function() {
			var data = this.data,
				$lb = this.$lightbox,
				_currentElement = data.currentSetElement;

			// set new label for the title and trim it if it is too long - no scrolling at the moment
			// 20px is a safety distance between text and the close button
			if ( _currentElement.title !== "" ) {
				$lb.title
					.empty()
					.append( _currentElement.title );
			} else {

				// keep the line height – prevent counter from popping up in the title line
				$lb.title.append( "&nbsp;" );
			}
		},

		updateTitleWidth: function() {
			var $lb = this.$lightbox;

			// 12px – 2 × border + 2 × padding
			$lb.header.width( $lb.content.width() - 12 );
		},

		queueHideContent: function( next ) {
			var data = this.data,
				$lb = this.$lightbox,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options;

			$lb.content.children()
				.fadeOut( _options.animationSpeed, function() {
					$( this ).remove();
					next();
				});

			// disable panorama
			$lb.panoramaIcon
				.hide()
				.removeClass( "ui-lightbox-panorama-icon-expand ui-lightbox-panorama-icon-shrink" );

			data.panoramaOn = false;

			// hide the map
			this.panoramaHideMap();
		},	

		queueShowOverlay: function( next ) {
			var data = this.data,
				$lb = this.$lightbox,
				_currentElement = data.currentSetElement.self;

			// let know that lightbox is not ready now
			data.ready = false;
			
			// change cursor to default
			this.setCursor();			

			// show overlay
			$lb.overlay.fadeIn( _currentElement.options.animationSpeed, next );
		},

		queueCenterLightbox: function( next ) {
			var $lb = this.$lightbox,
				$root = $lb.root,
				_screenWidth = this.getWindowSize( "width" ),
				_screenHeight = this.getWindowSize( "height" ),
				_lbWidth = $root.outerWidth(),
				_lbHeight = $root.outerHeight();

			$root
				.css({
					left: Math.round( (_screenWidth - _lbWidth) / 2 ) + "px",
					top: Math.round( (_screenHeight - _lbHeight) / 2 ) + "px"
				})
				.show( 0, next );
		},

		queueLoadContent: function( next ) {

			// loads appropriate content using right method
			var _loadContentMethod,
				data = this.data,
				_currentSetElement = data.currentSetElement;

			// assume that there will be no error
			data.showErrorMessage = false;

			switch ( _currentSetElement.type ) {
				case "image":
					_loadContentMethod = "loadContentImage";
					break;

				case "youtube":
					_loadContentMethod = "loadContentYoutube";
					break;

				case "vimeo":
					_loadContentMethod = "loadContentVimeo";
					break;

				case "flash":
					_loadContentMethod = "loadContentFlash";
			}

			$.when( this[_loadContentMethod](_currentSetElement.url) ).then(function() {
				next();
			});
		},

		queueResizeLightbox: function( next ) {

			// resizes the lightbox to to house content and centers it on the screen
			var _speed, _animate, _sizes, _imageTargetWidth, _imageTargetHeight,
				_lightboxTargetWidth, _lightboxTargetHeight, _img,
				data = this.data,
				$lb = this.$lightbox,
				_padding = data.lightboxPadding,
				_headerHeight = data.headerHeight,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options,
				_isError = data.showErrorMessage,
				_errorScreenSize = data.errorScreenSize,
				_errorScreenWidth = _errorScreenSize.width,
				_errorScreenHeight = _errorScreenSize.height,
				_minimalLightboxSize = data.minimalLightboxSize,
				_minimalLightboxWidth = _minimalLightboxSize.width,
				_minimalLightboxHeight = _minimalLightboxSize.height;

			// when it is used in context of a queue
			_speed = _options.animationSpeed;

			// if content is type of image, resize it to fit the screen
			if ( _currentElement.type === "image" && _isError === false ) {
				_sizes = this.getSizes();
				_imageTargetWidth = _sizes.imageTargetWidth;
				_imageTargetHeight = _sizes.imageTargetHeight;
				_lightboxTargetWidth = _sizes.lightboxTargetWidth;
				_lightboxTargetHeight = _sizes.lightboxTargetHeight;
				_img = $lb.content.find( "img" );

				// if scaled size is smaller than the original, show Panorama
				_currentElement.currentWidth = _imageTargetWidth;
				_currentElement.currentHeight = _imageTargetHeight;

				// scale the image
				_img
					.width( _imageTargetWidth )
					.height( _imageTargetHeight );

				// if you use this method in the context of a queue then use animation; otherwise when used in live resize, don’t animate it
				if ( $.isFunction(next) ) {
					_speed = _options.animationSpeed;
				} else {
					_speed = 0;
				}

			} else if ( (_currentElement.type === "youtube" || _currentElement.type === "vimeo") && _isError === false ){

				// do not let lightbox size be smaller than the minimal one
				_lightboxTargetWidth = this.checkMinimalSize( "width", _currentElement.width );
				_lightboxTargetHeight = this.checkMinimalSize( "height", _currentElement.height );
			} else if ( _currentElement.type === "flash" && _isError === false ) {

				// do not let lightbox size be smaller than the minimal one or larger than the window
				_lightboxTargetWidth = this.getOptimalSize( "width", _currentElement.width );
				_lightboxTargetHeight = this.getOptimalSize( "height", _currentElement.height );				
			} else if ( _isError ) {
				_speed = 0;
				_lightboxTargetWidth = _errorScreenWidth;
				_lightboxTargetHeight = _errorScreenHeight;
			}


			// scale and resize the lightbox
			$lb.root
				.find( "#ui-lightbox-content" )
					.animate( {width: _lightboxTargetWidth}, _speed )
					.animate( {height: _lightboxTargetHeight}, _speed )
					.end()
				.animate( {left: (this.getWindowSize("width") - _lightboxTargetWidth - _padding) / 2}, _speed )
				.animate( {top: (this.getWindowSize("height") - _lightboxTargetHeight - _padding - _headerHeight) / 2}, _speed, next);
		},

		queueCenterContent: function( next ) {
			var _content,
				$lb = this.$lightbox,
				$contentContainer = $lb.content,
				$content = $contentContainer.children();

			$contentContainer
				.children()
					.css({
						top: $contentContainer.height() / 2 - $content.outerHeight() / 2,
						left: $contentContainer.width() / 2 - $content.outerWidth() / 2
					});

			// if we don’t run it in the live resize but in the queue
			if ( next ) {
				next();
			}
		},

		queueShowContent: function( next ) {
			var data = this.data,
				$lb = this.$lightbox,
				self = this,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options,
				_isError = data.showErrorMessage;			

			// show content
			$lb.content.children()
				.fadeIn( _options.animationSpeed, function() {

					// if one of the image sides is bigger than the screen, show panorama icon
					if ( _currentElement.type === "image" && _isError === false ) {
						self.panoramaCheckAvailability();
					}

					next();
				});
		},

		queueSlideDownHeader: function( next ) {
			var data = this.data,
				$lb = this.$lightbox,
				_options = data.currentSetElement.self.options;

			// show header
			$lb.header.slideDown( _options.animationSpeed, next );

			// show and update counter
			this.updateCounter();

			// update title
			this.updateTitleWidth();
			this.updateTitle();
			
			// update buttons states
			this.checkButtonsState();
			
			// indicate that animation queue is finshed
			data.ready = true;
			
			// if you go from penulimate/second element to the last/first element change cursor to ‘default’
			// must be after ‘data.ready = true’!!!
			this.setCursor();
			
			// show arrow cue whenever possible when there is no mouse mouvement
			this.showArrow();
		},

		queueSlideUpHeader: function( next ) {
			var data = this.data,
				$lb = this.$lightbox,
				_currentElement = data.currentSetElement,
				_options = _currentElement.self.options;

			// structure is not ready - start an animation
			data.ready = false;
			
			// hide arrow cue
			this.hideArrow();
			
			// change cursor to default
			this.setCursor();				
			
			$lb.header.slideUp ( _options.animationSpeed, next );
		},

		$lightbox: {},
		sets: {},
		data: {
			minimalLightboxSize: {
				width: 300,
				height: 300
			},
			lightboxPadding: 12,
			headerHeight: 57,
			ready: false,
			panoramaOn: false,
			mapSize: {
				width: 150,
				height: 100
			},
			providers: {
				vimeo: "http://www.vimeo.com/api/oembed.json?callback=?",
				youtube: "http://gdata.youtube.com/feeds/api/videos/"
			},
			showErrorMessage: false,
			currentSetElement: {},
			enablePanorama: false,
			errorScreenSize: {
				width: 500,
				height: 500
			},
			htmlFlash: "" +
				"<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='{width}' height='{height}'>" +
					"<param name='movie' value='{url}' />" +
						"<!--[if !IE]>-->" +
						"<object type='application/x-shockwave-flash' data='{url}' width='{width}' height='{height}'>" +
						"<!--<![endif]-->" +
						"<!--[if !IE]>-->" +
						"</object>" +
						"<!--<![endif]-->" +
				"</object>",
			htmlErrorScreen: "" +
				"<div id='ui-lightbox-error'>" +
					"<div id='ui-lightbox-error-message' class='ui-lightbox-error-icon-sign'>{message}</div>" +
					"<div id='ui-lightbox-error-footer'>" +
						"<button aria-disabled='false' role='button' id='ui-lightbox-error-footer-again' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary'>" +
							"<span class='ui-button-icon-primary ui-icon ui-icon-refresh'></span>" +
							"<span class='ui-button-text'>{labelAgain}</span>" +
						"</button>" +
						"<button aria-disabled='false' role='button' id='ui-lightbox-error-footer-reject' class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-primary'>" +
							"<span class='ui-button-icon-primary ui-icon ui-icon-trash'></span>" +
							"<span class='ui-button-text'>{labelReject}</span>" +
						"</button>" + 
					"</div>" +
				"</div>",
			htmlYoutube: "<iframe class='youtube-player' type='text/html' width='{width}' height='{height}' src='http://www.youtube.com/embed/{url}' frameborder='0'></iframe>",
			htmlLightbox: "" +
				"<div id='ui-lightbox' class='ui-widget ui-widget-content ui-corner-all' style='display: none'>" +
					
					"<div id='ui-lightbox-content-container'>" +
						"<div id='ui-lightbox-content' class='ui-widget-content'></div>" +
						"<a id='ui-lightbox-arrow' class='ui-widget-header' style='display: none'>" +
							"<span class='ui-icon'>go</span>" +
						"</a>" +
					"</div>" +
					"<div id='ui-lightbox-bottombar' class='ui-widget-header ui-corner-all' style='display: none'>" +
						"<p id='ui-lightbox-title-wrapper'>" +
							"<span id='ui-lightbox-title'></span>" +
						"</p>" +
						"<p id='ui-lightbox-bottombar-bottom'>" +
							"<a id='ui-lightbox-button-prev' class='ui-lightbox-button'>" +
								"<span class='ui-icon ui-icon-circle-arrow-w'>prev</span>" +
							"</a>" +
							"<span id='ui-lightbox-counter'></span>" +
							"<a id='ui-lightbox-button-next' class='ui-lightbox-button'>" +
								"<span class='ui-icon ui-icon-circle-arrow-e'>next</span>" +
							"</a>" +
							//"<span id='ui-lightbox-separator'>|</span>" +
							//"<a id='ui-lightbox-button-play' class='ui-lightbox-button'>" +
							//	"<span class='ui-icon ui-icon-circle-triangle-e'>play</span>" +
							//"</a>" +
						"</p>" +
						"<a id='ui-lightbox-button-close' class='ui-lightbox-button'>" +
							"<span class='ui-icon ui-icon-closethick'>close</span>" +
						"</a>" +
						"<div id='ui-lightbox-panorama-icon' style='display: none'></div>" +
					"</div>" +
				"</div>",
			htmlMap: "" +
				"<div id='ui-lightbox-map' style='display: none'>" +
					"<div id='ui-lightbox-map-viewport'></div>" +
				"</div>",
			htmlOverlay: "<div id='ui-lightbox-overlay' class='ui-widget-overlay' style='display: none'></div>"			
		}
	}
});
})( jQuery );

/*!
 * jQuery UI Widget 1.8.16
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)try{b(d).triggerHandler("remove")}catch(e){}k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){try{b(this).triggerHandler("remove")}catch(d){}});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=
function(h){return!!b.data(h,a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):
d;if(e&&d.charAt(0)==="_")return h;e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=
b.extend(true,{},this.options,this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+
"-disabled ui-state-disabled")},widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",
c);return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-csstransforms3d-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.backgroundsize=function(){return F("backgroundSize")},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
jQuery(
function($) {
	
	$(document).ready(function(){
		var contentButton = [];
		var contentTop = [];
		var content = [];
		var lastScrollTop = 0;
		var scrollDir = '';
		var itemClass = '';
		var itemHover = '';
		var menuSize = null;
		var stickyHeight = 0;
		var stickyMarginB = 0;
		var currentMarginT = 0;
		var topMargin = 0;
		$(window).scroll(function(event){
   			var st = $(this).scrollTop();
   			if (st > lastScrollTop){
       			scrollDir = 'down';
   			} else {
      			scrollDir = 'up';
   			}
  			lastScrollTop = st;
		});
		$.fn.stickUp = function( options ) {
			// adding a class to users div
			$(this).addClass('stuckMenu');
        	//getting options
        	var objn = 0;
        	if(options != null) {
	        	for(var o in options.parts) {
	        		if (options.parts.hasOwnProperty(o)){
	        			content[objn] = options.parts[objn];
	        			objn++;
	        		}
	        	}
	  			if(objn == 0) {
	  				console.log('error:needs arguments');
	  			}

	  			itemClass = options.itemClass;
	  			itemHover = options.itemHover;
	  			if(options.topMargin != null) {
	  				if(options.topMargin == 'auto') {
	  					topMargin = parseInt($('.stuckMenu').css('margin-top'));
	  				} else {
	  					if(isNaN(options.topMargin) && options.topMargin.search("px") > 0){
	  						topMargin = parseInt(options.topMargin.replace("px",""));
	  					} else if(!isNaN(parseInt(options.topMargin))) {
	  						topMargin = parseInt(options.topMargin);
	  					} else {
	  						console.log("incorrect argument, ignored.");
	  						topMargin = 0;
	  					}	
	  				}
	  			} else {
	  				topMargin = 0;
	  			}
	  			menuSize = $('.'+itemClass).size()-1;
  			}			
			stickyHeight = parseInt($(this).height());
			stickyMarginB = parseInt($(this).css('margin-bottom'));
			currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));
			vartop = parseInt($(this).offset().top);
			//$(this).find('*').removeClass(itemHover);
		}
		$(document).on('scroll', function() {
			varscroll = parseInt($(document).scrollTop());
			if(menuSize != null){
				for(var i=0;i < menuSize;i++)
				{
					contentTop[i] = $('#'+content[i]+'').offset().top;
					function bottomView(i) {
						contentView = $('#'+content[i]+'').height()*.4;
						testView = contentTop[i] - contentView;
						if(varscroll > testView){
							$('.'+itemClass).removeClass(itemHover);
							$('.'+itemClass+':eq('+i+')').addClass(itemHover);
						} else if(varscroll < 100){
							$('.'+itemClass).removeClass(itemHover);
							$('.'+itemClass+':eq(0)').addClass(itemHover);
						}
					}
					if(scrollDir == 'down' && varscroll > contentTop[i]-100 && varscroll < contentTop[i]+100) {
						$('.'+itemClass).removeClass(itemHover);
						$('.'+itemClass+':eq('+i+')').addClass(itemHover);
					}
					if(scrollDir == 'up') {
						bottomView(i);
					}
				}
			}



			if(vartop < varscroll + topMargin){
				$('.wrapper').addClass('spHeight');
				$('.stuckMenu').addClass('isStuck');
				$('.stuckMenu').next().closest('div').css({
					'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'
				}, 10);
				$('.stuckMenu').css("position","fixed");
				$('.isStuck').css({
					top: '0px'
				}, 10, function(){

				});
			};

			if(varscroll + topMargin < vartop){
				$('.wrapper').removeClass('spHeight');
				$('.stuckMenu').removeClass('isStuck');
				$('.stuckMenu').next().closest('div').css({
					'margin-top': currentMarginT + 'px'
				}, 10);
				$('.stuckMenu').css("position","relative");
			};

		});
	});

});
