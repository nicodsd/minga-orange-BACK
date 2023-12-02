import Manga from '../../models/Manga.js'

const count_mangas = {

    countDocs: async (req,res) => {
        let count = await Manga.estimatedDocumentCount()
        return res
            .status(200)
            .json({ count })
    }

}

export default count_mangas