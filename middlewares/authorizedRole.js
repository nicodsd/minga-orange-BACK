function authorizedRole(req, res, next) {
    const role = req.user.role

    if (role === 1 || role === 2) {
        return next()
    }
    return res.status(400).json({
        success: false,
        message: ['Not authorized role for create a chapter']
    })
    //retornar JSON normalizado
}

export default authorizedRole