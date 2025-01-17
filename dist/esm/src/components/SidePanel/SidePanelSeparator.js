import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import SidePanel from './SidePanel.js';
import { useTheme } from '../../theme/Theme.js';

var _StyledDiv = _styled("div").withConfig({
  displayName: "SidePanelSeparator___StyledDiv",
  componentId: "sc-75c7uf-0"
})(["width:calc(100% + ", "px);margin:0 -", "px;height:1px;background:", ";"], p => p._css, p => p._css2, p => p._css3);

function SidePanelSeparator(props) {
  const theme = useTheme();
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    _css: SidePanel.HORIZONTAL_PADDING * 2,
    _css2: SidePanel.HORIZONTAL_PADDING,
    _css3: theme.border
  }));
}

export default SidePanelSeparator;
//# sourceMappingURL=SidePanelSeparator.js.map
