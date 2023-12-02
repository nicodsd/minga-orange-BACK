import Manga from "../models/Manga.js";
import createHttpError from "http-errors";

const isPropertyOf = async (req, res, next) => {
    const { manga_id, author_id } = req.body;

    try {
    // Buscar el manga por _id y author_id
    const manga = await Manga.findOne({
        _id: manga_id,
        author_id: author_id,
    });

    if (!manga) {
        return next(
            createHttpError(403, "El manga no existe o no es propiedad del autor")
        );
    }

    next();
    } catch (error) {
        next(error);
    }
};

export default isPropertyOf;
