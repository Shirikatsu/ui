'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-37353731.js');
var Timer = require('./Timer.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./defineProperty-fdbd3c46.js');
require('styled-components');
require('./_baseGetTag-6ec23aaa.js');
require('./dayjs.min-622e877a.js');
require('./date.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./IconClock.js');
require('./IconPropTypes-19476a71.js');
require('./index-c33eeeef.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./css.js');
require('./Redraw-5360db8f.js');
require('./getDisplayName-7f913e84.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

class Countdown extends React__default['default'].Component {
  deprecationWarning() {
    environment.warnOnce('Countdown', '"Countdown" has been deprecated. Please use "Timer" instead.');
  }

  render() {
    this.deprecationWarning();
    const {
      end,
      removeDaysAndHours
    } = this.props;
    const format = removeDaysAndHours ? 'ms' : 'dhms';
    return /*#__PURE__*/React__default['default'].createElement(Timer['default'], {
      end: end,
      format: format
    });
  }

}

Countdown.propTypes = {
  end: index.propTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: index.propTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

exports.default = Countdown;
//# sourceMappingURL=Countdown.js.map
