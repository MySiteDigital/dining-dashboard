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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(10);

var assertThisInitialized = __webpack_require__(1);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(6);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(4);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(1);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(2);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// CONCATENATED MODULE: ./src/menu-section-block/js/Editor.js








/**
 * Get WordPress libraries from the wp global
 */
var __ = wp.i18n.__;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload;
var _wp$components = wp.components,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

var Editor_Editor =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Editor, _Component);

  function Editor() {
    var _this;

    classCallCheck_default()(this, Editor);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Editor).apply(this, arguments));
    _this.onChangeTitle = _this.onChangeTitle.bind(assertThisInitialized_default()(_this));
    _this.onChangeContent = _this.onChangeContent.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Editor, [{
    key: "onChangeTitle",
    value: function onChangeTitle(newTitle) {
      this.props.setAttributes({
        itemTitle: newTitle
      });
    }
  }, {
    key: "onChangeContent",
    value: function onChangeContent(newContent) {
      this.props.setAttributes({
        content: newContent
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes,
          isSelected = _this$props.isSelected;
      var mediaID = attributes.mediaID,
          mediaURL = attributes.mediaURL,
          itemTitle = attributes.itemTitle,
          content = attributes.content,
          currency = attributes.currency,
          currencyPosition = attributes.currencyPosition;
      var formatControls = ['bold', 'italic'];
      return [Object(external_this_wp_element_["createElement"])(InspectorControls, null, Object(external_this_wp_element_["createElement"])(PanelBody, {
        title: __('Item Image')
      }, Object(external_this_wp_element_["createElement"])("p", null, Object(external_this_wp_element_["createElement"])("strong", null, "Menu Item Image"), Object(external_this_wp_element_["createElement"])("br", null), Object(external_this_wp_element_["createElement"])("span", {
        class: "components-base-control__help"
      }, "width should be 180px")))), Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(RichText, {
        tagName: "h3",
        placeholder: __('Menu Item Title'),
        onChange: this.onChangeTitle,
        formattingControls: formatControls,
        value: itemTitle
      }), Object(external_this_wp_element_["createElement"])(RichText, {
        tagName: "p",
        placeholder: __('Menu Item Description'),
        onChange: this.onChangeContent,
        formattingControls: formatControls,
        value: content
      })))];
    }
  }]);

  return Editor;
}(Component);


// EXTERNAL MODULE: ./src/menu-section-block/scss/style.scss
var style = __webpack_require__(8);

// CONCATENATED MODULE: ./src/menu-section-block/index.js


/**
 * Import internal dependencies
 */


/**
 * Get WordPress libraries from the wp global
 */

var menu_section_block_ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var menu_section_block_wp$editor = wp.editor,
    menu_section_block_RichText = menu_section_block_wp$editor.RichText,
    menu_section_block_MediaUpload = menu_section_block_wp$editor.MediaUpload,
    menu_section_block_InspectorControls = menu_section_block_wp$editor.InspectorControls;
var menu_section_block_wp$element = wp.element,
    menu_section_block_Component = menu_section_block_wp$element.Component,
    menu_section_block_Fragment = menu_section_block_wp$element.Fragment;
var el = wp.element.createElement;
registerBlockType('dining-dashboard/menu-section', {
  title: menu_section_block_('Menu Section'),
  category: 'menu-blocks',
  supports: {
    html: true,
    customClassName: false
  },
  attributes: {
    itemTitle: {
      type: 'string'
    },
    content: {
      type: 'array',
      source: 'children',
      selector: 'p'
    }
  },
  edit: Editor_Editor,
  save: function save(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    var itemTitle = attributes.itemTitle;
    return Object(external_this_wp_element_["createElement"])(menu_section_block_Fragment, null, Object(external_this_wp_element_["createElement"])(menu_section_block_RichText.itemTitle, {
      tagName: "h3",
      className: className,
      value: itemTitle
    }), Object(external_this_wp_element_["createElement"])(menu_section_block_RichText.content, {
      tagName: "p",
      className: className,
      value: content
    }));
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ })
/******/ ]);