const ItemAmountBase = require('../commons/model/ItemAmountBase');

class IfItem extends ItemAmountBase {
  constructor(item, amount) {
    super(item, amount, 'ifitem');
  }
}

module.exports = IfItem;
