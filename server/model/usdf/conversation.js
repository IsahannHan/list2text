const Element = require('../../commons/model/Element')

class Conversation extends Element {
  constructor(actor, page, tabs) {
    super('conversation', tabs);
    this.actor = actor;
    this.page = page;
  }

  tag(tabs) {
    return super.tag(
      { value: tabs, tag: 'TABS' },
      { value: this.actor, tag: 'actor' },
      this.page
    );
  }
}

module.exports = Conversation;
