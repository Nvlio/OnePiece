import { PrismaClient } from "@prisma/client";

declare global {
    var Prisma: PrismaClient | undefined;
}

const db = globalThis.Prisma || new PrismaClient();

var process = globalThis.process

if (process.env.NODE_ENV !== "production") {
    globalThis.Prisma = db
}

export default db;