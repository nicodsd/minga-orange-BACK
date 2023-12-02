import Manga from "../models/Manga.js"

async function exists_title(req, res, next) {
    const titleManga = await Manga.findOne({ title: req.body.title })
    if( titleManga ) {
        return res.status(400).json({
            succes: false,
            statusCode: 400,
            message: "This manga already exist"
        })
    }
    return next()
}

export default exists_title

