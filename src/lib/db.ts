import { Pool } from 'pg';

// Create a connection pool for PostgreSQL
// This is important for Neon serverless to properly manage connections
let pool: Pool | undefined;

// Create a new pool if it doesn't exist yet
const getPool = () => {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      // Recommended settings for Neon serverless
      max: 10, // Maximum number of clients
      idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
      connectionTimeoutMillis: 5000, // How long to wait for a connection
      ssl: { 
        rejectUnauthorized: false // Always use SSL but don't reject unauthorized connections
      },
    });
  }
  return pool;
};

export default getPool(); 