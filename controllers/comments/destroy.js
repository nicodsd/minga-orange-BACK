import Comment from "../../models/Comment.js";

async function destroy(req,res,next) {
    const id = req.params.id
    const userId = req.user.id
    console.log('Este es user id', {id, userId})
    try {
        let response = await Comment.deleteOne({$and: [{_id: { $eq: id }}, {user_id: {$eq: userId}}] })
        if (response.deletedCount){
            return res.status(200).json({
                success: true,
                message: 'deleted'
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found!'
            })
        }
    } catch (error) {
        next(error)
    }
}

export default destroy