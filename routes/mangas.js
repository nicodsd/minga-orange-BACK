// Se definen los endpoints de los mangas
// y se exportan para poder utilizarlos en el enrutador PRINCIPAL
import { Router } from "express"
import Multer from "../middlewares/multer.js"
import read from "../controllers/mangas/get_mangas.js"
import create from "../controllers/mangas/create.js"
import getMangasFromAuthor from "../controllers/mangas/get_mangas_from_autor.js"
import passport from "passport"
import one from '../controllers/mangas/get_one.js'
import MangasSchema from "../schemas/mangas.js"
import { mangaUpd } from "../schemas/mangaUpdate.js"
import validator from "../middlewares/validator.js"
import exists_title from '../middlewares/exists_title.js'
import get_me from '../controllers/mangas/get_me.js'
import finds_id from '../middlewares/finds_id.js'
import editManga from '../controllers/mangas/update.js'
import is_property_of from '../middlewares/is_property_of.js'
import is_active from '../middlewares/is_active.js'
import deleteManga from '../controllers/mangas/destroy.js'
import isPropertyOf from "../middlewares/is_Property_of_nico.js"
import uploadImg from '../services/firebase.cjs'

const { uploadImage } = uploadImg

let router = Router()

router.get("/", passport.authenticate('jwt', { session: false }), read)
router.get('/me', passport.authenticate('jwt', { session: false }), finds_id, get_me)
router.get('/:manga_id', one)
router.get("/authors/:author_id", passport.authenticate("jwt", { session: false }), getMangasFromAuthor);

router.post('/', Multer.single('cover_photo'), uploadImage, passport.authenticate('jwt', { session: false }), validator(MangasSchema), exists_title, finds_id, create)

router.put('/:id', passport.authenticate('jwt', { session: false }), validator(mangaUpd), is_active, isPropertyOf, exists_title, finds_id, editManga)

router.delete('/:id', passport.authenticate('jwt', { session: false }), is_active, isPropertyOf, finds_id, deleteManga)

router.get("/mangas", (req, res, next) => res.status(201).json({
    succes: true,
    admins: []
}))


export default router
