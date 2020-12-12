const Element = require('../../commons/model/element')
const Conversation = require('../../model/usdf/conversation')
class BaseFile extends Element {
  constructor(namespace, include, conversation) {
    super('');
    this.namespace = namespace;
    this.include = include;
    this.conversation = conversation;
  }

  tag(tabs) {
    return super.tag(
      { value: tabs, tag: 'TABS' },
      { value: this.namespace, tag: 'namespace' },
      { value: this.include, tag: 'include' },
      this.conversation,
    );
  }
}

module.exports = BaseFile;
