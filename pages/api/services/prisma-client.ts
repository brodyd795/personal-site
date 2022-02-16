import {PrismaClient} from '@prisma/client';

const client = new PrismaClient();

export const prismaClient = (): PrismaClient => client;
