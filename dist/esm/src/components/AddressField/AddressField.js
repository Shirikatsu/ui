import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import TextCopy from '../TextCopy/TextCopy.js';
import EthIdenticon from '../EthIdenticon/EthIdenticon.js';
import { GU } from '../../style/constants.js';

const HEIGHT = 5 * GU;
const IDENTICON_SIZE = 6 * GU;

var _StyledEthIdenticon = _styled(EthIdenticon).withConfig({
  displayName: "AddressField___StyledEthIdenticon",
  componentId: "m75adw-0"
})(["transform:scale(", ");transform-origin:50% 50%;"], p => p._css);

const AddressField = /*#__PURE__*/React.forwardRef(function AddressField({
  address,
  autofocus,
  icon,
  onCopy,
  ...props
}, ref) {
  return /*#__PURE__*/React.createElement(TextCopy, {
    ref: ref,
    adornment: icon || /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_StyledEthIdenticon, {
      address: address,
      onCopy: onCopy,
      scale: 2,
      _css: (HEIGHT - 2) / IDENTICON_SIZE
    })),
    autofocus: autofocus,
    value: address
  });
});
AddressField.propTypes = {
  address: propTypes.string.isRequired,
  autofocus: propTypes.bool,
  icon: propTypes.node,
  onCopy: propTypes.func
};
AddressField.defaultProps = {
  autofocus: true
};

export default AddressField;
//# sourceMappingURL=AddressField.js.map
