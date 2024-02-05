import { Router } from 'express';
import { getRecuperos } from './../controllers/index.controllers';

const router = Router();

router.get('/', getRecuperos);

export default router;
