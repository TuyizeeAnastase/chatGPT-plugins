import {Product} from "../database/models"

export const getAllProducts=async()=>{
    return await Product.findAll()
}