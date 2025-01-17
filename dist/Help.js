'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var DiscButton = require('./DiscButton.js');
var Popover = require('./Popover.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var IconQuestion = require('./IconQuestion.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./environment.js');
require('./miscellaneous.js');
require('./keycodes.js');
require('./css.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./proptypes-7b57c26e.js');
require('./web-7e5f0d11.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-7caeef16.js');
require('./components.js');
require('./springs.js');
require('./IconPropTypes-19476a71.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiscButton = _styled__default['default'](DiscButton['default']).withConfig({
  displayName: "Help___StyledDiscButton",
  componentId: "sc-11d74sh-0"
})(["margin-top:", "px;margin-left:", "px;"], p => p._css, p => p._css2);

var _StyledPopover = _styled__default['default'](Popover['default']).withConfig({
  displayName: "Help___StyledPopover",
  componentId: "sc-11d74sh-1"
})(["border:0;overflow:hidden;", ";"], p => p._css3);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "Help___StyledDiv",
  componentId: "sc-11d74sh-2"
})(["position:relative;max-width:", "px;min-width:", "px;padding:", "px;&:before{content:'';position:absolute;top:0;left:0;bottom:0;width:", "px;background:", ";}"], p => p._css4, p => p._css5, p => p._css6, p => p._css7, p => p._css8);

function Help({
  hint,
  children
}) {
  const theme = Theme.useTheme();
  const buttonElement = React.useRef();
  const [visible, setVisible] = React.useState(false);
  const open = React.useCallback(() => setVisible(true), []);
  const close = React.useCallback(() => setVisible(false), []);
  const [insideBoxHeading] = index.o('Box:heading');
  const [insideFieldLabel] = index.o('Field:label');
  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(_StyledDiscButton, {
    ref: buttonElement,
    description: hint,
    onClick: open,
    size: 2 * constants.GU,
    _css: insideFieldLabel ? -3 : 0,
    _css2: insideBoxHeading || insideFieldLabel ? 1 * constants.GU : 0
  }, /*#__PURE__*/React__default['default'].createElement(IconQuestion['default'], {
    size: "tiny"
  })), /*#__PURE__*/React__default['default'].createElement(_StyledPopover, {
    opener: buttonElement.current,
    visible: visible,
    onClose: close,
    _css3: textStyles.textStyle('body3')
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css4: 48 * constants.GU,
    _css5: 20 * constants.GU,
    _css6: 3 * constants.GU,
    _css7: 0.5 * constants.GU,
    _css8: theme.help
  }, children)));
}

Help.propTypes = {
  hint: index$1.propTypes.string.isRequired,
  children: index$1.propTypes.node.isRequired
};

exports.default = Help;
//# sourceMappingURL=Help.js.map
