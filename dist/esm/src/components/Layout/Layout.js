import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React, { useContext, useMemo } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { useViewport } from '../../providers/Viewport/Viewport.js';
import { BREAKPOINTS } from '../../style/breakpoints.js';
import { GU } from '../../style/constants.js';
import { cssPx } from '../../utils/css.js';

function getSizes(breakpoints) {
  return Object.entries(breakpoints).filter(([name]) => name !== 'min').sort((a, b) => a[1] - b[1]);
}

const breakpointsType = propTypes.shape({
  min: propTypes.number,
  small: propTypes.number,
  medium: propTypes.number,
  large: propTypes.number
}); // Minimum margin around a layout

const MIN_MARGIN = 3 * GU;

function getLayoutSize(parentWidth, breakpoints) {
  const sizes = getSizes(breakpoints);
  let index = sizes.length;

  while (index--) {
    if (parentWidth >= sizes[index][1]) {
      return [sizes[index][0], sizes[index][1] - (index === 0 ? 0 : MIN_MARGIN * 2)];
    }
  }

  return sizes[0];
}

function useMergeBreakpoints(breakpoints) {
  const breakpointsAsString = JSON.stringify(breakpoints); // Only compute once by comparing values rather than object references in dependency array
  // eslint-disable-next-line react-hooks/exhaustive-deps

  return useMemo(() => ({ ...BREAKPOINTS,
    ...breakpoints
  }), [breakpointsAsString]);
}

const LayoutContext = /*#__PURE__*/React.createContext({});

function useLayout() {
  const {
    layoutWidth,
    layoutName
  } = useContext(LayoutContext);
  return {
    layoutName,
    layoutWidth,
    // deprecated
    name: layoutName,
    width: layoutWidth
  };
}

function Layout({
  breakpoints,
  children,
  paddingBottom,
  parentWidth,
  ...props
}) {
  const mergedBreakpoints = useMergeBreakpoints(breakpoints);
  return /*#__PURE__*/React.createElement(LayoutProvider, {
    parentWidth: parentWidth,
    breakpoints: breakpoints
  }, /*#__PURE__*/React.createElement(LayoutWidthLimiter, _extends({
    minWidth: mergedBreakpoints.min,
    paddingBottom: paddingBottom
  }, props), children));
}

Layout.propTypes = {
  breakpoints: breakpointsType,
  children: propTypes.node,
  paddingBottom: propTypes.oneOfType([propTypes.number, propTypes.string]),
  parentWidth: propTypes.number
};
Layout.defaultProps = {
  breakpoints: {},
  paddingBottom: 3 * GU
};

function LayoutProvider({
  breakpoints,
  children,
  parentWidth
}) {
  const {
    width: viewportWidth
  } = useViewport();
  const mergedBreakpoints = useMergeBreakpoints(breakpoints); // If the parent width is not passed, use the viewport width.

  const [layoutName, layoutWidth] = useMemo(() => getLayoutSize(parentWidth === undefined ? viewportWidth : parentWidth, mergedBreakpoints), [viewportWidth, parentWidth, mergedBreakpoints]);
  return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    value: {
      layoutWidth,
      layoutName
    }
  }, children);
}

LayoutProvider.propTypes = {
  breakpoints: breakpointsType,
  children: propTypes.node,
  parentWidth: propTypes.number
};
LayoutProvider.defaultProps = {
  breakpoints: {}
};
/* eslint-disable react/prop-types */

var _StyledDiv = _styled("div").withConfig({
  displayName: "Layout___StyledDiv",
  componentId: "sc-16bvfls-0"
})(["width:", ";min-width:", "px;margin:0 auto;padding-bottom:", ";"], p => p._css, p => p._css2, p => p._css3);

function LayoutWidthLimiter({
  children,
  minWidth,
  paddingBottom,
  ...props
}) {
  const {
    layoutName,
    layoutWidth
  } = useLayout();
  return /*#__PURE__*/React.createElement(_StyledDiv, _extends({}, props, {
    _css: layoutName === 'small' ? 'auto' : `${layoutWidth}px`,
    _css2: minWidth,
    _css3: cssPx(paddingBottom)
  }), children);
}

export default Layout;
export { LayoutProvider, useLayout };
//# sourceMappingURL=Layout.js.map
