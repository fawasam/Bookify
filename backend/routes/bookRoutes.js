import express from'express'
const router = express.Router()
import {protect} from '../middleware/authMiddleware.js'
import {
    getBooks,
    getBooksById,
    createBook,
    updateBook,
    deleteBook,
    createBookReview
    
} from '../controllers/bookController.js'

import {
    saveBook,
    deleteSaveBook, 
    listSavedBook,
    
} from '../controllers/savebookController.js'


// @route  http://localhost:5000/api/books




router.get('/' ,getBooks) 
router.get('/:id',getBooksById)
router.post('/' ,protect, createBook) 
router.put('/:id',protect, updateBook) 
router.delete('/:id' ,protect, deleteBook)
router.post('/:id/review' ,protect,createBookReview) 

//savebooks
router.put('/savebooks/:id',protect, saveBook) 
router.get('/savebooks/:id', listSavedBook)  //protected
router.delete('/savebooks/:id',protect, deleteSaveBook) 







export default router