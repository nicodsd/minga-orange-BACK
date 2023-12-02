import ReactionModel from "../../models/Reactions.js";

let like_dislike = async (req, res, next) => {

    const { id } = req.user
    const user = id

    try {
        let all_reaction = await ReactionModel.find({ user_id: user })
        const count = await ReactionModel.countDocuments();
        console.log(count)
            return res.status(200).json({
            count: count,
            reaction: all_reaction,
            succes: true,
        })
    } catch (error) {
        console.log(req.body.data)
        console.log(error)
        next(error)
    }
}

export default like_dislike
