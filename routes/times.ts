import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import { z } from 'zod';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn',  'error']
})