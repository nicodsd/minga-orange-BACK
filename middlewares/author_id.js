import User from "../models/User.js"

async function author_id(req,res,next) {

    req.body.user_id = req.user._id
    return next()
}

export default author_id