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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
/******/ })
/************************************************************************/
/******/ ({

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(140);
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
      var gridCols = grid.data('columns');

      if (gridCols > 1) {
        console.log('grid', grid.data('columns')); //reset margin-top

        grid.find(diningDashboard.menuItemClass).css('marginTop', 0); //find out actual columns as set in the css

        var cols = grid.css('grid-template-columns');
        cols = (cols.match(/px/g) || []).length;

        if (cols > 1) {
          var gridTop = parseInt(grid.offset().top);

          for (var _i = 1; _i <= gridCols; _i++) {
            var columnClass = '.column-' + _i;
            var columnItems = grid.find(diningDashboard.menuItemClass + columnClass);
            console.log(columnClass);

            if (columnItems.length) {
              diningDashboard.columnMasonry(gridTop, columnItems);
            }
          }
        }
      }
    });
  },
  columnMasonry: function columnMasonry(gridTop, columnItems) {
    var previousItem = {};
    var previousItemBottom = 0;
    console.log('grid top', gridTop);

    for (var index = 0; index < columnItems.length; index++) {
      var distance = 0;
      var currentItem = columnItems.eq(index);
      currentItem.height(currentItem.outerHeight());
      var currentTop = parseInt(currentItem.offset().top);
      currentItem.data('top', currentTop);
      currentItem.data('bottom', currentItem.outerHeight());
      console.log('index', index);
      console.log('current item top', currentTop);
      console.log('current item outerHeight', currentItem.outerHeight(true));

      if (index < 1) {
        distance = currentTop - gridTop;
      } else {
        distance = currentTop - previousItemBottom - 20;
      }

      if (distance < 0) {
        distance = 0;
      } // currentItem.animate(
      //     { marginTop: -distance },
      //     500
      // );


      currentItem.css('marginTop', -distance);
      previousItem = currentItem;
      previousItemBottom = currentTop - distance + currentItem.outerHeight();
      console.log('prviou test');
      console.log('distance', distance);
      console.log('previous bottom', previousItemBottom);
    }
  },
  scrollListener: function scrollListener() {
    jQuery(window).scroll(function () {
      diningDashboard.loadImages();
    });
  },
  resizeListener: function resizeListener() {
    jQuery(window).on('resize', function () {
      diningDashboard.loadImages(); //diningDashboard.menuMasonry();
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

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });