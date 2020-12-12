const ItemAmountBase = require('../../commons/model/itemamountbase');

class Cost extends ItemAmountBase {
  constructor(item, amount) {
    super(item, amount, 'cost');
  }
}

module.exports = Cost;
