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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(39);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(118),
    getValue = __webpack_require__(112);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    getRawTag = __webpack_require__(116),
    objectToString = __webpack_require__(115);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(18);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(103);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(41);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(128),
    listCacheDelete = __webpack_require__(127),
    listCacheGet = __webpack_require__(126),
    listCacheHas = __webpack_require__(125),
    listCacheSet = __webpack_require__(124);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(43),
    baseIteratee = __webpack_require__(131),
    baseMap = __webpack_require__(51),
    isArray = __webpack_require__(1);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(132);

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
/* 14 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(133);

var assertThisInitialized = __webpack_require__(26);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(18);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(40),
    isLength = __webpack_require__(21);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(82),
    baseKeys = __webpack_require__(75),
    isArrayLike = __webpack_require__(20);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(111),
    mapCacheDelete = __webpack_require__(104),
    mapCacheGet = __webpack_require__(102),
    mapCacheHas = __webpack_require__(101),
    mapCacheSet = __webpack_require__(100);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 24 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 26 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isKey = __webpack_require__(19),
    stringToPath = __webpack_require__(63),
    toString = __webpack_require__(60);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(27),
    toKey = __webpack_require__(6);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(24);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(78),
    baseUnary = __webpack_require__(77),
    nodeUtil = __webpack_require__(76);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(2),
    stubFalse = __webpack_require__(79);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)(module)))

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(80),
    isObjectLike = __webpack_require__(4);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(98),
    arraySome = __webpack_require__(95),
    cacheHas = __webpack_require__(94);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(99),
    isObjectLike = __webpack_require__(4);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(117)))

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObject = __webpack_require__(24);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 41 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(11),
    stackClear = __webpack_require__(123),
    stackDelete = __webpack_require__(122),
    stackGet = __webpack_require__(121),
    stackHas = __webpack_require__(120),
    stackSet = __webpack_require__(119);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 43 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"this":["wp","element"]}
var external_this_wp_element_ = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(17);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(16);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(15);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(14);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(13);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/lodash/map.js
var map = __webpack_require__(12);
var map_default = /*#__PURE__*/__webpack_require__.n(map);

// CONCATENATED MODULE: ./src/menu-blocks/menu-section/js/Inspector.js


/**
 * External dependencies
 */

/**
 * WordPress dependencies.
 */

var __ = wp.i18n.__;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    Tooltip = _wp$components.Tooltip;
var InspectorControls = wp.blockEditor.InspectorControls;
var _wp$keycodes = wp.keycodes,
    ENTER = _wp$keycodes.ENTER,
    SPACE = _wp$keycodes.SPACE;

var Inspector_Inspector = function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes,
      columnOptions = props.columnOptions,
      onToggleSlideToggle = props.onToggleSlideToggle,
      onToggleImages = props.onToggleImages,
      onTogglePrices = props.onTogglePrices;
  return Object(external_this_wp_element_["createElement"])(InspectorControls, null, Object(external_this_wp_element_["createElement"])(PanelBody, {
    title: __('Columns'),
    initialOpen: true
  }, Object(external_this_wp_element_["createElement"])(ButtonGroup, {
    "aria-label": __('Select Columns')
  }, map_default()(columnOptions, function (_ref) {
    var name = _ref.name,
        columns = _ref.columns,
        icon = _ref.icon;
    return Object(external_this_wp_element_["createElement"])(Tooltip, {
      text: name
    }, Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(Button, {
      isSmall: true,
      onClick: function onClick() {
        setAttributes({
          columns: columns
        });
      }
    }, icon)));
  }))), Object(external_this_wp_element_["createElement"])(PanelBody, {
    title: __('Section Settings'),
    initialOpen: true
  }, Object(external_this_wp_element_["createElement"])(ToggleControl, {
    label: __('Slide Toggle'),
    help: attributes.hasSlideToggle ? __('Menu Section has Slide Toggle display?') : __('Set Slide Toggle settings for this Menu Section'),
    checked: attributes.hasSlideToggle,
    onChange: function onChange() {
      setAttributes({
        hasSlideToggle: !attributes.hasSlideToggle
      });
    }
  }), Object(external_this_wp_element_["createElement"])(ToggleControl, {
    label: __('Images'),
    help: attributes.showImages ? __('Showing images for each item') : __('Toggle to show images for each item.'),
    checked: attributes.showImages,
    onChange: function onChange() {
      setAttributes({
        showImages: !attributes.showImages
      });
    }
  }), Object(external_this_wp_element_["createElement"])(ToggleControl, {
    label: __('Prices'),
    help: attributes.showPrices ? __('Showing the price of each item') : __('Toggle to show the price of each item.'),
    checked: attributes.showPrices,
    onChange: function onChange() {
      setAttributes({
        showPrices: !attributes.showPrices
      });
    }
  })));
};

/* harmony default export */ var js_Inspector = (Inspector_Inspector);
// CONCATENATED MODULE: ./src/menu-blocks/utils/Icons.js


/**
 * Custom icons
 */
var Icons = {};
Icons.MenuSection = Object(external_this_wp_element_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "M19.1873 22.9996H4.81267C3.66941 22.9996 2.73932 22.0695 2.73932 20.9263V3.07335C2.73932 1.93014 3.66945 1 4.81267 1H19.1873C20.3306 1 21.2606 1.93014 21.2606 3.07335V14.814C21.2606 15.1423 20.9945 15.4086 20.6661 15.4086C20.3376 15.4086 20.0715 15.1423 20.0715 14.814V3.07335C20.0715 2.58583 19.6748 2.18919 19.1873 2.18919H4.81267C4.32515 2.18919 3.92851 2.58583 3.92851 3.07335V20.9267C3.92851 21.4142 4.32515 21.8109 4.81267 21.8109H19.1873C19.6748 21.8109 20.0715 21.4142 20.0715 20.9267V18.5097C20.0715 18.1814 20.3376 17.9151 20.6661 17.9151C20.9945 17.9151 21.2606 18.1814 21.2606 18.5097V20.9266C21.2606 22.0699 20.3305 23 19.1873 23V22.9996Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M7.53987 8.65807C7.47018 8.77598 7.36297 8.81349 7.26114 8.81349C7.16463 8.81349 7.06284 8.78131 6.99851 8.65807L6.4893 7.7254V9.78904C6.4893 9.96057 6.28025 10.0463 6.07126 10.0463C5.86222 10.0463 5.65313 9.96062 5.65313 9.78904V6.54614C5.65313 6.24059 5.86217 6.1281 6.07126 6.1281C6.37139 6.1281 6.50008 6.1602 6.71982 6.54614L7.27196 7.51099L7.82402 6.54614C8.04376 6.1602 8.17241 6.1281 8.47259 6.1281C8.68695 6.1281 8.89062 6.24063 8.89062 6.54614V9.78904C8.89062 9.96057 8.68158 10.0463 8.47259 10.0463C8.26354 10.0463 8.05446 9.96062 8.05446 9.78904V7.77899L7.53987 8.65807Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M10.3062 7.76304H11.1102C11.271 7.76304 11.3621 7.91846 11.3621 8.08999C11.3621 8.23471 11.2871 8.40619 11.1102 8.40619H10.3062V9.31747H11.7427C11.9035 9.31747 11.9946 9.489 11.9946 9.68729C11.9946 9.85882 11.9196 10.0464 11.7427 10.0464H9.83451C9.65228 10.0464 9.47001 9.9607 9.47001 9.78913V6.38548C9.47001 6.21395 9.65224 6.12819 9.83451 6.12819H11.7427C11.9196 6.12819 11.9947 6.3157 11.9947 6.48727C11.9947 6.68561 11.9036 6.85719 11.7427 6.85719H10.3062L10.3062 7.76304Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M14.2137 9.82123L13.1953 7.96663V9.78904C13.1953 9.96057 12.9863 10.0463 12.7773 10.0463C12.5682 10.0463 12.3592 9.96062 12.3592 9.78904V6.38539C12.3592 6.20845 12.5682 6.1281 12.7773 6.1281C13.0774 6.1281 13.19 6.15487 13.3937 6.54614L14.2621 8.20235V6.37994C14.2621 6.20304 14.4711 6.12806 14.6801 6.12806C14.8891 6.12806 15.0982 6.20308 15.0982 6.37994V9.789C15.0982 9.96053 14.8892 10.0463 14.6801 10.0463C14.4871 10.0463 14.3155 10.0089 14.2137 9.82123Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M17.5266 6.38032C17.5266 6.20342 17.7303 6.12844 17.9447 6.12844C18.1484 6.12844 18.3628 6.20347 18.3628 6.38032V8.81383C18.3628 9.73581 17.7679 10.0788 17.012 10.0788C16.2509 10.0788 15.6613 9.73576 15.6613 8.81383V6.38032C15.6613 6.20342 15.865 6.12844 16.0794 6.12844C16.2831 6.12844 16.4975 6.20347 16.4975 6.38032V8.81383C16.4975 9.17834 16.6905 9.34986 17.012 9.34986C17.3336 9.34986 17.5266 9.17834 17.5266 8.81383V6.38032Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M15.3128 14.3699H8.89123C8.56282 14.3699 8.29663 14.1036 8.29663 13.7753C8.29663 13.4469 8.56282 13.1807 8.89123 13.1807H15.3128C15.6413 13.1807 15.9074 13.4469 15.9074 13.7753C15.9074 14.1036 15.6412 14.3699 15.3128 14.3699H15.3128Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M15.3799 16.6871H8.95826C8.62985 16.6871 8.36366 16.4209 8.36366 16.0925C8.36366 15.7642 8.62985 15.4979 8.95826 15.4979H15.3799C15.7083 15.4979 15.9745 15.7642 15.9745 16.0925C15.9745 16.4209 15.7082 16.6871 15.3798 16.6871H15.3799Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M15.5049 18.8562H9.08329C8.75489 18.8562 8.4887 18.5899 8.4887 18.2616C8.4887 17.9333 8.75489 17.667 9.08329 17.667H15.5049C15.8333 17.667 16.0995 17.9333 16.0995 18.2616C16.0995 18.5899 15.8333 18.8562 15.5049 18.8562H15.5049Z",
  fill: "black"
}));
Icons.MenuSectionHeading = Object(external_this_wp_element_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "M19.1873 22.9996H4.81267C3.66941 22.9996 2.73932 22.0695 2.73932 20.9263V3.07335C2.73932 1.93014 3.66945 1 4.81267 1H19.1873C20.3306 1 21.2606 1.93014 21.2606 3.07335V14.814C21.2606 15.1423 20.9945 15.4086 20.6661 15.4086C20.3376 15.4086 20.0715 15.1423 20.0715 14.814V3.07335C20.0715 2.58583 19.6748 2.18919 19.1873 2.18919H4.81267C4.32515 2.18919 3.92851 2.58583 3.92851 3.07335V20.9267C3.92851 21.4142 4.32515 21.8109 4.81267 21.8109H19.1873C19.6748 21.8109 20.0715 21.4142 20.0715 20.9267V18.5097C20.0715 18.1814 20.3376 17.9151 20.6661 17.9151C20.9945 17.9151 21.2606 18.1814 21.2606 18.5097V20.9266C21.2606 22.0699 20.3305 23 19.1873 23V22.9996Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M7.53987 8.65807C7.47018 8.77598 7.36297 8.81349 7.26114 8.81349C7.16463 8.81349 7.06284 8.78131 6.99851 8.65807L6.4893 7.7254V9.78904C6.4893 9.96057 6.28025 10.0463 6.07126 10.0463C5.86222 10.0463 5.65313 9.96062 5.65313 9.78904V6.54614C5.65313 6.24059 5.86217 6.1281 6.07126 6.1281C6.37139 6.1281 6.50008 6.1602 6.71982 6.54614L7.27196 7.51099L7.82402 6.54614C8.04376 6.1602 8.17241 6.1281 8.47258 6.1281C8.68695 6.1281 8.89062 6.24063 8.89062 6.54614V9.78904C8.89062 9.96057 8.68158 10.0463 8.47258 10.0463C8.26354 10.0463 8.05446 9.96062 8.05446 9.78904V7.77899L7.53987 8.65807Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M10.3062 7.76304H11.1102C11.271 7.76304 11.3621 7.91846 11.3621 8.08999C11.3621 8.23471 11.2871 8.40619 11.1102 8.40619H10.3062V9.31747H11.7427C11.9035 9.31747 11.9946 9.489 11.9946 9.68729C11.9946 9.85882 11.9196 10.0464 11.7427 10.0464H9.83451C9.65228 10.0464 9.47001 9.9607 9.47001 9.78913V6.38548C9.47001 6.21395 9.65224 6.12819 9.83451 6.12819H11.7427C11.9196 6.12819 11.9947 6.3157 11.9947 6.48727C11.9947 6.68561 11.9036 6.85719 11.7427 6.85719H10.3062L10.3062 7.76304Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M14.2137 9.82123L13.1953 7.96663V9.78904C13.1953 9.96057 12.9863 10.0463 12.7773 10.0463C12.5682 10.0463 12.3592 9.96062 12.3592 9.78904V6.38539C12.3592 6.20845 12.5682 6.1281 12.7773 6.1281C13.0774 6.1281 13.19 6.15487 13.3937 6.54614L14.2621 8.20235V6.37994C14.2621 6.20304 14.4711 6.12806 14.6801 6.12806C14.8891 6.12806 15.0982 6.20308 15.0982 6.37994V9.789C15.0982 9.96053 14.8892 10.0463 14.6801 10.0463C14.4871 10.0463 14.3155 10.0089 14.2137 9.82123Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M17.5266 6.38032C17.5266 6.20342 17.7303 6.12844 17.9447 6.12844C18.1484 6.12844 18.3628 6.20347 18.3628 6.38032V8.81383C18.3628 9.73581 17.7679 10.0788 17.012 10.0788C16.2509 10.0788 15.6613 9.73576 15.6613 8.81383V6.38032C15.6613 6.20342 15.865 6.12844 16.0794 6.12844C16.2831 6.12844 16.4975 6.20347 16.4975 6.38032V8.81383C16.4975 9.17834 16.6905 9.34986 17.012 9.34986C17.3336 9.34986 17.5266 9.17834 17.5266 8.81383V6.38032Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M10.7376 12.8817V19.3034C10.7376 19.6318 10.3768 19.8979 9.93192 19.8979C9.48705 19.8979 9.12626 19.6318 9.12626 19.3034V12.8817C9.12626 12.5533 9.48705 12.2871 9.93192 12.2871C10.3768 12.2871 10.7376 12.5534 10.7376 12.8818V12.8817Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M15.2119 12.8817V19.3034C15.2119 19.6318 14.8511 19.8979 14.4062 19.8979C13.9613 19.8979 13.6006 19.6318 13.6006 19.3034V12.8817C13.6006 12.5533 13.9613 12.2871 14.4062 12.2871C14.8511 12.2871 15.2119 12.5534 15.2119 12.8818V12.8817Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M14.0231 16.9073H9.88536C9.67375 16.9073 9.50223 16.5917 9.50223 16.2026C9.50223 15.8135 9.67375 15.4979 9.88536 15.4979H14.0231C14.2347 15.4979 14.4062 15.8135 14.4062 16.2026C14.4062 16.5917 14.2347 16.9073 14.0231 16.9073Z",
  fill: "black"
}));
Icons.MenuSectionColumn = Object(external_this_wp_element_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "M19.1873 22.9996H4.81267C3.66941 22.9996 2.73932 22.0695 2.73932 20.9263V3.07335C2.73932 1.93014 3.66945 1 4.81267 1H19.1873C20.3306 1 21.2606 1.93014 21.2606 3.07335V14.814C21.2606 15.1423 20.9945 15.4086 20.6661 15.4086C20.3376 15.4086 20.0715 15.1423 20.0715 14.814V3.07335C20.0715 2.58583 19.6748 2.18919 19.1873 2.18919H4.81267C4.32515 2.18919 3.92851 2.58583 3.92851 3.07335V20.9267C3.92851 21.4142 4.32515 21.8109 4.81267 21.8109H19.1873C19.6748 21.8109 20.0715 21.4142 20.0715 20.9267V18.5097C20.0715 18.1814 20.3376 17.9151 20.6661 17.9151C20.9945 17.9151 21.2606 18.1814 21.2606 18.5097V20.9266C21.2606 22.0699 20.3305 22.9996 19.1873 22.9996Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M7.53987 8.65807C7.47018 8.77598 7.36297 8.81349 7.26114 8.81349C7.16463 8.81349 7.06284 8.78131 6.99851 8.65807L6.4893 7.7254V9.78904C6.4893 9.96057 6.28026 10.0463 6.07126 10.0463C5.86222 10.0463 5.65313 9.96062 5.65313 9.78904V6.54614C5.65313 6.24059 5.86217 6.1281 6.07126 6.1281C6.37139 6.1281 6.50008 6.1602 6.71982 6.54614L7.27196 7.51099L7.82402 6.54614C8.04376 6.1602 8.17241 6.1281 8.47259 6.1281C8.68696 6.1281 8.89063 6.24063 8.89063 6.54614V9.78904C8.89063 9.96057 8.68158 10.0463 8.47259 10.0463C8.26355 10.0463 8.05446 9.96062 8.05446 9.78904V7.77899L7.53987 8.65807Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M10.3062 7.76304H11.1102C11.271 7.76304 11.3621 7.91846 11.3621 8.08999C11.3621 8.23471 11.2871 8.40619 11.1102 8.40619H10.3062V9.31747H11.7427C11.9035 9.31747 11.9946 9.489 11.9946 9.68729C11.9946 9.85882 11.9196 10.0464 11.7427 10.0464H9.83451C9.65228 10.0464 9.47001 9.9607 9.47001 9.78913V6.38548C9.47001 6.21395 9.65224 6.12819 9.83451 6.12819H11.7427C11.9196 6.12819 11.9947 6.3157 11.9947 6.48727C11.9947 6.68561 11.9036 6.85719 11.7427 6.85719H10.3062L10.3062 7.76304Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M14.2137 9.82123L13.1953 7.96663V9.78904C13.1953 9.96057 12.9863 10.0463 12.7773 10.0463C12.5682 10.0463 12.3592 9.96062 12.3592 9.78904V6.38539C12.3592 6.20845 12.5682 6.1281 12.7773 6.1281C13.0774 6.1281 13.19 6.15487 13.3937 6.54614L14.2621 8.20235V6.37994C14.2621 6.20304 14.4711 6.12806 14.6801 6.12806C14.8891 6.12806 15.0982 6.20308 15.0982 6.37994V9.789C15.0982 9.96053 14.8892 10.0463 14.6801 10.0463C14.4871 10.0463 14.3155 10.0089 14.2137 9.82123Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M17.5266 6.38032C17.5266 6.20342 17.7303 6.12844 17.9447 6.12844C18.1484 6.12844 18.3628 6.20347 18.3628 6.38032V8.81383C18.3628 9.73581 17.7679 10.0788 17.012 10.0788C16.2509 10.0788 15.6613 9.73576 15.6613 8.81383V6.38032C15.6613 6.20342 15.865 6.12844 16.0794 6.12844C16.2831 6.12844 16.4975 6.20347 16.4975 6.38032V8.81383C16.4975 9.17834 16.6905 9.34986 17.012 9.34986C17.3336 9.34986 17.5266 9.17834 17.5266 8.81383V6.38032Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M10.6085 18.6285H13.5958C13.6476 18.6285 13.6946 18.6497 13.7287 18.6837C13.7627 18.7178 13.7839 18.7648 13.7839 18.8166V19.3679H10.4205V18.8166C10.4205 18.7648 10.4416 18.7178 10.4757 18.6837C10.5099 18.6496 10.557 18.6285 10.6085 18.6285ZM13.5958 18.7718H10.6085C10.5961 18.7718 10.5849 18.7767 10.5769 18.7847C10.5688 18.7929 10.5637 18.8043 10.5637 18.8166V19.2247H13.6406V18.8166C13.6406 18.8043 13.6356 18.7931 13.6274 18.785C13.6193 18.7768 13.6081 18.7718 13.5958 18.7718Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M10.8796 18.0324H13.3248C13.3766 18.0324 13.4236 18.0535 13.4576 18.0875C13.4917 18.1216 13.5128 18.1688 13.5128 18.2204V18.7718H10.6915V18.2204C10.6915 18.1688 10.7127 18.1219 10.7467 18.0878C10.7808 18.0538 10.8278 18.0324 10.8796 18.0324ZM13.3248 18.1756H10.8796C10.8673 18.1756 10.8561 18.1807 10.848 18.1888C10.8399 18.197 10.8348 18.208 10.8348 18.2204V18.6285H13.3696V18.2204C13.3696 18.208 13.3646 18.1968 13.3565 18.1887C13.3484 18.1805 13.337 18.1756 13.3248 18.1756Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M13.2214 13.6853V18.1756H10.9829V13.6853H13.2214ZM13.0782 13.8286H11.1262V18.0324H13.0782V13.8286Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M10.8796 13.6853H13.3248C13.3372 13.6853 13.3484 13.6804 13.3564 13.6724C13.3645 13.6642 13.3696 13.6528 13.3696 13.6405V13.2324H10.8348V13.6405C10.8348 13.6528 10.8398 13.664 10.848 13.6721C10.856 13.6801 10.8672 13.6853 10.8796 13.6853ZM13.3248 13.8286H10.8796C10.8281 13.8286 10.7811 13.8074 10.7469 13.7732C10.7128 13.7392 10.6915 13.6923 10.6915 13.6405V13.0892H13.5128V13.6405C13.5128 13.6923 13.4917 13.7393 13.4576 13.7734C13.4234 13.8075 13.3763 13.8286 13.3248 13.8286Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M10.6085 13.0892H13.5958C13.6081 13.0892 13.6193 13.0841 13.6274 13.0759C13.6356 13.0678 13.6406 13.0566 13.6406 13.0443V12.6362H10.5637V13.0443C10.5637 13.0566 10.5688 13.0678 10.5769 13.0759C10.5849 13.0839 10.5961 13.0892 10.6085 13.0892ZM13.5958 13.2324H10.6085C10.557 13.2324 10.51 13.2112 10.4758 13.1771C10.4418 13.143 10.4205 13.0961 10.4205 13.0443V12.493H13.7839V13.0443C13.7839 13.0961 13.7627 13.1432 13.7287 13.1772C13.6947 13.2113 13.6476 13.2324 13.5958 13.2324Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M11.6616 14.3939C11.6616 14.3543 11.6295 14.3223 11.59 14.3223C11.5504 14.3223 11.5184 14.3543 11.5184 14.3939V17.467C11.5184 17.5066 11.5504 17.5387 11.59 17.5387C11.6295 17.5387 11.6616 17.5066 11.6616 17.467V14.3939Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M12.1738 14.3939C12.1738 14.3543 12.1417 14.3223 12.1022 14.3223C12.0626 14.3223 12.0306 14.3543 12.0306 14.3939V17.467C12.0306 17.5066 12.0626 17.5387 12.1022 17.5387C12.1417 17.5387 12.1738 17.5066 12.1738 17.467V14.3939Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M12.686 14.3939C12.686 14.3543 12.6539 14.3223 12.6144 14.3223C12.5748 14.3223 12.5428 14.3543 12.5428 14.3939V17.467C12.5428 17.5066 12.5748 17.5387 12.6144 17.5387C12.6539 17.5387 12.686 17.5066 12.686 17.467V14.3939Z",
  fill: "black"
}));
Icons.MenuItem = Object(external_this_wp_element_["createElement"])("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "M19.9983 21.4647L19.9958 21.4718C19.9958 21.4718 14.8652 16.9685 14.3693 16.5263C14.2698 16.2216 13.3851 14.4113 11.8237 14.6629L10.2652 14.5679C1.12447 6.248 2.02543 2.12103 2.02543 2.12103L2 2.15158C2 2.15158 8.41598 7.94942 12.2721 11.3803L14.1126 13.0183C14.7633 13.5967 15.1964 13.9829 15.283 14.0613C15.8562 14.5692 21.5937 19.6859 21.5937 19.6859L21.5939 19.6927C21.6 19.6923 21.6063 19.6971 21.6099 19.7036C22.0764 20.1164 22.0965 20.8576 21.6542 21.3462C21.215 21.8414 20.4775 21.903 20.0108 21.4836C20.0051 21.4774 20.0016 21.4709 19.9987 21.465L19.9983 21.4647Z",
  fill: "black"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "M11.2732 12.4612C8.31685 15.0891 5.35953 17.7162 2.40173 20.3437C2.08944 20.6146 1.91639 21.2718 2.23775 21.6423C2.55565 22.016 3.19808 21.9039 3.48792 21.6055C6.29074 18.7809 9.09415 15.9583 11.8981 13.134L12.5955 12.4307C12.5941 12.4324 12.5932 12.4333 12.5917 12.4348C12.5917 12.4348 12.5638 12.3919 12.5955 12.4307C13.2555 11.7664 13.9151 11.1017 14.5751 10.437C15.4164 10.9721 16.7284 10.5815 17.5567 9.6712C18.5035 8.62717 22.0861 4.75752 21.9984 4.65688C21.9127 4.55661 19.1783 7.27478 17.2519 9.09261L17.0008 8.80012C18.8255 6.86402 21.5427 4.12825 21.4567 4.02636C21.3701 3.92619 18.5663 6.56214 16.5892 8.32289L16.3402 8.03262C18.214 6.15361 21.0023 3.49832 20.9165 3.39892C20.8295 3.29834 17.9555 5.85255 15.9319 7.55741L15.6826 7.26698C17.6043 5.44462 20.4629 2.87236 20.3777 2.77088C20.2909 2.66938 15.1709 6.88261 15.1634 6.88861C15.1641 6.88948 16.2535 5.99426 15.1655 6.89182C14.1258 7.74851 13.6956 9.00695 14.1313 9.92323C13.442 10.5363 12.7528 11.1481 12.0636 11.7604L11.2732 12.4612Z",
  fill: "black"
}));
/* harmony default export */ var utils_Icons = (Icons);
// CONCATENATED MODULE: ./src/menu-blocks/menu-section/js/RowIcons.js


/**
 * Custom icons
 */
var RowIcons = {};
RowIcons.columns = Object(external_this_wp_element_["createElement"])("svg", {
  "aria-hidden": true,
  className: "dashicon",
  role: "img",
  focusable: "false",
  height: "24",
  viewBox: "0 0 24 24",
  width: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("g", {
  fillRule: "evenodd",
  transform: "translate(3 3)"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "m16.0833333 0h-14.16666663c-1.05416667 0-1.91666667.9-1.91666667 2v14c0 1.1.8625 2 1.91666667 2h14.16666663c1.0541667 0 1.9166667-.9 1.9166667-2v-14c0-1.1-.8625-2-1.9166667-2zm0 16h-14.16666663v-14h14.16666663z",
  fillRule: "nonzero"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "m8 0h2v18h-2z"
})));
RowIcons.colOne = Object(external_this_wp_element_["createElement"])("svg", {
  className: "dashicon",
  height: "26",
  viewBox: "0 0 50 26",
  width: "50",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "m48.0833333 0h-46.16666663c-1.05416667 0-1.91666667.9-1.91666667 2v22c0 1.1.8625 2 1.91666667 2h46.16666663c1.0541667 0 1.9166667-.9 1.9166667-2v-22c0-1.1-.8625-2-1.9166667-2zm0 24h-46.16666663v-22h46.16666663z"
}));
RowIcons.colTwo = Object(external_this_wp_element_["createElement"])("svg", {
  className: "dashicon",
  height: "26",
  viewBox: "0 0 50 26",
  width: "50",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("g", {
  fillRule: "evenodd"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "m48.0833333 0h-46.16666663c-1.05416667 0-1.91666667.9-1.91666667 2v22c0 1.1.8625 2 1.91666667 2h46.16666663c1.0541667 0 1.9166667-.9 1.9166667-2v-22c0-1.1-.8625-2-1.9166667-2zm0 24h-46.16666663v-22h46.16666663z",
  fillRule: "nonzero"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "m24 2h2v22h-2z"
})));
RowIcons.colThree = Object(external_this_wp_element_["createElement"])("svg", {
  className: "dashicon",
  height: "26",
  viewBox: "0 0 50 26",
  width: "50",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("g", {
  fillRule: "evenodd"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "m48.0833333 0h-46.16666663c-1.05416667 0-1.91666667.9-1.91666667 2v22c0 1.1.8625 2 1.91666667 2h46.16666663c1.0541667 0 1.9166667-.9 1.9166667-2v-22c0-1.1-.8625-2-1.9166667-2zm0 24h-46.16666663v-22h46.16666663z",
  fillRule: "nonzero"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "m16 2h2v22h-2z"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "m32 2h2v22h-2z"
})));
RowIcons.colFour = Object(external_this_wp_element_["createElement"])("svg", {
  className: "dashicon",
  height: "26",
  viewBox: "0 0 50 26",
  width: "50",
  xmlns: "http://www.w3.org/2000/svg"
}, Object(external_this_wp_element_["createElement"])("g", {
  fillRule: "evenodd"
}, Object(external_this_wp_element_["createElement"])("path", {
  d: "m48.0833333 0h-46.16666663c-1.05416667 0-1.91666667.9-1.91666667 2v22c0 1.1.8625 2 1.91666667 2h46.16666663c1.0541667 0 1.9166667-.9 1.9166667-2v-22c0-1.1-.8625-2-1.9166667-2zm0 24h-46.16666663v-22h46.16666663z",
  fillRule: "nonzero"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "m12 2h2v22h-2z"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "m24 2h2v22h-2z"
}), Object(external_this_wp_element_["createElement"])("path", {
  d: "m36 2h2v22h-2z"
})));
/* harmony default export */ var js_RowIcons = (RowIcons);
// CONCATENATED MODULE: ./src/menu-blocks/menu-section/js/Editor.js







/**
 * external dependencies
 */

/**
 * WordPress dependencies
 */

var Editor_ = wp.i18n.__;
var Editor_wp$components = wp.components,
    Placeholder = Editor_wp$components.Placeholder,
    Editor_ButtonGroup = Editor_wp$components.ButtonGroup,
    Editor_Button = Editor_wp$components.Button,
    Editor_Tooltip = Editor_wp$components.Tooltip;
var InnerBlocks = wp.blockEditor.InnerBlocks;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
/**
 * Internal dependencies
 */




var ALLOWED_BLOCKS = ['core/heading', 'core/column'];
var TEMPLATE = {
  1: [['dining-dashboard/menu-section-heading'], ['dining-dashboard/menu-section-column', {
    width: '100'
  }]],
  2: [['dining-dashboard/menu-section-heading'], ['dining-dashboard/menu-section-column', {
    width: '50'
  }], ['dining-dashboard/menu-section-column', {
    width: '50'
  }]],
  3: [['dining-dashboard/menu-section-heading'], ['dining-dashboard/menu-section-column', {
    width: '33.333'
  }], ['dining-dashboard/menu-section-column', {
    width: '33.333'
  }], ['dining-dashboard/menu-section-column', {
    width: '33.333'
  }]],
  4: [['dining-dashboard/menu-section-heading'], ['dining-dashboard/menu-section-column', {
    width: '75'
  }], ['dining-dashboard/menu-section-column', {
    width: '75'
  }], ['dining-dashboard/menu-section-column', {
    width: '75'
  }], ['dining-dashboard/menu-section-column', {
    width: '75'
  }]]
};
var Editor_columnOptions = [{
  columns: 1,
  name: Editor_('One Column'),
  icon: js_RowIcons.colOne
}, {
  columns: 2,
  name: Editor_('Two Columns'),
  icon: js_RowIcons.colTwo
}, {
  columns: 3,
  name: Editor_('Three Columns'),
  icon: js_RowIcons.colThree
}, {
  columns: 4,
  name: Editor_('Four Columns'),
  icon: js_RowIcons.colFour
}];
var columnClasses = ['', 'one-col', 'two-cols', 'three-cols', 'four-cols'];

function getActiveColumn(columns) {// for ( const style of new TokenList( className ).values() ) {
  // 	if ( style.indexOf( 'is-style-' ) === -1 ) {
  // 		continue;
  // 	}
  // 	const potentialStyleName = style.substring( 9 );
  // 	const activeStyle = find( styles, { name: potentialStyleName } );
  // 	if ( activeStyle ) {
  // 		return activeStyle;
  // 	}
  // }
  // return find( styles, 'isDefault' );
}

var Editor_Editor =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Editor, _Component);

  function Editor() {
    classCallCheck_default()(this, Editor);

    return possibleConstructorReturn_default()(this, getPrototypeOf_default()(Editor).apply(this, arguments));
  }

  createClass_default()(Editor, [{
    key: "updateColumns",
    value: function updateColumns(column) {
      var _this$props = this.props,
          attributes = _this$props.attributes,
          setAttributes = _this$props.setAttributes;
      var activeColumn = getActiveColumn(layoutOptions);
      var updatedClassName = replaceActiveColumn(activeColumn, column);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          attributes = _this$props2.attributes,
          setAttributes = _this$props2.setAttributes;
      var id = attributes.id,
          columns = attributes.columns;
      console.log(columns);
      console.log(columnClasses[columns]);

      if (!columns) {
        return Object(external_this_wp_element_["createElement"])(Fragment, null, Object(external_this_wp_element_["createElement"])(Placeholder, {
          key: "placeholder",
          icon: utils_Icons.MenuSection,
          label: Editor_('Menu Section'),
          instructions: Editor_('Select the number of columns for this menu section.')
        }, Object(external_this_wp_element_["createElement"])(Editor_ButtonGroup, {
          "aria-label": Editor_('Select Menu Section Columns')
        }, map_default()(Editor_columnOptions, function (_ref) {
          var name = _ref.name,
              columns = _ref.columns,
              icon = _ref.icon;
          return Object(external_this_wp_element_["createElement"])(Editor_Tooltip, {
            text: name
          }, Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])(Editor_Button, {
            isLarge: true,
            onClick: function onClick() {
              setAttributes({
                columns: columns
              });
            }
          }, icon)));
        }))));
      }

      return Object(external_this_wp_element_["createElement"])(Fragment, null, Object(external_this_wp_element_["createElement"])(js_Inspector, {
        attributes: attributes,
        setAttributes: setAttributes,
        columnOptions: Editor_columnOptions
      }), Object(external_this_wp_element_["createElement"])("div", {
        className: columnClasses[columns]
      }, Object(external_this_wp_element_["createElement"])(InnerBlocks, {
        template: TEMPLATE[columns],
        templateLock: "all",
        allowedBlocks: ALLOWED_BLOCKS,
        templateInsertUpdatesSelection: columns === 1,
        renderAppender: function renderAppender() {
          return null;
        }
      })));
    }
  }]);

  return Editor;
}(Component);

/* harmony default export */ var js_Editor = (Editor_Editor);
// EXTERNAL MODULE: ./src/menu-blocks/menu-section/scss/style.scss
var style = __webpack_require__(45);

// CONCATENATED MODULE: ./src/menu-blocks/menu-section/index.js




/**
 * Get WordPress libraries from the wp global
 */

var menu_section_ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    menu_section_InspectorControls = _wp$editor.InspectorControls;
var menu_section_wp$element = wp.element,
    menu_section_Component = menu_section_wp$element.Component,
    menu_section_Fragment = menu_section_wp$element.Fragment;
var el = wp.element.createElement;
registerBlockType('dining-dashboard/menu-section', {
  title: menu_section_('Menu Section'),
  icon: utils_Icons.MenuSection,
  category: 'menu-blocks',
  supports: {
    align: ['wide', 'full'],
    default: "wide",
    customClassName: false
  },
  align: {
    type: "string",
    default: "full"
  },
  attributes: {
    id: {
      type: 'number'
    },
    columns: {
      type: 'number'
    },
    hasSlideToggle: {
      type: 'boolean',
      default: false
    },
    showImages: {
      type: 'boolean',
      default: true
    },
    showPrices: {
      type: 'boolean',
      default: true
    }
  },
  edit: js_Editor,
  save: function save(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    var itemTitle = attributes.itemTitle;
    return Object(external_this_wp_element_["createElement"])(menu_section_Fragment, null, Object(external_this_wp_element_["createElement"])(RichText.itemTitle, {
      tagName: "h3",
      className: className,
      value: itemTitle
    }), Object(external_this_wp_element_["createElement"])(RichText.content, {
      tagName: "p",
      className: className,
      value: content
    }));
  }
});
// CONCATENATED MODULE: ./src/menu-blocks/menu-section-heading/index.js


/**
 * WordPress dependencies
 */

var menu_section_heading_ = wp.i18n.__;
var menu_section_heading_registerBlockType = wp.blocks.registerBlockType;
var menu_section_heading_RichText = wp.editor.RichText;
menu_section_heading_registerBlockType('dining-dashboard/menu-section-heading', {
  title: menu_section_heading_('Section Heading'),
  description: menu_section_heading_('A column inside the menu sections where menu items can be added'),
  icon: utils_Icons.MenuSectionHeading,
  category: 'menu-blocks',
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    var sectionTitle = attributes.sectionTitle;
    var formatControls = ['bold', 'italic'];
    return Object(external_this_wp_element_["createElement"])(menu_section_heading_RichText, {
      tagName: "h3",
      placeholder: menu_section_heading_('Menu Section Title'),
      formattingControls: formatControls,
      value: sectionTitle
    });
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes,
        className = _ref2.className;
    var sectionTitle = attributes.sectionTitle;
    return Object(external_this_wp_element_["createElement"])(menu_section_heading_RichText.sectionTitle, {
      tagName: "h3",
      className: className,
      value: itemTitle
    });
  }
});
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(26);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// CONCATENATED MODULE: ./src/menu-blocks/menu-section-column/js/Editor.js








/**
 * WordPress dependencies
 */
var js_Editor_ = wp.i18n.__;
var Editor_wp$element = wp.element,
    Editor_Component = Editor_wp$element.Component,
    Editor_Fragment = Editor_wp$element.Fragment;
var IconButton = wp.components.IconButton;
var _wp$data = wp.data,
    dispatch = _wp$data.dispatch,
    Editor_select = _wp$data.select;

var js_Editor_Editor =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Editor, _Component);

  function Editor() {
    var _this;

    classCallCheck_default()(this, Editor);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Editor).apply(this, arguments));
    _this.insertNewItem = _this.insertNewItem.bind(assertThisInitialized_default()(_this));
    return _this;
  }

  createClass_default()(Editor, [{
    key: "insertNewItem",
    value: function insertNewItem() {
      var _this$props = this.props,
          clientId = _this$props.clientId,
          attributes = _this$props.attributes;
      var menuItems = Editor_select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
      var newMenuItem = wp.blocks.createBlock('dining-dashboard/menu-section-column', attributes);
      console.log(menuItems);
      dispatch('core/block-editor').insertBlock(newMenuItem, menuItems.length, clientId, true);
      this.forceUpdate();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isSelected = _this$props2.isSelected,
          clientId = _this$props2.clientId,
          selectedParentClientId = _this$props2.selectedParentClientId;
      var menuItems = Editor_select('core/block-editor').getBlocksByClientId(clientId)[0].innerBlocks;
      console.log(menuItems);
      return Object(external_this_wp_element_["createElement"])(Editor_Fragment, null, Object(external_this_wp_element_["createElement"])("div", null, Object(external_this_wp_element_["createElement"])("div", {
        className: "menu-items"
      }, menuItems.map(function (item, index) {
        return Object(external_this_wp_element_["createElement"])("p", null, item.clientId);
      })), Object(external_this_wp_element_["createElement"])(IconButton, {
        icon: "insert",
        label: js_Editor_('Add New Menu Item'),
        labelPosition: "bottom",
        onClick: this.insertNewItem
      }, js_Editor_('Add New Menu Item'))));
    }
  }]);

  return Editor;
}(Editor_Component);

/* harmony default export */ var menu_section_column_js_Editor = (js_Editor_Editor);
// CONCATENATED MODULE: ./src/menu-blocks/menu-section-column/index.js



/**
 * WordPress dependencies
 */

var menu_section_column_ = wp.i18n.__;
var menu_section_column_registerBlockType = wp.blocks.registerBlockType;
var menu_section_column_RichText = wp.editor.RichText;
menu_section_column_registerBlockType('dining-dashboard/menu-section-column', {
  title: menu_section_column_('Section Column'),
  description: menu_section_column_('A column within a menu section'),
  icon: utils_Icons.MenuSectionColumn,
  category: 'menu-blocks',
  attributes: {
    width: {
      type: 'string'
    },
    showInserter: {
      type: 'boolean',
      default: true
    }
  },
  supports: {
    inserter: false
  },
  edit: menu_section_column_js_Editor,
  save: function save(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className;
    var sectionTitle = attributes.sectionTitle;
    return Object(external_this_wp_element_["createElement"])(menu_section_column_RichText.sectionTitle, {
      tagName: "h3"
    });
  }
});
// CONCATENATED MODULE: ./src/menu-blocks/index.js




/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(20);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 47 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(47);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(48),
    keys = __webpack_require__(22);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(49),
    createBaseEach = __webpack_require__(46);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(50),
    isArrayLike = __webpack_require__(20);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(28);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 53 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(53),
    basePropertyDeep = __webpack_require__(52),
    isKey = __webpack_require__(19),
    toKey = __webpack_require__(6);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(27),
    isArguments = __webpack_require__(35),
    isArray = __webpack_require__(1),
    isIndex = __webpack_require__(32),
    isLength = __webpack_require__(21),
    toKey = __webpack_require__(6);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(57),
    hasPath = __webpack_require__(56);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    arrayMap = __webpack_require__(43),
    isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(18);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(59);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(23);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(61);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(62);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(28);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(37),
    get = __webpack_require__(64),
    hasIn = __webpack_require__(58),
    isKey = __webpack_require__(19),
    isStrictComparable = __webpack_require__(30),
    matchesStrictComparable = __webpack_require__(29),
    toKey = __webpack_require__(6);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(30),
    keys = __webpack_require__(22);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(2);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(70),
    Map = __webpack_require__(25),
    Promise = __webpack_require__(69),
    Set = __webpack_require__(68),
    WeakMap = __webpack_require__(67),
    baseGetTag = __webpack_require__(5),
    toSource = __webpack_require__(38);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 72 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(72);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 74 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(74),
    nativeKeys = __webpack_require__(73);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(39);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)(module)))

/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isLength = __webpack_require__(21),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(4);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 81 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(81),
    isArguments = __webpack_require__(35),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(34),
    isIndex = __webpack_require__(32),
    isTypedArray = __webpack_require__(31);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(84),
    stubArray = __webpack_require__(83);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(86),
    isArray = __webpack_require__(1);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(87),
    getSymbols = __webpack_require__(85),
    keys = __webpack_require__(22);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(88);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 90 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 91 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9),
    Uint8Array = __webpack_require__(92),
    eq = __webpack_require__(41),
    equalArrays = __webpack_require__(36),
    mapToArray = __webpack_require__(91),
    setToArray = __webpack_require__(90);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 94 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(23),
    setCacheAdd = __webpack_require__(97),
    setCacheHas = __webpack_require__(96);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(42),
    equalArrays = __webpack_require__(36),
    equalByTag = __webpack_require__(93),
    equalObjects = __webpack_require__(89),
    getTag = __webpack_require__(71),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(34),
    isTypedArray = __webpack_require__(31);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(7);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(7);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(7);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 103 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(7);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(8);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(8);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(109),
    hashDelete = __webpack_require__(108),
    hashGet = __webpack_require__(107),
    hashHas = __webpack_require__(106),
    hashSet = __webpack_require__(105);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(110),
    ListCache = __webpack_require__(11),
    Map = __webpack_require__(25);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(2);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(113);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(9);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 117 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(40),
    isMasked = __webpack_require__(114),
    isObject = __webpack_require__(24),
    toSource = __webpack_require__(38);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(11),
    Map = __webpack_require__(25),
    MapCache = __webpack_require__(23);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 122 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(11);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(42),
    baseIsEqual = __webpack_require__(37);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(129),
    getMatchData = __webpack_require__(66),
    matchesStrictComparable = __webpack_require__(29);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(130),
    baseMatchesProperty = __webpack_require__(65),
    identity = __webpack_require__(55),
    isArray = __webpack_require__(1),
    property = __webpack_require__(54);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 132 */
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
/* 133 */
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