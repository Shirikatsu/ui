'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs_min = require('./dayjs.min-622e877a.js');
require('./_commonjsHelpers-1b94f6bc.js');

const UNITS = [['years', 'year'], ['months', 'month'], ['days', 'day'], ['hours', 'hour'], ['minutes', 'minute'], ['seconds', 'second']];
const DEFAULT_UNITS = ['years', 'months', 'days', 'hours', 'minutes', 'seconds']; // Return the difference between two dates, per unit.
// Set `units` to get specific units only, e.g. ['minutes', 'seconds']
// If `units` is not set, all the units are enabled.

const difference = (date1, date2, options = {}) => {
  const units = options.units || DEFAULT_UNITS;
  const maxUnits = options.maxUnits || -1;
  const keepLeadingZeros = maxUnits === -1 && options.keepLeadingZeros || false;
  const start = date2 > date1 ? date1 : date2;

  const getRightMostUnitIndex = () => [...UNITS].reverse().find(([unit]) => units.includes(unit))[0];

  return UNITS.reduce((result, [name, unitName], index) => {
    result[name] = null; // fill the current unit, subtract the difference from the remaining

    if ((maxUnits === -1 || result.remainingUnits > 0) && units.includes(name)) {
      result[name] = result.remaining.diff(start, unitName);
      result.remaining = result.remaining.subtract(result[name], unitName);
    } // remove leading zeros


    if (!keepLeadingZeros && !result.seenNonZero) {
      if (result[name] === 0) {
        result[name] = null;
      } else {
        result.seenNonZero = true;
      }
    } // enforce the maxUnits option


    if (result.remainingUnits > 0 && result.seenNonZero) {
      result.remainingUnits -= 1;
    } // last iteration


    if (index === UNITS.length - 1) {
      delete result.remaining;
      delete result.remainingUnits;
      delete result.seenNonZero; // include at least one 0

      if (Object.values(result).every(val => val === null)) {
        result[getRightMostUnitIndex()] = 0;
      }
    }

    return result;
  }, {
    remaining: dayjs_min.dayjs_min(start === date1 ? date2 : date1),
    remainingUnits: maxUnits,
    seenNonZero: false
  });
};
const eachDayOfInterval = ({
  start,
  end
} = {}) => {
  let startDate = dayjs_min.dayjs_min(start);
  let endDate = dayjs_min.dayjs_min(end);

  if (!startDate.isValid()) {
    throw new Error('Start date of interval is invalid');
  }

  if (!endDate.isValid()) {
    throw new Error('End date of interval is invalid');
  }

  startDate = startDate.startOf('day');
  endDate = endDate.startOf('day');

  if (startDate.isAfter(endDate)) {
    throw new Error('Start date of interval is after end date');
  }

  const interval = [];

  while (!startDate.isAfter(endDate)) {
    interval.push(startDate.toDate());
    startDate = startDate.add(1, 'day');
  }

  return interval;
};
const formatHtmlDatetime = date => dayjs_min.dayjs_min(date).toISOString();

exports.difference = difference;
exports.eachDayOfInterval = eachDayOfInterval;
exports.formatHtmlDatetime = formatHtmlDatetime;
//# sourceMappingURL=date.js.map
