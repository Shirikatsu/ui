'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var index = require('./index-c33eeeef.js');
var Card = require('./Card.js');
var Theme = require('./Theme.js');
var PublicUrl = require('./PublicUrl-2f6a970e.js');
var environment = require('./environment.js');
var constants = require('./constants.js');
var textStyles = require('./text-styles.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./defineProperty-fdbd3c46.js');
require('./keycodes.js');
require('./css.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./getDisplayName-7f913e84.js');
require('./url.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var illustrationDefault = "48526b4ed811c6ff.png";

var _StyledCard = _styled__default['default'](Card['default']).withConfig({
  displayName: "EmptyStateCard___StyledCard",
  componentId: "ov2yly-0"
})(["display:grid;grid-template-columns:1fr;grid-template-rows:", "px 1fr auto;height:", "px;padding:", "px;text-align:center;"], p => p._css, p => p._css2, p => p._css3);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv",
  componentId: "ov2yly-1"
})(["display:flex;justify-content:center;overflow:hidden;"]);

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "EmptyStateCard___StyledDiv2",
  componentId: "ov2yly-2"
})(["color:", ";", ";"], p => p._css4, p => p._css5);

const EmptyStateCard = /*#__PURE__*/React__default['default'].memo(function EmptyStateCard({
  action,
  icon,
  illustration,
  text,
  ...props
}) {
  const theme = Theme.useTheme();
  const publicUrl = PublicUrl.usePublicUrl();

  if (icon !== undefined) {
    environment.warnOnce('EmptyStateCard:icon', 'EmptyStateCard: the `icon` prop is deprecated, please use `illustration` instead.');

    if (illustration === undefined) {
      illustration = icon;
    }
  } // default illustration


  if (!illustration) {
    illustration = /*#__PURE__*/React__default['default'].createElement("img", {
      src: publicUrl + illustrationDefault,
      alt: "",
      height: 20 * constants.GU
    });
  }

  return /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "EmptyStateCard"
  }, /*#__PURE__*/React__default['default'].createElement(_StyledCard, _extends._extends({}, props, {
    _css: 20 * constants.GU,
    _css2: 42 * constants.GU,
    _css3: 2 * constants.GU
  }), /*#__PURE__*/React__default['default'].createElement(_StyledDiv, null, illustration), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, {
    _css4: theme.surfaceContent,
    _css5: textStyles.textStyle('title4')
  }, text), /*#__PURE__*/React__default['default'].createElement("div", null, action)));
});
EmptyStateCard.propTypes = {
  action: index$1.propTypes.node,
  illustration: index$1.propTypes.node,
  text: index$1.propTypes.node.isRequired,
  // deprecated
  icon: index$1.propTypes.node
};

exports.default = EmptyStateCard;
//# sourceMappingURL=EmptyStateCard.js.map
