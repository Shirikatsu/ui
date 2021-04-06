import _styled from 'styled-components';
import React from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import RadioGroup from './RadioGroup.js';
import RadioListItem from './RadioListItem.js';
import { GU } from '../../style/constants.js';
import { noop } from '../../utils/miscellaneous.js';

var _StyledH = _styled("h2").withConfig({
  displayName: "RadioList___StyledH",
  componentId: "sc-1hkg1b7-0"
})(["margin-bottom:", "px;font-weight:600;"], p => p._css);

var _StyledDiv = _styled("div").withConfig({
  displayName: "RadioList___StyledDiv",
  componentId: "sc-1hkg1b7-1"
})(["margin-bottom:", "px;"], p => p._css2);

var _StyledRadioGroup = _styled(RadioGroup).withConfig({
  displayName: "RadioList___StyledRadioGroup",
  componentId: "sc-1hkg1b7-2"
})(["display:flex;flex-direction:column;"]);

function RadioList({
  description,
  items,
  onChange,
  selected,
  title,
  ...props
}) {
  return /*#__PURE__*/React.createElement("div", props, title && /*#__PURE__*/React.createElement(_StyledH, {
    _css: 0.5 * GU
  }, title), description && /*#__PURE__*/React.createElement(_StyledDiv, {
    _css2: 2.5 * GU
  }, description), /*#__PURE__*/React.createElement(_StyledRadioGroup, {
    onChange: onChange,
    selected: selected
  }, items.map(({
    description,
    title
  }, i) => /*#__PURE__*/React.createElement(RadioListItem, {
    key: i,
    description: description,
    index: i,
    title: title
  }))));
}

RadioList.propTypes = {
  description: propTypes.node,
  items: propTypes.arrayOf(propTypes.shape({
    description: propTypes.node.isRequired,
    title: propTypes.node.isRequired
  })),
  onChange: propTypes.func,
  selected: ({
    items,
    selected
  }, _, componentName) => {
    if (!Number.isInteger(selected) || selected >= items.length) {
      throw new Error(`Invalid prop \`selected\` supplied to \`${componentName}\`. ` + '`selected` must be an integer less than the length of `items`. ' + `Given ${selected} instead.`);
    }
  },
  title: propTypes.node
};
RadioList.defaultProps = {
  items: [],
  onChange: noop,
  selected: 0
};

export default RadioList;
//# sourceMappingURL=RadioList.js.map
