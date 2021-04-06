import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import AddressField from '../AddressField/AddressField.js';
import BadgePopoverBase from '../BadgeBase/BadgePopoverBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import Link from '../Link/Link.js';
import { blockExplorerUrl } from '../../utils/web3.js';
import { ImageExists } from '../../hooks/useImageExists.js';

const AppBadgePopover = /*#__PURE__*/React.memo(function AppBadgePopover({
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
  const etherscanUrl = blockExplorerUrl('address', appAddress, {
    networkType
  });
  return /*#__PURE__*/React.createElement(BadgePopoverBase, {
    addressField: /*#__PURE__*/React.createElement(ImageExists, {
      src: iconSrc
    }, ({
      exists,
      displayFallback
    }) => /*#__PURE__*/React.createElement(AddressField, {
      address: appAddress,
      icon: /*#__PURE__*/React.createElement(Icon, {
        src: exists ? iconSrc : iconFallbackSrc
      })
    })),
    link: etherscanUrl && /*#__PURE__*/React.createElement(Link, {
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
  appAddress: ExtendedPropTypes.string.isRequired,
  iconFallbackSrc: ExtendedPropTypes.string,
  iconSrc: ExtendedPropTypes.string,
  networkType: ExtendedPropTypes.string,
  onClose: ExtendedPropTypes.func,
  opener: ExtendedPropTypes._element,
  popoverAction: BadgePopoverActionType,
  title: ExtendedPropTypes.node.isRequired,
  visible: ExtendedPropTypes.bool
};

var _StyledDiv = _styled("div").withConfig({
  displayName: "AppBadgePopover___StyledDiv",
  componentId: "cornse-0"
})(["width:100%;height:100%;background-size:contain;background-position:50% 50%;background-repeat:no-repeat;background-image:url(", ");"], p => p._css);

function Icon({
  src,
  ...props
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    _css: src
  }));
}

Icon.propTypes = {
  src: ExtendedPropTypes.string.isRequired
};

export default AppBadgePopover;
//# sourceMappingURL=AppBadgePopover.js.map
