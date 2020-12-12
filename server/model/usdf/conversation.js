const Element = require('../../commons/model/element')

class Conversation extends Element {
  constructor(actor, page) {
    super('conversation');
    this.actor = actor;
    this.page = page;
  }

  tag() {
    return super.tag(
      { value: this.actor, tag: 'actor' },
      this.page
    );
  }
}

module.exports = Conversation;
