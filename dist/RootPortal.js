'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var index = require('./index-37353731.js');
var ReactDOM = require('react-dom');
var Root = require('./Root-7caeef16.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./extends-5150c1f4.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var ReactDOM__default = /*#__PURE__*/_interopDefaultLegacy(ReactDOM);

const RootPortal = props => /*#__PURE__*/React__default['default'].createElement(Root.Root, null, rootElement => {
  if (!rootElement) {
    throw new Error('<RootPortal> needs to be nested in <Root.Provider>. Have you declared <Main>?');
  }

  return /*#__PURE__*/ReactDOM__default['default'].createPortal(props.children, rootElement);
});

RootPortal.propTypes = {
  children: index.propTypes.node.isRequired
};

exports.default = RootPortal;
//# sourceMappingURL=RootPortal.js.map
