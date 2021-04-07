import _styled, { css } from 'styled-components';
import React, { useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import ButtonBaseWithFocus from '../ButtonBase/ButtonBase.js';
import { RADIUS, GU } from '../../style/constants.js';
import { useTheme } from '../../theme/Theme.js';

var _StyledButtonBase = _styled(ButtonBaseWithFocus).withConfig({
  displayName: "PaginationItem___StyledButtonBase",
  componentId: "kftpwz-0"
})(["width:", "px;height:", "px;color:", ";border-radius:", "px;&:active{background:", ";}", ";"], p => p._css, p => p._css2, p => p._css3, RADIUS, p => p._css4, p => p._css5);

var _StyledSpan = _styled("span").withConfig({
  displayName: "PaginationItem___StyledSpan",
  componentId: "kftpwz-1"
})(["position:relative;top:1px;"]);

function PaginationItem({
  touchMode,
  selected,
  index,
  onChange
}) {
  const theme = useTheme();
  const handleClick = useCallback(() => {
    onChange(index);
  }, [index, onChange]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_StyledButtonBase, {
    onClick: handleClick,
    focusRingRadius: RADIUS,
    disabled: selected,
    _css: (touchMode ? 4 : 3) * GU,
    _css2: (touchMode ? 4 : 3) * GU,
    _css3: theme.surfaceContent,
    _css4: theme.surfacePressed,
    _css5: selected && css(["&&{background:", ";color:", ";}"], theme.accent, theme.accentContent)
  }, /*#__PURE__*/React.createElement(_StyledSpan, null, index + 1)));
}

PaginationItem.propTypes = {
  index: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
  selected: propTypes.bool.isRequired,
  touchMode: propTypes.bool.isRequired
};

export { PaginationItem };
//# sourceMappingURL=PaginationItem.js.map
