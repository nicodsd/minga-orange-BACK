async function accountHasBeenVerified(req,res,next) {
    if (req.user.is_verified) {
        return next()
    }
    return res.status(400).json({
        succes: false,
        statusCode: 400,
        message: "User has not been verified"
    })
}

export default accountHasBeenVerified