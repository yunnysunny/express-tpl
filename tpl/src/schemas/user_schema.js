const {Schema} = require('mongoose');

const appSchema =  new Schema({
    account:{type:String,required:true},
    passwd : {type:String,required:true},
    nickname : {type:String}
},{ 
    timestamps: { 
        createdAt: 'created_at',updatedAt : 'update_at' 
    } 
});



module.exports = appSchema;