'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var SidePanel = require('./SidePanel.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-37353731.js');
require('./web-7e5f0d11.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./index-c33eeeef.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./Layout.js');
require('./Viewport-47e61be4.js');
require('./defineProperty-fdbd3c46.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./environment.js');
require('./miscellaneous.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./RootPortal.js');
require('./Root-7caeef16.js');
require('./springs.js');
require('./IconCross.js');
require('./IconPropTypes-19476a71.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "SidePanelSeparator___StyledDiv",
  componentId: "sc-75c7uf-0"
})(["width:calc(100% + ", "px);margin:0 -", "px;height:1px;background:", ";"], p => p._css, p => p._css2, p => p._css3);

function SidePanelSeparator(props) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends({}, props, {
    _css: SidePanel['default'].HORIZONTAL_PADDING * 2,
    _css2: SidePanel['default'].HORIZONTAL_PADDING,
    _css3: theme.border
  }));
}

exports.default = SidePanelSeparator;
//# sourceMappingURL=SidePanelSeparator.js.map
