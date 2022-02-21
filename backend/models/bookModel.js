import mongoose from 'mongoose'
const bookSchema =mongoose.Schema({

    // user:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:true,
    //     ref:'User'
    // },
    booktitle:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    bookauthor:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    language:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    bookContent:{
        type:String,
        required:true
    },
    
},{
    timestamps:true
})

const Book =mongoose.model('Book' ,bookSchema)
export default Book