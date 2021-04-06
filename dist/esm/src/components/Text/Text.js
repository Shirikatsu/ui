import _extends from '../../../node_modules/@babel/runtime/helpers/extends.js';
import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import { warnOnce } from '../../utils/environment.js';
import { font } from '../../utils/font.js';

var _StyledSpan = _styled("span").withConfig({
  displayName: "Text___StyledSpan",
  componentId: "yxw4o9-0"
})(["", ";", ";"], p => p._css, p => p._css2);

function Text({
  children,
  color,
  deprecationNotice,
  monospace,
  size,
  smallcaps,
  weight,
  ...props
}) {
  if (deprecationNotice) {
    warnOnce('Text', 'Text, Text.Block and Text.Paragraph are deprecated. ' + 'Please use the textStyle() utility function instead.');
  }

  return /*#__PURE__*/React.createElement(_StyledSpan, _extends({}, props, {
    _css: font({
      deprecationNotice: false,
      monospace,
      size,
      smallcaps,
      weight
    }),
    _css2: color ? `color: ${color}` : ''
  }), children);
}

const Block = props => /*#__PURE__*/React.createElement(Text, _extends({
  as: "div"
}, props));

const Paragraph = props => /*#__PURE__*/React.createElement(Text, _extends({
  as: "p"
}, props));

Text.propTypes = Block.propTypes = Paragraph.propTypes = {
  children: propTypes.node,
  color: propTypes.string,
  deprecationNotice: propTypes.bool,
  monospace: propTypes.bool,
  size: propTypes.string,
  smallcaps: propTypes.bool,
  weight: propTypes.string
};
Text.defaultProps = {
  deprecationNotice: true
};
Text.Block = Block;
Text.Paragraph = Paragraph;

export default Text;
//# sourceMappingURL=Text.js.map
