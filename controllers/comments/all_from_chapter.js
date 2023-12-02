import Comment from "../../models/Comment.js"

let get_chapters = async(req,res,next)=> {
    let queries = {}
    let pagination = {
        limit: 4,
        page: 1
    }
    let options = {
        lean: true, // Retorna un objeto JSON en lugar de un Mongoose document
        select: 'comment chapter_id user_id email photo' // Los campos a devolver
    }
    if (req.query.chapter_id){
        queries.chapter_id = req.query.chapter_id
    }
    if (req.query.page) {
        pagination.page = req.query.page
    }
    if (req.query.limit) {
        pagination.limit = req.query.limit
    }
    try {
        let all = await Comment
            .find(queries, null, options)
            /* .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0) //desde donde pagino
            .limit(pagination.limit > 0 ? pagination.limit : 0)   */                 //hasta donde pagino
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default get_chapters
