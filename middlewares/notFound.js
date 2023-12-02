import createHttpError from "http-errors";

const notFound = (req, res, next) => {
    next(createHttpError(404, "The route does not exist"))
}  

export default notFound