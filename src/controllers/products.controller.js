import Product from '../models/Products.js'


export const createProduct = async (req,res) =>{
    const {name,category,price,imageURL} = req.body
    const newProduct = new Product({
        name, 
        category,
        price,
        imageURL
    })
    await newProduct.save()
    res.json({'msg':'producto guardado'})
}

export const getProducts = async (req,res) =>{
    const products = await Product.find()
    res.json(products)
}

export const getProductById = async (req,res) =>{
    const id = req.params.productId
    const products = await Product.findById(id)
    res.json(products)
}

export const updateProductById = async (req,res) =>{
    const id = req.params.productId
    const {name,category,price,imageURL} = req.body
    await Product.findByIdAndUpdate(id,{name,category,price,imageURL})
    res.json({'msg':'producto actualizado'})
}

export const deleteProductById = async (req,res) =>{
    const id = req.params.productId
    await Product.findByIdAndDelete(id)
    res.json({'msg':'producto eliminado'})
}