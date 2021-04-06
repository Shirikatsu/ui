import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import Distribution from '../Distribution/Distribution.js';
import { warnOnce } from '../../utils/environment.js';

function PartitionBar({
  data,
  caption,
  colors
}) {
  warnOnce('PartitionBar', 'PartitionBar is deprecated. Please use the Distribution component instead.'); // name => item (renderFullLegendItem)

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
  return /*#__PURE__*/React.createElement(Distribution, {
    items: items,
    renderFullLegendItem: renderFullLegendItem,
    colors: colors
  });
}

PartitionBar.propTypes = {
  data: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired
  })).isRequired,
  colors: propTypes.arrayOf(propTypes.string),
  caption: propTypes.func
};

export default PartitionBar;
//# sourceMappingURL=PartitionBar.js.map
