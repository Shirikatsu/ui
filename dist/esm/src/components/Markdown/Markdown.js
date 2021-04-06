import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import Markdown$1 from '../../../node_modules/markdown-to-jsx/dist/esm.js';
import CheckBoxWithTheme from '../Input/Checkbox.js';
import Link from '../Link/Link.js';
import NormalizedHtml from './NormalizedHtml.js';

function CustomInput(props) {
  props = { ...props
  };

  if (props.type === 'checkbox') {
    delete props.type;
    return /*#__PURE__*/React.createElement(CheckBoxWithTheme, props);
  }

  return /*#__PURE__*/React.createElement("input", props);
}

CustomInput.propTypes = {
  type: propTypes.string
};

function Markdown({
  allowHtml,
  className,
  content,
  markdownToJsxOptions,
  normalized,
  style,
  ...props
}) {
  const markdownToJsxOptionsBase = {
    disableParsingRawHTML: !allowHtml,
    overrides: {
      a: Link,
      input: CustomInput
    }
  };
  const markdown = /*#__PURE__*/React.createElement("div", {
    className: className,
    style: style
  }, /*#__PURE__*/React.createElement(Markdown$1, {
    options: markdownToJsxOptions ? markdownToJsxOptions(markdownToJsxOptionsBase) : markdownToJsxOptionsBase
  }, content));
  return normalized ? /*#__PURE__*/React.createElement(NormalizedHtml, null, markdown) : markdown;
}

Markdown.propTypes = {
  allowHtml: propTypes.bool,
  className: propTypes.string,
  content: propTypes.string.isRequired,
  markdownToJsxOptions: propTypes.func,
  normalized: propTypes.bool,
  style: propTypes.object
};
Markdown.defaultProps = {
  normalized: false
};

export default Markdown;
//# sourceMappingURL=Markdown.js.map
