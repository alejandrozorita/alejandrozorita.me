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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/custom.js":
/*!********************************!*\
  !*** ./resources/js/custom.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  "use strict";

  (function ($) {
    $(function () {
      jQuery('#loopedSlider').prepend("<a href='#' class='previous'>&lt;</a><a href='#' class='next'>&gt;</a>");
      jQuery('#loopedSlider').loopedSlider({
        autoHeight: 500
      });
    });
  }); // for banner height js


  var windowWidth = $(window).width();
  var windowHeight = $(window).height(); //$('.banner').css({'width':windowWidth ,'height':windowHeight -"60" });
  // for portfoli filter jquary

  $(window).load(function () {
    var $container = $('.portfolioContainer');
    $container.isotope({
      filter: '*',
      animationOptions: {
        duration: 750,
        easing: 'linear',
        queue: false
      }
    });
    $('.portfolioFilter a').click(function () {
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
  }); // for portfoli lightbox jquary

  jQuery(function ($) {
    var $chosenSheet,
        $stylesheets = $("a[id^=theme-]"); // run rlightbox

    $(".lb").rlightbox();
    $(".lb_title-overwritten").rlightbox({
      overwriteTitle: true
    });
  }); // for skill chat jquary

  $(document).ready(function (e) {
    //var windowBottom = $(window).height();
    var index = 0;
    $(document).scroll(function () {
      var top = $('.technical').height() - $(window).scrollTop();
      console.log(top);

      if (top < -300) {
        if (index == 0) {
          $('.chart').easyPieChart({
            easing: 'easeOutBounce',
            onStep: function onStep(from, to, percent) {
              $(this.el).find('.percent').text(Math.round(percent));
            }
          });
        }

        index++;
      }
    }); //console.log(nagativeValue)
  }); // Somth page scroll

  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 60
          }, 1000);
          return false;
        }
      }
    });
  }); // chart loding

  $(window).load(function () {
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function () {
      chart.update(Math.random() * 100);
    });
  });
})(jQuery);

/***/ }),

/***/ 2:
/*!**************************************!*\
  !*** multi ./resources/js/custom.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/alejandrozorita.me/resources/js/custom.js */"./resources/js/custom.js");


/***/ })

/******/ });