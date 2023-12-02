import { Router } from "express"
let router = Router()

import read from "../controllers/companies/read.js"
import create from "../controllers/companies/create.js"
import readCompanies from "../controllers/companies/admin.js"
import multer from "multer"
import uploadImg from "../services/firebase.cjs"

import validator from "../middlewares/validator.js"
import companyExistsCreate from "../middlewares/companyExistsCreate.js"
import passport from "../middlewares/passport.js"
import author_id from "../middlewares/author_id.js"

import { companyCreate } from "../schemas/companyCreate.js"

const { uploadLogo } = uploadImg

const Multer = multer({
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(new Error('Solo se permiten archivos PNG y JPEG.'));
        }
    },
    storage: multer.memoryStorage(),
    limits: 10240 * 10240,
})

router.get("/", read)
router.get("/admin", readCompanies)
router.post("/", Multer.single('logo'), uploadLogo, passport.authenticate("jwt", { session: false }), author_id, validator(companyCreate), companyExistsCreate, create)

export default router
