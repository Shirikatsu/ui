'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-7b57c26e.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-37353731.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "TableCell___StyledDiv",
  componentId: "sc-110j155-0"
})(["display:flex;align-items:center;justify-content:", ";"], p => p._css);

function ContentContainerDefault({
  align,
  ...props
}) {
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends({}, props, {
    _css: align === 'right' ? 'flex-end' : 'space-between'
  }));
}

ContentContainerDefault.propTypes = {
  align: proptypes.ExtendedPropTypes.string
};

var _StyledTd = _styled__default['default']("td").withConfig({
  displayName: "TableCell___StyledTd",
  componentId: "sc-110j155-1"
})(["padding:", "px;background:", ";text-align:", ";"], p => p._css2, p => p._css3, p => p._css4);

function TableCell({
  children,
  contentContainer: Container,
  align,
  ...props
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledTd, _extends._extends({}, props, {
    _css2: 2.5 * constants.GU,
    _css3: theme.surface,
    _css4: align
  }), /*#__PURE__*/React__default['default'].createElement(Container, {
    align: align
  }, children));
}

TableCell.propTypes = {
  align: proptypes.ExtendedPropTypes.string,
  contentContainer: proptypes.ExtendedPropTypes._component,
  children: proptypes.ExtendedPropTypes.node
};
TableCell.defaultProps = {
  align: 'left',
  contentContainer: ContentContainerDefault
}; // Compatibility (not sure this is used at all?)

exports.StyledTableCellContent = ContentContainerDefault;
exports.default = TableCell;
//# sourceMappingURL=TableCell.js.map
