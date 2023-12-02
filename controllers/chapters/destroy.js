import Chapter from "../../models/Chapter.js";

const remove = async(req, res, next) => {
    const {_id} = req.params

        try {
            
            let destroyed = await Chapter.findByIdAndDelete(_id)
            
            if (destroyed) {
                return res.status(200).json({
                    success: true,
                    message: "Chapter removed"
                })
            } else {
                return res.status(404).json({response: "not found"})
            }
            
            
        } catch (error) {
            next(error)
        }

}

export default remove