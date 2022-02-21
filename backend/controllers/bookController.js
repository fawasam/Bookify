import asyncHandler from 'express-async-handler'
import Book from '../models/bookModel.js'




// @desc   Fetch all books
// @route  GET  /api/books
// @access Public

const getBooks = asyncHandler(async(req,res) => {

    // const keyword =req.query.keyword ? {
    //     name:{
    //         $regex:req.query.keyword,
    //         $options:'i'
    //     }
    // }:{}
    const books = await Book.find()
    res.json(books)
})

// @desc   Fetch single books
// @route  GET  /api/books/:id
// @access Public

const getBooksById = asyncHandler(async(req,res) => {

 const book =await Book.findById(req.params.id)
    if(book){

        res.json(book)
    }else{
       res.status(404).json({errors:[{msg: 'book not found'}]})

    }
})

// @desc   CREATE a book
// @route  POST  /api/books
// @access Private /Admin

const createBook = asyncHandler(async(req,res) => {

    try {
        
        const { 
           booktitle, 
           genre, 
           bookauthor,
           image,
           language,
           link,
           bookContent
       }=req.body
   
       const book = new Book ({
          booktitle, 
           genre, 
           bookauthor,
           image,
           language,
           link,
           bookContent
        
       })
       const createdbook = await book.save()
       res.status(201).json(createdbook)
    } catch (error) {
        res.status(400).json({errors:[{ms:'Invalid user data'}]})
    }
})

// @desc   UPDATE a book
// @route  PUT  /api/books/:id
// @access Private /Admin

const updateBook = asyncHandler(async(req,res) => {

  const { 
           booktitle, 
           genre, 
           bookauthor,
           image,
           language,
           link,
           bookContent
       }=req.body

    const book = await Book.findById(req.params.id)

    if(book){

        book.booktitle =booktitle || book.booktitle
        book.genre =genre || book.genre
        book.bookauthor =bookauthor || book.bookauthor
        book.image =image || book.image
        book.language =language || book.language
        book.link =link || book.link
        book.bookContent =bookContent || book.bookContent

        const updatedbook = await book.save()
        res.status(201).json(updatedbook)

    }else{
       res.status(404).json({errors:[{msg: 'book not found'}]})
    }
})


// @desc   DELET a book
// @route  DELETE  /api/books/:id
// @access Private /Admin

const deleteBook = asyncHandler(async(req,res) => {
    const book = await Book.findById(req.params.id)
    if(book){
        await book.remove()
        res.json({message:'Book removed'})
    }
       res.status(404).json({errors:[{msg: 'book not found'}]})
})

export {
    getBooks,
    getBooksById,
    createBook,
    updateBook,
    deleteBook
}