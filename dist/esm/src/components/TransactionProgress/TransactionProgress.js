import _styled from 'styled-components';
import React from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import ButtonIcon from '../Button/ButtonIcon.js';
import Info from '../Info/Info.js';
import Link from '../Link/Link.js';
import Popover from '../Popover/Popover.js';
import ProgressBar from '../ProgressBar/ProgressBar.js';
import Timer from '../Timer/Timer.js';
import { useTheme } from '../../theme/Theme.js';
import { GU } from '../../style/constants.js';
import IconCross from '../../icons/components/IconCross.js';
import { textStyle } from '../../style/text-styles.js';
import { noop } from '../../utils/miscellaneous.js';

var _StyledSection = _styled("section").withConfig({
  displayName: "TransactionProgress___StyledSection",
  componentId: "vvbhu5-0"
})(["padding:", "px;"], p => p._css);

var _StyledButtonIcon = _styled(ButtonIcon).withConfig({
  displayName: "TransactionProgress___StyledButtonIcon",
  componentId: "vvbhu5-1"
})(["position:absolute;top:", "px;right:", "px;"], p => p._css2, p => p._css3);

var _StyledH = _styled("h1").withConfig({
  displayName: "TransactionProgress___StyledH",
  componentId: "vvbhu5-2"
})(["font-weight:600"]);

var _StyledDiv = _styled("div").withConfig({
  displayName: "TransactionProgress___StyledDiv",
  componentId: "vvbhu5-3"
})(["display:flex;justify-content:space-between;align-items:flex-end;margin:", "px 0 ", "px;"], p => p._css4, p => p._css5);

var _StyledSpan = _styled("span").withConfig({
  displayName: "TransactionProgress___StyledSpan",
  componentId: "vvbhu5-4"
})(["", ";color:", ";"], p => p._css6, p => p._css7);

var _StyledProgressBar = _styled(ProgressBar).withConfig({
  displayName: "TransactionProgress___StyledProgressBar",
  componentId: "vvbhu5-5"
})(["color:", ";"], p => p._css8);

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TransactionProgress___StyledDiv2",
  componentId: "vvbhu5-6"
})(["display:flex;justify-content:", ";align-items:center;padding-top:", "px;"], p => p._css9, p => p._css10);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TransactionProgress___StyledDiv3",
  componentId: "vvbhu5-7"
})(["margin-right:", "px;"], p => p._css11);

var _StyledLink = _styled(Link).withConfig({
  displayName: "TransactionProgress___StyledLink",
  componentId: "vvbhu5-8"
})(["text-decoration:none"]);

const TransactionProgress = /*#__PURE__*/React.memo(function TransactionProgress({
  visible,
  slow,
  progress,
  endTime,
  transactionHashUrl,
  onClose,
  opener
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(Popover, {
    visible: visible,
    opener: opener,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(_StyledSection, {
    _css: 2 * GU
  }, /*#__PURE__*/React.createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: onClose,
    _css2: 1 * GU,
    _css3: 1 * GU
  }, /*#__PURE__*/React.createElement(IconCross, null)), /*#__PURE__*/React.createElement(_StyledH, null, "Pending transaction"), /*#__PURE__*/React.createElement(_StyledDiv, {
    _css4: 2 * GU,
    _css5: 1 * GU
  }, /*#__PURE__*/React.createElement(_StyledSpan, {
    _css6: textStyle('label2'),
    _css7: theme.contentSecondary
  }, "Estimated time:"), /*#__PURE__*/React.createElement(Timer, {
    format: "ms",
    end: endTime
  })), /*#__PURE__*/React.createElement(_StyledProgressBar, {
    value: progress,
    _css8: theme.accent
  }), /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css9: slow ? 'space-between' : 'end',
    _css10: 2 * GU
  }, slow && /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css11: 2 * GU
  }, /*#__PURE__*/React.createElement(Info.Alert, null, "Slow transaction. Retry with more gas")), /*#__PURE__*/React.createElement(_StyledLink, {
    href: transactionHashUrl
  }, "See on Etherscan"))));
});
TransactionProgress.propTypes = {
  endTime: ExtendedPropTypes.instanceOf(Date),
  onClose: ExtendedPropTypes.func,
  opener: ExtendedPropTypes._element,
  progress: ExtendedPropTypes.number,
  slow: ExtendedPropTypes.bool,
  transactionHashUrl: ExtendedPropTypes.string,
  visible: ExtendedPropTypes.bool
};
TransactionProgress.defaultProps = {
  onClose: noop,
  visible: false
};

export default TransactionProgress;
//# sourceMappingURL=TransactionProgress.js.map
