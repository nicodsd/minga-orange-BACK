import { Router } from 'express';
import donation from '../controllers/mercado_pago/donation.js'

const router = Router();

router.post('/', donation)

export default router