import {getAllProducts} from "../services/product.services"



class ProductControllers{
    async getProducts(req,res){
        try{
            const products=await getAllProducts()
            return res.status(200).json({
                products
            })
        }catch(err){
            return res.status(500).json({
                message:"error while getting products",
                error:err.message
            })
        }
    }
}

const productController=new ProductControllers()
export default productController