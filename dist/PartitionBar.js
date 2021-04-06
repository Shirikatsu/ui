'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-37353731.js');
var Distribution = require('./Distribution.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('styled-components');
require('./Theme.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./constants.js');
require('./text-styles.js');
require('./font.js');
require('./miscellaneous.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function PartitionBar({
  data,
  caption,
  colors
}) {
  environment.warnOnce('PartitionBar', 'PartitionBar is deprecated. Please use the Distribution component instead.'); // name => item (renderFullLegendItem)

  const renderFullLegendItem = caption ? ({
    item,
    ...props
  }) => caption({
    name: item,
    ...props
  }) : undefined; // name => item (items)

  const items = data.map(({
    name,
    percentage
  }) => ({
    item: name,
    percentage
  }));
  return /*#__PURE__*/React__default['default'].createElement(Distribution['default'], {
    items: items,
    renderFullLegendItem: renderFullLegendItem,
    colors: colors
  });
}

PartitionBar.propTypes = {
  data: index.propTypes.arrayOf(index.propTypes.shape({
    name: index.propTypes.string.isRequired,
    percentage: index.propTypes.number.isRequired
  })).isRequired,
  colors: index.propTypes.arrayOf(index.propTypes.string),
  caption: index.propTypes.func
};

exports.default = PartitionBar;
//# sourceMappingURL=PartitionBar.js.map
