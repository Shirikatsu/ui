import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useTheme } from '../../theme/Theme.js';
import { GU } from '../../style/constants.js';
import { textStyle } from '../../style/text-styles.js';

var _StyledTh = _styled("th").withConfig({
  displayName: "TableHeader___StyledTh",
  componentId: "sc-1qxm8cp-0"
})(["padding:0;padding-left:", "px;padding-right:", "px;text-align:", ";white-space:nowrap;color:", ";", ";line-height:", "px;"], p => p._css, p => p._css2, p => p._css3, p => p._css4, p => p._css5, p => p._css6);

function TableHeader({
  title,
  align,
  ...props
}) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledTh, _extends({}, props, {
    _css: align === 'left' ? 2.5 * GU + 1 : 0,
    _css2: align === 'right' ? 2.5 * GU + 1 : 0,
    _css3: align,
    _css4: theme.contentSecondary,
    _css5: textStyle('label2'),
    _css6: 4 * GU
  }), title);
}

TableHeader.propTypes = {
  title: propTypes.string,
  align: propTypes.string
};
TableHeader.defaultProps = {
  align: 'left'
};

export default TableHeader;
//# sourceMappingURL=TableHeader.js.map
