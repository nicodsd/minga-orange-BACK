import { Router } from "express"
import read from "../controllers/chapters/read.js"
import create from "../controllers/chapters/create.js"
import {createChapter} from '../schemas/chapters.js'
import authorizedRole from "../middlewares/authorizedRole.js"
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js"
import one from "../controllers/chapters/get_one.js"
import get_chapters from "../controllers/chapters/get_chapters.js"
import get_me from "../controllers/chapters/get_me.js"
import finds_id from "../middlewares/finds_id.js"
import update from "../controllers/chapters/update.js"
import is_active from "../middlewares/is_active.js"
import isPropertyOf from "../middlewares/is_property_of.js"
import remove from "../controllers/chapters/destroy.js"
import Multer from "../middlewares/multer.js"
import firebase from '../services/firebase.cjs'

const { uploadImage } = firebase

let router = Router()

router.get(`/me`, passport.authenticate("jwt",{session:false}), finds_id, get_me)
router.put("/:_id", passport.authenticate("jwt",{session:false}), finds_id, is_active, isPropertyOf, update)
router.delete("/:_id", passport.authenticate("jwt",{session:false}), finds_id, is_active, isPropertyOf, remove)
router.get("/:_id/:page", one)
router.get("/get", get_chapters)
router.get("/", read)

router.post("/chapter-form", Multer.single('cover_photo'), uploadImage, passport.authenticate("jwt",{session:false}),validator(createChapter),authorizedRole,create)

export default router