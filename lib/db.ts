import { PrismaClient } from "@prisma/client";

// Ensure DATABASE_URL has a valid protocol for Prisma's schema validation to prevent crashes.
const dbUrl = process.env.DATABASE_URL;
const isValidProtocol = dbUrl && (dbUrl.startsWith("postgresql://") || dbUrl.startsWith("postgres://"));

if (!isValidProtocol) {
  process.env.DATABASE_URL = "postgresql://dummy_user:dummy_password@localhost:5432/dummy_db?connect_timeout=3";
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
