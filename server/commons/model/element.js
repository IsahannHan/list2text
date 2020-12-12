class Element {
    constructor (title) {
        this.title = title;
    }

    tag(...params){
        console.log(`Title: ${this.title}`);

        params.forEach(item => createTag(item));

        console.log('terminou');
    }
}

function createTag(item) {
    if(item instanceof Element){
        console.log('element')
        console.log(item.tag())
    } else {
        console.log('simple item')
        console.log(`ITEM: ${item.value} TAG: ${item.tag} TYPE: ${typeof item}`)
    }
}

module.exports = Element;
