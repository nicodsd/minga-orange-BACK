import Chapter from '../models/Chapter.js'

async function exists_order (req,res,next) {
    const chapterOrder = await Chapter.findOne({ order: req.body.order })
    if( chapterOrder ) {
        return res.status(400).json({
            succes: false,
            statusCode: 400,
            message: "This order already exist"
        })
    }
    return next()
}

export default exists_order