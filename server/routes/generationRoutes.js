module.exports = (app) => {
    app.get('/tag', (req, res) => {
        res.send(req.data.tag(0));
    });
};
