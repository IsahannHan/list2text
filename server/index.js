const express = require('express')
const app = express()
const port = 8080
const Page = require('./model/usdf/Page')
const IfItem = require('./model/usdf/IfItem')
// Usage example
let page = new Page('john', 1, 2, 'gay shit', 'nao sei', true, new IfItem(6,9), undefined)
// let conversation = new Conversation('teste', page);
// let basefile = new BaseFile('tests', 'bomdia', conversation);

console.log(page.tag(0));


// let result = basefile.tag(0);

require('./routes/generationRoutes')(app);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})