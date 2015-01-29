module.exports =  {
    count: function (req, res) {
        Source.count()
        .exec(function (err, num) {
            res.status(200).jsonp(num);
        })
    },
    getBody: function (req, res) {
        Source.find({
            id: req.param('id')
        }).exec(function (err, source) {
            res.status(200).jsonp(source[0].body);
        });
    },
    getPage: function (req, res) {
        Source.find()
        .paginate({
            page: req.param('page'),
            limit: 30 // sails.config.blueprints.defaultLimit
        }).exec(function (err, source) {
            res.status(200).jsonp(source);
        });
    }
};
