const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    Name : {
        type : String,
        require : true,
    },
    Type : {
        type : String,
        require : true,
       
    },
    detalle : {
        type : String,
        require : true 
    },
    Number : {
        type : String,
        require : true 
    },
 },
)
module.exports =  mongoose.model('User', userSchema)