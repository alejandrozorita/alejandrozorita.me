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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/jquery.placeholder.js":
/*!********************************************!*\
  !*** ./resources/js/jquery.placeholder.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
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
  $(document).ready(function () {
    $(':input[placeholder]').not(':password').each(function () {
      setupPlaceholder($(this));
    });
    $(':password[placeholder]').each(function () {
      setupPasswords($(this));
    });
    $('form').submit(function (e) {
      clearPlaceholdersBeforeSubmit($(this));
    });
  });

  function setupPlaceholder(input) {
    var placeholderText = input.attr('placeholder');
    setPlaceholderOrFlagChanged(input, placeholderText);
    input.focus(function (e) {
      if (input.data('changed') === true) return;
      if (input.val() === placeholderText) input.val('');
    }).blur(function (e) {
      if (input.val() === '') input.val(placeholderText);
    }).change(function (e) {
      input.data('changed', input.val() !== '');
    });
  }

  function setPlaceholderOrFlagChanged(input, text) {
    input.val() === '' ? input.val(text) : input.data('changed', true);
  }

  function setupPasswords(input) {
    var passwordPlaceholder = createPasswordPlaceholder(input);
    input.after(passwordPlaceholder);
    input.val() === '' ? input.hide() : passwordPlaceholder.hide();
    $(input).blur(function (e) {
      if (input.val() !== '') return;
      input.hide();
      passwordPlaceholder.show();
    });
    $(passwordPlaceholder).focus(function (e) {
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
    form.find(':input[placeholder]').each(function () {
      if ($(this).data('changed') === true) return;
      if ($(this).val() === $(this).attr('placeholder')) $(this).val('');
    });
  }
})(jQuery);

/***/ }),

/***/ 8:
/*!**************************************************!*\
  !*** multi ./resources/js/jquery.placeholder.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/alejandrozorita.me/resources/js/jquery.placeholder.js */"./resources/js/jquery.placeholder.js");


/***/ })

/******/ });