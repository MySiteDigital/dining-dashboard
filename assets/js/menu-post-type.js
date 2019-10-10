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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 49);
/******/ })
/************************************************************************/
/******/ ({

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);

;

(function ($) {
  jQuery(document).ready(function () {
    diningDashboard.init();
  });
})(jQuery);

var diningDashboard = {
  slideToggleTrigger: jQuery('.has-slide-toggle header'),
  menuSectionClass: '.wp-block-dining-dashboard-menu-section',
  gridHolderClass: '.grid-holder',
  imageClass: '.img',
  init: function init() {
    diningDashboard.loadImages();
    diningDashboard.scrollListener();
    diningDashboard.resizeListener();

    if (diningDashboard.slideToggleTrigger.length) {
      diningDashboard.buttonListener();
    }
  },
  loadImages: function loadImages() {
    jQuery(diningDashboard.imageClass).each(function (i, el) {
      var element = jQuery(el);

      if (diningDashboard.isElementInView(element)) {
        var imageUrl = element.data('image');
        element.css('background-image', 'url(' + imageUrl + ')');
      }
    });
  },
  scrollListener: function scrollListener() {
    jQuery(window).scroll(function () {
      diningDashboard.loadImages();
    });
  },
  resizeListener: function resizeListener() {
    jQuery(window).on('resize', function () {
      diningDashboard.loadImages();
    });
  },
  buttonListener: function buttonListener() {
    diningDashboard.slideToggleTrigger.on('click', function () {
      jQuery(this).toggleClass('open');
      jQuery(this).closest(diningDashboard.menuSectionClass).find(diningDashboard.gridHolderClass).slideToggle();
    });
  },
  isElementInView: function isElementInView(element) {
    var pageTop = jQuery(window).scrollTop();
    var pageBottom = pageTop + jQuery(window).height();
    var elementTop = element.offset().top;
    var elementBottom = elementTop + element.height();
    return elementTop <= pageBottom && elementBottom >= pageTop;
  }
};

/***/ })

/******/ });