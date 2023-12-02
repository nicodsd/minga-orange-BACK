import { Router } from "express"
import reaction from "../controllers/reactions/reactions_post.js"
import reactionDelete from "../middlewares/reactions_delete.js"
import get_reaction from "../controllers/reactions/get_reactions.js"
import passport from "passport"
import like_dislike from '../controllers/reactions/like_dislike.js'

let router = Router()

router.post('/', passport.authenticate('jwt', { session: false }), reactionDelete, reaction)
router.get('/', passport.authenticate('jwt', { session: false }), get_reaction)
router.get('/re', passport.authenticate('jwt', { session: false }), like_dislike)

export default router