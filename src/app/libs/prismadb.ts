// prismaClient.ts

import { PrismaClient } from "@prisma/client";

// Try to use the globally declared `prisma` instance if it exists
const client = globalThis.prisma || new PrismaClient();

// In development, we want to reuse the same Prisma client across hot reloads
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export default client;
