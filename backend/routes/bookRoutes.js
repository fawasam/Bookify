import express from'express'
const router = express.Router()
import {protect} from '../middleware/authMiddleware.js'
import {
    getBooks,
    getBooksById,
    createBook,
    updateBook,
    deleteBook
} from '../controllers/bookController.js'



// @route  http://localhost:5000/api/books




router.get('/' ,getBooks) 
router.get('/:id',getBooksById)
router.post('/' , createBook) 
router.put('/:id',updateBook) 
router.delete('/:id' ,deleteBook)
// router.delete('/:id',protect ,deleteBook)
// router.post('/:id/review' ,protect,createBookReview) 

export default router