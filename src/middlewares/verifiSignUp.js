import {ROLES} from '../models/Role.js'
import User from '../models/User.js'

export const checkDuplicateUsernameOrEmail = async (req,res,next) => {
    const user = await User.findOne({username:req.body.username})
    if(user) return res.json({message:"el usuario ya existe"})
    const email = await User.findOne({email:req.body.email})
    if(email) return res.json({message:"el correo ya esta en uso"})
    next()
}

export const checkRolesExisted = (req,res,next) => {
    if(req.body.roles){
        for(let i=0; i<req.body.roles.length; i++){
            if(!ROLES.includes(req.body.roles[i])){
                return res.json({message:"el rol no existe"})
            }
        }
    }
    next()
}