webpackJsonp([0],Array(23).concat([
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__(51);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_485d9f8a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__(156);
function injectStyle (ssrContext) {
  __webpack_require__(82)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_485d9f8a_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_has__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {},
  methods: {
    triggerEventClick: function (eventObject, eventRef) {
      __WEBPACK_IMPORTED_MODULE_1_quasar__["a" /* Events */].$emit(
        'click-event-' + eventRef,
        eventObject
      )
    },
    handleEventDetailEvent: function (params, thisRef) {
      if (thisRef === undefined) {
        thisRef = 'defaultEventDetail'
      }
      this.eventDetailEventObject = params
      if (__WEBPACK_IMPORTED_MODULE_0_lodash_has___default()(this.$refs, thisRef + '.__open')) {
        this.$refs[thisRef].__open()
      }
    },
    fullMoveToDay: function (dateObject) {
      if (this.fullComponentRef) {
        __WEBPACK_IMPORTED_MODULE_1_quasar__["a" /* Events */].$emit(
          this.fullComponentRef + ':moveToSingleDay', {
            dateObject: dateObject
          }
        )
      }
    },
    getEventColor: function (cssObject, eventObject, colorName) {
      if (__WEBPACK_IMPORTED_MODULE_0_lodash_has___default()(eventObject, colorName)) {
        return eventObject[colorName]
      }
      else if (__WEBPACK_IMPORTED_MODULE_0_lodash_has___default()(this, colorName)) {
        return this[colorName]
      }
      else if (colorName === 'textColor') {
        return 'white'
      }
      else {
        return 'primary'
      }
    },
    addCssColorClasses: function (cssObject, eventObject) {
      cssObject['bg-' + this.getEventColor(cssObject, eventObject, 'color')] = true
      cssObject['text-' + this.getEventColor(cssObject, eventObject, 'textColor')] = true
      return cssObject
    },
    formatDate: function (dateObject, formatString) {
      return __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(dateObject, formatString)
    },
    dateAdjustWeekday (thisDateObject, weekdayNum) {
      let checkDate = new Date()
      let adjustForward = true
      if (weekdayNum < 0) {
        adjustForward = false
        weekdayNum = Math.abs(weekdayNum)
      }
      for (let counter = 0; counter <= 6; counter++) {
        if (adjustForward) {
          checkDate = __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].addToDate(thisDateObject, { days: counter })
        }
        else {
          checkDate = __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].subtractFromDate(thisDateObject, { days: counter })
        }
        if (__WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].getDayOfWeek(checkDate) === weekdayNum) {
          return checkDate
        }
      }
    },
    buildWeekDateArray: function (numberOfDays) {
      if (numberOfDays === undefined) {
        if (this.numberOfDays !== undefined) {
          numberOfDays = this.numberOfDays
        }
        else if (this.numDays !== undefined) {
          numberOfDays = this.numDays
        }
        else {
          numberOfDays = 7
        }
      }
      if (this.forceStartOfWeek) {
        this.weekDateArray = this.getForcedWeekDateArray(numberOfDays)
      }
      else {
        this.weekDateArray = this.getWeekDateArray(numberOfDays)
      }
    },
    getForcedWeekBookendDates: function (numberOfDays) {
      if (numberOfDays === undefined) {
        numberOfDays = 7
      }
      return {
        first: this.dateAdjustWeekday(this.workingDate, -1),
        last: this.dateAdjustWeekday(this.workingDate, numberOfDays),
      }
    },
    getForcedWeekDateArray: function (numberOfDays) {
      let bookendDates = this.getForcedWeekBookendDates()
      let returnArray = []
      for (let counter = 0; counter <= numberOfDays - 1; counter++) {
        returnArray.push(
          __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].addToDate(bookendDates.first, { days: counter })
        )
      }
      return returnArray
    },
    getWeekDateArray: function (numberOfDays) {
      let returnArray = []
      for (let counter = 0; counter <= numberOfDays - 1; counter++) {
        returnArray.push(
          __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].addToDate(this.workingDate, { days: counter })
        )
      }
      return returnArray
    },
    formatTimeFromNumber: function (hourNumber) {
      // TODO: this should be able to handle 24 hour and alternate time formats
      return __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(
        __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].adjustDate(new Date(), { hours: hourNumber }),
        'ha'
      )
    },
    moveTimePeriod: function (params) {
      let paramObj = {}
      paramObj[params.unitType] = params.amount
      this.workingDate = __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].addToDate(this.workingDate, paramObj)
    },
    setTimePeriod: function (params) {
      this.workingDate = params.dateObject
    },
    getDayOfWeek: function () {
      return this.createThisDate(this.dayNumber).format('dddd')
    },
    createThisDate: function (dateNum) {
      return this.parseDateParams(dateNum)
    },
    isCurrentDate: function (thisDateObject) {
      let now = new Date()
      return __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].isSameDate(now, thisDateObject, 'day')
    },
    isWeekendDay: function (thisDateObject) {
      const dayName = __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(thisDateObject, 'ddd')
      return (dayName === 'Sun' || dayName === 'Sat')
    },
    mountSetDate: function () {
      this.workingDate = this.startDate
    },
    decimalAdjust: function (type, value, exp) {
      // from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
      // If the exp is undefined or zero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value)
      }
      value = +value
      exp = +exp
      // If the value is not a number or the exp is not an integer...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN
      }
      // Shift
      value = value.toString().split('e')
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)))
      // Shift back
      value = value.toString().split('e')
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp))
    },
    calculateDayCellWidth: function (numberOfDays) {
      return this.decimalAdjust(
        'floor',
        100 / numberOfDays,
        -3
      ) + '%'
    },
    createNewNavEventName: function () {
      return 'calendar:navMovePeriod:' + this.createRandomString()
    },
    createRandomString: function () {
      return Math.random().toString(36).substring(2, 15)
    }
  },
  mounted () {}
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarEvent_vue__ = __webpack_require__(53);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_686e59a1_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarEvent_vue__ = __webpack_require__(91);
function injectStyle (ssrContext) {
  __webpack_require__(89)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarEvent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_686e59a1_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarEvent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(65)('wks');
var uid = __webpack_require__(66);
var Symbol = __webpack_require__(28).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_has__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(3);


const defaultParsed = {
  byAllDayStartDate: {},
  byStartDate: {},
  byId: {}
}
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {},
  methods: {

    formatToSqlDate: function (dateObject) {
      return __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(dateObject, 'YYYY-MM-DD')
    },
    getEventById: function (eventId) {
      return this.parsed.byId[eventId]
    },
    dateGetEvents: function (thisDate) {
      let hasAllDayEvents = this.hasAllDayEvents(thisDate)
      let hasEvents = this.hasEvents(thisDate)
      let returnArray = []
      let sqlDate = this.formatToSqlDate(thisDate)
      if (hasAllDayEvents) {
        for (let thisEvent of this.parsed.byAllDayStartDate[sqlDate]) {
          returnArray.push(this.getEventById(thisEvent))
        }
      }
      if (hasEvents) {
        for (let thisEvent of this.parsed.byStartDate[sqlDate]) {
          returnArray.push(this.getEventById(thisEvent))
        }
      }
      return returnArray
    },
    hasAnyEvents: function (thisDateObject) {
      return (
        this.hasEvents(thisDateObject) ||
        this.hasAllDayEvents(thisDateObject)
      )
    },
    hasAllDayEvents: function (thisDateObject) {
      return __WEBPACK_IMPORTED_MODULE_0_lodash_has___default()(
        this.parsed.byAllDayStartDate,
        this.formatToSqlDate(thisDateObject)
      )
    },
    hasEvents: function (thisDateObject) {
      return __WEBPACK_IMPORTED_MODULE_0_lodash_has___default()(
        this.parsed.byStartDate,
        this.formatToSqlDate(thisDateObject)
      )
    },

    clearParsed: function () {
      this.parsed = {}
      this.parsed = {
        byAllDayStartDate: {},
        byStartDate: {},
        byId: {}
      }
      return true
    },
    parseEventList: function () {
      this.clearParsed()
      for (let thisEvent of this.eventArray) {
        this.parsed.byId[thisEvent.id] = thisEvent
        thisEvent.start['dateObject'] = new Date(thisEvent.start.dateTime)
        thisEvent.end['dateObject'] = new Date(thisEvent.end.dateTime)
        let thisStartDate = this.formatToSqlDate(thisEvent.start.dateObject)

        // get all-day events
        if (thisEvent.start.isAllDay) {
          if (!__WEBPACK_IMPORTED_MODULE_0_lodash_has___default()(this.parsed.byAllDayStartDate, thisStartDate)) {
            this.parsed.byAllDayStartDate[thisStartDate] = []
          }
          this.parsed.byAllDayStartDate[thisStartDate].push(thisEvent.id)
        }

        // get events with a start and end time
        else {
          thisEvent.duration = this.parseGetDurationMinutes(thisEvent)
          if (!__WEBPACK_IMPORTED_MODULE_0_lodash_has___default()(this.parsed.byStartDate, thisStartDate)) {
            this.parsed.byStartDate[thisStartDate] = []
          }
          this.parsed.byStartDate[thisStartDate].push(thisEvent.id)
        }
      }

      for (let thisDate in this.parsed.byStartDate) {
        this.parsed.byStartDate[thisDate] = this.sortDateEvents(this.parsed.byStartDate[thisDate])
        this.parseDateEvents(this.parsed.byStartDate[thisDate])
      }
    },
    sortDateEvents: function (eventArray) {
      let tempArray = []
      for (let eventId of eventArray) {
        tempArray.push(this.parsed.byId[eventId])
      }
      tempArray.sort(function (a, b) {
        return __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].getDateDiff(
          __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].addToDate(a.start.dateObject, { milliseconds: a.duration }),
          __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].addToDate(b.start.dateObject, { milliseconds: b.duration }),
        )
      })
      let returnArray = []
      for (let thisEvent of tempArray) {
        returnArray.push(thisEvent.id)
      }
      return returnArray
    },
    parseDateEvents: function (eventArray) {
      let overlapSegment = 1
      let overlapIteration = 1
      for (let eventId of eventArray) {
        let numberOfOverlaps = 0
        for (let compareEventId of eventArray) {
          let thisEvent = this.parsed.byId[eventId]
          let compareEvent = this.parsed.byId[compareEventId]
          if (
            eventId !== compareEventId &&
            this.parseHasOverlap(thisEvent, compareEvent)
          ) {
            numberOfOverlaps++
          }
        }
        this.parsed.byId[eventId]['numberOfOverlaps'] = numberOfOverlaps
        if (numberOfOverlaps > 0) {
          this.parsed.byId[eventId]['overlapSegment'] = overlapSegment
          this.parsed.byId[eventId]['overlapIteration'] = overlapIteration
          overlapIteration++
        }
        else {
          this.parsed.byId[eventId]['overlapSegment'] = 0
          overlapSegment++
          overlapIteration = 1
        }
      }
    },
    parseGetDurationMinutes: function (eventObj) {
      if (eventObj.start.isAllDay) {
        return 24 * 60
      }
      else {
        return __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].getDateDiff(
          eventObj.start.dateObject,
          eventObj.end.dateObject,
          'minutes'
        )
      }
    },
    parseHasOverlap: function (event1, event2) {
      return (event1.start.dateObject <= event2.end.dateObject) &&
        (event1.end.dateObject >= event2.start.dateObject)
    },
    getPassedInParsedEvents: function () {
      this.parsed = defaultParsed
      if (
        this.parsedEvents !== undefined &&
        this.parsedEvents.byId !== undefined &&
        Object.keys(this.parsedEvents).length > 0
      ) {
        this.parsed = this.parsedEvents
        return true
      }
      else {
        return false
      }
    },
    getPassedInEventArray: function () {
      this.parsed = defaultParsed
      if (this.eventArray !== undefined && this.eventArray.length > 0) {
        this.parseEventList()
        return true
      }
      else {
        return false
      }
    },
    getDefaultParsed: function () {
      return defaultParsed
    },
    isParsedEventsEmpty: function () {
      return !(
        this.parsedEvents !== undefined &&
        this.parsedEvents.byId !== undefined &&
        Object.keys(this.parsedEvents).length > 0
      )
    },
    isEventArrayEmpty: function () {
      return !(this.eventArray !== undefined && this.eventArray.length > 0)
    },
    handlePassedInEvents: function () {
      if (!this.isParsedEventsEmpty()) {
        this.getPassedInParsedEvents()
      }
      else if (!this.isEventArrayEmpty()) {
        this.getPassedInEventArray()
      }
    }
  },
  mounted () {}
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(44);
var createDesc = __webpack_require__(64);
module.exports = __webpack_require__(37) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarDayLabels_vue__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4ef3a2d3_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarDayLabels_vue__ = __webpack_require__(99);
function injectStyle (ssrContext) {
  __webpack_require__(97)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarDayLabels_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_4ef3a2d3_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarDayLabels_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarHeaderNav_vue__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5469813f_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarHeaderNav_vue__ = __webpack_require__(102);
function injectStyle (ssrContext) {
  __webpack_require__(100)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarHeaderNav_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5469813f_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarHeaderNav_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarEventDetail_vue__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6a487c50_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarEventDetail_vue__ = __webpack_require__(135);
function injectStyle (ssrContext) {
  __webpack_require__(103)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarEventDetail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6a487c50_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarEventDetail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(45);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(62)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

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

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

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
  return this.has(key) && delete this.__data__[key];
}

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
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

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
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

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
  return true;
}

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
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

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
  return getMapData(this, key)['delete'](key);
}

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
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

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

/**
 * The base implementation of `_.has` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHas(object, key) {
  return object != null && hasOwnProperty.call(object, key);
}

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
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}

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
  path = isKey(path, object) ? [path] : castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

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

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize(function(string) {
  string = toString(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

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

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
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
 * method interface of `delete`, `get`, `has`, and `set`.
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
  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
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
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = MapCache;

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
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

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

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

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
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

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
  return !!value && (type == 'object' || type == 'function');
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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

/**
 * Checks if `path` is a direct property of `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = { 'a': { 'b': 2 } };
 * var other = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.has(object, 'a');
 * // => true
 *
 * _.has(object, 'a.b');
 * // => true
 *
 * _.has(object, ['a', 'b']);
 * // => true
 *
 * _.has(other, 'a');
 * // => false
 */
function has(object, path) {
  return object != null && hasPath(object, path, baseHas);
}

module.exports = has;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_QuantityBubble_vue__ = __webpack_require__(56);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5fe784ba_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_QuantityBubble_vue__ = __webpack_require__(96);
function injectStyle (ssrContext) {
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_QuantityBubble_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5fe784ba_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_QuantityBubble_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(111);
var defined = __webpack_require__(42);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(36);
var IE8_DOM_DEFINE = __webpack_require__(116);
var toPrimitive = __webpack_require__(117);
var dP = Object.defineProperty;

exports.f = __webpack_require__(37) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(65)('keys');
var uid = __webpack_require__(66);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarDayColumn_vue__ = __webpack_require__(71);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_72e93a72_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarDayColumn_vue__ = __webpack_require__(141);
function injectStyle (ssrContext) {
  __webpack_require__(139)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarDayColumn_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_72e93a72_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarDayColumn_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarTimeLabelColumn_vue__ = __webpack_require__(72);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_1b91676a_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarTimeLabelColumn_vue__ = __webpack_require__(144);
function injectStyle (ssrContext) {
  __webpack_require__(142)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarTimeLabelColumn_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_1b91676a_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarTimeLabelColumn_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar_calendar__ = __webpack_require__(84);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  components: {
    QLayout: __WEBPACK_IMPORTED_MODULE_0_quasar__["m" /* QLayout */],
    QToolbar: __WEBPACK_IMPORTED_MODULE_0_quasar__["v" /* QToolbar */],
    QToolbarTitle: __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* QToolbarTitle */],
    QBtn: __WEBPACK_IMPORTED_MODULE_0_quasar__["b" /* QBtn */],
    QIcon: __WEBPACK_IMPORTED_MODULE_0_quasar__["g" /* QIcon */],
    QList: __WEBPACK_IMPORTED_MODULE_0_quasar__["n" /* QList */],
    QListHeader: __WEBPACK_IMPORTED_MODULE_0_quasar__["o" /* QListHeader */],
    QItem: __WEBPACK_IMPORTED_MODULE_0_quasar__["i" /* QItem */],
    QItemSide: __WEBPACK_IMPORTED_MODULE_0_quasar__["k" /* QItemSide */],
    QItemMain: __WEBPACK_IMPORTED_MODULE_0_quasar__["j" /* QItemMain */],
    QCard: __WEBPACK_IMPORTED_MODULE_0_quasar__["c" /* QCard */],
    QCardTitle: __WEBPACK_IMPORTED_MODULE_0_quasar__["f" /* QCardTitle */],
    QCardMain: __WEBPACK_IMPORTED_MODULE_0_quasar__["d" /* QCardMain */],
    QCardSeparator: __WEBPACK_IMPORTED_MODULE_0_quasar__["e" /* QCardSeparator */],
    Calendar: __WEBPACK_IMPORTED_MODULE_1_quasar_calendar__["a" /* Calendar */],
    CalendarMonth: __WEBPACK_IMPORTED_MODULE_1_quasar_calendar__["c" /* CalendarMonth */],
    CalendarMultiDay: __WEBPACK_IMPORTED_MODULE_1_quasar_calendar__["d" /* CalendarMultiDay */],
    CalendarAgenda: __WEBPACK_IMPORTED_MODULE_1_quasar_calendar__["b" /* CalendarAgenda */]
  },
  data: function data() {
    return {
      eventArray: [{
        id: 1,
        summary: 'Test event',
        description: 'Some extra info goes here',
        location: 'Office of the Divine Randomness, 1232 Main St., Denver, CO',
        start: {
          dateTime: '2018-02-16T14:00:00Z',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-16T16:30:00Z',
          isAllDay: false,
          timeZone: 'American/New_York'
        },
        color: 'positive',
        attendees: [{
          id: 5,
          email: 'somebody@somewhere.com',
          displayName: 'John Q. Public',
          organizer: false,
          self: false,
          resource: false
        }, {
          id: 6,
          email: 'somebody@somewhere.com',
          displayName: 'John Q. Public',
          organizer: false,
          self: false,
          resource: false
        }, {
          id: 7,
          email: 'somebody@somewhere.com',
          displayName: 'John Q. Public',
          organizer: false,
          self: false,
          resource: false
        }, {
          id: 31,
          email: '',
          displayName: 'South Conference Room',
          organizer: false,
          self: false,
          resource: true
        }]
      }, {
        id: 3,
        summary: 'Test event 2',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-16T17:30:00Z',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-16T18:30:00Z',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }, {
        id: 4,
        summary: 'Test event 3',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13T10:30:00Z',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13T13:00:00Z',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }, {
        id: 5,
        summary: 'All day event',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13T00:00:00Z',
          isAllDay: true,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13T00:00:00Z',
          isAllDay: true,
          timeZone: 'American/New_York'
        }
      }, {
        id: 6,
        summary: 'Overlapping event',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13T11:30:00Z',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13T12:30:00Z',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }, {
        id: 7,
        summary: 'Some event',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13T06:30:00Z',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13T07:30:00Z',
          isAllDay: false,
          timeZone: 'American/New_York'
        },
        color: 'warning',
        textColor: 'dark'
      }, {
        id: 8,
        summary: 'Some other event',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13T16:00:00Z',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13T17:00:00Z',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }],
      startYear: new Date().getFullYear(),
      startMonth: new Date().getMonth() + 1,
      startDay: new Date().getDate()
    };
  },

  computed: {},
  methods: {
    launch: function launch(url) {
      Object(__WEBPACK_IMPORTED_MODULE_0_quasar__["B" /* openURL */])(url);
    },

    moveSampleDatesAhead: function moveSampleDatesAhead() {
      var dateSet1 = [1, 3],
          dateSet2 = [4, 5, 6, 7, 8],
          addDays1 = 2,
          addDays2 = 5;
      for (var counter = 0; counter < this.eventArray.length; counter++) {
        var currentItem = this.eventArray[counter];

        if (dateSet1.indexOf(currentItem.id) >= 0) {
          currentItem = this.adjustStartEndDates(currentItem, addDays1);
        }

        if (dateSet2.indexOf(currentItem.id) >= 0) {
          currentItem = this.adjustStartEndDates(currentItem, addDays2);
        }
        this.eventArray[counter] = currentItem;
      }
    },
    adjustStartEndDates: function adjustStartEndDates(eventItem, numDays) {
      eventItem.start.dateTime = this.getSqlDateFormat(this.setADateToADay(eventItem.start.dateTime, numDays));
      eventItem.end.dateTime = this.getSqlDateFormat(this.setADateToADay(eventItem.end.dateTime, numDays));
      return eventItem;
    },
    setADateToADay: function setADateToADay(dateObject, addDays) {
      var now = new Date();
      if (typeof dateObject === 'string') {
        dateObject = new Date(dateObject);
      }
      dateObject = __WEBPACK_IMPORTED_MODULE_0_quasar__["y" /* date */].adjustDate(dateObject, {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate()
      });
      if (addDays !== undefined) {
        dateObject = __WEBPACK_IMPORTED_MODULE_0_quasar__["y" /* date */].addToDate(dateObject, {
          days: addDays
        });
      }
      return dateObject;
    },
    getSqlDateFormat: function getSqlDateFormat(dateObject) {
      return __WEBPACK_IMPORTED_MODULE_0_quasar__["y" /* date */].formatDate(dateObject, 'YYYY-MM-DDTHH:mm:ssZ');
    }
  },
  created: function created() {
    this.moveSampleDatesAhead();
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarMonth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CalendarMultiDay__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarAgenda__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CalendarDayColumn__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CalendarTimeLabelColumn__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CalendarDayLabels__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CalendarHeaderNav__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_quasar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__QuantityBubble__ = __webpack_require__(40);














/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Calendar',
  props: {
    startDate: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    eventArray: {
      type: Array,
      default: []
    },
    eventRef: {
      type: String,
      default: 'cal-' + Math.random().toString(36).substring(2, 15)
    }
  },
  components: {
    QuantityBubble: __WEBPACK_IMPORTED_MODULE_11__QuantityBubble__["a" /* default */],
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_2__CalendarEvent__["a" /* default */],
    CalendarMonth: __WEBPACK_IMPORTED_MODULE_3__CalendarMonth__["a" /* default */],
    CalendarMultiDay: __WEBPACK_IMPORTED_MODULE_4__CalendarMultiDay__["a" /* default */],
    CalendarAgenda: __WEBPACK_IMPORTED_MODULE_5__CalendarAgenda__["a" /* default */],
    CalendarDayColumn: __WEBPACK_IMPORTED_MODULE_6__CalendarDayColumn__["a" /* default */],
    CalendarTimeLabelColumn: __WEBPACK_IMPORTED_MODULE_7__CalendarTimeLabelColumn__["a" /* default */],
    CalendarDayLabels: __WEBPACK_IMPORTED_MODULE_8__CalendarDayLabels__["a" /* default */],
    CalendarHeaderNav: __WEBPACK_IMPORTED_MODULE_9__CalendarHeaderNav__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_10_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_10_quasar__["x" /* QTooltip */],
    QTabs: __WEBPACK_IMPORTED_MODULE_10_quasar__["u" /* QTabs */],
    QTab: __WEBPACK_IMPORTED_MODULE_10_quasar__["s" /* QTab */],
    QTabPane: __WEBPACK_IMPORTED_MODULE_10_quasar__["t" /* QTabPane */],
    QScrollArea: __WEBPACK_IMPORTED_MODULE_10_quasar__["q" /* QScrollArea */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__["a" /* default */]],
  data: function data() {
    return {
      dayCellHeight: 5,
      dayCellHeightUnit: 'rem',
      workingDate: new Date(),
      parsed: {
        byAllDayStartDate: {},
        byStartDate: {},
        byId: {}
      },
      dayRowArray: [],
      thisRefName: this.createRandomString()
    };
  },

  computed: {},
  methods: {
    setupEventsHandling: function setupEventsHandling() {
      __WEBPACK_IMPORTED_MODULE_10_quasar__["a" /* Events */].$on(this.eventRef + ':navMovePeriod', this.calPackageMoveTimePeriod);
      __WEBPACK_IMPORTED_MODULE_10_quasar__["a" /* Events */].$on(this.eventRef + ':moveToSingleDay', this.switchToSingleDay);
    },
    calPackageMoveTimePeriod: function calPackageMoveTimePeriod(params) {
      this.moveTimePeriod(params);
      this.$emit('calendar' + ':navMovePeriod', params);
    },
    switchToSingleDay: function switchToSingleDay(params) {
      this.setTimePeriod(params);
      this.$refs.fullCalendarTabs.selectTab('tab-single-day-component');
    }
  },
  mounted: function mounted() {
    this.mountSetDate();
    this.parseEventList();
    this.setupEventsHandling();
  }
});

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarMixin__ = __webpack_require__(26);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarEvent',
  props: {
    eventObject: {
      type: Object,
      default: this.blankCalendarEvent
    },
    color: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    showTime: {
      type: Boolean,
      default: true
    },
    monthStyle: {
      type: Boolean,
      default: false
    },
    eventRef: String
  },
  components: {
    QBtn: __WEBPACK_IMPORTED_MODULE_0_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_0_quasar__["x" /* QTooltip */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_1__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {
      blankCalendarEvent: {
        id: 0,
        summary: '...',
        description: '...',
        start: {
          dateTime: '2020-01-01 00:00:00',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2020-01-01 01:00:00',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }
    };
  },

  computed: {
    getEventStyle: function getEventStyle() {
      return {};
    },
    getEventClass: function getEventClass() {
      return this.addCssColorClasses({
        'calendar-event': true,
        'calendar-event-month': this.monthStyle
      }, this.eventObject);
    }
  },
  methods: {
    formatTime: function formatTime(startTime) {
      var returnString = '';
      returnString += __WEBPACK_IMPORTED_MODULE_0_quasar__["y" /* date */].formatDate(startTime, 'h');
      if (startTime.getMinutes() > 0) {
        returnString += ':' + __WEBPACK_IMPORTED_MODULE_0_quasar__["y" /* date */].formatDate(startTime, 'mm');
      }
      returnString += __WEBPACK_IMPORTED_MODULE_0_quasar__["y" /* date */].formatDate(startTime, 'a').slice(0, 1);
      return returnString;
    },
    isAllDayEvent: function isAllDayEvent() {
      return this.eventObject.start.isAllDay;
    },
    handleClick: function handleClick(e) {
      this.$emit('click', this.eventObject);
      this.triggerEventClick(this.eventObject, this.eventRef);
    }
  },
  mounted: function mounted() {}
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarMonth_vue__ = __webpack_require__(55);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_f07e091a_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarMonth_vue__ = __webpack_require__(136);
function injectStyle (ssrContext) {
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarMonth_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_f07e091a_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarMonth_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quasar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__QuantityBubble__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarDayLabels__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CalendarHeaderNav__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CalendarEventDetail__ = __webpack_require__(34);










/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarMonth',
  components: {
    QuantityBubble: __WEBPACK_IMPORTED_MODULE_3__QuantityBubble__["a" /* default */],
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_4__CalendarEvent__["a" /* default */],
    CalendarDayLabels: __WEBPACK_IMPORTED_MODULE_5__CalendarDayLabels__["a" /* default */],
    CalendarHeaderNav: __WEBPACK_IMPORTED_MODULE_6__CalendarHeaderNav__["a" /* default */],
    CalendarEventDetail: __WEBPACK_IMPORTED_MODULE_7__CalendarEventDetail__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_2_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_2_quasar__["x" /* QTooltip */],
    QTabs: __WEBPACK_IMPORTED_MODULE_2_quasar__["u" /* QTabs */],
    QTab: __WEBPACK_IMPORTED_MODULE_2_quasar__["s" /* QTab */],
    QTabPane: __WEBPACK_IMPORTED_MODULE_2_quasar__["t" /* QTabPane */],
    QScrollArea: __WEBPACK_IMPORTED_MODULE_2_quasar__["q" /* QScrollArea */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__["a" /* default */]],
  props: {
    startDate: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    eventArray: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    parsedEvents: {
      type: Object,
      default: function _default() {}
    },
    eventRef: {
      type: String,
      default: 'cal-' + Math.random().toString(36).substring(2, 15)
    },
    fullComponentRef: String
  },
  data: function data() {
    return {
      dayCellHeight: 5,
      dayCellHeightUnit: 'rem',
      workingDate: new Date(),
      weekArray: [],
      parsed: this.getDefaultParsed(),
      eventDetailEventObject: {}
    };
  },

  computed: {
    calendarDaysAreClickable: function calendarDaysAreClickable() {
      return this.fullComponentRef && this.fullComponentRef.length > 0;
    }
  },
  methods: {
    handleStartChange: function handleStartChange(val, oldVal) {
      Object(__WEBPACK_IMPORTED_MODULE_2_quasar__["z" /* debounce */])(this.doUpdate, 300);
    },
    doUpdate: function doUpdate() {
      this.mountSetDate();
      this.generateCalendarCellArray();
    },
    getCalendarCellArray: function getCalendarCellArray(monthNumber, yearNumber) {
      var currentDay = __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].buildDate({
        year: yearNumber,
        month: monthNumber + 1,
        date: 1
      });
      var currentWeekOfYear = __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].getWeekOfYear(currentDay);
      var weekArray = [];
      var currentWeekArray = [];
      var thisDayObject = {};
      for (var thisDateOfMonth = 1; thisDateOfMonth <= 31; thisDateOfMonth++) {
        currentDay = __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].buildDate({
          year: yearNumber,
          month: monthNumber + 1,
          date: thisDateOfMonth
        });
        if (currentDay.getFullYear() === yearNumber && currentDay.getMonth() === monthNumber) {
          if (__WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].getWeekOfYear(currentDay) !== currentWeekOfYear) {
            weekArray.push(currentWeekArray);
            currentWeekOfYear = __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].getWeekOfYear(currentDay);
            currentWeekArray = [];
          }
          thisDayObject = {
            dateObject: currentDay,
            year: currentDay.getFullYear(),
            month: currentDay.getMonth(),
            date: currentDay.getDate(),
            dayName: __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].formatDate(currentDay, 'dddd'),
            dayNumber: __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].getDayOfWeek(currentDay)
          };
          currentWeekArray.push(thisDayObject);
        }
      }
      if (weekArray.length > 0) {
        weekArray.push(currentWeekArray);
      }
      return weekArray;
    },
    generateCalendarCellArray: function generateCalendarCellArray() {
      this.weekArray = this.getCalendarCellArray(this.workingDate.getMonth(), this.workingDate.getFullYear());
    },
    handleNavMove: function handleNavMove(params) {
      this.moveTimePeriod(params);
      this.$emit(this.eventRef + ':navMovePeriod', {
        unitType: params.unitType,
        amount: params.amount
      });
      this.generateCalendarCellArray();
    },
    handleDayClick: function handleDayClick(dateObject) {
      if (this.fullComponentRef) {
        this.fullMoveToDay(dateObject);
      }
    }
  },
  mounted: function mounted() {
    this.doUpdate();
    this.handlePassedInEvents();
    __WEBPACK_IMPORTED_MODULE_2_quasar__["a" /* Events */].$on(this.eventRef + ':navMovePeriod', this.handleNavMove);
    __WEBPACK_IMPORTED_MODULE_2_quasar__["a" /* Events */].$on('click-event-' + this.eventRef, this.handleEventDetailEvent);
  },

  watch: {
    startDate: 'handleStartChange',
    eventArray: function eventArray() {
      this.getPassedInEventArray();
    },
    parsedEvents: function parsedEvents() {
      this.getPassedInParsedEvents();
    }
  }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    quantity: {
      type: Number,
      default: 0
    },
    backgroundColor: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    offset: {
      type: Boolean,
      default: true
    }
  },
  filters: {},
  computed: {
    bubbleClass: function bubbleClass() {
      var returnVal = {
        'quantity-bubble': true,
        'row': true,
        'col': true,
        'items-center': true,
        'justify-center': true,
        'shadow-1': true
      };
      returnVal['bg-' + this.backgroundColor] = true;
      returnVal['text-' + this.textColor] = true;
      if (this.offset) {
        returnVal['quantity-bubble-offset'] = true;
      }
      return returnVal;
    }
  },
  methods: {},
  components: {},
  data: function data() {
    return {};
  }
});

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarDayLabels',
  props: {
    startDate: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    numberOfDays: {
      type: Number,
      default: 7
    },
    showDates: {
      type: Boolean,
      default: false
    },
    forceStartOfWeek: {
      type: Boolean,
      default: false
    },
    fullComponentRef: String
  },
  components: {},
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {
      dayCellHeight: 5,
      dayCellHeightUnit: 'rem',
      workingDate: new Date(),
      weekDateArray: []
    };
  },

  computed: {
    cellWidth: function cellWidth() {
      return this.calculateDayCellWidth(this.numberOfDays);
    },
    calendarDaysAreClickable: function calendarDaysAreClickable() {
      return this.fullComponentRef && this.fullComponentRef.length > 0;
    }
  },
  methods: {
    handleStartChange: function handleStartChange(val, oldVal) {
      this.doUpdate();
    },
    doUpdate: function doUpdate() {
      this.mountSetDate();
      this.buildWeekDateArray();
    },
    isCurrentDayLabel: function isCurrentDayLabel(thisDay, checkMonthOnly) {
      var now = new Date();

      if (checkMonthOnly === true) {
        return __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].getDayOfWeek(now) === __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].getDayOfWeek(thisDay) && now.getMonth() === thisDay.getMonth();
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].isSameDate(now, thisDay, 'day');
      }
    },
    handleDayClick: function handleDayClick(dateObject) {
      if (this.fullComponentRef) {
        this.fullMoveToDay(dateObject);
      }
    }
  },
  mounted: function mounted() {
    this.mountSetDate();
  },

  watch: {
    startDate: 'handleStartChange'
  }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarHeaderNav',
  props: {
    timePeriodUnit: {
      type: String,
      default: 'days'
    },
    timePeriodAmount: {
      type: Number,
      default: 1
    },
    moveTimePeriodFunction: Object,
    moveTimePeriodEmit: {
      type: String,
      default: 'calendar:navMovePeriod'
    }
  },
  components: {
    QBtn: __WEBPACK_IMPORTED_MODULE_0_quasar__["b" /* QBtn */]
  },
  data: function data() {
    return {};
  },

  computed: {},
  methods: {
    doMoveTimePeriod: function doMoveTimePeriod(timePeriodUnit, timePeriodAmount) {
      __WEBPACK_IMPORTED_MODULE_0_quasar__["a" /* Events */].$emit(this.moveTimePeriodEmit, {
        unitType: timePeriodUnit,
        amount: timePeriodAmount
      });
    }
  },
  mounted: function mounted() {}
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_has__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quasar__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarMixin__ = __webpack_require__(26);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarEventDetail',
  props: {
    eventObject: {
      type: Object,
      default: this.blankCalendarEvent
    }
  },
  components: {
    QList: __WEBPACK_IMPORTED_MODULE_2_quasar__["n" /* QList */],
    QItem: __WEBPACK_IMPORTED_MODULE_2_quasar__["i" /* QItem */],
    QItemSide: __WEBPACK_IMPORTED_MODULE_2_quasar__["k" /* QItemSide */],
    QItemTile: __WEBPACK_IMPORTED_MODULE_2_quasar__["l" /* QItemTile */],
    QItemMain: __WEBPACK_IMPORTED_MODULE_2_quasar__["j" /* QItemMain */],
    QModal: __WEBPACK_IMPORTED_MODULE_2_quasar__["p" /* QModal */],
    QBtn: __WEBPACK_IMPORTED_MODULE_2_quasar__["b" /* QBtn */],
    QIcon: __WEBPACK_IMPORTED_MODULE_2_quasar__["g" /* QIcon */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_3__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {
      modalIsOpen: false
    };
  },

  computed: {
    countAttendees: function countAttendees() {
      if (!__WEBPACK_IMPORTED_MODULE_1_lodash_has___default()(this.eventObject, 'attendees')) {
        return 0;
      }
      var count = this.eventObject.attendees.length;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.eventObject.attendees), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var thisAttendee = _step.value;

          if (thisAttendee.resource) {
            count--;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return count;
    },
    countResources: function countResources() {
      if (!__WEBPACK_IMPORTED_MODULE_1_lodash_has___default()(this.eventObject, 'attendees')) {
        return 0;
      }
      var count = 0;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(this.eventObject.attendees), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var thisAttendee = _step2.value;

          if (thisAttendee.resource) {
            count++;
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return count;
    },
    getTopColorClasses: function getTopColorClasses() {
      return this.addCssColorClasses({
        'ced-top': true
      }, this.eventObject);
    },
    getEventStyle: function getEventStyle() {
      return {};
    },
    getEventClass: function getEventClass() {
      return this.addCssColorClasses({
        'calendar-event': true,
        'calendar-event-month': this.monthStyle
      }, this.eventObject);
    }
  },
  methods: {
    textExists: function textExists(fieldLocation) {
      return __WEBPACK_IMPORTED_MODULE_1_lodash_has___default()(this.eventObject, fieldLocation) && this.eventObject[fieldLocation].length > 0;
    },
    formatDateTime: function formatDateTime(dateObject, format) {
      return __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].formatDate(dateObject, format);
    },
    __open: function __open() {
      this.modalIsOpen = true;
    },
    __close: function __close() {
      this.modalIsOpen = false;
    }
  },
  mounted: function mounted() {}
});

/***/ }),
/* 60 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(112);
var $export = __webpack_require__(113);
var redefine = __webpack_require__(118);
var hide = __webpack_require__(31);
var has = __webpack_require__(38);
var Iterators = __webpack_require__(35);
var $iterCreate = __webpack_require__(119);
var setToStringTag = __webpack_require__(68);
var getPrototypeOf = __webpack_require__(128);
var ITERATOR = __webpack_require__(29)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(45);
var document = __webpack_require__(28).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(28);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 66 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 67 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(44).f;
var has = __webpack_require__(38);
var TAG = __webpack_require__(29)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarMultiDay_vue__ = __webpack_require__(70);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5ffe44ab_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarMultiDay_vue__ = __webpack_require__(148);
function injectStyle (ssrContext) {
  __webpack_require__(137)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarMultiDay_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5ffe44ab_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarMultiDay_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarDayColumn__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CalendarTimeLabelColumn__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarDayLabels__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CalendarHeaderNav__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CalendarAllDayEvents__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CalendarEventDetail__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_quasar__ = __webpack_require__(3);












/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarMultiDay',
  props: {
    startDate: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    eventArray: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    parsedEvents: {
      type: Object,
      default: function _default() {}
    },
    eventRef: {
      type: String,

      default: 'cal-' + Math.random().toString(36).substring(2, 15)
    },
    numDays: {
      type: Number,
      default: 7
    },
    navDays: {
      type: Number,
      default: 7
    },
    forceStartOfWeek: {
      type: Boolean,
      default: true
    },
    dayCellHeight: {
      type: Number,
      default: 5
    },
    dayCellHeightUnit: {
      type: String,
      default: 'rem'
    },
    scrollStyle: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    scrollHeight: {
      type: String,
      default: 'auto'
    },
    fullComponentRef: String
  },
  components: {
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_2__CalendarEvent__["a" /* default */],
    CalendarDayColumn: __WEBPACK_IMPORTED_MODULE_3__CalendarDayColumn__["a" /* default */],
    CalendarTimeLabelColumn: __WEBPACK_IMPORTED_MODULE_4__CalendarTimeLabelColumn__["a" /* default */],
    CalendarDayLabels: __WEBPACK_IMPORTED_MODULE_5__CalendarDayLabels__["a" /* default */],
    CalendarHeaderNav: __WEBPACK_IMPORTED_MODULE_6__CalendarHeaderNav__["a" /* default */],
    CalendarAllDayEvents: __WEBPACK_IMPORTED_MODULE_7__CalendarAllDayEvents__["a" /* default */],
    CalendarEventDetail: __WEBPACK_IMPORTED_MODULE_8__CalendarEventDetail__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_9_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_9_quasar__["x" /* QTooltip */],
    QScrollArea: __WEBPACK_IMPORTED_MODULE_9_quasar__["q" /* QScrollArea */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__["a" /* default */]],
  data: function data() {
    return {
      workingDate: new Date(),
      weekDateArray: [],
      dayRowArray: [],
      parsed: this.getDefaultParsed(),
      thisNavRef: this.createNewNavEventName(),
      eventDetailEventObject: {}
    };
  },

  computed: {
    dayCellWidth: function dayCellWidth() {
      return this.calculateDayCellWidth(this.numDays);
    },
    getScrollStyle: function getScrollStyle() {
      if (this.scrollStyle.length > 0) {
        return this.scrollStyle;
      } else {
        return {
          'height': this.scrollHeight
        };
      }
    },
    getScrollClass: function getScrollClass() {
      if (this.scrollHeight === 'auto') {
        return {
          'col': true
        };
      } else {
        return {};
      }
    }
  },
  methods: {
    getHeaderLabel: function getHeaderLabel() {
      if (this.forceStartOfWeek) {
        var dateReturn = '';
        var bookendDates = this.getForcedWeekBookendDates();
        if (bookendDates.first.getMonth() !== bookendDates.last.getMonth()) {
          dateReturn += __WEBPACK_IMPORTED_MODULE_9_quasar__["y" /* date */].formatDate(bookendDates.first, 'MMM');
          if (bookendDates.first.getFullYear() !== bookendDates.last.getFullYear()) {
            dateReturn += __WEBPACK_IMPORTED_MODULE_9_quasar__["y" /* date */].formatDate(bookendDates.first, ' YYYY');
          }
          dateReturn += ' - ';
        }
        dateReturn += __WEBPACK_IMPORTED_MODULE_9_quasar__["y" /* date */].formatDate(bookendDates.last, 'MMM YYYY');
        return dateReturn;
      } else {
        return __WEBPACK_IMPORTED_MODULE_9_quasar__["y" /* date */].formatDate(this.workingDate, 'MMMM YYYY');
      }
    },
    handleStartChange: function handleStartChange(val, oldVal) {
      this.doUpdate();
    },
    doUpdate: function doUpdate() {
      this.mountSetDate();
      this.buildWeekDateArray();
    },
    handleNavMove: function handleNavMove(unitType, amount) {
      this.moveTimePeriod(unitType, amount);
      this.$emit(this.eventRef + ':navMovePeriod', {
        unitType: unitType,
        amount: amount
      });
      this.buildWeekDateArray();
    }
  },
  mounted: function mounted() {
    this.doUpdate();
    this.handlePassedInEvents();
    __WEBPACK_IMPORTED_MODULE_9_quasar__["a" /* Events */].$on(this.eventRef + ':navMovePeriod', this.handleNavMove);
    __WEBPACK_IMPORTED_MODULE_9_quasar__["a" /* Events */].$on('click-event-' + this.eventRef, this.handleEventDetailEvent);
  },

  watch: {
    startDate: 'handleStartChange',
    eventArray: 'getPassedInEventArray',
    parsedEvents: 'getPassedInParsedEvents'
  }
});

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quasar__ = __webpack_require__(3);





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarDayColumn',
  props: {
    startDate: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    dateEvents: {
      type: Array,
      default: []
    },
    columnCssClass: {
      type: String,
      default: 'col'
    },
    dayCellHeight: {
      type: Number,
      default: 5
    },
    dayCellHeightUnit: {
      type: String,
      default: 'rem'
    },
    eventRef: String
  },
  components: {
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_0__CalendarEvent__["a" /* default */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_1__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {
      workingDate: new Date(),
      eventDetailEventObject: {}
    };
  },

  watch: {
    startDate: 'mountSetDate'
  },
  computed: {
    columnCss: function columnCss() {
      var returnVal = {
        'calendar-day-column-content': true,
        'relative-position': true,
        'calendar-day-column-weekend': this.isWeekendDay(this.workingDate),
        'calendar-day-column-current': this.isCurrentDate(this.workingDate)
      };
      returnVal[this.columnCssClass] = true;
      return returnVal;
    },
    getCellStyle: function getCellStyle() {
      return {
        height: this.dayCellHeight + this.dayCellHeightUnit,
        'max-height': this.dayCellHeight + this.dayCellHeightUnit
      };
    }
  },
  methods: {
    calculateDayEventClass: function calculateDayEventClass(thisEvent) {
      var classes = {};
      if (thisEvent.numberOfOverlaps > 0) {
        classes['calendar-day-event-overlap'] = true;
        if (thisEvent.overlapIteration === 1) {
          classes['calendar-day-event-overlap-first'] = true;
        }
      }
      return classes;
    },
    calculateDayEventStyle: function calculateDayEventStyle(thisEvent) {
      var style = {
        position: 'absolute',
        'z-index': 10,
        width: '100%'
      };
      var positions = this.calculateDayEventPosition(thisEvent.start.dateObject, thisEvent.end.dateObject);
      style['top'] = positions.top;
      style['height'] = positions.height;
      if (thisEvent.numberOfOverlaps > 0) {
        var thisWidth = (100 / (thisEvent.numberOfOverlaps + 1)).toFixed(2);
        var thisShift = thisWidth * (thisEvent.overlapIteration - 1);
        style['width'] = thisWidth + '%';
        style['max-width'] = thisWidth + '%';
        style['left'] = thisShift + '%';
        style['z-index'] = 10 + thisEvent.overlapIteration;
      }
      return style;
    },
    calculateDayEventPosition: function calculateDayEventPosition(startDateObject, endDateObject) {
      var startMidnight = __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].adjustDate(startDateObject, {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      });
      var topMinuteCount = __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].getDateDiff(startDateObject, startMidnight, 'minutes');
      var heightMinuteCount = __WEBPACK_IMPORTED_MODULE_2_quasar__["y" /* date */].getDateDiff(endDateObject, startDateObject, 'minutes');
      var sizePerMinute = this.dayCellHeight / 60;
      return {
        top: topMinuteCount * sizePerMinute + this.dayCellHeightUnit,
        height: heightMinuteCount * sizePerMinute + this.dayCellHeightUnit
      };
    }
  },
  mounted: function mounted() {
    this.mountSetDate();
  }
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarTimeLabelColumn',
  props: {
    dayCellHeight: {
      type: String,
      default: '5rem'
    }
  },
  components: {},
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {};
  },

  computed: {},
  methods: {},
  mounted: function mounted() {}
});

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAllDayEvents_vue__ = __webpack_require__(74);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_38b2cf71_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAllDayEvents_vue__ = __webpack_require__(147);
function injectStyle (ssrContext) {
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAllDayEvents_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_38b2cf71_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAllDayEvents_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_quasar__ = __webpack_require__(3);






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarAllDayEvents',
  props: {
    startDate: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    parsed: {
      type: Object,
      default: {}
    },
    numberOfDays: {
      type: Number,
      default: 7
    },
    eventRef: String
  },
  components: {
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_2__CalendarEvent__["a" /* default */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__["a" /* default */]],
  data: function data() {
    return {
      dayCellHeight: 5,
      dayCellHeightUnit: 'rem',
      workingDate: new Date(),
      workingDateObject: {},
      weekArray: []
    };
  },

  computed: {
    cellWidth: function cellWidth() {
      return this.calculateDayCellWidth(this.numberOfDays);
    }
  },
  methods: {
    handleStartChange: function handleStartChange(val, oldVal) {
      this.doUpdate();
    },
    doUpdate: function doUpdate() {
      this.mountSetDate();
    },
    addDaysToDate: function addDaysToDate(thisDateObject, numDays) {
      return __WEBPACK_IMPORTED_MODULE_3_quasar__["y" /* date */].addToDate(thisDateObject, { days: numDays });
    }
  },
  mounted: function mounted() {
    this.mountSetDate();
  },
  updated: function updated() {
    this.mountSetDate();
  },

  watch: {
    startDate: 'handleStartChange'
  }
});

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAgenda_vue__ = __webpack_require__(76);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_74bcd918_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAgenda_vue__ = __webpack_require__(154);
function injectStyle (ssrContext) {
  __webpack_require__(149)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAgenda_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_74bcd918_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAgenda_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CalendarAgendaEvent__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarEventDetail__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_quasar__ = __webpack_require__(3);







/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarAgenda',
  props: {
    startDate: {
      type: Date,
      default: function _default() {
        return new Date();
      }
    },
    numDays: {
      type: Number,
      default: 7
    },
    leftMargin: {
      type: String,
      default: '4rem'
    },
    eventArray: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    parsedEvents: {
      type: Object,
      default: function _default() {}
    },
    eventRef: {
      type: String,
      default: 'calendar'
    },
    scrollHeight: {
      type: String,
      default: '200px'
    },
    fullComponentRef: String
  },
  components: {
    CalendarAgendaEvent: __WEBPACK_IMPORTED_MODULE_2__CalendarAgendaEvent__["a" /* default */],
    CalendarEventDetail: __WEBPACK_IMPORTED_MODULE_3__CalendarEventDetail__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_4_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_4_quasar__["x" /* QTooltip */],
    QScrollArea: __WEBPACK_IMPORTED_MODULE_4_quasar__["q" /* QScrollArea */],
    QInfiniteScroll: __WEBPACK_IMPORTED_MODULE_4_quasar__["h" /* QInfiniteScroll */],
    QSpinnerDots: __WEBPACK_IMPORTED_MODULE_4_quasar__["r" /* QSpinnerDots */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__CalendarEventMixin__["a" /* default */]],
  data: function data() {
    return {
      workingDate: new Date(),
      localNumDays: 30,
      dayRowArray: [],
      dayCounter: [],
      parsed: this.getDefaultParsed(),
      eventDetailEventObject: {}
    };
  },

  computed: {
    calendarDaysAreClickable: function calendarDaysAreClickable() {
      return this.fullComponentRef && this.fullComponentRef.length > 0;
    }
  },
  methods: {
    getDaysForwardDate: function getDaysForwardDate(daysForward) {
      return __WEBPACK_IMPORTED_MODULE_4_quasar__["y" /* date */].addToDate(this.workingDate, { days: daysForward });
    },
    isFirstOfMonth: function isFirstOfMonth(thisDate) {
      return thisDate.getDate() === 1;
    },
    isFirstDayOfWeek: function isFirstDayOfWeek(thisDate) {
      return __WEBPACK_IMPORTED_MODULE_4_quasar__["y" /* date */].getDayOfWeek(thisDate) === 1;
    },
    loadMore: function loadMore(index, done) {
      this.localNumDays += 30;
      done();
    },
    handleStartChange: function handleStartChange(val, oldVal) {
      this.doUpdate();
    },
    doUpdate: function doUpdate() {
      this.mountSetDate();
    },
    getWeekTitle: function getWeekTitle(firstDate) {
      var lastDate = __WEBPACK_IMPORTED_MODULE_4_quasar__["y" /* date */].addToDate(firstDate, { days: 6 });
      if (firstDate.getMonth() === lastDate.getMonth()) {
        return __WEBPACK_IMPORTED_MODULE_4_quasar__["y" /* date */].formatDate(firstDate, 'MMM D - ') + __WEBPACK_IMPORTED_MODULE_4_quasar__["y" /* date */].formatDate(lastDate, 'D');
      } else {
        return __WEBPACK_IMPORTED_MODULE_4_quasar__["y" /* date */].formatDate(firstDate, 'MMM D - ') + __WEBPACK_IMPORTED_MODULE_4_quasar__["y" /* date */].formatDate(lastDate, 'MMM D');
      }
    },
    handleDayClick: function handleDayClick(dateObject) {
      if (this.fullComponentRef) {
        this.fullMoveToDay(dateObject);
      }
    }
  },
  mounted: function mounted() {
    this.localNumDays = this.numDays;
    this.doUpdate();
    this.handlePassedInEvents();
    __WEBPACK_IMPORTED_MODULE_4_quasar__["a" /* Events */].$on('click-event-' + this.eventRef, this.handleEventDetailEvent);
  },

  watch: {
    startYear: 'handleStartChange',
    startMonth: 'handleStartChange',
    startDay: 'handleStartChange',
    eventArray: 'getPassedInEventArray',
    parsedEvents: 'getPassedInParsedEvents'
  }
});

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAgendaEvent_vue__ = __webpack_require__(78);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_a985ff08_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAgendaEvent_vue__ = __webpack_require__(153);
function injectStyle (ssrContext) {
  __webpack_require__(151)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAgendaEvent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_a985ff08_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAgendaEvent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarAgendaEvent',
  props: {
    eventObject: {
      type: Object,
      default: this.blankCalendarEvent
    },
    color: {
      type: String,
      default: 'primary'
    },
    textColor: {
      type: String,
      default: 'white'
    },
    showTime: {
      type: Boolean,
      default: true
    },
    monthStyle: {
      type: Boolean,
      default: false
    },
    eventRef: String
  },
  components: {
    QBtn: __WEBPACK_IMPORTED_MODULE_1_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_1_quasar__["x" /* QTooltip */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {
      blankCalendarEvent: {
        id: 0,
        summary: '...',
        description: '...',
        start: {
          dateTime: '2020-01-01 00:00:00',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2020-01-01 01:00:00',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }
    };
  },

  computed: {
    getEventClass: function getEventClass() {
      return this.addCssColorClasses({
        'calendar-agenda-event': true,
        'calendar-agenda-event-allday': this.eventObject.start.isAllDay
      }, this.eventObject);
    },
    getEventStyle: function getEventStyle() {
      return {};
    }
  },
  methods: {
    formatTimeRange: function formatTimeRange(startTime, endTime) {
      var returnString = '';

      returnString += __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(startTime, 'h');
      if (startTime.getMinutes() > 0) {
        returnString += ':' + __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(startTime, 'mm');
      }
      if (__WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(startTime, 'A') !== __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(endTime, 'A')) {
        returnString += ' ' + __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(startTime, 'A');
      }
      returnString += ' - ';

      returnString += __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(endTime, 'h');
      if (endTime.getMinutes() > 0) {
        returnString += ':' + __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(endTime, 'mm');
      }
      returnString += ' ' + __WEBPACK_IMPORTED_MODULE_1_quasar__["y" /* date */].formatDate(endTime, 'A');
      return returnString;
    },
    handleClick: function handleClick(e) {
      this.$emit('click', this.eventObject);
      this.triggerEventClick(this.eventObject, this.eventRef);
    }
  },
  mounted: function mounted() {}
});

/***/ }),
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(83);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("b0321486", content, true, {});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calendar__ = __webpack_require__(85);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_calendar__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__components_calendar__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__components_calendar__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__components_calendar__["d"]; });



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calendar__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarAgenda__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CalendarAgendaEvent__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarAllDayEvents__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CalendarDayColumn__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarDayLabels__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CalendarEventDetail__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CalendarHeaderNav__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CalendarMonth__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CalendarTimeLabelColumn__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CalendarMultiDay__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__QuantityBubble__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Calendar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__CalendarAgenda__["a"]; });
/* unused harmony reexport CalendarAgendaEvent */
/* unused harmony reexport CalendarAllDayEvents */
/* unused harmony reexport CalendarDayColumn */
/* unused harmony reexport CalendarDayLabels */
/* unused harmony reexport CalendarEvent */
/* unused harmony reexport CalendarEventDetail */
/* unused harmony reexport CalendarHeaderNav */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__CalendarMonth__["a"]; });
/* unused harmony reexport CalendarTimeLabelColumn */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__CalendarMultiDay__["a"]; });
/* unused harmony reexport QuantityBubble */
















/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Calendar_vue__ = __webpack_require__(52);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6beae093_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_Calendar_vue__ = __webpack_require__(155);
function injectStyle (ssrContext) {
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(4)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Calendar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6beae093_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_Calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(88);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("44ef6c54", content, true, {});

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-tabs .calendar-tab-pane-day,.calendar-tabs .calendar-tab-pane-week{height:60vh;max-height:60vh;overflow:hidden}.calendar-tabs .q-tab-pane{border:none}", ""]);

// exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(90);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("4af4380a", content, true, {});

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-event{width:100%;height:100%;padding:2px;text-overflow:clip;border-radius:.25em;margin:1px 0;font-size:.8em;cursor:pointer}.calendar-event-month{white-space:nowrap}", ""]);

// exports


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.getEventClass,style:(_vm.getEventStyle),on:{"mouseup":_vm.handleClick}},[(!_vm.isAllDayEvent() && _vm.showTime)?_c('span',{staticClass:"calendar-event-start-time"},[_vm._v("\n        "+_vm._s(_vm.formatTime(_vm.eventObject.start.dateObject))+"\n    ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"calendar-event-summary"},[_vm._v("\n        "+_vm._s(_vm.eventObject.summary)+"\n    ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("06c5a4b6", content, true, {});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-month .calendar-time-width{width:4em}.calendar-month .calendar-time-margin{margin-left:4em}.calendar-month .calendar-header .calendar-header-label{font-size:1.25em;font-weight:700}.calendar-month .calendar-content{padding:4px 12px}.calendar-month .calendar-content .calendar-cell{width:$cellWidth;max-width:$cellWidth;padding:2px}.calendar-month .calendar-content .calendar-day-labels .calendar-day-label{font-size:1.1em}.calendar-month .calendar-content .calendar-day-labels .calendar-day-label-current{font-weight:700}.calendar-month .calendar-content .calendar-multi-day{border-bottom:1px solid #bdbdbd}.calendar-month .calendar-content .calendar-multi-day :last-child{border-bottom:none}.calendar-month .calendar-content .calendar-day{background-color:none;height:5em;max-height:5em;overflow:hidden;width:14.285%}.calendar-month .calendar-content .calendar-day .calendar-day-number{font-size:.9em;height:2em;width:2em;vertical-align:middle;padding-top:.25em;padding-left:.25em}.calendar-month .calendar-content .calendar-day-current{background-color:#f4f4f4}.calendar-month .calendar-content .calendar-day-weekend{background-color:#fafafa}", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("972bc512", content, true, {});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".quantity-bubble-holder{position:relative;display:inline-block}.quantity-bubble-holder .quantity-bubble{border-radius:50%;font-size:.75em;text-align:center;font-weight:700;height:2em;width:2em;position:absolute;top:0;left:0}.quantity-bubble-holder .quantity-bubble .quantity-value{vertical-align:middle}.quantity-bubble-holder .quantity-bubble-offset{bottom:.25em;left:-.25em}", ""]);

// exports


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.quantity > 0)?_c('div',{staticClass:"quantity-bubble-holder"},[_vm._v("\n     \n    "),_c('div',{class:_vm.bubbleClass},[_c('div',{staticClass:"quantity-value"},[_vm._v("\n            "+_vm._s(_vm.quantity)+"\n        ")])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(98);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("4cee1be3", content, true, {});

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-day-labels .calendar-day-label{font-size:1.1em;padding-left:4px}.calendar-day-labels .calendar-day-label .calendar-day-label-date{font-size:1.75em}.calendar-day-labels .calendar-day-label-current{font-weight:700}", ""]);

// exports


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-day-labels row no-wrap justify-end"},_vm._l((_vm.weekDateArray),function(thisDay){return _c('div',{class:{
          'calendar-day-label': true,
          'calendar-cell': true,
          'calendar-day-label-current': _vm.isCurrentDayLabel(thisDay),
          'cursor-pointer': _vm.calendarDaysAreClickable
        },style:({
          'width': _vm.cellWidth,
          'max-width': _vm.cellWidth,
        }),on:{"click":function($event){_vm.handleDayClick(thisDay)}}},[_vm._v("\n        "+_vm._s(_vm.formatDate(thisDay, 'ddd'))+"\n        "),(_vm.showDates)?_c('div',{staticClass:"calendar-day-label-date"},[_vm._v("\n            "+_vm._s(_vm.formatDate(thisDay, 'D'))+"\n        ")]):_vm._e()])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(101);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("cfcc919a", content, true, {});

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-header .calendar-month-year{font-size:1.25em;font-weight:700}", ""]);

// exports


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-header col-auto row justify-between items-center"},[_c('div',{staticClass:"calendar-header-left col-auto"},[_c('q-btn',{attrs:{"icon":"chevron_left","color":"primary","round":"","flat":""},on:{"click":function($event){_vm.doMoveTimePeriod(_vm.timePeriodUnit, -_vm.timePeriodAmount)}}})],1),_vm._v(" "),_c('div',{staticClass:"calendar-header-label"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"calendar-header-right col-auto"},[_c('q-btn',{attrs:{"icon":"chevron_right","color":"primary","round":"","flat":""},on:{"click":function($event){_vm.doMoveTimePeriod(_vm.timePeriodUnit, _vm.timePeriodAmount)}}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(104);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("140584bb", content, true, {});

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-event-detail .ced-list-title{font-size:1em}.calendar-event-detail .ced-list-subtitle{font-size:.8em;opacity:.8}.calendar-event-detail .ced-top{padding:.25em 0 1em}.calendar-event-detail .ced-top .ced-top-title{font-size:1.25em;margin-left:64px}.calendar-event-detail .ced-content{font-size:1em}.calendar-event-detail .ced-nested-item{padding-left:0}", ""]);

// exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(107);
__webpack_require__(130);
module.exports = __webpack_require__(132);


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(108);
var global = __webpack_require__(28);
var hide = __webpack_require__(31);
var Iterators = __webpack_require__(35);
var TO_STRING_TAG = __webpack_require__(29)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(109);
var step = __webpack_require__(110);
var Iterators = __webpack_require__(35);
var toIObject = __webpack_require__(41);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(61)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(60);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(28);
var core = __webpack_require__(43);
var ctx = __webpack_require__(114);
var hide = __webpack_require__(31);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(115);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(37) && !__webpack_require__(62)(function () {
  return Object.defineProperty(__webpack_require__(63)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(45);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(31);


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(120);
var descriptor = __webpack_require__(64);
var setToStringTag = __webpack_require__(68);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(31)(IteratorPrototype, __webpack_require__(29)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(36);
var dPs = __webpack_require__(121);
var enumBugKeys = __webpack_require__(67);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(63)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(127).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(44);
var anObject = __webpack_require__(36);
var getKeys = __webpack_require__(122);

module.exports = __webpack_require__(37) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(123);
var enumBugKeys = __webpack_require__(67);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(38);
var toIObject = __webpack_require__(41);
var arrayIndexOf = __webpack_require__(124)(false);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(41);
var toLength = __webpack_require__(125);
var toAbsoluteIndex = __webpack_require__(126);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(46);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(28).document;
module.exports = document && document.documentElement;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(38);
var toObject = __webpack_require__(129);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(42);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(131)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(61)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(46);
var defined = __webpack_require__(42);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(36);
var get = __webpack_require__(133);
module.exports = __webpack_require__(43).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(134);
var ITERATOR = __webpack_require__(29)('iterator');
var Iterators = __webpack_require__(35);
module.exports = __webpack_require__(43).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(60);
var TAG = __webpack_require__(29)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-modal',{staticClass:"calendar-event-detail",model:{value:(_vm.modalIsOpen),callback:function ($$v) {_vm.modalIsOpen=$$v},expression:"modalIsOpen"}},[_c('div',{class:_vm.getTopColorClasses},[_c('div',{staticClass:"row justify-end items-start ced-toolbar"},[_c('q-btn',{attrs:{"flat":"","label":"Close"},on:{"click":function($event){_vm.__close()}}},[_c('q-icon',{attrs:{"name":"close"}})],1)],1),_vm._v(" "),(_vm.eventObject.summary)?_c('div',{staticClass:"ced-top-title"},[_vm._v("\n            "+_vm._s(_vm.eventObject.summary)+"\n        ")]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"ced-content"},[_c('q-list',[_c('q-item',[_c('q-item-side',[_c('q-item-tile',{attrs:{"icon":"access_time"}})],1),_vm._v(" "),_c('q-item-main',[(_vm.eventObject.start && _vm.eventObject.start.dateObject)?_c('div',{staticClass:"ced-list-title"},[_vm._v("\n                        "+_vm._s(_vm.formatDateTime(_vm.eventObject.start.dateObject, 'dddd, MMMM D'))+"\n                    ")]):_vm._e(),_vm._v(" "),(_vm.eventObject.end && _vm.eventObject.end.dateObject && _vm.eventObject.start.isAllDay !== true)?_c('div',{staticClass:"ced-list-subtitle"},[_vm._v("\n                        "+_vm._s(_vm.formatDateTime(_vm.eventObject.start.dateObject, 'h:mm a'))+" - "+_vm._s(_vm.formatDateTime(_vm.eventObject.end.dateObject, 'h:mm a'))+"\n                    ")]):_vm._e()])],1),_vm._v(" "),(_vm.textExists('location'))?_c('q-item',[_c('q-item-side',[_c('q-item-tile',{attrs:{"icon":"location_on"}})],1),_vm._v(" "),_c('q-item-main',{staticClass:"ced-list-title"},[_vm._v("\n                    "+_vm._s(_vm.eventObject.location)+"\n                ")])],1):_vm._e(),_vm._v(" "),(_vm.countResources > 0)?_c('q-item',[_c('q-item-side',[_c('q-item-tile',{attrs:{"icon":"business"}})],1),_vm._v(" "),_c('q-item-main',_vm._l((_vm.eventObject.attendees),function(thisAttendee){return (thisAttendee.resource)?_c('q-item',{key:thisAttendee.id,staticClass:"ced-nested-item",attrs:{"dense":""}},[_vm._v("\n                        "+_vm._s(thisAttendee.displayName)+"\n                    ")]):_vm._e()}))],1):_vm._e(),_vm._v(" "),(_vm.countAttendees > 0)?_c('q-item',{attrs:{"multiline":""}},[_c('q-item-side',[_c('q-item-tile',{attrs:{"icon":"people"}})],1),_vm._v(" "),_c('q-item-main',{staticClass:"ced-list-title"},[_vm._v("\n                    "+_vm._s(_vm.countAttendees)+" guest"),(_vm.countAttendees > 1)?[_vm._v("s")]:_vm._e(),_vm._v(" "),_vm._l((_vm.eventObject.attendees),function(thisAttendee){return (!thisAttendee.resource)?_c('q-item',{key:thisAttendee.id,staticClass:"ced-nested-item",attrs:{"dense":""}},[_c('q-item-side',{attrs:{"inverted":"","icon":"person","color":"secondary","text-color":"secondary","textColor":"secondary"}}),_vm._v(" "),_c('q-item-main',{staticClass:"ced-list-title"},[(thisAttendee.displayName && thisAttendee.displayName.length > 0)?[_vm._v("\n                                "+_vm._s(thisAttendee.displayName)+"\n                            ")]:[_vm._v("\n                                "+_vm._s(thisAttendee.email)+"\n                            ")]],2)],1):_vm._e()})],2)],1):_vm._e(),_vm._v(" "),(_vm.textExists('description'))?_c('q-item',{attrs:{"multiline":""}},[_c('q-item-side',[_c('q-item-tile',{attrs:{"icon":"format_align_left"}})],1),_vm._v(" "),_c('q-item-main',{staticClass:"ced-list-title"},[_vm._v("\n                    "+_vm._s(_vm.eventObject.description)+"\n                ")])],1):_vm._e()],1)],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-month"},[_c('calendar-header-nav',{attrs:{"time-period-unit":"month","time-period-amount":1,"move-time-period-emit":_vm.eventRef + ':navMovePeriod'}},[_vm._v("\n        "+_vm._s(_vm.formatDate(_vm.workingDate, 'MMMM'))+" "+_vm._s(_vm.formatDate(_vm.workingDate, 'YYYY'))+"\n    ")]),_vm._v(" "),_c('div',{staticClass:"calendar-content"},[_c('calendar-day-labels',{attrs:{"number-of-days":7,"start-date":_vm.workingDate,"force-start-of-week":true}}),_vm._v(" "),_vm._l((_vm.weekArray),function(thisWeek,index){return _c('div',{class:{
                'calendar-multi-day': true,
                'row': true,
                'no-wrap': true,
                'items-start': true,
                'justify-end': index < (_vm.weekArray.length - 1),
                'justify-start': index === (_vm.weekArray.length - 1)
            }},_vm._l((thisWeek),function(thisDay){return _c('div',{class:{
                    'calendar-day': true,
                    'calendar-cell': true,
                    'calendar-day-weekend': _vm.isWeekendDay(thisDay.dateObject),
                    'calendar-day-current': _vm.isCurrentDate(thisDay.dateObject)
                    }},[(_vm.isCurrentDate(thisDay.dateObject))?_c('div',{class:{ 'cursor-pointer': _vm.calendarDaysAreClickable },on:{"click":function($event){_vm.handleDayClick(thisDay.dateObject)}}},[_c('quantity-bubble',{attrs:{"quantity":thisDay.dateObject.getDate(),"offset":false}})],1):_c('div',{class:{
                        'calendar-day-number': true,
                        'cursor-pointer': _vm.calendarDaysAreClickable
                    },on:{"click":function($event){_vm.handleDayClick(thisDay.dateObject)}}},[_vm._v("\n                    "+_vm._s(thisDay.dateObject.getDate())+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"calendar-day-content"},_vm._l((_vm.dateGetEvents(thisDay.dateObject)),function(thisEvent){return (_vm.hasAnyEvents(thisDay.dateObject))?_c('div',[_c('calendar-event',{attrs:{"event-object":thisEvent,"month-style":true,"event-ref":_vm.eventRef}})],1):_vm._e()}))])}))})],2),_vm._v(" "),_c('calendar-event-detail',{ref:"defaultEventDetail",attrs:{"event-object":_vm.eventDetailEventObject}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("64016d7e", content, true, {});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-multi-day-component .calendar-time-margin{margin-left:4em}.calendar-multi-day-component .calendar-header .calendar-header-label{font-size:1.25em;font-weight:700}.calendar-multi-day-component .calendar-day .calendar-day-column-label{width:4em}.calendar-multi-day-component .calendar-day .calendar-day-column-content{border-right:1px dotted #bdbdbd;position:relative}.calendar-multi-day-component .calendar-day .calendar-day-time{padding-right:.5em;border-right:1px solid #bdbdbd}.calendar-multi-day-component .calendar-day .calendar-day-time-content{border-top:1px dotted #bdbdbd}", ""]);

// exports


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(140);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("9e00ce86", content, true, {});

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-day{position:relative}.calendar-day .calendar-day-cell-height{height:5rem;max-height:5rem}.calendar-day .calendar-day-column-content{position:relative}.calendar-day .calendar-day-column-current{background-color:#f4f4f4}.calendar-day .calendar-day-column-weekend{background-color:#fafafa}.calendar-day .calendar-day-time{padding-right:.5em;border-right:1px solid #bdbdbd}.calendar-day .calendar-day-time-content{border-top:1px dotted #bdbdbd}.calendar-day .calendar-day-event-overlap{margin-left:1px}.calendar-day .calendar-day-event-overlap-first{margin-left:0}", ""]);

// exports


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.columnCss},[_vm._l((24),function(thisHour){return _c('div',{style:(_vm.getCellStyle)},[_c('div',{staticClass:"calendar-day-time-content"})])}),_vm._v(" "),_vm._l((_vm.dateEvents),function(eventObject){return (_vm.dateEvents.length > 0)?_c('div',{class:_vm.calculateDayEventClass(eventObject),style:(_vm.calculateDayEventStyle(eventObject))},[(!eventObject.start.isAllDay)?_c('calendar-event',{attrs:{"event-object":eventObject,"event-ref":_vm.eventRef}}):_vm._e()],1):_vm._e()})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("6de734ba", content, true, {});

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-day-column-label col-auto"},_vm._l((24),function(thisHour){return _c('div',{staticClass:"calendar-day-time",style:({ 'height': _vm.dayCellHeight, 'max-height': _vm.dayCellHeight })},[_vm._v("\n        "+_vm._s(_vm.formatTimeFromNumber(thisHour - 1))+"\n    ")])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("113d17be", content, true, {});

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-day-labels .calendar-day-label{font-size:1.1em}.calendar-day-labels .calendar-day-label .calendar-day-label-date{font-size:1.75em}.calendar-day-labels .calendar-day-label-current{font-weight:700}", ""]);

// exports


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-all-day-events row no-wrap justify-end items-start"},_vm._l((_vm.numberOfDays),function(addDays,index){return _c('div',{style:({
          'width': _vm.cellWidth,
          'max-width': _vm.cellWidth
        })},[_vm._l((_vm.dateGetEvents(_vm.addDaysToDate(_vm.workingDate, addDays - 1))),function(thisEvent){return (thisEvent.start.isAllDay)?[_c('calendar-event',{attrs:{"event-object":thisEvent,"show-time":false,"event-ref":_vm.eventRef}})]:_vm._e()})],2)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-multi-day-component column fit no-wrap"},[(_vm.numDays === 1)?[_c('calendar-header-nav',{attrs:{"time-period-unit":"days","time-period-amount":_vm.navDays,"move-time-period-emit":_vm.eventRef + ':navMovePeriod'}},[_vm._v("\n            "+_vm._s(_vm.formatDate(_vm.workingDate, 'dddd, MMMM D YYYY'))+"\n        ")])]:[_c('calendar-header-nav',{attrs:{"time-period-unit":"days","time-period-amount":_vm.navDays,"move-time-period-emit":_vm.eventRef + ':navMovePeriod'}},[_vm._v("\n            "+_vm._s(_vm.getHeaderLabel())+"\n        ")])],_vm._v(" "),(_vm.numDays > 1)?_c('div',{staticClass:"calendar-time-margin"},[_c('calendar-day-labels',{attrs:{"number-of-days":_vm.numDays,"show-dates":true,"start-date":_vm.workingDate,"force-start-of-week":_vm.forceStartOfWeek,"fullComponentRef":_vm.fullComponentRef}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"calendar-time-margin"},[_c('calendar-all-day-events',{attrs:{"number-of-days":_vm.numDays,"start-date":_vm.weekDateArray[0],"parsed":_vm.parsed,"event-ref":_vm.eventRef}})],1),_vm._v(" "),_c('q-scroll-area',{class:_vm.getScrollClass,style:(_vm.getScrollStyle)},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"calendar-day row"},[_c('calendar-time-label-column'),_vm._v(" "),_c('div',{staticClass:"calendar-multiple-days col row"},_vm._l((_vm.weekDateArray),function(thisDate){return _c('calendar-day-column',{style:({ 'width': _vm.dayCellWidth }),attrs:{"start-date":thisDate,"date-events":_vm.dateGetEvents(thisDate),"column-css-class":"calendar-day-column-content","event-ref":_vm.eventRef}})}))],1)])]),_vm._v(" "),_c('calendar-event-detail',{ref:"defaultEventDetail",attrs:{"event-object":_vm.eventDetailEventObject}})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(150);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("0f21b30e", content, true, {});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-agenda .calendar-agenda-month{font-size:1.5em;font-weight:700;background:#00f;color:#fff;padding:1em 0 2em;margin-bottom:.5em}.calendar-agenda .calendar-agenda-week{font-size:1.2em;font-weight:700;color:gray;margin-bottom:.5em}.calendar-agenda .calendar-agenda-day{margin-bottom:1em}.calendar-agenda .calendar-agenda-day .calendar-agenda-side{width:4em}.calendar-agenda .calendar-agenda-day .calendar-agenda-side .calendar-agenda-side-date{font-size:1.75em;font-weight:700}.calendar-agenda .calendar-agenda-day .calendar-agenda-side .calendar-agenda-side-day{font-size:1.1em}.calendar-agenda .calendar-agenda-day .calendar-agenda-events{width:100%}.calendar-agenda .calendar-agenda-day .calendar-agenda-event{width:100%;padding:.5em;margin-bottom:.5em;text-overflow:clip;border-radius:.25em;cursor:pointer}.calendar-agenda .calendar-agenda-day .calendar-agenda-event .calendar-agenda-event-summary{font-weight:700}", ""]);

// exports


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(152);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("0845837c", content, true, {});

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.getEventClass,style:(_vm.getEventStyle),on:{"mouseup":_vm.handleClick}},[_c('div',{staticClass:"calendar-agenda-event-summary"},[_vm._v("\n        "+_vm._s(_vm.eventObject.summary)+"\n    ")]),_vm._v(" "),(_vm.showTime && !_vm.eventObject.start.isAllDay)?_c('div',{staticClass:"calendar-agenda-event-time"},[_vm._v("\n        "+_vm._s(_vm.formatTimeRange(_vm.eventObject.start.dateObject, _vm.eventObject.end.dateObject))+"\n    ")]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-agenda column fit"},[_c('q-infinite-scroll',{style:({ 'height': _vm.scrollHeight, 'overflow':'auto' }),attrs:{"inline":"","handler":_vm.loadMore}},[_vm._l((_vm.localNumDays),function(daysForward){return _c('div',{key:daysForward},[(_vm.forwardDate = _vm.getDaysForwardDate(daysForward - 1))?_c('div',[(_vm.isFirstOfMonth(_vm.forwardDate))?_c('div',{staticClass:"row calendar-agenda-month",style:({ 'padding-left': _vm.leftMargin })},[_vm._v("\n                    "+_vm._s(_vm.formatDate(_vm.forwardDate, 'MMMM YYYY'))+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.isFirstDayOfWeek(_vm.forwardDate))?_c('div',{staticClass:"row calendar-agenda-week",style:({ 'margin-left': _vm.leftMargin })},[_vm._v("\n                    "+_vm._s(_vm.getWeekTitle(_vm.forwardDate))+"\n                ")]):_vm._e(),_vm._v(" "),(_vm.dateGetEvents(_vm.forwardDate).length > 0)?_c('div',{staticClass:"col row items-start calendar-agenda-day"},[_c('div',{staticClass:"col-auto calendar-agenda-side",class:{ 'cursor-pointer': _vm.calendarDaysAreClickable },style:({ 'width': _vm.leftMargin, 'max-width': _vm.leftMargin }),on:{"click":function($event){_vm.handleDayClick(_vm.getDaysForwardDate(daysForward - 1))}}},[_c('div',{staticClass:"calendar-agenda-side-date"},[_vm._v("\n                            "+_vm._s(_vm.formatDate(_vm.forwardDate, 'D'))+"\n                        ")]),_vm._v(" "),_c('div',{staticClass:"calendar-agenda-side-day"},[_vm._v("\n                            "+_vm._s(_vm.formatDate(_vm.forwardDate, 'ddd'))+"\n                        ")])]),_vm._v(" "),_c('div',{staticClass:"col row calendar-agenda-events"},[_vm._l((_vm.dateGetEvents(_vm.forwardDate)),function(thisEvent){return (_vm.dateGetEvents(_vm.forwardDate))?[_c('calendar-agenda-event',{attrs:{"event-object":thisEvent,"event-ref":_vm.eventRef}})]:_vm._e()})],2)]):_vm._e()]):_vm._e()])}),_vm._v(" "),_c('q-spinner-dots',{attrs:{"slot":"message","size":40},slot:"message"})],2),_vm._v(" "),_c('calendar-event-detail',{ref:"defaultEventDetail",attrs:{"event-object":_vm.eventDetailEventObject}})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-test"},[_c('q-tabs',{ref:"fullCalendarTabs",staticClass:"calendar-tabs",attrs:{"inverted":""}},[_c('q-tab',{attrs:{"slot":"title","name":"tab-month","icon":"view_module","label":"Month","default":""},slot:"title"}),_vm._v(" "),_c('q-tab',{attrs:{"slot":"title","name":"tab-week-component","icon":"view_week","label":"Week"},slot:"title"}),_vm._v(" "),_c('q-tab',{attrs:{"slot":"title","name":"tab-days-component","icon":"view_column","label":"3 Day"},slot:"title"}),_vm._v(" "),_c('q-tab',{attrs:{"slot":"title","name":"tab-single-day-component","icon":"view_day","label":"Day"},slot:"title"}),_vm._v(" "),_c('q-tab',{attrs:{"slot":"title","name":"tab-agenda","icon":"view_agenda","label":"Agenda"},slot:"title"}),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-month",attrs:{"name":"tab-month"}},[_c('calendar-month',{ref:'month-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"event-ref":_vm.eventRef,"fullComponentRef":_vm.eventRef}})],1),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-week",attrs:{"name":"tab-week-component"}},[_c('calendar-multi-day',{ref:'week-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"num-days":7,"nav-days":7,"force-start-of-week":true,"event-ref":_vm.eventRef,"fullComponentRef":_vm.eventRef}})],1),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-week",attrs:{"name":"tab-days-component"}},[_c('calendar-multi-day',{ref:'days-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"num-days":3,"nav-days":1,"force-start-of-week":false,"event-ref":_vm.eventRef,"fullComponentRef":_vm.eventRef}})],1),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-week",attrs:{"name":"tab-single-day-component"}},[_c('calendar-multi-day',{ref:'day-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"num-days":1,"nav-days":1,"force-start-of-week":false,"event-ref":_vm.eventRef,"fullComponentRef":_vm.eventRef}})],1),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-agenda",attrs:{"name":"tab-agenda"}},[_c('calendar-agenda',{ref:'agenda-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"num-days":30,"event-ref":_vm.eventRef,"scroll-height":"300px","fullComponentRef":_vm.eventRef}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',{ref:"layout",attrs:{"view":"lHh Lpr fff","left-class":{'bg-grey-2': true}}},[_c('q-toolbar',{attrs:{"slot":"header"},slot:"header"},[_c('q-toolbar-title',[_vm._v("\n      Quasar Calendar Demo\n      "),_c('div',{attrs:{"slot":"subtitle"},slot:"subtitle"},[_vm._v("Running on Quasar v"+_vm._s(_vm.$q.version))])])],1),_vm._v(" "),_c('div',{staticClass:"layout-padding"},[_c('q-card',[_c('q-card-title',[_vm._v("\n              Full calendar component\n              "),_c('span',{attrs:{"slot":"subtitle"},slot:"subtitle"},[_vm._v("\n                  A multifunction component that displays calendar information in a variety of predefined formats.\n              ")])]),_vm._v(" "),_c('q-card-main',[_c('calendar',{attrs:{"event-array":_vm.eventArray}})],1)],1),_vm._v(" "),_c('q-card',[_c('q-card-title',[_vm._v("\n              Individual month view component\n              "),_c('span',{attrs:{"slot":"subtitle"},slot:"subtitle"},[_vm._v("\n                  Example of a single component displayed. Acts independently of any other calendar component on the same page.\n              ")])]),_vm._v(" "),_c('q-card-main',[_c('calendar-month',{attrs:{"event-array":_vm.eventArray}})],1)],1),_vm._v(" "),_c('q-card',[_c('q-card-title',[_vm._v("\n              Individual multi-day / week view component\n              "),_c('span',{attrs:{"slot":"subtitle"},slot:"subtitle"},[_vm._v("\n                  The multi-day component. This can be configured as a proper full-week display (shown), a single day or a multi-day. The number of days shown and the number of days moved in the navigation are adjustable.\n              ")])]),_vm._v(" "),_c('q-card-main',[_c('calendar-multi-day',{attrs:{"event-array":_vm.eventArray,"scrollHeight":"400px"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
]));