import productController from "../controllers/product.controllers";
import express from 'express'


const router=express.Router()

router.route('/').get(productController.getProducts)

export default router