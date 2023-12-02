import MangaModel from '../../models/Manga.js'

let get_mangas = async (req, res, next) => {
    let queries = {}
    let sort = {}
    let pagination = {
        limit: 8,
        page: 1
    }
    if (req.query.title) {
        queries.title = new RegExp(req.query.title.trim(), 'i')
    }
    if (req.query.category_id) {
        queries.category_id = req.query.category_id.split(',')
    }
    if (req.query.author_id) {
        queries.author_id = req.query.author_id
    }
    if (req.query.order) {
        sort.title = req.query.order
    }
    if (req.query.limit) {
        pagination.limit = Number(req.query.limit)
    }
    if (req.query.page) {
        pagination.page = Number(req.query.page) || 0
    }
    //por default 1 ordena de menor a mayor
    //por default -1 ordena de mayor a menor
    try {
        let all = await MangaModel
            .find(queries)                                                              //primero lo encuentro
            .sort(sort)                                                                 //segundo lo ordeno
            .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)   //tercero lo pagino
            .limit(pagination.limit > 0 ? pagination.limit : 0)
        return res.status(200).json({
            succes: true,
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

export default get_mangas