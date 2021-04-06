import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useRef, useState, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import BadgeBase from '../BadgeBase/BadgeBase.js';
import BadgePopoverActionType from '../BadgeBase/BadgePopoverActionType.js';
import EthIdenticon from '../EthIdenticon/EthIdenticon.js';
import IdentityBadgePopover from './IdentityBadgePopover.js';
import { warnOnce } from '../../utils/environment.js';
import { isAddress, shortenAddress } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "IdentityBadge___StyledDiv",
  componentId: "q71pax-0"
})(["display:block;margin-right:", "px;", ";"], p => p._css, p => p._css2);

const IdentityBadge = /*#__PURE__*/React.memo(function IdentityBadge({
  badgeOnly,
  compact,
  connectedAccount,
  entity,
  label,
  labelStyle,
  networkType,
  popoverAction,
  popoverTitle,
  shorten,
  // Deprecated
  customLabel,
  fontSize,
  ...props
}) {
  if (customLabel) {
    warnOnce('IdentityBadge:customLabel', 'The “customLabel” prop is deprecated. Please use “label” instead.');
    label = label || customLabel;
  }

  if (fontSize) {
    warnOnce('IdentityBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  const badgeRef = useRef(null);
  const [opened, setOpened] = useState(false);
  const handleClose = useCallback(() => setOpened(false), []);
  const handleOpen = useCallback(() => setOpened(true), []);
  const address = isAddress(entity) ? entity : null;
  const displayLabel = label || (address && shorten ? shortenAddress(address) : entity);
  return /*#__PURE__*/React.createElement(BadgeBase, _extends({
    badgeRef: badgeRef,
    compact: compact,
    disabled: badgeOnly,
    icon: address && /*#__PURE__*/React.createElement(_StyledDiv, {
      _css: 1 * GU,
      _css2: compact ? `
                  position: relative;
                  top: -1px;
                ` : ''
    }, /*#__PURE__*/React.createElement(EthIdenticon, {
      scale: compact ? 0.75 : 1,
      radius: compact ? 2 : 0,
      address: address
    })),
    label: displayLabel,
    labelStyle: `
        ${!label && address ? textStyle('address1') : ''}
        ${labelStyle}
      `,
    onClick: address ? handleOpen : undefined,
    title: address
  }, props), popoverDisabled => !popoverDisabled && address && /*#__PURE__*/React.createElement(IdentityBadgePopover, {
    address: address,
    connectedAccount: connectedAccount,
    networkType: networkType,
    onClose: handleClose,
    opener: badgeRef.current,
    popoverAction: popoverAction,
    title: popoverTitle,
    visible: opened
  }));
});
IdentityBadge.propTypes = {
  badgeOnly: propTypes.bool,
  compact: propTypes.bool,
  connectedAccount: propTypes.bool,
  entity: propTypes.string,
  label: propTypes.string,
  labelStyle: propTypes.string,
  networkType: propTypes.string,
  popoverAction: BadgePopoverActionType,
  popoverTitle: propTypes.node,
  shorten: propTypes.bool,
  // Deprecated
  customLabel: propTypes.string,
  fontSize: propTypes.string
};
IdentityBadge.defaultProps = {
  entity: '',
  labelStyle: '',
  networkType: 'main',
  shorten: true
};

export default IdentityBadge;
//# sourceMappingURL=IdentityBadge.js.map
