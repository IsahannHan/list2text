class Element {
    constructor(title) {
        this.title = title;
        this.tabs = 0;
    }

    tag(...params) {
		let title = this.title;
        let startingBracket = title === '' ? '' : getBracket(this.tabs, true);
        let endingBracket = title === '' ? '' : getBracket(this.tabs, false);

        let result = title + startingBracket;

        params.forEach((item) => (result += createTag(item)));

        result += endingBracket;

        return result;
    }
}

function createTag(item) {
    if (!item) return '';

    if (item instanceof Element) {
        return item.tag();
    } else {
        switch (typeof item.value) {
            case 'number':
            case 'boolean':
                return `${getTabs(this.tabs++)}${item.tag} = ${item.value}; \n`;
            case 'string':
                return `${getTabs(this.tabs++)}${item.tag} = "${item.value}"; \n`;
            default:
                return '';
        }
    }
}

function getTabs(tabs){
	return '\t'.repeat(tabs);
}

function getBracket(tabs, opening) {
	return  getTabs(tabs) + `\n${opening ? '{' : '}' }\n`
}

module.exports = Element;
