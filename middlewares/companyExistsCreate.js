import Company from "../models/Company.js";

async function companyExistsCreate(req, res, next) {
    const company = await Company.findOne({ user_id: req.body.user_id });
    if (company) {
        const error = new Error('You have already registered as an company');
        error.status = 400;
        return next(error);
    }
    return next();
}

export default companyExistsCreate;