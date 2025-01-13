import { Router } from 'express';
import { createDream } from '../controllers/dreamController';

const router = Router();

router.post('/dream', createDream);

export default router;
