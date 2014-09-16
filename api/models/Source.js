var AWS = require('aws-sdk');

AWS.config.loadFromPath('./OathKeeper/frontend/aws.json');

var s3 = new AWS.S3();
var zlib = require('zlib');

module.exports = {
    attributes: {
        name: 'string',
        body: 'string'
    },
    afterCreate: function (source, cb) {
        var params = {
            Bucket: 'web-statics-production',
            Key: 'needle/' + source.id + '.json',
            Body: source.body,
            CacheControl: 'no-cache',
            ContentType: 'application/json',
            ACL: 'public-read'
        };

        s3.putObject(params, function(err, data) {
            cb();
        });
    },
    afterUpdate: function (source, cb) {
        var params = {
            Bucket: 'web-statics-production',
            Key: 'needle/' + source.id + '.json',
            Body: source.body,
            CacheControl: 'no-cache',
            ContentType: 'application/json',
            ACL: 'public-read'
        };

        s3.putObject(params, function(err, data) {
            cb();
        });
    },
    afterDestroy: function (source, cb) {
        var params = {
            Bucket: 'web-statics-production',
            Key: 'needle/' + source[0].id + '.json'
        };

        s3.deleteObject(params, function(err, data) {
            console.log(err);
            console.log(data);
            cb();
        });
    }
};

