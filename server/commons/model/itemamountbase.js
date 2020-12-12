const Element = require('../../commons/model/element')

class ItemAmountBase extends Element{
  constructor(item, amount, title) {
    super(title);
        this.item = item;
        this.amount = amount;
    }

  tag(tabs) {
    return super.tag(
      { value: tabs, tag: 'TABS' },
      { value: this.item, tag: 'item' },
      { value: this.amount, tag: 'amount' },
    );
  }
}

module.exports = ItemAmountBase;
