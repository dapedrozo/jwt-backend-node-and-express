import jwt from 'jsonwebtoken'
import config from '../config.js'
import User from '../models/User.js'
import Role from '../models/Role.js'

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"]

        if (!token) return res.status(403).json({ message: 'no token provided' })

        const decoded = jwt.verify(token, config.SECRET)
        req.userId=decoded.id 

        const user = await User.findById(req.userId, { password: 0 })
        if (!user) return res.json({ message: 'el usuario no existe' })

        next()
    } catch (error) {
        return res.status(401).json({message:'Unauthorized'})
    }
}

export const isModerator = async (req,res,next) =>{
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in:user.roles}})
    for (let i=0;i<roles.length;i++){
        if(roles[i].name === "Moderator"){
            next()
            return
        }
    }
    return res.json({ message: 'el usuario no tiene permisos para realizar esta accion' })
}

export const isAdmin = async (req,res,next) =>{
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in:user.roles}})
    for (let i=0;i<roles.length;i++){
        if(roles[i].name === "Admin"){
            next()
            return
        }
    }
    return res.json({ message: 'el usuario no tiene permisos para realizar esta accion' })
}