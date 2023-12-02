import Manga from '../../models/Manga.js'

const editManga = async(req, res, next) => {
    let manga_id = req.params.id
    let data = req.body  
    console.log(manga_id)
    console.log(data)

    try {
    
        let upd_manga = await Manga.findOneAndUpdate(
            { _id: manga_id },
            data,
            { new: true }
        )
        if ( upd_manga ){
            return res.status(200).json({
                succes: true, 
                message: 'modified',
                response: upd_manga
            })
        } else {
            return res.status(404).json({
                succes: false,
                response: 'Not found'
            })
        }

    } catch (error) {
        next(error)
    }
}

export default editManga