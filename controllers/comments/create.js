import Comment from "../../models/Comment.js";

let create = async(req,res,next) => {
    req.body.user_id = req.user.id
    req.body.photo = req.user.photo
    req.body.email = req.user.email
    //req.body.comment_id = '64626003a97bb5680f05ff4f'
    try {
        
        console.log('Este es el objeto ',req.body)
        let one = await new Comment(req.body)
        await one.save()
        return res.status(201).json({
            comment: one.comment,
            success: true,
            timestamps: one.createdAt
        })

    } catch (error) {
        console.log('Comment not created',error)
        next(error)
    }
}

export default create