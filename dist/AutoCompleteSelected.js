'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var ButtonBase = require('./ButtonBase.js');
var AutoComplete = require('./AutoComplete.js');
var miscellaneous = require('./miscellaneous.js');
var Theme = require('./Theme.js');
var constants = require('./constants.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./environment.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./css.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./web-7e5f0d11.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./SearchInput.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-47e61be4.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./TextInput.js');
require('./IconSearch.js');
require('./IconPropTypes-19476a71.js');
require('./IconCross.js');
require('./useFocusLeave.js');
require('./useArrowKeysFocus.js');
require('./useClickOutside.js');
require('./useKeyDown.js');
require('./springs.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var _StyledButtonBase = _styled__default['default'](ButtonBase['default']).withConfig({
  displayName: "AutoCompleteSelected___StyledButtonBase",
  componentId: "sc-15vq9oz-0"
})(["height:40px;width:100%;text-align:left;background:", ";cursor:pointer;border:1px solid ", ";padding:4px 8px;", ";"], p => p._css, p => p._css2, p => p._css3);

function AutoCompleteSelected({
  forwardedRef,
  itemButtonStyles,
  items,
  onChange,
  onSelect,
  onSelectedClick = miscellaneous.noop,
  placeholder,
  renderItem,
  required,
  renderSelected = miscellaneous.identity,
  selected,
  selectedButtonStyles = '',
  value,
  wide
}) {
  const theme = Theme.useTheme();
  const ref = forwardedRef;
  const selectedRef = React.useRef();
  const handleSelect = React.useCallback(selected => {
    onSelect(selected);
    setTimeout(() => {
      selectedRef.current.focus();
    }, 0);
  }, [onSelect]);
  const handleSelectedClick = React.useCallback(() => {
    onSelectedClick();
    setTimeout(() => {
      if (ref && ref.current) {
        ref.current.select();
        ref.current.focus();
      }
    }, 0);
  }, [ref, onSelectedClick]);

  if (selected) {
    return /*#__PURE__*/React__default['default'].createElement(_StyledButtonBase, {
      onClick: handleSelectedClick,
      ref: selectedRef,
      focusRingRadius: constants.RADIUS,
      focusRingSpacing: 1,
      _css: theme.surface,
      _css2: theme.border,
      _css3: selectedButtonStyles
    }, renderSelected(selected));
  }

  return /*#__PURE__*/React__default['default'].createElement(AutoComplete['default'], {
    itemButtonStyles: itemButtonStyles,
    items: items,
    onChange: onChange,
    onSelect: handleSelect,
    placeholder: placeholder,
    ref: ref,
    renderItem: renderItem,
    required: required,
    value: value,
    wide: wide
  });
}

AutoCompleteSelected.propTypes = {
  forwardedRef: index.propTypes.object,
  itemButtonStyles: index.propTypes.string,
  items: index.propTypes.array.isRequired,
  onChange: index.propTypes.func.isRequired,
  onSelect: index.propTypes.func.isRequired,
  onSelectedClick: index.propTypes.func,
  placeholder: index.propTypes.string,
  renderItem: index.propTypes.func,
  renderSelected: index.propTypes.func,
  required: index.propTypes.bool,
  selected: index.propTypes.object,
  selectedButtonStyles: index.propTypes.string,
  value: index.propTypes.string,
  wide: index.propTypes.bool
};
const AutoCompleteSelectedMemo = /*#__PURE__*/React__default['default'].memo(AutoCompleteSelected);
var AutoCompleteSelected$1 = /*#__PURE__*/React__default['default'].forwardRef((props, ref) => /*#__PURE__*/React__default['default'].createElement(AutoCompleteSelectedMemo, _extends._extends({}, props, {
  forwardedRef: ref
})));

exports.default = AutoCompleteSelected$1;
//# sourceMappingURL=AutoCompleteSelected.js.map
