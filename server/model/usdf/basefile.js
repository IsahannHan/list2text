const Element = require('../../commons/model/element')

class BaseFile extends Element {
  constructor(namespace, include, conversation) {
    super('');
    this.namespace = namespace;
    this.include = include;
    this.conversation = conversation;
  }

  tag() {
    return super.tag(
      { value: this.namespace, tag: 'namespace' },
      { value: this.include, tag: 'include' },
      this.conversation
    );
  }
}

module.exports = BaseFile;
