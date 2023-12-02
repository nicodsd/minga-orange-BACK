import Reactions from "../../models/Reactions.js";

let reaction = async (req, res, next) => {
    const { id } = req.user
    const mangaId = req.body.manga_id
    const reactionName = req.body.name
    const coverPhoto = req.body.cover_photo
    const title = req.body.title
    const category = req.body.category_id
    const user = id

    try {
        let reaction = await Reactions.create({
            user_id: user,
            manga_id: mangaId,
            name: reactionName,
            cover_photo: coverPhoto,
            category_id: category,
            title: title
        })
        await reaction.save()
        return res.status(201).json({
            reaction: reaction,
            succes: true,
            timestamps: reaction.createdAt
        })
    } catch (error) {
        console.log(req.body.data)
        console.log(error)
        next(error)
    }
}

export default reaction

