import pkg from 'mongoose'
const {Schema, model} = pkg

export const ROLES = ["User","Moderator","Admin"]

const roleSchema = new Schema({
    name: String,
},{
    timestamps:true,
    versionKey:false
})

export default model('Role', roleSchema)