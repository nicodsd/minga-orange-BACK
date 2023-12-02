import Chapters from "../../models/Chapter.js"

let get_chapters = async(req,res,next)=> {
    let queries = {}
    let sort = {}
    let pagination = {
        limit: 4,
        page: 1
    }
    let options = {
        lean: true, // Retorna un objeto JSON en lugar de un Mongoose document
        select: 'title cover_photo order' // Los campos a devolver
    }
    if (req.query.manga_id){
        queries.manga_id = req.query.manga_id
    }
    if (req.query.title) {
        queries.title = new RegExp(req.query.title.trim(),"i")
    }
    if (req.query.order) {
        sort.title = req.query.order
    }
    if (req.query.page) {
        pagination.page = req.query.page
    }
    if (req.query.limit) {
        pagination.limit = req.query.limit
    }
    try {
        let all = await Chapters
            .find(queries, null, options)
            .sort(sort)
            .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0) //desde donde pagino
            .limit(pagination.limit > 0 ? pagination.limit : 0)                   //hasta donde pagino
        return res.status(200).json({
            success: true,
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export default get_chapters
