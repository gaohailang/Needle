module.exports.policies = {
    'SourceController': {
        '*': 'sessionAuth',
        'getBody': true,
        'getJSON': true
    }
};
