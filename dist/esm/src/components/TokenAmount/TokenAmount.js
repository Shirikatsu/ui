import _styled from 'styled-components';
import React from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import { UseTokenProvider, useToken } from '../../../node_modules/use-token/dist/index.js';
import r from '../../../node_modules/token-amount/dist/index.js';
import { isAddress } from '../../utils/web3.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';
import { useTheme } from '../../theme/Theme.js';
import { useImageExists } from '../../hooks/useImageExists.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "TokenAmount___StyledDiv",
  componentId: "sc-1ui2my8-0"
})(["display:flex;align-items:center;"]);

var _StyledSpan = _styled("span").withConfig({
  displayName: "TokenAmount___StyledSpan",
  componentId: "sc-1ui2my8-1"
})(["margin-right:", "px;", ";line-height:1;"], p => p._css, p => p._css2);

const TokenAmount = /*#__PURE__*/React.memo(function TokenAmount({
  address,
  amount,
  chainId,
  decimals,
  digits,
  iconUrl,
  size,
  symbol,
  ...props
}) {
  const isValidAddress = isAddress(address);

  if (!isValidAddress && !symbol) {
    throw new Error('TokenAmount: you need to provide a valid address or a symbol');
  }

  return /*#__PURE__*/React.createElement(UseTokenProvider, null, /*#__PURE__*/React.createElement(_StyledDiv, props, /*#__PURE__*/React.createElement(Icon, {
    address: address,
    chainId: chainId,
    iconUrl: iconUrl,
    size: size
  }), amount && /*#__PURE__*/React.createElement(_StyledSpan, {
    _css: size === 'large' ? 0.5 * GU : 0.25 * GU,
    _css2: textStyle(size === 'large' ? 'title2' : 'body2')
  }, r.format(amount, decimals, {
    digits: digits
  })), /*#__PURE__*/React.createElement(Symbol, {
    address: address,
    size: size,
    symbol: symbol
  })));
});

var _StyledDiv2 = _styled("div").withConfig({
  displayName: "TokenAmount___StyledDiv2",
  componentId: "sc-1ui2my8-2"
})(["display:flex;width:", "px;height:", "px;margin-right:", "px;"], p => p._css3, p => p._css4, p => p._css5);

var _StyledDiv3 = _styled("div").withConfig({
  displayName: "TokenAmount___StyledDiv3",
  componentId: "sc-1ui2my8-3"
})(["flex:1;border-radius:100%;border:2px solid ", ";"], p => p._css6);

const Icon = function Icon({
  address,
  chainId,
  iconUrl,
  size
}) {
  const theme = useTheme();
  const token = useToken(chainId === 1 ? address : '');
  const {
    exists
  } = useImageExists(iconUrl || token.iconUrl);
  return /*#__PURE__*/React.createElement(_StyledDiv2, {
    _css3: 3 * GU,
    _css4: 3 * GU,
    _css5: size === 'large' ? 1 * GU : 0.75 * GU
  }, exists ? /*#__PURE__*/React.createElement("img", {
    alt: "",
    width: "100%",
    src: iconUrl || token.iconUrl
  }) : /*#__PURE__*/React.createElement(_StyledDiv3, {
    _css6: theme.border
  }));
};

var _StyledSpan2 = _styled("span").withConfig({
  displayName: "TokenAmount___StyledSpan2",
  componentId: "sc-1ui2my8-4"
})(["color:", ";", ";line-height:1;", " ", ""], p => p._css7, p => p._css8, p => p._css9, p => p._css10);

const Symbol = function Symbol({
  address,
  size,
  symbol
}) {
  const token = useToken(address);
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledSpan2, {
    _css7: theme.surfaceContentSecondary,
    _css8: textStyle('body2'),
    _css9: size === 'large' ? `align-self: flex-end;` : '',
    _css10: size === 'large' ? `transform: translateY(-1px);` : ''
  }, symbol || token.symbol);
};

Icon.propTypes = {
  address: ExtendedPropTypes.string,
  chainId: ExtendedPropTypes.number,
  iconUrl: ExtendedPropTypes.string,
  size: ExtendedPropTypes.oneOf(['large', 'medium'])
};
Symbol.propTypes = {
  address: ExtendedPropTypes.string,
  size: ExtendedPropTypes.oneOf(['large', 'medium']),
  symbol: ExtendedPropTypes.string
};
TokenAmount.propTypes = {
  address: ExtendedPropTypes.string,
  amount: ExtendedPropTypes._bigIntish.isRequired,
  chainId: ExtendedPropTypes.number,
  decimals: ExtendedPropTypes.number.isRequired,
  digits: ExtendedPropTypes.number,
  iconUrl: ExtendedPropTypes.string,
  size: ExtendedPropTypes.oneOf(['large', 'medium']),
  symbol: ExtendedPropTypes.string
};
TokenAmount.defaultProps = {
  chainId: 1,
  digits: 2,
  size: 'medium'
};

export default TokenAmount;
//# sourceMappingURL=TokenAmount.js.map
