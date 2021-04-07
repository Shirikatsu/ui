import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import ExtendedPropTypes from '../../proptypes.js';
import { useTheme } from '../../theme/Theme2.js';
import { GU } from '../../style/constants.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "TableCell___StyledDiv",
  componentId: "sc-110j155-0"
})(["display:flex;align-items:center;justify-content:", ";"], p => p._css);

function ContentContainerDefault({
  align,
  ...props
}) {
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    _css: align === 'right' ? 'flex-end' : 'space-between'
  }));
}

ContentContainerDefault.propTypes = {
  align: ExtendedPropTypes.string
};

var _StyledTd = _styled("td").withConfig({
  displayName: "TableCell___StyledTd",
  componentId: "sc-110j155-1"
})(["padding:", "px;background:", ";text-align:", ";"], p => p._css2, p => p._css3, p => p._css4);

function TableCell({
  children,
  contentContainer: Container,
  align,
  ...props
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledTd, _extends({}, props, {
    _css2: 2.5 * GU,
    _css3: theme.surface,
    _css4: align
  }), /*#__PURE__*/React.createElement(Container, {
    align: align
  }, children));
}

TableCell.propTypes = {
  align: ExtendedPropTypes.string,
  contentContainer: ExtendedPropTypes._component,
  children: ExtendedPropTypes.node
};
TableCell.defaultProps = {
  align: 'left',
  contentContainer: ContentContainerDefault
}; // Compatibility (not sure this is used at all?)

export default TableCell;
export { ContentContainerDefault as StyledTableCellContent };
//# sourceMappingURL=TableCell.js.map
