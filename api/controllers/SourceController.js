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
            if(source[0] !== undefined) {
                res.status(200).jsonp(source[0].body);
            } else {
                res.status(404).send('Cant find source by this id: ' + req.param('id'));
            }
        });
    },
    getJSON: function (req, res) {
        Source.find({
            id: req.param('id')
        }).exec(function (err, source) {
            if(source[0] !== undefined) {
                res.status(200).jsonp(JSON.parse(source[0].body));
            } else {
                res.status(404).send('Cant find source by this id: ' + req.param('id'));
            }
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
