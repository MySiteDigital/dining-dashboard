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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/menu-post-type/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/menu-post-type/index.js":
/*!*************************************!*\
  !*** ./src/menu-post-type/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/menu-post-type/style.scss");
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
  menuGridClass: '.wp-block-dining-dashboard-menu-section-grid',
  menuItemClass: '.wp-block-dining-dashboard-menu-item',
  gridHolderClass: '.grid-holder',
  imageClass: '.img',
  init: function init() {
    diningDashboard.loadImages(); //diningDashboard.menuMasonry();

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
  menuMasonry: function menuMasonry() {
    jQuery(diningDashboard.menuGridClass).each(function (i, el) {
      var grid = jQuery(el);

      if (grid.hasClass('cols-2') || grid.hasClass('cols-3') || grid.hasClass('cols-4')) {
        var gridColumns = grid.css('grid-template-columns');
        var cols = (gridColumns.match(/px/g) || []).length;

        if (cols > 1) {
          var gridItems = grid.find(diningDashboard.menuItemClass).length;

          for (var _i = cols; _i < gridItems; _i++) {
            var currentItem = grid.find(diningDashboard.menuItemClass).eq(_i);
            var itemAbove = grid.find(diningDashboard.menuItemClass).eq(_i - cols);
            var itemAboveBottom = itemAbove.offset().top + itemAbove.outerHeight();
            var currentTop = currentItem.offset().top;
            var gap = itemAbove.hasClass('empty-item') ? 0 : 20;
            var distance = currentTop - itemAboveBottom - gap;
            currentItem.css('marginTop', -distance);
          }
        } else {
          grid.find(diningDashboard.menuItemClass).css('marginTop', 0);
          grid.find(diningDashboard.menuItemClass).css('marginTop', 0);
        }
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
      diningDashboard.menuMasonry();
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

/***/ }),

/***/ "./src/menu-post-type/style.scss":
/*!***************************************!*\
  !*** ./src/menu-post-type/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=menu-post-type.js.map