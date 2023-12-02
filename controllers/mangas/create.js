//import createHttpError from "http-errors"
import Manga from '../../models/Manga.js'

// req, res son propiedades de un objeto, y next es una funcion
let createNewManga = async (req, res, next) => {

    const { firebaseUrl } = req.file ? req.file : ""
    const { title, description, category_id, author_id } = req.body

    try {
        let one = await Manga.create({
            title,
            description,
            category_id,
            author_id,
            cover_photo: firebaseUrl
        })    // se intenta crear un manga- 1 unico objeto
        await one.save()
        //console.log(req.body.data)

        return res.status(201).json({
            manga: one,
            succes: true,
            timestamps: one.createdAt
        })
    } catch (error) {
        console.log(req.body.data)
        console.log(error)
        next(error)
    }
}

export default createNewManga

