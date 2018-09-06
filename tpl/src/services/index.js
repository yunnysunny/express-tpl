const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('../lib/string');


const shemasPath = path.join(__dirname, '../schemas');
/**
 * @var {Model} UsersModel
 */
const models = {};
fs.readdirSync(shemasPath).filter(function(filename) {
    return filename.endsWith('_schema.js');
}).forEach(function(filename) {
    const key = filename.replace('_schema.js','Model').firstUpperCase();
    const name = key.slice(0,-5).toLowerCase();
    models[key] = mongoose.model(name,require(path.join(shemasPath, filename)));
});

module.exports = models;