const Element = require('../../commons/model/element')

class BaseFile extends Element {
  constructor(namespace, include, conversation) {
    super('basefile');
    this.namespace = namespace;
    this.include = include;
    this.conversation = conversation;
  }

  tag() {
    super.tag(
      { value: this.namespace, tag: 'namespace', type: Types.TEXT },
      { value: this.include, tag: 'include', type: Types.TEXT },
      this.conversation
    );
  }
}

module.exports = BaseFile;
