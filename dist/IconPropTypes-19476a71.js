'use strict';

var index = require('./index-c33eeeef.js');
var constants = require('./constants.js');
var index$1 = require('./index-37353731.js');

const ICON_SIZES = new Map([['large', 6 * constants.GU], ['medium', 3 * constants.GU], ['small', 2 * constants.GU], ['tiny', 1.75 * constants.GU]]); // Mapping of button size => icon size

const BUTTON_ICON_SIZES = new Map([['medium', 'medium'], ['small', 'medium'], ['mini', 'small']]);

function useIconSize(size) {
  const [insideButtonIcon, buttonData] = index.o('Button:icon'); // If no size is set on the icon, and it is inside
  // a Button icon slot, adapt it to the size of the button.

  const sizeName = !size && insideButtonIcon ? BUTTON_ICON_SIZES.get(buttonData.size) : size;
  return ICON_SIZES.get(sizeName || 'medium');
}

var IconPropTypes = {
  size: index$1.propTypes.oneOf(['large', 'medium', 'small', 'tiny'])
};

exports.IconPropTypes = IconPropTypes;
exports.useIconSize = useIconSize;
//# sourceMappingURL=IconPropTypes-19476a71.js.map
