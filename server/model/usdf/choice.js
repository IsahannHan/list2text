const Element = require('../../commons/model/element')

class Choice extends Element {
  constructor(text, cost, displaycost, yesmessage, nomessage, log, giveitem, special, arg0, arg1, arg2, arg3, arg4, nextpage, closedialog) {
    super('choice');
    this.text = text;
    this.cost = cost;
    this.displaycost = displaycost;
    this.yesmessage = yesmessage;
    this.nomessage = nomessage;
    this.log = log;
    this.giveitem = giveitem;
    this.special = special;
    this.arg0 = arg0;
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
    this.arg4 = arg4;
    this.nextpage = nextpage;
    this.closedialog = closedialog;    
  }

  tag() {
    super.tag(
      { value: this.text, tag: 'text' },
      this.cost,
      { value: this.displaycost, tag: 'displaycost' },
      { value: this.yesmessage, tag: 'yesmessage' },
      { value: this.nomessage, tag: 'nomessage' },
      { value: this.log, tag: 'log' },
      { value: this.giveitem, tag: 'giveitem' },
      { value: this.special, tag: 'special' },
      { value: this.arg0, tag: 'arg0' },
      { value: this.arg1, tag: 'arg1' },
      { value: this.arg2, tag: 'arg2' },
      { value: this.arg3, tag: 'arg3' },
      { value: this.arg4, tag: 'arg4' },
      { value: this.nextpage, tag: 'nextpage' },
      { value: this.closedialog, tag: 'closedialog' }
    );
  }
}

module.exports = Choice;
