import React, { useMemo, useCallback } from 'react';
import propTypes from '../../../node_modules/prop-types/index.js';
import DataView from '../DataView/DataView.js';

const Accordion = /*#__PURE__*/React.memo(function Accordion({
  items,
  className,
  style
}) {
  const fields = useMemo(() => [null], []);
  const renderEntry = useCallback(([row]) => [row], []);
  const renderEntryExpansion = useCallback(([_, expansion]) => /*#__PURE__*/React.createElement(React.Fragment, null, expansion), []);
  return /*#__PURE__*/React.createElement(DataView, {
    className: className,
    entries: items,
    entriesPerPage: -1,
    fields: fields,
    renderEntry: renderEntry,
    renderEntryExpansion: renderEntryExpansion,
    style: style
  });
}); // className and style are passed manually to ensure users don’t rely on extra
// props to be passed to DataView. The reason is because Accordion is going to
// stop consuming DataView in the future, and would instead share a common
// “expandable” component with it.

Accordion.propTypes = {
  className: propTypes.string,
  items: propTypes.arrayOf(propTypes.arrayOf(propTypes.node)).isRequired,
  style: propTypes.object
};

export default Accordion;
//# sourceMappingURL=Accordion.js.map
