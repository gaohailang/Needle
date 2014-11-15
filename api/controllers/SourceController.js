module.exports =  {
    getBody: function (req, res) {
        Source.find({
            id: req.param('id')
        }).exec(function (err, source) {
            res.status(200).jsonp(source[0].body);
        });
    }
};
