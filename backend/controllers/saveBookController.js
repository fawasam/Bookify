import asyncHandler from 'express-async-handler'
import Book from '../models/bookModel.js'
import User from "../models/userModel.js"


// @desc   update saved books
// @route  PUT  /api/savebooks/:id
// @access Private

const saveBook = asyncHandler (async(req,res)=>{

    try {
        
        const savedBooks =req.params.id
        const user =await User.findByIdAndUpdate({ _id :req.user.id},{
            $addToSet:{
                savedBooks:savedBooks
            }
        })
        if(user){
            const savebook = await user.save()
            res.status(201).json(savebook)
        }else{
            res.status(404).json({errors:[{msg: 'book not found'}]})
        }
           
    } catch (error) {
            res.status(404).json({error:message})
        
    }
})


// @desc   list saved books
// @route  GET /api/savebooks/:id
// @access Private

const listSavedBook = asyncHandler (async(req,res)=>{

    try {
        const user =await User.findById(req.params.id)
        if(user){
           const books =user.savedBooks
           const book = await Book.find({_id:{$in :[...books]}})
           if(book){
               res.json(book)
           }else{
            res.status(404).json({errors:[{msg: 'book not found'}]})
        }

        }else{
            res.status(404).json({errors:[{msg: 'User not authorized'}]})
        }
           
    } catch (error) {
            res.status(404).json({error})
        
    }
})



// @desc   delete saved books
// @route  DELTE  /api/savebooks/:id
// @access Private

const deleteSaveBook = asyncHandler (async(req,res)=>{

    try {   
        const savedBooks =req.params.id
        const user =await User.findByIdAndUpdate({ _id :req.user.id},{
            $pull:{
                savedBooks:savedBooks
            }
        })
        if(user){
            mongoose.connection.close()
        } 
    }
    
    catch (error) {
        res.status(404).json(error)
       
    } 
})


export {
   saveBook,
    deleteSaveBook,
    listSavedBook
}
