import Author from "../../models/Author.js"
import createHttpError from "http-errors"
let name = "authors"

let read = async (req, res, next) => {   
    try {
        let all = await Author.find()                             // Utilizo la sintaxis de try/catch para intentar algo y catchear los errores que puedan surgir 
        if (all.length > 0) {
            return res.status(200).render('index', {
                title: '/' + name.toUpperCase(),
                subtitle: `Endpoints of ${name}`
            })
        }
        return next(createHttpError(404, "Resource not found"))
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default read