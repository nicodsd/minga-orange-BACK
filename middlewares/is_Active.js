import Author from "../models/Author.js";
import Company from "../models/Company.js";
import createHttpError from "http-errors";

const isActive = async (req, res, next) => {
    const userId = req.user.id

    try {
        const author = await Author.findOne({ user_id: userId });

        if (author && author.active) {
        return next() 
        }

        const company = await Company.findOne({ user_id: userId });

        if (company && company.active) {
        return next()
        }

        return next(createHttpError(401, "El autor/editorial no está activo"))
    }catch (error) {
        next(error)
    }
};

export default isActive;
