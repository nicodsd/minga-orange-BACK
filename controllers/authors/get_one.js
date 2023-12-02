import Author from "../../models/Author.js"

let getOneAuthor = async (req, res, next) => {
    try {
        let _id = req.params.id
        let author = await Author.findById(_id).select("-updatedAt -active -user_id -_id");
        return res.status(200).json({
            success: true,
            response: author
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
};

export default getOneAuthor