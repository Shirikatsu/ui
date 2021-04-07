import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { ensureTrailingSlash } from '../../utils/url.js';
import BaseStyles from '../BaseStyles/BaseStyles.js';
import ToastHubProvider from '../ToastHub/ToastHub.js';
import Layout from '../Layout/Layout.js';
import ScrollView from '../ScrollView/ScrollView.js';
import { initContainsComponent } from '../../utils/contains-component.js';
import { Root } from '../../providers/Root/Root.js';
import { Viewport } from '../../providers/Viewport/Viewport.js';
import { PublicUrl } from '../../providers/PublicUrl/PublicUrl.js';
import { Theme } from '../../theme/Theme2.js';

const {
  Provider: ContainsAppViewProvider,
  useContains: useContainsAppView,
  useRegister: useRegisterAppView
} = initContainsComponent();

var _StyledScrollView = _styled(ScrollView).withConfig({
  displayName: "Main___StyledScrollView",
  componentId: "sc-1n64cjc-0"
})(["height:100vh"]);

function Main({
  assetsUrl,
  children,
  layout,
  scrollView,
  theme
}) {
  const containsAppView = useContainsAppView();

  if (layout === undefined) {
    layout = !containsAppView;
  }

  if (scrollView === undefined) {
    scrollView = !containsAppView;
  } // Optionally wrap `children` with Layout and/or ScrollView


  let content = layout ? /*#__PURE__*/React.createElement(Layout, null, children) : children;
  content = scrollView ?
  /*#__PURE__*/
  // The main ScrollView is set to 100vh by default (best for Aragon apps)
  // Disable `scrollView` and insert your own if needed.
  React.createElement(_StyledScrollView, null, content) : content;
  return /*#__PURE__*/React.createElement(Root.Provider, null, /*#__PURE__*/React.createElement(Viewport.Provider, null, /*#__PURE__*/React.createElement(PublicUrl.Provider, {
    url: ensureTrailingSlash(assetsUrl)
  }, /*#__PURE__*/React.createElement(Theme, {
    theme: theme
  }, /*#__PURE__*/React.createElement(BaseStyles, null), /*#__PURE__*/React.createElement(ToastHubProvider, null, content)))));
}

Main.propTypes = {
  assetsUrl: propTypes.string,
  children: propTypes.node,
  layout: propTypes.bool,
  scrollView: propTypes.bool,
  theme: Theme.propTypes.theme
};
Main.defaultProps = {
  assetsUrl: './aragon-ui/'
};
var Main$1 = (props => /*#__PURE__*/React.createElement(ContainsAppViewProvider, null, /*#__PURE__*/React.createElement(Main, props)));

export default Main$1;
export { useContainsAppView, useRegisterAppView };
//# sourceMappingURL=Main.js.map
