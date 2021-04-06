import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import Timer from '../Timer/Timer.js';
import { warnOnce } from '../../utils/environment.js';

class Countdown extends React.Component {
  deprecationWarning() {
    warnOnce('Countdown', '"Countdown" has been deprecated. Please use "Timer" instead.');
  }

  render() {
    this.deprecationWarning();
    const {
      end,
      removeDaysAndHours
    } = this.props;
    const format = removeDaysAndHours ? 'ms' : 'dhms';
    return /*#__PURE__*/React.createElement(Timer, {
      end: end,
      format: format
    });
  }

}

Countdown.propTypes = {
  end: propTypes.instanceOf(Date).isRequired,
  removeDaysAndHours: propTypes.bool
};
Countdown.defaultProps = {
  removeDaysAndHours: false
};

export default Countdown;
//# sourceMappingURL=Countdown.js.map
