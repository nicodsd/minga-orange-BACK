import Manga from "../models/Manga.js"
import Author from "../models/Author.js"

async function isPropertyOf(req, res, next) {
    const manga = await Manga.findOne({ manga_id: req.body._id })
    if (manga) {
        return next()
    }
    const author = await Author.findOne({ user_id: req.body.user_id })
    if (author) {
        req.author = {
            user_id: author._id,
            role: author.role === 1 || author.role === 2,
        }
    }
    return res.status(400).json({
        succes: false,
        statusCode: 400,
        message: "This manga already dont exist"
    })

}
export default isPropertyOf