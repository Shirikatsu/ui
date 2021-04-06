import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import FloatIndicator from '../FloatIndicator/FloatIndicator.js';
import LoadingRing from '../LoadingRing/LoadingRing.js';
import { GU } from '../../style/constants.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "SyncIndicator___StyledDiv",
  componentId: "sc-19m50aw-0"
})(["margin-left:", "px;"], p => p._css);

var _StyledSpan = _styled("span").withConfig({
  displayName: "SyncIndicator___StyledSpan",
  componentId: "sc-19m50aw-1"
})(["white-space:nowrap"]);

function SyncIndicator({
  children,
  label,
  shift,
  visible,
  ...props
}) {
  return /*#__PURE__*/React.createElement(FloatIndicator, _extends({
    visible: visible,
    shift: shift
  }, props), /*#__PURE__*/React.createElement(LoadingRing, null), /*#__PURE__*/React.createElement(_StyledDiv, {
    _css: 1.5 * GU
  }, children || /*#__PURE__*/React.createElement(_StyledSpan, null, label, " \uD83D\uDE4F")));
}

SyncIndicator.propTypes = {
  children: propTypes.node,
  label: propTypes.node,
  shift: propTypes.number,
  visible: propTypes.bool
};
SyncIndicator.defaultProps = {
  label: 'Syncing data…'
};

export default SyncIndicator;
//# sourceMappingURL=SyncIndicator.js.map
