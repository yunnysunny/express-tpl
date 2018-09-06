const time = require('../lib/time');

exports.transformUnixTimestamp2DateString = function(schema,field) {
    const oldValue = schema[field];
    if (oldValue) {
        const newValue = time.unixTimestamp2Date(oldValue);
        if (newValue) {
            schema[field] = newValue.format();
        }
    }
    return schema;
};