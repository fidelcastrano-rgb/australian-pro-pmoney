import { PrismaClient } from "@prisma/client";

// Helper to check if a valid production/remote database URL is supplied
export function isDatabaseConfigured(): boolean {
  const url = process.env.DATABASE_URL;
  if (!url) return false;
  if (url.includes("dummy_user") || url.includes("localhost:5432/dummy_db")) return false;
  return url.startsWith("postgresql://") || url.startsWith("postgres://");
}

// Ensure DATABASE_URL has a valid protocol string so PrismaClient instantiation doesn't fail parsing schema
const dbUrl = process.env.DATABASE_URL;
const isValidProtocol = dbUrl && (dbUrl.startsWith("postgresql://") || dbUrl.startsWith("postgres://"));

if (!isValidProtocol) {
  process.env.DATABASE_URL = "postgresql://dummy_user:dummy_password@localhost:5432/dummy_db?connect_timeout=1";
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

