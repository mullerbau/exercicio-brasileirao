import { Router } from 'express';

const router = Router();

// Rota básica para jogadores
router.get('/', (req, res) => {
    res.send('Rota de jogadores funcionando!');
});

export default router;