import User from "../../models/User.js"
import jwt from "jsonwebtoken"

let signin = async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {is_online: true }
        )
        const token = jwt.sign(
            {id: req.user.id},
            process.env.SECRET,		
            {expiresIn: 60*60*24}
        )
        const user = {
            id: req.user.id,
            email: req.user.email,
            photo: req.user.photo,
            role: req.user.role,
            id: req.user.id
        }
        return res.status(200).json({
            success: true,
            message: "User signed in",
            token,
            user
        })
    } catch (error) {
        next(error)
    }
}

export default signin