import _styled from 'styled-components';
import React, { useState } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import dayjs_min from '../../../node_modules/dayjs/dayjs.min.js';
import { Selector } from './components.js';
import WrappedMonthDay from './MonthDay.js';
import { GU } from '../../style/constants.js';
import { eachDayOfInterval } from '../../utils/date.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "DatePicker___StyledDiv",
  componentId: "sc-6xp23y-0"
})(["display:grid;"]);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "DatePicker___StyledDiv2",
  componentId: "sc-6xp23y-1"
})(["display:grid;grid-template:auto / repeat(7,1fr);width:", "px;"], p => p._css);

function DatePicker({
  initialDate,
  onSelect,
  datesRangeStart,
  datesRangeEnd,
  hideYearSelector,
  yearFormat,
  hideMonthSelector,
  monthFormat,
  monthYearFormat,
  hideWeekDays,
  weekDayFormat,
  ...props
}) {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const setDate = ({
    year,
    add
  }) => event => {
    setSelectedDate(dayjs_min(selectedDate).startOf('month')[add ? 'add' : 'subtract'](1, year ? 'year' : 'month').toDate());
  };

  const today = dayjs_min().startOf('day').toDate();
  const selectedDayjs = dayjs_min(selectedDate || today);

  const isSelected = day => {
    if (datesRangeStart || datesRangeEnd) {
      return day.isSame(datesRangeStart, 'day') || day.isSame(datesRangeEnd, 'day');
    }

    return false;
  };

  const isInRange = day => {
    if (datesRangeStart && datesRangeEnd) {
      return day.isAfter(datesRangeStart) && day.isBefore(datesRangeEnd);
    }
  };

  return /*#__PURE__*/React.createElement(_StyledDiv, props, !hideYearSelector && /*#__PURE__*/React.createElement(Selector, {
    prev: setDate({
      year: true,
      add: false
    }),
    next: setDate({
      year: true,
      add: true
    }),
    small: true
  }, selectedDayjs.format(yearFormat)), !hideMonthSelector && /*#__PURE__*/React.createElement(Selector, {
    prev: setDate({
      year: false,
      add: false
    }),
    next: setDate({
      year: false,
      add: true
    })
  }, selectedDayjs.format(!hideYearSelector ? monthFormat : monthYearFormat)), /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css: 31.5 * GU
  }, !hideWeekDays && eachDayOfInterval({
    start: selectedDayjs.startOf('week'),
    end: selectedDayjs.endOf('week')
  }).map(day => {
    const dayJs = dayjs_min(day);
    return /*#__PURE__*/React.createElement(WrappedMonthDay, {
      key: dayJs.format('dd'),
      weekDay: true
    }, dayJs.format(weekDayFormat));
  }), eachDayOfInterval({
    start: selectedDayjs.startOf('month').startOf('week'),
    end: selectedDayjs.endOf('month').endOf('week')
  }).map(day => {
    const dayJs = dayjs_min(day);
    return /*#__PURE__*/React.createElement(WrappedMonthDay, {
      key: dayJs.valueOf(),
      disabled: !selectedDayjs.isSame(dayJs, 'month'),
      selected: isSelected(dayJs),
      inRange: isInRange(dayJs),
      rangeBoundaryBegin: datesRangeStart && datesRangeEnd && dayJs.isSame(datesRangeStart, 'day'),
      rangeBoundaryEnd: datesRangeStart && datesRangeEnd && dayJs.isSame(datesRangeEnd, 'day'),
      today: dayJs.isSame(today, 'day'),
      onClick: () => onSelect(dayJs.toDate())
    }, dayJs.format(props.dayFormat));
  })));
}

DatePicker.propTypes = {
  /**
   * For displaying a selected dates range - start
   */
  datesRangeStart: propTypes.instanceOf(Date),

  /**
   * For displaying a selected dates range - end
   */
  datesRangeEnd: propTypes.instanceOf(Date),

  /**
   * Initial date - calendar will start from here.
   */
  initialDate: propTypes.instanceOf(Date),
  // Events
  onSelect: propTypes.func,
  // Visibility
  hideMonthSelector: propTypes.bool,
  hideWeekDays: propTypes.bool,
  hideYearSelector: propTypes.bool,
  // Formatting
  dayFormat: propTypes.string,
  monthFormat: propTypes.string,
  monthYearFormat: propTypes.string,
  weekDayFormat: propTypes.string,
  yearFormat: propTypes.string
};
DatePicker.defaultProps = {
  onSelect: () => {},
  dayFormat: 'D',
  monthFormat: 'MMMM',
  monthYearFormat: 'MMMM YYYY',
  weekDayFormat: 'ddd',
  yearFormat: 'YYYY'
};

export default DatePicker;
//# sourceMappingURL=DatePicker.js.map
