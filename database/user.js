const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const bookSchema=new Schema({
    sno:{
        type:Number,
        require:true,
        unique:true
    },
    book:{
        type:String,
        require:true,
        unique:true
    },
    author:{
        type:String,
        require:true,
        unique:true
    }

});

module.exports.bookSchema=bookSchema;
const Book=mongoose.model('book',bookSchema);
module.exports.Book=Book;

