class Element {
    constructor(title) {
		this.title = title;
    }

    tag(...params) {
		let tabsNumber = params.find(item => item.tag === 'TABS').value;

		params.shift(); //Removing TABS element

		let resultTag;

		let initialTabs = getTabs(tabsNumber - 1);

        let title = initialTabs + this.title;
        let startingBracket = title === '' ? '' : getBracket(initialTabs, true);
        let endingBracket = title === '' ? '' : getBracket(initialTabs, false);

        resultTag = title + startingBracket;

        params.forEach(item => resultTag += createItem(item, tabsNumber));

        resultTag += endingBracket;

        return resultTag;
	}
}

function createItem(item, tabsNumber) {
    if (!item) return '';

	let nestedTabs = getTabs(tabsNumber); // Don't ident the first items

    if (item instanceof Element) {
        return item.tag(tabsNumber + 1);
    } else {
        switch (typeof item.value) {
            case 'number':
            case 'boolean':
                return `${nestedTabs}${item.tag} = ${item.value}; \n`;
            case 'string':
                return `${nestedTabs}${item.tag} = "${item.value}"; \n`;
            default:
                return '';
        }
    }
}

function getTabs(tabsNumber) {
    return tabsNumber < 0 ? '' : '\t'.repeat(tabsNumber);
}

function getBracket(tabsNumber, opening) {
    return opening ? `\n${tabsNumber}{\n` : `${tabsNumber}}\n`
}

module.exports = Element;
