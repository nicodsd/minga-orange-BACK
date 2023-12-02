import createHttpError from "http-errors";
import Chapter from "../../models/Chapter.js";

let create = async(req,res,next) => {
    req.body.manga_id = req.user.id
    try {
        
        console.log('Este es el objeto ',req.body)
        let one = await new Chapter(req.body)
        await one.save()
        return res.status(201).json({
            title: one.title,
            success: true,
            timestamps: one.createdAt
        })

    } catch (error) {
        console.log('Este es el error',error)
        next(error)
    }
}

export default create