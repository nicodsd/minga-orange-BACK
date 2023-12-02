/* import createHttpError from "http-errors" */
import Author from "../../models/Author.js"
import User from "../../models/User.js"

let create = async (req, res, next) => {
    console.log(req.file)
    try {
        req.body.user_id = req.user.id
        console.log(req.user)
        req.body.active = false
        console.log(req.body)
        let one = new Author(req.body)
        await one.save() // llama a la función save() para guardar el autor en la base de datos

        await User.findByIdAndUpdate(
            req.user.id,
            {
                /* role: 1, */
                photo: req.body.photo
            },
            { new: true } // devuelve el usuario actualizado en lugar del anterior
        );

        return res.status(201).json({
            author: `${one.name} ${one.last_name}`,
            success: true,
            createdAt: one.createdAt // accede a la propiedad createdAt después de llamar a la función save()
        })
    } catch (error) {
        console.log(req.user)
        next(error)
    }
}
export default create