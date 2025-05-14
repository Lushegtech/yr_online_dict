import { PrismaClient } from './generated';

// Add TypeScript declaration for global prisma
declare global {
  var prisma: PrismaClient | undefined;
}

// Simple PrismaClient initialization without custom options to avoid errors
const prisma = global.prisma || new PrismaClient();

// Save prisma client in global for dev mode (prevents too many clients in hot reload)
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma; 