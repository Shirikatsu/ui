'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var ButtonBase = require('./ButtonBase.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
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

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "BadgeBase___StyledButtonBase",
  componentId: "sc-4zaahn-0"
})(["display:inline-flex;overflow:hidden;color:", ";height:", "px;background:", ";", ";&:active{", ";}"], p => p._css, p => p._css2, p => p._css3, p => p._css4, p => p._css5);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "BadgeBase___StyledDiv",
  componentId: "sc-4zaahn-1"
})(["overflow:hidden;display:flex;align-items:center;text-decoration:none;", ";"], p => p._css6);

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "BadgeBase___StyledSpan",
  componentId: "sc-4zaahn-2"
})(["white-space:nowrap;text-overflow:ellipsis;overflow:hidden;", " ", ""], p => p._css7, p => p._css8);

const BadgeBase = /*#__PURE__*/React__default['default'].memo(function BadgeBase({
  badgeRef,
  children,
  className,
  compact,
  disabled,
  href,
  icon,
  label,
  labelStyle,
  onClick,
  style,
  title,
  ...props
}) {
  const theme = Theme.useTheme();
  const [insideDropDownMenu] = index.o('DropDown');

  if (insideDropDownMenu) {
    disabled = true;
  }

  return /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, {
    ref: badgeRef,
    title: title,
    disabled: disabled,
    element: href || disabled ? 'a' : 'button',
    onClick: !disabled ? onClick : undefined,
    href: !disabled ? href : undefined,
    focusRingRadius: constants.RADIUS,
    _css: theme.badgeContent,
    _css2: 3 * constants.GU,
    _css3: compact ? 'transparent' : theme.badge,
    _css4: insideDropDownMenu ? 'cursor: pointer' : '',
    _css5: !disabled && compact ? `background: ${theme.badgePressed}` : ''
  }, /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    className: className,
    style: style,
    _css6: compact ? `
                  padding: 0 ${1 * constants.GU}px;
                  border-radius: 2px;
                ` : `
                  padding-left: ${(icon ? 0 : 1.5) * constants.GU}px;
                  padding-right: ${(icon ? 1 : 1.5) * constants.GU}px;
                  border-radius: ${constants.RADIUS}px;
                `
  }, icon, /*#__PURE__*/React__default['default'].createElement(_StyledSpan, {
    _css7: textStyles.textStyle('body2'),
    _css8: labelStyle
  }, label))), typeof children === 'function' ? children(disabled) // whether popover is disabled
  : children);
});
BadgeBase.propTypes = {
  badgeRef: index$1.propTypes.any,
  children: index$1.propTypes.oneOfType([index$1.propTypes.node, index$1.propTypes.func]),
  className: index$1.propTypes.string,
  compact: index$1.propTypes.bool,
  disabled: index$1.propTypes.bool,
  href: index$1.propTypes.string,
  icon: index$1.propTypes.node,
  label: index$1.propTypes.node.isRequired,
  labelStyle: index$1.propTypes.string,
  onClick: index$1.propTypes.func,
  style: index$1.propTypes.object,
  title: index$1.propTypes.string
};

exports.default = BadgeBase;
//# sourceMappingURL=BadgeBase.js.map
