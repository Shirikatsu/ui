'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-37353731.js');
var BadgeBase = require('./BadgeBase.js');
var environment = require('./environment.js');
var web3 = require('./web3-d10e8f7e.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./index-c33eeeef.js');
require('./ButtonBase.js');
require('./extends-5150c1f4.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./constants.js');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./keycodes.js');
require('./text-styles.js');
require('./font.js');
require('./css.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const TransactionBadge = /*#__PURE__*/React__default['default'].memo(function TransactionBadge({
  className,
  disabled,
  labelStyle,
  networkType,
  shorten,
  style,
  transaction,
  // Deprecated
  background,
  fontSize
}) {
  if (fontSize) {
    environment.warnOnce('TransactionBadge:fontSize', 'The “fontSize” prop is deprecated. Please use “labelStyle” to style the label instead.');
  }

  if (background) {
    environment.warnOnce('TransactionBadge:background', 'The “background” prop is deprecated. Please use “className” to style the badge instead.');
  }

  const isTx = web3.isTransaction(transaction);
  const transactionUrl = isTx ? web3.blockExplorerUrl('transaction', transaction, {
    networkType
  }) : '';
  const label = !isTx ? 'Invalid transaction' : shorten ? web3.shortenTransaction(transaction) : transaction;
  return /*#__PURE__*/React__default['default'].createElement(BadgeBase['default'], {
    badgeOnly: true,
    disabled: disabled || !transactionUrl,
    href: transactionUrl,
    label: label,
    labelStyle: labelStyle,
    title: transaction
  });
});
TransactionBadge.propTypes = {
  className: index.propTypes.string,
  disabled: index.propTypes.bool,
  labelStyle: index.propTypes.string,
  networkType: index.propTypes.string,
  shorten: index.propTypes.bool,
  style: index.propTypes.object,
  transaction: index.propTypes.string.isRequired,
  // Deprecated
  background: index.propTypes.string,
  fontSize: index.propTypes.string
};
TransactionBadge.defaultProps = {
  networkType: 'main',
  shorten: true
};

exports.default = TransactionBadge;
//# sourceMappingURL=TransactionBadge.js.map
