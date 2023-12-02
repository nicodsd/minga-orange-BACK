import { Router } from "express"
import {createChapter} from '../schemas/chapters.js'
import create from "../controllers/comments/create.js"
import validator from "../middlewares/validator.js"
import passport from "../middlewares/passport.js"
import commentFromChapter from '../controllers/comments/all_from_chapter.js'
import destroy from "../controllers/comments/destroy.js"
import update from "../controllers/comments/update.js"

let router = Router()

router.get("/read-Comments", commentFromChapter)
router.post("/",passport.authenticate("jwt",{session:false}),create)
router.put("/:id",passport.authenticate("jwt",{session:false}),update)
router.delete("/:id",passport.authenticate("jwt",{session:false}), destroy)
//router.post("/",passport.authenticate("jwt",{session:false}),validator(createChapter),authorizedRole,create)
/* passport.authenticate("jwt",{session:false}) */

export default router
