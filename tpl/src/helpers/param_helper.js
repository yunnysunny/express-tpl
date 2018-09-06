exports.fuzzyQuery = function(value,desc,code,res) {
    if (value.length > 50) {
        res.send({code:code,msg:`输入${desc}过长`});
        return false;
    }
    return new RegExp(`.*${value}.*`);
};

exports.getPageSortField = function(reqQuery,canSortedFields) {
    const sortedName = reqQuery.page_sorted_name;
    if (!sortedName || !canSortedFields.includes(sortedName)) {
        return null;
    }
    //{[变量名]:value} es6
    return {
        [reqQuery.page_sorted_name] : parseInt(reqQuery.page_sorted_dir,10) || -1
    };
};