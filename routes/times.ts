import { PrismaClient } from '@prisma/client';
import { Router } from 'express';

const router = Router()

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn',  'error']
})


router.get ('/times', async (req, res) =>{
    try {
        const times = await prisma.Times.findMany()
        res.status(200).json(times)
    } catch (error) {
        res.status(500).json({error: 'Erro ao buscar times'})
    }
    
})

router.post('/times', async (req, res) =>{
    const { clube, estado } = req.body

    try {
        const novoTime = await prisma.times.create({
            data: {
                clube,
                estado
            }
        });
        res.status(201).json(novoTime);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar time'})
    }

});

router.delete('times/:id', async (req, res) =>{
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(404).send('id inválido')
    }
    
    try {
        await prisma.times.delete({
            where: { id }
        });
        res.status(204).send();
    } catch (error) {
        res.status(404).json({ error: 'Time não encontrado'})
    }

})

export default router