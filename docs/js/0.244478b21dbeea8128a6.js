webpackJsonp([0],Array(23).concat([
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Hello_vue__ = __webpack_require__(34);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75339f2e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__ = __webpack_require__(97);
function injectStyle (ssrContext) {
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_75339f2e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Hello_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_has__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_has___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_has__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(4);


const defaultParsed = {
  byAllDayStartDate: {},
  byStartDate: {},
  byId: {}
}
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {},
  methods: {
    formatDate: function (dateObject, formatString) {
      return __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].formatDate(dateObject, formatString)
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
          checkDate = __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].addToDate(thisDateObject, { days: counter })
        }
        else {
          checkDate = __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].subtractFromDate(thisDateObject, { days: counter })
        }
        if (__WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getDayOfWeek(checkDate) === weekdayNum) {
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
          __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].addToDate(bookendDates.first, { days: counter })
        )
      }
      return returnArray
    },
    getWeekDateArray: function (numberOfDays) {
      let returnArray = []
      for (let counter = 0; counter <= numberOfDays - 1; counter++) {
        returnArray.push(
          __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].addToDate(this.workingDate, { days: counter })
        )
      }
      return returnArray
    },
    formatTimeFromNumber: function (hourNumber) {
      // TODO: this should be able to handle 24 hour and alternate time formats
      return __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].formatDate(
        __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].adjustDate(new Date(), { hours: hourNumber }),
        'ha'
      )
    },
    moveTimePeriod: function (params) {
      let paramObj = {}
      paramObj[params.unitType] = params.amount
      this.workingDate = __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].addToDate(this.workingDate, paramObj)
    },
    getDayOfWeek: function () {
      return this.createThisDate(this.dayNumber).format('dddd')
    },
    getEventById: function (eventId) {
      return this.parsed.byId[eventId]
    },
    formatToSqlDate: function (dateObject) {
      return __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].formatDate(dateObject, 'YYYY-MM-DD')
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
    createThisDate: function (dateNum) {
      return this.parseDateParams(dateNum)
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
        return __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getDateDiff(
          __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].addToDate(a.start.dateObject, { milliseconds: a.duration }),
          __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].addToDate(b.start.dateObject, { milliseconds: b.duration }),
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
        return __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getDateDiff(
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
    isCurrentDate: function (thisDateObject) {
      let now = new Date()
      return __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].isSameDate(now, thisDateObject, 'day')
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarEvent_vue__ = __webpack_require__(36);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_660dc023_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarEvent_vue__ = __webpack_require__(68);
function injectStyle (ssrContext) {
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_660dc023_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarEvent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_QuantityBubble_vue__ = __webpack_require__(37);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5fe784ba_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_QuantityBubble_vue__ = __webpack_require__(67);
function injectStyle (ssrContext) {
  __webpack_require__(65)
}
var normalizeComponent = __webpack_require__(3)
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarDayLabels_vue__ = __webpack_require__(40);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_642d0e82_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarDayLabels_vue__ = __webpack_require__(73);
function injectStyle (ssrContext) {
  __webpack_require__(71)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_642d0e82_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarDayLabels_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarHeaderNav_vue__ = __webpack_require__(41);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_5469813f_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarHeaderNav_vue__ = __webpack_require__(76);
function injectStyle (ssrContext) {
  __webpack_require__(74)
}
var normalizeComponent = __webpack_require__(3)
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarDayColumn_vue__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6a62c2fd_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarDayColumn_vue__ = __webpack_require__(82);
function injectStyle (ssrContext) {
  __webpack_require__(80)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_6a62c2fd_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarDayColumn_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarTimeLabelColumn_vue__ = __webpack_require__(45);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_1b91676a_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarTimeLabelColumn_vue__ = __webpack_require__(85);
function injectStyle (ssrContext) {
  __webpack_require__(83)
}
var normalizeComponent = __webpack_require__(3)
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
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar_calendar__ = __webpack_require__(57);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  components: {
    QLayout: __WEBPACK_IMPORTED_MODULE_0_quasar__["l" /* QLayout */],
    QToolbar: __WEBPACK_IMPORTED_MODULE_0_quasar__["t" /* QToolbar */],
    QToolbarTitle: __WEBPACK_IMPORTED_MODULE_0_quasar__["u" /* QToolbarTitle */],
    QBtn: __WEBPACK_IMPORTED_MODULE_0_quasar__["b" /* QBtn */],
    QIcon: __WEBPACK_IMPORTED_MODULE_0_quasar__["g" /* QIcon */],
    QList: __WEBPACK_IMPORTED_MODULE_0_quasar__["m" /* QList */],
    QListHeader: __WEBPACK_IMPORTED_MODULE_0_quasar__["n" /* QListHeader */],
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
        start: {
          dateTime: '2018-02-16 14:00:00',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-16 16:30:00',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }, {
        id: 3,
        summary: 'Test event 2',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-16 17:30:00',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-16 18:30:00',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }, {
        id: 4,
        summary: 'Test event 3',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13 10:30:00',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13 13:00:00',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }, {
        id: 5,
        summary: 'All day event',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13 00:00:00',
          isAllDay: true,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13 00:00:00',
          isAllDay: true,
          timeZone: 'American/New_York'
        }
      }, {
        id: 6,
        summary: 'Overlapping event',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13 11:30:00',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13 12:30:00',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }, {
        id: 7,
        summary: 'Some event',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13 06:30:00',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13 07:30:00',
          isAllDay: false,
          timeZone: 'American/New_York'
        }
      }, {
        id: 8,
        summary: 'Some other event',
        description: 'Some extra info goes here',
        start: {
          dateTime: '2018-02-13 16:00:00',
          isAllDay: false,
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: '2018-02-13 17:00:00',
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
      Object(__WEBPACK_IMPORTED_MODULE_0_quasar__["z" /* openURL */])(url);
    },

    moveSampleDatesAhead: function moveSampleDatesAhead() {
      console.debug('moveSampleDatesAhead called');
      var dateSet1 = [1, 3],
          dateSet2 = [4, 5, 6, 7, 8],
          addDays1 = 2,
          addDays2 = 5;
      for (var counter = 0; counter < this.eventArray.length; counter++) {
        var currentItem = this.eventArray[counter];

        console.debug(currentItem.id, dateSet1.indexOf(currentItem.id));
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
      dateObject = __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].adjustDate(dateObject, {
        year: now.getFullYear(),
        month: now.getMonth() + 1,
        date: now.getDate()
      });
      if (addDays !== undefined) {
        dateObject = __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].addToDate(dateObject, {
          days: addDays
        });
      }
      return dateObject;
    },
    getSqlDateFormat: function getSqlDateFormat(dateObject) {
      return __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(dateObject, 'YYYY-MM-DD HH:mm:ss');
    }
  },
  created: function created() {
    this.moveSampleDatesAhead();
  },
  beforeDestroy: function beforeDestroy() {}
});

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CalendarMonth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarMultiDay__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CalendarAgenda__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarDayColumn__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CalendarTimeLabelColumn__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CalendarDayLabels__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CalendarHeaderNav__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_quasar__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__QuantityBubble__ = __webpack_require__(28);













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
    QuantityBubble: __WEBPACK_IMPORTED_MODULE_10__QuantityBubble__["a" /* default */],
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_1__CalendarEvent__["a" /* default */],
    CalendarMonth: __WEBPACK_IMPORTED_MODULE_2__CalendarMonth__["a" /* default */],
    CalendarMultiDay: __WEBPACK_IMPORTED_MODULE_3__CalendarMultiDay__["a" /* default */],
    CalendarAgenda: __WEBPACK_IMPORTED_MODULE_4__CalendarAgenda__["a" /* default */],
    CalendarDayColumn: __WEBPACK_IMPORTED_MODULE_5__CalendarDayColumn__["a" /* default */],
    CalendarTimeLabelColumn: __WEBPACK_IMPORTED_MODULE_6__CalendarTimeLabelColumn__["a" /* default */],
    CalendarDayLabels: __WEBPACK_IMPORTED_MODULE_7__CalendarDayLabels__["a" /* default */],
    CalendarHeaderNav: __WEBPACK_IMPORTED_MODULE_8__CalendarHeaderNav__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_9_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_9_quasar__["v" /* QTooltip */],
    QTabs: __WEBPACK_IMPORTED_MODULE_9_quasar__["s" /* QTabs */],
    QTab: __WEBPACK_IMPORTED_MODULE_9_quasar__["q" /* QTab */],
    QTabPane: __WEBPACK_IMPORTED_MODULE_9_quasar__["r" /* QTabPane */],
    QScrollArea: __WEBPACK_IMPORTED_MODULE_9_quasar__["o" /* QScrollArea */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */]],
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
      __WEBPACK_IMPORTED_MODULE_9_quasar__["a" /* Events */].$on(this.eventRef + ':navMovePeriod', this.calPackageMoveTimePeriod);
    },
    calPackageMoveTimePeriod: function calPackageMoveTimePeriod(params) {
      this.moveTimePeriod(params);
      this.$emit('calendar' + ':navMovePeriod', params);
    }
  },
  mounted: function mounted() {
    this.mountSetDate();
    this.parseEventList();
    this.setupEventsHandling();
  }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QuantityBubble__ = __webpack_require__(28);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarEvent',
  props: {
    eventObject: {
      type: Object,
      default: this.blankCalendarEvent
    },
    backgroundColor: {
      type: String,
      default: 'blue'
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
    }
  },
  components: {
    QuantityBubble: __WEBPACK_IMPORTED_MODULE_1__QuantityBubble__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_0_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_0_quasar__["v" /* QTooltip */]
  },
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
      return {
        'background-color': this.backgroundColor,
        'color': this.textColor
      };
    },
    getEventClass: function getEventClass() {
      return {
        'calendar-event': true,
        'calendar-event-month': this.monthStyle
      };
    }
  },
  methods: {
    formatTime: function formatTime(startTime) {
      var returnString = '';
      returnString += __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(startTime, 'h');
      if (startTime.getMinutes() > 0) {
        returnString += ':' + __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(startTime, 'mm');
      }
      returnString += __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(startTime, 'a').slice(0, 1);
      return returnString;
    },
    isAllDayEvent: function isAllDayEvent() {
      return this.eventObject.start.isAllDay;
    },
    handleClick: function handleClick(e) {
      this.$emit('click', this.eventObject);
    }
  },
  mounted: function mounted() {}
});

/***/ }),
/* 37 */
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarMonth_vue__ = __webpack_require__(39);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_dbd000ea_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarMonth_vue__ = __webpack_require__(77);
function injectStyle (ssrContext) {
  __webpack_require__(69)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_dbd000ea_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarMonth_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__QuantityBubble__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CalendarDayLabels__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarHeaderNav__ = __webpack_require__(30);








/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarMonth',
  components: {
    QuantityBubble: __WEBPACK_IMPORTED_MODULE_2__QuantityBubble__["a" /* default */],
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_3__CalendarEvent__["a" /* default */],
    CalendarDayLabels: __WEBPACK_IMPORTED_MODULE_4__CalendarDayLabels__["a" /* default */],
    CalendarHeaderNav: __WEBPACK_IMPORTED_MODULE_5__CalendarHeaderNav__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_1_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_1_quasar__["v" /* QTooltip */],
    QTabs: __WEBPACK_IMPORTED_MODULE_1_quasar__["s" /* QTabs */],
    QTab: __WEBPACK_IMPORTED_MODULE_1_quasar__["q" /* QTab */],
    QTabPane: __WEBPACK_IMPORTED_MODULE_1_quasar__["r" /* QTabPane */],
    QScrollArea: __WEBPACK_IMPORTED_MODULE_1_quasar__["o" /* QScrollArea */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */]],
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
    }
  },
  data: function data() {
    return {
      dayCellHeight: 5,
      dayCellHeightUnit: 'rem',
      workingDate: new Date(),
      weekArray: [],
      parsed: this.getDefaultParsed()
    };
  },

  computed: {},
  methods: {
    handleStartChange: function handleStartChange(val, oldVal) {
      Object(__WEBPACK_IMPORTED_MODULE_1_quasar__["x" /* debounce */])(this.doUpdate, 300);
    },
    doUpdate: function doUpdate() {
      this.mountSetDate();
      this.generateCalendarCellArray();
    },
    getCalendarCellArray: function getCalendarCellArray(monthNumber, yearNumber) {
      var currentDay = __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].buildDate({
        year: yearNumber,
        month: monthNumber + 1,
        date: 1
      });
      var currentWeekOfYear = __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getWeekOfYear(currentDay);
      var weekArray = [];
      var currentWeekArray = [];
      var thisDayObject = {};
      for (var thisDateOfMonth = 1; thisDateOfMonth <= 31; thisDateOfMonth++) {
        currentDay = __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].buildDate({
          year: yearNumber,
          month: monthNumber + 1,
          date: thisDateOfMonth
        });
        if (currentDay.getFullYear() === yearNumber && currentDay.getMonth() === monthNumber) {
          if (__WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getWeekOfYear(currentDay) !== currentWeekOfYear) {
            weekArray.push(currentWeekArray);
            currentWeekOfYear = __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getWeekOfYear(currentDay);
            currentWeekArray = [];
          }
          thisDayObject = {
            dateObject: currentDay,
            year: currentDay.getFullYear(),
            month: currentDay.getMonth(),
            date: currentDay.getDate(),
            dayName: __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].formatDate(currentDay, 'dddd'),
            dayNumber: __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getDayOfWeek(currentDay)
          };
          currentWeekArray.push(thisDayObject);
        }
      }
      if (weekArray.length > 0) {
        weekArray.push(currentWeekArray);
      }
      console.debug('getCallendarCellArray about to return weekArray', weekArray);
      return weekArray;
    },
    generateCalendarCellArray: function generateCalendarCellArray() {
      console.debug('generateCalendarCellArray called');
      this.weekArray = this.getCalendarCellArray(this.workingDate.getMonth(), this.workingDate.getFullYear());
    },
    handleNavMove: function handleNavMove(params) {
      console.debug('calendarMonth called handleNavMove', params.unitType, params.amount);
      this.moveTimePeriod(params);
      this.$emit(this.eventRef + ':navMovePeriod', {
        unitType: params.unitType,
        amount: params.amount
      });
      this.generateCalendarCellArray();
    }
  },
  mounted: function mounted() {
    this.doUpdate();
    this.handlePassedInEvents();
    __WEBPACK_IMPORTED_MODULE_1_quasar__["a" /* Events */].$on(this.eventRef + ':navMovePeriod', this.handleNavMove);
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quasar__ = __webpack_require__(4);




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
    }
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
        return __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getDayOfWeek(now) === __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].getDayOfWeek(thisDay) && now.getMonth() === thisDay.getMonth();
      } else {
        return __WEBPACK_IMPORTED_MODULE_1_quasar__["w" /* date */].isSameDate(now, thisDay, 'day');
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(4);



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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarMultiDay_vue__ = __webpack_require__(43);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_153e7321_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarMultiDay_vue__ = __webpack_require__(89);
function injectStyle (ssrContext) {
  __webpack_require__(78)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_153e7321_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarMultiDay_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CalendarDayColumn__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarTimeLabelColumn__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CalendarDayLabels__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarHeaderNav__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CalendarAllDayEvents__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_quasar__ = __webpack_require__(4);










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
    }
  },
  components: {
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_1__CalendarEvent__["a" /* default */],
    CalendarDayColumn: __WEBPACK_IMPORTED_MODULE_2__CalendarDayColumn__["a" /* default */],
    CalendarTimeLabelColumn: __WEBPACK_IMPORTED_MODULE_3__CalendarTimeLabelColumn__["a" /* default */],
    CalendarDayLabels: __WEBPACK_IMPORTED_MODULE_4__CalendarDayLabels__["a" /* default */],
    CalendarHeaderNav: __WEBPACK_IMPORTED_MODULE_5__CalendarHeaderNav__["a" /* default */],
    CalendarAllDayEvents: __WEBPACK_IMPORTED_MODULE_6__CalendarAllDayEvents__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_7_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_7_quasar__["v" /* QTooltip */],
    QScrollArea: __WEBPACK_IMPORTED_MODULE_7_quasar__["o" /* QScrollArea */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {
      workingDate: new Date(),
      weekDateArray: [],
      dayRowArray: [],
      parsed: this.getDefaultParsed(),
      thisNavRef: this.createNewNavEventName()
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
          dateReturn += __WEBPACK_IMPORTED_MODULE_7_quasar__["w" /* date */].formatDate(bookendDates.first, 'MMM');
          if (bookendDates.first.getFullYear() !== bookendDates.last.getFullYear()) {
            dateReturn += __WEBPACK_IMPORTED_MODULE_7_quasar__["w" /* date */].formatDate(bookendDates.first, ' YYYY');
          }
          dateReturn += ' - ';
        }
        dateReturn += __WEBPACK_IMPORTED_MODULE_7_quasar__["w" /* date */].formatDate(bookendDates.last, 'MMM YYYY');
        return dateReturn;
      } else {
        return __WEBPACK_IMPORTED_MODULE_7_quasar__["w" /* date */].formatDate(this.workingDate, 'MMMM YYYY');
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
    __WEBPACK_IMPORTED_MODULE_7_quasar__["a" /* Events */].$on(this.eventRef + ':navMovePeriod', this.handleNavMove);
  },

  watch: {
    startDate: 'handleStartChange',
    eventArray: 'getPassedInEventArray',
    parsedEvents: 'getPassedInParsedEvents'
  }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quasar__ = __webpack_require__(4);





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
    }
  },
  components: {
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_0__CalendarEvent__["a" /* default */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_1__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {
      workingDate: new Date()
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
      var startMidnight = __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].adjustDate(startDateObject, {
        hours: 0,
        minutes: 0,
        seconds: 0,
        milliseconds: 0
      });
      var topMinuteCount = __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].getDateDiff(startDateObject, startMidnight, 'minutes');
      var heightMinuteCount = __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].getDateDiff(endDateObject, startDateObject, 'minutes');
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
/* 45 */
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAllDayEvents_vue__ = __webpack_require__(47);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_56b495d8_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAllDayEvents_vue__ = __webpack_require__(88);
function injectStyle (ssrContext) {
  __webpack_require__(86)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_56b495d8_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAllDayEvents_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quasar__ = __webpack_require__(4);





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
    }
  },
  components: {
    CalendarEvent: __WEBPACK_IMPORTED_MODULE_1__CalendarEvent__["a" /* default */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */]],
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
      return __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].addToDate(thisDateObject, { days: numDays });
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
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAgenda_vue__ = __webpack_require__(49);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_bf547f7a_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAgenda_vue__ = __webpack_require__(95);
function injectStyle (ssrContext) {
  __webpack_require__(90)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_bf547f7a_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAgenda_vue__["a" /* default */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CalendarMixin__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarAgendaEvent__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quasar__ = __webpack_require__(4);





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
    }
  },
  components: {
    CalendarAgendaEvent: __WEBPACK_IMPORTED_MODULE_1__CalendarAgendaEvent__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_2_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_2_quasar__["v" /* QTooltip */],
    QScrollArea: __WEBPACK_IMPORTED_MODULE_2_quasar__["o" /* QScrollArea */],
    QInfiniteScroll: __WEBPACK_IMPORTED_MODULE_2_quasar__["h" /* QInfiniteScroll */],
    QSpinnerDots: __WEBPACK_IMPORTED_MODULE_2_quasar__["p" /* QSpinnerDots */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__CalendarMixin__["a" /* default */]],
  data: function data() {
    return {
      workingDate: new Date(),
      localNumDays: 30,
      dayRowArray: [],
      dayCounter: [],
      parsed: this.getDefaultParsed()
    };
  },

  computed: {},
  methods: {
    getDaysForwardDate: function getDaysForwardDate(daysForward) {
      return __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].addToDate(this.workingDate, { days: daysForward });
    },
    isFirstOfMonth: function isFirstOfMonth(thisDate) {
      return thisDate.getDate() === 1;
    },
    isFirstDayOfWeek: function isFirstDayOfWeek(thisDate) {
      return __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].getDayOfWeek(thisDate) === 1;
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
      var lastDate = __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].addToDate(firstDate, { days: 6 });
      if (firstDate.getMonth() === lastDate.getMonth()) {
        return __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].formatDate(firstDate, 'MMM D - ') + __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].formatDate(lastDate, 'D');
      } else {
        return __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].formatDate(firstDate, 'MMM D - ') + __WEBPACK_IMPORTED_MODULE_2_quasar__["w" /* date */].formatDate(lastDate, 'MMM D');
      }
    }
  },
  mounted: function mounted() {
    this.localNumDays = this.numDays;
    this.doUpdate();
    this.handlePassedInEvents();
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
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_CalendarAgendaEvent_vue__ = __webpack_require__(51);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_2ece0e3c_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAgendaEvent_vue__ = __webpack_require__(94);
function injectStyle (ssrContext) {
  __webpack_require__(92)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_2ece0e3c_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_CalendarAgendaEvent_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_quasar__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__QuantityBubble__ = __webpack_require__(28);




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'CalendarAgendaEvent',
  props: {
    eventObject: {
      type: Object,
      default: this.blankCalendarEvent
    },
    backgroundColor: {
      type: String,
      default: 'blue'
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
    }
  },
  components: {
    QuantityBubble: __WEBPACK_IMPORTED_MODULE_1__QuantityBubble__["a" /* default */],
    QBtn: __WEBPACK_IMPORTED_MODULE_0_quasar__["b" /* QBtn */],
    QTooltip: __WEBPACK_IMPORTED_MODULE_0_quasar__["v" /* QTooltip */]
  },
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

  computed: {},
  methods: {
    formatTimeRange: function formatTimeRange(startTime, endTime) {
      var returnString = '';

      returnString += __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(startTime, 'h');
      if (startTime.getMinutes() > 0) {
        returnString += ':' + __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(startTime, 'mm');
      }
      if (__WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(startTime, 'A') !== __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(endTime, 'A')) {
        returnString += ' ' + __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(startTime, 'A');
      }
      returnString += ' - ';

      returnString += __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(endTime, 'h');
      if (endTime.getMinutes() > 0) {
        returnString += ':' + __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(endTime, 'mm');
      }
      returnString += ' ' + __WEBPACK_IMPORTED_MODULE_0_quasar__["w" /* date */].formatDate(endTime, 'A');
      return returnString;
    },
    getEventClass: function getEventClass() {
      return {
        'calendar-agenda-event': true,
        'calendar-agenda-event-allday': this.eventObject.start.isAllDay
      };
    },
    getEventStyle: function getEventStyle() {
      var retVal = {
        'background-color': this.backgroundColor,
        'color': this.textColor
      };
      return retVal;
    },
    handleClick: function handleClick(e) {
      this.$emit('click', this.eventObject);
    }
  },
  mounted: function mounted() {}
});

/***/ }),
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("7507031c", content, true, {});

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".logo-container{width:255px;height:242px;-webkit-perspective:800px;perspective:800px;position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}.logo{position:absolute;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_calendar__ = __webpack_require__(58);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_calendar__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__components_calendar__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__components_calendar__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__components_calendar__["d"]; });



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Calendar__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CalendarAgenda__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CalendarAgendaEvent__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CalendarAllDayEvents__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__CalendarDayColumn__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__CalendarDayLabels__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CalendarEvent__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CalendarHeaderNav__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CalendarMonth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__CalendarTimeLabelColumn__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__CalendarMultiDay__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__QuantityBubble__ = __webpack_require__(28);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Calendar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__CalendarAgenda__["a"]; });
/* unused harmony reexport CalendarAgendaEvent */
/* unused harmony reexport CalendarAllDayEvents */
/* unused harmony reexport CalendarDayColumn */
/* unused harmony reexport CalendarDayLabels */
/* unused harmony reexport CalendarEvent */
/* unused harmony reexport CalendarHeaderNav */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__CalendarMonth__["a"]; });
/* unused harmony reexport CalendarTimeLabelColumn */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__CalendarMultiDay__["a"]; });
/* unused harmony reexport QuantityBubble */















/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_vue_loader_lib_selector_type_script_index_0_Calendar_vue__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_13635de5_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_Calendar_vue__ = __webpack_require__(96);
function injectStyle (ssrContext) {
  __webpack_require__(60)
}
var normalizeComponent = __webpack_require__(3)
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
  __WEBPACK_IMPORTED_MODULE_1__vue_loader_lib_template_compiler_index_id_data_v_13635de5_hasScoped_false_buble_transforms_vue_loader_lib_selector_type_template_index_0_Calendar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("1a974925", content, true, {});

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-tabs .calendar-tab-pane-day,.calendar-tabs .calendar-tab-pane-week{height:60vh;max-height:60vh;overflow:hidden}", ""]);

// exports


/***/ }),
/* 62 */
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("dd5e3b32", content, true, {});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-event{width:100%;height:100%;padding:2px;text-overflow:clip;border-radius:.25em;margin:1px 0;font-size:.8em;cursor:pointer}.calendar-event-month{white-space:nowrap}", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("972bc512", content, true, {});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".quantity-bubble-holder{position:relative;display:inline-block}.quantity-bubble-holder .quantity-bubble{border-radius:50%;font-size:.75em;text-align:center;font-weight:700;height:2em;width:2em;position:absolute;top:0;left:0}.quantity-bubble-holder .quantity-bubble .quantity-value{vertical-align:middle}.quantity-bubble-holder .quantity-bubble-offset{bottom:.25em;left:-.25em}", ""]);

// exports


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.quantity > 0)?_c('div',{staticClass:"quantity-bubble-holder"},[_vm._v("\n     \n    "),_c('div',{class:_vm.bubbleClass},[_c('div',{staticClass:"quantity-value"},[_vm._v("\n            "+_vm._s(_vm.quantity)+"\n        ")])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.getEventClass,style:(_vm.getEventStyle),on:{"mouseup":_vm.handleClick}},[(!_vm.isAllDayEvent() && _vm.showTime)?_c('span',{staticClass:"calendar-event-start-time"},[_vm._v("\n        "+_vm._s(_vm.formatTime(_vm.eventObject.start.dateObject))+"\n    ")]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"calendar-event-summary"},[_vm._v("\n        "+_vm._s(_vm.eventObject.summary)+"\n    ")])])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("49e78eeb", content, true, {});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-month .calendar-time-width{width:4em}.calendar-month .calendar-time-margin{margin-left:4em}.calendar-month .calendar-header .calendar-header-label{font-size:1.25em;font-weight:700}.calendar-month .calendar-content{padding:4px 12px}.calendar-month .calendar-content .calendar-cell{width:$cellWidth;max-width:$cellWidth;padding:2px}.calendar-month .calendar-content .calendar-day-labels .calendar-day-label{font-size:1.1em}.calendar-month .calendar-content .calendar-day-labels .calendar-day-label-current{font-weight:700}.calendar-month .calendar-content .calendar-multi-day{border-bottom:1px solid silver}.calendar-month .calendar-content .calendar-multi-day :last-child{border-bottom:none}.calendar-month .calendar-content .calendar-day{background-color:none;height:5em;max-height:5em;overflow:hidden;width:14.285%}.calendar-month .calendar-content .calendar-day .calendar-day-number{font-size:.9em;height:2em;width:2em;vertical-align:middle;padding-top:.25em;padding-left:.25em}.calendar-month .calendar-content .calendar-day-current{background-color:#eee}", ""]);

// exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("04e8fd04", content, true, {});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-day-labels .calendar-day-label{font-size:1.1em;padding-left:4px}.calendar-day-labels .calendar-day-label .calendar-day-label-date{font-size:1.75em}.calendar-day-labels .calendar-day-label-current{font-weight:700}", ""]);

// exports


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-day-labels row no-wrap justify-end"},_vm._l((_vm.weekDateArray),function(thisDay){return _c('div',{class:{
          'calendar-day-label': true,
          'calendar-cell': true,
          'calendar-day-label-current': _vm.isCurrentDayLabel(thisDay)
        },style:({
          'width': _vm.cellWidth,
          'max-width': _vm.cellWidth,
        })},[_vm._v("\n        "+_vm._s(_vm.formatDate(thisDay, 'ddd'))+"\n        "),(_vm.showDates)?_c('div',{staticClass:"calendar-day-label-date"},[_vm._v("\n            "+_vm._s(_vm.formatDate(thisDay, 'D'))+"\n        ")]):_vm._e()])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(75);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("cfcc919a", content, true, {});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-header .calendar-month-year{font-size:1.25em;font-weight:700}", ""]);

// exports


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-header col-auto row justify-between items-center"},[_c('div',{staticClass:"calendar-header-left col-auto"},[_c('q-btn',{attrs:{"icon":"chevron_left","color":"primary","round":"","flat":""},on:{"click":function($event){_vm.doMoveTimePeriod(_vm.timePeriodUnit, -_vm.timePeriodAmount)}}})],1),_vm._v(" "),_c('div',{staticClass:"calendar-header-label"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"calendar-header-right col-auto"},[_c('q-btn',{attrs:{"icon":"chevron_right","color":"primary","round":"","flat":""},on:{"click":function($event){_vm.doMoveTimePeriod(_vm.timePeriodUnit, _vm.timePeriodAmount)}}})],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 77 */
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
                    'calendar-day-current': _vm.isCurrentDate(thisDay.dateObject)
                    }},[(_vm.isCurrentDate(thisDay.dateObject))?_c('quantity-bubble',{attrs:{"quantity":thisDay.dateObject.getDate(),"offset":false}}):_c('div',{staticClass:"calendar-day-number"},[_vm._v("\n                    "+_vm._s(thisDay.dateObject.getDate())+"\n                ")]),_vm._v(" "),_c('div',{staticClass:"calendar-day-content"},_vm._l((_vm.dateGetEvents(thisDay.dateObject)),function(thisEvent){return (_vm.hasAnyEvents(thisDay.dateObject))?_c('div',[_c('calendar-event',{attrs:{"event-object":thisEvent,"monthStyle":true}})],1):_vm._e()}))],1)}))})],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("e23f5344", content, true, {});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-multi-day-component .calendar-time-margin{margin-left:4em}.calendar-multi-day-component .calendar-header .calendar-header-label{font-size:1.25em;font-weight:700}.calendar-multi-day-component .calendar-day .calendar-day-column-label{width:4em}.calendar-multi-day-component .calendar-day .calendar-day-column-content{border-right:1px dotted silver;position:relative}.calendar-multi-day-component .calendar-day .calendar-day-time{padding-right:.5em;border-right:1px solid silver}.calendar-multi-day-component .calendar-day .calendar-day-time-content{border-top:1px dotted silver}", ""]);

// exports


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("a97c674e", content, true, {});

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-day{position:relative}.calendar-day .calendar-day-cell-height{height:5rem;max-height:5rem}.calendar-day .calendar-day-column-content{position:relative}.calendar-day .calendar-day-column-current{background-color:#eee}.calendar-day .calendar-day-time{padding-right:.5em;border-right:1px solid silver}.calendar-day .calendar-day-time-content{border-top:1px dotted silver}.calendar-day .calendar-day-event-overlap{margin-left:1px}.calendar-day .calendar-day-event-overlap-first{margin-left:0}", ""]);

// exports


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.columnCss},[_vm._l((24),function(thisHour){return _c('div',{style:(_vm.getCellStyle)},[_c('div',{staticClass:"calendar-day-time-content"})])}),_vm._v(" "),_vm._l((_vm.dateEvents),function(eventObject){return (_vm.dateEvents.length > 0)?_c('div',{class:_vm.calculateDayEventClass(eventObject),style:(_vm.calculateDayEventStyle(eventObject))},[(!eventObject.start.isAllDay)?_c('calendar-event',{attrs:{"event-object":eventObject}}):_vm._e()],1):_vm._e()})],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(84);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("6de734ba", content, true, {});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-day-column-label col-auto"},_vm._l((24),function(thisHour){return _c('div',{staticClass:"calendar-day-time",style:({ 'height': _vm.dayCellHeight, 'max-height': _vm.dayCellHeight })},[_vm._v("\n        "+_vm._s(_vm.formatTimeFromNumber(thisHour - 1))+"\n    ")])}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(87);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("369bd712", content, true, {});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-day-labels .calendar-day-label{font-size:1.1em}.calendar-day-labels .calendar-day-label .calendar-day-label-date{font-size:1.75em}.calendar-day-labels .calendar-day-label-current{font-weight:700}", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-all-day-events row no-wrap justify-end items-start"},_vm._l((_vm.numberOfDays),function(addDays,index){return _c('div',{style:({
          'width': _vm.cellWidth,
          'max-width': _vm.cellWidth
        })},[_vm._l((_vm.dateGetEvents(_vm.addDaysToDate(_vm.workingDate, addDays - 1))),function(thisEvent){return (thisEvent.start.isAllDay)?[_c('calendar-event',{attrs:{"event-object":thisEvent,"show-time":false}})]:_vm._e()})],2)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-multi-day-component column fit no-wrap"},[(_vm.numDays === 1)?[_c('calendar-header-nav',{attrs:{"time-period-unit":"days","time-period-amount":_vm.navDays,"move-time-period-emit":_vm.eventRef + ':navMovePeriod'}},[_vm._v("\n            "+_vm._s(_vm.formatDate(_vm.workingDate, 'dddd, MMMM D YYYY'))+"\n        ")])]:[_c('calendar-header-nav',{attrs:{"time-period-unit":"days","time-period-amount":_vm.navDays,"move-time-period-emit":_vm.eventRef + ':navMovePeriod'}},[_vm._v("\n            "+_vm._s(_vm.getHeaderLabel())+"\n        ")])],_vm._v(" "),(_vm.numDays > 1)?_c('div',{staticClass:"calendar-time-margin"},[_c('calendar-day-labels',{attrs:{"number-of-days":_vm.numDays,"show-dates":true,"start-date":_vm.workingDate,"force-start-of-week":_vm.forceStartOfWeek}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"calendar-time-margin"},[_c('calendar-all-day-events',{attrs:{"number-of-days":_vm.numDays,"NOstart-date":_vm.workingDate,"start-date":_vm.weekDateArray[0],"parsed":_vm.parsed}})],1),_vm._v(" "),_c('q-scroll-area',{class:_vm.getScrollClass,style:(_vm.getScrollStyle)},[_c('div',{staticClass:"col"},[_c('div',{staticClass:"calendar-day row"},[_c('calendar-time-label-column'),_vm._v(" "),_c('div',{staticClass:"calendar-multiple-days col row"},_vm._l((_vm.weekDateArray),function(thisDate){return _c('calendar-day-column',{style:({ 'width': _vm.dayCellWidth }),attrs:{"start-date":thisDate,"date-events":_vm.dateGetEvents(thisDate),"column-css-class":"calendar-day-column-content"}})}))],1)])])],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(91);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("16c09b9b", content, true, {});

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, ".calendar-agenda .calendar-agenda-month{font-size:1.5em;font-weight:700;background:#00f;color:#fff;padding:1em 0 2em;margin-bottom:.5em}.calendar-agenda .calendar-agenda-week{font-size:1.2em;font-weight:700;color:gray;margin-bottom:.5em}.calendar-agenda .calendar-agenda-day{margin-bottom:1em}.calendar-agenda .calendar-agenda-day .calendar-agenda-side{width:4em}.calendar-agenda .calendar-agenda-day .calendar-agenda-side .calendar-agenda-side-date{font-size:1.75em;font-weight:700}.calendar-agenda .calendar-agenda-day .calendar-agenda-side .calendar-agenda-side-day{font-size:1.1em}.calendar-agenda .calendar-agenda-day .calendar-agenda-events{width:100%}.calendar-agenda .calendar-agenda-day .calendar-agenda-event{width:100%;padding:.5em;margin-bottom:.5em;text-overflow:clip;border-radius:.25em}.calendar-agenda .calendar-agenda-day .calendar-agenda-event .calendar-agenda-event-summary{font-weight:700}", ""]);

// exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(93);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(21)("5f58531f", content, true, {});

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.getEventClass(),style:(_vm.getEventStyle()),on:{"mouseup":_vm.handleClick}},[_c('div',{staticClass:"calendar-agenda-event-summary"},[_vm._v("\n        "+_vm._s(_vm.eventObject.summary)+"\n    ")]),_vm._v(" "),(_vm.showTime && !_vm.eventObject.start.isAllDay)?_c('div',{staticClass:"calendar-agenda-event-time"},[_vm._v("\n        "+_vm._s(_vm.formatTimeRange(_vm.eventObject.start.dateObject, _vm.eventObject.end.dateObject))+"\n    ")]):_vm._e()])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-agenda column fit"},[_c('q-infinite-scroll',{style:({ 'height': _vm.scrollHeight, 'overflow':'auto' }),attrs:{"inline":"","handler":_vm.loadMore}},[_vm._l((_vm.localNumDays),function(daysForward){return _c('div',{key:daysForward},[(_vm.forwardDate = _vm.getDaysForwardDate(daysForward - 1))?_c('div',[(_vm.isFirstOfMonth(_vm.forwardDate))?_c('div',{staticClass:"row calendar-agenda-month",style:({ 'padding-left': _vm.leftMargin })},[_vm._v("\n                        "+_vm._s(_vm.formatDate(_vm.forwardDate, 'MMMM YYYY'))+"\n                    ")]):_vm._e(),_vm._v(" "),(_vm.isFirstDayOfWeek(_vm.forwardDate))?_c('div',{staticClass:"row calendar-agenda-week",style:({ 'margin-left': _vm.leftMargin })},[_vm._v("\n                        "+_vm._s(_vm.getWeekTitle(_vm.forwardDate))+"\n                    ")]):_vm._e(),_vm._v(" "),(_vm.dateGetEvents(_vm.forwardDate).length > 0)?_c('div',{staticClass:"col row items-start calendar-agenda-day"},[_c('div',{staticClass:"col-auto calendar-agenda-side",style:({ 'width': _vm.leftMargin, 'max-width': _vm.leftMargin })},[_c('div',{staticClass:"calendar-agenda-side-date"},[_vm._v("\n                                "+_vm._s(_vm.formatDate(_vm.forwardDate, 'D'))+"\n                            ")]),_vm._v(" "),_c('div',{staticClass:"calendar-agenda-side-day"},[_vm._v("\n                                "+_vm._s(_vm.formatDate(_vm.forwardDate, 'ddd'))+"\n                            ")])]),_vm._v(" "),_c('div',{staticClass:"col row calendar-agenda-events"},[_vm._l((_vm.dateGetEvents(_vm.forwardDate)),function(thisEvent){return (_vm.dateGetEvents(_vm.forwardDate))?[_c('calendar-agenda-event',{attrs:{"event-object":thisEvent}})]:_vm._e()})],2)]):_vm._e()]):_vm._e()])}),_vm._v(" "),_c('q-spinner-dots',{attrs:{"slot":"message","size":40},slot:"message"})],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"calendar-test"},[_c('q-tabs',{staticClass:"calendar-tabs",attrs:{"inverted":""}},[_c('q-tab',{attrs:{"slot":"title","name":"tab-month","icon":"view_module","label":"Month","default":""},slot:"title"}),_vm._v(" "),_c('q-tab',{attrs:{"slot":"title","name":"tab-week-component","icon":"view_week","label":"Week"},slot:"title"}),_vm._v(" "),_c('q-tab',{attrs:{"slot":"title","name":"tab-days-component","icon":"view_column","label":"3 Day"},slot:"title"}),_vm._v(" "),_c('q-tab',{attrs:{"slot":"title","name":"tab-single-day-component","icon":"view_day","label":"Day"},slot:"title"}),_vm._v(" "),_c('q-tab',{attrs:{"slot":"title","name":"tab-agenda","icon":"view_agenda","label":"Agenda"},slot:"title"}),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-month",attrs:{"name":"tab-month"}},[_c('calendar-month',{ref:'month-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"event-ref":_vm.eventRef}})],1),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-week",attrs:{"name":"tab-week-component"}},[_c('calendar-multi-day',{ref:'week-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"num-days":7,"nav-days":7,"force-start-of-week":true,"event-ref":_vm.eventRef}})],1),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-week",attrs:{"name":"tab-days-component"}},[_c('calendar-multi-day',{ref:'days-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"num-days":3,"nav-days":1,"force-start-of-week":false,"event-ref":_vm.eventRef}})],1),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-week",attrs:{"name":"tab-single-day-component"}},[_c('calendar-multi-day',{ref:'day-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"num-days":1,"nav-days":1,"force-start-of-week":false,"event-ref":_vm.eventRef}})],1),_vm._v(" "),_c('q-tab-pane',{staticClass:"calendar-tab-pane-agenda",attrs:{"name":"tab-agenda"}},[_c('calendar-agenda',{ref:'agenda-' + _vm.thisRefName,attrs:{"start-date":_vm.workingDate,"parsed-events":_vm.parsed,"num-days":30,"event-ref":_vm.eventRef,"scroll-height":"300px"}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',{ref:"layout",attrs:{"view":"lHh Lpr fff","left-class":{'bg-grey-2': true}}},[_c('q-toolbar',{attrs:{"slot":"header"},slot:"header"},[_c('q-toolbar-title',[_vm._v("\n      Quasar Calendar Demo\n      "),_c('div',{attrs:{"slot":"subtitle"},slot:"subtitle"},[_vm._v("Running on Quasar v"+_vm._s(_vm.$q.version))])])],1),_vm._v(" "),_c('div',{staticClass:"layout-padding"},[_c('q-card',[_c('q-card-title',[_vm._v("\n              Full calendar component\n              "),_c('span',{attrs:{"slot":"subtitle"},slot:"subtitle"},[_vm._v("\n                  A multifunction component that displays calendar information in a variety of predefined formats.\n              ")])]),_vm._v(" "),_c('q-card-main',[_c('calendar',{attrs:{"event-array":_vm.eventArray}})],1)],1),_vm._v(" "),_c('q-card',[_c('q-card-title',[_vm._v("\n              Individual month view component\n              "),_c('span',{attrs:{"slot":"subtitle"},slot:"subtitle"},[_vm._v("\n                  Example of a single component displayed. Acts independently of any other calendar component on the same page.\n              ")])]),_vm._v(" "),_c('q-card-main',[_c('calendar-month',{attrs:{"event-array":_vm.eventArray}})],1)],1),_vm._v(" "),_c('q-card',[_c('q-card-title',[_vm._v("\n              Individual multi-day / week view component\n              "),_c('span',{attrs:{"slot":"subtitle"},slot:"subtitle"},[_vm._v("\n                  The multi-day component. This can be configured as a proper full-week display (shown), a single day or a multi-day. The number of days shown and the number of days moved in the navigation are adjustable.\n              ")])]),_vm._v(" "),_c('q-card-main',[_c('calendar-multi-day',{attrs:{"event-array":_vm.eventArray,"scrollHeight":"400px"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
]));