'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('./extends-5150c1f4.js');
var _styled = require('styled-components');
var React = require('react');
var index$1 = require('./index-37353731.js');
var web = require('./web-7e5f0d11.js');
var index = require('./index-c33eeeef.js');
var ButtonIcon = require('./ButtonIcon.js');
var Viewport = require('./Viewport-47e61be4.js');
var RootPortal = require('./RootPortal.js');
var Theme = require('./Theme.js');
var keycodes = require('./keycodes.js');
var springs = require('./springs.js');
var constants = require('./constants.js');
var css = require('./css.js');
var textStyles = require('./text-styles.js');
var IconCross = require('./IconCross.js');
var environment = require('./environment.js');
require('./_commonjsHelpers-1b94f6bc.js');
require('./objectWithoutPropertiesLoose-34dfcdd4.js');
require('react-dom');
require('./Button.js');
require('./Layout.js');
require('./breakpoints.js');
require('./defineProperty-fdbd3c46.js');
require('./_baseGetTag-6ec23aaa.js');
require('./ButtonBase.js');
require('./FocusVisible.js');
require('./miscellaneous.js');
require('./theme-dark.js');
require('./theme-light.js');
require('./color.js');
require('./font.js');
require('./Root-7caeef16.js');
require('./IconPropTypes-19476a71.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _styled__default = /*#__PURE__*/_interopDefaultLegacy(_styled);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

const CONTENT_PADDING = 3 * constants.GU; // The closing position of the panel, on the right side of the viewport.
// It takes into consideration the shadow of the panel.

const CLOSING_POSITION = 5 * constants.GU;
const SidePanelContext = /*#__PURE__*/React__default['default'].createContext(null);

var _StyledDiv = _styled__default['default']("div").withConfig({
  displayName: "SidePanel___StyledDiv",
  componentId: "sc-1kjx6mk-0"
})(["position:absolute;z-index:1;top:0;left:0;right:0;bottom:0;pointer-events:", ";overflow:hidden;"], p => p._css);

var _StyledAnimatedDiv = _styled__default['default'](web.extendedAnimated.div).withConfig({
  displayName: "SidePanel___StyledAnimatedDiv",
  componentId: "sc-1kjx6mk-1"
})(["position:absolute;top:0;left:0;right:0;bottom:0;background:", ";"], p => p._css2);

var _StyledHeader = _styled__default['default']("header").withConfig({
  displayName: "SidePanel___StyledHeader",
  componentId: "sc-1kjx6mk-2"
})(["display:flex;flex-direction:column;justify-content:center;flex-shrink:0;position:relative;height:", "px;padding-left:", "px;border-bottom:1px solid ", ";", ";"], p => p._css3, CONTENT_PADDING, p => p._css4, p => p._css5);

var _StyledH = _styled__default['default']("h1").withConfig({
  displayName: "SidePanel___StyledH",
  componentId: "sc-1kjx6mk-3"
})(["color:", ";", ";"], p => p._css6, p => p._css7);

var _StyledButtonIcon = _styled__default['default'](ButtonIcon['default']).withConfig({
  displayName: "SidePanel___StyledButtonIcon",
  componentId: "sc-1kjx6mk-4"
})(["position:absolute;", ""], p => p._css8);

var _StyledDiv2 = _styled__default['default']("div").withConfig({
  displayName: "SidePanel___StyledDiv2",
  componentId: "sc-1kjx6mk-5"
})(["overflow-y:auto;height:100%;display:flex;flex-direction:column;"]);

var _StyledDiv3 = _styled__default['default']("div").withConfig({
  displayName: "SidePanel___StyledDiv3",
  componentId: "sc-1kjx6mk-6"
})(["min-height:0;flex-grow:1;flex-shrink:0;display:flex;flex-direction:column;width:100%;padding-right:", "px;padding-left:", "px;padding-bottom:", "px;"], CONTENT_PADDING, CONTENT_PADDING, CONTENT_PADDING);

function SidePanel({
  blocking,
  children,
  opened,
  onClose,
  onTransitionEnd,
  title
}) {
  const theme = Theme.useTheme();
  const {
    below
  } = Viewport.useViewport();
  const compact = below('medium');
  const close = React.useCallback(() => {
    if (!blocking) {
      onClose();
    }
  }, [blocking, onClose]);
  const handleEscape = React.useCallback(event => {
    if (event.keyCode === keycodes.KEY_ESC && opened) {
      close();
    }
  }, [opened, close]);
  const [status, setStatus] = React.useState(opened ? 'opened' : 'closed');
  const [readyToFocus, setReadyToFocus] = React.useState(false);
  const handleTransitionRest = React.useCallback(() => {
    onTransitionEnd(opened);
    setStatus(opened ? 'opened' : 'closed');
  }, [opened, onTransitionEnd]);
  const handleTransitionStart = React.useCallback(() => {
    setStatus(opened ? 'opening' : 'closing');
  }, [opened]);
  const handleTransitionFrame = React.useCallback((item, _, {
    progress
  }) => {
    if (progress > 0.5 && !readyToFocus) {
      setReadyToFocus(true);
    } else if (progress < 0.5 && readyToFocus) {
      setReadyToFocus(false);
    }
  }, [readyToFocus]);
  const handleTransitionDestroyed = React.useCallback(() => {
    setReadyToFocus(false);
  }, []);
  React.useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [handleEscape]);
  return /*#__PURE__*/React__default['default'].createElement(RootPortal['default'], null, /*#__PURE__*/React__default['default'].createElement(index.i, {
    name: "SidePanel"
  }, /*#__PURE__*/React__default['default'].createElement(web.Transition, {
    items: opened,
    config: { ...springs.springs.lazy,
      precision: 0.001
    },
    from: {
      progress: 0
    },
    enter: {
      progress: Number(opened)
    },
    leave: {
      progress: 0
    },
    onRest: handleTransitionRest,
    onStart: handleTransitionStart,
    onFrame: handleTransitionFrame,
    onDestroyed: handleTransitionDestroyed,
    unique: true,
    native: true
  }, opened => opened && (({
    progress
  }) => /*#__PURE__*/React__default['default'].createElement(_StyledDiv, {
    _css: status !== 'closing' ? 'auto' : 'none'
  }, /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedDiv, {
    onClick: close,
    style: {
      opacity: progress,
      pointerEvents: status !== 'closing' ? 'auto' : 'none'
    },
    _css2: theme.overlay.alpha(0.9)
  }), /*#__PURE__*/React__default['default'].createElement(Panel, {
    compact: compact,
    style: {
      transform: progress.interpolate(v => `
                          translate3d(
                            calc(
                              ${100 * (1 - v)}% +
                              ${CLOSING_POSITION * (1 - v)}px
                            ), 0, 0
                          )
                        `)
    }
  }, /*#__PURE__*/React__default['default'].createElement(_StyledHeader, {
    _css3: 8 * constants.GU,
    _css4: theme.border,
    _css5: css.unselectable()
  }, /*#__PURE__*/React__default['default'].createElement(_StyledH, {
    _css6: theme.surfaceContent,
    _css7: textStyles.textStyle('body1')
  }, title), !blocking && /*#__PURE__*/React__default['default'].createElement(_StyledButtonIcon, {
    label: "Close",
    onClick: close,
    _css8: !compact ? `
                              top: ${2 * constants.GU}px;
                              right: ${2 * constants.GU}px;
                            ` : `
                              top: 0;
                              right: 0;
                              height: ${8 * constants.GU}px;
                              width: ${8 * constants.GU}px;
                            `
  }, /*#__PURE__*/React__default['default'].createElement(IconCross['default'], {
    color: theme.surfaceIcon
  }))), /*#__PURE__*/React__default['default'].createElement(_StyledDiv2, null, /*#__PURE__*/React__default['default'].createElement(_StyledDiv3, null, /*#__PURE__*/React__default['default'].createElement(SidePanelContext.Provider, {
    value: {
      status,
      readyToFocus
    }
  }, children)))))))));
}

SidePanel.propTypes = {
  blocking: index$1.propTypes.bool,
  children: index$1.propTypes.node.isRequired,
  opened: index$1.propTypes.bool,
  onClose: index$1.propTypes.func,
  onTransitionEnd: index$1.propTypes.func,
  title: index$1.propTypes.node.isRequired
};
SidePanel.defaultProps = {
  opened: true,
  blocking: false,
  onClose: () => {},
  onTransitionEnd: () => {}
};

var _StyledAnimatedAside = _styled__default['default'](web.extendedAnimated.aside).withConfig({
  displayName: "SidePanel___StyledAnimatedAside",
  componentId: "sc-1kjx6mk-7"
})(["position:absolute;top:0;right:0;display:flex;flex-direction:column;width:100%;height:100%;background:", ";box-shadow:-2px 0px 4px rgba(0,0,0,0.1);", ""], p => p._css9, p => p._css10);

const Panel = /*#__PURE__*/React__default['default'].memo(function Panel({
  compact,
  ...props
}) {
  const theme = Theme.useTheme();
  return /*#__PURE__*/React__default['default'].createElement(_StyledAnimatedAside, _extends._extends({}, props, {
    _css9: theme.surface,
    _css10: !compact ? 'max-width: 450px;' : ''
  }));
});
Panel.propTypes = {
  compact: index$1.propTypes.bool
};

function useSidePanel() {
  const value = React.useContext(SidePanelContext);

  if (value === null) {
    throw new Error('useSidePanel() was used outside of the SidePanel render tree, ' + 'which has to be declared at an upper level!');
  }

  return value;
}

function useSidePanelFocusOnReady(ref) {
  const {
    readyToFocus
  } = useSidePanel();
  const fallbackRef = React.useRef();

  const _ref = ref || fallbackRef;

  React.useEffect(() => {
    if (readyToFocus && _ref.current) {
      if (_ref.current.focus) {
        _ref.current.focus();
      } else {
        environment.warn('useSidePanelFocusOnReady(): the focus() method wasn’t available on ' + 'the passed ref.');
      }
    }
  }, [readyToFocus, _ref]);
  return _ref;
} // Used for spacing in SidePanelSplit and SidePanelSeparator


SidePanel.HORIZONTAL_PADDING = CONTENT_PADDING;

exports.default = SidePanel;
exports.useSidePanel = useSidePanel;
exports.useSidePanelFocusOnReady = useSidePanelFocusOnReady;
//# sourceMappingURL=SidePanel.js.map
