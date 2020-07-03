/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/stickUp.js":
/*!*********************************!*\
  !*** ./resources/js/stickUp.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery(function ($) {
  $(document).ready(function () {
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
    $(window).scroll(function (event) {
      var st = $(this).scrollTop();

      if (st > lastScrollTop) {
        scrollDir = 'down';
      } else {
        scrollDir = 'up';
      }

      lastScrollTop = st;
    });

    $.fn.stickUp = function (options) {
      // adding a class to users div
      $(this).addClass('stuckMenu'); //getting options

      var objn = 0;

      if (options != null) {
        for (var o in options.parts) {
          if (options.parts.hasOwnProperty(o)) {
            content[objn] = options.parts[objn];
            objn++;
          }
        }

        if (objn == 0) {
          console.log('error:needs arguments');
        }

        itemClass = options.itemClass;
        itemHover = options.itemHover;

        if (options.topMargin != null) {
          if (options.topMargin == 'auto') {
            topMargin = parseInt($('.stuckMenu').css('margin-top'));
          } else {
            if (isNaN(options.topMargin) && options.topMargin.search("px") > 0) {
              topMargin = parseInt(options.topMargin.replace("px", ""));
            } else if (!isNaN(parseInt(options.topMargin))) {
              topMargin = parseInt(options.topMargin);
            } else {
              console.log("incorrect argument, ignored.");
              topMargin = 0;
            }
          }
        } else {
          topMargin = 0;
        }

        menuSize = $('.' + itemClass).size();
      }

      stickyHeight = parseInt($(this).height());
      stickyMarginB = parseInt($(this).css('margin-bottom'));
      currentMarginT = parseInt($(this).next().closest('div').css('margin-top'));
      vartop = parseInt($(this).offset().top); //$(this).find('*').removeClass(itemHover);
    };

    $(document).on('scroll', function () {
      varscroll = parseInt($(document).scrollTop());

      if (menuSize != null) {
        for (var i = 0; i < menuSize; i++) {
          var bottomView = function bottomView(i) {
            contentView = $('#' + content[i] + '').height() * .4;
            testView = contentTop[i] - contentView; //console.log(varscroll);

            if (varscroll > testView) {
              $('.' + itemClass).removeClass(itemHover);
              $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
            } else if (varscroll < 100) {
              $('.' + itemClass).removeClass(itemHover);
              $('.' + itemClass + ':eq(0)').addClass(itemHover);
            }
          };

          contentTop[i] = $('#' + content[i] + '').offset().top;

          if (scrollDir == 'down' && varscroll > contentTop[i] - 100 && varscroll < contentTop[i] + 100) {
            $('.' + itemClass).removeClass(itemHover);
            $('.' + itemClass + ':eq(' + i + ')').addClass(itemHover);
          }

          if (scrollDir == 'up') {
            bottomView(i);
          }
        }
      }

      if (vartop < varscroll + topMargin) {
        $('.wrapper').addClass('spHeight');
        $('.stuckMenu').addClass('isStuck');
        $('.stuckMenu').next().closest('div').css({
          'margin-top': stickyHeight + stickyMarginB + currentMarginT + 'px'
        }, 10);
        $('.stuckMenu').css("position", "fixed");
        $('.isStuck').css({
          top: '0px'
        }, 10, function () {});
      }

      ;

      if (varscroll + topMargin < vartop) {
        $('.wrapper').removeClass('spHeight');
        $('.stuckMenu').removeClass('isStuck');
        $('.stuckMenu').next().closest('div').css({
          'margin-top': currentMarginT + 'px'
        }, 10);
        $('.stuckMenu').css("position", "relative");
      }

      ;
    });
  });
});

/***/ }),

/***/ 12:
/*!***************************************!*\
  !*** multi ./resources/js/stickUp.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/alejandrozorita.me/resources/js/stickUp.js */"./resources/js/stickUp.js");


/***/ })

/******/ });