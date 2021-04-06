'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-37353731.js');
var _DataView = require('./DataView.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./Box.js');
require('./extends-5150c1f4.js');
require('./index-c33eeeef.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./Layout.js');
require('./Viewport-47e61be4.js');
require('./defineProperty-fdbd3c46.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./constants.js');
require('./css.js');
require('./text-styles.js');
require('./font.js');
require('./Pagination.js');
require('./PaginationItem.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./PaginationSeparator.js');
require('./IconEllipsis.js');
require('./IconPropTypes-19476a71.js');
require('./TableView.js');
require('./web-7e5f0d11.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./Checkbox.js');
require('./springs.js');
require('./ToggleButton.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./IconUp.js');
require('./IconDown.js');
require('./OpenedSurfaceBorder.js');
require('./ListView.js');
require('./EmptyState.js');
require('./LoadingRing.js');
require('./Link.js');
require('./PublicUrl-2f6a970e.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const Accordion = /*#__PURE__*/React__default['default'].memo(function Accordion({
  items,
  className,
  style
}) {
  const fields = React.useMemo(() => [null], []);
  const renderEntry = React.useCallback(([row]) => [row], []);
  const renderEntryExpansion = React.useCallback(([_, expansion]) => /*#__PURE__*/React__default['default'].createElement(React__default['default'].Fragment, null, expansion), []);
  return /*#__PURE__*/React__default['default'].createElement(_DataView['default'], {
    className: className,
    entries: items,
    entriesPerPage: -1,
    fields: fields,
    renderEntry: renderEntry,
    renderEntryExpansion: renderEntryExpansion,
    style: style
  });
}); // className and style are passed manually to ensure users don’t rely on extra
// props to be passed to DataView. The reason is because Accordion is going to
// stop consuming DataView in the future, and would instead share a common
// “expandable” component with it.

Accordion.propTypes = {
  className: index.propTypes.string,
  items: index.propTypes.arrayOf(index.propTypes.arrayOf(index.propTypes.node)).isRequired,
  style: index.propTypes.object
};

exports.default = Accordion;
//# sourceMappingURL=Accordion.js.map
