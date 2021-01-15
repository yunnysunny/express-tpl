const fs = require('fs');
const path = require('path');
const package = require('../tpl/package.json');

package.name = '<%=packageName%>';

fs.writeFileSync(path.join(__dirname, '../tpl/package.json.ejs'), JSON.stringify(package, null, 2));