module.exports =  {
    getBody: function (req, res) {
        Source.find({
            id: req.param('id')
        }).exec(function (err, source) {
            res.send(200, source[0].body);
        });
    }
};
