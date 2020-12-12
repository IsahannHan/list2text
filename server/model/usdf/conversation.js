const Element = require('../../commons/model/element')

class Conversation extends Element {
  constructor(actor) {
    super('conversation');
    this.actor = actor;
    this.page = page;
  }

  tag() {
    super.tag(
      { value: this.actor, tag: 'actor' },
      this.page
    );
  }
}

module.exports = Conversation;
