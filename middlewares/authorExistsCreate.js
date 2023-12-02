import Author from '../models/Author.js'

async function authorExistsCreate(req, res, next) {
    const author = await Author.findOne({ user_id: req.body.user_id });
    if (author) {
        const error = new Error('You have already registered as an author');
        error.status = 400;
        return next(error);
    }
    return next();
}

export default authorExistsCreate;