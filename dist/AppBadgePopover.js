'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var proptypes = require('./proptypes-7b57c26e.js');
var AddressField = require('./AddressField.js');
var BadgePopoverBase = require('./BadgePopoverBase.js');
var BadgePopoverActionType = require('./BadgePopoverActionType.js');
var Link = require('./Link.js');
var web3 = require('./web3-d10e8f7e.js');
var useImageExists = require('./useImageExists.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./index-37353731.js');
require('./TextCopy.js');
require('./TextInput.js');
require('./constants.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./environment.js');
require('./miscellaneous.js');
require('./color.js');
require('./text-styles.js');
require('./font.js');
require('./ButtonIcon.js');
require('./Button.js');
require('./index-c33eeeef.js');
require('./Layout.js');
require('./Viewport-47e61be4.js');
require('./defineProperty-fdbd3c46.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./keycodes.js');
require('./ToastHub.js');
require('./web-7e5f0d11.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./RootPortal.js');
require('./Root-7caeef16.js');
require('./components.js');
require('./springs.js');
require('./IconCopy.js');
require('./IconPropTypes-19476a71.js');
require('./EthIdenticon.js');
require('./Popover.js');
require('./IconCross.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const AppBadgePopover = /*#__PURE__*/React__default['default'].memo(function AppBadgePopover({
  appAddress,
  iconFallbackSrc,
  iconSrc,
  networkType,
  onClose,
  opener,
  popoverAction,
  title,
  visible
}) {
  const etherscanUrl = web3.blockExplorerUrl('address', appAddress, {
    networkType
  });
  return /*#__PURE__*/React__default['default'].createElement(BadgePopoverBase['default'], {
    addressField: /*#__PURE__*/React__default['default'].createElement(useImageExists.ImageExists, {
      src: iconSrc
    }, ({
      exists,
      displayFallback
    }) => /*#__PURE__*/React__default['default'].createElement(AddressField['default'], {
      address: appAddress,
      icon: /*#__PURE__*/React__default['default'].createElement(Icon, {
        src: exists ? iconSrc : iconFallbackSrc
      })
    })),
    link: etherscanUrl && /*#__PURE__*/React__default['default'].createElement(Link['default'], {
      href: etherscanUrl
    }, "See on Etherscan"),
    onClose: onClose,
    opener: opener,
    popoverAction: popoverAction,
    title: title,
    visible: visible
  });
});
AppBadgePopover.propTypes = {
  appAddress: proptypes.ExtendedPropTypes.string.isRequired,
  iconFallbackSrc: proptypes.ExtendedPropTypes.string,
  iconSrc: proptypes.ExtendedPropTypes.string,
  networkType: proptypes.ExtendedPropTypes.string,
  onClose: proptypes.ExtendedPropTypes.func,
  opener: proptypes.ExtendedPropTypes._element,
  popoverAction: BadgePopoverActionType['default'],
  title: proptypes.ExtendedPropTypes.node.isRequired,
  visible: proptypes.ExtendedPropTypes.bool
};

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "AppBadgePopover___StyledDiv",
  componentId: "cornse-0"
})(["width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p._css);

function Icon({
  src,
  ...props
}) {
  return /*#__PURE__*/React__default['default'].createElement(_StyledDiv, _extends._extends({}, props, {
    _css: src
  }));
}

Icon.propTypes = {
  src: proptypes.ExtendedPropTypes.string.isRequired
};

exports.default = AppBadgePopover;
//# sourceMappingURL=AppBadgePopover.js.map
