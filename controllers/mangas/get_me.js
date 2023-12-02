import Manga from '../../models/Manga.js';
import Author from '../../models/Author.js';

const getMangas = async (req, res, next) => {

    const { id } = req.user
    
    try {
        const author = await Author.findOne({ user_id: id });
        try {
            if (Object.keys(author).length !== 0) {
                const manga = await Manga.find({ author_id: author })
                return res.status(200).json({
                    status: 200,
                    response: manga
                })
            } else {
                return res.status(404).json({
                    status: 404,
                    message: 'Author not found'
                })
            }
        } catch (error) {
            next(error)
        }
    } catch (error) {
        next(error)
    }
}
export default getMangas
