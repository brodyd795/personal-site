import {PrismaClient} from '../../../generated/client';

const client = new PrismaClient();

export const prisma = (): PrismaClient => client;
