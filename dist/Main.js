'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _styled = require('styled-components');
var React = require('react');
var index = require('./index-37353731.js');
var url = require('./url.js');
var BaseStyles = require('./BaseStyles.js');
var ToastHub = require('./ToastHub.js');
var Layout = require('./Layout.js');
var ScrollView = require('./ScrollView.js');
var containsComponent = require('./contains-component.js');
var Root = require('./Root-7caeef16.js');
var Viewport = require('./Viewport-47e61be4.js');
var PublicUrl = require('./PublicUrl-2f6a970e.js');
var Theme = require('./Theme.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');
require('./text-styles.js');
require('./font.js');
require('./environment.js');
require('./miscellaneous.js');
require('./defineProperty-fdbd3c46.js');
require('./getDisplayName-7f913e84.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./web-7e5f0d11.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./RootPortal.js');
require('./components.js');
require('./constants.js');
require('./springs.js');
require('./_baseGetTag-6ec23aaa.js');
require('./breakpoints.js');
require('./css.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const {
  Provider: ContainsAppViewProvider,
  useContains: useContainsAppView,
  useRegister: useRegisterAppView
} = containsComponent.initContainsComponent();

var _StyledScrollView = _styled__default['default'](ScrollView['default']).withConfig({
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


  let content = layout ? /*#__PURE__*/React__default['default'].createElement(Layout['default'], null, children) : children;
  content = scrollView ?
  /*#__PURE__*/
  // The main ScrollView is set to 100vh by default (best for Aragon apps)
  // Disable `scrollView` and insert your own if needed.
  React__default['default'].createElement(_StyledScrollView, null, content) : content;
  return /*#__PURE__*/React__default['default'].createElement(Root.Root.Provider, null, /*#__PURE__*/React__default['default'].createElement(Viewport.Viewport.Provider, null, /*#__PURE__*/React__default['default'].createElement(PublicUrl.PublicUrl.Provider, {
    url: url.ensureTrailingSlash(assetsUrl)
  }, /*#__PURE__*/React__default['default'].createElement(Theme.Theme, {
    theme: theme
  }, /*#__PURE__*/React__default['default'].createElement(BaseStyles['default'], null), /*#__PURE__*/React__default['default'].createElement(ToastHub['default'], null, content)))));
}

Main.propTypes = {
  assetsUrl: index.propTypes.string,
  children: index.propTypes.node,
  layout: index.propTypes.bool,
  scrollView: index.propTypes.bool,
  theme: Theme.Theme.propTypes.theme
};
Main.defaultProps = {
  assetsUrl: './aragon-ui/'
};
var Main$1 = (props => /*#__PURE__*/React__default['default'].createElement(ContainsAppViewProvider, null, /*#__PURE__*/React__default['default'].createElement(Main, props)));

exports.default = Main$1;
exports.useContainsAppView = useContainsAppView;
exports.useRegisterAppView = useRegisterAppView;
//# sourceMappingURL=Main.js.map
