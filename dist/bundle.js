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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var url = exports.url = 'https://api.clashroyale.com/v1/';
var urlJoan = exports.urlJoan = 'https://esliceu.codiblau.com/clashRoyale.php';
var token = exports.token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQxMDUxOWM0LTFkODQtNDJjNi04YzY1LWZkNjcxOTQ0ZWZkOCIsImlhdCI6MTU0NTA2MzU3Nywic3ViIjoiZGV2ZWxvcGVyL2VjNWI5MjQyLTA2NzAtMjcwZi00ZWUxLTdhMGY1MDA3YTY0MiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNS4xOTQuNzIuMTMiXSwidHlwZSI6ImNsaWVudCJ9XX0.WMceu7E5rTjLHGUjyMgao1NOP3Yh9sann8WmRMHJ46KkQBFDnkdwo7EJ5yMxd-r9wHH3qFOA1rZb9iup_ABQkQ';
var headTable = exports.headTable = '<table id="table-id"><tr><th>Nombre</th><th>Tag</th><th>Miembros</th><th>Nivel de cofre</th><th>Puntuacion</th><th>Pais</th></tr>';
var inputName = exports.inputName = document.getElementById('clanName');
var inputTag = exports.inputTag = document.getElementById('clanTag');
var inputs = exports.inputs = document.querySelectorAll('input');
var options = exports.options = document.querySelector('.mdc-list');
var list = exports.list = document.getElementById('list');
var button = exports.button = document.getElementById('search');
var selector = exports.selector = document.querySelector('.mdc-select__selected-text');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Top App Bar
 *
 * Defines the shape of the adapter expected by the foundation. Implement this
 * adapter to integrate the Top App Bar into your framework. See
 * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
 * for more information.
 *
 * @record
 */
var MDCTopAppBarAdapter = function () {
  function MDCTopAppBarAdapter() {
    _classCallCheck(this, MDCTopAppBarAdapter);
  }

  _createClass(MDCTopAppBarAdapter, [{
    key: "addClass",

    /**
     * Adds a class to the root Element.
     * @param {string} className
     */
    value: function addClass(className) {}

    /**
     * Removes a class from the root Element.
     * @param {string} className
     */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /**
     * Returns true if the root Element contains the given class.
     * @param {string} className
     * @return {boolean}
     */

  }, {
    key: "hasClass",
    value: function hasClass(className) {}

    /**
     * Sets the specified inline style property on the root Element to the given value.
     * @param {string} property
     * @param {string} value
     */

  }, {
    key: "setStyle",
    value: function setStyle(property, value) {}

    /**
     * Gets the height of the top app bar.
     * @return {number}
     */

  }, {
    key: "getTopAppBarHeight",
    value: function getTopAppBarHeight() {}

    /**
     * Registers an event handler on the navigation icon element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "registerNavigationIconInteractionHandler",
    value: function registerNavigationIconInteractionHandler(type, handler) {}

    /**
     * Deregisters an event handler on the navigation icon element for a given event.
     * @param {string} type
     * @param {function(!Event): undefined} handler
     */

  }, {
    key: "deregisterNavigationIconInteractionHandler",
    value: function deregisterNavigationIconInteractionHandler(type, handler) {}

    /**
     * Emits an event when the navigation icon is clicked.
     */

  }, {
    key: "notifyNavigationIconClicked",
    value: function notifyNavigationIconClicked() {}

    /** @param {function(!Event)} handler */

  }, {
    key: "registerScrollHandler",
    value: function registerScrollHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterScrollHandler",
    value: function deregisterScrollHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /** @param {function(!Event)} handler */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /** @return {number} */

  }, {
    key: "getViewportScrollY",
    value: function getViewportScrollY() {}

    /** @return {number} */

  }, {
    key: "getTotalActionItems",
    value: function getTotalActionItems() {}
  }]);

  return MDCTopAppBarAdapter;
}();

exports.default = MDCTopAppBarAdapter;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/** @enum {string} */
var cssClasses = {
  FIXED_CLASS: 'mdc-top-app-bar--fixed',
  FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
  SHORT_CLASS: 'mdc-top-app-bar--short',
  SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item',
  SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed'
};

/** @enum {number} */
var numbers = {
  DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
  MAX_TOP_APP_BAR_HEIGHT: 128
};

/** @enum {string} */
var strings = {
  ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
  NAVIGATION_EVENT: 'MDCTopAppBar:nav',
  NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
  ROOT_SELECTOR: '.mdc-top-app-bar',
  TITLE_SELECTOR: '.mdc-top-app-bar__title'
};

exports.strings = strings;
exports.cssClasses = cssClasses;
exports.numbers = numbers;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _adapter = __webpack_require__(1);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(6);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCFoundation<!MDCTopAppBarAdapter>}
 */
var MDCTopAppBarBaseFoundation = function (_MDCFoundation) {
  _inherits(MDCTopAppBarBaseFoundation, _MDCFoundation);

  _createClass(MDCTopAppBarBaseFoundation, null, [{
    key: 'strings',

    /** @return enum {string} */
    get: function get() {
      return _constants.strings;
    }

    /** @return enum {string} */

  }, {
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }

    /** @return enum {number} */

  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }

    /**
     * {@see MDCTopAppBarAdapter} for typing information on parameters and return
     * types.
     * @return {!MDCTopAppBarAdapter}
     */

  }, {
    key: 'defaultAdapter',
    get: function get() {
      return (/** @type {!MDCTopAppBarAdapter} */{
          hasClass: function hasClass() /* className: string */{},
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setStyle: function setStyle() /* property: string, value: string */{},
          getTopAppBarHeight: function getTopAppBarHeight() {},
          registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler() /* type: string, handler: EventListener */{},
          notifyNavigationIconClicked: function notifyNavigationIconClicked() {},
          registerScrollHandler: function registerScrollHandler() /* handler: EventListener */{},
          deregisterScrollHandler: function deregisterScrollHandler() /* handler: EventListener */{},
          registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
          deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
          getViewportScrollY: function getViewportScrollY() {
            return (/* number */0
            );
          },
          getTotalActionItems: function getTotalActionItems() {
            return (/* number */0
            );
          }
        }
      );
    }

    /**
     * @param {!MDCTopAppBarAdapter} adapter
     */

  }]);

  function MDCTopAppBarBaseFoundation( /** @type {!MDCTopAppBarAdapter} */adapter) {
    _classCallCheck(this, MDCTopAppBarBaseFoundation);

    var _this = _possibleConstructorReturn(this, (MDCTopAppBarBaseFoundation.__proto__ || Object.getPrototypeOf(MDCTopAppBarBaseFoundation)).call(this, _extends(MDCTopAppBarBaseFoundation.defaultAdapter, adapter)));

    _this.navClickHandler_ = function () {
      return _this.adapter_.notifyNavigationIconClicked();
    };

    _this.scrollHandler_ = function () {};
    return _this;
  }

  _createClass(MDCTopAppBarBaseFoundation, [{
    key: 'init',
    value: function init() {
      this.adapter_.registerNavigationIconInteractionHandler('click', this.navClickHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.adapter_.deregisterNavigationIconInteractionHandler('click', this.navClickHandler_);
    }
  }, {
    key: 'initScrollHandler',
    value: function initScrollHandler() {
      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  }, {
    key: 'destroyScrollHandler',
    value: function destroyScrollHandler() {
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }
  }]);

  return MDCTopAppBarBaseFoundation;
}(_foundation2.default);

exports.default = MDCTopAppBarBaseFoundation;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Clan = Clan;
function Clan(tag, name, nMember, chestLvl, score, country) {
    this.name = name;
    this.tag = tag;
    this.nMember = nMember;
    this.chestLvl = chestLvl;
    this.score = score;
    this.country = country || "Sin País";
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * @template A
 */
var MDCFoundation = function () {
  _createClass(MDCFoundation, null, [{
    key: "cssClasses",

    /** @return enum{cssClasses} */
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports every
      // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
      return {};
    }

    /** @return enum{strings} */

  }, {
    key: "strings",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
      return {};
    }

    /** @return enum{numbers} */

  }, {
    key: "numbers",
    get: function get() {
      // Classes extending MDCFoundation should implement this method to return an object which exports all
      // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
      return {};
    }

    /** @return {!Object} */

  }, {
    key: "defaultAdapter",
    get: function get() {
      // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
      // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
      // validation.
      return {};
    }

    /**
     * @param {A=} adapter
     */

  }]);

  function MDCFoundation() {
    var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MDCFoundation);

    /** @protected {!A} */
    this.adapter_ = adapter;
  }

  _createClass(MDCFoundation, [{
    key: "init",
    value: function init() {
      // Subclasses should override this method to perform initialization routines (registering events, etc.)
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
    }
  }]);

  return MDCFoundation;
}();

exports.default = MDCFoundation;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.locationsFilter = locationsFilter;
exports.arrayCheck = arrayCheck;

var _constants = __webpack_require__(0);

var _Clan = __webpack_require__(4);

function locationsFilter(locations) {
    var location = locations.filter(function (loc) {
        if (loc.name === _constants.selector.innerHTML) {
            return loc;
        }
    });
    return location[0].id;
}

function arrayCheck(clans) {
    if (clans.items.length > 0) {
        clans = clans.items.map(function (clan) {
            return new _Clan.Clan(clan.tag, clan.name, clan.members, clan.clanChestLevel, clan.clanScore, clan.location.name);
        });
        return clans;
    } else return null;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Location = Location;
function Location(id, name, isCountry, countryCode) {
    this.id = id;
    this.name = name;
    this.isCountry = isCountry || false;
    this.countryCode = countryCode || false;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

var _foundation = __webpack_require__(6);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @template F
 */
var MDCComponent = function () {
  _createClass(MDCComponent, null, [{
    key: 'attachTo',

    /**
     * @param {!Element} root
     * @return {!MDCComponent}
     */
    value: function attachTo(root) {
      // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
      // returns an instantiated component with its root set to that element. Also note that in the cases of
      // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
      // from getDefaultFoundation().
      return new MDCComponent(root, new _foundation2.default());
    }

    /**
     * @param {!Element} root
     * @param {F=} foundation
     * @param {...?} args
     */

  }]);

  function MDCComponent(root) {
    var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

    _classCallCheck(this, MDCComponent);

    /** @protected {!Element} */
    this.root_ = root;

    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      args[_key - 2] = arguments[_key];
    }

    this.initialize.apply(this, args);
    // Note that we initialize foundation here and not within the constructor's default param so that
    // this.root_ is defined and can be used within the foundation class.
    /** @protected {!F} */
    this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
    this.foundation_.init();
    this.initialSyncWithDOM();
  }

  _createClass(MDCComponent, [{
    key: 'initialize',
    value: function initialize() /* ...args */{}
    // Subclasses can override this to do any additional setup work that would be considered part of a
    // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
    // initialized. Any additional arguments besides root and foundation will be passed in here.


    /**
     * @return {!F} foundation
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      // Subclasses must override this method to return a properly configured foundation class for the
      // component.
      throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
    }
  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      // Subclasses should override this method if they need to perform work to synchronize with a host DOM
      // object. An example of this would be a form control wrapper that needs to synchronize its internal state
      // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
      // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      // Subclasses may implement this method to release any resources / deregister any listeners they have
      // attached. An example of this might be deregistering a resize event from the window object.
      this.foundation_.destroy();
    }

    /**
     * Wrapper method to add an event listener to the component's root element. This is most useful when
     * listening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'listen',
    value: function listen(evtType, handler) {
      this.root_.addEventListener(evtType, handler);
    }

    /**
     * Wrapper method to remove an event listener to the component's root element. This is most useful when
     * unlistening for custom events.
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: 'unlisten',
    value: function unlisten(evtType, handler) {
      this.root_.removeEventListener(evtType, handler);
    }

    /**
     * Fires a cross-browser-compatible custom event from the component root of the given type,
     * with the given data.
     * @param {string} evtType
     * @param {!Object} evtData
     * @param {boolean=} shouldBubble
     */

  }, {
    key: 'emit',
    value: function emit(evtType, evtData) {
      var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      var evt = void 0;
      if (typeof CustomEvent === 'function') {
        evt = new CustomEvent(evtType, {
          detail: evtData,
          bubbles: shouldBubble
        });
      } else {
        evt = document.createEvent('CustomEvent');
        evt.initCustomEvent(evtType, shouldBubble, false, evtData);
      }

      this.root_.dispatchEvent(evt);
    }
  }]);

  return MDCComponent;
}();

exports.default = MDCComponent;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/* eslint no-unused-vars: [2, {"args": "none"}] */

/**
 * Adapter for MDC Ripple. Provides an interface for managing
 * - classes
 * - dom
 * - CSS variables
 * - position
 * - dimensions
 * - scroll position
 * - event handlers
 * - unbounded, active and disabled states
 *
 * Additionally, provides type information for the adapter to the Closure
 * compiler.
 *
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 *
 * @record
 */
var MDCRippleAdapter = function () {
  function MDCRippleAdapter() {
    _classCallCheck(this, MDCRippleAdapter);
  }

  _createClass(MDCRippleAdapter, [{
    key: "browserSupportsCssVars",

    /** @return {boolean} */
    value: function browserSupportsCssVars() {}

    /** @return {boolean} */

  }, {
    key: "isUnbounded",
    value: function isUnbounded() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceActive",
    value: function isSurfaceActive() {}

    /** @return {boolean} */

  }, {
    key: "isSurfaceDisabled",
    value: function isSurfaceDisabled() {}

    /** @param {string} className */

  }, {
    key: "addClass",
    value: function addClass(className) {}

    /** @param {string} className */

  }, {
    key: "removeClass",
    value: function removeClass(className) {}

    /** @param {!EventTarget} target */

  }, {
    key: "containsEventTarget",
    value: function containsEventTarget(target) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerInteractionHandler",
    value: function registerInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterInteractionHandler",
    value: function deregisterInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "registerDocumentInteractionHandler",
    value: function registerDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {string} evtType
     * @param {!Function} handler
     */

  }, {
    key: "deregisterDocumentInteractionHandler",
    value: function deregisterDocumentInteractionHandler(evtType, handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "registerResizeHandler",
    value: function registerResizeHandler(handler) {}

    /**
     * @param {!Function} handler
     */

  }, {
    key: "deregisterResizeHandler",
    value: function deregisterResizeHandler(handler) {}

    /**
     * @param {string} varName
     * @param {?number|string} value
     */

  }, {
    key: "updateCssVariable",
    value: function updateCssVariable(varName, value) {}

    /** @return {!ClientRect} */

  }, {
    key: "computeBoundingRect",
    value: function computeBoundingRect() {}

    /** @return {{x: number, y: number}} */

  }, {
    key: "getWindowPageOffset",
    value: function getWindowPageOffset() {}
  }]);

  return MDCRippleAdapter;
}();

exports.default = MDCRippleAdapter;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

/**
 * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
 * @private {boolean|undefined}
 */
var supportsCssVariables_ = void 0;

/**
 * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
 * @private {boolean|undefined}
 */
var supportsPassive_ = void 0;

/**
 * @param {!Window} windowObj
 * @return {boolean}
 */
function detectEdgePseudoVarBug(windowObj) {
  // Detect versions of Edge with buggy var() support
  // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
  var document = windowObj.document;
  var node = document.createElement('div');
  node.className = 'mdc-ripple-surface--test-edge-var-bug';
  document.body.appendChild(node);

  // The bug exists if ::before style ends up propagating to the parent element.
  // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
  // but Firefox is known to support CSS custom properties correctly.
  // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = windowObj.getComputedStyle(node);
  var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
  node.remove();
  return hasPseudoVarBug;
}

/**
 * @param {!Window} windowObj
 * @param {boolean=} forceRefresh
 * @return {boolean|undefined}
 */

function supportsCssVariables(windowObj) {
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var supportsCssVariables = supportsCssVariables_;
  if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
    return supportsCssVariables;
  }

  var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
  if (!supportsFunctionPresent) {
    return;
  }

  var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
  // See: https://bugs.webkit.org/show_bug.cgi?id=154669
  // See: README section on Safari
  var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

  if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
    supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
  } else {
    supportsCssVariables = false;
  }

  if (!forceRefresh) {
    supportsCssVariables_ = supportsCssVariables;
  }
  return supportsCssVariables;
}

//
/**
 * Determine whether the current browser supports passive event listeners, and if so, use them.
 * @param {!Window=} globalObj
 * @param {boolean=} forceRefresh
 * @return {boolean|!EventListenerOptions}
 */
function applyPassive() {
  var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (supportsPassive_ === undefined || forceRefresh) {
    var isSupported = false;
    try {
      globalObj.document.addEventListener('test', null, { get passive() {
          isSupported = true;
          return isSupported;
        } });
    } catch (e) {}

    supportsPassive_ = isSupported;
  }

  return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
}

/**
 * @param {!Object} HTMLElementPrototype
 * @return {string}
 */
function getMatchesProperty(HTMLElementPrototype) {
  /**
   * Order is important because we return the first existing method we find.
   * Do not change the order of the items in the below array.
   */
  var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
  var method = 'matches';
  for (var i = 0; i < matchesMethods.length; i++) {
    var matchesMethod = matchesMethods[i];
    if (matchesMethod in HTMLElementPrototype) {
      method = matchesMethod;
      break;
    }
  }

  return method;
}

/**
 * @param {!Event} ev
 * @param {{x: number, y: number}} pageOffset
 * @param {!ClientRect} clientRect
 * @return {{x: number, y: number}}
 */
function getNormalizedEventCoords(ev, pageOffset, clientRect) {
  var x = pageOffset.x,
      y = pageOffset.y;

  var documentX = x + clientRect.left;
  var documentY = y + clientRect.top;

  var normalizedX = void 0;
  var normalizedY = void 0;
  // Determine touch point relative to the ripple container.
  if (ev.type === 'touchstart') {
    ev = /** @type {!TouchEvent} */ev;
    normalizedX = ev.changedTouches[0].pageX - documentX;
    normalizedY = ev.changedTouches[0].pageY - documentY;
  } else {
    ev = /** @type {!MouseEvent} */ev;
    normalizedX = ev.pageX - documentX;
    normalizedY = ev.pageY - documentY;
  }

  return { x: normalizedX, y: normalizedY };
}

exports.supportsCssVariables = supportsCssVariables;
exports.applyPassive = applyPassive;
exports.getMatchesProperty = getMatchesProperty;
exports.getNormalizedEventCoords = getNormalizedEventCoords;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(13);
__webpack_require__(14);
__webpack_require__(15);
__webpack_require__(4);
__webpack_require__(8);
__webpack_require__(16);
__webpack_require__(0);
__webpack_require__(7);
module.exports = __webpack_require__(27);


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./dist/bundle.css";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSpanishClans = getSpanishClans;
exports.getClanByName = getClanByName;
exports.getClanByTag = getClanByTag;
exports.getClanByLocation = getClanByLocation;
exports.getClanByLocationAndName = getClanByLocationAndName;

var _Clan = __webpack_require__(4);

var _constants = __webpack_require__(0);

var _auxFunctions = __webpack_require__(7);

async function getSpanishClans() {
    var objTract = {
        MethodName: 'sendAPI',
        params: {
            url: _constants.url + 'clans?locationId=57000218',
            token: _constants.token
        }
    };

    var response = await fetch(_constants.urlJoan, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    });

    var clans = await response.json();
    clans = clans.items.map(function (clan) {
        return new _Clan.Clan(clan.tag, clan.name, clan.members, clan.clanChestLevel, clan.clanScore, clan.location.name);
    });
    return clans;
}

async function getClanByName() {
    var name = _constants.inputName.value;
    name = name.split(' ').join('%20');

    var objTract = {
        MethodName: 'sendAPI',
        params: {
            url: _constants.url + 'clans?name=' + name,
            token: _constants.token
        }
    };

    var response = await fetch(_constants.urlJoan, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    });

    var clans = await response.json();
    return (0, _auxFunctions.arrayCheck)(clans);
}

async function getClanByTag() {
    var array = [];
    var tag = new URLSearchParams(document.location.search).get("tag");
    if (tag === null) tag = _constants.inputTag.value;
    tag = tag.split('#').join('%23');
    var objTract = {
        MethodName: 'sendAPI',
        params: {
            url: _constants.url + 'clans/' + tag,
            token: _constants.token
        }
    };

    var response = await fetch(_constants.urlJoan, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    });
    var clan = await response.json();
    if (clan.reason !== "notFound") {
        var clanForPush = new _Clan.Clan(clan.tag, clan.name, clan.members, clan.clanChestLevel, clan.clanScore, clan.location.name);
        array.push(clanForPush);
        return array;
    } else return null;
}

async function getClanByLocation(idLocation) {
    var objTract = {
        MethodName: 'sendAPI',
        params: {
            url: _constants.url + 'clans?locationId=' + idLocation,
            token: _constants.token
        }
    };

    var response = await fetch(_constants.urlJoan, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    });

    var clans = await response.json();
    return (0, _auxFunctions.arrayCheck)(clans);
}

async function getClanByLocationAndName(idLocation) {
    var name = _constants.inputName.value;
    name = name.split(' ').join('%20');
    var objTract = {
        MethodName: 'sendAPI',
        params: {
            url: _constants.url + 'clans?name=' + name + '&locationId=' + idLocation,
            token: _constants.token
        }
    };

    var response = await fetch(_constants.urlJoan, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    });

    var clans = await response.json();
    return (0, _auxFunctions.arrayCheck)(clans);
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getLocations = getLocations;

var _Location = __webpack_require__(8);

var _constants = __webpack_require__(0);

async function getLocations() {
    var objTract = {
        MethodName: 'sendAPI',
        params: {
            url: _constants.url + 'locations',
            token: _constants.token
        }
    };

    var response = await fetch(_constants.urlJoan, {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: JSON.stringify(objTract)
    });

    var locations = await response.json();
    locations = locations.items.map(function (location) {
        return new _Location.Location(location.id, location.name, location.isCountry, location.countryCode);
    });
    return locations;
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constants = __webpack_require__(0);

var _textfield = __webpack_require__(17);

var _index = __webpack_require__(18);

var _ripple = __webpack_require__(25);

var _select = __webpack_require__(26);

new _textfield.MDCTextField(document.querySelector('.mdc-text-field'));
var topAppBarElement = document.querySelector('.mdc-top-app-bar');
new _index.MDCTopAppBar(topAppBarElement);
new _ripple.MDCRipple(document.querySelector('.mdc-button'));

var select = new _select.MDCSelect(document.querySelector('.mdc-select'));
document.querySelectorAll('.mdc-text-field').forEach(function (e) {
    new _textfield.MDCTextField(e);
});

select.listen('MDCSelect:change', function () {
    if (_constants.inputTag.value) {
        _constants.inputTag.value = "";
        _constants.button.disabled = false;
    }
    _constants.button.name = select.value;
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["textfield"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["textfield"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 154);
      /******/
    }(
    /************************************************************************/
    /******/{

      /***/0:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @template A
         */
        var MDCFoundation = function () {
          _createClass(MDCFoundation, null, [{
            key: "cssClasses",

            /** @return enum{cssClasses} */
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports every
              // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
              return {};
            }

            /** @return enum{strings} */

          }, {
            key: "strings",
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
              return {};
            }

            /** @return enum{numbers} */

          }, {
            key: "numbers",
            get: function get() {
              // Classes extending MDCFoundation should implement this method to return an object which exports all
              // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
              return {};
            }

            /** @return {!Object} */

          }, {
            key: "defaultAdapter",
            get: function get() {
              // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
              // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
              // validation.
              return {};
            }

            /**
             * @param {A=} adapter
             */

          }]);

          function MDCFoundation() {
            var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            _classCallCheck(this, MDCFoundation);

            /** @protected {!A} */
            this.adapter_ = adapter;
          }

          _createClass(MDCFoundation, [{
            key: "init",
            value: function init() {
              // Subclasses should override this method to perform initialization routines (registering events, etc.)
            }
          }, {
            key: "destroy",
            value: function destroy() {
              // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
            }
          }]);

          return MDCFoundation;
        }();

        /* harmony default export */__webpack_exports__["a"] = MDCFoundation;

        /***/
      },

      /***/1:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @template F
         */

        var MDCComponent = function () {
          _createClass(MDCComponent, null, [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCComponent}
             */
            value: function attachTo(root) {
              // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
              // returns an instantiated component with its root set to that element. Also note that in the cases of
              // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
              // from getDefaultFoundation().
              return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
            }

            /**
             * @param {!Element} root
             * @param {F=} foundation
             * @param {...?} args
             */

          }]);

          function MDCComponent(root) {
            var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

            _classCallCheck(this, MDCComponent);

            /** @protected {!Element} */
            this.root_ = root;

            for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
              args[_key - 2] = arguments[_key];
            }

            this.initialize.apply(this, args);
            // Note that we initialize foundation here and not within the constructor's default param so that
            // this.root_ is defined and can be used within the foundation class.
            /** @protected {!F} */
            this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
            this.foundation_.init();
            this.initialSyncWithDOM();
          }

          _createClass(MDCComponent, [{
            key: 'initialize',
            value: function initialize() /* ...args */{}
            // Subclasses can override this to do any additional setup work that would be considered part of a
            // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
            // initialized. Any additional arguments besides root and foundation will be passed in here.


            /**
             * @return {!F} foundation
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              // Subclasses must override this method to return a properly configured foundation class for the
              // component.
              throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
            }
          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              // Subclasses should override this method if they need to perform work to synchronize with a host DOM
              // object. An example of this would be a form control wrapper that needs to synchronize its internal state
              // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
              // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              // Subclasses may implement this method to release any resources / deregister any listeners they have
              // attached. An example of this might be deregistering a resize event from the window object.
              this.foundation_.destroy();
            }

            /**
             * Wrapper method to add an event listener to the component's root element. This is most useful when
             * listening for custom events.
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: 'listen',
            value: function listen(evtType, handler) {
              this.root_.addEventListener(evtType, handler);
            }

            /**
             * Wrapper method to remove an event listener to the component's root element. This is most useful when
             * unlistening for custom events.
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: 'unlisten',
            value: function unlisten(evtType, handler) {
              this.root_.removeEventListener(evtType, handler);
            }

            /**
             * Fires a cross-browser-compatible custom event from the component root of the given type,
             * with the given data.
             * @param {string} evtType
             * @param {!Object} evtData
             * @param {boolean=} shouldBubble
             */

          }, {
            key: 'emit',
            value: function emit(evtType, evtData) {
              var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

              var evt = void 0;
              if (typeof CustomEvent === 'function') {
                evt = new CustomEvent(evtType, {
                  detail: evtData,
                  bubbles: shouldBubble
                });
              } else {
                evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(evtType, shouldBubble, false, evtData);
              }

              this.root_.dispatchEvent(evt);
            }
          }]);

          return MDCComponent;
        }();

        /* harmony default export */__webpack_exports__["a"] = MDCComponent;

        /***/
      },

      /***/14:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Floating Label.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the floating label into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCFloatingLabelAdapter = function () {
          function MDCFloatingLabelAdapter() {
            _classCallCheck(this, MDCFloatingLabelAdapter);
          }

          _createClass(MDCFloatingLabelAdapter, [{
            key: "addClass",

            /**
             * Adds a class to the label element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the label element.
             * @param {string} className
             */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /**
             * Returns the width of the label element.
             * @return {number}
             */

          }, {
            key: "getWidth",
            value: function getWidth() {}

            /**
             * Registers an event listener on the root element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}

            /**
             * Deregisters an event listener on the root element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}
          }]);

          return MDCFloatingLabelAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCFloatingLabelAdapter;

        /***/
      },

      /***/154:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextField", function () {
          return MDCTextField;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__ = __webpack_require__(4);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__material_ripple_util__ = __webpack_require__(2);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(82);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__adapter__ = __webpack_require__(83);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__foundation__ = __webpack_require__(157);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__ = __webpack_require__(31);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__helper_text_index__ = __webpack_require__(158);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__icon_index__ = __webpack_require__(159);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__material_floating_label_index__ = __webpack_require__(17);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__material_notched_outline_index__ = __webpack_require__(36);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_5__foundation__["a"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperText", function () {
          return __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldHelperTextFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["b"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldIcon", function () {
          return __WEBPACK_IMPORTED_MODULE_8__icon_index__["a"];
        });
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCTextFieldIconFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_8__icon_index__["b"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        var _get = function get(object, property, receiver) {
          if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
            var parent = Object.getPrototypeOf(object);if (parent === null) {
              return undefined;
            } else {
              return get(parent, property, receiver);
            }
          } else if ("value" in desc) {
            return desc.value;
          } else {
            var getter = desc.get;if (getter === undefined) {
              return undefined;
            }return getter.call(receiver);
          }
        };

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint-disable no-unused-vars */

        /* eslint-enable no-unused-vars */

        /* eslint-disable no-unused-vars */

        /* eslint-enable no-unused-vars */

        /**
         * @extends {MDCComponent<!MDCTextFieldFoundation>}
         * @final
         */

        var MDCTextField = function (_MDCComponent) {
          _inherits(MDCTextField, _MDCComponent);

          /**
           * @param {...?} args
           */
          function MDCTextField() {
            var _ref;

            _classCallCheck(this, MDCTextField);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @private {?Element} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCTextField.__proto__ || Object.getPrototypeOf(MDCTextField)).call.apply(_ref, [this].concat(args)));

            _this.input_;
            /** @type {?MDCRipple} */
            _this.ripple;
            /** @private {?MDCLineRipple} */
            _this.lineRipple_;
            /** @private {?MDCTextFieldHelperText} */
            _this.helperText_;
            /** @private {?MDCTextFieldIcon} */
            _this.leadingIcon_;
            /** @private {?MDCTextFieldIcon} */
            _this.trailingIcon_;
            /** @private {?MDCFloatingLabel} */
            _this.label_;
            /** @private {?MDCNotchedOutline} */
            _this.outline_;
            return _this;
          }

          /**
           * @param {!Element} root
           * @return {!MDCTextField}
           */

          _createClass(MDCTextField, [{
            key: 'initialize',

            /**
             * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
             * creates a new MDCRipple.
             * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
             * creates a new MDCLineRipple.
             * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
             * creates a new MDCTextFieldHelperText.
             * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
             * creates a new MDCTextFieldIcon.
             * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
             * creates a new MDCFloatingLabel.
             * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
             * creates a new MDCNotchedOutline.
             */
            value: function initialize() {
              var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
                return new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"](el, foundation);
              };
              var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_6__material_line_ripple_index__["MDCLineRipple"](el);
              };
              var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_7__helper_text_index__["a" /* MDCTextFieldHelperText */](el);
              };
              var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_8__icon_index__["a" /* MDCTextFieldIcon */](el);
              };

              var _this2 = this;

              var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_9__material_floating_label_index__["MDCFloatingLabel"](el);
              };
              var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
                return new __WEBPACK_IMPORTED_MODULE_10__material_notched_outline_index__["MDCNotchedOutline"](el);
              };

              this.input_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].INPUT_SELECTOR);
              var labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].LABEL_SELECTOR);
              if (labelElement) {
                this.label_ = labelFactory(labelElement);
              }
              var lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].LINE_RIPPLE_SELECTOR);
              if (lineRippleElement) {
                this.lineRipple_ = lineRippleFactory(lineRippleElement);
              }
              var outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].OUTLINE_SELECTOR);
              if (outlineElement) {
                this.outline_ = outlineFactory(outlineElement);
              }
              if (this.input_.hasAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].ARIA_CONTROLS)) {
                var helperTextElement = document.getElementById(this.input_.getAttribute(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].ARIA_CONTROLS));
                if (helperTextElement) {
                  this.helperText_ = helperTextFactory(helperTextElement);
                }
              }
              var iconElements = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].ICON_SELECTOR);
              if (iconElements.length > 0) {
                if (iconElements.length > 1) {
                  // Has both icons.
                  this.leadingIcon_ = iconFactory(iconElements[0]);
                  this.trailingIcon_ = iconFactory(iconElements[1]);
                } else {
                  if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* cssClasses */].WITH_LEADING_ICON)) {
                    this.leadingIcon_ = iconFactory(iconElements[0]);
                  } else {
                    this.trailingIcon_ = iconFactory(iconElements[0]);
                  }
                }
              }

              this.ripple = null;
              if (!this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* cssClasses */].TEXTAREA) && !this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_3__constants__["c" /* cssClasses */].OUTLINED)) {
                var MATCHES = Object(__WEBPACK_IMPORTED_MODULE_2__material_ripple_util__["getMatchesProperty"])(HTMLElement.prototype);
                var adapter = _extends(__WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRipple"].createAdapter( /** @type {!RippleCapableSurface} */this), {
                  isSurfaceActive: function isSurfaceActive() {
                    return _this2.input_[MATCHES](':active');
                  },
                  registerInteractionHandler: function registerInteractionHandler(type, handler) {
                    return _this2.input_.addEventListener(type, handler);
                  },
                  deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                    return _this2.input_.removeEventListener(type, handler);
                  }
                });
                var foundation = new __WEBPACK_IMPORTED_MODULE_1__material_ripple_index__["MDCRippleFoundation"](adapter);
                this.ripple = rippleFactory(this.root_, foundation);
              }
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              if (this.ripple) {
                this.ripple.destroy();
              }
              if (this.lineRipple_) {
                this.lineRipple_.destroy();
              }
              if (this.helperText_) {
                this.helperText_.destroy();
              }
              if (this.leadingIcon_) {
                this.leadingIcon_.destroy();
              }
              if (this.trailingIcon_) {
                this.trailingIcon_.destroy();
              }
              if (this.label_) {
                this.label_.destroy();
              }
              if (this.outline_) {
                this.outline_.destroy();
              }
              _get(MDCTextField.prototype.__proto__ || Object.getPrototypeOf(MDCTextField.prototype), 'destroy', this).call(this);
            }

            /**
             * Initiliazes the Text Field's internal state based on the environment's
             * state.
             */

          }, {
            key: 'initialSyncWithDom',
            value: function initialSyncWithDom() {
              this.disabled = this.input_.disabled;
            }

            /**
             * @return {string} The value of the input.
             */

          }, {
            key: 'focus',

            /**
             * Focuses the input element.
             */
            value: function focus() {
              this.input_.focus();
            }

            /**
             * Recomputes the outline SVG path for the outline element.
             */

          }, {
            key: 'layout',
            value: function layout() {
              var openNotch = this.foundation_.shouldFloat;
              this.foundation_.notchOutline(openNotch);
            }

            /**
             * @return {!MDCTextFieldFoundation}
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this3 = this;

              return new __WEBPACK_IMPORTED_MODULE_5__foundation__["a" /* default */](
              /** @type {!MDCTextFieldAdapter} */_extends({
                addClass: function addClass(className) {
                  return _this3.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this3.root_.classList.remove(className);
                },
                hasClass: function hasClass(className) {
                  return _this3.root_.classList.contains(className);
                },
                registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
                  return _this3.root_.addEventListener(evtType, handler);
                },
                deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
                  return _this3.root_.removeEventListener(evtType, handler);
                },
                registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
                  var getAttributesList = function getAttributesList(mutationsList) {
                    return mutationsList.map(function (mutation) {
                      return mutation.attributeName;
                    });
                  };
                  var observer = new MutationObserver(function (mutationsList) {
                    return handler(getAttributesList(mutationsList));
                  });
                  var targetNode = _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].INPUT_SELECTOR);
                  var config = { attributes: true };
                  observer.observe(targetNode, config);
                  return observer;
                },
                deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
                  return observer.disconnect();
                },
                isFocused: function isFocused() {
                  return document.activeElement === _this3.root_.querySelector(__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* strings */].INPUT_SELECTOR);
                }
              }, this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()), this.getFoundationMap_());
            }

            /**
             * @return {!{
             *   shakeLabel: function(boolean): undefined,
             *   floatLabel: function(boolean): undefined,
             *   hasLabel: function(): boolean,
             *   getLabelWidth: function(): number,
             * }}
             */

          }, {
            key: 'getLabelAdapterMethods_',
            value: function getLabelAdapterMethods_() {
              var _this4 = this;

              return {
                shakeLabel: function shakeLabel(shouldShake) {
                  return _this4.label_.shake(shouldShake);
                },
                floatLabel: function floatLabel(shouldFloat) {
                  return _this4.label_.float(shouldFloat);
                },
                hasLabel: function hasLabel() {
                  return !!_this4.label_;
                },
                getLabelWidth: function getLabelWidth() {
                  return _this4.label_ ? _this4.label_.getWidth() : 0;
                }
              };
            }

            /**
             * @return {!{
             *   activateLineRipple: function(): undefined,
             *   deactivateLineRipple: function(): undefined,
             *   setLineRippleTransformOrigin: function(number): undefined,
             * }}
             */

          }, {
            key: 'getLineRippleAdapterMethods_',
            value: function getLineRippleAdapterMethods_() {
              var _this5 = this;

              return {
                activateLineRipple: function activateLineRipple() {
                  if (_this5.lineRipple_) {
                    _this5.lineRipple_.activate();
                  }
                },
                deactivateLineRipple: function deactivateLineRipple() {
                  if (_this5.lineRipple_) {
                    _this5.lineRipple_.deactivate();
                  }
                },
                setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
                  if (_this5.lineRipple_) {
                    _this5.lineRipple_.setRippleCenter(normalizedX);
                  }
                }
              };
            }

            /**
             * @return {!{
             *   notchOutline: function(number, boolean): undefined,
             *   hasOutline: function(): boolean,
             * }}
             */

          }, {
            key: 'getOutlineAdapterMethods_',
            value: function getOutlineAdapterMethods_() {
              var _this6 = this;

              return {
                notchOutline: function notchOutline(labelWidth) {
                  return _this6.outline_.notch(labelWidth);
                },
                closeOutline: function closeOutline() {
                  return _this6.outline_.closeNotch();
                },
                hasOutline: function hasOutline() {
                  return !!_this6.outline_;
                }
              };
            }

            /**
             * @return {!{
             *   registerInputInteractionHandler: function(string, function()): undefined,
             *   deregisterInputInteractionHandler: function(string, function()): undefined,
             *   getNativeInput: function(): ?Element,
             * }}
             */

          }, {
            key: 'getInputAdapterMethods_',
            value: function getInputAdapterMethods_() {
              var _this7 = this;

              return {
                registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
                  return _this7.input_.addEventListener(evtType, handler);
                },
                deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
                  return _this7.input_.removeEventListener(evtType, handler);
                },
                getNativeInput: function getNativeInput() {
                  return _this7.input_;
                }
              };
            }

            /**
             * Returns a map of all subcomponents to subfoundations.
             * @return {!FoundationMapType}
             */

          }, {
            key: 'getFoundationMap_',
            value: function getFoundationMap_() {
              return {
                helperText: this.helperText_ ? this.helperText_.foundation : undefined,
                leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
                trailingIcon: this.trailingIcon_ ? this.trailingIcon_.foundation : undefined
              };
            }
          }, {
            key: 'value',
            get: function get() {
              return this.foundation_.getValue();
            }

            /**
             * @param {string} value The value to set on the input.
             */

            , set: function set(value) {
              this.foundation_.setValue(value);
            }

            /**
             * @return {boolean} True if the Text Field is disabled.
             */

          }, {
            key: 'disabled',
            get: function get() {
              return this.foundation_.isDisabled();
            }

            /**
             * @param {boolean} disabled Sets the Text Field disabled or enabled.
             */

            , set: function set(disabled) {
              this.foundation_.setDisabled(disabled);
            }

            /**
             * @return {boolean} valid True if the Text Field is valid.
             */

          }, {
            key: 'valid',
            get: function get() {
              return this.foundation_.isValid();
            }

            /**
             * @param {boolean} valid Sets the Text Field valid or invalid.
             */

            , set: function set(valid) {
              this.foundation_.setValid(valid);
            }

            /**
             * @return {boolean} True if the Text Field is required.
             */

          }, {
            key: 'required',
            get: function get() {
              return this.input_.required;
            }

            /**
             * @param {boolean} required Sets the Text Field to required.
             */

            , set: function set(required) {
              this.input_.required = required;
            }

            /**
             * @return {string} The input element's validation pattern.
             */

          }, {
            key: 'pattern',
            get: function get() {
              return this.input_.pattern;
            }

            /**
             * @param {string} pattern Sets the input element's validation pattern.
             */

            , set: function set(pattern) {
              this.input_.pattern = pattern;
            }

            /**
             * @return {number} The input element's minLength.
             */

          }, {
            key: 'minLength',
            get: function get() {
              return this.input_.minLength;
            }

            /**
             * @param {number} minLength Sets the input element's minLength.
             */

            , set: function set(minLength) {
              this.input_.minLength = minLength;
            }

            /**
             * @return {number} The input element's maxLength.
             */

          }, {
            key: 'maxLength',
            get: function get() {
              return this.input_.maxLength;
            }

            /**
             * @param {number} maxLength Sets the input element's maxLength.
             */

            , set: function set(maxLength) {
              // Chrome throws exception if maxLength is set < 0
              if (maxLength < 0) {
                this.input_.removeAttribute('maxLength');
              } else {
                this.input_.maxLength = maxLength;
              }
            }

            /**
             * @return {string} The input element's min.
             */

          }, {
            key: 'min',
            get: function get() {
              return this.input_.min;
            }

            /**
             * @param {string} min Sets the input element's min.
             */

            , set: function set(min) {
              this.input_.min = min;
            }

            /**
             * @return {string} The input element's max.
             */

          }, {
            key: 'max',
            get: function get() {
              return this.input_.max;
            }

            /**
             * @param {string} max Sets the input element's max.
             */

            , set: function set(max) {
              this.input_.max = max;
            }

            /**
             * @return {string} The input element's step.
             */

          }, {
            key: 'step',
            get: function get() {
              return this.input_.step;
            }

            /**
             * @param {string} step Sets the input element's step.
             */

            , set: function set(step) {
              this.input_.step = step;
            }

            /**
             * Sets the helper text element content.
             * @param {string} content
             */

          }, {
            key: 'helperTextContent',
            set: function set(content) {
              this.foundation_.setHelperTextContent(content);
            }

            /**
             * Sets the aria label of the leading icon.
             * @param {string} label
             */

          }, {
            key: 'leadingIconAriaLabel',
            set: function set(label) {
              this.foundation_.setLeadingIconAriaLabel(label);
            }

            /**
             * Sets the text content of the leading icon.
             * @param {string} content
             */

          }, {
            key: 'leadingIconContent',
            set: function set(content) {
              this.foundation_.setLeadingIconContent(content);
            }

            /**
             * Sets the aria label of the trailing icon.
             * @param {string} label
             */

          }, {
            key: 'trailingIconAriaLabel',
            set: function set(label) {
              this.foundation_.setTrailingIconAriaLabel(label);
            }

            /**
             * Sets the text content of the trailing icon.
             * @param {string} content
             */

          }, {
            key: 'trailingIconContent',
            set: function set(content) {
              this.foundation_.setTrailingIconContent(content);
            }

            /**
             * Enables or disables the use of native validation. Use this for custom validation.
             * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
             */

          }, {
            key: 'useNativeValidation',
            set: function set(useNativeValidation) {
              this.foundation_.setUseNativeValidation(useNativeValidation);
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              return new MDCTextField(root);
            }
          }]);

          return MDCTextField;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/155:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var strings = {
          ARIA_HIDDEN: 'aria-hidden',
          ROLE: 'role'
        };

        /** @enum {string} */
        var cssClasses = {
          HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
          HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
        };

        /***/
      },

      /***/156:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return strings;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var strings = {
          ICON_EVENT: 'MDCTextField:icon',
          ICON_ROLE: 'button'
        };

        /***/
      },

      /***/157:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_text_foundation__ = __webpack_require__(61);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__icon_foundation__ = __webpack_require__(62);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(83);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(82);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint-disable no-unused-vars */

        /* eslint-enable no-unused-vars */

        /**
         * @extends {MDCFoundation<!MDCTextFieldAdapter>}
         * @final
         */

        var MDCTextFieldFoundation = function (_MDCFoundation) {
          _inherits(MDCTextFieldFoundation, _MDCFoundation);

          _createClass(MDCTextFieldFoundation, [{
            key: 'shouldShake',

            /** @return {boolean} */
            get: function get() {
              return !this.isValid() && !this.isFocused_ && !!this.getValue();
            }

            /**
             * @return {boolean}
             * @private
             */

          }, {
            key: 'shouldAlwaysFloat_',
            get: function get() {
              var type = this.getNativeInput_().type;
              return __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* ALWAYS_FLOAT_TYPES */].indexOf(type) >= 0;
            }

            /** @return {boolean} */

          }, {
            key: 'shouldFloat',
            get: function get() {
              return this.shouldAlwaysFloat_ || this.isFocused_ || !!this.getValue() || this.isBadInput_();
            }

            /**
             * {@see MDCTextFieldAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCTextFieldAdapter}
             */

          }], [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */];
            }

            /** @return enum {string} */

          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */];
            }

            /** @return enum {string} */

          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* numbers */];
            }
          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCTextFieldAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  hasClass: function hasClass() {},
                  registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
                  deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
                  registerInputInteractionHandler: function registerInputInteractionHandler() {},
                  deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
                  registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
                  deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
                  getNativeInput: function getNativeInput() {},
                  isFocused: function isFocused() {},
                  activateLineRipple: function activateLineRipple() {},
                  deactivateLineRipple: function deactivateLineRipple() {},
                  setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
                  shakeLabel: function shakeLabel() {},
                  floatLabel: function floatLabel() {},
                  hasLabel: function hasLabel() {},
                  getLabelWidth: function getLabelWidth() {},
                  hasOutline: function hasOutline() {},
                  notchOutline: function notchOutline() {},
                  closeOutline: function closeOutline() {}
                }
              );
            }

            /**
             * @param {!MDCTextFieldAdapter} adapter
             * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
             */

          }]);

          function MDCTextFieldFoundation(adapter) {
            var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};

            _classCallCheck(this, MDCTextFieldFoundation);

            /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
            var _this = _possibleConstructorReturn(this, (MDCTextFieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldFoundation)).call(this, _extends(MDCTextFieldFoundation.defaultAdapter, adapter)));

            _this.helperText_ = foundationMap.helperText;
            /** @type {!MDCTextFieldIconFoundation|undefined} */
            _this.leadingIcon_ = foundationMap.leadingIcon;
            /** @type {!MDCTextFieldIconFoundation|undefined} */
            _this.trailingIcon_ = foundationMap.trailingIcon;

            /** @private {boolean} */
            _this.isFocused_ = false;
            /** @private {boolean} */
            _this.receivedUserInput_ = false;
            /** @private {boolean} */
            _this.useCustomValidityChecking_ = false;
            /** @private {boolean} */
            _this.isValid_ = true;

            /** @private {boolean} */
            _this.useNativeValidation_ = true;

            /** @private {function(): undefined} */
            _this.inputFocusHandler_ = function () {
              return _this.activateFocus();
            };
            /** @private {function(): undefined} */
            _this.inputBlurHandler_ = function () {
              return _this.deactivateFocus();
            };
            /** @private {function(): undefined} */
            _this.inputInputHandler_ = function () {
              return _this.autoCompleteFocus();
            };
            /** @private {function(!Event): undefined} */
            _this.setPointerXOffset_ = function (evt) {
              return _this.setTransformOrigin(evt);
            };
            /** @private {function(!Event): undefined} */
            _this.textFieldInteractionHandler_ = function () {
              return _this.handleTextFieldInteraction();
            };
            /** @private {function(!Array): undefined} */
            _this.validationAttributeChangeHandler_ = function (attributesList) {
              return _this.handleValidationAttributeChange(attributesList);
            };

            /** @private {!MutationObserver} */
            _this.validationObserver_;
            return _this;
          }

          _createClass(MDCTextFieldFoundation, [{
            key: 'init',
            value: function init() {
              var _this2 = this;

              if (this.adapter_.isFocused()) {
                this.inputFocusHandler_();
              } else if (this.adapter_.hasLabel() && this.shouldFloat) {
                this.notchOutline(true);
                this.adapter_.floatLabel(true);
              }

              this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
              this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
              this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
              ['mousedown', 'touchstart'].forEach(function (evtType) {
                _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
              });
              ['click', 'keydown'].forEach(function (evtType) {
                _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
              });
              this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              var _this3 = this;

              this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
              this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
              this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
              ['mousedown', 'touchstart'].forEach(function (evtType) {
                _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
              });
              ['click', 'keydown'].forEach(function (evtType) {
                _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
              });
              this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
            }

            /**
             * Handles user interactions with the Text Field.
             */

          }, {
            key: 'handleTextFieldInteraction',
            value: function handleTextFieldInteraction() {
              if (this.adapter_.getNativeInput().disabled) {
                return;
              }
              this.receivedUserInput_ = true;
            }

            /**
             * Handles validation attribute changes
             * @param {!Array<string>} attributesList
             */

          }, {
            key: 'handleValidationAttributeChange',
            value: function handleValidationAttributeChange(attributesList) {
              var _this4 = this;

              attributesList.some(function (attributeName) {
                if (__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* VALIDATION_ATTR_WHITELIST */].indexOf(attributeName) > -1) {
                  _this4.styleValidity_(true);
                  return true;
                }
              });
            }

            /**
             * Opens/closes the notched outline.
             * @param {boolean} openNotch
             */

          }, {
            key: 'notchOutline',
            value: function notchOutline(openNotch) {
              if (!this.adapter_.hasOutline()) {
                return;
              }

              if (openNotch) {
                var isDense = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].DENSE);
                var labelScale = isDense ? __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* numbers */].DENSE_LABEL_SCALE : __WEBPACK_IMPORTED_MODULE_4__constants__["d" /* numbers */].LABEL_SCALE;
                var labelWidth = this.adapter_.getLabelWidth() * labelScale;
                this.adapter_.notchOutline(labelWidth);
              } else {
                this.adapter_.closeOutline();
              }
            }

            /**
             * Activates the text field focus state.
             */

          }, {
            key: 'activateFocus',
            value: function activateFocus() {
              this.isFocused_ = true;
              this.styleFocused_(this.isFocused_);
              this.adapter_.activateLineRipple();
              if (this.adapter_.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter_.floatLabel(this.shouldFloat);
                this.adapter_.shakeLabel(this.shouldShake);
              }
              if (this.helperText_) {
                this.helperText_.showToScreenReader();
              }
            }

            /**
             * Sets the line ripple's transform origin, so that the line ripple activate
             * animation will animate out from the user's click location.
             * @param {!Event} evt
             */

          }, {
            key: 'setTransformOrigin',
            value: function setTransformOrigin(evt) {
              var targetEvent = void 0;
              if (evt.touches) {
                targetEvent = evt.touches[0];
              } else {
                targetEvent = evt;
              }
              var targetClientRect = targetEvent.target.getBoundingClientRect();
              var normalizedX = targetEvent.clientX - targetClientRect.left;
              this.adapter_.setLineRippleTransformOrigin(normalizedX);
            }

            /**
             * Activates the Text Field's focus state in cases when the input value
             * changes without user input (e.g. programatically).
             */

          }, {
            key: 'autoCompleteFocus',
            value: function autoCompleteFocus() {
              if (!this.receivedUserInput_) {
                this.activateFocus();
              }
            }

            /**
             * Deactivates the Text Field's focus state.
             */

          }, {
            key: 'deactivateFocus',
            value: function deactivateFocus() {
              this.isFocused_ = false;
              this.adapter_.deactivateLineRipple();
              var isValid = this.isValid();
              this.styleValidity_(isValid);
              this.styleFocused_(this.isFocused_);
              if (this.adapter_.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter_.floatLabel(this.shouldFloat);
                this.adapter_.shakeLabel(this.shouldShake);
              }
              if (!this.shouldFloat) {
                this.receivedUserInput_ = false;
              }
            }

            /**
             * @return {string} The value of the input Element.
             */

          }, {
            key: 'getValue',
            value: function getValue() {
              return this.getNativeInput_().value;
            }

            /**
             * @param {string} value The value to set on the input Element.
             */

          }, {
            key: 'setValue',
            value: function setValue(value) {
              // Prevent Safari from moving the caret to the end of the input when the value has not changed.
              if (this.getValue() !== value) {
                this.getNativeInput_().value = value;
              }
              var isValid = this.isValid();
              this.styleValidity_(isValid);
              if (this.adapter_.hasLabel()) {
                this.notchOutline(this.shouldFloat);
                this.adapter_.floatLabel(this.shouldFloat);
                this.adapter_.shakeLabel(this.shouldShake);
              }
            }

            /**
             * @return {boolean} If a custom validity is set, returns that value.
             *     Otherwise, returns the result of native validity checks.
             */

          }, {
            key: 'isValid',
            value: function isValid() {
              return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
            }

            /**
             * @param {boolean} isValid Sets the validity state of the Text Field.
             */

          }, {
            key: 'setValid',
            value: function setValid(isValid) {
              this.isValid_ = isValid;
              this.styleValidity_(isValid);

              var shouldShake = !isValid && !this.isFocused_;
              if (this.adapter_.hasLabel()) {
                this.adapter_.shakeLabel(shouldShake);
              }
            }

            /**
             * Enables or disables the use of native validation. Use this for custom validation.
             * @param {boolean} useNativeValidation Set this to false to ignore native input validation.
             */

          }, {
            key: 'setUseNativeValidation',
            value: function setUseNativeValidation(useNativeValidation) {
              this.useNativeValidation_ = useNativeValidation;
            }

            /**
             * @return {boolean} True if the Text Field is disabled.
             */

          }, {
            key: 'isDisabled',
            value: function isDisabled() {
              return this.getNativeInput_().disabled;
            }

            /**
             * @param {boolean} disabled Sets the text-field disabled or enabled.
             */

          }, {
            key: 'setDisabled',
            value: function setDisabled(disabled) {
              this.getNativeInput_().disabled = disabled;
              this.styleDisabled_(disabled);
            }

            /**
             * @param {string} content Sets the content of the helper text.
             */

          }, {
            key: 'setHelperTextContent',
            value: function setHelperTextContent(content) {
              if (this.helperText_) {
                this.helperText_.setContent(content);
              }
            }

            /**
             * Sets the aria label of the leading icon.
             * @param {string} label
             */

          }, {
            key: 'setLeadingIconAriaLabel',
            value: function setLeadingIconAriaLabel(label) {
              if (this.leadingIcon_) {
                this.leadingIcon_.setAriaLabel(label);
              }
            }

            /**
             * Sets the text content of the leading icon.
             * @param {string} content
             */

          }, {
            key: 'setLeadingIconContent',
            value: function setLeadingIconContent(content) {
              if (this.leadingIcon_) {
                this.leadingIcon_.setContent(content);
              }
            }

            /**
             * Sets the aria label of the trailing icon.
             * @param {string} label
             */

          }, {
            key: 'setTrailingIconAriaLabel',
            value: function setTrailingIconAriaLabel(label) {
              if (this.trailingIcon_) {
                this.trailingIcon_.setAriaLabel(label);
              }
            }

            /**
             * Sets the text content of the trailing icon.
             * @param {string} content
             */

          }, {
            key: 'setTrailingIconContent',
            value: function setTrailingIconContent(content) {
              if (this.trailingIcon_) {
                this.trailingIcon_.setContent(content);
              }
            }

            /**
             * @return {boolean} True if the Text Field input fails in converting the
             *     user-supplied value.
             * @private
             */

          }, {
            key: 'isBadInput_',
            value: function isBadInput_() {
              return this.getNativeInput_().validity.badInput;
            }

            /**
             * @return {boolean} The result of native validity checking
             *     (ValidityState.valid).
             */

          }, {
            key: 'isNativeInputValid_',
            value: function isNativeInputValid_() {
              return this.getNativeInput_().validity.valid;
            }

            /**
             * Styles the component based on the validity state.
             * @param {boolean} isValid
             * @private
             */

          }, {
            key: 'styleValidity_',
            value: function styleValidity_(isValid) {
              var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

              if (isValid) {
                this.adapter_.removeClass(INVALID);
              } else {
                this.adapter_.addClass(INVALID);
              }
              if (this.helperText_) {
                this.helperText_.setValidity(isValid);
              }
            }

            /**
             * Styles the component based on the focused state.
             * @param {boolean} isFocused
             * @private
             */

          }, {
            key: 'styleFocused_',
            value: function styleFocused_(isFocused) {
              var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

              if (isFocused) {
                this.adapter_.addClass(FOCUSED);
              } else {
                this.adapter_.removeClass(FOCUSED);
              }
            }

            /**
             * Styles the component based on the disabled state.
             * @param {boolean} isDisabled
             * @private
             */

          }, {
            key: 'styleDisabled_',
            value: function styleDisabled_(isDisabled) {
              var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
                  DISABLED = _MDCTextFieldFoundati.DISABLED,
                  INVALID = _MDCTextFieldFoundati.INVALID;

              if (isDisabled) {
                this.adapter_.addClass(DISABLED);
                this.adapter_.removeClass(INVALID);
              } else {
                this.adapter_.removeClass(DISABLED);
              }

              if (this.leadingIcon_) {
                this.leadingIcon_.setDisabled(isDisabled);
              }

              if (this.trailingIcon_) {
                this.trailingIcon_.setDisabled(isDisabled);
              }
            }

            /**
             * @return {!Element|!NativeInputType} The native text input from the
             * host environment, or a dummy if none exists.
             * @private
             */

          }, {
            key: 'getNativeInput_',
            value: function getNativeInput_() {
              return this.adapter_.getNativeInput() ||
              /** @type {!NativeInputType} */{
                value: '',
                disabled: false,
                validity: {
                  badInput: false,
                  valid: true
                }
              };
            }
          }]);

          return MDCTextFieldFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCTextFieldFoundation;

        /***/
      },

      /***/158:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return MDCTextFieldHelperText;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(84);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(61);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
         * @final
         */

        var MDCTextFieldHelperText = function (_MDCComponent) {
          _inherits(MDCTextFieldHelperText, _MDCComponent);

          function MDCTextFieldHelperText() {
            _classCallCheck(this, MDCTextFieldHelperText);

            return _possibleConstructorReturn(this, (MDCTextFieldHelperText.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperText)).apply(this, arguments));
          }

          _createClass(MDCTextFieldHelperText, [{
            key: 'getDefaultFoundation',

            /**
             * @return {!MDCTextFieldHelperTextFoundation}
             */
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCTextFieldHelperTextAdapter} */_extends({
                addClass: function addClass(className) {
                  return _this2.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this2.root_.classList.remove(className);
                },
                hasClass: function hasClass(className) {
                  return _this2.root_.classList.contains(className);
                },
                setAttr: function setAttr(attr, value) {
                  return _this2.root_.setAttribute(attr, value);
                },
                removeAttr: function removeAttr(attr) {
                  return _this2.root_.removeAttribute(attr);
                },
                setContent: function setContent(content) {
                  _this2.root_.textContent = content;
                }
              }));
            }
          }, {
            key: 'foundation',

            /**
             * @return {!MDCTextFieldHelperTextFoundation}
             */
            get: function get() {
              return this.foundation_;
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCTextFieldHelperText}
             */
            value: function attachTo(root) {
              return new MDCTextFieldHelperText(root);
            }
          }]);

          return MDCTextFieldHelperText;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/159:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return MDCTextFieldIcon;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(85);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(62);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
         * @final
         */

        var MDCTextFieldIcon = function (_MDCComponent) {
          _inherits(MDCTextFieldIcon, _MDCComponent);

          function MDCTextFieldIcon() {
            _classCallCheck(this, MDCTextFieldIcon);

            return _possibleConstructorReturn(this, (MDCTextFieldIcon.__proto__ || Object.getPrototypeOf(MDCTextFieldIcon)).apply(this, arguments));
          }

          _createClass(MDCTextFieldIcon, [{
            key: 'getDefaultFoundation',

            /**
             * @return {!MDCTextFieldIconFoundation}
             */
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCTextFieldIconAdapter} */_extends({
                getAttr: function getAttr(attr) {
                  return _this2.root_.getAttribute(attr);
                },
                setAttr: function setAttr(attr, value) {
                  return _this2.root_.setAttribute(attr, value);
                },
                removeAttr: function removeAttr(attr) {
                  return _this2.root_.removeAttribute(attr);
                },
                setContent: function setContent(content) {
                  _this2.root_.textContent = content;
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return _this2.root_.addEventListener(evtType, handler);
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return _this2.root_.removeEventListener(evtType, handler);
                },
                notifyIconAction: function notifyIconAction() {
                  return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
                }
              }));
            }
          }, {
            key: 'foundation',

            /**
             * @return {!MDCTextFieldIconFoundation}
             */
            get: function get() {
              return this.foundation_;
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCTextFieldIcon}
             */
            value: function attachTo(root) {
              return new MDCTextFieldIcon(root);
            }
          }]);

          return MDCTextFieldIcon;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/17:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function () {
          return MDCFloatingLabel;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(14);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(27);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
         * @final
         */

        var MDCFloatingLabel = function (_MDCComponent) {
          _inherits(MDCFloatingLabel, _MDCComponent);

          function MDCFloatingLabel() {
            _classCallCheck(this, MDCFloatingLabel);

            return _possibleConstructorReturn(this, (MDCFloatingLabel.__proto__ || Object.getPrototypeOf(MDCFloatingLabel)).apply(this, arguments));
          }

          _createClass(MDCFloatingLabel, [{
            key: 'shake',

            /**
             * Styles the label to produce the label shake for errors.
             * @param {boolean} shouldShake styles the label to shake by adding shake class
             * if true, otherwise will stop shaking by removing shake class.
             */
            value: function shake(shouldShake) {
              this.foundation_.shake(shouldShake);
            }

            /**
             * Styles label to float/dock.
             * @param {boolean} shouldFloat styles the label to float by adding float class
             * if true, otherwise docks the label by removing the float class.
             */

          }, {
            key: 'float',
            value: function float(shouldFloat) {
              this.foundation_.float(shouldFloat);
            }

            /**
             * @return {number}
             */

          }, {
            key: 'getWidth',
            value: function getWidth() {
              return this.foundation_.getWidth();
            }

            /**
             * @return {!MDCFloatingLabelFoundation}
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
                addClass: function addClass(className) {
                  return _this2.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this2.root_.classList.remove(className);
                },
                getWidth: function getWidth() {
                  return _this2.root_.offsetWidth;
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return _this2.root_.addEventListener(evtType, handler);
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return _this2.root_.removeEventListener(evtType, handler);
                }
              });
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCFloatingLabel}
             */
            value: function attachTo(root) {
              return new MDCFloatingLabel(root);
            }
          }]);

          return MDCFloatingLabel;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/2:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () {
          return supportsCssVariables;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "applyPassive", function () {
          return applyPassive;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getMatchesProperty", function () {
          return getMatchesProperty;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () {
          return getNormalizedEventCoords;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
         * @private {boolean|undefined}
         */
        var supportsCssVariables_ = void 0;

        /**
         * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
         * @private {boolean|undefined}
         */
        var supportsPassive_ = void 0;

        /**
         * @param {!Window} windowObj
         * @return {boolean}
         */
        function detectEdgePseudoVarBug(windowObj) {
          // Detect versions of Edge with buggy var() support
          // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
          var document = windowObj.document;
          var node = document.createElement('div');
          node.className = 'mdc-ripple-surface--test-edge-var-bug';
          document.body.appendChild(node);

          // The bug exists if ::before style ends up propagating to the parent element.
          // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
          // but Firefox is known to support CSS custom properties correctly.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
          var computedStyle = windowObj.getComputedStyle(node);
          var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
          node.remove();
          return hasPseudoVarBug;
        }

        /**
         * @param {!Window} windowObj
         * @param {boolean=} forceRefresh
         * @return {boolean|undefined}
         */

        function supportsCssVariables(windowObj) {
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          var supportsCssVariables = supportsCssVariables_;
          if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
            return supportsCssVariables;
          }

          var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
          if (!supportsFunctionPresent) {
            return;
          }

          var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
          // See: https://bugs.webkit.org/show_bug.cgi?id=154669
          // See: README section on Safari
          var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

          if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
            supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
          } else {
            supportsCssVariables = false;
          }

          if (!forceRefresh) {
            supportsCssVariables_ = supportsCssVariables;
          }
          return supportsCssVariables;
        }

        //
        /**
         * Determine whether the current browser supports passive event listeners, and if so, use them.
         * @param {!Window=} globalObj
         * @param {boolean=} forceRefresh
         * @return {boolean|!EventListenerOptions}
         */
        function applyPassive() {
          var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
          var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          if (supportsPassive_ === undefined || forceRefresh) {
            var isSupported = false;
            try {
              globalObj.document.addEventListener('test', null, { get passive() {
                  isSupported = true;
                  return isSupported;
                } });
            } catch (e) {}

            supportsPassive_ = isSupported;
          }

          return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
        }

        /**
         * @param {!Object} HTMLElementPrototype
         * @return {string}
         */
        function getMatchesProperty(HTMLElementPrototype) {
          /**
           * Order is important because we return the first existing method we find.
           * Do not change the order of the items in the below array.
           */
          var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
          var method = 'matches';
          for (var i = 0; i < matchesMethods.length; i++) {
            var matchesMethod = matchesMethods[i];
            if (matchesMethod in HTMLElementPrototype) {
              method = matchesMethod;
              break;
            }
          }

          return method;
        }

        /**
         * @param {!Event} ev
         * @param {{x: number, y: number}} pageOffset
         * @param {!ClientRect} clientRect
         * @return {{x: number, y: number}}
         */
        function getNormalizedEventCoords(ev, pageOffset, clientRect) {
          var x = pageOffset.x,
              y = pageOffset.y;

          var documentX = x + clientRect.left;
          var documentY = y + clientRect.top;

          var normalizedX = void 0;
          var normalizedY = void 0;
          // Determine touch point relative to the ripple container.
          if (ev.type === 'touchstart') {
            ev = /** @type {!TouchEvent} */ev;
            normalizedX = ev.changedTouches[0].pageX - documentX;
            normalizedY = ev.changedTouches[0].pageY - documentY;
          } else {
            ev = /** @type {!MouseEvent} */ev;
            normalizedX = ev.pageX - documentX;
            normalizedY = ev.pageY - documentY;
          }

          return { x: normalizedX, y: normalizedY };
        }

        /***/
      },

      /***/21:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC TextField Line Ripple.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the line ripple into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCLineRippleAdapter = function () {
          function MDCLineRippleAdapter() {
            _classCallCheck(this, MDCLineRippleAdapter);
          }

          _createClass(MDCLineRippleAdapter, [{
            key: "addClass",

            /**
             * Adds a class to the line ripple element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the line ripple element.
             * @param {string} className
             */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /**
             * @param {string} className
             * @return {boolean}
             */

          }, {
            key: "hasClass",
            value: function hasClass(className) {}

            /**
             * Sets the style property with propertyName to value on the root element.
             * @param {string} propertyName
             * @param {string} value
             */

          }, {
            key: "setStyle",
            value: function setStyle(propertyName, value) {}

            /**
             * Registers an event listener on the line ripple element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "registerEventHandler",
            value: function registerEventHandler(evtType, handler) {}

            /**
             * Deregisters an event listener on the line ripple element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "deregisterEventHandler",
            value: function deregisterEventHandler(evtType, handler) {}
          }]);

          return MDCLineRippleAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCLineRippleAdapter;

        /***/
      },

      /***/23:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Notched Outline.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the Notched Outline into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCNotchedOutlineAdapter = function () {
          function MDCNotchedOutlineAdapter() {
            _classCallCheck(this, MDCNotchedOutlineAdapter);
          }

          _createClass(MDCNotchedOutlineAdapter, [{
            key: "addClass",

            /**
             * Adds a class to the root element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the root element.
             * @param {string} className
             */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /**
             * Sets the width style property of the notch element.
             * @param {number} width
             */

          }, {
            key: "setNotchWidthProperty",
            value: function setNotchWidthProperty(width) {}
          }]);

          return MDCNotchedOutlineAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCNotchedOutlineAdapter;

        /***/
      },

      /***/24:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return numbers;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
          return strings;
        });
        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var strings = {
          NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
        };

        /** @enum {number} */
        var numbers = {
          // This should stay in sync with $mdc-notched-outline-padding * 2.
          NOTCH_ELEMENT_PADDING: 8
        };

        /** @enum {string} */
        var cssClasses = {
          OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
          OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
          NO_LABEL: 'mdc-notched-outline--no-label'
        };

        /***/
      },

      /***/27:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(14);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(28);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
         * @final
         */

        var MDCFloatingLabelFoundation = function (_MDCFoundation) {
          _inherits(MDCFloatingLabelFoundation, _MDCFoundation);

          _createClass(MDCFloatingLabelFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /**
             * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCFloatingLabelAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCFloatingLabelAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  getWidth: function getWidth() {},
                  registerInteractionHandler: function registerInteractionHandler() {},
                  deregisterInteractionHandler: function deregisterInteractionHandler() {}
                }
              );
            }

            /**
             * @param {!MDCFloatingLabelAdapter} adapter
             */

          }]);

          function MDCFloatingLabelFoundation(adapter) {
            _classCallCheck(this, MDCFloatingLabelFoundation);

            /** @private {function(!Event): undefined} */
            var _this = _possibleConstructorReturn(this, (MDCFloatingLabelFoundation.__proto__ || Object.getPrototypeOf(MDCFloatingLabelFoundation)).call(this, _extends(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

            _this.shakeAnimationEndHandler_ = function () {
              return _this.handleShakeAnimationEnd_();
            };
            return _this;
          }

          _createClass(MDCFloatingLabelFoundation, [{
            key: 'init',
            value: function init() {
              this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
            }

            /**
             * Returns the width of the label element.
             * @return {number}
             */

          }, {
            key: 'getWidth',
            value: function getWidth() {
              return this.adapter_.getWidth();
            }

            /**
             * Styles the label to produce the label shake for errors.
             * @param {boolean} shouldShake adds shake class if true,
             * otherwise removes shake class.
             */

          }, {
            key: 'shake',
            value: function shake(shouldShake) {
              var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

              if (shouldShake) {
                this.adapter_.addClass(LABEL_SHAKE);
              } else {
                this.adapter_.removeClass(LABEL_SHAKE);
              }
            }

            /**
             * Styles the label to float or dock.
             * @param {boolean} shouldFloat adds float class if true, otherwise remove
             * float and shake class to dock label.
             */

          }, {
            key: 'float',
            value: function float(shouldFloat) {
              var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
                  LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
                  LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

              if (shouldFloat) {
                this.adapter_.addClass(LABEL_FLOAT_ABOVE);
              } else {
                this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
                this.adapter_.removeClass(LABEL_SHAKE);
              }
            }

            /**
             * Handles an interaction event on the root element.
             */

          }, {
            key: 'handleShakeAnimationEnd_',
            value: function handleShakeAnimationEnd_() {
              var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

              this.adapter_.removeClass(LABEL_SHAKE);
            }
          }]);

          return MDCFloatingLabelFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCFloatingLabelFoundation;

        /***/
      },

      /***/28:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var cssClasses = {
          LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
          LABEL_SHAKE: 'mdc-floating-label--shake',
          ROOT: 'mdc-floating-label'
        };

        /***/
      },

      /***/3:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Ripple. Provides an interface for managing
         * - classes
         * - dom
         * - CSS variables
         * - position
         * - dimensions
         * - scroll position
         * - event handlers
         * - unbounded, active and disabled states
         *
         * Additionally, provides type information for the adapter to the Closure
         * compiler.
         *
         * Implement this adapter for your framework of choice to delegate updates to
         * the component in your framework of choice. See architecture documentation
         * for more details.
         * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
         *
         * @record
         */
        var MDCRippleAdapter = function () {
          function MDCRippleAdapter() {
            _classCallCheck(this, MDCRippleAdapter);
          }

          _createClass(MDCRippleAdapter, [{
            key: "browserSupportsCssVars",

            /** @return {boolean} */
            value: function browserSupportsCssVars() {}

            /** @return {boolean} */

          }, {
            key: "isUnbounded",
            value: function isUnbounded() {}

            /** @return {boolean} */

          }, {
            key: "isSurfaceActive",
            value: function isSurfaceActive() {}

            /** @return {boolean} */

          }, {
            key: "isSurfaceDisabled",
            value: function isSurfaceDisabled() {}

            /** @param {string} className */

          }, {
            key: "addClass",
            value: function addClass(className) {}

            /** @param {string} className */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /** @param {!EventTarget} target */

          }, {
            key: "containsEventTarget",
            value: function containsEventTarget(target) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "registerDocumentInteractionHandler",
            value: function registerDocumentInteractionHandler(evtType, handler) {}

            /**
             * @param {string} evtType
             * @param {!Function} handler
             */

          }, {
            key: "deregisterDocumentInteractionHandler",
            value: function deregisterDocumentInteractionHandler(evtType, handler) {}

            /**
             * @param {!Function} handler
             */

          }, {
            key: "registerResizeHandler",
            value: function registerResizeHandler(handler) {}

            /**
             * @param {!Function} handler
             */

          }, {
            key: "deregisterResizeHandler",
            value: function deregisterResizeHandler(handler) {}

            /**
             * @param {string} varName
             * @param {?number|string} value
             */

          }, {
            key: "updateCssVariable",
            value: function updateCssVariable(varName, value) {}

            /** @return {!ClientRect} */

          }, {
            key: "computeBoundingRect",
            value: function computeBoundingRect() {}

            /** @return {{x: number, y: number}} */

          }, {
            key: "getWindowPageOffset",
            value: function getWindowPageOffset() {}
          }]);

          return MDCRippleAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCRippleAdapter;

        /***/
      },

      /***/31:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCLineRipple", function () {
          return MDCLineRipple;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(32);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCLineRippleFoundation>}
         * @final
         */

        var MDCLineRipple = function (_MDCComponent) {
          _inherits(MDCLineRipple, _MDCComponent);

          function MDCLineRipple() {
            _classCallCheck(this, MDCLineRipple);

            return _possibleConstructorReturn(this, (MDCLineRipple.__proto__ || Object.getPrototypeOf(MDCLineRipple)).apply(this, arguments));
          }

          _createClass(MDCLineRipple, [{
            key: 'activate',

            /**
             * Activates the line ripple
             */
            value: function activate() {
              this.foundation_.activate();
            }

            /**
             * Deactivates the line ripple
             */

          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.foundation_.deactivate();
            }

            /**
             * Sets the transform origin given a user's click location. The `rippleCenter` is the
             * x-coordinate of the middle of the ripple.
             * @param {number} xCoordinate
             */

          }, {
            key: 'setRippleCenter',
            value: function setRippleCenter(xCoordinate) {
              this.foundation_.setRippleCenter(xCoordinate);
            }

            /**
             * @return {!MDCLineRippleFoundation}
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCLineRippleAdapter} */_extends({
                addClass: function addClass(className) {
                  return _this2.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this2.root_.classList.remove(className);
                },
                hasClass: function hasClass(className) {
                  return _this2.root_.classList.contains(className);
                },
                setStyle: function setStyle(propertyName, value) {
                  return _this2.root_.style[propertyName] = value;
                },
                registerEventHandler: function registerEventHandler(evtType, handler) {
                  return _this2.root_.addEventListener(evtType, handler);
                },
                deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
                  return _this2.root_.removeEventListener(evtType, handler);
                }
              }));
            }
          }], [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCLineRipple}
             */
            value: function attachTo(root) {
              return new MDCLineRipple(root);
            }
          }]);

          return MDCLineRipple;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/32:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(33);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCLineRippleAdapter>}
         * @final
         */

        var MDCLineRippleFoundation = function (_MDCFoundation) {
          _inherits(MDCLineRippleFoundation, _MDCFoundation);

          _createClass(MDCLineRippleFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /**
             * {@see MDCLineRippleAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCLineRippleAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCLineRippleAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  hasClass: function hasClass() {},
                  setStyle: function setStyle() {},
                  registerEventHandler: function registerEventHandler() {},
                  deregisterEventHandler: function deregisterEventHandler() {}
                }
              );
            }

            /**
             * @param {!MDCLineRippleAdapter=} adapter
             */

          }]);

          function MDCLineRippleFoundation(adapter) {
            _classCallCheck(this, MDCLineRippleFoundation);

            /** @private {function(!Event): undefined} */
            var _this = _possibleConstructorReturn(this, (MDCLineRippleFoundation.__proto__ || Object.getPrototypeOf(MDCLineRippleFoundation)).call(this, _extends(MDCLineRippleFoundation.defaultAdapter, adapter)));

            _this.transitionEndHandler_ = function (evt) {
              return _this.handleTransitionEnd(evt);
            };
            return _this;
          }

          _createClass(MDCLineRippleFoundation, [{
            key: 'init',
            value: function init() {
              this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
            }

            /**
             * Activates the line ripple
             */

          }, {
            key: 'activate',
            value: function activate() {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
            }

            /**
             * Sets the center of the ripple animation to the given X coordinate.
             * @param {number} xCoordinate
             */

          }, {
            key: 'setRippleCenter',
            value: function setRippleCenter(xCoordinate) {
              this.adapter_.setStyle('transform-origin', xCoordinate + 'px center');
            }

            /**
             * Deactivates the line ripple
             */

          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
            }

            /**
             * Handles a transition end event
             * @param {!Event} evt
             */

          }, {
            key: 'handleTransitionEnd',
            value: function handleTransitionEnd(evt) {
              // Wait for the line ripple to be either transparent or opaque
              // before emitting the animation end event
              var isDeactivating = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);

              if (evt.propertyName === 'opacity') {
                if (isDeactivating) {
                  this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
                  this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
                }
              }
            }
          }]);

          return MDCLineRippleFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCLineRippleFoundation;

        /***/
      },

      /***/33:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var cssClasses = {
          LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
          LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
        };

        /***/
      },

      /***/36:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function () {
          return MDCNotchedOutline;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(23);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(37);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__material_floating_label_index__ = __webpack_require__(17);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(24);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
         * @final
         */

        var MDCNotchedOutline = function (_MDCComponent) {
          _inherits(MDCNotchedOutline, _MDCComponent);

          _createClass(MDCNotchedOutline, null, [{
            key: 'attachTo',

            /**
             * @param {!Element} root
             * @return {!MDCNotchedOutline}
             */
            value: function attachTo(root) {
              return new MDCNotchedOutline(root);
            }
            /** @param {...?} args */

          }]);

          function MDCNotchedOutline() {
            var _ref;

            _classCallCheck(this, MDCNotchedOutline);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @private {Element} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCNotchedOutline.__proto__ || Object.getPrototypeOf(MDCNotchedOutline)).call.apply(_ref, [this].concat(args)));

            _this.notchElement_;
            return _this;
          }

          _createClass(MDCNotchedOutline, [{
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              var label = this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_3__material_floating_label_index__["MDCFloatingLabelFoundation"].cssClasses.ROOT);
              this.notchElement_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* strings */].NOTCH_ELEMENT_SELECTOR);

              if (label) {
                label.style.transitionDuration = '0s';
                this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].OUTLINE_UPGRADED);
                requestAnimationFrame(function () {
                  label.style.transitionDuration = '';
                });
              } else {
                this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].NO_LABEL);
              }
            }

            /**
              * Updates classes and styles to open the notch to the specified width.
              * @param {number} notchWidth The notch width in the outline.
              */

          }, {
            key: 'notch',
            value: function notch(notchWidth) {
              this.foundation_.notch(notchWidth);
            }

            /**
             * Updates classes and styles to close the notch.
             */

          }, {
            key: 'closeNotch',
            value: function closeNotch() {
              this.foundation_.closeNotch();
            }

            /**
             * @return {!MDCNotchedOutlineFoundation}
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              var _this2 = this;

              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](
              /** @type {!MDCNotchedOutlineAdapter} */_extends({
                addClass: function addClass(className) {
                  return _this2.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return _this2.root_.classList.remove(className);
                },
                setNotchWidthProperty: function setNotchWidthProperty(width) {
                  return _this2.notchElement_.style.setProperty('width', width > 0 ? width + 'px' : '0');
                }
              }));
            }
          }]);

          return MDCNotchedOutline;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /***/
      },

      /***/37:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(23);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(24);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
         * @final
         */

        var MDCNotchedOutlineFoundation = function (_MDCFoundation) {
          _inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

          _createClass(MDCNotchedOutlineFoundation, null, [{
            key: 'strings',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
            }

            /** @return enum {string} */

          }, {
            key: 'cssClasses',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /** @return enum {number} */

          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
            }

            /**
             * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCNotchedOutlineAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCNotchedOutlineAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  setNotchWidthProperty: function setNotchWidthProperty() {}
                }
              );
            }

            /**
             * @param {!MDCNotchedOutlineAdapter} adapter
             */

          }]);

          function MDCNotchedOutlineFoundation(adapter) {
            _classCallCheck(this, MDCNotchedOutlineFoundation);

            return _possibleConstructorReturn(this, (MDCNotchedOutlineFoundation.__proto__ || Object.getPrototypeOf(MDCNotchedOutlineFoundation)).call(this, _extends(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
          }

          /**
           * Adds the outline notched selector and updates the notch width
           * calculated based off of notchWidth.
           * @param {number} notchWidth
           */

          _createClass(MDCNotchedOutlineFoundation, [{
            key: 'notch',
            value: function notch(notchWidth) {
              var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

              if (notchWidth > 0) {
                notchWidth += __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
              }

              this.adapter_.setNotchWidthProperty(notchWidth);
              this.adapter_.addClass(OUTLINE_NOTCHED);
            }

            /**
             * Removes notched outline selector to close the notch in the outline.
             */

          }, {
            key: 'closeNotch',
            value: function closeNotch() {
              var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

              this.adapter_.removeClass(OUTLINE_NOTCHED);
              this.adapter_.setNotchWidthProperty(0);
            }
          }]);

          return MDCNotchedOutlineFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCNotchedOutlineFoundation;

        /***/
      },

      /***/4:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCRipple", function () {
          return MDCRipple;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function () {
          return RippleCapableSurface;
        });
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () {
          return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
        });
        /* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__, "util", function () {
          return __WEBPACK_IMPORTED_MODULE_3__util__;
        });
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends MDCComponent<!MDCRippleFoundation>
         */

        var MDCRipple = function (_MDCComponent) {
          _inherits(MDCRipple, _MDCComponent);

          /** @param {...?} args */
          function MDCRipple() {
            var _ref;

            _classCallCheck(this, MDCRipple);

            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            /** @type {boolean} */
            var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

            _this.disabled = false;

            /** @private {boolean} */
            _this.unbounded_;
            return _this;
          }

          /**
           * @param {!Element} root
           * @param {{isUnbounded: (boolean|undefined)}=} options
           * @return {!MDCRipple}
           */

          _createClass(MDCRipple, [{
            key: 'setUnbounded_',

            /**
             * Closure Compiler throws an access control error when directly accessing a
             * protected or private property inside a getter/setter, like unbounded above.
             * By accessing the protected property inside a method, we solve that problem.
             * That's why this function exists.
             * @private
             */
            value: function setUnbounded_() {
              this.foundation_.setUnbounded(this.unbounded_);
            }
          }, {
            key: 'activate',
            value: function activate() {
              this.foundation_.activate();
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.foundation_.deactivate();
            }
          }, {
            key: 'layout',
            value: function layout() {
              this.foundation_.layout();
            }

            /**
             * @return {!MDCRippleFoundation}
             * @override
             */

          }, {
            key: 'getDefaultFoundation',
            value: function getDefaultFoundation() {
              return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
            }

            /** @override */

          }, {
            key: 'initialSyncWithDOM',
            value: function initialSyncWithDOM() {
              this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
            }
          }, {
            key: 'unbounded',

            /** @return {boolean} */
            get: function get() {
              return this.unbounded_;
            }

            /** @param {boolean} unbounded */

            , set: function set(unbounded) {
              this.unbounded_ = Boolean(unbounded);
              this.setUnbounded_();
            }
          }], [{
            key: 'attachTo',
            value: function attachTo(root) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref2$isUnbounded = _ref2.isUnbounded,
                  isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

              var ripple = new MDCRipple(root);
              // Only override unbounded behavior if option is explicitly specified
              if (isUnbounded !== undefined) {
                ripple.unbounded = /** @type {boolean} */isUnbounded;
              }
              return ripple;
            }

            /**
             * @param {!RippleCapableSurface} instance
             * @return {!MDCRippleAdapter}
             */

          }, {
            key: 'createAdapter',
            value: function createAdapter(instance) {
              var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

              return {
                browserSupportsCssVars: function browserSupportsCssVars() {
                  return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
                },
                isUnbounded: function isUnbounded() {
                  return instance.unbounded;
                },
                isSurfaceActive: function isSurfaceActive() {
                  return instance.root_[MATCHES](':active');
                },
                isSurfaceDisabled: function isSurfaceDisabled() {
                  return instance.disabled;
                },
                addClass: function addClass(className) {
                  return instance.root_.classList.add(className);
                },
                removeClass: function removeClass(className) {
                  return instance.root_.classList.remove(className);
                },
                containsEventTarget: function containsEventTarget(target) {
                  return instance.root_.contains(target);
                },
                registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                  return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                  return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                  return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                  return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
                },
                registerResizeHandler: function registerResizeHandler(handler) {
                  return window.addEventListener('resize', handler);
                },
                deregisterResizeHandler: function deregisterResizeHandler(handler) {
                  return window.removeEventListener('resize', handler);
                },
                updateCssVariable: function updateCssVariable(varName, value) {
                  return instance.root_.style.setProperty(varName, value);
                },
                computeBoundingRect: function computeBoundingRect() {
                  return instance.root_.getBoundingClientRect();
                },
                getWindowPageOffset: function getWindowPageOffset() {
                  return { x: window.pageXOffset, y: window.pageYOffset };
                }
              };
            }
          }]);

          return MDCRipple;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

        /**
         * See Material Design spec for more details on when to use ripples.
         * https://material.io/guidelines/motion/choreography.html#choreography-creation
         * @record
         */

        var RippleCapableSurface = function RippleCapableSurface() {
          _classCallCheck(this, RippleCapableSurface);
        };

        /** @protected {!Element} */

        RippleCapableSurface.prototype.root_;

        /**
         * Whether or not the ripple bleeds out of the bounds of the element.
         * @type {boolean|undefined}
         */
        RippleCapableSurface.prototype.unbounded;

        /**
         * Whether or not the ripple is attached to a disabled component.
         * @type {boolean|undefined}
         */
        RippleCapableSurface.prototype.disabled;

        /***/
      },

      /***/5:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @typedef {{
         *   isActivated: (boolean|undefined),
         *   hasDeactivationUXRun: (boolean|undefined),
         *   wasActivatedByPointer: (boolean|undefined),
         *   wasElementMadeActive: (boolean|undefined),
         *   activationEvent: (!Event|undefined),
         *   isProgrammatic: (boolean|undefined)
         * }}
         */
        var ActivationStateType = void 0;

        /**
         * @typedef {{
         *   activate: (string|undefined),
         *   deactivate: (string|undefined),
         *   focus: (string|undefined),
         *   blur: (string|undefined)
         * }}
         */
        var ListenerInfoType = void 0;

        /**
         * @typedef {{
         *   activate: function(!Event),
         *   deactivate: function(!Event=),
         *   focus: function(),
         *   blur: function()
         * }}
         */
        var ListenersType = void 0;

        /**
         * @typedef {{
         *   x: number,
         *   y: number
         * }}
         */
        var PointType = void 0;

        // Activation events registered on the root element of each instance for activation
        var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

        // Deactivation events registered on documentElement when a pointer-related down event occurs
        var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

        // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
        /** @type {!Array<!EventTarget>} */
        var activatedTargets = [];

        /**
         * @extends {MDCFoundation<!MDCRippleAdapter>}
         */

        var MDCRippleFoundation = function (_MDCFoundation) {
          _inherits(MDCRippleFoundation, _MDCFoundation);

          _createClass(MDCRippleFoundation, null, [{
            key: 'cssClasses',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }
          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
            }
          }, {
            key: 'numbers',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
            }
          }, {
            key: 'defaultAdapter',
            get: function get() {
              return {
                browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
                isUnbounded: function isUnbounded() /* boolean */{},
                isSurfaceActive: function isSurfaceActive() /* boolean */{},
                isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
                addClass: function addClass() /* className: string */{},
                removeClass: function removeClass() /* className: string */{},
                containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
                registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
                deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
                registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
                deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
                registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
                deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
                updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
                computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
                getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
              };
            }
          }]);

          function MDCRippleFoundation(adapter) {
            _classCallCheck(this, MDCRippleFoundation);

            /** @private {number} */
            var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

            _this.layoutFrame_ = 0;

            /** @private {!ClientRect} */
            _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

            /** @private {!ActivationStateType} */
            _this.activationState_ = _this.defaultActivationState_();

            /** @private {number} */
            _this.initialSize_ = 0;

            /** @private {number} */
            _this.maxRadius_ = 0;

            /** @private {function(!Event)} */
            _this.activateHandler_ = function (e) {
              return _this.activate_(e);
            };

            /** @private {function(!Event=)} */
            _this.deactivateHandler_ = function () {
              return _this.deactivate_();
            };

            /** @private {function(!Event=)} */
            _this.focusHandler_ = function () {
              return _this.handleFocus();
            };

            /** @private {function(!Event=)} */
            _this.blurHandler_ = function () {
              return _this.handleBlur();
            };

            /** @private {!Function} */
            _this.resizeHandler_ = function () {
              return _this.layout();
            };

            /** @private {{left: number, top:number}} */
            _this.unboundedCoords_ = {
              left: 0,
              top: 0
            };

            /** @private {number} */
            _this.fgScale_ = 0;

            /** @private {number} */
            _this.activationTimer_ = 0;

            /** @private {number} */
            _this.fgDeactivationRemovalTimer_ = 0;

            /** @private {boolean} */
            _this.activationAnimationHasEnded_ = false;

            /** @private {!Function} */
            _this.activationTimerCallback_ = function () {
              _this.activationAnimationHasEnded_ = true;
              _this.runDeactivationUXLogicIfReady_();
            };

            /** @private {!Event|undefined} */
            _this.previousActivationEvent_;
            return _this;
          }

          /**
           * We compute this property so that we are not querying information about the client
           * until the point in time where the foundation requests it. This prevents scenarios where
           * client-side feature-detection may happen too early, such as when components are rendered on the server
           * and then initialized at mount time on the client.
           * @return {boolean}
           * @private
           */

          _createClass(MDCRippleFoundation, [{
            key: 'supportsPressRipple_',
            value: function supportsPressRipple_() {
              return this.adapter_.browserSupportsCssVars();
            }

            /**
             * @return {!ActivationStateType}
             */

          }, {
            key: 'defaultActivationState_',
            value: function defaultActivationState_() {
              return {
                isActivated: false,
                hasDeactivationUXRun: false,
                wasActivatedByPointer: false,
                wasElementMadeActive: false,
                activationEvent: undefined,
                isProgrammatic: false
              };
            }

            /** @override */

          }, {
            key: 'init',
            value: function init() {
              var _this2 = this;

              var supportsPressRipple = this.supportsPressRipple_();

              this.registerRootHandlers_(supportsPressRipple);

              if (supportsPressRipple) {
                var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                    ROOT = _MDCRippleFoundation$.ROOT,
                    UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

                requestAnimationFrame(function () {
                  _this2.adapter_.addClass(ROOT);
                  if (_this2.adapter_.isUnbounded()) {
                    _this2.adapter_.addClass(UNBOUNDED);
                    // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                    _this2.layoutInternal_();
                  }
                });
              }
            }

            /** @override */

          }, {
            key: 'destroy',
            value: function destroy() {
              var _this3 = this;

              if (this.supportsPressRipple_()) {
                if (this.activationTimer_) {
                  clearTimeout(this.activationTimer_);
                  this.activationTimer_ = 0;
                  this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
                }

                if (this.fgDeactivationRemovalTimer_) {
                  clearTimeout(this.fgDeactivationRemovalTimer_);
                  this.fgDeactivationRemovalTimer_ = 0;
                  this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
                }

                var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                    ROOT = _MDCRippleFoundation$2.ROOT,
                    UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

                requestAnimationFrame(function () {
                  _this3.adapter_.removeClass(ROOT);
                  _this3.adapter_.removeClass(UNBOUNDED);
                  _this3.removeCssVars_();
                });
              }

              this.deregisterRootHandlers_();
              this.deregisterDeactivationHandlers_();
            }

            /**
             * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
             * @private
             */

          }, {
            key: 'registerRootHandlers_',
            value: function registerRootHandlers_(supportsPressRipple) {
              var _this4 = this;

              if (supportsPressRipple) {
                ACTIVATION_EVENT_TYPES.forEach(function (type) {
                  _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
                });
                if (this.adapter_.isUnbounded()) {
                  this.adapter_.registerResizeHandler(this.resizeHandler_);
                }
              }

              this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
              this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
            }

            /**
             * @param {!Event} e
             * @private
             */

          }, {
            key: 'registerDeactivationHandlers_',
            value: function registerDeactivationHandlers_(e) {
              var _this5 = this;

              if (e.type === 'keydown') {
                this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
              } else {
                POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                  _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
                });
              }
            }

            /** @private */

          }, {
            key: 'deregisterRootHandlers_',
            value: function deregisterRootHandlers_() {
              var _this6 = this;

              ACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
              });
              this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
              this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

              if (this.adapter_.isUnbounded()) {
                this.adapter_.deregisterResizeHandler(this.resizeHandler_);
              }
            }

            /** @private */

          }, {
            key: 'deregisterDeactivationHandlers_',
            value: function deregisterDeactivationHandlers_() {
              var _this7 = this;

              this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
              });
            }

            /** @private */

          }, {
            key: 'removeCssVars_',
            value: function removeCssVars_() {
              var _this8 = this;

              var strings = MDCRippleFoundation.strings;

              Object.keys(strings).forEach(function (k) {
                if (k.indexOf('VAR_') === 0) {
                  _this8.adapter_.updateCssVariable(strings[k], null);
                }
              });
            }

            /**
             * @param {!Event=} e
             * @private
             */

          }, {
            key: 'activate_',
            value: function activate_(e) {
              var _this9 = this;

              if (this.adapter_.isSurfaceDisabled()) {
                return;
              }

              var activationState = this.activationState_;
              if (activationState.isActivated) {
                return;
              }

              // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
              var previousActivationEvent = this.previousActivationEvent_;
              var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
              if (isSameInteraction) {
                return;
              }

              activationState.isActivated = true;
              activationState.isProgrammatic = e === undefined;
              activationState.activationEvent = e;
              activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

              var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
                return _this9.adapter_.containsEventTarget(target);
              });
              if (hasActivatedChild) {
                // Immediately reset activation state, while preserving logic that prevents touch follow-on events
                this.resetActivationState_();
                return;
              }

              if (e !== undefined) {
                activatedTargets.push( /** @type {!EventTarget} */e.target);
                this.registerDeactivationHandlers_(e);
              }

              activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
              if (activationState.wasElementMadeActive) {
                this.animateActivation_();
              }

              requestAnimationFrame(function () {
                // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
                activatedTargets = [];

                if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
                  // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                  // active states inconsistently when they're called within event handling code:
                  // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                  // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                  // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                  // variable is set within a rAF callback for a submit button interaction (#2241).
                  activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
                  if (activationState.wasElementMadeActive) {
                    _this9.animateActivation_();
                  }
                }

                if (!activationState.wasElementMadeActive) {
                  // Reset activation state immediately if element was not made active.
                  _this9.activationState_ = _this9.defaultActivationState_();
                }
              });
            }

            /**
             * @param {!Event=} e
             * @private
             */

          }, {
            key: 'checkElementMadeActive_',
            value: function checkElementMadeActive_(e) {
              return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
            }

            /**
             * @param {!Event=} event Optional event containing position information.
             */

          }, {
            key: 'activate',
            value: function activate(event) {
              this.activate_(event);
            }

            /** @private */

          }, {
            key: 'animateActivation_',
            value: function animateActivation_() {
              var _this10 = this;

              var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                  VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                  VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
              var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                  FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                  FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
              var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;

              this.layoutInternal_();

              var translateStart = '';
              var translateEnd = '';

              if (!this.adapter_.isUnbounded()) {
                var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                    startPoint = _getFgTranslationCoor.startPoint,
                    endPoint = _getFgTranslationCoor.endPoint;

                translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
                translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
              }

              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
              this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
              // Cancel any ongoing activation/deactivation animations
              clearTimeout(this.activationTimer_);
              clearTimeout(this.fgDeactivationRemovalTimer_);
              this.rmBoundedActivationClasses_();
              this.adapter_.removeClass(FG_DEACTIVATION);

              // Force layout in order to re-trigger the animation.
              this.adapter_.computeBoundingRect();
              this.adapter_.addClass(FG_ACTIVATION);
              this.activationTimer_ = setTimeout(function () {
                return _this10.activationTimerCallback_();
              }, DEACTIVATION_TIMEOUT_MS);
            }

            /**
             * @private
             * @return {{startPoint: PointType, endPoint: PointType}}
             */

          }, {
            key: 'getFgTranslationCoordinates_',
            value: function getFgTranslationCoordinates_() {
              var _activationState_ = this.activationState_,
                  activationEvent = _activationState_.activationEvent,
                  wasActivatedByPointer = _activationState_.wasActivatedByPointer;

              var startPoint = void 0;
              if (wasActivatedByPointer) {
                startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
                /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
              } else {
                startPoint = {
                  x: this.frame_.width / 2,
                  y: this.frame_.height / 2
                };
              }
              // Center the element around the start point.
              startPoint = {
                x: startPoint.x - this.initialSize_ / 2,
                y: startPoint.y - this.initialSize_ / 2
              };

              var endPoint = {
                x: this.frame_.width / 2 - this.initialSize_ / 2,
                y: this.frame_.height / 2 - this.initialSize_ / 2
              };

              return { startPoint: startPoint, endPoint: endPoint };
            }

            /** @private */

          }, {
            key: 'runDeactivationUXLogicIfReady_',
            value: function runDeactivationUXLogicIfReady_() {
              var _this11 = this;

              // This method is called both when a pointing device is released, and when the activation animation ends.
              // The deactivation animation should only run after both of those occur.
              var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
              var _activationState_2 = this.activationState_,
                  hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
                  isActivated = _activationState_2.isActivated;

              var activationHasEnded = hasDeactivationUXRun || !isActivated;

              if (activationHasEnded && this.activationAnimationHasEnded_) {
                this.rmBoundedActivationClasses_();
                this.adapter_.addClass(FG_DEACTIVATION);
                this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                  _this11.adapter_.removeClass(FG_DEACTIVATION);
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
              }
            }

            /** @private */

          }, {
            key: 'rmBoundedActivationClasses_',
            value: function rmBoundedActivationClasses_() {
              var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

              this.adapter_.removeClass(FG_ACTIVATION);
              this.activationAnimationHasEnded_ = false;
              this.adapter_.computeBoundingRect();
            }
          }, {
            key: 'resetActivationState_',
            value: function resetActivationState_() {
              var _this12 = this;

              this.previousActivationEvent_ = this.activationState_.activationEvent;
              this.activationState_ = this.defaultActivationState_();
              // Touch devices may fire additional events for the same interaction within a short time.
              // Store the previous event until it's safe to assume that subsequent events are for new interactions.
              setTimeout(function () {
                return _this12.previousActivationEvent_ = undefined;
              }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
            }

            /**
             * @private
             */

          }, {
            key: 'deactivate_',
            value: function deactivate_() {
              var _this13 = this;

              var activationState = this.activationState_;
              // This can happen in scenarios such as when you have a keyup event that blurs the element.
              if (!activationState.isActivated) {
                return;
              }

              var state = /** @type {!ActivationStateType} */_extends({}, activationState);

              if (activationState.isProgrammatic) {
                requestAnimationFrame(function () {
                  return _this13.animateDeactivation_(state);
                });
                this.resetActivationState_();
              } else {
                this.deregisterDeactivationHandlers_();
                requestAnimationFrame(function () {
                  _this13.activationState_.hasDeactivationUXRun = true;
                  _this13.animateDeactivation_(state);
                  _this13.resetActivationState_();
                });
              }
            }
          }, {
            key: 'deactivate',
            value: function deactivate() {
              this.deactivate_();
            }

            /**
             * @param {!ActivationStateType} options
             * @private
             */

          }, {
            key: 'animateDeactivation_',
            value: function animateDeactivation_(_ref) {
              var wasActivatedByPointer = _ref.wasActivatedByPointer,
                  wasElementMadeActive = _ref.wasElementMadeActive;

              if (wasActivatedByPointer || wasElementMadeActive) {
                this.runDeactivationUXLogicIfReady_();
              }
            }
          }, {
            key: 'layout',
            value: function layout() {
              var _this14 = this;

              if (this.layoutFrame_) {
                cancelAnimationFrame(this.layoutFrame_);
              }
              this.layoutFrame_ = requestAnimationFrame(function () {
                _this14.layoutInternal_();
                _this14.layoutFrame_ = 0;
              });
            }

            /** @private */

          }, {
            key: 'layoutInternal_',
            value: function layoutInternal_() {
              var _this15 = this;

              this.frame_ = this.adapter_.computeBoundingRect();
              var maxDim = Math.max(this.frame_.height, this.frame_.width);

              // Surface diameter is treated differently for unbounded vs. bounded ripples.
              // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
              // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
              // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
              // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
              // `overflow: hidden`.
              var getBoundedRadius = function getBoundedRadius() {
                var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
                return hypotenuse + MDCRippleFoundation.numbers.PADDING;
              };

              this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

              // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
              this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
              this.fgScale_ = this.maxRadius_ / this.initialSize_;

              this.updateLayoutCssVars_();
            }

            /** @private */

          }, {
            key: 'updateLayoutCssVars_',
            value: function updateLayoutCssVars_() {
              var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                  VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                  VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                  VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                  VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;

              this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
              this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

              if (this.adapter_.isUnbounded()) {
                this.unboundedCoords_ = {
                  left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                  top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
                };

                this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
                this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
              }
            }

            /** @param {boolean} unbounded */

          }, {
            key: 'setUnbounded',
            value: function setUnbounded(unbounded) {
              var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

              if (unbounded) {
                this.adapter_.addClass(UNBOUNDED);
              } else {
                this.adapter_.removeClass(UNBOUNDED);
              }
            }
          }, {
            key: 'handleFocus',
            value: function handleFocus() {
              var _this16 = this;

              requestAnimationFrame(function () {
                return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
              });
            }
          }, {
            key: 'handleBlur',
            value: function handleBlur() {
              var _this17 = this;

              requestAnimationFrame(function () {
                return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
              });
            }
          }]);

          return MDCRippleFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCRippleFoundation;

        /***/
      },

      /***/6:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return numbers;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        var cssClasses = {
          // Ripple is a special case where the "root" component is really a "mixin" of sorts,
          // given that it's an 'upgrade' to an existing component. That being said it is the root
          // CSS class that all other CSS classes derive from.
          ROOT: 'mdc-ripple-upgraded',
          UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
          BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
          FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
          FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
        };

        var strings = {
          VAR_LEFT: '--mdc-ripple-left',
          VAR_TOP: '--mdc-ripple-top',
          VAR_FG_SIZE: '--mdc-ripple-fg-size',
          VAR_FG_SCALE: '--mdc-ripple-fg-scale',
          VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
          VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
        };

        var numbers = {
          PADDING: 10,
          INITIAL_ORIGIN_SCALE: 0.6,
          DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
          FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
          TAP_DELAY_MS: 300 };

        /***/
      },

      /***/61:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(84);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(155);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
         * @final
         */

        var MDCTextFieldHelperTextFoundation = function (_MDCFoundation) {
          _inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);

          _createClass(MDCTextFieldHelperTextFoundation, null, [{
            key: 'cssClasses',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
            }

            /** @return enum {string} */

          }, {
            key: 'strings',
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
            }

            /**
             * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCTextFieldHelperTextAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCTextFieldHelperTextAdapter} */{
                  addClass: function addClass() {},
                  removeClass: function removeClass() {},
                  hasClass: function hasClass() {},
                  setAttr: function setAttr() {},
                  removeAttr: function removeAttr() {},
                  setContent: function setContent() {}
                }
              );
            }

            /**
             * @param {!MDCTextFieldHelperTextAdapter} adapter
             */

          }]);

          function MDCTextFieldHelperTextFoundation(adapter) {
            _classCallCheck(this, MDCTextFieldHelperTextFoundation);

            return _possibleConstructorReturn(this, (MDCTextFieldHelperTextFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperTextFoundation)).call(this, _extends(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
          }

          /**
           * Sets the content of the helper text field.
           * @param {string} content
           */

          _createClass(MDCTextFieldHelperTextFoundation, [{
            key: 'setContent',
            value: function setContent(content) {
              this.adapter_.setContent(content);
            }

            /** @param {boolean} isPersistent Sets the persistency of the helper text. */

          }, {
            key: 'setPersistent',
            value: function setPersistent(isPersistent) {
              if (isPersistent) {
                this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
              } else {
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
              }
            }

            /**
             * @param {boolean} isValidation True to make the helper text act as an
             *   error validation message.
             */

          }, {
            key: 'setValidation',
            value: function setValidation(isValidation) {
              if (isValidation) {
                this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
              } else {
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
              }
            }

            /** Makes the helper text visible to the screen reader. */

          }, {
            key: 'showToScreenReader',
            value: function showToScreenReader() {
              this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN);
            }

            /**
             * Sets the validity of the helper text based on the input validity.
             * @param {boolean} inputIsValid
             */

          }, {
            key: 'setValidity',
            value: function setValidity(inputIsValid) {
              var helperTextIsPersistent = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
              var helperTextIsValidationMsg = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
              var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

              if (validationMsgNeedsDisplay) {
                this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE, 'alert');
              } else {
                this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE);
              }

              if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
                this.hide_();
              }
            }

            /**
             * Hides the help text from screen readers.
             * @private
             */

          }, {
            key: 'hide_',
            value: function hide_() {
              this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN, 'true');
            }
          }]);

          return MDCTextFieldHelperTextFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCTextFieldHelperTextFoundation;

        /***/
      },

      /***/62:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(85);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(156);
        var _extends = Object.assign || function (target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }return target;
        };

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        function _possibleConstructorReturn(self, call) {
          if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
          }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /**
         * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
         * @final
         */

        var MDCTextFieldIconFoundation = function (_MDCFoundation) {
          _inherits(MDCTextFieldIconFoundation, _MDCFoundation);

          _createClass(MDCTextFieldIconFoundation, null, [{
            key: 'strings',

            /** @return enum {string} */
            get: function get() {
              return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */];
            }

            /**
             * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
             * types.
             * @return {!MDCTextFieldIconAdapter}
             */

          }, {
            key: 'defaultAdapter',
            get: function get() {
              return (/** @type {!MDCTextFieldIconAdapter} */{
                  getAttr: function getAttr() {},
                  setAttr: function setAttr() {},
                  removeAttr: function removeAttr() {},
                  setContent: function setContent() {},
                  registerInteractionHandler: function registerInteractionHandler() {},
                  deregisterInteractionHandler: function deregisterInteractionHandler() {},
                  notifyIconAction: function notifyIconAction() {}
                }
              );
            }

            /**
             * @param {!MDCTextFieldIconAdapter} adapter
             */

          }]);

          function MDCTextFieldIconFoundation(adapter) {
            _classCallCheck(this, MDCTextFieldIconFoundation);

            /** @private {string?} */
            var _this = _possibleConstructorReturn(this, (MDCTextFieldIconFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldIconFoundation)).call(this, _extends(MDCTextFieldIconFoundation.defaultAdapter, adapter)));

            _this.savedTabIndex_ = null;

            /** @private {function(!Event): undefined} */
            _this.interactionHandler_ = function (evt) {
              return _this.handleInteraction(evt);
            };
            return _this;
          }

          _createClass(MDCTextFieldIconFoundation, [{
            key: 'init',
            value: function init() {
              var _this2 = this;

              this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

              ['click', 'keydown'].forEach(function (evtType) {
                _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
              });
            }
          }, {
            key: 'destroy',
            value: function destroy() {
              var _this3 = this;

              ['click', 'keydown'].forEach(function (evtType) {
                _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
              });
            }

            /** @param {boolean} disabled */

          }, {
            key: 'setDisabled',
            value: function setDisabled(disabled) {
              if (!this.savedTabIndex_) {
                return;
              }

              if (disabled) {
                this.adapter_.setAttr('tabindex', '-1');
                this.adapter_.removeAttr('role');
              } else {
                this.adapter_.setAttr('tabindex', this.savedTabIndex_);
                this.adapter_.setAttr('role', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].ICON_ROLE);
              }
            }

            /** @param {string} label */

          }, {
            key: 'setAriaLabel',
            value: function setAriaLabel(label) {
              this.adapter_.setAttr('aria-label', label);
            }

            /** @param {string} content */

          }, {
            key: 'setContent',
            value: function setContent(content) {
              this.adapter_.setContent(content);
            }

            /**
             * Handles an interaction event
             * @param {!Event} evt
             */

          }, {
            key: 'handleInteraction',
            value: function handleInteraction(evt) {
              if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
                this.adapter_.notifyIconAction();
              }
            }
          }]);

          return MDCTextFieldIconFoundation;
        }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

        /* harmony default export */__webpack_exports__["a"] = MDCTextFieldIconFoundation;

        /***/
      },

      /***/82:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "c", function () {
          return cssClasses;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "e", function () {
          return strings;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "d", function () {
          return numbers;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
          return VALIDATION_ATTR_WHITELIST;
        });
        /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
          return ALWAYS_FLOAT_TYPES;
        });
        /**
         * @license
         * Copyright 2016 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /** @enum {string} */
        var strings = {
          ARIA_CONTROLS: 'aria-controls',
          INPUT_SELECTOR: '.mdc-text-field__input',
          LABEL_SELECTOR: '.mdc-floating-label',
          ICON_SELECTOR: '.mdc-text-field__icon',
          OUTLINE_SELECTOR: '.mdc-notched-outline',
          LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
        };

        /** @enum {string} */
        var cssClasses = {
          ROOT: 'mdc-text-field',
          DISABLED: 'mdc-text-field--disabled',
          DENSE: 'mdc-text-field--dense',
          FOCUSED: 'mdc-text-field--focused',
          INVALID: 'mdc-text-field--invalid',
          TEXTAREA: 'mdc-text-field--textarea',
          OUTLINED: 'mdc-text-field--outlined',
          WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon'
        };

        /** @enum {number} */
        var numbers = {
          LABEL_SCALE: 0.75,
          DENSE_LABEL_SCALE: 0.923
        };

        // whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
        // under section: `Validation-related attributes`
        var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

        // Label should always float for these types as they show some UI even if value is empty.
        var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];

        /***/
      },

      /***/83:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* unused harmony export MDCTextFieldAdapter */
        /* unused harmony export NativeInputType */
        /* unused harmony export FoundationMapType */
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__helper_text_foundation__ = __webpack_require__(61);
        /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__icon_foundation__ = __webpack_require__(62);
        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint-disable no-unused-vars */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * @typedef {{
         *   value: string,
         *   disabled: boolean,
         *   badInput: boolean,
         *   validity: {
         *     badInput: boolean,
         *     valid: boolean,
         *   },
         * }}
         */
        var NativeInputType = void 0;

        /**
         * @typedef {{
         *   helperText: (!MDCTextFieldHelperTextFoundation|undefined),
         *   leadingIcon: (!MDCTextFieldIconFoundation|undefined),
         *   trailingIcon: (!MDCTextFieldIconFoundation|undefined),
         * }}
         */
        var FoundationMapType = void 0;

        /**
         * Adapter for MDC Text Field.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the Text Field into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */

        var MDCTextFieldAdapter = function () {
          function MDCTextFieldAdapter() {
            _classCallCheck(this, MDCTextFieldAdapter);
          }

          _createClass(MDCTextFieldAdapter, [{
            key: 'addClass',

            /**
             * Adds a class to the root Element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the root Element.
             * @param {string} className
             */

          }, {
            key: 'removeClass',
            value: function removeClass(className) {}

            /**
             * Returns true if the root element contains the given class name.
             * @param {string} className
             * @return {boolean}
             */

          }, {
            key: 'hasClass',
            value: function hasClass(className) {}

            /**
             * Registers an event handler on the root element for a given event.
             * @param {string} type
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: 'registerTextFieldInteractionHandler',
            value: function registerTextFieldInteractionHandler(type, handler) {}

            /**
             * Deregisters an event handler on the root element for a given event.
             * @param {string} type
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: 'deregisterTextFieldInteractionHandler',
            value: function deregisterTextFieldInteractionHandler(type, handler) {}

            /**
             * Registers an event listener on the native input element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: 'registerInputInteractionHandler',
            value: function registerInputInteractionHandler(evtType, handler) {}

            /**
             * Deregisters an event listener on the native input element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: 'deregisterInputInteractionHandler',
            value: function deregisterInputInteractionHandler(evtType, handler) {}

            /**
             * Registers a validation attribute change listener on the input element.
             * Handler accepts list of attribute names.
             * @param {function(!Array<string>): undefined} handler
             * @return {!MutationObserver}
             */

          }, {
            key: 'registerValidationAttributeChangeHandler',
            value: function registerValidationAttributeChangeHandler(handler) {}

            /**
             * Disconnects a validation attribute observer on the input element.
             * @param {!MutationObserver} observer
             */

          }, {
            key: 'deregisterValidationAttributeChangeHandler',
            value: function deregisterValidationAttributeChangeHandler(observer) {}

            /**
             * Returns an object representing the native text input element, with a
             * similar API shape. The object returned should include the value, disabled
             * and badInput properties, as well as the checkValidity() function. We never
             * alter the value within our code, however we do update the disabled
             * property, so if you choose to duck-type the return value for this method
             * in your implementation it's important to keep this in mind. Also note that
             * this method can return null, which the foundation will handle gracefully.
             * @return {?Element|?NativeInputType}
             */

          }, {
            key: 'getNativeInput',
            value: function getNativeInput() {}

            /**
             * Returns true if the textfield is focused.
             * We achieve this via `document.activeElement === this.root_`.
             * @return {boolean}
             */

          }, {
            key: 'isFocused',
            value: function isFocused() {}

            /**
             * Activates the line ripple.
             */

          }, {
            key: 'activateLineRipple',
            value: function activateLineRipple() {}

            /**
             * Deactivates the line ripple.
             */

          }, {
            key: 'deactivateLineRipple',
            value: function deactivateLineRipple() {}

            /**
             * Sets the transform origin of the line ripple.
             * @param {number} normalizedX
             */

          }, {
            key: 'setLineRippleTransformOrigin',
            value: function setLineRippleTransformOrigin(normalizedX) {}

            /**
             * Only implement if label exists.
             * Shakes label if shouldShake is true.
             * @param {boolean} shouldShake
             */

          }, {
            key: 'shakeLabel',
            value: function shakeLabel(shouldShake) {}

            /**
             * Only implement if label exists.
             * Floats the label above the input element if shouldFloat is true.
             * @param {boolean} shouldFloat
             */

          }, {
            key: 'floatLabel',
            value: function floatLabel(shouldFloat) {}

            /**
             * Returns true if label element exists, false if it doesn't.
             * @return {boolean}
             */

          }, {
            key: 'hasLabel',
            value: function hasLabel() {}

            /**
             * Only implement if label exists.
             * Returns width of label in pixels.
             * @return {number}
             */

          }, {
            key: 'getLabelWidth',
            value: function getLabelWidth() {}

            /**
             * Returns true if outline element exists, false if it doesn't.
             * @return {boolean}
             */

          }, {
            key: 'hasOutline',
            value: function hasOutline() {}

            /**
             * Only implement if outline element exists.
             * @param {number} labelWidth
             */

          }, {
            key: 'notchOutline',
            value: function notchOutline(labelWidth) {}

            /**
             * Only implement if outline element exists.
             * Closes notch in outline element.
             */

          }, {
            key: 'closeOutline',
            value: function closeOutline() {}
          }]);

          return MDCTextFieldAdapter;
        }();

        /***/
      },

      /***/84:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Text Field Helper Text.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the TextField helper text into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCTextFieldHelperTextAdapter = function () {
          function MDCTextFieldHelperTextAdapter() {
            _classCallCheck(this, MDCTextFieldHelperTextAdapter);
          }

          _createClass(MDCTextFieldHelperTextAdapter, [{
            key: "addClass",

            /**
             * Adds a class to the helper text element.
             * @param {string} className
             */
            value: function addClass(className) {}

            /**
             * Removes a class from the helper text element.
             * @param {string} className
             */

          }, {
            key: "removeClass",
            value: function removeClass(className) {}

            /**
             * Returns whether or not the helper text element contains the given class.
             * @param {string} className
             * @return {boolean}
             */

          }, {
            key: "hasClass",
            value: function hasClass(className) {}

            /**
             * Sets an attribute with a given value on the helper text element.
             * @param {string} attr
             * @param {string} value
             */

          }, {
            key: "setAttr",
            value: function setAttr(attr, value) {}

            /**
             * Removes an attribute from the helper text element.
             * @param {string} attr
             */

          }, {
            key: "removeAttr",
            value: function removeAttr(attr) {}

            /**
             * Sets the text content for the helper text element.
             * @param {string} content
             */

          }, {
            key: "setContent",
            value: function setContent(content) {}
          }]);

          return MDCTextFieldHelperTextAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCTextFieldHelperTextAdapter;

        /***/
      },

      /***/85:
      /***/function _(module, __webpack_exports__, __webpack_require__) {

        "use strict";

        var _createClass = function () {
          function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
              var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
          }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
          };
        }();

        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }

        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Permission is hereby granted, free of charge, to any person obtaining a copy
         * of this software and associated documentation files (the "Software"), to deal
         * in the Software without restriction, including without limitation the rights
         * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
         * copies of the Software, and to permit persons to whom the Software is
         * furnished to do so, subject to the following conditions:
         *
         * The above copyright notice and this permission notice shall be included in
         * all copies or substantial portions of the Software.
         *
         * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
         * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
         * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
         * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
         * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
         * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
         * THE SOFTWARE.
         */

        /* eslint no-unused-vars: [2, {"args": "none"}] */

        /**
         * Adapter for MDC Text Field Icon.
         *
         * Defines the shape of the adapter expected by the foundation. Implement this
         * adapter to integrate the text field icon into your framework. See
         * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
         * for more information.
         *
         * @record
         */
        var MDCTextFieldIconAdapter = function () {
          function MDCTextFieldIconAdapter() {
            _classCallCheck(this, MDCTextFieldIconAdapter);
          }

          _createClass(MDCTextFieldIconAdapter, [{
            key: "getAttr",

            /**
             * Gets the value of an attribute on the icon element.
             * @param {string} attr
             * @return {string}
             */
            value: function getAttr(attr) {}

            /**
             * Sets an attribute on the icon element.
             * @param {string} attr
             * @param {string} value
             */

          }, {
            key: "setAttr",
            value: function setAttr(attr, value) {}

            /**
             * Removes an attribute from the icon element.
             * @param {string} attr
             */

          }, {
            key: "removeAttr",
            value: function removeAttr(attr) {}

            /**
             * Sets the text content of the icon element.
             * @param {string} content
             */

          }, {
            key: "setContent",
            value: function setContent(content) {}

            /**
             * Registers an event listener on the icon element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "registerInteractionHandler",
            value: function registerInteractionHandler(evtType, handler) {}

            /**
             * Deregisters an event listener on the icon element for a given event.
             * @param {string} evtType
             * @param {function(!Event): undefined} handler
             */

          }, {
            key: "deregisterInteractionHandler",
            value: function deregisterInteractionHandler(evtType, handler) {}

            /**
             * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
             */

          }, {
            key: "notifyIconAction",
            value: function notifyIconAction() {}
          }]);

          return MDCTextFieldIconAdapter;
        }();

        /* unused harmony default export */var _unused_webpack_default_export = MDCTextFieldIconAdapter;

        /***/
      }

      /******/ })
  );
});
//# sourceMappingURL=mdc.textfield.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MDCShortTopAppBarFoundation = exports.MDCFixedTopAppBarFoundation = exports.MDCTopAppBarFoundation = exports.MDCTopAppBarBaseFoundation = exports.MDCTopAppBar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(1);

var _adapter2 = _interopRequireDefault(_adapter);

var _component = __webpack_require__(9);

var _component2 = _interopRequireDefault(_component);

var _index = __webpack_require__(19);

var _constants = __webpack_require__(2);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

var _foundation3 = __webpack_require__(22);

var _foundation4 = _interopRequireDefault(_foundation3);

var _foundation5 = __webpack_require__(23);

var _foundation6 = _interopRequireDefault(_foundation5);

var _foundation7 = __webpack_require__(24);

var _foundation8 = _interopRequireDefault(_foundation7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCComponent<!MDCTopAppBarBaseFoundation>}
 * @final
 */
var MDCTopAppBar = function (_MDCComponent) {
  _inherits(MDCTopAppBar, _MDCComponent);

  /**
   * @param {...?} args
   */
  function MDCTopAppBar() {
    var _ref;

    _classCallCheck(this, MDCTopAppBar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @private {?Element} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCTopAppBar.__proto__ || Object.getPrototypeOf(MDCTopAppBar)).call.apply(_ref, [this].concat(args)));

    _this.navIcon_;
    /** @type {?Array<MDCRipple>} */
    _this.iconRipples_;
    /** @type {Object} */
    _this.scrollTarget_;
    return _this;
  }

  _createClass(MDCTopAppBar, [{
    key: 'initialize',
    value: function initialize() {
      var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
        return _index.MDCRipple.attachTo(el);
      };

      this.navIcon_ = this.root_.querySelector(_constants.strings.NAVIGATION_ICON_SELECTOR);

      // Get all icons in the toolbar and instantiate the ripples
      var icons = [].slice.call(this.root_.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR));
      if (this.navIcon_) {
        icons.push(this.navIcon_);
      }

      this.iconRipples_ = icons.map(function (icon) {
        var ripple = rippleFactory(icon);
        ripple.unbounded = true;
        return ripple;
      });

      this.scrollTarget_ = window;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      this.iconRipples_.forEach(function (iconRipple) {
        return iconRipple.destroy();
      });
      _get(MDCTopAppBar.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBar.prototype), 'destroy', this).call(this);
    }
  }, {
    key: 'setScrollTarget',
    value: function setScrollTarget(target) {
      this.foundation_.destroyScrollHandler();
      this.scrollTarget_ = target;
      this.foundation_.initScrollHandler();
    }

    /**
     * @param {!Element} root
     * @return {!MDCTopAppBar}
     */

  }, {
    key: 'getDefaultFoundation',


    /**
     * @return {!MDCTopAppBarBaseFoundation}
     */
    value: function getDefaultFoundation() {
      var _this2 = this;

      /** @type {!MDCTopAppBarAdapter} */
      var adapter = /** @type {!MDCTopAppBarAdapter} */_extends({
        hasClass: function hasClass(className) {
          return _this2.root_.classList.contains(className);
        },
        addClass: function addClass(className) {
          return _this2.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return _this2.root_.classList.remove(className);
        },
        setStyle: function setStyle(property, value) {
          return _this2.root_.style.setProperty(property, value);
        },
        getTopAppBarHeight: function getTopAppBarHeight() {
          return _this2.root_.clientHeight;
        },
        registerNavigationIconInteractionHandler: function registerNavigationIconInteractionHandler(evtType, handler) {
          if (_this2.navIcon_) {
            _this2.navIcon_.addEventListener(evtType, handler);
          }
        },
        deregisterNavigationIconInteractionHandler: function deregisterNavigationIconInteractionHandler(evtType, handler) {
          if (_this2.navIcon_) {
            _this2.navIcon_.removeEventListener(evtType, handler);
          }
        },
        notifyNavigationIconClicked: function notifyNavigationIconClicked() {
          _this2.emit(_constants.strings.NAVIGATION_EVENT, {});
        },
        registerScrollHandler: function registerScrollHandler(handler) {
          return _this2.scrollTarget_.addEventListener('scroll', handler);
        },
        deregisterScrollHandler: function deregisterScrollHandler(handler) {
          return _this2.scrollTarget_.removeEventListener('scroll', handler);
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        getViewportScrollY: function getViewportScrollY() {
          return _this2.scrollTarget_[_this2.scrollTarget_ === window ? 'pageYOffset' : 'scrollTop'];
        },
        getTotalActionItems: function getTotalActionItems() {
          return _this2.root_.querySelectorAll(_constants.strings.ACTION_ITEM_SELECTOR).length;
        }
      });

      /** @type {!MDCTopAppBarBaseFoundation} */
      var foundation = void 0;
      if (this.root_.classList.contains(_constants.cssClasses.SHORT_CLASS)) {
        foundation = new _foundation6.default(adapter);
      } else if (this.root_.classList.contains(_constants.cssClasses.FIXED_CLASS)) {
        foundation = new _foundation4.default(adapter);
      } else {
        foundation = new _foundation8.default(adapter);
      }

      return foundation;
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      return new MDCTopAppBar(root);
    }
  }]);

  return MDCTopAppBar;
}(_component2.default);

exports.MDCTopAppBar = MDCTopAppBar;
exports.MDCTopAppBarBaseFoundation = _foundation2.default;
exports.MDCTopAppBarFoundation = _foundation8.default;
exports.MDCFixedTopAppBarFoundation = _foundation4.default;
exports.MDCShortTopAppBarFoundation = _foundation6.default;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.util = exports.RippleCapableSurface = exports.MDCRippleFoundation = exports.MDCRipple = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _component = __webpack_require__(9);

var _component2 = _interopRequireDefault(_component);

var _adapter = __webpack_require__(10);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(20);

var _foundation2 = _interopRequireDefault(_foundation);

var _util = __webpack_require__(11);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends MDCComponent<!MDCRippleFoundation>
 */
var MDCRipple = function (_MDCComponent) {
  _inherits(MDCRipple, _MDCComponent);

  /** @param {...?} args */
  function MDCRipple() {
    var _ref;

    _classCallCheck(this, MDCRipple);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    /** @type {boolean} */
    var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

    _this.disabled = false;

    /** @private {boolean} */
    _this.unbounded_;
    return _this;
  }

  /**
   * @param {!Element} root
   * @param {{isUnbounded: (boolean|undefined)}=} options
   * @return {!MDCRipple}
   */


  _createClass(MDCRipple, [{
    key: 'setUnbounded_',


    /**
     * Closure Compiler throws an access control error when directly accessing a
     * protected or private property inside a getter/setter, like unbounded above.
     * By accessing the protected property inside a method, we solve that problem.
     * That's why this function exists.
     * @private
     */
    value: function setUnbounded_() {
      this.foundation_.setUnbounded(this.unbounded_);
    }
  }, {
    key: 'activate',
    value: function activate() {
      this.foundation_.activate();
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.foundation_.deactivate();
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.foundation_.layout();
    }

    /**
     * @return {!MDCRippleFoundation}
     * @override
     */

  }, {
    key: 'getDefaultFoundation',
    value: function getDefaultFoundation() {
      return new _foundation2.default(MDCRipple.createAdapter(this));
    }

    /** @override */

  }, {
    key: 'initialSyncWithDOM',
    value: function initialSyncWithDOM() {
      this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
    }
  }, {
    key: 'unbounded',


    /** @return {boolean} */
    get: function get() {
      return this.unbounded_;
    }

    /** @param {boolean} unbounded */
    ,
    set: function set(unbounded) {
      this.unbounded_ = Boolean(unbounded);
      this.setUnbounded_();
    }
  }], [{
    key: 'attachTo',
    value: function attachTo(root) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$isUnbounded = _ref2.isUnbounded,
          isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

      var ripple = new MDCRipple(root);
      // Only override unbounded behavior if option is explicitly specified
      if (isUnbounded !== undefined) {
        ripple.unbounded = /** @type {boolean} */isUnbounded;
      }
      return ripple;
    }

    /**
     * @param {!RippleCapableSurface} instance
     * @return {!MDCRippleAdapter}
     */

  }, {
    key: 'createAdapter',
    value: function createAdapter(instance) {
      var MATCHES = util.getMatchesProperty(HTMLElement.prototype);

      return {
        browserSupportsCssVars: function browserSupportsCssVars() {
          return util.supportsCssVariables(window);
        },
        isUnbounded: function isUnbounded() {
          return instance.unbounded;
        },
        isSurfaceActive: function isSurfaceActive() {
          return instance.root_[MATCHES](':active');
        },
        isSurfaceDisabled: function isSurfaceDisabled() {
          return instance.disabled;
        },
        addClass: function addClass(className) {
          return instance.root_.classList.add(className);
        },
        removeClass: function removeClass(className) {
          return instance.root_.classList.remove(className);
        },
        containsEventTarget: function containsEventTarget(target) {
          return instance.root_.contains(target);
        },
        registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
          return instance.root_.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
          return instance.root_.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.addEventListener(evtType, handler, util.applyPassive());
        },
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
          return document.documentElement.removeEventListener(evtType, handler, util.applyPassive());
        },
        registerResizeHandler: function registerResizeHandler(handler) {
          return window.addEventListener('resize', handler);
        },
        deregisterResizeHandler: function deregisterResizeHandler(handler) {
          return window.removeEventListener('resize', handler);
        },
        updateCssVariable: function updateCssVariable(varName, value) {
          return instance.root_.style.setProperty(varName, value);
        },
        computeBoundingRect: function computeBoundingRect() {
          return instance.root_.getBoundingClientRect();
        },
        getWindowPageOffset: function getWindowPageOffset() {
          return { x: window.pageXOffset, y: window.pageYOffset };
        }
      };
    }
  }]);

  return MDCRipple;
}(_component2.default);

/**
 * See Material Design spec for more details on when to use ripples.
 * https://material.io/guidelines/motion/choreography.html#choreography-creation
 * @record
 */


var RippleCapableSurface = function RippleCapableSurface() {
  _classCallCheck(this, RippleCapableSurface);
};

/** @protected {!Element} */


RippleCapableSurface.prototype.root_;

/**
 * Whether or not the ripple bleeds out of the bounds of the element.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.unbounded;

/**
 * Whether or not the ripple is attached to a disabled component.
 * @type {boolean|undefined}
 */
RippleCapableSurface.prototype.disabled;

exports.MDCRipple = MDCRipple;
exports.MDCRippleFoundation = _foundation2.default;
exports.RippleCapableSurface = RippleCapableSurface;
exports.util = util;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _foundation = __webpack_require__(6);

var _foundation2 = _interopRequireDefault(_foundation);

var _adapter = __webpack_require__(10);

var _adapter2 = _interopRequireDefault(_adapter);

var _constants = __webpack_require__(21);

var _util = __webpack_require__(11);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2016 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @typedef {{
 *   isActivated: (boolean|undefined),
 *   hasDeactivationUXRun: (boolean|undefined),
 *   wasActivatedByPointer: (boolean|undefined),
 *   wasElementMadeActive: (boolean|undefined),
 *   activationEvent: (!Event|undefined),
 *   isProgrammatic: (boolean|undefined)
 * }}
 */
var ActivationStateType = void 0;

/**
 * @typedef {{
 *   activate: (string|undefined),
 *   deactivate: (string|undefined),
 *   focus: (string|undefined),
 *   blur: (string|undefined)
 * }}
 */
var ListenerInfoType = void 0;

/**
 * @typedef {{
 *   activate: function(!Event),
 *   deactivate: function(!Event=),
 *   focus: function(),
 *   blur: function()
 * }}
 */
var ListenersType = void 0;

/**
 * @typedef {{
 *   x: number,
 *   y: number
 * }}
 */
var PointType = void 0;

// Activation events registered on the root element of each instance for activation
var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

// Deactivation events registered on documentElement when a pointer-related down event occurs
var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

// Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
/** @type {!Array<!EventTarget>} */
var activatedTargets = [];

/**
 * @extends {MDCFoundation<!MDCRippleAdapter>}
 */

var MDCRippleFoundation = function (_MDCFoundation) {
  _inherits(MDCRippleFoundation, _MDCFoundation);

  _createClass(MDCRippleFoundation, null, [{
    key: 'cssClasses',
    get: function get() {
      return _constants.cssClasses;
    }
  }, {
    key: 'strings',
    get: function get() {
      return _constants.strings;
    }
  }, {
    key: 'numbers',
    get: function get() {
      return _constants.numbers;
    }
  }, {
    key: 'defaultAdapter',
    get: function get() {
      return {
        browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
        isUnbounded: function isUnbounded() /* boolean */{},
        isSurfaceActive: function isSurfaceActive() /* boolean */{},
        isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
        addClass: function addClass() /* className: string */{},
        removeClass: function removeClass() /* className: string */{},
        containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
        registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
        registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
        deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
        updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
        computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
        getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
      };
    }
  }]);

  function MDCRippleFoundation(adapter) {
    _classCallCheck(this, MDCRippleFoundation);

    /** @private {number} */
    var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

    _this.layoutFrame_ = 0;

    /** @private {!ClientRect} */
    _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

    /** @private {!ActivationStateType} */
    _this.activationState_ = _this.defaultActivationState_();

    /** @private {number} */
    _this.initialSize_ = 0;

    /** @private {number} */
    _this.maxRadius_ = 0;

    /** @private {function(!Event)} */
    _this.activateHandler_ = function (e) {
      return _this.activate_(e);
    };

    /** @private {function(!Event=)} */
    _this.deactivateHandler_ = function () {
      return _this.deactivate_();
    };

    /** @private {function(!Event=)} */
    _this.focusHandler_ = function () {
      return _this.handleFocus();
    };

    /** @private {function(!Event=)} */
    _this.blurHandler_ = function () {
      return _this.handleBlur();
    };

    /** @private {!Function} */
    _this.resizeHandler_ = function () {
      return _this.layout();
    };

    /** @private {{left: number, top:number}} */
    _this.unboundedCoords_ = {
      left: 0,
      top: 0
    };

    /** @private {number} */
    _this.fgScale_ = 0;

    /** @private {number} */
    _this.activationTimer_ = 0;

    /** @private {number} */
    _this.fgDeactivationRemovalTimer_ = 0;

    /** @private {boolean} */
    _this.activationAnimationHasEnded_ = false;

    /** @private {!Function} */
    _this.activationTimerCallback_ = function () {
      _this.activationAnimationHasEnded_ = true;
      _this.runDeactivationUXLogicIfReady_();
    };

    /** @private {!Event|undefined} */
    _this.previousActivationEvent_;
    return _this;
  }

  /**
   * We compute this property so that we are not querying information about the client
   * until the point in time where the foundation requests it. This prevents scenarios where
   * client-side feature-detection may happen too early, such as when components are rendered on the server
   * and then initialized at mount time on the client.
   * @return {boolean}
   * @private
   */


  _createClass(MDCRippleFoundation, [{
    key: 'supportsPressRipple_',
    value: function supportsPressRipple_() {
      return this.adapter_.browserSupportsCssVars();
    }

    /**
     * @return {!ActivationStateType}
     */

  }, {
    key: 'defaultActivationState_',
    value: function defaultActivationState_() {
      return {
        isActivated: false,
        hasDeactivationUXRun: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false,
        activationEvent: undefined,
        isProgrammatic: false
      };
    }

    /** @override */

  }, {
    key: 'init',
    value: function init() {
      var _this2 = this;

      var supportsPressRipple = this.supportsPressRipple_();

      this.registerRootHandlers_(supportsPressRipple);

      if (supportsPressRipple) {
        var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$.ROOT,
            UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

        requestAnimationFrame(function () {
          _this2.adapter_.addClass(ROOT);
          if (_this2.adapter_.isUnbounded()) {
            _this2.adapter_.addClass(UNBOUNDED);
            // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
            _this2.layoutInternal_();
          }
        });
      }
    }

    /** @override */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this3 = this;

      if (this.supportsPressRipple_()) {
        if (this.activationTimer_) {
          clearTimeout(this.activationTimer_);
          this.activationTimer_ = 0;
          this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
        }

        if (this.fgDeactivationRemovalTimer_) {
          clearTimeout(this.fgDeactivationRemovalTimer_);
          this.fgDeactivationRemovalTimer_ = 0;
          this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
        }

        var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$2.ROOT,
            UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

        requestAnimationFrame(function () {
          _this3.adapter_.removeClass(ROOT);
          _this3.adapter_.removeClass(UNBOUNDED);
          _this3.removeCssVars_();
        });
      }

      this.deregisterRootHandlers_();
      this.deregisterDeactivationHandlers_();
    }

    /**
     * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
     * @private
     */

  }, {
    key: 'registerRootHandlers_',
    value: function registerRootHandlers_(supportsPressRipple) {
      var _this4 = this;

      if (supportsPressRipple) {
        ACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
        });
        if (this.adapter_.isUnbounded()) {
          this.adapter_.registerResizeHandler(this.resizeHandler_);
        }
      }

      this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
      this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
    }

    /**
     * @param {!Event} e
     * @private
     */

  }, {
    key: 'registerDeactivationHandlers_',
    value: function registerDeactivationHandlers_(e) {
      var _this5 = this;

      if (e.type === 'keydown') {
        this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
      } else {
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
        });
      }
    }

    /** @private */

  }, {
    key: 'deregisterRootHandlers_',
    value: function deregisterRootHandlers_() {
      var _this6 = this;

      ACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
      });
      this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
      this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

      if (this.adapter_.isUnbounded()) {
        this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      }
    }

    /** @private */

  }, {
    key: 'deregisterDeactivationHandlers_',
    value: function deregisterDeactivationHandlers_() {
      var _this7 = this;

      this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
      POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
        _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
      });
    }

    /** @private */

  }, {
    key: 'removeCssVars_',
    value: function removeCssVars_() {
      var _this8 = this;

      var strings = MDCRippleFoundation.strings;

      Object.keys(strings).forEach(function (k) {
        if (k.indexOf('VAR_') === 0) {
          _this8.adapter_.updateCssVariable(strings[k], null);
        }
      });
    }

    /**
     * @param {!Event=} e
     * @private
     */

  }, {
    key: 'activate_',
    value: function activate_(e) {
      var _this9 = this;

      if (this.adapter_.isSurfaceDisabled()) {
        return;
      }

      var activationState = this.activationState_;
      if (activationState.isActivated) {
        return;
      }

      // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
      var previousActivationEvent = this.previousActivationEvent_;
      var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
      if (isSameInteraction) {
        return;
      }

      activationState.isActivated = true;
      activationState.isProgrammatic = e === undefined;
      activationState.activationEvent = e;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

      var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
        return _this9.adapter_.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        // Immediately reset activation state, while preserving logic that prevents touch follow-on events
        this.resetActivationState_();
        return;
      }

      if (e !== undefined) {
        activatedTargets.push( /** @type {!EventTarget} */e.target);
        this.registerDeactivationHandlers_(e);
      }

      activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
      if (activationState.wasElementMadeActive) {
        this.animateActivation_();
      }

      requestAnimationFrame(function () {
        // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
        activatedTargets = [];

        if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
          // If space was pressed, try again within an rAF call to detect :active, because different UAs report
          // active states inconsistently when they're called within event handling code:
          // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
          // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
          // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
          // variable is set within a rAF callback for a submit button interaction (#2241).
          activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
          if (activationState.wasElementMadeActive) {
            _this9.animateActivation_();
          }
        }

        if (!activationState.wasElementMadeActive) {
          // Reset activation state immediately if element was not made active.
          _this9.activationState_ = _this9.defaultActivationState_();
        }
      });
    }

    /**
     * @param {!Event=} e
     * @private
     */

  }, {
    key: 'checkElementMadeActive_',
    value: function checkElementMadeActive_(e) {
      return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
    }

    /**
     * @param {!Event=} event Optional event containing position information.
     */

  }, {
    key: 'activate',
    value: function activate(event) {
      this.activate_(event);
    }

    /** @private */

  }, {
    key: 'animateActivation_',
    value: function animateActivation_() {
      var _this10 = this;

      var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
          VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
          VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
      var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
          FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
          FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


      this.layoutInternal_();

      var translateStart = '';
      var translateEnd = '';

      if (!this.adapter_.isUnbounded()) {
        var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
            startPoint = _getFgTranslationCoor.startPoint,
            endPoint = _getFgTranslationCoor.endPoint;

        translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
        translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
      }

      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      // Cancel any ongoing activation/deactivation animations
      clearTimeout(this.activationTimer_);
      clearTimeout(this.fgDeactivationRemovalTimer_);
      this.rmBoundedActivationClasses_();
      this.adapter_.removeClass(FG_DEACTIVATION);

      // Force layout in order to re-trigger the animation.
      this.adapter_.computeBoundingRect();
      this.adapter_.addClass(FG_ACTIVATION);
      this.activationTimer_ = setTimeout(function () {
        return _this10.activationTimerCallback_();
      }, DEACTIVATION_TIMEOUT_MS);
    }

    /**
     * @private
     * @return {{startPoint: PointType, endPoint: PointType}}
     */

  }, {
    key: 'getFgTranslationCoordinates_',
    value: function getFgTranslationCoordinates_() {
      var _activationState_ = this.activationState_,
          activationEvent = _activationState_.activationEvent,
          wasActivatedByPointer = _activationState_.wasActivatedByPointer;


      var startPoint = void 0;
      if (wasActivatedByPointer) {
        startPoint = (0, _util.getNormalizedEventCoords)(
        /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame_.width / 2,
          y: this.frame_.height / 2
        };
      }
      // Center the element around the start point.
      startPoint = {
        x: startPoint.x - this.initialSize_ / 2,
        y: startPoint.y - this.initialSize_ / 2
      };

      var endPoint = {
        x: this.frame_.width / 2 - this.initialSize_ / 2,
        y: this.frame_.height / 2 - this.initialSize_ / 2
      };

      return { startPoint: startPoint, endPoint: endPoint };
    }

    /** @private */

  }, {
    key: 'runDeactivationUXLogicIfReady_',
    value: function runDeactivationUXLogicIfReady_() {
      var _this11 = this;

      // This method is called both when a pointing device is released, and when the activation animation ends.
      // The deactivation animation should only run after both of those occur.
      var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
      var _activationState_2 = this.activationState_,
          hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
          isActivated = _activationState_2.isActivated;

      var activationHasEnded = hasDeactivationUXRun || !isActivated;

      if (activationHasEnded && this.activationAnimationHasEnded_) {
        this.rmBoundedActivationClasses_();
        this.adapter_.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer_ = setTimeout(function () {
          _this11.adapter_.removeClass(FG_DEACTIVATION);
        }, _constants.numbers.FG_DEACTIVATION_MS);
      }
    }

    /** @private */

  }, {
    key: 'rmBoundedActivationClasses_',
    value: function rmBoundedActivationClasses_() {
      var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

      this.adapter_.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded_ = false;
      this.adapter_.computeBoundingRect();
    }
  }, {
    key: 'resetActivationState_',
    value: function resetActivationState_() {
      var _this12 = this;

      this.previousActivationEvent_ = this.activationState_.activationEvent;
      this.activationState_ = this.defaultActivationState_();
      // Touch devices may fire additional events for the same interaction within a short time.
      // Store the previous event until it's safe to assume that subsequent events are for new interactions.
      setTimeout(function () {
        return _this12.previousActivationEvent_ = undefined;
      }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
    }

    /**
     * @private
     */

  }, {
    key: 'deactivate_',
    value: function deactivate_() {
      var _this13 = this;

      var activationState = this.activationState_;
      // This can happen in scenarios such as when you have a keyup event that blurs the element.
      if (!activationState.isActivated) {
        return;
      }

      var state = /** @type {!ActivationStateType} */_extends({}, activationState);

      if (activationState.isProgrammatic) {
        requestAnimationFrame(function () {
          return _this13.animateDeactivation_(state);
        });
        this.resetActivationState_();
      } else {
        this.deregisterDeactivationHandlers_();
        requestAnimationFrame(function () {
          _this13.activationState_.hasDeactivationUXRun = true;
          _this13.animateDeactivation_(state);
          _this13.resetActivationState_();
        });
      }
    }
  }, {
    key: 'deactivate',
    value: function deactivate() {
      this.deactivate_();
    }

    /**
     * @param {!ActivationStateType} options
     * @private
     */

  }, {
    key: 'animateDeactivation_',
    value: function animateDeactivation_(_ref) {
      var wasActivatedByPointer = _ref.wasActivatedByPointer,
          wasElementMadeActive = _ref.wasElementMadeActive;

      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady_();
      }
    }
  }, {
    key: 'layout',
    value: function layout() {
      var _this14 = this;

      if (this.layoutFrame_) {
        cancelAnimationFrame(this.layoutFrame_);
      }
      this.layoutFrame_ = requestAnimationFrame(function () {
        _this14.layoutInternal_();
        _this14.layoutFrame_ = 0;
      });
    }

    /** @private */

  }, {
    key: 'layoutInternal_',
    value: function layoutInternal_() {
      var _this15 = this;

      this.frame_ = this.adapter_.computeBoundingRect();
      var maxDim = Math.max(this.frame_.height, this.frame_.width);

      // Surface diameter is treated differently for unbounded vs. bounded ripples.
      // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
      // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
      // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
      // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
      // `overflow: hidden`.
      var getBoundedRadius = function getBoundedRadius() {
        var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
        return hypotenuse + MDCRippleFoundation.numbers.PADDING;
      };

      this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

      // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
      this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
      this.fgScale_ = this.maxRadius_ / this.initialSize_;

      this.updateLayoutCssVars_();
    }

    /** @private */

  }, {
    key: 'updateLayoutCssVars_',
    value: function updateLayoutCssVars_() {
      var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
          VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
          VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
          VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
          VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


      this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
      this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

      if (this.adapter_.isUnbounded()) {
        this.unboundedCoords_ = {
          left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
          top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
        };

        this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
        this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
      }
    }

    /** @param {boolean} unbounded */

  }, {
    key: 'setUnbounded',
    value: function setUnbounded(unbounded) {
      var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

      if (unbounded) {
        this.adapter_.addClass(UNBOUNDED);
      } else {
        this.adapter_.removeClass(UNBOUNDED);
      }
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      var _this16 = this;

      requestAnimationFrame(function () {
        return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur() {
      var _this17 = this;

      requestAnimationFrame(function () {
        return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
      });
    }
  }]);

  return MDCRippleFoundation;
}(_foundation2.default);

exports.default = MDCRippleFoundation;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

var cssClasses = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  ROOT: 'mdc-ripple-upgraded',
  UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
  BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
  FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
  FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
};

var strings = {
  VAR_LEFT: '--mdc-ripple-left',
  VAR_TOP: '--mdc-ripple-top',
  VAR_FG_SIZE: '--mdc-ripple-fg-size',
  VAR_FG_SCALE: '--mdc-ripple-fg-scale',
  VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
  VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
};

var numbers = {
  PADDING: 10,
  INITIAL_ORIGIN_SCALE: 0.6,
  DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
  FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
  TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
};

exports.cssClasses = cssClasses;
exports.strings = strings;
exports.numbers = numbers;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _constants = __webpack_require__(2);

var _adapter = __webpack_require__(1);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCTopAppBarFoundation<!MDCFixedTopAppBarFoundation>}
 * @final
 */
var MDCFixedTopAppBarFoundation = function (_MDCTopAppBarFoundati) {
  _inherits(MDCFixedTopAppBarFoundation, _MDCTopAppBarFoundati);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCFixedTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCFixedTopAppBarFoundation);

    /** State variable for the previous scroll iteration top app bar state */
    var _this = _possibleConstructorReturn(this, (MDCFixedTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation)).call(this, adapter));

    _this.wasScrolled_ = false;

    _this.scrollHandler_ = function () {
      return _this.fixedScrollHandler_();
    };
    return _this;
  }

  _createClass(MDCFixedTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCFixedTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation.prototype), 'init', this).call(this);
      this.adapter_.registerScrollHandler(this.scrollHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCFixedTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCFixedTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }

    /**
     * Scroll handler for applying/removing the modifier class
     * on the fixed top app bar.
     */

  }, {
    key: 'fixedScrollHandler_',
    value: function fixedScrollHandler_() {
      var currentScroll = this.adapter_.getViewportScrollY();

      if (currentScroll <= 0) {
        if (this.wasScrolled_) {
          this.adapter_.removeClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
          this.wasScrolled_ = false;
        }
      } else {
        if (!this.wasScrolled_) {
          this.adapter_.addClass(_constants.cssClasses.FIXED_SCROLLED_CLASS);
          this.wasScrolled_ = true;
        }
      }
    }
  }]);

  return MDCFixedTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCFixedTopAppBarFoundation;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(1);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCShortTopAppBarFoundation>}
 * @final
 */
var MDCShortTopAppBarFoundation = function (_MDCTopAppBarBaseFoun) {
  _inherits(MDCShortTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCShortTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCShortTopAppBarFoundation);

    // State variable for the current top app bar state
    var _this = _possibleConstructorReturn(this, (MDCShortTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation)).call(this, adapter));

    _this.isCollapsed = false;

    _this.scrollHandler_ = function () {
      return _this.shortAppBarScrollHandler_();
    };
    return _this;
  }

  _createClass(MDCShortTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCShortTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation.prototype), 'init', this).call(this);
      var isAlwaysCollapsed = this.adapter_.hasClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);

      if (this.adapter_.getTotalActionItems() > 0) {
        this.adapter_.addClass(_constants.cssClasses.SHORT_HAS_ACTION_ITEM_CLASS);
      }

      if (!isAlwaysCollapsed) {
        this.adapter_.registerScrollHandler(this.scrollHandler_);
        this.shortAppBarScrollHandler_();
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCShortTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCShortTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
    }

    /**
     * Scroll handler for applying/removing the collapsed modifier class
     * on the short top app bar.
     * @private
     */

  }, {
    key: 'shortAppBarScrollHandler_',
    value: function shortAppBarScrollHandler_() {
      var currentScroll = this.adapter_.getViewportScrollY();

      if (currentScroll <= 0) {
        if (this.isCollapsed) {
          this.adapter_.removeClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
          this.isCollapsed = false;
        }
      } else {
        if (!this.isCollapsed) {
          this.adapter_.addClass(_constants.cssClasses.SHORT_COLLAPSED_CLASS);
          this.isCollapsed = true;
        }
      }
    }
  }]);

  return MDCShortTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCShortTopAppBarFoundation;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _adapter = __webpack_require__(1);

var _adapter2 = _interopRequireDefault(_adapter);

var _foundation = __webpack_require__(3);

var _foundation2 = _interopRequireDefault(_foundation);

var _constants = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright 2018 Google Inc.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Permission is hereby granted, free of charge, to any person obtaining a copy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * of this software and associated documentation files (the "Software"), to deal
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * in the Software without restriction, including without limitation the rights
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * copies of the Software, and to permit persons to whom the Software is
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * furnished to do so, subject to the following conditions:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * The above copyright notice and this permission notice shall be included in
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * all copies or substantial portions of the Software.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * THE SOFTWARE.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var INITIAL_VALUE = 0;
/**
 * @extends {MDCTopAppBarBaseFoundation<!MDCTopAppBarFoundation>}
 * @final
 */

var MDCTopAppBarFoundation = function (_MDCTopAppBarBaseFoun) {
  _inherits(MDCTopAppBarFoundation, _MDCTopAppBarBaseFoun);

  /**
   * @param {!MDCTopAppBarAdapter} adapter
   */
  function MDCTopAppBarFoundation(adapter) {
    _classCallCheck(this, MDCTopAppBarFoundation);

    /**
     * Used for diffs of current scroll position vs previous scroll position
     * @private {number}
     */
    var _this = _possibleConstructorReturn(this, (MDCTopAppBarFoundation.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation)).call(this, adapter));

    _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();

    /**
     * Used to verify when the top app bar is completely showing or completely hidden
     * @private {number}
     */
    _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();

    /**
     * wasDocked_ is used to indicate if the top app bar was docked in the previous
     * scroll handler iteration.
     * @private {boolean}
     */
    _this.wasDocked_ = true;

    /**
     * isDockedShowing_ is used to indicate if the top app bar is docked in the fully
     * shown position.
     * @private {boolean}
     */
    _this.isDockedShowing_ = true;

    /**
     * Variable for current scroll position of the top app bar
     * @private {number}
     */
    _this.currentAppBarOffsetTop_ = 0;

    /**
     * Used to prevent the top app bar from being scrolled out of view during resize events
     * @private {boolean} */
    _this.isCurrentlyBeingResized_ = false;

    /**
     * The timeout that's used to throttle the resize events
     * @private {number}
     */
    _this.resizeThrottleId_ = INITIAL_VALUE;

    /**
     * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
     * @private {number}
     */
    _this.resizeDebounceId_ = INITIAL_VALUE;

    _this.scrollHandler_ = function () {
      return _this.topAppBarScrollHandler_();
    };
    _this.resizeHandler_ = function () {
      return _this.topAppBarResizeHandler_();
    };
    return _this;
  }

  _createClass(MDCTopAppBarFoundation, [{
    key: 'init',
    value: function init() {
      _get(MDCTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation.prototype), 'init', this).call(this);
      this.adapter_.registerScrollHandler(this.scrollHandler_);
      this.adapter_.registerResizeHandler(this.resizeHandler_);
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      _get(MDCTopAppBarFoundation.prototype.__proto__ || Object.getPrototypeOf(MDCTopAppBarFoundation.prototype), 'destroy', this).call(this);
      this.adapter_.deregisterScrollHandler(this.scrollHandler_);
      this.adapter_.deregisterResizeHandler(this.resizeHandler_);
      this.adapter_.setStyle('top', '');
    }

    /**
     * Function to determine if the DOM needs to update.
     * @return {boolean}
     * @private
     */

  }, {
    key: 'checkForUpdate_',
    value: function checkForUpdate_() {
      var offscreenBoundaryTop = -this.topAppBarHeight_;
      var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
      var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
      var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen;

      // If it's partially showing, it can't be docked.
      if (partiallyShowing) {
        this.wasDocked_ = false;
      } else {
        // Not previously docked and not partially showing, it's now docked.
        if (!this.wasDocked_) {
          this.wasDocked_ = true;
          return true;
        } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
          this.isDockedShowing_ = hasAnyPixelsOnscreen;
          return true;
        }
      }

      return partiallyShowing;
    }

    /**
     * Function to move the top app bar if needed.
     * @private
     */

  }, {
    key: 'moveTopAppBar_',
    value: function moveTopAppBar_() {
      if (this.checkForUpdate_()) {
        // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
        // so the top app bar doesn't show if the window resizes and the new height > the old height.
        var offset = this.currentAppBarOffsetTop_;
        if (Math.abs(offset) >= this.topAppBarHeight_) {
          offset = -_constants.numbers.MAX_TOP_APP_BAR_HEIGHT;
        }

        this.adapter_.setStyle('top', offset + 'px');
      }
    }

    /**
     * Scroll handler for the default scroll behavior of the top app bar.
     * @private
     */

  }, {
    key: 'topAppBarScrollHandler_',
    value: function topAppBarScrollHandler_() {
      var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
      var diff = currentScrollPosition - this.lastScrollPosition_;
      this.lastScrollPosition_ = currentScrollPosition;

      // If the window is being resized the lastScrollPosition_ needs to be updated but the
      // current scroll of the top app bar should stay in the same position.
      if (!this.isCurrentlyBeingResized_) {
        this.currentAppBarOffsetTop_ -= diff;

        if (this.currentAppBarOffsetTop_ > 0) {
          this.currentAppBarOffsetTop_ = 0;
        } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
          this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
        }

        this.moveTopAppBar_();
      }
    }

    /**
     * Top app bar resize handler that throttle/debounce functions that execute updates.
     * @private
     */

  }, {
    key: 'topAppBarResizeHandler_',
    value: function topAppBarResizeHandler_() {
      var _this2 = this;

      // Throttle resize events 10 p/s
      if (!this.resizeThrottleId_) {
        this.resizeThrottleId_ = setTimeout(function () {
          _this2.resizeThrottleId_ = INITIAL_VALUE;
          _this2.throttledResizeHandler_();
        }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
      }

      this.isCurrentlyBeingResized_ = true;

      if (this.resizeDebounceId_) {
        clearTimeout(this.resizeDebounceId_);
      }

      this.resizeDebounceId_ = setTimeout(function () {
        _this2.topAppBarScrollHandler_();
        _this2.isCurrentlyBeingResized_ = false;
        _this2.resizeDebounceId_ = INITIAL_VALUE;
      }, _constants.numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
    }

    /**
     * Throttled function that updates the top app bar scrolled values if the
     * top app bar height changes.
     * @private
     */

  }, {
    key: 'throttledResizeHandler_',
    value: function throttledResizeHandler_() {
      var currentHeight = this.adapter_.getTopAppBarHeight();
      if (this.topAppBarHeight_ !== currentHeight) {
        this.wasDocked_ = false;

        // Since the top app bar has a different height depending on the screen width, this
        // will ensure that the top app bar remains in the correct location if
        // completely hidden and a resize makes the top app bar a different height.
        this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
        this.topAppBarHeight_ = currentHeight;
      }
      this.topAppBarScrollHandler_();
    }
  }]);

  return MDCTopAppBarFoundation;
}(_foundation2.default);

exports.default = MDCTopAppBarFoundation;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["ripple"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["ripple"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 4);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @template A
       */
      var MDCFoundation = function () {
        _createClass(MDCFoundation, null, [{
          key: "cssClasses",

          /** @return enum{cssClasses} */
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
          }

          /** @return enum{strings} */

        }, {
          key: "strings",
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
          }

          /** @return enum{numbers} */

        }, {
          key: "numbers",
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
          }

          /** @return {!Object} */

        }, {
          key: "defaultAdapter",
          get: function get() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
          }

          /**
           * @param {A=} adapter
           */

        }]);

        function MDCFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, MDCFoundation);

          /** @protected {!A} */
          this.adapter_ = adapter;
        }

        _createClass(MDCFoundation, [{
          key: "init",
          value: function init() {
            // Subclasses should override this method to perform initialization routines (registering events, etc.)
          }
        }, {
          key: "destroy",
          value: function destroy() {
            // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
          }
        }]);

        return MDCFoundation;
      }();

      /* harmony default export */__webpack_exports__["a"] = MDCFoundation;

      /***/
    },
    /* 1 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @template F
       */

      var MDCComponent = function () {
        _createClass(MDCComponent, null, [{
          key: 'attachTo',

          /**
           * @param {!Element} root
           * @return {!MDCComponent}
           */
          value: function attachTo(root) {
            // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
            // returns an instantiated component with its root set to that element. Also note that in the cases of
            // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
            // from getDefaultFoundation().
            return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
          }

          /**
           * @param {!Element} root
           * @param {F=} foundation
           * @param {...?} args
           */

        }]);

        function MDCComponent(root) {
          var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          _classCallCheck(this, MDCComponent);

          /** @protected {!Element} */
          this.root_ = root;

          for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          this.initialize.apply(this, args);
          // Note that we initialize foundation here and not within the constructor's default param so that
          // this.root_ is defined and can be used within the foundation class.
          /** @protected {!F} */
          this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
          this.foundation_.init();
          this.initialSyncWithDOM();
        }

        _createClass(MDCComponent, [{
          key: 'initialize',
          value: function initialize() /* ...args */{}
          // Subclasses can override this to do any additional setup work that would be considered part of a
          // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
          // initialized. Any additional arguments besides root and foundation will be passed in here.


          /**
           * @return {!F} foundation
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            // Subclasses must override this method to return a properly configured foundation class for the
            // component.
            throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            // Subclasses should override this method if they need to perform work to synchronize with a host DOM
            // object. An example of this would be a form control wrapper that needs to synchronize its internal state
            // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
            // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            // Subclasses may implement this method to release any resources / deregister any listeners they have
            // attached. An example of this might be deregistering a resize event from the window object.
            this.foundation_.destroy();
          }

          /**
           * Wrapper method to add an event listener to the component's root element. This is most useful when
           * listening for custom events.
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: 'listen',
          value: function listen(evtType, handler) {
            this.root_.addEventListener(evtType, handler);
          }

          /**
           * Wrapper method to remove an event listener to the component's root element. This is most useful when
           * unlistening for custom events.
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: 'unlisten',
          value: function unlisten(evtType, handler) {
            this.root_.removeEventListener(evtType, handler);
          }

          /**
           * Fires a cross-browser-compatible custom event from the component root of the given type,
           * with the given data.
           * @param {string} evtType
           * @param {!Object} evtData
           * @param {boolean=} shouldBubble
           */

        }, {
          key: 'emit',
          value: function emit(evtType, evtData) {
            var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var evt = void 0;
            if (typeof CustomEvent === 'function') {
              evt = new CustomEvent(evtType, {
                detail: evtData,
                bubbles: shouldBubble
              });
            } else {
              evt = document.createEvent('CustomEvent');
              evt.initCustomEvent(evtType, shouldBubble, false, evtData);
            }

            this.root_.dispatchEvent(evt);
          }
        }]);

        return MDCComponent;
      }();

      /* harmony default export */__webpack_exports__["a"] = MDCComponent;

      /***/
    },
    /* 2 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () {
        return supportsCssVariables;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "applyPassive", function () {
        return applyPassive;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getMatchesProperty", function () {
        return getMatchesProperty;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () {
        return getNormalizedEventCoords;
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
       * @private {boolean|undefined}
       */
      var supportsCssVariables_ = void 0;

      /**
       * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
       * @private {boolean|undefined}
       */
      var supportsPassive_ = void 0;

      /**
       * @param {!Window} windowObj
       * @return {boolean}
       */
      function detectEdgePseudoVarBug(windowObj) {
        // Detect versions of Edge with buggy var() support
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
        var document = windowObj.document;
        var node = document.createElement('div');
        node.className = 'mdc-ripple-surface--test-edge-var-bug';
        document.body.appendChild(node);

        // The bug exists if ::before style ends up propagating to the parent element.
        // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
        // but Firefox is known to support CSS custom properties correctly.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        var computedStyle = windowObj.getComputedStyle(node);
        var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
        node.remove();
        return hasPseudoVarBug;
      }

      /**
       * @param {!Window} windowObj
       * @param {boolean=} forceRefresh
       * @return {boolean|undefined}
       */

      function supportsCssVariables(windowObj) {
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var supportsCssVariables = supportsCssVariables_;
        if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
          return supportsCssVariables;
        }

        var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
        if (!supportsFunctionPresent) {
          return;
        }

        var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
        // See: https://bugs.webkit.org/show_bug.cgi?id=154669
        // See: README section on Safari
        var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

        if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
          supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
        } else {
          supportsCssVariables = false;
        }

        if (!forceRefresh) {
          supportsCssVariables_ = supportsCssVariables;
        }
        return supportsCssVariables;
      }

      //
      /**
       * Determine whether the current browser supports passive event listeners, and if so, use them.
       * @param {!Window=} globalObj
       * @param {boolean=} forceRefresh
       * @return {boolean|!EventListenerOptions}
       */
      function applyPassive() {
        var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (supportsPassive_ === undefined || forceRefresh) {
          var isSupported = false;
          try {
            globalObj.document.addEventListener('test', null, { get passive() {
                isSupported = true;
                return isSupported;
              } });
          } catch (e) {}

          supportsPassive_ = isSupported;
        }

        return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
      }

      /**
       * @param {!Object} HTMLElementPrototype
       * @return {string}
       */
      function getMatchesProperty(HTMLElementPrototype) {
        /**
         * Order is important because we return the first existing method we find.
         * Do not change the order of the items in the below array.
         */
        var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
        var method = 'matches';
        for (var i = 0; i < matchesMethods.length; i++) {
          var matchesMethod = matchesMethods[i];
          if (matchesMethod in HTMLElementPrototype) {
            method = matchesMethod;
            break;
          }
        }

        return method;
      }

      /**
       * @param {!Event} ev
       * @param {{x: number, y: number}} pageOffset
       * @param {!ClientRect} clientRect
       * @return {{x: number, y: number}}
       */
      function getNormalizedEventCoords(ev, pageOffset, clientRect) {
        var x = pageOffset.x,
            y = pageOffset.y;

        var documentX = x + clientRect.left;
        var documentY = y + clientRect.top;

        var normalizedX = void 0;
        var normalizedY = void 0;
        // Determine touch point relative to the ripple container.
        if (ev.type === 'touchstart') {
          ev = /** @type {!TouchEvent} */ev;
          normalizedX = ev.changedTouches[0].pageX - documentX;
          normalizedY = ev.changedTouches[0].pageY - documentY;
        } else {
          ev = /** @type {!MouseEvent} */ev;
          normalizedX = ev.pageX - documentX;
          normalizedY = ev.pageY - documentY;
        }

        return { x: normalizedX, y: normalizedY };
      }

      /***/
    },
    /* 3 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC Ripple. Provides an interface for managing
       * - classes
       * - dom
       * - CSS variables
       * - position
       * - dimensions
       * - scroll position
       * - event handlers
       * - unbounded, active and disabled states
       *
       * Additionally, provides type information for the adapter to the Closure
       * compiler.
       *
       * Implement this adapter for your framework of choice to delegate updates to
       * the component in your framework of choice. See architecture documentation
       * for more details.
       * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
       *
       * @record
       */
      var MDCRippleAdapter = function () {
        function MDCRippleAdapter() {
          _classCallCheck(this, MDCRippleAdapter);
        }

        _createClass(MDCRippleAdapter, [{
          key: "browserSupportsCssVars",

          /** @return {boolean} */
          value: function browserSupportsCssVars() {}

          /** @return {boolean} */

        }, {
          key: "isUnbounded",
          value: function isUnbounded() {}

          /** @return {boolean} */

        }, {
          key: "isSurfaceActive",
          value: function isSurfaceActive() {}

          /** @return {boolean} */

        }, {
          key: "isSurfaceDisabled",
          value: function isSurfaceDisabled() {}

          /** @param {string} className */

        }, {
          key: "addClass",
          value: function addClass(className) {}

          /** @param {string} className */

        }, {
          key: "removeClass",
          value: function removeClass(className) {}

          /** @param {!EventTarget} target */

        }, {
          key: "containsEventTarget",
          value: function containsEventTarget(target) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "registerDocumentInteractionHandler",
          value: function registerDocumentInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "deregisterDocumentInteractionHandler",
          value: function deregisterDocumentInteractionHandler(evtType, handler) {}

          /**
           * @param {!Function} handler
           */

        }, {
          key: "registerResizeHandler",
          value: function registerResizeHandler(handler) {}

          /**
           * @param {!Function} handler
           */

        }, {
          key: "deregisterResizeHandler",
          value: function deregisterResizeHandler(handler) {}

          /**
           * @param {string} varName
           * @param {?number|string} value
           */

        }, {
          key: "updateCssVariable",
          value: function updateCssVariable(varName, value) {}

          /** @return {!ClientRect} */

        }, {
          key: "computeBoundingRect",
          value: function computeBoundingRect() {}

          /** @return {{x: number, y: number}} */

        }, {
          key: "getWindowPageOffset",
          value: function getWindowPageOffset() {}
        }]);

        return MDCRippleAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCRippleAdapter;

      /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCRipple", function () {
        return MDCRipple;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function () {
        return RippleCapableSurface;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      /* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__, "util", function () {
        return __WEBPACK_IMPORTED_MODULE_3__util__;
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends MDCComponent<!MDCRippleFoundation>
       */

      var MDCRipple = function (_MDCComponent) {
        _inherits(MDCRipple, _MDCComponent);

        /** @param {...?} args */
        function MDCRipple() {
          var _ref;

          _classCallCheck(this, MDCRipple);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /** @type {boolean} */
          var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

          _this.disabled = false;

          /** @private {boolean} */
          _this.unbounded_;
          return _this;
        }

        /**
         * @param {!Element} root
         * @param {{isUnbounded: (boolean|undefined)}=} options
         * @return {!MDCRipple}
         */

        _createClass(MDCRipple, [{
          key: 'setUnbounded_',

          /**
           * Closure Compiler throws an access control error when directly accessing a
           * protected or private property inside a getter/setter, like unbounded above.
           * By accessing the protected property inside a method, we solve that problem.
           * That's why this function exists.
           * @private
           */
          value: function setUnbounded_() {
            this.foundation_.setUnbounded(this.unbounded_);
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.foundation_.activate();
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.foundation_.deactivate();
          }
        }, {
          key: 'layout',
          value: function layout() {
            this.foundation_.layout();
          }

          /**
           * @return {!MDCRippleFoundation}
           * @override
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
          }

          /** @override */

        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
          }
        }, {
          key: 'unbounded',

          /** @return {boolean} */
          get: function get() {
            return this.unbounded_;
          }

          /** @param {boolean} unbounded */

          , set: function set(unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$isUnbounded = _ref2.isUnbounded,
                isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

            var ripple = new MDCRipple(root);
            // Only override unbounded behavior if option is explicitly specified
            if (isUnbounded !== undefined) {
              ripple.unbounded = /** @type {boolean} */isUnbounded;
            }
            return ripple;
          }

          /**
           * @param {!RippleCapableSurface} instance
           * @return {!MDCRippleAdapter}
           */

        }, {
          key: 'createAdapter',
          value: function createAdapter(instance) {
            var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

            return {
              browserSupportsCssVars: function browserSupportsCssVars() {
                return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
              },
              isUnbounded: function isUnbounded() {
                return instance.unbounded;
              },
              isSurfaceActive: function isSurfaceActive() {
                return instance.root_[MATCHES](':active');
              },
              isSurfaceDisabled: function isSurfaceDisabled() {
                return instance.disabled;
              },
              addClass: function addClass(className) {
                return instance.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return instance.root_.classList.remove(className);
              },
              containsEventTarget: function containsEventTarget(target) {
                return instance.root_.contains(target);
              },
              registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              },
              updateCssVariable: function updateCssVariable(varName, value) {
                return instance.root_.style.setProperty(varName, value);
              },
              computeBoundingRect: function computeBoundingRect() {
                return instance.root_.getBoundingClientRect();
              },
              getWindowPageOffset: function getWindowPageOffset() {
                return { x: window.pageXOffset, y: window.pageYOffset };
              }
            };
          }
        }]);

        return MDCRipple;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /**
       * See Material Design spec for more details on when to use ripples.
       * https://material.io/guidelines/motion/choreography.html#choreography-creation
       * @record
       */

      var RippleCapableSurface = function RippleCapableSurface() {
        _classCallCheck(this, RippleCapableSurface);
      };

      /** @protected {!Element} */

      RippleCapableSurface.prototype.root_;

      /**
       * Whether or not the ripple bleeds out of the bounds of the element.
       * @type {boolean|undefined}
       */
      RippleCapableSurface.prototype.unbounded;

      /**
       * Whether or not the ripple is attached to a disabled component.
       * @type {boolean|undefined}
       */
      RippleCapableSurface.prototype.disabled;

      /***/
    },
    /* 5 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @typedef {{
       *   isActivated: (boolean|undefined),
       *   hasDeactivationUXRun: (boolean|undefined),
       *   wasActivatedByPointer: (boolean|undefined),
       *   wasElementMadeActive: (boolean|undefined),
       *   activationEvent: (!Event|undefined),
       *   isProgrammatic: (boolean|undefined)
       * }}
       */
      var ActivationStateType = void 0;

      /**
       * @typedef {{
       *   activate: (string|undefined),
       *   deactivate: (string|undefined),
       *   focus: (string|undefined),
       *   blur: (string|undefined)
       * }}
       */
      var ListenerInfoType = void 0;

      /**
       * @typedef {{
       *   activate: function(!Event),
       *   deactivate: function(!Event=),
       *   focus: function(),
       *   blur: function()
       * }}
       */
      var ListenersType = void 0;

      /**
       * @typedef {{
       *   x: number,
       *   y: number
       * }}
       */
      var PointType = void 0;

      // Activation events registered on the root element of each instance for activation
      var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

      // Deactivation events registered on documentElement when a pointer-related down event occurs
      var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

      // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
      /** @type {!Array<!EventTarget>} */
      var activatedTargets = [];

      /**
       * @extends {MDCFoundation<!MDCRippleAdapter>}
       */

      var MDCRippleFoundation = function (_MDCFoundation) {
        _inherits(MDCRippleFoundation, _MDCFoundation);

        _createClass(MDCRippleFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
              isUnbounded: function isUnbounded() /* boolean */{},
              isSurfaceActive: function isSurfaceActive() /* boolean */{},
              isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
              addClass: function addClass() /* className: string */{},
              removeClass: function removeClass() /* className: string */{},
              containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
              registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
              deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
              registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
              deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
              updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
              computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
              getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
            };
          }
        }]);

        function MDCRippleFoundation(adapter) {
          _classCallCheck(this, MDCRippleFoundation);

          /** @private {number} */
          var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

          _this.layoutFrame_ = 0;

          /** @private {!ClientRect} */
          _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

          /** @private {!ActivationStateType} */
          _this.activationState_ = _this.defaultActivationState_();

          /** @private {number} */
          _this.initialSize_ = 0;

          /** @private {number} */
          _this.maxRadius_ = 0;

          /** @private {function(!Event)} */
          _this.activateHandler_ = function (e) {
            return _this.activate_(e);
          };

          /** @private {function(!Event=)} */
          _this.deactivateHandler_ = function () {
            return _this.deactivate_();
          };

          /** @private {function(!Event=)} */
          _this.focusHandler_ = function () {
            return _this.handleFocus();
          };

          /** @private {function(!Event=)} */
          _this.blurHandler_ = function () {
            return _this.handleBlur();
          };

          /** @private {!Function} */
          _this.resizeHandler_ = function () {
            return _this.layout();
          };

          /** @private {{left: number, top:number}} */
          _this.unboundedCoords_ = {
            left: 0,
            top: 0
          };

          /** @private {number} */
          _this.fgScale_ = 0;

          /** @private {number} */
          _this.activationTimer_ = 0;

          /** @private {number} */
          _this.fgDeactivationRemovalTimer_ = 0;

          /** @private {boolean} */
          _this.activationAnimationHasEnded_ = false;

          /** @private {!Function} */
          _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
          };

          /** @private {!Event|undefined} */
          _this.previousActivationEvent_;
          return _this;
        }

        /**
         * We compute this property so that we are not querying information about the client
         * until the point in time where the foundation requests it. This prevents scenarios where
         * client-side feature-detection may happen too early, such as when components are rendered on the server
         * and then initialized at mount time on the client.
         * @return {boolean}
         * @private
         */

        _createClass(MDCRippleFoundation, [{
          key: 'supportsPressRipple_',
          value: function supportsPressRipple_() {
            return this.adapter_.browserSupportsCssVars();
          }

          /**
           * @return {!ActivationStateType}
           */

        }, {
          key: 'defaultActivationState_',
          value: function defaultActivationState_() {
            return {
              isActivated: false,
              hasDeactivationUXRun: false,
              wasActivatedByPointer: false,
              wasElementMadeActive: false,
              activationEvent: undefined,
              isProgrammatic: false
            };
          }

          /** @override */

        }, {
          key: 'init',
          value: function init() {
            var _this2 = this;

            var supportsPressRipple = this.supportsPressRipple_();

            this.registerRootHandlers_(supportsPressRipple);

            if (supportsPressRipple) {
              var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                  ROOT = _MDCRippleFoundation$.ROOT,
                  UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

              requestAnimationFrame(function () {
                _this2.adapter_.addClass(ROOT);
                if (_this2.adapter_.isUnbounded()) {
                  _this2.adapter_.addClass(UNBOUNDED);
                  // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                  _this2.layoutInternal_();
                }
              });
            }
          }

          /** @override */

        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;

            if (this.supportsPressRipple_()) {
              if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
              }

              if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
              }

              var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                  ROOT = _MDCRippleFoundation$2.ROOT,
                  UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

              requestAnimationFrame(function () {
                _this3.adapter_.removeClass(ROOT);
                _this3.adapter_.removeClass(UNBOUNDED);
                _this3.removeCssVars_();
              });
            }

            this.deregisterRootHandlers_();
            this.deregisterDeactivationHandlers_();
          }

          /**
           * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
           * @private
           */

        }, {
          key: 'registerRootHandlers_',
          value: function registerRootHandlers_(supportsPressRipple) {
            var _this4 = this;

            if (supportsPressRipple) {
              ACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
              });
              if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
              }
            }

            this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
            this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
          }

          /**
           * @param {!Event} e
           * @private
           */

        }, {
          key: 'registerDeactivationHandlers_',
          value: function registerDeactivationHandlers_(e) {
            var _this5 = this;

            if (e.type === 'keydown') {
              this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
            } else {
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
              });
            }
          }

          /** @private */

        }, {
          key: 'deregisterRootHandlers_',
          value: function deregisterRootHandlers_() {
            var _this6 = this;

            ACTIVATION_EVENT_TYPES.forEach(function (type) {
              _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
            });
            this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
            this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

            if (this.adapter_.isUnbounded()) {
              this.adapter_.deregisterResizeHandler(this.resizeHandler_);
            }
          }

          /** @private */

        }, {
          key: 'deregisterDeactivationHandlers_',
          value: function deregisterDeactivationHandlers_() {
            var _this7 = this;

            this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
              _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
            });
          }

          /** @private */

        }, {
          key: 'removeCssVars_',
          value: function removeCssVars_() {
            var _this8 = this;

            var strings = MDCRippleFoundation.strings;

            Object.keys(strings).forEach(function (k) {
              if (k.indexOf('VAR_') === 0) {
                _this8.adapter_.updateCssVariable(strings[k], null);
              }
            });
          }

          /**
           * @param {!Event=} e
           * @private
           */

        }, {
          key: 'activate_',
          value: function activate_(e) {
            var _this9 = this;

            if (this.adapter_.isSurfaceDisabled()) {
              return;
            }

            var activationState = this.activationState_;
            if (activationState.isActivated) {
              return;
            }

            // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
            var previousActivationEvent = this.previousActivationEvent_;
            var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
            if (isSameInteraction) {
              return;
            }

            activationState.isActivated = true;
            activationState.isProgrammatic = e === undefined;
            activationState.activationEvent = e;
            activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

            var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
              return _this9.adapter_.containsEventTarget(target);
            });
            if (hasActivatedChild) {
              // Immediately reset activation state, while preserving logic that prevents touch follow-on events
              this.resetActivationState_();
              return;
            }

            if (e !== undefined) {
              activatedTargets.push( /** @type {!EventTarget} */e.target);
              this.registerDeactivationHandlers_(e);
            }

            activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
            if (activationState.wasElementMadeActive) {
              this.animateActivation_();
            }

            requestAnimationFrame(function () {
              // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
              activatedTargets = [];

              if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
                if (activationState.wasElementMadeActive) {
                  _this9.animateActivation_();
                }
              }

              if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this9.activationState_ = _this9.defaultActivationState_();
              }
            });
          }

          /**
           * @param {!Event=} e
           * @private
           */

        }, {
          key: 'checkElementMadeActive_',
          value: function checkElementMadeActive_(e) {
            return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
          }

          /**
           * @param {!Event=} event Optional event containing position information.
           */

        }, {
          key: 'activate',
          value: function activate(event) {
            this.activate_(event);
          }

          /** @private */

        }, {
          key: 'animateActivation_',
          value: function animateActivation_() {
            var _this10 = this;

            var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
            var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
            var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;

            this.layoutInternal_();

            var translateStart = '';
            var translateEnd = '';

            if (!this.adapter_.isUnbounded()) {
              var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                  startPoint = _getFgTranslationCoor.startPoint,
                  endPoint = _getFgTranslationCoor.endPoint;

              translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
              translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
            }

            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
            // Cancel any ongoing activation/deactivation animations
            clearTimeout(this.activationTimer_);
            clearTimeout(this.fgDeactivationRemovalTimer_);
            this.rmBoundedActivationClasses_();
            this.adapter_.removeClass(FG_DEACTIVATION);

            // Force layout in order to re-trigger the animation.
            this.adapter_.computeBoundingRect();
            this.adapter_.addClass(FG_ACTIVATION);
            this.activationTimer_ = setTimeout(function () {
              return _this10.activationTimerCallback_();
            }, DEACTIVATION_TIMEOUT_MS);
          }

          /**
           * @private
           * @return {{startPoint: PointType, endPoint: PointType}}
           */

        }, {
          key: 'getFgTranslationCoordinates_',
          value: function getFgTranslationCoordinates_() {
            var _activationState_ = this.activationState_,
                activationEvent = _activationState_.activationEvent,
                wasActivatedByPointer = _activationState_.wasActivatedByPointer;

            var startPoint = void 0;
            if (wasActivatedByPointer) {
              startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
              /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
            } else {
              startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2
              };
            }
            // Center the element around the start point.
            startPoint = {
              x: startPoint.x - this.initialSize_ / 2,
              y: startPoint.y - this.initialSize_ / 2
            };

            var endPoint = {
              x: this.frame_.width / 2 - this.initialSize_ / 2,
              y: this.frame_.height / 2 - this.initialSize_ / 2
            };

            return { startPoint: startPoint, endPoint: endPoint };
          }

          /** @private */

        }, {
          key: 'runDeactivationUXLogicIfReady_',
          value: function runDeactivationUXLogicIfReady_() {
            var _this11 = this;

            // This method is called both when a pointing device is released, and when the activation animation ends.
            // The deactivation animation should only run after both of those occur.
            var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
            var _activationState_2 = this.activationState_,
                hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
                isActivated = _activationState_2.isActivated;

            var activationHasEnded = hasDeactivationUXRun || !isActivated;

            if (activationHasEnded && this.activationAnimationHasEnded_) {
              this.rmBoundedActivationClasses_();
              this.adapter_.addClass(FG_DEACTIVATION);
              this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this11.adapter_.removeClass(FG_DEACTIVATION);
              }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
            }
          }

          /** @private */

        }, {
          key: 'rmBoundedActivationClasses_',
          value: function rmBoundedActivationClasses_() {
            var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

            this.adapter_.removeClass(FG_ACTIVATION);
            this.activationAnimationHasEnded_ = false;
            this.adapter_.computeBoundingRect();
          }
        }, {
          key: 'resetActivationState_',
          value: function resetActivationState_() {
            var _this12 = this;

            this.previousActivationEvent_ = this.activationState_.activationEvent;
            this.activationState_ = this.defaultActivationState_();
            // Touch devices may fire additional events for the same interaction within a short time.
            // Store the previous event until it's safe to assume that subsequent events are for new interactions.
            setTimeout(function () {
              return _this12.previousActivationEvent_ = undefined;
            }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
          }

          /**
           * @private
           */

        }, {
          key: 'deactivate_',
          value: function deactivate_() {
            var _this13 = this;

            var activationState = this.activationState_;
            // This can happen in scenarios such as when you have a keyup event that blurs the element.
            if (!activationState.isActivated) {
              return;
            }

            var state = /** @type {!ActivationStateType} */_extends({}, activationState);

            if (activationState.isProgrammatic) {
              requestAnimationFrame(function () {
                return _this13.animateDeactivation_(state);
              });
              this.resetActivationState_();
            } else {
              this.deregisterDeactivationHandlers_();
              requestAnimationFrame(function () {
                _this13.activationState_.hasDeactivationUXRun = true;
                _this13.animateDeactivation_(state);
                _this13.resetActivationState_();
              });
            }
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.deactivate_();
          }

          /**
           * @param {!ActivationStateType} options
           * @private
           */

        }, {
          key: 'animateDeactivation_',
          value: function animateDeactivation_(_ref) {
            var wasActivatedByPointer = _ref.wasActivatedByPointer,
                wasElementMadeActive = _ref.wasElementMadeActive;

            if (wasActivatedByPointer || wasElementMadeActive) {
              this.runDeactivationUXLogicIfReady_();
            }
          }
        }, {
          key: 'layout',
          value: function layout() {
            var _this14 = this;

            if (this.layoutFrame_) {
              cancelAnimationFrame(this.layoutFrame_);
            }
            this.layoutFrame_ = requestAnimationFrame(function () {
              _this14.layoutInternal_();
              _this14.layoutFrame_ = 0;
            });
          }

          /** @private */

        }, {
          key: 'layoutInternal_',
          value: function layoutInternal_() {
            var _this15 = this;

            this.frame_ = this.adapter_.computeBoundingRect();
            var maxDim = Math.max(this.frame_.height, this.frame_.width);

            // Surface diameter is treated differently for unbounded vs. bounded ripples.
            // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
            // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
            // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
            // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
            // `overflow: hidden`.
            var getBoundedRadius = function getBoundedRadius() {
              var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
              return hypotenuse + MDCRippleFoundation.numbers.PADDING;
            };

            this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

            // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
            this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
            this.fgScale_ = this.maxRadius_ / this.initialSize_;

            this.updateLayoutCssVars_();
          }

          /** @private */

        }, {
          key: 'updateLayoutCssVars_',
          value: function updateLayoutCssVars_() {
            var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;

            this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
            this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

            if (this.adapter_.isUnbounded()) {
              this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
              };

              this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
              this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
            }
          }

          /** @param {boolean} unbounded */

        }, {
          key: 'setUnbounded',
          value: function setUnbounded(unbounded) {
            var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

            if (unbounded) {
              this.adapter_.addClass(UNBOUNDED);
            } else {
              this.adapter_.removeClass(UNBOUNDED);
            }
          }
        }, {
          key: 'handleFocus',
          value: function handleFocus() {
            var _this16 = this;

            requestAnimationFrame(function () {
              return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          }
        }, {
          key: 'handleBlur',
          value: function handleBlur() {
            var _this17 = this;

            requestAnimationFrame(function () {
              return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          }
        }]);

        return MDCRippleFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCRippleFoundation;

      /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return strings;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return numbers;
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var cssClasses = {
        // Ripple is a special case where the "root" component is really a "mixin" of sorts,
        // given that it's an 'upgrade' to an existing component. That being said it is the root
        // CSS class that all other CSS classes derive from.
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
      };

      var strings = {
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
      };

      var numbers = {
        PADDING: 10,
        INITIAL_ORIGIN_SCALE: 0.6,
        DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
        FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
        TAP_DELAY_MS: 300 };

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=mdc.ripple.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: MIT
*/
(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["select"] = factory();else root["mdc"] = root["mdc"] || {}, root["mdc"]["select"] = factory();
})(undefined, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 129);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @template A
       */
      var MDCFoundation = function () {
        _createClass(MDCFoundation, null, [{
          key: "cssClasses",

          /** @return enum{cssClasses} */
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
          }

          /** @return enum{strings} */

        }, {
          key: "strings",
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
          }

          /** @return enum{numbers} */

        }, {
          key: "numbers",
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
          }

          /** @return {!Object} */

        }, {
          key: "defaultAdapter",
          get: function get() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
          }

          /**
           * @param {A=} adapter
           */

        }]);

        function MDCFoundation() {
          var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          _classCallCheck(this, MDCFoundation);

          /** @protected {!A} */
          this.adapter_ = adapter;
        }

        _createClass(MDCFoundation, [{
          key: "init",
          value: function init() {
            // Subclasses should override this method to perform initialization routines (registering events, etc.)
          }
        }, {
          key: "destroy",
          value: function destroy() {
            // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
          }
        }]);

        return MDCFoundation;
      }();

      /* harmony default export */__webpack_exports__["a"] = MDCFoundation;

      /***/
    },
    /* 1 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @template F
       */

      var MDCComponent = function () {
        _createClass(MDCComponent, null, [{
          key: 'attachTo',

          /**
           * @param {!Element} root
           * @return {!MDCComponent}
           */
          value: function attachTo(root) {
            // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
            // returns an instantiated component with its root set to that element. Also note that in the cases of
            // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
            // from getDefaultFoundation().
            return new MDCComponent(root, new __WEBPACK_IMPORTED_MODULE_0__foundation__["a" /* default */]());
          }

          /**
           * @param {!Element} root
           * @param {F=} foundation
           * @param {...?} args
           */

        }]);

        function MDCComponent(root) {
          var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

          _classCallCheck(this, MDCComponent);

          /** @protected {!Element} */
          this.root_ = root;

          for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            args[_key - 2] = arguments[_key];
          }

          this.initialize.apply(this, args);
          // Note that we initialize foundation here and not within the constructor's default param so that
          // this.root_ is defined and can be used within the foundation class.
          /** @protected {!F} */
          this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
          this.foundation_.init();
          this.initialSyncWithDOM();
        }

        _createClass(MDCComponent, [{
          key: 'initialize',
          value: function initialize() /* ...args */{}
          // Subclasses can override this to do any additional setup work that would be considered part of a
          // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
          // initialized. Any additional arguments besides root and foundation will be passed in here.


          /**
           * @return {!F} foundation
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            // Subclasses must override this method to return a properly configured foundation class for the
            // component.
            throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            // Subclasses should override this method if they need to perform work to synchronize with a host DOM
            // object. An example of this would be a form control wrapper that needs to synchronize its internal state
            // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
            // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            // Subclasses may implement this method to release any resources / deregister any listeners they have
            // attached. An example of this might be deregistering a resize event from the window object.
            this.foundation_.destroy();
          }

          /**
           * Wrapper method to add an event listener to the component's root element. This is most useful when
           * listening for custom events.
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: 'listen',
          value: function listen(evtType, handler) {
            this.root_.addEventListener(evtType, handler);
          }

          /**
           * Wrapper method to remove an event listener to the component's root element. This is most useful when
           * unlistening for custom events.
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: 'unlisten',
          value: function unlisten(evtType, handler) {
            this.root_.removeEventListener(evtType, handler);
          }

          /**
           * Fires a cross-browser-compatible custom event from the component root of the given type,
           * with the given data.
           * @param {string} evtType
           * @param {!Object} evtData
           * @param {boolean=} shouldBubble
           */

        }, {
          key: 'emit',
          value: function emit(evtType, evtData) {
            var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var evt = void 0;
            if (typeof CustomEvent === 'function') {
              evt = new CustomEvent(evtType, {
                detail: evtData,
                bubbles: shouldBubble
              });
            } else {
              evt = document.createEvent('CustomEvent');
              evt.initCustomEvent(evtType, shouldBubble, false, evtData);
            }

            this.root_.dispatchEvent(evt);
          }
        }]);

        return MDCComponent;
      }();

      /* harmony default export */__webpack_exports__["a"] = MDCComponent;

      /***/
    },
    /* 2 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "supportsCssVariables", function () {
        return supportsCssVariables;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "applyPassive", function () {
        return applyPassive;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getMatchesProperty", function () {
        return getMatchesProperty;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getNormalizedEventCoords", function () {
        return getNormalizedEventCoords;
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
       * @private {boolean|undefined}
       */
      var supportsCssVariables_ = void 0;

      /**
       * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
       * @private {boolean|undefined}
       */
      var supportsPassive_ = void 0;

      /**
       * @param {!Window} windowObj
       * @return {boolean}
       */
      function detectEdgePseudoVarBug(windowObj) {
        // Detect versions of Edge with buggy var() support
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
        var document = windowObj.document;
        var node = document.createElement('div');
        node.className = 'mdc-ripple-surface--test-edge-var-bug';
        document.body.appendChild(node);

        // The bug exists if ::before style ends up propagating to the parent element.
        // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
        // but Firefox is known to support CSS custom properties correctly.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        var computedStyle = windowObj.getComputedStyle(node);
        var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
        node.remove();
        return hasPseudoVarBug;
      }

      /**
       * @param {!Window} windowObj
       * @param {boolean=} forceRefresh
       * @return {boolean|undefined}
       */

      function supportsCssVariables(windowObj) {
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var supportsCssVariables = supportsCssVariables_;
        if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
          return supportsCssVariables;
        }

        var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
        if (!supportsFunctionPresent) {
          return;
        }

        var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
        // See: https://bugs.webkit.org/show_bug.cgi?id=154669
        // See: README section on Safari
        var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

        if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
          supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
        } else {
          supportsCssVariables = false;
        }

        if (!forceRefresh) {
          supportsCssVariables_ = supportsCssVariables;
        }
        return supportsCssVariables;
      }

      //
      /**
       * Determine whether the current browser supports passive event listeners, and if so, use them.
       * @param {!Window=} globalObj
       * @param {boolean=} forceRefresh
       * @return {boolean|!EventListenerOptions}
       */
      function applyPassive() {
        var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (supportsPassive_ === undefined || forceRefresh) {
          var isSupported = false;
          try {
            globalObj.document.addEventListener('test', null, { get passive() {
                isSupported = true;
                return isSupported;
              } });
          } catch (e) {}

          supportsPassive_ = isSupported;
        }

        return supportsPassive_ ? /** @type {!EventListenerOptions} */{ passive: true } : false;
      }

      /**
       * @param {!Object} HTMLElementPrototype
       * @return {string}
       */
      function getMatchesProperty(HTMLElementPrototype) {
        /**
         * Order is important because we return the first existing method we find.
         * Do not change the order of the items in the below array.
         */
        var matchesMethods = ['matches', 'webkitMatchesSelector', 'msMatchesSelector'];
        var method = 'matches';
        for (var i = 0; i < matchesMethods.length; i++) {
          var matchesMethod = matchesMethods[i];
          if (matchesMethod in HTMLElementPrototype) {
            method = matchesMethod;
            break;
          }
        }

        return method;
      }

      /**
       * @param {!Event} ev
       * @param {{x: number, y: number}} pageOffset
       * @param {!ClientRect} clientRect
       * @return {{x: number, y: number}}
       */
      function getNormalizedEventCoords(ev, pageOffset, clientRect) {
        var x = pageOffset.x,
            y = pageOffset.y;

        var documentX = x + clientRect.left;
        var documentY = y + clientRect.top;

        var normalizedX = void 0;
        var normalizedY = void 0;
        // Determine touch point relative to the ripple container.
        if (ev.type === 'touchstart') {
          ev = /** @type {!TouchEvent} */ev;
          normalizedX = ev.changedTouches[0].pageX - documentX;
          normalizedY = ev.changedTouches[0].pageY - documentY;
        } else {
          ev = /** @type {!MouseEvent} */ev;
          normalizedX = ev.pageX - documentX;
          normalizedY = ev.pageY - documentY;
        }

        return { x: normalizedX, y: normalizedY };
      }

      /***/
    },
    /* 3 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC Ripple. Provides an interface for managing
       * - classes
       * - dom
       * - CSS variables
       * - position
       * - dimensions
       * - scroll position
       * - event handlers
       * - unbounded, active and disabled states
       *
       * Additionally, provides type information for the adapter to the Closure
       * compiler.
       *
       * Implement this adapter for your framework of choice to delegate updates to
       * the component in your framework of choice. See architecture documentation
       * for more details.
       * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
       *
       * @record
       */
      var MDCRippleAdapter = function () {
        function MDCRippleAdapter() {
          _classCallCheck(this, MDCRippleAdapter);
        }

        _createClass(MDCRippleAdapter, [{
          key: "browserSupportsCssVars",

          /** @return {boolean} */
          value: function browserSupportsCssVars() {}

          /** @return {boolean} */

        }, {
          key: "isUnbounded",
          value: function isUnbounded() {}

          /** @return {boolean} */

        }, {
          key: "isSurfaceActive",
          value: function isSurfaceActive() {}

          /** @return {boolean} */

        }, {
          key: "isSurfaceDisabled",
          value: function isSurfaceDisabled() {}

          /** @param {string} className */

        }, {
          key: "addClass",
          value: function addClass(className) {}

          /** @param {string} className */

        }, {
          key: "removeClass",
          value: function removeClass(className) {}

          /** @param {!EventTarget} target */

        }, {
          key: "containsEventTarget",
          value: function containsEventTarget(target) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "registerDocumentInteractionHandler",
          value: function registerDocumentInteractionHandler(evtType, handler) {}

          /**
           * @param {string} evtType
           * @param {!Function} handler
           */

        }, {
          key: "deregisterDocumentInteractionHandler",
          value: function deregisterDocumentInteractionHandler(evtType, handler) {}

          /**
           * @param {!Function} handler
           */

        }, {
          key: "registerResizeHandler",
          value: function registerResizeHandler(handler) {}

          /**
           * @param {!Function} handler
           */

        }, {
          key: "deregisterResizeHandler",
          value: function deregisterResizeHandler(handler) {}

          /**
           * @param {string} varName
           * @param {?number|string} value
           */

        }, {
          key: "updateCssVariable",
          value: function updateCssVariable(varName, value) {}

          /** @return {!ClientRect} */

        }, {
          key: "computeBoundingRect",
          value: function computeBoundingRect() {}

          /** @return {{x: number, y: number}} */

        }, {
          key: "getWindowPageOffset",
          value: function getWindowPageOffset() {}
        }]);

        return MDCRippleAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCRippleAdapter;

      /***/
    },
    /* 4 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCRipple", function () {
        return MDCRipple;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "RippleCapableSurface", function () {
        return RippleCapableSurface;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(5);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCRippleFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      /* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__, "util", function () {
        return __WEBPACK_IMPORTED_MODULE_3__util__;
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends MDCComponent<!MDCRippleFoundation>
       */

      var MDCRipple = function (_MDCComponent) {
        _inherits(MDCRipple, _MDCComponent);

        /** @param {...?} args */
        function MDCRipple() {
          var _ref;

          _classCallCheck(this, MDCRipple);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /** @type {boolean} */
          var _this = _possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

          _this.disabled = false;

          /** @private {boolean} */
          _this.unbounded_;
          return _this;
        }

        /**
         * @param {!Element} root
         * @param {{isUnbounded: (boolean|undefined)}=} options
         * @return {!MDCRipple}
         */

        _createClass(MDCRipple, [{
          key: 'setUnbounded_',

          /**
           * Closure Compiler throws an access control error when directly accessing a
           * protected or private property inside a getter/setter, like unbounded above.
           * By accessing the protected property inside a method, we solve that problem.
           * That's why this function exists.
           * @private
           */
          value: function setUnbounded_() {
            this.foundation_.setUnbounded(this.unbounded_);
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.foundation_.activate();
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.foundation_.deactivate();
          }
        }, {
          key: 'layout',
          value: function layout() {
            this.foundation_.layout();
          }

          /**
           * @return {!MDCRippleFoundation}
           * @override
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](MDCRipple.createAdapter(this));
          }

          /** @override */

        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
          }
        }, {
          key: 'unbounded',

          /** @return {boolean} */
          get: function get() {
            return this.unbounded_;
          }

          /** @param {boolean} unbounded */

          , set: function set(unbounded) {
            this.unbounded_ = Boolean(unbounded);
            this.setUnbounded_();
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$isUnbounded = _ref2.isUnbounded,
                isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

            var ripple = new MDCRipple(root);
            // Only override unbounded behavior if option is explicitly specified
            if (isUnbounded !== undefined) {
              ripple.unbounded = /** @type {boolean} */isUnbounded;
            }
            return ripple;
          }

          /**
           * @param {!RippleCapableSurface} instance
           * @return {!MDCRippleAdapter}
           */

        }, {
          key: 'createAdapter',
          value: function createAdapter(instance) {
            var MATCHES = __WEBPACK_IMPORTED_MODULE_3__util__["getMatchesProperty"](HTMLElement.prototype);

            return {
              browserSupportsCssVars: function browserSupportsCssVars() {
                return __WEBPACK_IMPORTED_MODULE_3__util__["supportsCssVariables"](window);
              },
              isUnbounded: function isUnbounded() {
                return instance.unbounded;
              },
              isSurfaceActive: function isSurfaceActive() {
                return instance.root_[MATCHES](':active');
              },
              isSurfaceDisabled: function isSurfaceDisabled() {
                return instance.disabled;
              },
              addClass: function addClass(className) {
                return instance.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return instance.root_.classList.remove(className);
              },
              containsEventTarget: function containsEventTarget(target) {
                return instance.root_.contains(target);
              },
              registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return instance.root_.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return instance.root_.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.addEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
                return document.documentElement.removeEventListener(evtType, handler, __WEBPACK_IMPORTED_MODULE_3__util__["applyPassive"]());
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler);
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              },
              updateCssVariable: function updateCssVariable(varName, value) {
                return instance.root_.style.setProperty(varName, value);
              },
              computeBoundingRect: function computeBoundingRect() {
                return instance.root_.getBoundingClientRect();
              },
              getWindowPageOffset: function getWindowPageOffset() {
                return { x: window.pageXOffset, y: window.pageYOffset };
              }
            };
          }
        }]);

        return MDCRipple;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /**
       * See Material Design spec for more details on when to use ripples.
       * https://material.io/guidelines/motion/choreography.html#choreography-creation
       * @record
       */

      var RippleCapableSurface = function RippleCapableSurface() {
        _classCallCheck(this, RippleCapableSurface);
      };

      /** @protected {!Element} */

      RippleCapableSurface.prototype.root_;

      /**
       * Whether or not the ripple bleeds out of the bounds of the element.
       * @type {boolean|undefined}
       */
      RippleCapableSurface.prototype.unbounded;

      /**
       * Whether or not the ripple is attached to a disabled component.
       * @type {boolean|undefined}
       */
      RippleCapableSurface.prototype.disabled;

      /***/
    },
    /* 5 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(3);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(2);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @typedef {{
       *   isActivated: (boolean|undefined),
       *   hasDeactivationUXRun: (boolean|undefined),
       *   wasActivatedByPointer: (boolean|undefined),
       *   wasElementMadeActive: (boolean|undefined),
       *   activationEvent: (!Event|undefined),
       *   isProgrammatic: (boolean|undefined)
       * }}
       */
      var ActivationStateType = void 0;

      /**
       * @typedef {{
       *   activate: (string|undefined),
       *   deactivate: (string|undefined),
       *   focus: (string|undefined),
       *   blur: (string|undefined)
       * }}
       */
      var ListenerInfoType = void 0;

      /**
       * @typedef {{
       *   activate: function(!Event),
       *   deactivate: function(!Event=),
       *   focus: function(),
       *   blur: function()
       * }}
       */
      var ListenersType = void 0;

      /**
       * @typedef {{
       *   x: number,
       *   y: number
       * }}
       */
      var PointType = void 0;

      // Activation events registered on the root element of each instance for activation
      var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

      // Deactivation events registered on documentElement when a pointer-related down event occurs
      var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu'];

      // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
      /** @type {!Array<!EventTarget>} */
      var activatedTargets = [];

      /**
       * @extends {MDCFoundation<!MDCRippleAdapter>}
       */

      var MDCRippleFoundation = function (_MDCFoundation) {
        _inherits(MDCRippleFoundation, _MDCFoundation);

        _createClass(MDCRippleFoundation, null, [{
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }
        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
          }
        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
          }
        }, {
          key: 'defaultAdapter',
          get: function get() {
            return {
              browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
              isUnbounded: function isUnbounded() /* boolean */{},
              isSurfaceActive: function isSurfaceActive() /* boolean */{},
              isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
              addClass: function addClass() /* className: string */{},
              removeClass: function removeClass() /* className: string */{},
              containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
              registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
              deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
              registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
              deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
              updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
              computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
              getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
            };
          }
        }]);

        function MDCRippleFoundation(adapter) {
          _classCallCheck(this, MDCRippleFoundation);

          /** @private {number} */
          var _this = _possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

          _this.layoutFrame_ = 0;

          /** @private {!ClientRect} */
          _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

          /** @private {!ActivationStateType} */
          _this.activationState_ = _this.defaultActivationState_();

          /** @private {number} */
          _this.initialSize_ = 0;

          /** @private {number} */
          _this.maxRadius_ = 0;

          /** @private {function(!Event)} */
          _this.activateHandler_ = function (e) {
            return _this.activate_(e);
          };

          /** @private {function(!Event=)} */
          _this.deactivateHandler_ = function () {
            return _this.deactivate_();
          };

          /** @private {function(!Event=)} */
          _this.focusHandler_ = function () {
            return _this.handleFocus();
          };

          /** @private {function(!Event=)} */
          _this.blurHandler_ = function () {
            return _this.handleBlur();
          };

          /** @private {!Function} */
          _this.resizeHandler_ = function () {
            return _this.layout();
          };

          /** @private {{left: number, top:number}} */
          _this.unboundedCoords_ = {
            left: 0,
            top: 0
          };

          /** @private {number} */
          _this.fgScale_ = 0;

          /** @private {number} */
          _this.activationTimer_ = 0;

          /** @private {number} */
          _this.fgDeactivationRemovalTimer_ = 0;

          /** @private {boolean} */
          _this.activationAnimationHasEnded_ = false;

          /** @private {!Function} */
          _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;
            _this.runDeactivationUXLogicIfReady_();
          };

          /** @private {!Event|undefined} */
          _this.previousActivationEvent_;
          return _this;
        }

        /**
         * We compute this property so that we are not querying information about the client
         * until the point in time where the foundation requests it. This prevents scenarios where
         * client-side feature-detection may happen too early, such as when components are rendered on the server
         * and then initialized at mount time on the client.
         * @return {boolean}
         * @private
         */

        _createClass(MDCRippleFoundation, [{
          key: 'supportsPressRipple_',
          value: function supportsPressRipple_() {
            return this.adapter_.browserSupportsCssVars();
          }

          /**
           * @return {!ActivationStateType}
           */

        }, {
          key: 'defaultActivationState_',
          value: function defaultActivationState_() {
            return {
              isActivated: false,
              hasDeactivationUXRun: false,
              wasActivatedByPointer: false,
              wasElementMadeActive: false,
              activationEvent: undefined,
              isProgrammatic: false
            };
          }

          /** @override */

        }, {
          key: 'init',
          value: function init() {
            var _this2 = this;

            var supportsPressRipple = this.supportsPressRipple_();

            this.registerRootHandlers_(supportsPressRipple);

            if (supportsPressRipple) {
              var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
                  ROOT = _MDCRippleFoundation$.ROOT,
                  UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

              requestAnimationFrame(function () {
                _this2.adapter_.addClass(ROOT);
                if (_this2.adapter_.isUnbounded()) {
                  _this2.adapter_.addClass(UNBOUNDED);
                  // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
                  _this2.layoutInternal_();
                }
              });
            }
          }

          /** @override */

        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;

            if (this.supportsPressRipple_()) {
              if (this.activationTimer_) {
                clearTimeout(this.activationTimer_);
                this.activationTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
              }

              if (this.fgDeactivationRemovalTimer_) {
                clearTimeout(this.fgDeactivationRemovalTimer_);
                this.fgDeactivationRemovalTimer_ = 0;
                this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
              }

              var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
                  ROOT = _MDCRippleFoundation$2.ROOT,
                  UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

              requestAnimationFrame(function () {
                _this3.adapter_.removeClass(ROOT);
                _this3.adapter_.removeClass(UNBOUNDED);
                _this3.removeCssVars_();
              });
            }

            this.deregisterRootHandlers_();
            this.deregisterDeactivationHandlers_();
          }

          /**
           * @param {boolean} supportsPressRipple Passed from init to save a redundant function call
           * @private
           */

        }, {
          key: 'registerRootHandlers_',
          value: function registerRootHandlers_(supportsPressRipple) {
            var _this4 = this;

            if (supportsPressRipple) {
              ACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
              });
              if (this.adapter_.isUnbounded()) {
                this.adapter_.registerResizeHandler(this.resizeHandler_);
              }
            }

            this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
            this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
          }

          /**
           * @param {!Event} e
           * @private
           */

        }, {
          key: 'registerDeactivationHandlers_',
          value: function registerDeactivationHandlers_(e) {
            var _this5 = this;

            if (e.type === 'keydown') {
              this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
            } else {
              POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
                _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
              });
            }
          }

          /** @private */

        }, {
          key: 'deregisterRootHandlers_',
          value: function deregisterRootHandlers_() {
            var _this6 = this;

            ACTIVATION_EVENT_TYPES.forEach(function (type) {
              _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
            });
            this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
            this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

            if (this.adapter_.isUnbounded()) {
              this.adapter_.deregisterResizeHandler(this.resizeHandler_);
            }
          }

          /** @private */

        }, {
          key: 'deregisterDeactivationHandlers_',
          value: function deregisterDeactivationHandlers_() {
            var _this7 = this;

            this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
              _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
            });
          }

          /** @private */

        }, {
          key: 'removeCssVars_',
          value: function removeCssVars_() {
            var _this8 = this;

            var strings = MDCRippleFoundation.strings;

            Object.keys(strings).forEach(function (k) {
              if (k.indexOf('VAR_') === 0) {
                _this8.adapter_.updateCssVariable(strings[k], null);
              }
            });
          }

          /**
           * @param {!Event=} e
           * @private
           */

        }, {
          key: 'activate_',
          value: function activate_(e) {
            var _this9 = this;

            if (this.adapter_.isSurfaceDisabled()) {
              return;
            }

            var activationState = this.activationState_;
            if (activationState.isActivated) {
              return;
            }

            // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
            var previousActivationEvent = this.previousActivationEvent_;
            var isSameInteraction = previousActivationEvent && e !== undefined && previousActivationEvent.type !== e.type;
            if (isSameInteraction) {
              return;
            }

            activationState.isActivated = true;
            activationState.isProgrammatic = e === undefined;
            activationState.activationEvent = e;
            activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e !== undefined && (e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown');

            var hasActivatedChild = e !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
              return _this9.adapter_.containsEventTarget(target);
            });
            if (hasActivatedChild) {
              // Immediately reset activation state, while preserving logic that prevents touch follow-on events
              this.resetActivationState_();
              return;
            }

            if (e !== undefined) {
              activatedTargets.push( /** @type {!EventTarget} */e.target);
              this.registerDeactivationHandlers_(e);
            }

            activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
            if (activationState.wasElementMadeActive) {
              this.animateActivation_();
            }

            requestAnimationFrame(function () {
              // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
              activatedTargets = [];

              if (!activationState.wasElementMadeActive && e !== undefined && (e.key === ' ' || e.keyCode === 32)) {
                // If space was pressed, try again within an rAF call to detect :active, because different UAs report
                // active states inconsistently when they're called within event handling code:
                // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
                // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
                // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
                // variable is set within a rAF callback for a submit button interaction (#2241).
                activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
                if (activationState.wasElementMadeActive) {
                  _this9.animateActivation_();
                }
              }

              if (!activationState.wasElementMadeActive) {
                // Reset activation state immediately if element was not made active.
                _this9.activationState_ = _this9.defaultActivationState_();
              }
            });
          }

          /**
           * @param {!Event=} e
           * @private
           */

        }, {
          key: 'checkElementMadeActive_',
          value: function checkElementMadeActive_(e) {
            return e !== undefined && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
          }

          /**
           * @param {!Event=} event Optional event containing position information.
           */

        }, {
          key: 'activate',
          value: function activate(event) {
            this.activate_(event);
          }

          /** @private */

        }, {
          key: 'animateActivation_',
          value: function animateActivation_() {
            var _this10 = this;

            var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
                VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
                VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
            var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
                FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
                FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
            var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;

            this.layoutInternal_();

            var translateStart = '';
            var translateEnd = '';

            if (!this.adapter_.isUnbounded()) {
              var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
                  startPoint = _getFgTranslationCoor.startPoint,
                  endPoint = _getFgTranslationCoor.endPoint;

              translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
              translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
            }

            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
            this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
            // Cancel any ongoing activation/deactivation animations
            clearTimeout(this.activationTimer_);
            clearTimeout(this.fgDeactivationRemovalTimer_);
            this.rmBoundedActivationClasses_();
            this.adapter_.removeClass(FG_DEACTIVATION);

            // Force layout in order to re-trigger the animation.
            this.adapter_.computeBoundingRect();
            this.adapter_.addClass(FG_ACTIVATION);
            this.activationTimer_ = setTimeout(function () {
              return _this10.activationTimerCallback_();
            }, DEACTIVATION_TIMEOUT_MS);
          }

          /**
           * @private
           * @return {{startPoint: PointType, endPoint: PointType}}
           */

        }, {
          key: 'getFgTranslationCoordinates_',
          value: function getFgTranslationCoordinates_() {
            var _activationState_ = this.activationState_,
                activationEvent = _activationState_.activationEvent,
                wasActivatedByPointer = _activationState_.wasActivatedByPointer;

            var startPoint = void 0;
            if (wasActivatedByPointer) {
              startPoint = Object(__WEBPACK_IMPORTED_MODULE_3__util__["getNormalizedEventCoords"])(
              /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
            } else {
              startPoint = {
                x: this.frame_.width / 2,
                y: this.frame_.height / 2
              };
            }
            // Center the element around the start point.
            startPoint = {
              x: startPoint.x - this.initialSize_ / 2,
              y: startPoint.y - this.initialSize_ / 2
            };

            var endPoint = {
              x: this.frame_.width / 2 - this.initialSize_ / 2,
              y: this.frame_.height / 2 - this.initialSize_ / 2
            };

            return { startPoint: startPoint, endPoint: endPoint };
          }

          /** @private */

        }, {
          key: 'runDeactivationUXLogicIfReady_',
          value: function runDeactivationUXLogicIfReady_() {
            var _this11 = this;

            // This method is called both when a pointing device is released, and when the activation animation ends.
            // The deactivation animation should only run after both of those occur.
            var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
            var _activationState_2 = this.activationState_,
                hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
                isActivated = _activationState_2.isActivated;

            var activationHasEnded = hasDeactivationUXRun || !isActivated;

            if (activationHasEnded && this.activationAnimationHasEnded_) {
              this.rmBoundedActivationClasses_();
              this.adapter_.addClass(FG_DEACTIVATION);
              this.fgDeactivationRemovalTimer_ = setTimeout(function () {
                _this11.adapter_.removeClass(FG_DEACTIVATION);
              }, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].FG_DEACTIVATION_MS);
            }
          }

          /** @private */

        }, {
          key: 'rmBoundedActivationClasses_',
          value: function rmBoundedActivationClasses_() {
            var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

            this.adapter_.removeClass(FG_ACTIVATION);
            this.activationAnimationHasEnded_ = false;
            this.adapter_.computeBoundingRect();
          }
        }, {
          key: 'resetActivationState_',
          value: function resetActivationState_() {
            var _this12 = this;

            this.previousActivationEvent_ = this.activationState_.activationEvent;
            this.activationState_ = this.defaultActivationState_();
            // Touch devices may fire additional events for the same interaction within a short time.
            // Store the previous event until it's safe to assume that subsequent events are for new interactions.
            setTimeout(function () {
              return _this12.previousActivationEvent_ = undefined;
            }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
          }

          /**
           * @private
           */

        }, {
          key: 'deactivate_',
          value: function deactivate_() {
            var _this13 = this;

            var activationState = this.activationState_;
            // This can happen in scenarios such as when you have a keyup event that blurs the element.
            if (!activationState.isActivated) {
              return;
            }

            var state = /** @type {!ActivationStateType} */_extends({}, activationState);

            if (activationState.isProgrammatic) {
              requestAnimationFrame(function () {
                return _this13.animateDeactivation_(state);
              });
              this.resetActivationState_();
            } else {
              this.deregisterDeactivationHandlers_();
              requestAnimationFrame(function () {
                _this13.activationState_.hasDeactivationUXRun = true;
                _this13.animateDeactivation_(state);
                _this13.resetActivationState_();
              });
            }
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.deactivate_();
          }

          /**
           * @param {!ActivationStateType} options
           * @private
           */

        }, {
          key: 'animateDeactivation_',
          value: function animateDeactivation_(_ref) {
            var wasActivatedByPointer = _ref.wasActivatedByPointer,
                wasElementMadeActive = _ref.wasElementMadeActive;

            if (wasActivatedByPointer || wasElementMadeActive) {
              this.runDeactivationUXLogicIfReady_();
            }
          }
        }, {
          key: 'layout',
          value: function layout() {
            var _this14 = this;

            if (this.layoutFrame_) {
              cancelAnimationFrame(this.layoutFrame_);
            }
            this.layoutFrame_ = requestAnimationFrame(function () {
              _this14.layoutInternal_();
              _this14.layoutFrame_ = 0;
            });
          }

          /** @private */

        }, {
          key: 'layoutInternal_',
          value: function layoutInternal_() {
            var _this15 = this;

            this.frame_ = this.adapter_.computeBoundingRect();
            var maxDim = Math.max(this.frame_.height, this.frame_.width);

            // Surface diameter is treated differently for unbounded vs. bounded ripples.
            // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
            // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
            // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
            // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
            // `overflow: hidden`.
            var getBoundedRadius = function getBoundedRadius() {
              var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
              return hypotenuse + MDCRippleFoundation.numbers.PADDING;
            };

            this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

            // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
            this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
            this.fgScale_ = this.maxRadius_ / this.initialSize_;

            this.updateLayoutCssVars_();
          }

          /** @private */

        }, {
          key: 'updateLayoutCssVars_',
          value: function updateLayoutCssVars_() {
            var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
                VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
                VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
                VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
                VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;

            this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
            this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

            if (this.adapter_.isUnbounded()) {
              this.unboundedCoords_ = {
                left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
                top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
              };

              this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
              this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
            }
          }

          /** @param {boolean} unbounded */

        }, {
          key: 'setUnbounded',
          value: function setUnbounded(unbounded) {
            var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

            if (unbounded) {
              this.adapter_.addClass(UNBOUNDED);
            } else {
              this.adapter_.removeClass(UNBOUNDED);
            }
          }
        }, {
          key: 'handleFocus',
          value: function handleFocus() {
            var _this16 = this;

            requestAnimationFrame(function () {
              return _this16.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          }
        }, {
          key: 'handleBlur',
          value: function handleBlur() {
            var _this17 = this;

            requestAnimationFrame(function () {
              return _this17.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
            });
          }
        }]);

        return MDCRippleFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCRippleFoundation;

      /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return strings;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return numbers;
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var cssClasses = {
        // Ripple is a special case where the "root" component is really a "mixin" of sorts,
        // given that it's an 'upgrade' to an existing component. That being said it is the root
        // CSS class that all other CSS classes derive from.
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
      };

      var strings = {
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
      };

      var numbers = {
        PADDING: 10,
        INITIAL_ORIGIN_SCALE: 0.6,
        DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
        FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
        TAP_DELAY_MS: 300 };

      /***/
    },
    /* 7 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__component__ = __webpack_require__(1);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_0__foundation__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCComponent", function () {
        return __WEBPACK_IMPORTED_MODULE_1__component__["a"];
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /***/
    },,,,
    /* 8 */
    /* 9 */
    /* 10 */
    /* 11 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "closest", function () {
        return closest;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "matches", function () {
        return matches;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @fileoverview A "ponyfill" is a polyfill that doesn't modify the global prototype chain.
       * This makes ponyfills safer than traditional polyfills, especially for libraries like MDC.
       */

      /**
       * @param {!Element} element
       * @param {string} selector
       * @return {?Element}
       */
      function closest(element, selector) {
        if (element.closest) {
          return element.closest(selector);
        }

        var el = element;
        while (el) {
          if (matches(el, selector)) {
            return el;
          }
          el = el.parentElement;
        }
        return null;
      }

      /**
       * @param {!Element} element
       * @param {string} selector
       * @return {boolean}
       */
      function matches(element, selector) {
        var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
        return nativeMatches.call(element, selector);
      }

      /***/
    },
    /* 12 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC List. Provides an interface for managing focus.
       *
       * Additionally, provides type information for the adapter to the Closure
       * compiler.
       *
       * Implement this adapter for your framework of choice to delegate updates to
       * the component in your framework of choice. See architecture documentation
       * for more details.
       * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
       *
       * @record
       */
      var MDCListAdapter = function () {
        function MDCListAdapter() {
          _classCallCheck(this, MDCListAdapter);
        }

        _createClass(MDCListAdapter, [{
          key: "getListItemCount",

          /** @return {number} */
          value: function getListItemCount() {}

          /**
           * @return {number} */

        }, {
          key: "getFocusedElementIndex",
          value: function getFocusedElementIndex() {}

          /**
           * @param {number} index
           * @param {string} attribute
           * @param {string} value
           */

        }, {
          key: "setAttributeForElementIndex",
          value: function setAttributeForElementIndex(index, attribute, value) {}

          /**
           * @param {number} index
           * @param {string} attribute
           */

        }, {
          key: "removeAttributeForElementIndex",
          value: function removeAttributeForElementIndex(index, attribute) {}

          /**
           * @param {number} index
           * @param {string} className
           */

        }, {
          key: "addClassForElementIndex",
          value: function addClassForElementIndex(index, className) {}

          /**
           * @param {number} index
           * @param {string} className
           */

        }, {
          key: "removeClassForElementIndex",
          value: function removeClassForElementIndex(index, className) {}

          /**
           * Focuses list item at the index specified.
           * @param {number} index
           */

        }, {
          key: "focusItemAtIndex",
          value: function focusItemAtIndex(index) {}

          /**
           * Sets the tabindex to the value specified for all button/a element children of
           * the list item at the index specified.
           * @param {number} listItemIndex
           * @param {number} tabIndexValue
           */

        }, {
          key: "setTabIndexForListItemChildren",
          value: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {}

          /**
           * If the given element has an href, follows the link.
           * @param {!Element} ele
           */

        }, {
          key: "followHref",
          value: function followHref(ele) {}

          /**
           * @param {number} index
           * @return {boolean} Returns true if radio button is present at given list item index.
           */

        }, {
          key: "hasRadioAtIndex",
          value: function hasRadioAtIndex(index) {}

          /**
           * @param {number} index
           * @return {boolean} Returns true if checkbox is present at given list item index.
           */

        }, {
          key: "hasCheckboxAtIndex",
          value: function hasCheckboxAtIndex(index) {}

          /**
           * @param {number} index
           * @return {boolean} Returns true if checkbox inside a list item is checked.
           */

        }, {
          key: "isCheckboxCheckedAtIndex",
          value: function isCheckboxCheckedAtIndex(index) {}

          /**
           * Sets the checked status of checkbox or radio at given list item index.
           * @param {number} index
           * @param {boolean} isChecked
           */

        }, {
          key: "setCheckedCheckboxOrRadioAtIndex",
          value: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {}
        }]);

        return MDCListAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCListAdapter;

      /***/
    },
    /* 13 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return strings;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var cssClasses = {
        ROOT: 'mdc-list',
        LIST_ITEM_CLASS: 'mdc-list-item',
        LIST_ITEM_SELECTED_CLASS: 'mdc-list-item--selected',
        LIST_ITEM_ACTIVATED_CLASS: 'mdc-list-item--activated'
      };

      /** @enum {string} */
      var strings = {
        ARIA_ORIENTATION: 'aria-orientation',
        ARIA_ORIENTATION_HORIZONTAL: 'horizontal',
        ARIA_SELECTED: 'aria-selected',
        ARIA_CHECKED: 'aria-checked',
        ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
        RADIO_SELECTOR: 'input[type="radio"]:not(:disabled)',
        CHECKBOX_SELECTOR: 'input[type="checkbox"]:not(:disabled)',
        CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',
        CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: '.' + cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled),\n  .' + cssClasses.LIST_ITEM_CLASS + ' a',
        FOCUSABLE_CHILD_ELEMENTS: '.' + cssClasses.LIST_ITEM_CLASS + ' button:not(:disabled), .' + cssClasses.LIST_ITEM_CLASS + ' a,\n  .' + cssClasses.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n  .' + cssClasses.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled)',
        ENABLED_ITEMS_SELECTOR: '.mdc-list-item:not(.mdc-list-item--disabled)'
      };

      /***/
    },
    /* 14 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC Floating Label.
       *
       * Defines the shape of the adapter expected by the foundation. Implement this
       * adapter to integrate the floating label into your framework. See
       * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
       * for more information.
       *
       * @record
       */
      var MDCFloatingLabelAdapter = function () {
        function MDCFloatingLabelAdapter() {
          _classCallCheck(this, MDCFloatingLabelAdapter);
        }

        _createClass(MDCFloatingLabelAdapter, [{
          key: "addClass",

          /**
           * Adds a class to the label element.
           * @param {string} className
           */
          value: function addClass(className) {}

          /**
           * Removes a class from the label element.
           * @param {string} className
           */

        }, {
          key: "removeClass",
          value: function removeClass(className) {}

          /**
           * Returns the width of the label element.
           * @return {number}
           */

        }, {
          key: "getWidth",
          value: function getWidth() {}

          /**
           * Registers an event listener on the root element for a given event.
           * @param {string} evtType
           * @param {function(!Event): undefined} handler
           */

        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(evtType, handler) {}

          /**
           * Deregisters an event listener on the root element for a given event.
           * @param {string} evtType
           * @param {function(!Event): undefined} handler
           */

        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(evtType, handler) {}
        }]);

        return MDCFloatingLabelAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCFloatingLabelAdapter;

      /***/
    },,
    /* 15 */
    /* 16 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(12);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(13);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select'];

      var MDCListFoundation = function (_MDCFoundation) {
        _inherits(MDCListFoundation, _MDCFoundation);

        _createClass(MDCListFoundation, null, [{
          key: 'strings',

          /** @return enum {string} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
          }

          /** @return enum {string} */

        }, {
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }

          /**
           * {@see MDCListAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCListAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCListAdapter} */{
                getListItemCount: function getListItemCount() {},
                getFocusedElementIndex: function getFocusedElementIndex() {},
                setAttributeForElementIndex: function setAttributeForElementIndex() {},
                removeAttributeForElementIndex: function removeAttributeForElementIndex() {},
                addClassForElementIndex: function addClassForElementIndex() {},
                removeClassForElementIndex: function removeClassForElementIndex() {},
                focusItemAtIndex: function focusItemAtIndex() {},
                setTabIndexForListItemChildren: function setTabIndexForListItemChildren() {},
                followHref: function followHref() {},
                hasRadioAtIndex: function hasRadioAtIndex() {},
                hasCheckboxAtIndex: function hasCheckboxAtIndex() {},
                isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex() {},
                setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex() {}
              }
            );
          }

          /**
           * @param {!MDCListAdapter=} adapter
           */

        }]);

        function MDCListFoundation(adapter) {
          _classCallCheck(this, MDCListFoundation);

          /** {boolean} */
          var _this = _possibleConstructorReturn(this, (MDCListFoundation.__proto__ || Object.getPrototypeOf(MDCListFoundation)).call(this, _extends(MDCListFoundation.defaultAdapter, adapter)));

          _this.wrapFocus_ = false;
          /** {boolean} */
          _this.isVertical_ = true;
          /** {boolean} */
          _this.isSingleSelectionList_ = false;
          /** {number} */
          _this.selectedIndex_ = -1;
          /** {boolean} */
          _this.useActivatedClass_ = false;
          return _this;
        }

        /**
         * Sets the private wrapFocus_ variable.
         * @param {boolean} value
         */

        _createClass(MDCListFoundation, [{
          key: 'setWrapFocus',
          value: function setWrapFocus(value) {
            this.wrapFocus_ = value;
          }

          /**
           * Sets the isVertical_ private variable.
           * @param {boolean} value
           */

        }, {
          key: 'setVerticalOrientation',
          value: function setVerticalOrientation(value) {
            this.isVertical_ = value;
          }

          /**
           * Sets the isSingleSelectionList_ private variable.
           * @param {boolean} value
           */

        }, {
          key: 'setSingleSelection',
          value: function setSingleSelection(value) {
            this.isSingleSelectionList_ = value;
          }

          /**
           * Sets the useActivatedClass_ private variable.
           * @param {boolean} useActivated
           */

        }, {
          key: 'setUseActivatedClass',
          value: function setUseActivatedClass(useActivated) {
            this.useActivatedClass_ = useActivated;
          }

          /** @param {number} index */

        }, {
          key: 'setSelectedIndex',
          value: function setSelectedIndex(index) {
            if (index < 0 || index >= this.adapter_.getListItemCount()) return;

            if (this.adapter_.hasCheckboxAtIndex(index)) {
              this.setAriaAttributesForCheckbox_(index);
            } else if (this.adapter_.hasRadioAtIndex(index)) {
              this.setAriaAttributesForRadio_(index);
            } else {
              this.setAriaAttributesForSingleSelect_(index);
              this.setClassNamesForSingleSelect_(index);
            }

            if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
              this.adapter_.setAttributeForElementIndex(this.selectedIndex_, 'tabindex', -1);
            } else if (this.selectedIndex_ === -1 && index !== 0) {
              // If no list item was selected set first list item's tabindex to -1.
              // Generally, tabindex is set to 0 on first list item of list that has no preselected items.
              this.adapter_.setAttributeForElementIndex(0, 'tabindex', -1);
            }

            this.adapter_.setAttributeForElementIndex(index, 'tabindex', 0);

            this.selectedIndex_ = index;
          }

          /**
           * @param {number} index
           * @private
           */

        }, {
          key: 'setAriaAttributesForCheckbox_',
          value: function setAriaAttributesForCheckbox_(index) {
            var ariaAttributeValue = this.adapter_.isCheckboxCheckedAtIndex(index) ? 'true' : 'false';
            this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, ariaAttributeValue);
          }

          /**
           * @param {number} index
           * @private
           */

        }, {
          key: 'setAriaAttributesForRadio_',
          value: function setAriaAttributesForRadio_(index) {
            if (this.selectedIndex_ >= 0) {
              this.adapter_.setAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, 'false');
            }

            this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_CHECKED, 'true');
          }

          /**
          * @param {number} index
          * @private
          */

        }, {
          key: 'setAriaAttributesForSingleSelect_',
          value: function setAriaAttributesForSingleSelect_(index) {
            if (this.selectedIndex_ >= 0 && this.selectedIndex_ !== index) {
              this.adapter_.setAttributeForElementIndex(this.selectedIndex_, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'false');
            }

            this.adapter_.setAttributeForElementIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED, 'true');
          }

          /**
           * @param {number} index
           * @private
           */

        }, {
          key: 'setClassNamesForSingleSelect_',
          value: function setClassNamesForSingleSelect_(index) {
            var selectedClassName = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS;

            if (this.useActivatedClass_) {
              selectedClassName = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS;
            }

            if (this.selectedIndex_ >= 0) {
              this.adapter_.removeClassForElementIndex(this.selectedIndex_, selectedClassName);
            }

            this.adapter_.addClassForElementIndex(index, selectedClassName);
          }

          /**
           * Focus in handler for the list items.
           * @param evt
           * @param {number} listItemIndex
           */

        }, {
          key: 'handleFocusIn',
          value: function handleFocusIn(evt, listItemIndex) {
            if (listItemIndex >= 0) {
              this.adapter_.setTabIndexForListItemChildren(listItemIndex, 0);
            }
          }

          /**
           * Focus out handler for the list items.
           * @param {Event} evt
           * @param {number} listItemIndex
           */

        }, {
          key: 'handleFocusOut',
          value: function handleFocusOut(evt, listItemIndex) {
            if (listItemIndex >= 0) {
              this.adapter_.setTabIndexForListItemChildren(listItemIndex, -1);
            }
          }

          /**
           * Key handler for the list.
           * @param {Event} evt
           * @param {boolean} isRootListItem
           * @param {number} listItemIndex
           */

        }, {
          key: 'handleKeydown',
          value: function handleKeydown(evt, isRootListItem, listItemIndex) {
            var arrowLeft = evt.key === 'ArrowLeft' || evt.keyCode === 37;
            var arrowUp = evt.key === 'ArrowUp' || evt.keyCode === 38;
            var arrowRight = evt.key === 'ArrowRight' || evt.keyCode === 39;
            var arrowDown = evt.key === 'ArrowDown' || evt.keyCode === 40;
            var isHome = evt.key === 'Home' || evt.keyCode === 36;
            var isEnd = evt.key === 'End' || evt.keyCode === 35;
            var isEnter = evt.key === 'Enter' || evt.keyCode === 13;
            var isSpace = evt.key === 'Space' || evt.keyCode === 32;

            var currentIndex = this.adapter_.getFocusedElementIndex();
            if (currentIndex === -1) {
              currentIndex = listItemIndex;
              if (currentIndex < 0) {
                // If this event doesn't have a mdc-list-item ancestor from the
                // current list (not from a sublist), return early.
                return;
              }
            }

            if (this.isVertical_ && arrowDown || !this.isVertical_ && arrowRight) {
              this.preventDefaultEvent_(evt);
              this.focusNextElement(currentIndex);
            } else if (this.isVertical_ && arrowUp || !this.isVertical_ && arrowLeft) {
              this.preventDefaultEvent_(evt);
              this.focusPrevElement(currentIndex);
            } else if (isHome) {
              this.preventDefaultEvent_(evt);
              this.focusFirstElement();
            } else if (isEnd) {
              this.preventDefaultEvent_(evt);
              this.focusLastElement();
            } else if (isEnter || isSpace) {
              if (isRootListItem) {
                if (this.isSingleSelectionList_) {
                  // Check if the space key was pressed on the list item or a child element.
                  this.preventDefaultEvent_(evt);
                }

                var hasCheckboxOrRadio = this.hasCheckboxOrRadioAtIndex_(listItemIndex);
                if (hasCheckboxOrRadio) {
                  this.toggleCheckboxOrRadioAtIndex_(listItemIndex);
                  this.preventDefaultEvent_(evt);
                }

                if (this.isSingleSelectionList_ || hasCheckboxOrRadio) {
                  this.setSelectedIndex(currentIndex);
                }

                // Explicitly activate links, since we're preventing default on Enter, and Space doesn't activate them.
                this.adapter_.followHref(currentIndex);
              }
            }
          }

          /**
           * Click handler for the list.
           * @param {number} index
           * @param {boolean} toggleCheckbox
           */

        }, {
          key: 'handleClick',
          value: function handleClick(index, toggleCheckbox) {
            if (index === -1) return;

            if (toggleCheckbox) {
              this.toggleCheckboxOrRadioAtIndex_(index);
            }

            if (this.isSingleSelectionList_ || this.hasCheckboxOrRadioAtIndex_(index)) {
              this.setSelectedIndex(index);
            }
          }

          /**
           * Ensures that preventDefault is only called if the containing element doesn't
           * consume the event, and it will cause an unintended scroll.
           * @param {Event} evt
           * @private
           */

        }, {
          key: 'preventDefaultEvent_',
          value: function preventDefaultEvent_(evt) {
            var tagName = ('' + evt.target.tagName).toLowerCase();
            if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
              evt.preventDefault();
            }
          }

          /**
           * Focuses the next element on the list.
           * @param {number} index
           */

        }, {
          key: 'focusNextElement',
          value: function focusNextElement(index) {
            var count = this.adapter_.getListItemCount();
            var nextIndex = index + 1;
            if (nextIndex >= count) {
              if (this.wrapFocus_) {
                nextIndex = 0;
              } else {
                // Return early because last item is already focused.
                return;
              }
            }
            this.adapter_.focusItemAtIndex(nextIndex);
          }

          /**
           * Focuses the previous element on the list.
           * @param {number} index
           */

        }, {
          key: 'focusPrevElement',
          value: function focusPrevElement(index) {
            var prevIndex = index - 1;
            if (prevIndex < 0) {
              if (this.wrapFocus_) {
                prevIndex = this.adapter_.getListItemCount() - 1;
              } else {
                // Return early because first item is already focused.
                return;
              }
            }
            this.adapter_.focusItemAtIndex(prevIndex);
          }
        }, {
          key: 'focusFirstElement',
          value: function focusFirstElement() {
            if (this.adapter_.getListItemCount() > 0) {
              this.adapter_.focusItemAtIndex(0);
            }
          }
        }, {
          key: 'focusLastElement',
          value: function focusLastElement() {
            var lastIndex = this.adapter_.getListItemCount() - 1;
            if (lastIndex >= 0) {
              this.adapter_.focusItemAtIndex(lastIndex);
            }
          }

          /**
           * Toggles checkbox or radio at give index. Radio doesn't change the checked state if it is already checked.
           * @param {number} index
           * @private
           */

        }, {
          key: 'toggleCheckboxOrRadioAtIndex_',
          value: function toggleCheckboxOrRadioAtIndex_(index) {
            if (!this.hasCheckboxOrRadioAtIndex_(index)) return;

            var isChecked = true;
            if (this.adapter_.hasCheckboxAtIndex(index)) {
              isChecked = !this.adapter_.isCheckboxCheckedAtIndex(index);
            }

            this.adapter_.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
          }

          /**
           * @param {number} index
           * @return {boolean} Return true if list item contains checkbox or radio input at given index.
           */

        }, {
          key: 'hasCheckboxOrRadioAtIndex_',
          value: function hasCheckboxOrRadioAtIndex_(index) {
            return this.adapter_.hasCheckboxAtIndex(index) || this.adapter_.hasRadioAtIndex(index);
          }
        }]);

        return MDCListFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCListFoundation;

      /***/
    },
    /* 17 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCFloatingLabel", function () {
        return MDCFloatingLabel;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(14);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(27);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCFloatingLabelFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
       * @final
       */

      var MDCFloatingLabel = function (_MDCComponent) {
        _inherits(MDCFloatingLabel, _MDCComponent);

        function MDCFloatingLabel() {
          _classCallCheck(this, MDCFloatingLabel);

          return _possibleConstructorReturn(this, (MDCFloatingLabel.__proto__ || Object.getPrototypeOf(MDCFloatingLabel)).apply(this, arguments));
        }

        _createClass(MDCFloatingLabel, [{
          key: 'shake',

          /**
           * Styles the label to produce the label shake for errors.
           * @param {boolean} shouldShake styles the label to shake by adding shake class
           * if true, otherwise will stop shaking by removing shake class.
           */
          value: function shake(shouldShake) {
            this.foundation_.shake(shouldShake);
          }

          /**
           * Styles label to float/dock.
           * @param {boolean} shouldFloat styles the label to float by adding float class
           * if true, otherwise docks the label by removing the float class.
           */

        }, {
          key: 'float',
          value: function float(shouldFloat) {
            this.foundation_.float(shouldFloat);
          }

          /**
           * @return {number}
           */

        }, {
          key: 'getWidth',
          value: function getWidth() {
            return this.foundation_.getWidth();
          }

          /**
           * @return {!MDCFloatingLabelFoundation}
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;

            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              getWidth: function getWidth() {
                return _this2.root_.offsetWidth;
              },
              registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return _this2.root_.addEventListener(evtType, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return _this2.root_.removeEventListener(evtType, handler);
              }
            });
          }
        }], [{
          key: 'attachTo',

          /**
           * @param {!Element} root
           * @return {!MDCFloatingLabel}
           */
          value: function attachTo(root) {
            return new MDCFloatingLabel(root);
          }
        }]);

        return MDCFloatingLabel;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /***/
    },
    /* 18 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return MDCMenuSurfaceFoundation;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return AnchorMargin;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(22);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(19);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        }return obj;
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @typedef {{
       *   top: number,
       *   right: number,
       *   bottom: number,
       *   left: number
       * }}
       */
      var AnchorMargin = void 0;

      /* eslint-disable no-unused-vars */
      /**
       * @typedef {{
       *   viewport: { width: number, height: number },
       *   viewportDistance: {top: number, right: number, bottom: number, left: number},
       *   anchorHeight: number,
       *   anchorWidth: number,
       *   surfaceHeight: number,
       *   surfaceWidth: number,
       *   bodyDimensions,
       *   windowScroll,
       * }}
       */
      var AutoLayoutMeasurements = void 0;
      /* eslint-enable no-unused-vars */

      /**
       * @extends {MDCFoundation<!MDCMenuSurfaceAdapter>}
       */

      var MDCMenuSurfaceFoundation = function (_MDCFoundation) {
        _inherits(MDCMenuSurfaceFoundation, _MDCFoundation);

        _createClass(MDCMenuSurfaceFoundation, null, [{
          key: 'cssClasses',

          /** @return enum{cssClasses} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* cssClasses */];
          }

          /** @return enum{string} */

        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* strings */];
          }

          /** @return enum {number} */

        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */];
          }

          /** @return enum{number} */

        }, {
          key: 'Corner',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */];
          }

          /**
           * {@see MDCMenuSurfaceAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCMenuSurfaceAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCMenuSurfaceAdapter} */{
                addClass: function addClass() {},
                removeClass: function removeClass() {},
                hasClass: function hasClass() {
                  return false;
                },
                hasAnchor: function hasAnchor() {
                  return false;
                },
                notifyClose: function notifyClose() {},
                notifyOpen: function notifyOpen() {},
                isElementInContainer: function isElementInContainer() {
                  return false;
                },
                isRtl: function isRtl() {
                  return false;
                },
                setTransformOrigin: function setTransformOrigin() {},
                isFocused: function isFocused() {
                  return false;
                },
                saveFocus: function saveFocus() {},
                restoreFocus: function restoreFocus() {},
                isFirstElementFocused: function isFirstElementFocused() {},
                isLastElementFocused: function isLastElementFocused() {},
                focusFirstElement: function focusFirstElement() {},
                focusLastElement: function focusLastElement() {},
                getInnerDimensions: function getInnerDimensions() {
                  return {};
                },
                getAnchorDimensions: function getAnchorDimensions() {
                  return {};
                },
                getWindowDimensions: function getWindowDimensions() {
                  return {};
                },
                getBodyDimensions: function getBodyDimensions() {
                  return {};
                },
                getWindowScroll: function getWindowScroll() {
                  return {};
                },
                setPosition: function setPosition() {},
                setMaxHeight: function setMaxHeight() {}
              }
            );
          }

          /** @param {!MDCMenuSurfaceAdapter} adapter */

        }]);

        function MDCMenuSurfaceFoundation(adapter) {
          _classCallCheck(this, MDCMenuSurfaceFoundation);

          /** @private {boolean} */
          var _this = _possibleConstructorReturn(this, (MDCMenuSurfaceFoundation.__proto__ || Object.getPrototypeOf(MDCMenuSurfaceFoundation)).call(this, _extends(MDCMenuSurfaceFoundation.defaultAdapter, adapter)));

          _this.isOpen_ = false;
          /** @private {number} */
          _this.openAnimationEndTimerId_ = 0;
          /** @private {number} */
          _this.closeAnimationEndTimerId_ = 0;
          /** @private {number} */
          _this.animationRequestId_ = 0;
          /** @private {!{ width: number, height: number }} */
          _this.dimensions_;
          /** @private {!Corner} */
          _this.anchorCorner_ = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */].TOP_START;
          /** @private {!AnchorMargin} */
          _this.anchorMargin_ = { top: 0, right: 0, bottom: 0, left: 0 };
          /** @private {?AutoLayoutMeasurements} */
          _this.measures_ = null;
          /** @private {boolean} */
          _this.quickOpen_ = false;
          /** @private {boolean} */
          _this.hoistedElement_ = false;
          /** @private {boolean} */
          _this.isFixedPosition_ = false;
          /** @private {!{x: number, y: number}} */
          _this.position_ = { x: 0, y: 0 };
          return _this;
        }

        _createClass(MDCMenuSurfaceFoundation, [{
          key: 'init',
          value: function init() {
            var _MDCMenuSurfaceFounda = MDCMenuSurfaceFoundation.cssClasses,
                ROOT = _MDCMenuSurfaceFounda.ROOT,
                OPEN = _MDCMenuSurfaceFounda.OPEN;

            if (!this.adapter_.hasClass(ROOT)) {
              throw new Error(ROOT + ' class required in root element.');
            }

            if (this.adapter_.hasClass(OPEN)) {
              this.isOpen_ = true;
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            clearTimeout(this.openAnimationEndTimerId_);
            clearTimeout(this.closeAnimationEndTimerId_);
            // Cancel any currently running animations.
            cancelAnimationFrame(this.animationRequestId_);
          }

          /**
           * @param {!Corner} corner Default anchor corner alignment of top-left menu surface corner.
           */

        }, {
          key: 'setAnchorCorner',
          value: function setAnchorCorner(corner) {
            this.anchorCorner_ = corner;
          }

          /**
           * @param {!AnchorMargin} margin set of margin values from anchor.
           */

        }, {
          key: 'setAnchorMargin',
          value: function setAnchorMargin(margin) {
            this.anchorMargin_.top = typeof margin.top === 'number' ? margin.top : 0;
            this.anchorMargin_.right = typeof margin.right === 'number' ? margin.right : 0;
            this.anchorMargin_.bottom = typeof margin.bottom === 'number' ? margin.bottom : 0;
            this.anchorMargin_.left = typeof margin.left === 'number' ? margin.left : 0;
          }

          /**
           * Used to indicate if the menu-surface is hoisted to the body.
           * @param {boolean} isHoisted
           */

        }, {
          key: 'setIsHoisted',
          value: function setIsHoisted(isHoisted) {
            this.hoistedElement_ = isHoisted;
          }

          /**
           * Used to set the menu-surface calculations based on a fixed position menu.
           * @param {boolean} isFixedPosition
           */

        }, {
          key: 'setFixedPosition',
          value: function setFixedPosition(isFixedPosition) {
            this.isFixedPosition_ = isFixedPosition;
          }

          /**
           * Sets the menu-surface position on the page.
           * @param {number} x
           * @param {number} y
           */

        }, {
          key: 'setAbsolutePosition',
          value: function setAbsolutePosition(x, y) {
            this.position_.x = this.typeCheckisFinite_(x) ? x : 0;
            this.position_.y = this.typeCheckisFinite_(y) ? y : 0;
          }

          /** @param {boolean} quickOpen */

        }, {
          key: 'setQuickOpen',
          value: function setQuickOpen(quickOpen) {
            this.quickOpen_ = quickOpen;
          }

          /**
           * Handle clicks and close if not within menu-surface element.
           * @param {!Event} evt
           */

        }, {
          key: 'handleBodyClick',
          value: function handleBodyClick(evt) {
            var el = evt.target;

            if (this.adapter_.isElementInContainer(el)) {
              return;
            }

            this.close();
          }
        }, {
          key: 'handleKeydown',

          /**
           * Handle keys that close the surface.
           * @param {!Event} evt
           */
          value: function handleKeydown(evt) {
            var keyCode = evt.keyCode,
                key = evt.key,
                shiftKey = evt.shiftKey;

            var isEscape = key === 'Escape' || keyCode === 27;
            var isTab = key === 'Tab' || keyCode === 9;

            if (isEscape) {
              this.close();
            } else if (isTab) {
              if (this.adapter_.isLastElementFocused() && !shiftKey) {
                this.adapter_.focusFirstElement();
                evt.preventDefault();
              } else if (this.adapter_.isFirstElementFocused() && shiftKey) {
                this.adapter_.focusLastElement();
                evt.preventDefault();
              }
            }
          }

          /**
           * @return {!AutoLayoutMeasurements} Measurements used to position menu surface popup.
           */

        }, {
          key: 'getAutoLayoutMeasurements_',
          value: function getAutoLayoutMeasurements_() {
            var anchorRect = this.adapter_.getAnchorDimensions();
            var viewport = this.adapter_.getWindowDimensions();
            var bodyDimensions = this.adapter_.getBodyDimensions();
            var windowScroll = this.adapter_.getWindowScroll();

            if (!anchorRect) {
              anchorRect = /** @type {ClientRect} */{
                x: this.position_.x,
                y: this.position_.y,
                top: this.position_.y,
                bottom: this.position_.y,
                left: this.position_.x,
                right: this.position_.x,
                height: 0,
                width: 0
              };
            }

            return {
              viewport: viewport,
              bodyDimensions: bodyDimensions,
              windowScroll: windowScroll,
              viewportDistance: {
                top: anchorRect.top,
                right: viewport.width - anchorRect.right,
                left: anchorRect.left,
                bottom: viewport.height - anchorRect.bottom
              },
              anchorHeight: anchorRect.height,
              anchorWidth: anchorRect.width,
              surfaceHeight: this.dimensions_.height,
              surfaceWidth: this.dimensions_.width
            };
          }

          /**
           * Computes the corner of the anchor from which to animate and position the menu surface.
           * @return {!Corner}
           * @private
           */

        }, {
          key: 'getOriginCorner_',
          value: function getOriginCorner_() {
            // Defaults: open from the top left.
            var corner = __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* Corner */].TOP_LEFT;

            var _measures_ = this.measures_,
                viewportDistance = _measures_.viewportDistance,
                anchorHeight = _measures_.anchorHeight,
                anchorWidth = _measures_.anchorWidth,
                surfaceHeight = _measures_.surfaceHeight,
                surfaceWidth = _measures_.surfaceWidth;

            var isBottomAligned = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
            var availableTop = isBottomAligned ? viewportDistance.top + anchorHeight + this.anchorMargin_.bottom : viewportDistance.top + this.anchorMargin_.top;
            var availableBottom = isBottomAligned ? viewportDistance.bottom - this.anchorMargin_.bottom : viewportDistance.bottom + anchorHeight - this.anchorMargin_.top;

            var topOverflow = surfaceHeight - availableTop;
            var bottomOverflow = surfaceHeight - availableBottom;
            if (bottomOverflow > 0 && topOverflow < bottomOverflow) {
              corner |= __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM;
            }

            var isRtl = this.adapter_.isRtl();
            var isFlipRtl = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].FLIP_RTL);
            var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);
            var isAlignedRight = avoidHorizontalOverlap && !isRtl || !avoidHorizontalOverlap && isFlipRtl && isRtl;
            var availableLeft = isAlignedRight ? viewportDistance.left + anchorWidth + this.anchorMargin_.right : viewportDistance.left + this.anchorMargin_.left;
            var availableRight = isAlignedRight ? viewportDistance.right - this.anchorMargin_.right : viewportDistance.right + anchorWidth - this.anchorMargin_.left;

            var leftOverflow = surfaceWidth - availableLeft;
            var rightOverflow = surfaceWidth - availableRight;

            if (leftOverflow < 0 && isAlignedRight && isRtl || avoidHorizontalOverlap && !isAlignedRight && leftOverflow < 0 || rightOverflow > 0 && leftOverflow < rightOverflow) {
              corner |= __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT;
            }

            return (/** @type {Corner} */corner
            );
          }

          /**
           * @param {!Corner} corner Origin corner of the menu surface.
           * @return {number} Horizontal offset of menu surface origin corner from corresponding anchor corner.
           * @private
           */

        }, {
          key: 'getHorizontalOriginOffset_',
          value: function getHorizontalOriginOffset_(corner) {
            var anchorWidth = this.measures_.anchorWidth;
            // isRightAligned corresponds to using the 'right' property on the surface.

            var isRightAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);
            var avoidHorizontalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT);

            if (isRightAligned) {
              var rightOffset = avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.left : this.anchorMargin_.right;

              // For hoisted or fixed elements, adjust the offset by the difference between viewport width and body width so
              // when we calculate the right value (`adjustPositionForHoistedElement_`) based on the element position,
              // the right property is correct.
              if (this.hoistedElement_ || this.isFixedPosition_) {
                return rightOffset - (this.measures_.viewport.width - this.measures_.bodyDimensions.width);
              }

              return rightOffset;
            }

            return avoidHorizontalOverlap ? anchorWidth - this.anchorMargin_.right : this.anchorMargin_.left;
          }

          /**
           * @param {!Corner} corner Origin corner of the menu surface.
           * @return {number} Vertical offset of menu surface origin corner from corresponding anchor corner.
           * @private
           */

        }, {
          key: 'getVerticalOriginOffset_',
          value: function getVerticalOriginOffset_(corner) {
            var anchorHeight = this.measures_.anchorHeight;

            var isBottomAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
            var avoidVerticalOverlap = Boolean(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
            var y = 0;

            if (isBottomAligned) {
              y = avoidVerticalOverlap ? anchorHeight - this.anchorMargin_.top : -this.anchorMargin_.bottom;
            } else {
              y = avoidVerticalOverlap ? anchorHeight + this.anchorMargin_.bottom : this.anchorMargin_.top;
            }
            return y;
          }

          /**
           * @param {!Corner} corner Origin corner of the menu surface.
           * @return {number} Maximum height of the menu surface, based on available space. 0 indicates should not be set.
           * @private
           */

        }, {
          key: 'getMenuSurfaceMaxHeight_',
          value: function getMenuSurfaceMaxHeight_(corner) {
            var maxHeight = 0;
            var viewportDistance = this.measures_.viewportDistance;

            var isBottomAligned = Boolean(corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM);
            var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation.numbers.MARGIN_TO_EDGE;

            // When maximum height is not specified, it is handled from css.

            if (isBottomAligned) {
              maxHeight = viewportDistance.top + this.anchorMargin_.top - MARGIN_TO_EDGE;
              if (!(this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM)) {
                maxHeight += this.measures_.anchorHeight;
              }
            } else {
              maxHeight = viewportDistance.bottom - this.anchorMargin_.bottom + this.measures_.anchorHeight - MARGIN_TO_EDGE;
              if (this.anchorCorner_ & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM) {
                maxHeight -= this.measures_.anchorHeight;
              }
            }

            return maxHeight;
          }

          /** @private */

        }, {
          key: 'autoPosition_',
          value: function autoPosition_() {
            var _position;

            // Compute measurements for autoposition methods reuse.
            this.measures_ = this.getAutoLayoutMeasurements_();

            var corner = this.getOriginCorner_();
            var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight_(corner);
            var verticalAlignment = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].BOTTOM ? 'bottom' : 'top';
            var horizontalAlignment = corner & __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* CornerBit */].RIGHT ? 'right' : 'left';
            var horizontalOffset = this.getHorizontalOriginOffset_(corner);
            var verticalOffset = this.getVerticalOriginOffset_(corner);
            var position = (_position = {}, _defineProperty(_position, horizontalAlignment, horizontalOffset ? horizontalOffset : '0'), _defineProperty(_position, verticalAlignment, verticalOffset ? verticalOffset : '0'), _position);
            var _measures_2 = this.measures_,
                anchorWidth = _measures_2.anchorWidth,
                surfaceWidth = _measures_2.surfaceWidth;
            // Center align when anchor width is comparable or greater than menu surface, otherwise keep corner.

            if (anchorWidth / surfaceWidth > __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
              horizontalAlignment = 'center';
            }

            // If the menu-surface has been hoisted to the body, it's no longer relative to the anchor element
            if (this.hoistedElement_ || this.isFixedPosition_) {
              position = this.adjustPositionForHoistedElement_(position);
            }

            for (var prop in position) {
              if (position.hasOwnProperty(prop) && position[prop] !== '0') {
                position[prop] = parseInt(position[prop], 10) + 'px';
              }
            }

            this.adapter_.setTransformOrigin(horizontalAlignment + ' ' + verticalAlignment);
            this.adapter_.setPosition(position);
            this.adapter_.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + 'px' : '');

            // Clear measures after positioning is complete.
            this.measures_ = null;
          }

          /**
           * Calculates the offsets for positioning the menu-surface when the menu-surface has been
           * hoisted to the body.
           * @param {!{
           *   top: (string|undefined),
           *   right: (string|undefined),
           *   bottom: (string|undefined),
           *   left: (string|undefined)
           * }} position
           * @return {!{
           *   top: (string|undefined),
           *   right: (string|undefined),
           *   bottom: (string|undefined),
           *   left: (string|undefined)
           * }} position
           * @private
           */

        }, {
          key: 'adjustPositionForHoistedElement_',
          value: function adjustPositionForHoistedElement_(position) {
            var _measures_3 = this.measures_,
                windowScroll = _measures_3.windowScroll,
                viewportDistance = _measures_3.viewportDistance;

            for (var prop in position) {
              if (position.hasOwnProperty(prop)) {
                // Hoisted surfaces need to have the anchor elements location on the page added to the
                // position properties for proper alignment on the body.
                if (viewportDistance.hasOwnProperty(prop)) {
                  position[prop] = parseInt(position[prop], 10) + viewportDistance[prop];
                }

                // Surfaces that are absolutely positioned need to have additional calculations for scroll
                // and bottom positioning.
                if (!this.isFixedPosition_) {
                  if (prop === 'top') {
                    position[prop] = parseInt(position[prop], 10) + windowScroll.y;
                  } else if (prop === 'bottom') {
                    position[prop] = parseInt(position[prop], 10) - windowScroll.y;
                  } else if (prop === 'left') {
                    position[prop] = parseInt(position[prop], 10) + windowScroll.x;
                  } else if (prop === 'right') {
                    position[prop] = parseInt(position[prop], 10) - windowScroll.x;
                  }
                }
              }
            }

            return position;
          }

          /**
           * Open the menu surface.
           */

        }, {
          key: 'open',
          value: function open() {
            var _this2 = this;

            this.adapter_.saveFocus();

            if (!this.quickOpen_) {
              this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
            }

            this.animationRequestId_ = requestAnimationFrame(function () {
              _this2.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
              _this2.dimensions_ = _this2.adapter_.getInnerDimensions();
              _this2.autoPosition_();
              if (_this2.quickOpen_) {
                _this2.adapter_.notifyOpen();
              } else {
                _this2.openAnimationEndTimerId_ = setTimeout(function () {
                  _this2.openAnimationEndTimerId_ = 0;
                  _this2.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_OPEN);
                  _this2.adapter_.notifyOpen();
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].TRANSITION_OPEN_DURATION);
              }
            });
            this.isOpen_ = true;
          }

          /**
           * Closes the menu surface.
           */

        }, {
          key: 'close',
          value: function close() {
            var _this3 = this;

            if (!this.quickOpen_) {
              this.adapter_.addClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
            }

            requestAnimationFrame(function () {
              _this3.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.OPEN);
              if (_this3.quickOpen_) {
                _this3.adapter_.notifyClose();
              } else {
                _this3.closeAnimationEndTimerId_ = setTimeout(function () {
                  _this3.closeAnimationEndTimerId_ = 0;
                  _this3.adapter_.removeClass(MDCMenuSurfaceFoundation.cssClasses.ANIMATING_CLOSED);
                  _this3.adapter_.notifyClose();
                }, __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* numbers */].TRANSITION_CLOSE_DURATION);
              }
            });

            this.isOpen_ = false;
            this.maybeRestoreFocus_();
          }

          /**
           * The last focused element when the menu surface was opened should regain focus, if the user is
           * focused on or within the menu surface when it is closed.
           * @private
           */

        }, {
          key: 'maybeRestoreFocus_',
          value: function maybeRestoreFocus_() {
            if (this.adapter_.isFocused() || this.adapter_.isElementInContainer(document.activeElement)) {
              this.adapter_.restoreFocus();
            }
          }

          /** @return {boolean} */

        }, {
          key: 'isOpen',
          value: function isOpen() {
            return this.isOpen_;
          }

          /**
           * isFinite that doesn't force conversion to number type.
           * Equivalent to Number.isFinite in ES2015, but is not included in IE11.
           * @param {number} num
           * @return {boolean}
           * @private
           */

        }, {
          key: 'typeCheckisFinite_',
          value: function typeCheckisFinite_(num) {
            return typeof num === 'number' && isFinite(num);
          }
        }]);

        return MDCMenuSurfaceFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /***/
    },
    /* 19 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "c", function () {
        return cssClasses;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "e", function () {
        return strings;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "d", function () {
        return numbers;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return CornerBit;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return Corner;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var cssClasses = {
        ANCHOR: 'mdc-menu-surface--anchor',
        ANIMATING_CLOSED: 'mdc-menu-surface--animating-closed',
        ANIMATING_OPEN: 'mdc-menu-surface--animating-open',
        FIXED: 'mdc-menu-surface--fixed',
        OPEN: 'mdc-menu-surface--open',
        ROOT: 'mdc-menu-surface'
      };

      /** @enum {string} */
      var strings = {
        CLOSED_EVENT: 'MDCMenuSurface:closed',
        OPENED_EVENT: 'MDCMenuSurface:opened',
        FOCUSABLE_ELEMENTS: 'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), ' + 'select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
      };

      /** @enum {number} */
      var numbers = {
        // Total duration of menu-surface open animation.
        TRANSITION_OPEN_DURATION: 120,
        // Total duration of menu-surface close animation.
        TRANSITION_CLOSE_DURATION: 75,
        // Margin left to the edge of the viewport when menu-surface is at maximum possible height.
        MARGIN_TO_EDGE: 32,
        // Ratio of anchor width to menu-surface width for switching from corner positioning to center positioning.
        ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67
      };

      /**
       * Enum for bits in the {@see Corner) bitmap.
       * @enum {number}
       */
      var CornerBit = {
        BOTTOM: 1,
        CENTER: 2,
        RIGHT: 4,
        FLIP_RTL: 8
      };

      /**
       * Enum for representing an element corner for positioning the menu-surface.
       *
       * The START constants map to LEFT if element directionality is left
       * to right and RIGHT if the directionality is right to left.
       * Likewise END maps to RIGHT or LEFT depending on the directionality.
       *
       * @enum {number}
       */
      var Corner = {
        TOP_LEFT: 0,
        TOP_RIGHT: CornerBit.RIGHT,
        BOTTOM_LEFT: CornerBit.BOTTOM,
        BOTTOM_RIGHT: CornerBit.BOTTOM | CornerBit.RIGHT,
        TOP_START: CornerBit.FLIP_RTL,
        TOP_END: CornerBit.FLIP_RTL | CornerBit.RIGHT,
        BOTTOM_START: CornerBit.BOTTOM | CornerBit.FLIP_RTL,
        BOTTOM_END: CornerBit.BOTTOM | CornerBit.RIGHT | CornerBit.FLIP_RTL
      };

      /***/
    },,
    /* 20 */
    /* 21 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC TextField Line Ripple.
       *
       * Defines the shape of the adapter expected by the foundation. Implement this
       * adapter to integrate the line ripple into your framework. See
       * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
       * for more information.
       *
       * @record
       */
      var MDCLineRippleAdapter = function () {
        function MDCLineRippleAdapter() {
          _classCallCheck(this, MDCLineRippleAdapter);
        }

        _createClass(MDCLineRippleAdapter, [{
          key: "addClass",

          /**
           * Adds a class to the line ripple element.
           * @param {string} className
           */
          value: function addClass(className) {}

          /**
           * Removes a class from the line ripple element.
           * @param {string} className
           */

        }, {
          key: "removeClass",
          value: function removeClass(className) {}

          /**
           * @param {string} className
           * @return {boolean}
           */

        }, {
          key: "hasClass",
          value: function hasClass(className) {}

          /**
           * Sets the style property with propertyName to value on the root element.
           * @param {string} propertyName
           * @param {string} value
           */

        }, {
          key: "setStyle",
          value: function setStyle(propertyName, value) {}

          /**
           * Registers an event listener on the line ripple element for a given event.
           * @param {string} evtType
           * @param {function(!Event): undefined} handler
           */

        }, {
          key: "registerEventHandler",
          value: function registerEventHandler(evtType, handler) {}

          /**
           * Deregisters an event listener on the line ripple element for a given event.
           * @param {string} evtType
           * @param {function(!Event): undefined} handler
           */

        }, {
          key: "deregisterEventHandler",
          value: function deregisterEventHandler(evtType, handler) {}
        }]);

        return MDCLineRippleAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCLineRippleAdapter;

      /***/
    },
    /* 22 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* unused harmony export MDCMenuSurfaceAdapter */

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDCMenuSurface. Provides an interface for managing
       * - classes
       * - dom
       * - focus
       * - position
       * - dimensions
       * - event handlers
       *
       * Additionally, provides type information for the adapter to the Closure
       * compiler.
       *
       * Implement this adapter for your framework of choice to delegate updates to
       * the component in your framework of choice. See architecture documentation
       * for more details.
       * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
       *
       * @record
       */
      var MDCMenuSurfaceAdapter = function () {
        function MDCMenuSurfaceAdapter() {
          _classCallCheck(this, MDCMenuSurfaceAdapter);
        }

        _createClass(MDCMenuSurfaceAdapter, [{
          key: "addClass",

          /** @param {string} className */
          value: function addClass(className) {}

          /** @param {string} className */

        }, {
          key: "removeClass",
          value: function removeClass(className) {}

          /**
           * @param {string} className
           * @return {boolean}
           */

        }, {
          key: "hasClass",
          value: function hasClass(className) {}

          /** @return {boolean} */

        }, {
          key: "hasAnchor",
          value: function hasAnchor() {}

          /** Emits an event when the menu surface is closed. */

        }, {
          key: "notifyClose",
          value: function notifyClose() {}

          /** Emits an event when the menu surface is opened. */

        }, {
          key: "notifyOpen",
          value: function notifyOpen() {}

          /**
           * @return {boolean}
           * @param {EventTarget} el
           */

        }, {
          key: "isElementInContainer",
          value: function isElementInContainer(el) {}

          /** @return {boolean} */

        }, {
          key: "isRtl",
          value: function isRtl() {}

          /** @param {string} origin */

        }, {
          key: "setTransformOrigin",
          value: function setTransformOrigin(origin) {}

          /** @return {boolean} */

        }, {
          key: "isFocused",
          value: function isFocused() {}

          /** Saves the element that was focused before the menu surface was opened. */

        }, {
          key: "saveFocus",
          value: function saveFocus() {}

          /** Restores focus to the element that was focused before the menu surface was opened. */

        }, {
          key: "restoreFocus",
          value: function restoreFocus() {}

          /** @return {boolean} */

        }, {
          key: "isFirstElementFocused",
          value: function isFirstElementFocused() {}

          /** @return {boolean} */

        }, {
          key: "isLastElementFocused",
          value: function isLastElementFocused() {}

          /** Focuses the first focusable element in the menu-surface. */

        }, {
          key: "focusFirstElement",
          value: function focusFirstElement() {}

          /** Focuses the first focusable element in the menu-surface. */

        }, {
          key: "focusLastElement",
          value: function focusLastElement() {}

          /** @return {!{width: number, height: number}} */

        }, {
          key: "getInnerDimensions",
          value: function getInnerDimensions() {}

          /** @return {!{width: number, height: number, top: number, right: number, bottom: number, left: number}} */

        }, {
          key: "getAnchorDimensions",
          value: function getAnchorDimensions() {}

          /** @return {!{ width: number, height: number }} */

        }, {
          key: "getWindowDimensions",
          value: function getWindowDimensions() {}

          /** @return {!{ width: number, height: number }} */

        }, {
          key: "getBodyDimensions",
          value: function getBodyDimensions() {}

          /** @return {!{ width: number, height: number }} */

        }, {
          key: "getWindowScroll",
          value: function getWindowScroll() {}

          /** @param {!{
          *   top: (string|undefined),
          *   right: (string|undefined),
          *   bottom: (string|undefined),
          *   left: (string|undefined)
          * }} position */

        }, {
          key: "setPosition",
          value: function setPosition(position) {}

          /** @param {string} height */

        }, {
          key: "setMaxHeight",
          value: function setMaxHeight(height) {}
        }]);

        return MDCMenuSurfaceAdapter;
      }();

      /***/
    },
    /* 23 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC Notched Outline.
       *
       * Defines the shape of the adapter expected by the foundation. Implement this
       * adapter to integrate the Notched Outline into your framework. See
       * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
       * for more information.
       *
       * @record
       */
      var MDCNotchedOutlineAdapter = function () {
        function MDCNotchedOutlineAdapter() {
          _classCallCheck(this, MDCNotchedOutlineAdapter);
        }

        _createClass(MDCNotchedOutlineAdapter, [{
          key: "addClass",

          /**
           * Adds a class to the root element.
           * @param {string} className
           */
          value: function addClass(className) {}

          /**
           * Removes a class from the root element.
           * @param {string} className
           */

        }, {
          key: "removeClass",
          value: function removeClass(className) {}

          /**
           * Sets the width style property of the notch element.
           * @param {number} width
           */

        }, {
          key: "setNotchWidthProperty",
          value: function setNotchWidthProperty(width) {}
        }]);

        return MDCNotchedOutlineAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCNotchedOutlineAdapter;

      /***/
    },
    /* 24 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return numbers;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return strings;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var strings = {
        NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
      };

      /** @enum {number} */
      var numbers = {
        // This should stay in sync with $mdc-notched-outline-padding * 2.
        NOTCH_ELEMENT_PADDING: 8
      };

      /** @enum {string} */
      var cssClasses = {
        OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
        OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded',
        NO_LABEL: 'mdc-notched-outline--no-label'
      };

      /***/
    },,
    /* 25 */
    /* 26 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCList", function () {
        return MDCList;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(16);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__adapter__ = __webpack_require__(12);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__material_dom_ponyfill__ = __webpack_require__(11);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(13);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCListFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends MDCComponent<!MDCListFoundation>
       */

      var MDCList = function (_MDCComponent) {
        _inherits(MDCList, _MDCComponent);

        /** @param {...?} args */
        function MDCList() {
          var _ref;

          _classCallCheck(this, MDCList);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /** @private {!Function} */
          var _this = _possibleConstructorReturn(this, (_ref = MDCList.__proto__ || Object.getPrototypeOf(MDCList)).call.apply(_ref, [this].concat(args)));

          _this.handleKeydown_;
          /** @private {!Function} */
          _this.handleClick_;
          /** @private {!Function} */
          _this.focusInEventListener_;
          /** @private {!Function} */
          _this.focusOutEventListener_;
          return _this;
        }

        /**
         * @param {!Element} root
         * @return {!MDCList}
         */

        _createClass(MDCList, [{
          key: 'destroy',
          value: function destroy() {
            this.root_.removeEventListener('keydown', this.handleKeydown_);
            this.root_.removeEventListener('click', this.handleClick_);
            this.root_.removeEventListener('focusin', this.focusInEventListener_);
            this.root_.removeEventListener('focusout', this.focusOutEventListener_);
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            this.handleClick_ = this.handleClickEvent_.bind(this);
            this.handleKeydown_ = this.handleKeydownEvent_.bind(this);
            this.focusInEventListener_ = this.handleFocusInEvent_.bind(this);
            this.focusOutEventListener_ = this.handleFocusOutEvent_.bind(this);
            this.root_.addEventListener('keydown', this.handleKeydown_);
            this.root_.addEventListener('focusin', this.focusInEventListener_);
            this.root_.addEventListener('focusout', this.focusOutEventListener_);
            this.root_.addEventListener('click', this.handleClick_);
            this.layout();
            this.initializeListType();
          }
        }, {
          key: 'layout',
          value: function layout() {
            var direction = this.root_.getAttribute(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ORIENTATION);
            this.vertical = direction !== __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_ORIENTATION_HORIZONTAL;

            // List items need to have at least tabindex=-1 to be focusable.
            [].slice.call(this.root_.querySelectorAll('.mdc-list-item:not([tabindex])')).forEach(function (ele) {
              ele.setAttribute('tabindex', -1);
            });

            // Child button/a elements are not tabbable until the list item is focused.
            [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].FOCUSABLE_CHILD_ELEMENTS)).forEach(function (ele) {
              return ele.setAttribute('tabindex', -1);
            });
          }

          /**
           * Used to figure out which list item this event is targetting. Or returns -1 if
           * there is no list item
           * @param {Event} evt
           * @private
           */

        }, {
          key: 'getListItemIndex_',
          value: function getListItemIndex_(evt) {
            var eventTarget = /** @type {HTMLElement} */evt.target;
            var index = -1;

            // Find the first ancestor that is a list item or the list.
            while (!eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS) && !eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].ROOT)) {
              eventTarget = eventTarget.parentElement;
            }

            // Get the index of the element if it is a list item.
            if (eventTarget.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS)) {
              index = this.listElements.indexOf(eventTarget);
            }

            return index;
          }

          /**
           * Used to figure out which element was clicked before sending the event to the foundation.
           * @param {Event} evt
           * @private
           */

        }, {
          key: 'handleFocusInEvent_',
          value: function handleFocusInEvent_(evt) {
            var index = this.getListItemIndex_(evt);
            this.foundation_.handleFocusIn(evt, index);
          }

          /**
           * Used to figure out which element was clicked before sending the event to the foundation.
           * @param {Event} evt
           * @private
           */

        }, {
          key: 'handleFocusOutEvent_',
          value: function handleFocusOutEvent_(evt) {
            var index = this.getListItemIndex_(evt);
            this.foundation_.handleFocusOut(evt, index);
          }

          /**
           * Used to figure out which element was focused when keydown event occurred before sending the event to the
           * foundation.
           * @param {Event} evt
           * @private
           */

        }, {
          key: 'handleKeydownEvent_',
          value: function handleKeydownEvent_(evt) {
            var index = this.getListItemIndex_(evt);

            if (index >= 0) {
              this.foundation_.handleKeydown(evt, evt.target.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_CLASS), index);
            }
          }

          /**
           * Used to figure out which element was clicked before sending the event to the foundation.
           * @param {Event} evt
           * @private
           */

        }, {
          key: 'handleClickEvent_',
          value: function handleClickEvent_(evt) {
            var index = this.getListItemIndex_(evt);

            // Toggle the checkbox only if it's not the target of the event, or the checkbox will have 2 change events.
            var toggleCheckbox = !Object(__WEBPACK_IMPORTED_MODULE_3__material_dom_ponyfill__["matches"])( /** @type {!Element} */evt.target, __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR);
            this.foundation_.handleClick(index, toggleCheckbox);
          }
        }, {
          key: 'initializeListType',
          value: function initializeListType() {
            // Pre-selected list item in single selected list or checked list item if list with radio input.
            var preselectedElement = this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS + ',\n        .' + __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_SELECTED_CLASS + ',\n        ' + __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ARIA_CHECKED_RADIO_SELECTOR);

            if (preselectedElement) {
              if (preselectedElement.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].LIST_ITEM_ACTIVATED_CLASS)) {
                this.foundation_.setUseActivatedClass(true);
              }

              this.singleSelection = true;

              // Automatically set selected index if single select list type or list with radio inputs.
              this.selectedIndex = this.listElements.indexOf(preselectedElement);
            }
          }

          /** @param {boolean} value */

        }, {
          key: 'getDefaultFoundation',

          /** @return {!MDCListFoundation} */
          value: function getDefaultFoundation() {
            var _this2 = this;

            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* default */]( /** @type {!MDCListAdapter} */_extends({
              getListItemCount: function getListItemCount() {
                return _this2.listElements.length;
              },
              getFocusedElementIndex: function getFocusedElementIndex() {
                return _this2.listElements.indexOf(document.activeElement);
              },
              setAttributeForElementIndex: function setAttributeForElementIndex(index, attr, value) {
                var element = _this2.listElements[index];
                if (element) {
                  element.setAttribute(attr, value);
                }
              },
              removeAttributeForElementIndex: function removeAttributeForElementIndex(index, attr) {
                var element = _this2.listElements[index];
                if (element) {
                  element.removeAttribute(attr);
                }
              },
              addClassForElementIndex: function addClassForElementIndex(index, className) {
                var element = _this2.listElements[index];
                if (element) {
                  element.classList.add(className);
                }
              },
              removeClassForElementIndex: function removeClassForElementIndex(index, className) {
                var element = _this2.listElements[index];
                if (element) {
                  element.classList.remove(className);
                }
              },
              focusItemAtIndex: function focusItemAtIndex(index) {
                var element = _this2.listElements[index];
                if (element) {
                  element.focus();
                }
              },
              setTabIndexForListItemChildren: function setTabIndexForListItemChildren(listItemIndex, tabIndexValue) {
                var element = _this2.listElements[listItemIndex];
                var listItemChildren = [].slice.call(element.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));
                listItemChildren.forEach(function (ele) {
                  return ele.setAttribute('tabindex', tabIndexValue);
                });
              },
              followHref: function followHref(index) {
                var listItem = _this2.listElements[index];
                if (listItem && listItem.href) {
                  listItem.click();
                }
              },
              hasCheckboxAtIndex: function hasCheckboxAtIndex(index) {
                var listItem = _this2.listElements[index];
                return !!listItem.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_SELECTOR);
              },
              hasRadioAtIndex: function hasRadioAtIndex(index) {
                var listItem = _this2.listElements[index];
                return !!listItem.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].RADIO_SELECTOR);
              },
              isCheckboxCheckedAtIndex: function isCheckboxCheckedAtIndex(index) {
                var listItem = _this2.listElements[index];
                var toggleEl = listItem.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_SELECTOR);
                return toggleEl.checked;
              },
              setCheckedCheckboxOrRadioAtIndex: function setCheckedCheckboxOrRadioAtIndex(index, isChecked) {
                var listItem = _this2.listElements[index];
                var toggleEl = listItem.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].CHECKBOX_RADIO_SELECTOR);
                toggleEl.checked = isChecked;

                var event = document.createEvent('Event');
                event.initEvent('change', true, true);
                toggleEl.dispatchEvent(event);
              }
            }));
          }
        }, {
          key: 'vertical',
          set: function set(value) {
            this.foundation_.setVerticalOrientation(value);
          }

          /** @return Array<!Element>*/

        }, {
          key: 'listElements',
          get: function get() {
            return [].slice.call(this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["b" /* strings */].ENABLED_ITEMS_SELECTOR));
          }

          /** @param {boolean} value */

        }, {
          key: 'wrapFocus',
          set: function set(value) {
            this.foundation_.setWrapFocus(value);
          }

          /** @param {boolean} isSingleSelectionList */

        }, {
          key: 'singleSelection',
          set: function set(isSingleSelectionList) {
            this.foundation_.setSingleSelection(isSingleSelectionList);
          }

          /** @param {number} index */

        }, {
          key: 'selectedIndex',
          set: function set(index) {
            this.foundation_.setSelectedIndex(index);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCList(root);
          }
        }]);

        return MDCList;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /***/
    },
    /* 27 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(14);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(28);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
       * @final
       */

      var MDCFloatingLabelFoundation = function (_MDCFoundation) {
        _inherits(MDCFloatingLabelFoundation, _MDCFoundation);

        _createClass(MDCFloatingLabelFoundation, null, [{
          key: 'cssClasses',

          /** @return enum {string} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }

          /**
           * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCFloatingLabelAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCFloatingLabelAdapter} */{
                addClass: function addClass() {},
                removeClass: function removeClass() {},
                getWidth: function getWidth() {},
                registerInteractionHandler: function registerInteractionHandler() {},
                deregisterInteractionHandler: function deregisterInteractionHandler() {}
              }
            );
          }

          /**
           * @param {!MDCFloatingLabelAdapter} adapter
           */

        }]);

        function MDCFloatingLabelFoundation(adapter) {
          _classCallCheck(this, MDCFloatingLabelFoundation);

          /** @private {function(!Event): undefined} */
          var _this = _possibleConstructorReturn(this, (MDCFloatingLabelFoundation.__proto__ || Object.getPrototypeOf(MDCFloatingLabelFoundation)).call(this, _extends(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

          _this.shakeAnimationEndHandler_ = function () {
            return _this.handleShakeAnimationEnd_();
          };
          return _this;
        }

        _createClass(MDCFloatingLabelFoundation, [{
          key: 'init',
          value: function init() {
            this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
          }

          /**
           * Returns the width of the label element.
           * @return {number}
           */

        }, {
          key: 'getWidth',
          value: function getWidth() {
            return this.adapter_.getWidth();
          }

          /**
           * Styles the label to produce the label shake for errors.
           * @param {boolean} shouldShake adds shake class if true,
           * otherwise removes shake class.
           */

        }, {
          key: 'shake',
          value: function shake(shouldShake) {
            var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

            if (shouldShake) {
              this.adapter_.addClass(LABEL_SHAKE);
            } else {
              this.adapter_.removeClass(LABEL_SHAKE);
            }
          }

          /**
           * Styles the label to float or dock.
           * @param {boolean} shouldFloat adds float class if true, otherwise remove
           * float and shake class to dock label.
           */

        }, {
          key: 'float',
          value: function float(shouldFloat) {
            var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
                LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
                LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

            if (shouldFloat) {
              this.adapter_.addClass(LABEL_FLOAT_ABOVE);
            } else {
              this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
              this.adapter_.removeClass(LABEL_SHAKE);
            }
          }

          /**
           * Handles an interaction event on the root element.
           */

        }, {
          key: 'handleShakeAnimationEnd_',
          value: function handleShakeAnimationEnd_() {
            var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

            this.adapter_.removeClass(LABEL_SHAKE);
          }
        }]);

        return MDCFloatingLabelFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCFloatingLabelFoundation;

      /***/
    },
    /* 28 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var cssClasses = {
        LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
        LABEL_SHAKE: 'mdc-floating-label--shake',
        ROOT: 'mdc-floating-label'
      };

      /***/
    },,
    /* 29 */
    /* 30 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return strings;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var cssClasses = {
        ROOT: 'mdc-menu',
        MENU_SELECTED_LIST_ITEM: 'mdc-menu-item--selected',
        MENU_SELECTION_GROUP: 'mdc-menu__selection-group'
      };

      /** @enum {string} */
      var strings = {
        SELECTED_EVENT: 'MDCMenu:selected',
        ARIA_SELECTED_ATTR: 'aria-selected',
        LIST_SELECTOR: '.mdc-list',
        CHECKBOX_SELECTOR: 'input[type="checkbox"]'
      };

      /***/
    },
    /* 31 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCLineRipple", function () {
        return MDCLineRipple;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(32);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCLineRippleFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCComponent<!MDCLineRippleFoundation>}
       * @final
       */

      var MDCLineRipple = function (_MDCComponent) {
        _inherits(MDCLineRipple, _MDCComponent);

        function MDCLineRipple() {
          _classCallCheck(this, MDCLineRipple);

          return _possibleConstructorReturn(this, (MDCLineRipple.__proto__ || Object.getPrototypeOf(MDCLineRipple)).apply(this, arguments));
        }

        _createClass(MDCLineRipple, [{
          key: 'activate',

          /**
           * Activates the line ripple
           */
          value: function activate() {
            this.foundation_.activate();
          }

          /**
           * Deactivates the line ripple
           */

        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.foundation_.deactivate();
          }

          /**
           * Sets the transform origin given a user's click location. The `rippleCenter` is the
           * x-coordinate of the middle of the ripple.
           * @param {number} xCoordinate
           */

        }, {
          key: 'setRippleCenter',
          value: function setRippleCenter(xCoordinate) {
            this.foundation_.setRippleCenter(xCoordinate);
          }

          /**
           * @return {!MDCLineRippleFoundation}
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;

            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCLineRippleAdapter} */_extends({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              setStyle: function setStyle(propertyName, value) {
                return _this2.root_.style[propertyName] = value;
              },
              registerEventHandler: function registerEventHandler(evtType, handler) {
                return _this2.root_.addEventListener(evtType, handler);
              },
              deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
                return _this2.root_.removeEventListener(evtType, handler);
              }
            }));
          }
        }], [{
          key: 'attachTo',

          /**
           * @param {!Element} root
           * @return {!MDCLineRipple}
           */
          value: function attachTo(root) {
            return new MDCLineRipple(root);
          }
        }]);

        return MDCLineRipple;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /***/
    },
    /* 32 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(21);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(33);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCFoundation<!MDCLineRippleAdapter>}
       * @final
       */

      var MDCLineRippleFoundation = function (_MDCFoundation) {
        _inherits(MDCLineRippleFoundation, _MDCFoundation);

        _createClass(MDCLineRippleFoundation, null, [{
          key: 'cssClasses',

          /** @return enum {string} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }

          /**
           * {@see MDCLineRippleAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCLineRippleAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCLineRippleAdapter} */{
                addClass: function addClass() {},
                removeClass: function removeClass() {},
                hasClass: function hasClass() {},
                setStyle: function setStyle() {},
                registerEventHandler: function registerEventHandler() {},
                deregisterEventHandler: function deregisterEventHandler() {}
              }
            );
          }

          /**
           * @param {!MDCLineRippleAdapter=} adapter
           */

        }]);

        function MDCLineRippleFoundation(adapter) {
          _classCallCheck(this, MDCLineRippleFoundation);

          /** @private {function(!Event): undefined} */
          var _this = _possibleConstructorReturn(this, (MDCLineRippleFoundation.__proto__ || Object.getPrototypeOf(MDCLineRippleFoundation)).call(this, _extends(MDCLineRippleFoundation.defaultAdapter, adapter)));

          _this.transitionEndHandler_ = function (evt) {
            return _this.handleTransitionEnd(evt);
          };
          return _this;
        }

        _createClass(MDCLineRippleFoundation, [{
          key: 'init',
          value: function init() {
            this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
          }

          /**
           * Activates the line ripple
           */

        }, {
          key: 'activate',
          value: function activate() {
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
          }

          /**
           * Sets the center of the ripple animation to the given X coordinate.
           * @param {number} xCoordinate
           */

        }, {
          key: 'setRippleCenter',
          value: function setRippleCenter(xCoordinate) {
            this.adapter_.setStyle('transform-origin', xCoordinate + 'px center');
          }

          /**
           * Deactivates the line ripple
           */

        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
          }

          /**
           * Handles a transition end event
           * @param {!Event} evt
           */

        }, {
          key: 'handleTransitionEnd',
          value: function handleTransitionEnd(evt) {
            // Wait for the line ripple to be either transparent or opaque
            // before emitting the animation end event
            var isDeactivating = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);

            if (evt.propertyName === 'opacity') {
              if (isDeactivating) {
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_ACTIVE);
                this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].LINE_RIPPLE_DEACTIVATING);
              }
            }
          }
        }]);

        return MDCLineRippleFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCLineRippleFoundation;

      /***/
    },
    /* 33 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var cssClasses = {
        LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
        LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
      };

      /***/
    },
    /* 34 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCMenuSurface", function () {
        return MDCMenuSurface;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(35);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(18);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__adapter__ = __webpack_require__(22);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(19);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCMenuSurfaceFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "AnchorMargin", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Corner", function () {
        return __WEBPACK_IMPORTED_MODULE_4__constants__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "CornerBit", function () {
        return __WEBPACK_IMPORTED_MODULE_4__constants__["b"];
      });
      /* harmony reexport (module object) */__webpack_require__.d(__webpack_exports__, "util", function () {
        return __WEBPACK_IMPORTED_MODULE_1__util__;
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;if (getter === undefined) {
            return undefined;
          }return getter.call(receiver);
        }
      };

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends MDCComponent<!MDCMenuSurfaceFoundation>
       */

      var MDCMenuSurface = function (_MDCComponent) {
        _inherits(MDCMenuSurface, _MDCComponent);

        /** @param {...?} args */
        function MDCMenuSurface() {
          var _ref;

          _classCallCheck(this, MDCMenuSurface);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /** @private {!Element} */
          var _this = _possibleConstructorReturn(this, (_ref = MDCMenuSurface.__proto__ || Object.getPrototypeOf(MDCMenuSurface)).call.apply(_ref, [this].concat(args)));

          _this.previousFocus_;
          /** @private {!Element} */
          _this.anchorElement;
          /** @private {Element} */
          _this.firstFocusableElement_;
          /** @private {Element} */
          _this.lastFocusableElement_;
          /** @private {!Function} */
          _this.handleKeydown_;
          /** @private {!Function} */
          _this.handleBodyClick_;
          /** @private {!Function} */
          _this.registerBodyClickListener_;
          /** @private {!Function} */
          _this.deregisterBodyClickListener_;
          return _this;
        }

        /**
         * @param {!Element} root
         * @return {!MDCMenuSurface}
         */

        _createClass(MDCMenuSurface, [{
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            var _this2 = this;

            if (this.root_.parentElement && this.root_.parentElement.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].ANCHOR)) {
              this.anchorElement = this.root_.parentElement;
            }

            if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].FIXED)) {
              this.setFixedPosition(true);
            }

            this.handleKeydown_ = function (evt) {
              return _this2.foundation_.handleKeydown(evt);
            };
            this.handleBodyClick_ = function (evt) {
              return _this2.foundation_.handleBodyClick(evt);
            };

            this.registerBodyClickListener_ = function () {
              return document.body.addEventListener('click', _this2.handleBodyClick_);
            };
            this.deregisterBodyClickListener_ = function () {
              return document.body.removeEventListener('click', _this2.handleBodyClick_);
            };

            this.root_.addEventListener('keydown', this.handleKeydown_);
            this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].OPENED_EVENT, this.registerBodyClickListener_);
            this.root_.addEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].CLOSED_EVENT, this.deregisterBodyClickListener_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.root_.removeEventListener('keydown', this.handleKeydown_);
            this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].OPENED_EVENT, this.registerBodyClickListener_);
            this.root_.removeEventListener(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].CLOSED_EVENT, this.deregisterBodyClickListener_);
            _get(MDCMenuSurface.prototype.__proto__ || Object.getPrototypeOf(MDCMenuSurface.prototype), 'destroy', this).call(this);
          }

          /** @return {boolean} */

        }, {
          key: 'hoistMenuToBody',

          /**
           * Removes the menu-surface from it's current location and appends it to the
           * body to overcome any overflow:hidden issues.
           */
          value: function hoistMenuToBody() {
            document.body.appendChild(this.root_.parentElement.removeChild(this.root_));
            this.setIsHoisted(true);
          }

          /**
           * Sets the foundation to use page offsets for an positioning when the menu
           * is hoisted to the body.
           * @param {boolean} isHoisted
           */

        }, {
          key: 'setIsHoisted',
          value: function setIsHoisted(isHoisted) {
            this.foundation_.setIsHoisted(isHoisted);
          }

          /**
           * Sets the element that the menu-surface is anchored to.
           * @param {!Element} element
           */

        }, {
          key: 'setMenuSurfaceAnchorElement',
          value: function setMenuSurfaceAnchorElement(element) {
            this.anchorElement = element;
          }

          /**
           * Sets the menu-surface to position: fixed.
           * @param {boolean} isFixed
           */

        }, {
          key: 'setFixedPosition',
          value: function setFixedPosition(isFixed) {
            if (isFixed) {
              this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].FIXED);
            } else {
              this.root_.classList.remove(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* cssClasses */].FIXED);
            }

            this.foundation_.setFixedPosition(isFixed);
          }

          /**
           * Sets the absolute x/y position to position based on. Requires the menu to be hoisted.
           * @param {number} x
           * @param {number} y
           */

        }, {
          key: 'setAbsolutePosition',
          value: function setAbsolutePosition(x, y) {
            this.foundation_.setAbsolutePosition(x, y);
            this.setIsHoisted(true);
          }

          /**
           * @param {!Corner} corner Default anchor corner alignment of top-left
           *     surface corner.
           */

        }, {
          key: 'setAnchorCorner',
          value: function setAnchorCorner(corner) {
            this.foundation_.setAnchorCorner(corner);
          }

          /**
           * @param {!AnchorMargin} margin
           */

        }, {
          key: 'setAnchorMargin',
          value: function setAnchorMargin(margin) {
            this.foundation_.setAnchorMargin(margin);
          }

          /** @param {boolean} quickOpen */

        }, {
          key: 'getDefaultFoundation',

          /** @return {!MDCMenuSurfaceFoundation} */
          value: function getDefaultFoundation() {
            var _this3 = this;

            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["b" /* MDCMenuSurfaceFoundation */](
            /** @type {!MDCMenuSurfaceAdapter} */_extends({
              addClass: function addClass(className) {
                return _this3.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this3.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this3.root_.classList.contains(className);
              },
              hasAnchor: function hasAnchor() {
                return !!_this3.anchorElement;
              },
              notifyClose: function notifyClose() {
                return _this3.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["b" /* MDCMenuSurfaceFoundation */].strings.CLOSED_EVENT, {});
              },
              notifyOpen: function notifyOpen() {
                return _this3.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["b" /* MDCMenuSurfaceFoundation */].strings.OPENED_EVENT, {});
              },
              isElementInContainer: function isElementInContainer(el) {
                return _this3.root_ === el || _this3.root_.contains(el);
              },
              isRtl: function isRtl() {
                return getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
              },
              setTransformOrigin: function setTransformOrigin(origin) {
                _this3.root_.style[__WEBPACK_IMPORTED_MODULE_1__util__["getTransformPropertyName"](window) + '-origin'] = origin;
              }
            }, this.getFocusAdapterMethods_(), this.getDimensionAdapterMethods_()));
          }

          /**
           * @return {!{
           * isFocused: function(): boolean,
           * saveFocus: function(),
           * restoreFocus: function(),
           * isFirstElementFocused: function(): boolean,
           * isLastElementFocused: function(): boolean,
           * focusFirstElement: function(),
           * focusLastElement: function(),
           * }}
           * @private
           */

        }, {
          key: 'getFocusAdapterMethods_',
          value: function getFocusAdapterMethods_() {
            var _this4 = this;

            return {
              isFocused: function isFocused() {
                return document.activeElement === _this4.root_;
              },
              saveFocus: function saveFocus() {
                _this4.previousFocus_ = document.activeElement;
              },
              restoreFocus: function restoreFocus() {
                if (_this4.root_.contains(document.activeElement)) {
                  if (_this4.previousFocus_ && _this4.previousFocus_.focus) {
                    _this4.previousFocus_.focus();
                  }
                }
              },
              isFirstElementFocused: function isFirstElementFocused() {
                return _this4.firstFocusableElement_ && _this4.firstFocusableElement_ === document.activeElement;
              },
              isLastElementFocused: function isLastElementFocused() {
                return _this4.lastFocusableElement_ && _this4.lastFocusableElement_ === document.activeElement;
              },
              focusFirstElement: function focusFirstElement() {
                return _this4.firstFocusableElement_ && _this4.firstFocusableElement_.focus && _this4.firstFocusableElement_.focus();
              },
              focusLastElement: function focusLastElement() {
                return _this4.lastFocusableElement_ && _this4.lastFocusableElement_.focus && _this4.lastFocusableElement_.focus();
              }
            };
          }

          /**
           * @return {!{
           * getInnerDimensions: function(),
           * getAnchorDimensions: function(): (HTMLElement | null | * | ClientRect),
           * getWindowDimensions: function(),
           * setPosition: function(*),
           * setMaxHeight: function(string)}}
           * @private
           */

        }, {
          key: 'getDimensionAdapterMethods_',
          value: function getDimensionAdapterMethods_() {
            var _this5 = this;

            return {
              getInnerDimensions: function getInnerDimensions() {
                return { width: _this5.root_.offsetWidth, height: _this5.root_.offsetHeight };
              },
              getAnchorDimensions: function getAnchorDimensions() {
                return _this5.anchorElement && _this5.anchorElement.getBoundingClientRect();
              },
              getWindowDimensions: function getWindowDimensions() {
                return { width: window.innerWidth, height: window.innerHeight };
              },
              getBodyDimensions: function getBodyDimensions() {
                return { width: document.body.clientWidth, height: document.body.clientHeight };
              },
              getWindowScroll: function getWindowScroll() {
                return { x: window.pageXOffset, y: window.pageYOffset };
              },
              setPosition: function setPosition(position) {
                _this5.root_.style.left = 'left' in position ? position.left : null;
                _this5.root_.style.right = 'right' in position ? position.right : null;
                _this5.root_.style.top = 'top' in position ? position.top : null;
                _this5.root_.style.bottom = 'bottom' in position ? position.bottom : null;
              },
              setMaxHeight: function setMaxHeight(height) {
                _this5.root_.style.maxHeight = height;
              }
            };
          }
        }, {
          key: 'open',
          get: function get() {
            return this.foundation_.isOpen();
          }

          /** @param {boolean} value */

          , set: function set(value) {
            if (value) {
              var focusableElements = this.root_.querySelectorAll(__WEBPACK_IMPORTED_MODULE_4__constants__["e" /* strings */].FOCUSABLE_ELEMENTS);
              this.firstFocusableElement_ = focusableElements.length > 0 ? focusableElements[0] : null;
              this.lastFocusableElement_ = focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
              this.foundation_.open();
            } else {
              this.foundation_.close();
            }
          }
        }, {
          key: 'quickOpen',
          set: function set(quickOpen) {
            this.foundation_.setQuickOpen(quickOpen);
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCMenuSurface(root);
          }
        }]);

        return MDCMenuSurface;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /***/
    },
    /* 35 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "getTransformPropertyName", function () {
        return getTransformPropertyName;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @type {string|undefined} */
      var storedTransformPropertyName_ = void 0;

      /**
       * Returns the name of the correct transform property to use on the current browser.
       * @param {!Window} globalObj
       * @param {boolean=} forceRefresh
       * @return {string}
       */
      function getTransformPropertyName(globalObj) {
        var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (storedTransformPropertyName_ === undefined || forceRefresh) {
          var el = globalObj.document.createElement('div');
          var transformPropertyName = 'transform' in el.style ? 'transform' : 'webkitTransform';
          storedTransformPropertyName_ = transformPropertyName;
        }

        return storedTransformPropertyName_;
      }

      /***/
    },
    /* 36 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCNotchedOutline", function () {
        return MDCNotchedOutline;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(23);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(37);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__material_floating_label_index__ = __webpack_require__(17);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(24);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCNotchedOutlineFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
       * @final
       */

      var MDCNotchedOutline = function (_MDCComponent) {
        _inherits(MDCNotchedOutline, _MDCComponent);

        _createClass(MDCNotchedOutline, null, [{
          key: 'attachTo',

          /**
           * @param {!Element} root
           * @return {!MDCNotchedOutline}
           */
          value: function attachTo(root) {
            return new MDCNotchedOutline(root);
          }
          /** @param {...?} args */

        }]);

        function MDCNotchedOutline() {
          var _ref;

          _classCallCheck(this, MDCNotchedOutline);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /** @private {Element} */
          var _this = _possibleConstructorReturn(this, (_ref = MDCNotchedOutline.__proto__ || Object.getPrototypeOf(MDCNotchedOutline)).call.apply(_ref, [this].concat(args)));

          _this.notchElement_;
          return _this;
        }

        _createClass(MDCNotchedOutline, [{
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            var label = this.root_.querySelector('.' + __WEBPACK_IMPORTED_MODULE_3__material_floating_label_index__["MDCFloatingLabelFoundation"].cssClasses.ROOT);
            this.notchElement_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_4__constants__["c" /* strings */].NOTCH_ELEMENT_SELECTOR);

            if (label) {
              label.style.transitionDuration = '0s';
              this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].OUTLINE_UPGRADED);
              requestAnimationFrame(function () {
                label.style.transitionDuration = '';
              });
            } else {
              this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].NO_LABEL);
            }
          }

          /**
            * Updates classes and styles to open the notch to the specified width.
            * @param {number} notchWidth The notch width in the outline.
            */

        }, {
          key: 'notch',
          value: function notch(notchWidth) {
            this.foundation_.notch(notchWidth);
          }

          /**
           * Updates classes and styles to close the notch.
           */

        }, {
          key: 'closeNotch',
          value: function closeNotch() {
            this.foundation_.closeNotch();
          }

          /**
           * @return {!MDCNotchedOutlineFoundation}
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this2 = this;

            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */](
            /** @type {!MDCNotchedOutlineAdapter} */_extends({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              setNotchWidthProperty: function setNotchWidthProperty(width) {
                return _this2.notchElement_.style.setProperty('width', width > 0 ? width + 'px' : '0');
              }
            }));
          }
        }]);

        return MDCNotchedOutline;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /***/
    },
    /* 37 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(23);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(24);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
       * @final
       */

      var MDCNotchedOutlineFoundation = function (_MDCFoundation) {
        _inherits(MDCNotchedOutlineFoundation, _MDCFoundation);

        _createClass(MDCNotchedOutlineFoundation, null, [{
          key: 'strings',

          /** @return enum {string} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["c" /* strings */];
          }

          /** @return enum {string} */

        }, {
          key: 'cssClasses',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }

          /** @return enum {number} */

        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */];
          }

          /**
           * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCNotchedOutlineAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCNotchedOutlineAdapter} */{
                addClass: function addClass() {},
                removeClass: function removeClass() {},
                setNotchWidthProperty: function setNotchWidthProperty() {}
              }
            );
          }

          /**
           * @param {!MDCNotchedOutlineAdapter} adapter
           */

        }]);

        function MDCNotchedOutlineFoundation(adapter) {
          _classCallCheck(this, MDCNotchedOutlineFoundation);

          return _possibleConstructorReturn(this, (MDCNotchedOutlineFoundation.__proto__ || Object.getPrototypeOf(MDCNotchedOutlineFoundation)).call(this, _extends(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
        }

        /**
         * Adds the outline notched selector and updates the notch width
         * calculated based off of notchWidth.
         * @param {number} notchWidth
         */

        _createClass(MDCNotchedOutlineFoundation, [{
          key: 'notch',
          value: function notch(notchWidth) {
            var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

            if (notchWidth > 0) {
              notchWidth += __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* numbers */].NOTCH_ELEMENT_PADDING; // Add padding from left/right.
            }

            this.adapter_.setNotchWidthProperty(notchWidth);
            this.adapter_.addClass(OUTLINE_NOTCHED);
          }

          /**
           * Removes notched outline selector to close the notch in the outline.
           */

        }, {
          key: 'closeNotch',
          value: function closeNotch() {
            var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

            this.adapter_.removeClass(OUTLINE_NOTCHED);
            this.adapter_.setNotchWidthProperty(0);
          }
        }]);

        return MDCNotchedOutlineFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCNotchedOutlineFoundation;

      /***/
    },,,,,,,,,,,
    /* 38 */
    /* 39 */
    /* 40 */
    /* 41 */
    /* 42 */
    /* 43 */
    /* 44 */
    /* 45 */
    /* 46 */
    /* 47 */
    /* 48 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCMenu", function () {
        return MDCMenu;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__foundation__ = __webpack_require__(49);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(30);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_index__ = __webpack_require__(34);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__material_menu_surface_foundation__ = __webpack_require__(18);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__material_list_index__ = __webpack_require__(26);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCMenuFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_1__foundation__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "AnchorMargin", function () {
        return __WEBPACK_IMPORTED_MODULE_4__material_menu_surface_foundation__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "Corner", function () {
        return __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_index__["Corner"];
      });
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;if (getter === undefined) {
            return undefined;
          }return getter.call(receiver);
        }
      };

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends MDCComponent<!MDCMenuFoundation>
       */

      var MDCMenu = function (_MDCComponent) {
        _inherits(MDCMenu, _MDCComponent);

        /** @param {...?} args */
        function MDCMenu() {
          var _ref;

          _classCallCheck(this, MDCMenu);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /** @private {!MDCMenuSurface} */
          var _this = _possibleConstructorReturn(this, (_ref = MDCMenu.__proto__ || Object.getPrototypeOf(MDCMenu)).call.apply(_ref, [this].concat(args)));

          _this.menuSurface_;
          /** @private {!MDCList} */
          _this.list_;
          /** @private {!Function} */
          _this.handleKeydown_;
          /** @private {!Function} */
          _this.handleClick_;
          /** @private {!Function} */
          _this.afterOpenedCallback_;
          return _this;
        }

        /**
         * @param {!HTMLElement} root
         * @return {!MDCMenu}
         */

        _createClass(MDCMenu, [{
          key: 'initialize',
          value: function initialize() {
            var menuSurfaceFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
              return new __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_index__["MDCMenuSurface"](el);
            };
            var listFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
              return new __WEBPACK_IMPORTED_MODULE_5__material_list_index__["MDCList"](el);
            };

            this.menuSurface_ = menuSurfaceFactory(this.root_);

            var list = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].LIST_SELECTOR);
            if (list) {
              this.list_ = listFactory(list);
              this.list_.wrapFocus = true;
            }
          }
        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            var _this2 = this;

            this.afterOpenedCallback_ = function () {
              return _this2.handleAfterOpened_();
            };
            this.handleKeydown_ = function (evt) {
              return _this2.foundation_.handleKeydown(evt);
            };
            this.handleClick_ = function (evt) {
              return _this2.foundation_.handleClick(evt);
            };

            this.menuSurface_.listen(__WEBPACK_IMPORTED_MODULE_4__material_menu_surface_foundation__["b" /* MDCMenuSurfaceFoundation */].strings.OPENED_EVENT, this.afterOpenedCallback_);
            this.listen('keydown', this.handleKeydown_);
            this.listen('click', this.handleClick_);
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            if (this.list_) {
              this.list_.destroy();
            }

            this.menuSurface_.destroy();
            this.menuSurface_.unlisten(__WEBPACK_IMPORTED_MODULE_4__material_menu_surface_foundation__["b" /* MDCMenuSurfaceFoundation */].strings.OPENED_EVENT, this.afterOpenedCallback_);
            this.unlisten('keydown', this.handleKeydown_);
            this.unlisten('click', this.handleClick_);
            _get(MDCMenu.prototype.__proto__ || Object.getPrototypeOf(MDCMenu.prototype), 'destroy', this).call(this);
          }

          /** @return {boolean} */

        }, {
          key: 'setAnchorCorner',

          /**
           * @param {!Corner} corner Default anchor corner alignment of top-left
           *     menu corner.
           */
          value: function setAnchorCorner(corner) {
            this.menuSurface_.setAnchorCorner(corner);
          }

          /**
           * @param {!AnchorMargin} margin
           */

        }, {
          key: 'setAnchorMargin',
          value: function setAnchorMargin(margin) {
            this.menuSurface_.setAnchorMargin(margin);
          }

          /**
           * Return the items within the menu. Note that this only contains the set of elements within
           * the items container that are proper list items, and not supplemental / presentational DOM
           * elements.
           * @return {!Array<!HTMLElement>}
           */

        }, {
          key: 'getOptionByIndex',

          /**
           * Return the item within the menu at the index specified.
           * @param {number} index
           * @return {?HTMLElement}
           */
          value: function getOptionByIndex(index) {
            var items = this.items;

            if (index < items.length) {
              return this.items[index];
            } else {
              return null;
            }
          }

          /** @param {boolean} quickOpen */

        }, {
          key: 'setFixedPosition',

          /** @param {boolean} isFixed */
          value: function setFixedPosition(isFixed) {
            this.menuSurface_.setFixedPosition(isFixed);
          }
        }, {
          key: 'hoistMenuToBody',
          value: function hoistMenuToBody() {
            this.menuSurface_.hoistMenuToBody();
          }

          /** @param {boolean} isHoisted */

        }, {
          key: 'setIsHoisted',
          value: function setIsHoisted(isHoisted) {
            this.menuSurface_.setIsHoisted(isHoisted);
          }

          /**
           * @param {number} x
           * @param {number} y
           */

        }, {
          key: 'setAbsolutePosition',
          value: function setAbsolutePosition(x, y) {
            this.menuSurface_.setAbsolutePosition(x, y);
          }

          /**
           * Sets the element that the menu-surface is anchored to.
           * @param {!HTMLElement} element
           */

        }, {
          key: 'setAnchorElement',
          value: function setAnchorElement(element) {
            this.menuSurface_.anchorElement = element;
          }
        }, {
          key: 'handleAfterOpened_',
          value: function handleAfterOpened_() {
            var list = this.items;
            if (list.length > 0) {
              list[0].focus();
            }
          }

          /** @return {!MDCMenuFoundation} */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            var _this3 = this;

            return new __WEBPACK_IMPORTED_MODULE_1__foundation__["a" /* MDCMenuFoundation */]({
              addClassToElementAtIndex: function addClassToElementAtIndex(index, className) {
                var list = _this3.items;
                list[index].classList.add(className);
              },
              removeClassFromElementAtIndex: function removeClassFromElementAtIndex(index, className) {
                var list = _this3.items;
                list[index].classList.remove(className);
              },
              addAttributeToElementAtIndex: function addAttributeToElementAtIndex(index, attr, value) {
                var list = _this3.items;
                list[index].setAttribute(attr, value);
              },
              removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex(index, attr) {
                var list = _this3.items;
                list[index].removeAttribute(attr);
              },
              elementContainsClass: function elementContainsClass(element, className) {
                return element.classList.contains(className);
              },
              closeSurface: function closeSurface() {
                return _this3.open = false;
              },
              getElementIndex: function getElementIndex(element) {
                return _this3.items.indexOf(element);
              },
              getParentElement: function getParentElement(element) {
                return element.parentElement;
              },
              getSelectedElementIndex: function getSelectedElementIndex(selectionGroup) {
                return _this3.items.indexOf(selectionGroup.querySelector('.' + __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTED_LIST_ITEM));
              },
              notifySelected: function notifySelected(evtData) {
                return _this3.emit(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].SELECTED_EVENT, {
                  index: evtData.index,
                  item: _this3.items[evtData.index]
                });
              }
            });
          }
        }, {
          key: 'open',
          get: function get() {
            return this.menuSurface_.open;
          }

          /** @param {boolean} value */

          , set: function set(value) {
            this.menuSurface_.open = value;
          }

          /** @return {boolean} */

        }, {
          key: 'wrapFocus',
          get: function get() {
            return this.list_.wrapFocus;
          }

          /** @param {boolean} value */

          , set: function set(value) {
            this.list_.wrapFocus = value;
          }
        }, {
          key: 'items',
          get: function get() {
            return this.list_.listElements;
          }
        }, {
          key: 'quickOpen',
          set: function set(quickOpen) {
            this.menuSurface_.quickOpen = quickOpen;
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCMenu(root);
          }
        }]);

        return MDCMenu;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /***/
    },
    /* 49 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return MDCMenuFoundation;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(50);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(30);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_foundation__ = __webpack_require__(18);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__material_list_foundation__ = __webpack_require__(16);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var ELEMENTS_KEY_ALLOWED_IN = ['input', 'button', 'textarea', 'select', 'a'];

      /**
       * @extends {MDCFoundation<!MDCMenuAdapter>}
       */

      var MDCMenuFoundation = function (_MDCFoundation) {
        _inherits(MDCMenuFoundation, _MDCFoundation);

        _createClass(MDCMenuFoundation, null, [{
          key: 'cssClasses',

          /** @return enum{cssClasses} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }

          /** @return enum{strings} */

        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
          }

          /**
           * {@see MDCMenuAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCMenuAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCMenuAdapter} */{
                addClassToElementAtIndex: function addClassToElementAtIndex() {},
                removeClassFromElementAtIndex: function removeClassFromElementAtIndex() {},
                addAttributeToElementAtIndex: function addAttributeToElementAtIndex() {},
                removeAttributeFromElementAtIndex: function removeAttributeFromElementAtIndex() {},
                elementContainsClass: function elementContainsClass() {},
                closeSurface: function closeSurface() {},
                getElementIndex: function getElementIndex() {},
                getParentElement: function getParentElement() {},
                getSelectedElementIndex: function getSelectedElementIndex() {},
                notifySelected: function notifySelected() {}
              }
            );
          }

          /** @param {!MDCMenuAdapter} adapter */

        }]);

        function MDCMenuFoundation(adapter) {
          _classCallCheck(this, MDCMenuFoundation);

          /** @type {number} */
          var _this = _possibleConstructorReturn(this, (MDCMenuFoundation.__proto__ || Object.getPrototypeOf(MDCMenuFoundation)).call(this, _extends(MDCMenuFoundation.defaultAdapter, adapter)));

          _this.closeAnimationEndTimerId_ = 0;
          return _this;
        }

        _createClass(MDCMenuFoundation, [{
          key: 'destroy',
          value: function destroy() {
            if (this.closeAnimationEndTimerId_) {
              clearTimeout(this.closeAnimationEndTimerId_);
            }

            this.adapter_.closeSurface();
          }

          /**
           * Handler function for the keydown events.
           * @param {!Event} evt
           */

        }, {
          key: 'handleKeydown',
          value: function handleKeydown(evt) {
            var key = evt.key,
                keyCode = evt.keyCode;

            var isSpace = key === 'Space' || keyCode === 32;
            var isEnter = key === 'Enter' || keyCode === 13;
            var isTab = key === 'Tab' || keyCode === 9;

            if (isSpace || isEnter) {
              this.handleAction_(evt);
            } else if (isTab) {
              this.adapter_.closeSurface();
            }
          }

          /**
           * Handler function for the click events.
           * @param {!Event} evt
           */

        }, {
          key: 'handleClick',
          value: function handleClick(evt) {
            this.handleAction_(evt);
          }

          /**
           * Combined action handling for click/keypress events.
           * @param {!Event} evt
           * @private
           */

        }, {
          key: 'handleAction_',
          value: function handleAction_(evt) {
            var listItem = this.getListItem_( /** @type {HTMLElement} */evt.target);
            if (listItem) {
              this.handleSelection(listItem);
              this.preventDefaultEvent_(evt);
            }
          }

          /**
           * Handler for a selected list item.
           * @param {?HTMLElement} listItem
           */

        }, {
          key: 'handleSelection',
          value: function handleSelection(listItem) {
            var _this2 = this;

            var index = this.adapter_.getElementIndex(listItem);
            if (index < 0) {
              return;
            }

            this.adapter_.notifySelected({ index: index });
            this.adapter_.closeSurface();

            // Wait for the menu to close before adding/removing classes that affect styles.
            this.closeAnimationEndTimerId_ = setTimeout(function () {
              var selectionGroup = _this2.getSelectionGroup_(listItem);

              if (selectionGroup !== null) {
                _this2.handleSelectionGroup_( /** @type {!HTMLElement} */selectionGroup, index);
              }
            }, __WEBPACK_IMPORTED_MODULE_3__material_menu_surface_foundation__["b" /* MDCMenuSurfaceFoundation */].numbers.TRANSITION_CLOSE_DURATION);
          }

          /**
           * Handles toggling the selected classes in a selection group when a
           * selection is made.
           * @param {!HTMLElement} selectionGroup
           * @param {number} index The selected index value
           * @private
           */

        }, {
          key: 'handleSelectionGroup_',
          value: function handleSelectionGroup_(selectionGroup, index) {
            // De-select the previous selection in this group.
            var selectedIndex = this.adapter_.getSelectedElementIndex(selectionGroup);
            if (selectedIndex >= 0) {
              this.adapter_.removeAttributeFromElementAtIndex(selectedIndex, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED_ATTR);
              this.adapter_.removeClassFromElementAtIndex(selectedIndex, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTED_LIST_ITEM);
            }
            // Select the new list item in this group.
            this.adapter_.addClassToElementAtIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTED_LIST_ITEM);
            this.adapter_.addAttributeToElementAtIndex(index, __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_SELECTED_ATTR, 'true');
          }

          /**
           * Returns the parent selection group of an element if one exists.
           * @param listItem
           * @return {?HTMLElement} parent selection group element or null.
           * @private
           */

        }, {
          key: 'getSelectionGroup_',
          value: function getSelectionGroup_(listItem) {
            var parent = this.adapter_.getParentElement(listItem);
            var isGroup = this.adapter_.elementContainsClass(parent, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTION_GROUP);

            // Iterate through ancestors until we find the group or get to the list.
            while (!isGroup && !this.adapter_.elementContainsClass(parent, __WEBPACK_IMPORTED_MODULE_4__material_list_foundation__["a" /* default */].cssClasses.ROOT)) {
              parent = this.adapter_.getParentElement(parent);
              isGroup = this.adapter_.elementContainsClass(parent, __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].MENU_SELECTION_GROUP);
            }

            if (isGroup) {
              return parent;
            } else {
              return null;
            }
          }

          /**
           * Find the first ancestor with the mdc-list-item class.
           * @param {?HTMLElement} target
           * @return {?HTMLElement}
           * @private
           */

        }, {
          key: 'getListItem_',
          value: function getListItem_(target) {
            var isListItem = this.adapter_.elementContainsClass(target, __WEBPACK_IMPORTED_MODULE_4__material_list_foundation__["a" /* default */].cssClasses.LIST_ITEM_CLASS);

            while (!isListItem) {
              target = this.adapter_.getParentElement(target);
              if (target) {
                isListItem = this.adapter_.elementContainsClass(target, __WEBPACK_IMPORTED_MODULE_4__material_list_foundation__["a" /* default */].cssClasses.LIST_ITEM_CLASS);
              } else {
                // target has no parent element.
                return null;
              }
            }

            return target;
          }

          /**
           * Ensures that preventDefault is only called if the containing element doesn't
           * consume the event, and it will cause an unintended scroll.
           * @param {!Event} evt
           * @private
           */

        }, {
          key: 'preventDefaultEvent_',
          value: function preventDefaultEvent_(evt) {
            var target = /** @type {!HTMLElement} */evt.target;
            var tagName = ('' + target.tagName).toLowerCase();
            if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
              evt.preventDefault();
            }
          }
        }]);

        return MDCMenuFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /***/
    },
    /* 50 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* unused harmony export MDCMenuAdapter */

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC Menu. Provides an interface for managing
       * - selected element classes
       * - get focused elements
       * - toggling a checkbox inside a list item
       *
       * Additionally, provides type information for the adapter to the Closure
       * compiler.
       *
       * Implement this adapter for your framework of choice to delegate updates to
       * the component in your framework of choice. See architecture documentation
       * for more details.
       * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
       *
       * @record
       */
      var MDCMenuAdapter = function () {
        function MDCMenuAdapter() {
          _classCallCheck(this, MDCMenuAdapter);
        }

        _createClass(MDCMenuAdapter, [{
          key: "addClassToElementAtIndex",

          /**
           * Adds a class to the element at the index provided.
           * @param {number} index
           * @param {string} className
           */
          value: function addClassToElementAtIndex(index, className) {}

          /**
           * Removes a class from the element at the index provided
           * @param {number} index
           * @param {string} className
           */

        }, {
          key: "removeClassFromElementAtIndex",
          value: function removeClassFromElementAtIndex(index, className) {}

          /**
           * Adds an attribute, with value, to the element at the index provided.
           * @param {number} index
           * @param {string} attr
           * @param {string} value
           */

        }, {
          key: "addAttributeToElementAtIndex",
          value: function addAttributeToElementAtIndex(index, attr, value) {}

          /**
           * Removes an attribute from an element at the index provided.
           * @param {number} index
           * @param {string} attr
           */

        }, {
          key: "removeAttributeFromElementAtIndex",
          value: function removeAttributeFromElementAtIndex(index, attr) {}

          /**
           * Returns true if the element contains the className.
           * @param {?HTMLElement} element
           * @param {string} className
           * @return {boolean} true if the element contains the className
           */

        }, {
          key: "elementContainsClass",
          value: function elementContainsClass(element, className) {}

          /**
           * Closes the menu-surface.
           */

        }, {
          key: "closeSurface",
          value: function closeSurface() {}

          /**
           * Returns the index for the element provided.
           * @param {?HTMLElement} element
           * @return {number} index of the element in the list or -1 if it is not in the list.
           */

        }, {
          key: "getElementIndex",
          value: function getElementIndex(element) {}

          /**
           * Returns the parentElement of the provided element.
           * @param {?HTMLElement} element
           * @return {?HTMLElement} parentElement of the element provided.
           */

        }, {
          key: "getParentElement",
          value: function getParentElement(element) {}

          /**
           * Returns the element within the selectionGroup containing the selected element class.
           * @param {!HTMLElement} selectionGroup
           * @return {number} element within the selectionGroup that contains the selected element class.
           */

        }, {
          key: "getSelectedElementIndex",
          value: function getSelectedElementIndex(selectionGroup) {}

          /**
           * Emits an event using the evtData.
           * @param {{
          *    index: number
          *   }} evtData
           */

        }, {
          key: "notifySelected",
          value: function notifySelected(evtData) {}
        }]);

        return MDCMenuAdapter;
      }();

      /***/
    },
    /* 51 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return MDCSelectIcon;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(73);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(131);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCComponent<!MDCSelectIconFoundation>}
       * @final
       */

      var MDCSelectIcon = function (_MDCComponent) {
        _inherits(MDCSelectIcon, _MDCComponent);

        function MDCSelectIcon() {
          _classCallCheck(this, MDCSelectIcon);

          return _possibleConstructorReturn(this, (MDCSelectIcon.__proto__ || Object.getPrototypeOf(MDCSelectIcon)).apply(this, arguments));
        }

        _createClass(MDCSelectIcon, [{
          key: 'getDefaultFoundation',

          /**
           * @return {!MDCSelectIconFoundation}
           */
          value: function getDefaultFoundation() {
            var _this2 = this;

            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCSelectIconAdapter} */_extends({
              getAttr: function getAttr(attr) {
                return _this2.root_.getAttribute(attr);
              },
              setAttr: function setAttr(attr, value) {
                return _this2.root_.setAttribute(attr, value);
              },
              removeAttr: function removeAttr(attr) {
                return _this2.root_.removeAttribute(attr);
              },
              setContent: function setContent(content) {
                _this2.root_.textContent = content;
              },
              registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
                return _this2.root_.addEventListener(evtType, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
                return _this2.root_.removeEventListener(evtType, handler);
              },
              notifyIconAction: function notifyIconAction() {
                return _this2.emit(__WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */].strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
              }
            }));
          }
        }, {
          key: 'foundation',

          /**
           * @return {!MDCSelectIconFoundation}
           */
          get: function get() {
            return this.foundation_;
          }
        }], [{
          key: 'attachTo',

          /**
           * @param {!Element} root
           * @return {!MDCSelectIcon}
           */
          value: function attachTo(root) {
            return new MDCSelectIcon(root);
          }
        }]);

        return MDCSelectIcon;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /***/
    },
    /* 52 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return MDCSelectHelperText;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_component__ = __webpack_require__(1);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(74);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__foundation__ = __webpack_require__(133);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return __WEBPACK_IMPORTED_MODULE_2__foundation__["a"];
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCComponent<!MDCSelectHelperTextFoundation>}
       * @final
       */

      var MDCSelectHelperText = function (_MDCComponent) {
        _inherits(MDCSelectHelperText, _MDCComponent);

        function MDCSelectHelperText() {
          _classCallCheck(this, MDCSelectHelperText);

          return _possibleConstructorReturn(this, (MDCSelectHelperText.__proto__ || Object.getPrototypeOf(MDCSelectHelperText)).apply(this, arguments));
        }

        _createClass(MDCSelectHelperText, [{
          key: 'getDefaultFoundation',

          /**
           * @return {!MDCSelectHelperTextFoundation}
           */
          value: function getDefaultFoundation() {
            var _this2 = this;

            return new __WEBPACK_IMPORTED_MODULE_2__foundation__["a" /* default */]( /** @type {!MDCSelectHelperTextAdapter} */_extends({
              addClass: function addClass(className) {
                return _this2.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this2.root_.classList.contains(className);
              },
              setAttr: function setAttr(attr, value) {
                return _this2.root_.setAttribute(attr, value);
              },
              removeAttr: function removeAttr(attr) {
                return _this2.root_.removeAttribute(attr);
              },
              setContent: function setContent(content) {
                _this2.root_.textContent = content;
              }
            }));
          }
        }, {
          key: 'foundation',

          /**
           * @return {!MDCSelectHelperTextFoundation}
           */
          get: function get() {
            return this.foundation_;
          }
        }], [{
          key: 'attachTo',

          /**
           * @param {!Element} root
           * @return {!MDCSelectHelperText}
           */
          value: function attachTo(root) {
            return new MDCSelectHelperText(root);
          }
        }]);

        return MDCSelectHelperText;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_component__["a" /* default */]);

      /***/
    },,,,,,,,,,,,,,,,,,,,
    /* 53 */
    /* 54 */
    /* 55 */
    /* 56 */
    /* 57 */
    /* 58 */
    /* 59 */
    /* 60 */
    /* 61 */
    /* 62 */
    /* 63 */
    /* 64 */
    /* 65 */
    /* 66 */
    /* 67 */
    /* 68 */
    /* 69 */
    /* 70 */
    /* 71 */
    /* 72 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* unused harmony export MDCSelectAdapter */
      /* unused harmony export FoundationMapType */
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__icon_index__ = __webpack_require__(51);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__helper_text_index__ = __webpack_require__(52);
      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */
      /* eslint-disable no-unused-vars */

      /* eslint-enable no-unused-vars */

      /**
       * @typedef {{
       *   leadingIcon: (!MDCSelectIconFoundation|undefined),
       *   helperText: (!MDCSelectHelperTextFoundation|undefined),
       * }}
       */
      var FoundationMapType = void 0;

      /**
       * Adapter for MDC Select. Provides an interface for managing
       * - classes
       * - dom
       * - event handlers
       *
       * Additionally, provides type information for the adapter to the Closure
       * compiler.
       *
       * Implement this adapter for your framework of choice to delegate updates to
       * the component in your framework of choice. See architecture documentation
       * for more details.
       * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
       *
       * @record
       */

      var MDCSelectAdapter = function () {
        function MDCSelectAdapter() {
          _classCallCheck(this, MDCSelectAdapter);
        }

        _createClass(MDCSelectAdapter, [{
          key: 'addClass',

          /**
           * Adds class to root element.
           * @param {string} className
           */
          value: function addClass(className) {}

          /**
           * Removes a class from the root element.
           * @param {string} className
           */

        }, {
          key: 'removeClass',
          value: function removeClass(className) {}

          /**
           * Returns true if the root element contains the given class name.
           * @param {string} className
           * @return {boolean}
           */

        }, {
          key: 'hasClass',
          value: function hasClass(className) {}

          /**
           * Activates the bottom line, showing a focused state.
           */

        }, {
          key: 'activateBottomLine',
          value: function activateBottomLine() {}

          /**
           * Deactivates the bottom line.
           */

        }, {
          key: 'deactivateBottomLine',
          value: function deactivateBottomLine() {}

          /**
           * Sets the value of the select.
           * @param {string} value
           */

        }, {
          key: 'setValue',
          value: function setValue(value) {}

          /**
           * Returns the selected value of the select element.
           * @return {string}
           */

        }, {
          key: 'getValue',
          value: function getValue() {}

          /**
           * Floats label determined based off of the shouldFloat argument.
           * @param {boolean} shouldFloat
           */

        }, {
          key: 'floatLabel',
          value: function floatLabel(shouldFloat) {}

          /**
           * Returns width of label in pixels, if the label exists.
           * @return {number}
           */

        }, {
          key: 'getLabelWidth',
          value: function getLabelWidth() {}

          /**
           * Returns true if outline element exists, false if it doesn't.
           * @return {boolean}
           */

        }, {
          key: 'hasOutline',
          value: function hasOutline() {}

          /**
           * Only implement if outline element exists.
           * @param {number} labelWidth
           */

        }, {
          key: 'notchOutline',
          value: function notchOutline(labelWidth) {}

          /**
           * Closes notch in outline element, if the outline exists.
           */

        }, {
          key: 'closeOutline',
          value: function closeOutline() {}

          /**
           * Opens the menu.
           */

        }, {
          key: 'openMenu',
          value: function openMenu() {}

          /**
           * Closes the menu.
           */

        }, {
          key: 'closeMenu',
          value: function closeMenu() {}

          /**
           * Returns true if the menu is currently open.
           * @return {boolean}
           */

        }, {
          key: 'isMenuOpen',
          value: function isMenuOpen() {}

          /**
           * Sets the selected index of the select to the index provided.
           * @param {number} index
           */

        }, {
          key: 'setSelectedIndex',
          value: function setSelectedIndex(index) {}

          /**
           * Sets the select to disabled.
           * @param {boolean} isDisabled
           */

        }, {
          key: 'setDisabled',
          value: function setDisabled(isDisabled) {}

          /**
           * Sets the line ripple transform origin center.
           * @param {number} normalizedX
           */

        }, {
          key: 'setRippleCenter',
          value: function setRippleCenter(normalizedX) {}

          /**
           * Emits a change event when an element is selected.
           * @param {string} value
           */

        }, {
          key: 'notifyChange',
          value: function notifyChange(value) {}

          /**
           * Checks if the select is currently valid.
           * @return {boolean} isValid
           */

        }, {
          key: 'checkValidity',
          value: function checkValidity() {}

          /**
           * Adds/Removes the invalid class.
           * @param {boolean} isValid
           */

        }, {
          key: 'setValid',
          value: function setValid(isValid) {}
        }]);

        return MDCSelectAdapter;
      }();

      /***/
    },
    /* 73 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC Select Icon.
       *
       * Defines the shape of the adapter expected by the foundation. Implement this
       * adapter to integrate the select icon into your framework. See
       * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
       * for more information.
       *
       * @record
       */
      var MDCSelectIconAdapter = function () {
        function MDCSelectIconAdapter() {
          _classCallCheck(this, MDCSelectIconAdapter);
        }

        _createClass(MDCSelectIconAdapter, [{
          key: "getAttr",

          /**
           * Gets the value of an attribute on the icon element.
           * @param {string} attr
           * @return {string}
           */
          value: function getAttr(attr) {}

          /**
           * Sets an attribute on the icon element.
           * @param {string} attr
           * @param {string} value
           */

        }, {
          key: "setAttr",
          value: function setAttr(attr, value) {}

          /**
           * Removes an attribute from the icon element.
           * @param {string} attr
           */

        }, {
          key: "removeAttr",
          value: function removeAttr(attr) {}

          /**
           * Sets the text content of the icon element.
           * @param {string} content
           */

        }, {
          key: "setContent",
          value: function setContent(content) {}

          /**
           * Registers an event listener on the icon element for a given event.
           * @param {string} evtType
           * @param {function(!Event): undefined} handler
           */

        }, {
          key: "registerInteractionHandler",
          value: function registerInteractionHandler(evtType, handler) {}

          /**
           * Deregisters an event listener on the icon element for a given event.
           * @param {string} evtType
           * @param {function(!Event): undefined} handler
           */

        }, {
          key: "deregisterInteractionHandler",
          value: function deregisterInteractionHandler(evtType, handler) {}

          /**
           * Emits a custom event "MDCSelect:icon" denoting a user has clicked the icon.
           */

        }, {
          key: "notifyIconAction",
          value: function notifyIconAction() {}
        }]);

        return MDCSelectIconAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCSelectIconAdapter;

      /***/
    },
    /* 74 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint no-unused-vars: [2, {"args": "none"}] */

      /**
       * Adapter for MDC Select Helper Text.
       *
       * Defines the shape of the adapter expected by the foundation. Implement this
       * adapter to integrate the Select helper text into your framework. See
       * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
       * for more information.
       *
       * @record
       */
      var MDCSelectHelperTextAdapter = function () {
        function MDCSelectHelperTextAdapter() {
          _classCallCheck(this, MDCSelectHelperTextAdapter);
        }

        _createClass(MDCSelectHelperTextAdapter, [{
          key: "addClass",

          /**
           * Adds a class to the helper text element.
           * @param {string} className
           */
          value: function addClass(className) {}

          /**
           * Removes a class from the helper text element.
           * @param {string} className
           */

        }, {
          key: "removeClass",
          value: function removeClass(className) {}

          /**
           * Returns whether or not the helper text element contains the given class.
           * @param {string} className
           * @return {boolean}
           */

        }, {
          key: "hasClass",
          value: function hasClass(className) {}

          /**
           * Sets an attribute with a given value on the helper text element.
           * @param {string} attr
           * @param {string} value
           */

        }, {
          key: "setAttr",
          value: function setAttr(attr, value) {}

          /**
           * Removes an attribute from the helper text element.
           * @param {string} attr
           */

        }, {
          key: "removeAttr",
          value: function removeAttr(attr) {}

          /**
           * Sets the text content for the helper text element.
           * @param {string} content
           */

        }, {
          key: "setContent",
          value: function setContent(content) {}
        }]);

        return MDCSelectHelperTextAdapter;
      }();

      /* unused harmony default export */var _unused_webpack_default_export = MDCSelectHelperTextAdapter;

      /***/
    },
    /* 75 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return strings;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return numbers;
      });
      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var cssClasses = {
        DISABLED: 'mdc-select--disabled',
        ROOT: 'mdc-select',
        OUTLINED: 'mdc-select--outlined',
        FOCUSED: 'mdc-select--focused',
        SELECTED_ITEM_CLASS: 'mdc-list-item--selected',
        WITH_LEADING_ICON: 'mdc-select--with-leading-icon',
        INVALID: 'mdc-select--invalid',
        REQUIRED: 'mdc-select--required'
      };

      /** @enum {string} */
      var strings = {
        ARIA_CONTROLS: 'aria-controls',
        CHANGE_EVENT: 'MDCSelect:change',
        SELECTED_ITEM_SELECTOR: '.' + cssClasses.SELECTED_ITEM_CLASS,
        LEADING_ICON_SELECTOR: '.mdc-select__icon',
        SELECTED_TEXT_SELECTOR: '.mdc-select__selected-text',
        HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
        MENU_SELECTOR: '.mdc-select__menu',
        LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
        LABEL_SELECTOR: '.mdc-floating-label',
        NATIVE_CONTROL_SELECTOR: '.mdc-select__native-control',
        OUTLINE_SELECTOR: '.mdc-notched-outline',
        ENHANCED_VALUE_ATTR: 'data-value',
        ARIA_SELECTED_ATTR: 'aria-selected'
      };

      /** @enum {number} */
      var numbers = {
        LABEL_SCALE: 0.75
      };

      /***/
    },,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
    /* 76 */
    /* 77 */
    /* 78 */
    /* 79 */
    /* 80 */
    /* 81 */
    /* 82 */
    /* 83 */
    /* 84 */
    /* 85 */
    /* 86 */
    /* 87 */
    /* 88 */
    /* 89 */
    /* 90 */
    /* 91 */
    /* 92 */
    /* 93 */
    /* 94 */
    /* 95 */
    /* 96 */
    /* 97 */
    /* 98 */
    /* 99 */
    /* 100 */
    /* 101 */
    /* 102 */
    /* 103 */
    /* 104 */
    /* 105 */
    /* 106 */
    /* 107 */
    /* 108 */
    /* 109 */
    /* 110 */
    /* 111 */
    /* 112 */
    /* 113 */
    /* 114 */
    /* 115 */
    /* 116 */
    /* 117 */
    /* 118 */
    /* 119 */
    /* 120 */
    /* 121 */
    /* 122 */
    /* 123 */
    /* 124 */
    /* 125 */
    /* 126 */
    /* 127 */
    /* 128 */
    /* 129 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelect", function () {
        return MDCSelect;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(7);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__material_floating_label_index__ = __webpack_require__(17);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__material_line_ripple_index__ = __webpack_require__(31);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__material_menu_index__ = __webpack_require__(48);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__ = __webpack_require__(4);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__material_notched_outline_index__ = __webpack_require__(36);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__foundation__ = __webpack_require__(130);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(75);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__adapter__ = __webpack_require__(72);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__icon_index__ = __webpack_require__(51);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__helper_text_index__ = __webpack_require__(52);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__material_menu_surface_constants__ = __webpack_require__(19);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__material_menu_constants__ = __webpack_require__(30);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_6__foundation__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectHelperText", function () {
        return __WEBPACK_IMPORTED_MODULE_10__helper_text_index__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectHelperTextFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_10__helper_text_index__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectIcon", function () {
        return __WEBPACK_IMPORTED_MODULE_9__icon_index__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "MDCSelectIconFoundation", function () {
        return __WEBPACK_IMPORTED_MODULE_9__icon_index__["b"];
      });
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      var _get = function get(object, property, receiver) {
        if (object === null) object = Function.prototype;var desc = Object.getOwnPropertyDescriptor(object, property);if (desc === undefined) {
          var parent = Object.getPrototypeOf(object);if (parent === null) {
            return undefined;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;if (getter === undefined) {
            return undefined;
          }return getter.call(receiver);
        }
      };

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint-disable no-unused-vars */

      /* eslint-enable no-unused-vars */

      // Closure has issues with {this as that} syntax.


      var VALIDATION_ATTR_WHITELIST = ['required', 'aria-required'];

      /**
       * @extends MDCComponent<!MDCSelectFoundation>
       */

      var MDCSelect = function (_MDCComponent) {
        _inherits(MDCSelect, _MDCComponent);

        /**
         * @param {...?} args
         */
        function MDCSelect() {
          var _ref;

          _classCallCheck(this, MDCSelect);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          /** @private {?Element} */
          var _this = _possibleConstructorReturn(this, (_ref = MDCSelect.__proto__ || Object.getPrototypeOf(MDCSelect)).call.apply(_ref, [this].concat(args)));

          _this.nativeControl_;
          /** @private {?Element} */
          _this.selectedText_;
          /** @private {?Element} */
          _this.hiddenInput_;
          /** @private {?MDCSelectIcon} */
          _this.leadingIcon_;
          /** @private {?MDCSelectHelperText} */
          _this.helperText_;
          /** @private {?Element} */
          _this.menuElement_;
          /** @type {?MDCMenu} */
          _this.menu_;
          /** @type {?MDCRipple} */
          _this.ripple;
          /** @private {?MDCLineRipple} */
          _this.lineRipple_;
          /** @private {?MDCFloatingLabel} */
          _this.label_;
          /** @private {?MDCNotchedOutline} */
          _this.outline_;
          /** @private {!Function} */
          _this.handleChange_;
          /** @private {!Function} */
          _this.handleFocus_;
          /** @private {!Function} */
          _this.handleBlur_;
          /** @private {!Function} */
          _this.handleClick_;
          /** @private {!Function} */
          _this.handleKeydown_;
          /** @private {!Function} */
          _this.handleMenuOpened_;
          /** @private {!Function} */
          _this.handleMenuClosed_;
          /** @private {!Function} */
          _this.handleMenuSelected_;
          /** @private {boolean} */
          _this.menuOpened_ = false;
          /** @private {!MutationObserver} */
          _this.validationObserver_;
          return _this;
        }

        /**
         * @param {!Element} root
         * @return {!MDCSelect}
         */

        _createClass(MDCSelect, [{
          key: 'layout',

          /**
           * Recomputes the outline SVG path for the outline element.
           */
          value: function layout() {
            this.foundation_.layout();
          }

          /**
           * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which creates a new MDCLineRipple.
           * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which creates a new MDCFloatingLabel.
           * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which creates a new MDCNotchedOutline.
           * @param {(function(!Element): !MDCMenu)=} menuFactory A function which creates a new MDCMenu.
           * @param {(function(!Element): !MDCSelectIcon)=} iconFactory A function which creates a new MDCSelectIcon.
           * @param {(function(!Element): !MDCSelectHelperText)=} helperTextFactory A function which creates a new
           * MDCSelectHelperText.
           */

        }, {
          key: 'initialize',
          value: function initialize() {
            var labelFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el) {
              return new __WEBPACK_IMPORTED_MODULE_1__material_floating_label_index__["MDCFloatingLabel"](el);
            };
            var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
              return new __WEBPACK_IMPORTED_MODULE_2__material_line_ripple_index__["MDCLineRipple"](el);
            };
            var outlineFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
              return new __WEBPACK_IMPORTED_MODULE_5__material_notched_outline_index__["MDCNotchedOutline"](el);
            };
            var menuFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
              return new __WEBPACK_IMPORTED_MODULE_3__material_menu_index__["MDCMenu"](el);
            };
            var iconFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
              return new __WEBPACK_IMPORTED_MODULE_9__icon_index__["a" /* MDCSelectIcon */](el);
            };
            var helperTextFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
              return new __WEBPACK_IMPORTED_MODULE_10__helper_text_index__["a" /* MDCSelectHelperText */](el);
            };

            this.nativeControl_ = /** @type {HTMLElement} */this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].NATIVE_CONTROL_SELECTOR);
            this.selectedText_ = /** @type {HTMLElement} */this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].SELECTED_TEXT_SELECTOR);

            if (this.selectedText_) {
              this.enhancedSelectSetup_(menuFactory);
            }

            var labelElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].LABEL_SELECTOR);
            if (labelElement) {
              this.label_ = labelFactory(labelElement);
            }
            var lineRippleElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].LINE_RIPPLE_SELECTOR);
            if (lineRippleElement) {
              this.lineRipple_ = lineRippleFactory(lineRippleElement);
            }
            var outlineElement = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].OUTLINE_SELECTOR);
            if (outlineElement) {
              this.outline_ = outlineFactory(outlineElement);
            }

            var leadingIcon = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].LEADING_ICON_SELECTOR);
            if (leadingIcon) {
              this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].WITH_LEADING_ICON);
              this.leadingIcon_ = iconFactory(leadingIcon);

              if (this.menuElement_) {
                this.menuElement_.classList.add(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].WITH_LEADING_ICON);
              }
            }
            var element = this.nativeControl_ ? this.nativeControl_ : this.selectedText_;
            if (element.hasAttribute(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].ARIA_CONTROLS)) {
              var helperTextElement = document.getElementById(element.getAttribute(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].ARIA_CONTROLS));
              if (helperTextElement) {
                this.helperText_ = helperTextFactory(helperTextElement);
              }
            }

            if (!this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].OUTLINED)) {
              this.ripple = this.initRipple_();
            }

            // The required state needs to be sync'd before the mutation observer is added.
            this.initialSyncRequiredState_();
            this.addMutationObserverForRequired_();
          }

          /**
           * Handles setup for the enhanced menu.
           * @private
           */

        }, {
          key: 'enhancedSelectSetup_',
          value: function enhancedSelectSetup_(menuFactory) {
            var isDisabled = this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].DISABLED);
            this.selectedText_.setAttribute('tabindex', isDisabled ? '-1' : '0');
            this.hiddenInput_ = this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].HIDDEN_INPUT_SELECTOR);
            this.menuElement_ = /** @type {HTMLElement} */this.root_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].MENU_SELECTOR);
            this.menu_ = menuFactory(this.menuElement_);
            this.menu_.hoistMenuToBody();
            this.menu_.setAnchorElement( /** @type {!HTMLElement} */this.root_);
            this.menu_.setAnchorCorner(__WEBPACK_IMPORTED_MODULE_11__material_menu_surface_constants__["a" /* Corner */].BOTTOM_START);
            this.menu_.wrapFocus = false;
          }

          /**
           * @private
           * @return {!MDCRipple}
           */

        }, {
          key: 'initRipple_',
          value: function initRipple_() {
            var element = this.nativeControl_ ? this.nativeControl_ : this.selectedText_;
            var adapter = _extends(__WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRipple"].createAdapter(this), {
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                return element.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return element.removeEventListener(type, handler);
              }
            });
            var foundation = new __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRippleFoundation"](adapter);
            return new __WEBPACK_IMPORTED_MODULE_4__material_ripple_index__["MDCRipple"](this.root_, foundation);
          }

          /**
           * Initializes the select's event listeners and internal state based
           * on the environment's state.
           */

        }, {
          key: 'initialSyncWithDOM',
          value: function initialSyncWithDOM() {
            var _this2 = this;

            this.handleChange_ = function () {
              return _this2.foundation_.handleChange( /* didChange */true);
            };
            this.handleFocus_ = function () {
              return _this2.foundation_.handleFocus();
            };
            this.handleBlur_ = function () {
              return _this2.foundation_.handleBlur();
            };
            this.handleClick_ = function (evt) {
              if (_this2.selectedText_) _this2.selectedText_.focus();
              _this2.foundation_.handleClick(_this2.getNormalizedXCoordinate_(evt));
            };
            this.handleKeydown_ = function (evt) {
              return _this2.foundation_.handleKeydown(evt);
            };
            this.handleMenuSelected_ = function (evtData) {
              return _this2.selectedIndex = evtData.detail.index;
            };
            this.handleMenuOpened_ = function () {
              // Menu should open to the last selected element.
              if (_this2.selectedIndex >= 0) {
                _this2.menu_.items[_this2.selectedIndex].focus();
              }
            };
            this.handleMenuClosed_ = function () {
              // menuOpened_ is used to track the state of the menu opening or closing since the menu.open function
              // will return false if the menu is still closing and this method listens to the closed event which
              // occurs after the menu is already closed.
              _this2.menuOpened_ = false;
              _this2.selectedText_.removeAttribute('aria-expanded');
              if (document.activeElement !== _this2.selectedText_) {
                _this2.foundation_.handleBlur();
              }
            };

            var element = this.nativeControl_ ? this.nativeControl_ : this.selectedText_;

            element.addEventListener('change', this.handleChange_);
            element.addEventListener('focus', this.handleFocus_);
            element.addEventListener('blur', this.handleBlur_);

            ['mousedown', 'touchstart'].forEach(function (evtType) {
              element.addEventListener(evtType, _this2.handleClick_);
            });

            if (this.menuElement_) {
              this.selectedText_.addEventListener('keydown', this.handleKeydown_);
              this.menu_.listen(__WEBPACK_IMPORTED_MODULE_11__material_menu_surface_constants__["e" /* strings */].CLOSED_EVENT, this.handleMenuClosed_);
              this.menu_.listen(__WEBPACK_IMPORTED_MODULE_11__material_menu_surface_constants__["e" /* strings */].OPENED_EVENT, this.handleMenuOpened_);
              this.menu_.listen(__WEBPACK_IMPORTED_MODULE_12__material_menu_constants__["b" /* strings */].SELECTED_EVENT, this.handleMenuSelected_);

              if (this.hiddenInput_ && this.hiddenInput_.value) {
                // If the hidden input already has a value, use it to restore the select's value.
                // This can happen e.g. if the user goes back or (in some browsers) refreshes the page.
                var enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
                enhancedAdapterMethods.setValue(this.hiddenInput_.value);
              } else if (this.menuElement_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].SELECTED_ITEM_SELECTOR)) {
                // If an element is selected, the select should set the initial selected text.
                var _enhancedAdapterMethods = this.getEnhancedSelectAdapterMethods_();
                _enhancedAdapterMethods.setValue(_enhancedAdapterMethods.getValue());
              }
            }

            // Initially sync floating label
            this.foundation_.handleChange( /* didChange */false);

            if (this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].DISABLED) || this.nativeControl_ && this.nativeControl_.disabled) {
              this.disabled = true;
            }
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;

            var element = this.nativeControl_ ? this.nativeControl_ : this.selectedText_;

            element.removeEventListener('change', this.handleChange_);
            element.removeEventListener('focus', this.handleFocus_);
            element.removeEventListener('blur', this.handleBlur_);
            element.removeEventListener('keydown', this.handleKeydown_);
            ['mousedown', 'touchstart'].forEach(function (evtType) {
              element.removeEventListener(evtType, _this3.handleClick_);
            });

            if (this.menu_) {
              this.menu_.unlisten(__WEBPACK_IMPORTED_MODULE_11__material_menu_surface_constants__["e" /* strings */].CLOSED_EVENT, this.handleMenuClosed_);
              this.menu_.unlisten(__WEBPACK_IMPORTED_MODULE_11__material_menu_surface_constants__["e" /* strings */].OPENED_EVENT, this.handleMenuOpened_);
              this.menu_.unlisten(__WEBPACK_IMPORTED_MODULE_12__material_menu_constants__["b" /* strings */].SELECTED_EVENT, this.handleMenuSelected_);
              this.menu_.destroy();
            }

            if (this.ripple) {
              this.ripple.destroy();
            }
            if (this.outline_) {
              this.outline_.destroy();
            }
            if (this.leadingIcon_) {
              this.leadingIcon_.destroy();
            }
            if (this.helperText_) {
              this.helperText_.destroy();
            }
            if (this.validationObserver_) {
              this.validationObserver_.disconnect();
            }

            _get(MDCSelect.prototype.__proto__ || Object.getPrototypeOf(MDCSelect.prototype), 'destroy', this).call(this);
          }

          /**
           * @return {!MDCSelectFoundation}
           */

        }, {
          key: 'getDefaultFoundation',
          value: function getDefaultFoundation() {
            return new __WEBPACK_IMPORTED_MODULE_6__foundation__["a" /* default */](
            /** @type {!MDCSelectAdapter} */_extends(this.nativeControl_ ? this.getNativeSelectAdapterMethods_() : this.getEnhancedSelectAdapterMethods_(), this.getCommonAdapterMethods_(), this.getOutlineAdapterMethods_(), this.getLabelAdapterMethods_()), this.getFoundationMap_());
          }

          /**
           * @return {!{
           *   getValue: function(): string,
           *   setValue: function(string): string,
           *   openMenu: function(): void,
           *   closeMenu: function(): void,
           *   isMenuOpen: function(): boolean,
           *   setSelectedIndex: function(number): void,
           *   setDisabled: function(boolean): void
           * }}
           * @private
           */

        }, {
          key: 'getNativeSelectAdapterMethods_',
          value: function getNativeSelectAdapterMethods_() {
            var _this4 = this;

            return {
              getValue: function getValue() {
                return _this4.nativeControl_.value;
              },
              setValue: function setValue(value) {
                return _this4.nativeControl_.value = value;
              },
              openMenu: function openMenu() {},
              closeMenu: function closeMenu() {},
              isMenuOpen: function isMenuOpen() {
                return false;
              },
              setSelectedIndex: function setSelectedIndex(index) {
                _this4.nativeControl_.selectedIndex = index;
              },
              setDisabled: function setDisabled(isDisabled) {
                return _this4.nativeControl_.disabled = isDisabled;
              },
              setValid: function setValid(isValid) {
                isValid ? _this4.root_.classList.remove(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].INVALID) : _this4.root_.classList.add(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].INVALID);
              },
              checkValidity: function checkValidity() {
                return _this4.nativeControl_.checkValidity();
              }
            };
          }

          /**
           * @return {!{
           *   getValue: function(): string,
           *   setValue: function(string): string,
           *   openMenu: function(): void,
           *   closeMenu: function(): void,
           *   isMenuOpen: function(): boolean,
           *   setSelectedIndex: function(number): void,
           *   setDisabled: function(boolean): void
           * }}
           * @private
           */

        }, {
          key: 'getEnhancedSelectAdapterMethods_',
          value: function getEnhancedSelectAdapterMethods_() {
            var _this5 = this;

            return {
              getValue: function getValue() {
                var listItem = _this5.menuElement_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].SELECTED_ITEM_SELECTOR);
                if (listItem && listItem.hasAttribute(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].ENHANCED_VALUE_ATTR)) {
                  return listItem.getAttribute(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].ENHANCED_VALUE_ATTR);
                }
                return '';
              },
              setValue: function setValue(value) {
                var element =
                /** @type {HTMLElement} */_this5.menuElement_.querySelector('[' + __WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].ENHANCED_VALUE_ATTR + '="' + value + '"]');
                _this5.setEnhancedSelectedIndex_(element ? _this5.menu_.items.indexOf(element) : -1);
              },
              openMenu: function openMenu() {
                if (_this5.menu_ && !_this5.menu_.open) {
                  _this5.menu_.open = true;
                  _this5.menuOpened_ = true;
                  _this5.selectedText_.setAttribute('aria-expanded', 'true');
                }
              },
              closeMenu: function closeMenu() {
                if (_this5.menu_ && _this5.menu_.open) {
                  _this5.menu_.open = false;
                }
              },
              isMenuOpen: function isMenuOpen() {
                return _this5.menu_ && _this5.menuOpened_;
              },
              setSelectedIndex: function setSelectedIndex(index) {
                _this5.setEnhancedSelectedIndex_(index);
              },
              setDisabled: function setDisabled(isDisabled) {
                _this5.selectedText_.setAttribute('tabindex', isDisabled ? '-1' : '0');
                _this5.selectedText_.setAttribute('aria-disabled', isDisabled.toString());
                if (_this5.hiddenInput_) {
                  _this5.hiddenInput_.disabled = isDisabled;
                }
              },
              checkValidity: function checkValidity() {
                var classList = _this5.root_.classList;
                if (classList.contains(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].REQUIRED) && !classList.contains(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].DISABLED)) {
                  // See notes for required attribute under https://www.w3.org/TR/html52/sec-forms.html#the-select-element
                  // TL;DR: Invalid if no index is selected, or if the first index is selected and has an empty value.
                  return _this5.selectedIndex !== -1 && (_this5.selectedIndex !== 0 || _this5.value);
                } else {
                  return true;
                }
              },
              setValid: function setValid(isValid) {
                _this5.selectedText_.setAttribute('aria-invalid', (!isValid).toString());
                isValid ? _this5.root_.classList.remove(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].INVALID) : _this5.root_.classList.add(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].INVALID);
              }
            };
          }

          /**
           * @return {!{
           *   addClass: function(string): void,
           *   removeClass: function(string): void,
           *   hasClass: function(string): void,
           *   setRippleCenter: function(number): void,
           *   activateBottomLine: function(): void,
           *   deactivateBottomLine: function(): void,
           *   notifyChange: function(string): void
           * }}
           * @private
           */

        }, {
          key: 'getCommonAdapterMethods_',
          value: function getCommonAdapterMethods_() {
            var _this6 = this;

            return {
              addClass: function addClass(className) {
                return _this6.root_.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this6.root_.classList.remove(className);
              },
              hasClass: function hasClass(className) {
                return _this6.root_.classList.contains(className);
              },
              setRippleCenter: function setRippleCenter(normalizedX) {
                return _this6.lineRipple_ && _this6.lineRipple_.setRippleCenter(normalizedX);
              },
              activateBottomLine: function activateBottomLine() {
                return _this6.lineRipple_ && _this6.lineRipple_.activate();
              },
              deactivateBottomLine: function deactivateBottomLine() {
                return _this6.lineRipple_ && _this6.lineRipple_.deactivate();
              },
              notifyChange: function notifyChange(value) {
                var index = _this6.selectedIndex;
                _this6.emit(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].CHANGE_EVENT, { value: value, index: index }, true /* shouldBubble  */);
              }
            };
          }

          /**
           * @return {!{
           *   hasOutline: function(): boolean,
           *   notchOutline: function(number, boolean): undefined,
           *   closeOutline: function(): undefined,
           * }}
           */

        }, {
          key: 'getOutlineAdapterMethods_',
          value: function getOutlineAdapterMethods_() {
            var _this7 = this;

            return {
              hasOutline: function hasOutline() {
                return !!_this7.outline_;
              },
              notchOutline: function notchOutline(labelWidth) {
                if (_this7.outline_) {
                  _this7.outline_.notch(labelWidth);
                }
              },
              closeOutline: function closeOutline() {
                if (_this7.outline_) {
                  _this7.outline_.closeNotch();
                }
              }
            };
          }

          /**
           * @return {!{
           *   floatLabel: function(boolean): undefined,
           *   getLabelWidth: function(): number,
           * }}
           */

        }, {
          key: 'getLabelAdapterMethods_',
          value: function getLabelAdapterMethods_() {
            var _this8 = this;

            return {
              floatLabel: function floatLabel(shouldFloat) {
                if (_this8.label_) {
                  _this8.label_.float(shouldFloat);
                }
              },
              getLabelWidth: function getLabelWidth() {
                return _this8.label_ ? _this8.label_.getWidth() : 0;
              }
            };
          }

          /**
           * Calculates where the line ripple should start based on the x coordinate within the component.
           * @param {!(MouseEvent|TouchEvent)} evt
           * @return {number} normalizedX
           */

        }, {
          key: 'getNormalizedXCoordinate_',
          value: function getNormalizedXCoordinate_(evt) {
            var targetClientRect = evt.target.getBoundingClientRect();
            var xCoordinate = evt.clientX;
            return xCoordinate - targetClientRect.left;
          }

          /**
           * Returns a map of all subcomponents to subfoundations.
           * @return {!FoundationMapType}
           */

        }, {
          key: 'getFoundationMap_',
          value: function getFoundationMap_() {
            return {
              leadingIcon: this.leadingIcon_ ? this.leadingIcon_.foundation : undefined,
              helperText: this.helperText_ ? this.helperText_.foundation : undefined
            };
          }

          /**
           * Sets the selected index of the enhanced menu.
           * @param {number} index
           * @private
           */

        }, {
          key: 'setEnhancedSelectedIndex_',
          value: function setEnhancedSelectedIndex_(index) {
            var selectedItem = this.menu_.items[index];
            this.selectedText_.textContent = selectedItem ? selectedItem.textContent.trim() : '';
            var previouslySelected = this.menuElement_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].SELECTED_ITEM_SELECTOR);

            if (previouslySelected) {
              previouslySelected.classList.remove(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].SELECTED_ITEM_CLASS);
              previouslySelected.removeAttribute(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].ARIA_SELECTED_ATTR);
            }

            if (selectedItem) {
              selectedItem.classList.add(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].SELECTED_ITEM_CLASS);
              selectedItem.setAttribute(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].ARIA_SELECTED_ATTR, 'true');
            }

            // Synchronize hidden input's value with data-value attribute of selected item.
            // This code path is also followed when setting value directly, so this covers all cases.
            if (this.hiddenInput_) {
              this.hiddenInput_.value = selectedItem ? selectedItem.getAttribute(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].ENHANCED_VALUE_ATTR) || '' : '';
            }

            this.layout();
          }
        }, {
          key: 'initialSyncRequiredState_',
          value: function initialSyncRequiredState_() {
            var element = this.nativeControl_ ? this.nativeControl_ : this.selectedText_;
            var isRequired = element.required || element.getAttribute('aria-required') === 'true' || this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].REQUIRED);
            if (isRequired) {
              if (this.nativeControl_) {
                this.nativeControl_.required = true;
              } else {
                this.selectedText_.setAttribute('aria-required', 'true');
              }
              this.root_.classList.add(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].REQUIRED);
            }
          }
        }, {
          key: 'addMutationObserverForRequired_',
          value: function addMutationObserverForRequired_() {
            var _this9 = this;

            var observerHandler = function observerHandler(attributesList) {
              attributesList.some(function (attributeName) {
                if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
                  if (_this9.selectedText_) {
                    if (_this9.selectedText_.getAttribute('aria-required') === 'true') {
                      _this9.root_.classList.add(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].REQUIRED);
                    } else {
                      _this9.root_.classList.remove(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].REQUIRED);
                    }
                  } else {
                    if (_this9.nativeControl_.required) {
                      _this9.root_.classList.add(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].REQUIRED);
                    } else {
                      _this9.root_.classList.remove(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].REQUIRED);
                    }
                  }
                  return true;
                }
              });
            };

            var getAttributesList = function getAttributesList(mutationsList) {
              return mutationsList.map(function (mutation) {
                return mutation.attributeName;
              });
            };
            var observer = new MutationObserver(function (mutationsList) {
              return observerHandler(getAttributesList(mutationsList));
            });
            var element = this.nativeControl_ ? this.nativeControl_ : this.selectedText_;
            observer.observe(element, { attributes: true });
            this.validationObserver_ = observer;
          }
        }, {
          key: 'value',

          /**
           * @return {string} The value of the select.
           */
          get: function get() {
            return this.foundation_.getValue();
          }

          /**
           * @param {string} value The value to set on the select.
           */

          , set: function set(value) {
            this.foundation_.setValue(value);
          }

          /**
           * @return {number} The selected index of the select.
           */

        }, {
          key: 'selectedIndex',
          get: function get() {
            var selectedIndex = void 0;
            if (this.menuElement_) {
              var selectedEl = /** @type {!HTMLElement} */this.menuElement_.querySelector(__WEBPACK_IMPORTED_MODULE_7__constants__["c" /* strings */].SELECTED_ITEM_SELECTOR);
              selectedIndex = this.menu_.items.indexOf(selectedEl);
            } else {
              selectedIndex = this.nativeControl_.selectedIndex;
            }
            return selectedIndex;
          }

          /**
           * @param {number} selectedIndex The index of the option to be set on the select.
           */

          , set: function set(selectedIndex) {
            this.foundation_.setSelectedIndex(selectedIndex);
          }

          /**
           * @return {boolean} True if the select is disabled.
           */

        }, {
          key: 'disabled',
          get: function get() {
            return this.root_.classList.contains(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* cssClasses */].DISABLED) || (this.nativeControl_ ? this.nativeControl_.disabled : false);
          }

          /**
           * @param {boolean} disabled Sets the select disabled or enabled.
           */

          , set: function set(disabled) {
            this.foundation_.setDisabled(disabled);
          }

          /**
           * Sets the aria label of the leading icon.
           * @param {string} label
           */

        }, {
          key: 'leadingIconAriaLabel',
          set: function set(label) {
            this.foundation_.setLeadingIconAriaLabel(label);
          }

          /**
           * Sets the text content of the leading icon.
           * @param {string} content
           */

        }, {
          key: 'leadingIconContent',
          set: function set(content) {
            this.foundation_.setLeadingIconContent(content);
          }

          /**
           * Sets the text content of the helper text.
           * @param {string} content
           */

        }, {
          key: 'helperTextContent',
          set: function set(content) {
            this.foundation_.setHelperTextContent(content);
          }

          /**
           * Sets the current invalid state of the select.
           * @param {boolean} isValid
           */

        }, {
          key: 'valid',
          set: function set(isValid) {
            this.foundation_.setValid(isValid);
          }

          /**
           * Checks if the select is in a valid state.
           * @return {boolean}
           */

          , get: function get() {
            return this.foundation_.isValid();
          }

          /**
           * Sets the control to the required state.
           * @param {boolean} isRequired
           */

        }, {
          key: 'required',
          set: function set(isRequired) {
            if (this.nativeControl_) {
              this.nativeControl_.required = isRequired;
            } else {
              if (isRequired) {
                this.selectedText_.setAttribute('aria-required', isRequired.toString());
              } else {
                this.selectedText_.removeAttribute('aria-required');
              }
            }
          }

          /**
           * Returns whether the select is required.
           * @return {boolean}
           */

          , get: function get() {
            if (this.nativeControl_) {
              return this.nativeControl_.required;
            } else {
              return this.selectedText_.getAttribute('aria-required') === 'true';
            }
          }
        }], [{
          key: 'attachTo',
          value: function attachTo(root) {
            return new MDCSelect(root);
          }
        }]);

        return MDCSelect;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCComponent"]);

      /***/
    },
    /* 130 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_index__ = __webpack_require__(7);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(72);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__icon_index__ = __webpack_require__(51);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__helper_text_index__ = __webpack_require__(52);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__constants__ = __webpack_require__(75);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /* eslint-disable no-unused-vars */

      /* eslint-enable no-unused-vars */

      /**
       * @extends {MDCFoundation<!MDCSelectAdapter>}
       * @final
       */

      var MDCSelectFoundation = function (_MDCFoundation) {
        _inherits(MDCSelectFoundation, _MDCFoundation);

        _createClass(MDCSelectFoundation, null, [{
          key: 'cssClasses',

          /** @return enum {string} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */];
          }

          /** @return enum {number} */

        }, {
          key: 'numbers',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* numbers */];
          }

          /** @return enum {string} */

        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_4__constants__["c" /* strings */];
          }

          /**
           * {@see MDCSelectAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCSelectAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCSelectAdapter} */{
                addClass: function addClass() /* className: string */{},
                removeClass: function removeClass() /* className: string */{},
                hasClass: function hasClass() {
                  return (/* className: string */false
                  );
                },
                activateBottomLine: function activateBottomLine() {},
                deactivateBottomLine: function deactivateBottomLine() {},
                setValue: function setValue() {},
                getValue: function getValue() {},
                floatLabel: function floatLabel() /* value: boolean */{},
                getLabelWidth: function getLabelWidth() {},
                hasOutline: function hasOutline() {
                  return false;
                },
                notchOutline: function notchOutline() /* labelWidth: number, */{},
                closeOutline: function closeOutline() {},
                openMenu: function openMenu() {},
                closeMenu: function closeMenu() {},
                isMenuOpen: function isMenuOpen() {},
                setSelectedIndex: function setSelectedIndex() {},
                setDisabled: function setDisabled() {},
                setRippleCenter: function setRippleCenter() {},
                notifyChange: function notifyChange() {},
                checkValidity: function checkValidity() {},
                setValid: function setValid() {}
              }
            );
          }

          /**
           * @param {!MDCSelectAdapter} adapter
           * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
           */

        }]);

        function MDCSelectFoundation(adapter) {
          var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};

          _classCallCheck(this, MDCSelectFoundation);

          /** @type {!MDCSelectIconFoundation|undefined} */
          var _this = _possibleConstructorReturn(this, (MDCSelectFoundation.__proto__ || Object.getPrototypeOf(MDCSelectFoundation)).call(this, _extends(MDCSelectFoundation.defaultAdapter, adapter)));

          _this.leadingIcon_ = foundationMap.leadingIcon;
          /** @type {!MDCSelectHelperTextFoundation|undefined} */
          _this.helperText_ = foundationMap.helperText;
          return _this;
        }

        _createClass(MDCSelectFoundation, [{
          key: 'setSelectedIndex',
          value: function setSelectedIndex(index) {
            this.adapter_.setSelectedIndex(index);
            this.adapter_.closeMenu();
            var didChange = true;
            this.handleChange(didChange);
          }
        }, {
          key: 'setValue',
          value: function setValue(value) {
            this.adapter_.setValue(value);
            var didChange = true;
            this.handleChange(didChange);
          }
        }, {
          key: 'getValue',
          value: function getValue() {
            return this.adapter_.getValue();
          }
        }, {
          key: 'setDisabled',
          value: function setDisabled(isDisabled) {
            isDisabled ? this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].DISABLED) : this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].DISABLED);
            this.adapter_.setDisabled(isDisabled);
            this.adapter_.closeMenu();

            if (this.leadingIcon_) {
              this.leadingIcon_.setDisabled(isDisabled);
            }
          }

          /**
           * @param {string} content Sets the content of the helper text.
           */

        }, {
          key: 'setHelperTextContent',
          value: function setHelperTextContent(content) {
            if (this.helperText_) {
              this.helperText_.setContent(content);
            }
          }
        }, {
          key: 'layout',
          value: function layout() {
            var openNotch = this.getValue().length > 0;
            this.notchOutline(openNotch);
          }

          /**
           * Handles value changes, via change event or programmatic updates.
           */

        }, {
          key: 'handleChange',
          value: function handleChange() {
            var didChange = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            var value = this.getValue();
            var optionHasValue = value.length > 0;
            var isRequired = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].REQUIRED);

            this.notchOutline(optionHasValue);

            if (!this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].FOCUSED)) {
              this.adapter_.floatLabel(optionHasValue);
            }

            if (didChange) {
              this.adapter_.notifyChange(value);

              if (isRequired) {
                this.setValid(this.isValid());
                if (this.helperText_) {
                  this.helperText_.setValidity(this.isValid());
                }
              }
            }
          }

          /**
           * Handles focus events from select element.
           */

        }, {
          key: 'handleFocus',
          value: function handleFocus() {
            this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].FOCUSED);
            this.adapter_.floatLabel(true);
            this.notchOutline(true);
            this.adapter_.activateBottomLine();
            if (this.helperText_) {
              this.helperText_.showToScreenReader();
            }
          }

          /**
           * Handles blur events from select element.
           */

        }, {
          key: 'handleBlur',
          value: function handleBlur() {
            if (this.adapter_.isMenuOpen()) return;
            this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].FOCUSED);
            this.handleChange(false);
            this.adapter_.deactivateBottomLine();

            var isRequired = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].REQUIRED);

            if (isRequired) {
              this.setValid(this.isValid());
              if (this.helperText_) {
                this.helperText_.setValidity(this.isValid());
              }
            }
          }
        }, {
          key: 'handleClick',
          value: function handleClick(normalizedX) {
            if (this.adapter_.isMenuOpen()) return;
            this.adapter_.setRippleCenter(normalizedX);

            this.adapter_.openMenu();
          }
        }, {
          key: 'handleKeydown',
          value: function handleKeydown(event) {
            if (this.adapter_.isMenuOpen()) return;

            var isEnter = event.key === 'Enter' || event.keyCode === 13;
            var isSpace = event.key === 'Space' || event.keyCode === 32;
            var arrowUp = event.key === 'ArrowUp' || event.keyCode === 38;
            var arrowDown = event.key === 'ArrowDown' || event.keyCode === 40;

            if (this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].FOCUSED) && (isEnter || isSpace || arrowUp || arrowDown)) {
              this.adapter_.openMenu();
              event.preventDefault();
            }
          }

          /**
           * Opens/closes the notched outline.
           * @param {boolean} openNotch
           */

        }, {
          key: 'notchOutline',
          value: function notchOutline(openNotch) {
            if (!this.adapter_.hasOutline()) {
              return;
            }
            var isFocused = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_4__constants__["a" /* cssClasses */].FOCUSED);

            if (openNotch) {
              var labelScale = __WEBPACK_IMPORTED_MODULE_4__constants__["b" /* numbers */].LABEL_SCALE;
              var labelWidth = this.adapter_.getLabelWidth() * labelScale;
              this.adapter_.notchOutline(labelWidth);
            } else if (!isFocused) {
              this.adapter_.closeOutline();
            }
          }

          /**
           * Sets the aria label of the leading icon.
           * @param {string} label
           */

        }, {
          key: 'setLeadingIconAriaLabel',
          value: function setLeadingIconAriaLabel(label) {
            if (this.leadingIcon_) {
              this.leadingIcon_.setAriaLabel(label);
            }
          }

          /**
           * Sets the text content of the leading icon.
           * @param {string} content
           */

        }, {
          key: 'setLeadingIconContent',
          value: function setLeadingIconContent(content) {
            if (this.leadingIcon_) {
              this.leadingIcon_.setContent(content);
            }
          }
        }, {
          key: 'setValid',
          value: function setValid(isValid) {
            this.adapter_.setValid(isValid);
          }
        }, {
          key: 'isValid',
          value: function isValid() {
            return this.adapter_.checkValidity();
          }
        }]);

        return MDCSelectFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_index__["MDCFoundation"]);

      /* harmony default export */__webpack_exports__["a"] = MDCSelectFoundation;

      /***/
    },
    /* 131 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(73);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(132);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCFoundation<!MDCSelectIconAdapter>}
       * @final
       */

      var MDCSelectIconFoundation = function (_MDCFoundation) {
        _inherits(MDCSelectIconFoundation, _MDCFoundation);

        _createClass(MDCSelectIconFoundation, null, [{
          key: 'strings',

          /** @return enum {string} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */];
          }

          /**
           * {@see MDCSelectIconAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCSelectIconAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCSelectIconAdapter} */{
                getAttr: function getAttr() {},
                setAttr: function setAttr() {},
                removeAttr: function removeAttr() {},
                setContent: function setContent() {},
                registerInteractionHandler: function registerInteractionHandler() {},
                deregisterInteractionHandler: function deregisterInteractionHandler() {},
                notifyIconAction: function notifyIconAction() {}
              }
            );
          }

          /**
           * @param {!MDCSelectIconAdapter} adapter
           */

        }]);

        function MDCSelectIconFoundation(adapter) {
          _classCallCheck(this, MDCSelectIconFoundation);

          /** @private {string?} */
          var _this = _possibleConstructorReturn(this, (MDCSelectIconFoundation.__proto__ || Object.getPrototypeOf(MDCSelectIconFoundation)).call(this, _extends(MDCSelectIconFoundation.defaultAdapter, adapter)));

          _this.savedTabIndex_ = null;

          /** @private {function(!Event): undefined} */
          _this.interactionHandler_ = function (evt) {
            return _this.handleInteraction(evt);
          };
          return _this;
        }

        _createClass(MDCSelectIconFoundation, [{
          key: 'init',
          value: function init() {
            var _this2 = this;

            this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

            ['click', 'keydown'].forEach(function (evtType) {
              _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
            });
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;

            ['click', 'keydown'].forEach(function (evtType) {
              _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
            });
          }

          /** @param {boolean} disabled */

        }, {
          key: 'setDisabled',
          value: function setDisabled(disabled) {
            if (!this.savedTabIndex_) {
              return;
            }

            if (disabled) {
              this.adapter_.setAttr('tabindex', '-1');
              this.adapter_.removeAttr('role');
            } else {
              this.adapter_.setAttr('tabindex', this.savedTabIndex_);
              this.adapter_.setAttr('role', __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* strings */].ICON_ROLE);
            }
          }

          /** @param {string} label */

        }, {
          key: 'setAriaLabel',
          value: function setAriaLabel(label) {
            this.adapter_.setAttr('aria-label', label);
          }

          /** @param {string} content */

        }, {
          key: 'setContent',
          value: function setContent(content) {
            this.adapter_.setContent(content);
          }

          /**
           * Handles an interaction event
           * @param {!Event} evt
           */

        }, {
          key: 'handleInteraction',
          value: function handleInteraction(evt) {
            if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
              this.adapter_.notifyIconAction();
            }
          }
        }]);

        return MDCSelectIconFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCSelectIconFoundation;

      /***/
    },
    /* 132 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return strings;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var strings = {
        ICON_EVENT: 'MDCSelect:icon',
        ICON_ROLE: 'button'
      };

      /***/
    },
    /* 133 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__material_base_foundation__ = __webpack_require__(0);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__adapter__ = __webpack_require__(74);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(134);
      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
          }
        }return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
      }();

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * @extends {MDCFoundation<!MDCSelectHelperTextAdapter>}
       * @final
       */

      var MDCSelectHelperTextFoundation = function (_MDCFoundation) {
        _inherits(MDCSelectHelperTextFoundation, _MDCFoundation);

        _createClass(MDCSelectHelperTextFoundation, null, [{
          key: 'cssClasses',

          /** @return enum {string} */
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */];
          }

          /** @return enum {string} */

        }, {
          key: 'strings',
          get: function get() {
            return __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */];
          }

          /**
           * {@see MDCSelectHelperTextAdapter} for typing information on parameters and return
           * types.
           * @return {!MDCSelectHelperTextAdapter}
           */

        }, {
          key: 'defaultAdapter',
          get: function get() {
            return (/** @type {!MDCSelectHelperTextAdapter} */{
                addClass: function addClass() {},
                removeClass: function removeClass() {},
                hasClass: function hasClass() {},
                setAttr: function setAttr() {},
                removeAttr: function removeAttr() {},
                setContent: function setContent() {}
              }
            );
          }

          /**
           * @param {!MDCSelectHelperTextAdapter} adapter
           */

        }]);

        function MDCSelectHelperTextFoundation(adapter) {
          _classCallCheck(this, MDCSelectHelperTextFoundation);

          return _possibleConstructorReturn(this, (MDCSelectHelperTextFoundation.__proto__ || Object.getPrototypeOf(MDCSelectHelperTextFoundation)).call(this, _extends(MDCSelectHelperTextFoundation.defaultAdapter, adapter)));
        }

        /**
         * Sets the content of the helper text field.
         * @param {string} content
         */

        _createClass(MDCSelectHelperTextFoundation, [{
          key: 'setContent',
          value: function setContent(content) {
            this.adapter_.setContent(content);
          }

          /** @param {boolean} isPersistent Sets the persistency of the helper text. */

        }, {
          key: 'setPersistent',
          value: function setPersistent(isPersistent) {
            if (isPersistent) {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
            } else {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
            }
          }

          /**
           * @param {boolean} isValidation True to make the helper text act as an
           *   error validation message.
           */

        }, {
          key: 'setValidation',
          value: function setValidation(isValidation) {
            if (isValidation) {
              this.adapter_.addClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
            } else {
              this.adapter_.removeClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
            }
          }

          /** Makes the helper text visible to the screen reader. */

        }, {
          key: 'showToScreenReader',
          value: function showToScreenReader() {
            this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN);
          }

          /**
           * Sets the validity of the helper text based on the select validity.
           * @param {boolean} selectIsValid
           */

        }, {
          key: 'setValidity',
          value: function setValidity(selectIsValid) {
            var helperTextIsPersistent = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_PERSISTENT);
            var helperTextIsValidationMsg = this.adapter_.hasClass(__WEBPACK_IMPORTED_MODULE_2__constants__["a" /* cssClasses */].HELPER_TEXT_VALIDATION_MSG);
            var validationMsgNeedsDisplay = helperTextIsValidationMsg && !selectIsValid;

            if (validationMsgNeedsDisplay) {
              this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE, 'alert');
            } else {
              this.adapter_.removeAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ROLE);
            }

            if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
              this.hide_();
            }
          }

          /**
           * Hides the help text from screen readers.
           * @private
           */

        }, {
          key: 'hide_',
          value: function hide_() {
            this.adapter_.setAttr(__WEBPACK_IMPORTED_MODULE_2__constants__["b" /* strings */].ARIA_HIDDEN, 'true');
          }
        }]);

        return MDCSelectHelperTextFoundation;
      }(__WEBPACK_IMPORTED_MODULE_0__material_base_foundation__["a" /* default */]);

      /* harmony default export */__webpack_exports__["a"] = MDCSelectHelperTextFoundation;

      /***/
    },
    /* 134 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return strings;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return cssClasses;
      });
      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /** @enum {string} */
      var strings = {
        ARIA_HIDDEN: 'aria-hidden',
        ROLE: 'role'
      };

      /** @enum {string} */
      var cssClasses = {
        HELPER_TEXT_PERSISTENT: 'mdc-select-helper-text--persistent',
        HELPER_TEXT_VALIDATION_MSG: 'mdc-select-helper-text--validation-msg'
      };

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=mdc.select.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)(module)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/fonts/e0b6444acb562282dfde93e44c67750b.woff";

/***/ })
/******/ ]);