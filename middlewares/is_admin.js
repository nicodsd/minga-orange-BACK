async function is_admin(req, res, next) {

    if (!req.user || req.user.role !== 3) { //que pasaria si el role es 4
        return res.status(400).json({
            success: false,
            message: 'Role is not admin'
        });
    } else {
        return next();
    }
}

export default is_admin;
