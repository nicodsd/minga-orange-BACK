const conectedEndpoint = (req, res, next) => {
    console.log(`Endpoint connection: ${req.originalUrl}`);
    next();
};

export default conectedEndpoint