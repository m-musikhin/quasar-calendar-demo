<template>
  <q-layout
    ref="layout"
    view="lHh Lpr fff"
    :left-class="{'bg-grey-2': true}"
  >
    <q-toolbar slot="header">
      <q-toolbar-title>
        Quasar Calendar Demo
        <div slot="subtitle">Running on Quasar v{{$q.version}}</div>
      </q-toolbar-title>
    </q-toolbar>

    <!--<div slot="left">-->
      <!--&lt;!&ndash;-->
        <!--Use <q-side-link> component-->
        <!--instead of <q-item> for-->
        <!--internal vue-router navigation-->
      <!--&ndash;&gt;-->
    <!--</div>-->

    <!--
      Replace following <div> with
      <router-view /> component
      if using subRoutes
    -->
    <!--<div class="layout-padding logo-container non-selectable no-pointer-events">-->
    <div class="layout-padding">

        <q-card>
            <q-card-title>
                Full calendar component
                <span slot="subtitle">
                    A multifunction component that displays calendar information in a variety of predefined formats.
                </span>
            </q-card-title>
            <q-card-main>
                <calendar
                    :event-array="eventArray"
                />
            </q-card-main>
        </q-card>

        <q-card>
            <q-card-title>
                Individual month view component
                <span slot="subtitle">
                    Example of a single component displayed. Acts independently of any other calendar component on the same page.
                </span>
            </q-card-title>
            <q-card-main>
                <calendar-month
                    :event-array="eventArray"
                />
            </q-card-main>
        </q-card>

        <q-card>
            <q-card-title>
                Individual multi-day / week view component
                <span slot="subtitle">
                    The multi-day component. This can be configured as a proper full-week display (shown), a single day or a multi-day. The number of days shown and the number of days moved in the navigation are adjustable.
                </span>
            </q-card-title>
            <q-card-main>
                <calendar-multi-day
                    :event-array="eventArray"
                    scrollHeight="400px"
                />
            </q-card-main>
        </q-card>

    </div>
  </q-layout>
</template>

<script>
import {
  date,
  openURL,
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QItemMain,
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator
} from 'quasar'
import {
  Calendar,
  CalendarMonth,
  CalendarMultiDay,
  CalendarAgenda
} from 'quasar-calendar'
export default {
  name: 'index',
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QItemMain,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    Calendar,
    CalendarMonth,
    CalendarMultiDay,
    CalendarAgenda
  },
  data () {
    return {
      eventArray: [
        {
          id: 1,
          summary: 'Test event',
          description: 'Some extra info goes here',
          location: 'Office of the Divine Randomness, 1232 Main St., Denver, CO',
          start: {
            dateTime: '2018-02-16 14:00:00',
            isAllDay: false,
            timeZone: 'America/New_York'
          },
          end: {
            dateTime: '2018-02-16 16:30:00',
            isAllDay: false,
            timeZone: 'American/New_York'
          },
          color: 'positive',
          attendees: [
            {
              id: 5,
              email: 'somebody@somewhere.com',
              displayName: 'John Q. Public',
              organizer: false,
              self: false,
              resource: false
            },
            {
              id: 5,
              email: 'somebody@somewhere.com',
              displayName: 'John Q. Public',
              organizer: false,
              self: false,
              resource: false
            },
            {
              id: 5,
              email: 'somebody@somewhere.com',
              displayName: 'John Q. Public',
              organizer: false,
              self: false,
              resource: false
            },
            {
              id: 31,
              email: '',
              displayName: 'South Conference Room',
              organizer: false,
              self: false,
              resource: true
            }
          ]
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
          },
          color: 'warning',
          textColor: 'dark'
        },
        {
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
        }
      ],
      startYear: (new Date()).getFullYear(),
      startMonth: (new Date()).getMonth() + 1,
      startDay: (new Date()).getDate()
    }
  },
  computed: {},
  methods: {
    launch (url) {
      openURL(url)
    },
    moveSampleDatesAhead: function () {
      // function to take dates in our demo eventArray and move them to the near future
      const dateSet1 = [1, 3],
        dateSet2 = [4, 5, 6, 7, 8],
        addDays1 = 2,
        addDays2 = 5
      for (let counter = 0; counter < this.eventArray.length; counter++) {
        let currentItem = this.eventArray[counter]
        // dateset 1
        if (dateSet1.indexOf(currentItem.id) >= 0) {
          currentItem = this.adjustStartEndDates(currentItem, addDays1)
        }
        // dateset 2
        if (dateSet2.indexOf(currentItem.id) >= 0) {
          currentItem = this.adjustStartEndDates(currentItem, addDays2)
        }
        this.eventArray[counter] = currentItem
      }
    },
    adjustStartEndDates: function (eventItem, numDays) {
      eventItem.start.dateTime = this.getSqlDateFormat(
        this.setADateToADay(
          eventItem.start.dateTime,
          numDays
        )
      )
      eventItem.end.dateTime = this.getSqlDateFormat(
        this.setADateToADay(
          eventItem.end.dateTime,
          numDays
        )
      )
      return eventItem
    },
    setADateToADay: function (dateObject, addDays) {
      let now = new Date()
      if (typeof dateObject === 'string') {
        dateObject = new Date(dateObject)
      }
      dateObject = date.adjustDate(
        dateObject, {
          year: now.getFullYear(),
          month: now.getMonth() + 1,
          date: now.getDate()
        }
      )
      if (addDays !== undefined) {
        dateObject = date.addToDate(
          dateObject, {
            days: addDays
          }
        )
      }
      return dateObject
    },
    getSqlDateFormat: function (dateObject) {
      return date.formatDate(dateObject, 'YYYY-MM-DD HH:mm:ss')
    }
  },
  created () {
    this.moveSampleDatesAhead()
  },
  beforeDestroy () {}
}
</script>

<style lang="stylus">
.logo-container
  width 255px
  height 242px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d
</style>
