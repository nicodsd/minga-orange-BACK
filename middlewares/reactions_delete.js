import Reactions from "../models/Reactions.js";

async function reactionDelete(req, res, next) {

    const mangaId = req.body.manga_id
    const reactionName = req.body.name
    const { id } = req.user
    const user = id

    const find_reaction = await Reactions.findOne({
        user_id: user,
        manga_id: mangaId,
        name: reactionName
    })
    if (!find_reaction) {
        try {
            const destroyedlike = await Reactions.findOneAndDelete({
                manga_id: mangaId,
                user_id: user
            })
            return next()
        } catch (error) {
            next(error)
        }
    } else {
        try {
            const destroyedlike = await Reactions.findOneAndDelete({
                user_id: user,
                manga_id: mangaId,
                name: reactionName,
            })
            return res.status(200).json({ response: "deleted reaction" })
        } catch (error) {
            next(error)
        }
    }
}

export default reactionDelete