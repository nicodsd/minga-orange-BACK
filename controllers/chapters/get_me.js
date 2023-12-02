import Chapter from "../../models/Chapter.js"

const get = async (req, res, next) => {
    let queries = req.query
    console.log(queries)
    try {
        const userId = req.user.id

        let chapters = await Chapter.find({
            manga_id : queries.manga_id
        })

        return res.status(200).json({
                    chapters: chapters
                })

    } catch (error) {
        next
    }
}

export default get 