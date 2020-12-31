import Element from '../../commons/model/element';

class Page extends Element {
  constructor(name, panel, voice, dialog, drop, link, ifitem, choice) {
    super('page');
    this.name = name;
    this.panel = panel;
    this.voice = voice;
    this.dialog = dialog;
    this.drop = drop;
    this.link = link;
    this.ifitem = ifitem;
    this.choice = choice;
  }

  tag(tabs) {
    return super.tag(
      { value: tabs, tag: 'TABS' },
      { value: this.name, tag: 'name' },
      { value: this.panel, tag: 'panel' },
      { value: this.voice, tag: 'voice' },
      { value: this.dialog, tag: 'dialog' },
      { value: this.drop, tag: 'drop' },
      { value: this.link, tag: 'link' },
      this.ifitem,
      this.choice
    );
  }
}

module.exports = Page;
