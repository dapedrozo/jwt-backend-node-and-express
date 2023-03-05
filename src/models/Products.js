import pkg from 'mongoose'
const {Schema, model} = pkg

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imageURL: String
},{
    timestamps:true,
    versionKey:false
})

export default model('Product', productSchema)