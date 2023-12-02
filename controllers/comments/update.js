import Comment from "../../models/Comment.js"
import  ObjectId  from 'mongodb';

const update = async (req, res, next) => {
    const id = req.params.id
    const userId = req.user.id
    console.log(req.body)
    try {
        let update = await Comment.updateOne(
            {$and: [{_id: { $eq: id }}, {user_id: {$eq: userId}}] },
            req.body
        )
        if (update.modifiedCount) {
            return res.status(200).json({
                success: true,
                message: 'update',
                update
            })
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found'
            })
        }
    } catch (error) {
        next(error)
    }
};


export default update