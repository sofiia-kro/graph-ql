import { Router } from 'express';

import authorsRouter from './authors.route';

const router = Router();

router.use('/graph-ql/authors', authorsRouter);

export default router;
