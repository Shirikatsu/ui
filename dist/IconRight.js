'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var React = require('react');
var IconPropTypes = require('./IconPropTypes-19476a71.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-c33eeeef.js');
require('./index-37353731.js');
require('./constants.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function IconRight({
  size,
  ...props
}) {
  const sizeValue = IconPropTypes.useIconSize(size);
  return /*#__PURE__*/React__default['default'].createElement("svg", _extends._extends({
    width: sizeValue,
    height: sizeValue,
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M8.222 4.607a.737.737 0 000 1.055l5.944 5.838-5.944 5.838a.737.737 0 000 1.054.77.77 0 001.075 0l6.48-6.365a.737.737 0 000-1.054l-6.48-6.366a.77.77 0 00-1.075 0z"
  }));
}

IconRight.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconRight;
//# sourceMappingURL=IconRight.js.map
