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

function IconCirclePlus({
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
    d: "M17.657 6.343A7.947 7.947 0 0012 4a7.948 7.948 0 00-5.657 2.343A7.948 7.948 0 004 12c0 2.137.832 4.146 2.343 5.657A7.948 7.948 0 0012 20a7.948 7.948 0 005.657-2.343A7.948 7.948 0 0020 12a7.948 7.948 0 00-2.343-5.657zM12 18.707A6.715 6.715 0 015.293 12 6.715 6.715 0 0112 5.293 6.715 6.715 0 0118.707 12 6.715 6.715 0 0112 18.707z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M12 8.412a.646.646 0 00-.646.647v5.883a.646.646 0 101.292 0V9.058A.646.646 0 0012 8.412z"
  }), /*#__PURE__*/React__default['default'].createElement("path", {
    fill: "currentColor",
    d: "M14.941 11.354H9.06a.646.646 0 100 1.292h5.883a.646.646 0 100-1.292z"
  }));
}

IconCirclePlus.propTypes = IconPropTypes.IconPropTypes;

exports.default = IconCirclePlus;
//# sourceMappingURL=IconCirclePlus.js.map
