'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var Layout = require('./Layout.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./Viewport-47e61be4.js');
require('./defineProperty-fdbd3c46.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "CardLayout___StyledDiv",
  componentId: "p97qvl-0"
})(["display:grid;grid-gap:", "px;grid-auto-flow:row;grid-template-columns:repeat( ", ",minmax(", "px,1fr) );grid-auto-rows:", ";align-items:start;padding:0 ", "px ", "px;margin:0 auto;"], p => p._css, p => p._css2, p => p._css3, p => p._css4, p => p._css5, p => p._css6);

function CardLayout({
  children,
  columnWidthMin,
  rowHeight,
  ...props
}) {
  const {
    layoutName
  } = Layout.useLayout();
  const fullWidth = layoutName === 'small';
  const gridAutoRowValue = rowHeight === 'auto' ? rowHeight : `${rowHeight}px`;
  return /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "CardLayout"
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends({}, props, {
    _css: 2 * constants.GU,
    _css2: fullWidth ? 'auto-fit' : 'auto-fill',
    _css3: columnWidthMin,
    _css4: gridAutoRowValue,
    _css5: fullWidth ? 2 * constants.GU : 0,
    _css6: 3 * constants.GU
  }), children));
}

CardLayout.propTypes = {
  children: index$1.propTypes.node,
  columnWidthMin: index$1.propTypes.number,
  rowHeight: index$1.propTypes.oneOfType([index$1.propTypes.oneOf(['auto']), index$1.propTypes.number])
};
CardLayout.defaultProps = {
  columnWidthMin: 21 * constants.GU,
  rowHeight: 21 * constants.GU
};

exports.CardLayout = CardLayout;
exports.default = CardLayout;
//# sourceMappingURL=CardLayout.js.map
