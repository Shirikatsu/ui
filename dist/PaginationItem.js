'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var ButtonBase = require('./ButtonBase.js');
var constants = require('./constants.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./environment.js');
require('./miscellaneous.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./css.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "PaginationItem___StyledButtonBase",
  componentId: "kftpwz-0"
})(["width:", "px;height:", "px;color:", ";border-radius:", "px;&:active{background:", ";}", ";"], p => p._css, p => p._css2, p => p._css3, constants.RADIUS, p => p._css4, p => p._css5);

var _StyledSpan = _styled__default['default']("span").withConfig({
  displayName: "PaginationItem___StyledSpan",
  componentId: "kftpwz-1"
})(["position:relative;top:1px;"]);

function PaginationItem({
  touchMode,
  selected,
  index,
  onChange
}) {
  const theme = Theme.useTheme();
  const handleClick = React.useCallback(() => {
    onChange(index);
  }, [index, onChange]);
  return /*#__PURE__*/React__default['default'].createElement("div", null, /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, {
    onClick: handleClick,
    focusRingRadius: constants.RADIUS,
    disabled: selected,
    _css: (touchMode ? 4 : 3) * constants.GU,
    _css2: (touchMode ? 4 : 3) * constants.GU,
    _css3: theme.surfaceContent,
    _css4: theme.surfacePressed,
    _css5: selected && _styled.css(["&&{background:", ";color:", ";}"], theme.accent, theme.accentContent)
  }, /*#__PURE__*/React__default['default'].createElement(_StyledSpan, null, index + 1)));
}

PaginationItem.propTypes = {
  index: index.propTypes.number.isRequired,
  onChange: index.propTypes.func.isRequired,
  selected: index.propTypes.bool.isRequired,
  touchMode: index.propTypes.bool.isRequired
};

exports.PaginationItem = PaginationItem;
//# sourceMappingURL=PaginationItem.js.map
