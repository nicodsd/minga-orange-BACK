import Manga from "../../models/Manga.js";

const getMangasFromAuthor = async (req, res, next) => {
    try {
        const { author_id } = req.params;
        const isNew = req.query.new === 'false';
        let mangas;

        if (isNew) {
            mangas = await Manga.find({ author_id })
                .sort({ createdAt: 1 })
                .select("title cover_photo _id")
                .limit(4);
        } else {
            mangas = await Manga.find({ author_id })
                .sort({ createdAt: 1 })
                .select("title cover_photo _id");
            if (req.query.new === 'true') {
                mangas = await Manga.find({ author_id })
                    .sort({ createdAt: -1 })
                    .select("title cover_photo _id")
                    .limit(4);
            }
        }

        return res.status(200).json({
            success: true,
            response: mangas
        });
    } catch (error) {
        next(error);
    }
};

export default getMangasFromAuthor;
