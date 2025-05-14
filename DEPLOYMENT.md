# Yorùbá Dictionary Deployment Guide

This document provides a step-by-step guide for deploying the Yorùbá Dictionary application, including how to set up the environment, import data into the database, and ensure proper integration between the frontend and backend.

## Prerequisites

- Node.js (v16+)
- Git
- PostgreSQL (or Neon DB account)
- Vercel account (recommended for deployment)

## Environment Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd yoruba-dictionary
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory based on the `.env.local.example` template:
   ```
   DATABASE_URL="postgresql://username:password@neon.db.url:5432/yoruba_dict?sslmode=require"
   ```

## Database Setup

### Option 1: Using Neon DB (Recommended)

1. Create a new Neon DB project at [https://neon.tech](https://neon.tech)
2. Create a new database called `yoruba_dict`
3. Copy the connection string and add it to your `.env` file as `DATABASE_URL`
4. Make sure to replace the placeholder values with your actual credentials

### Option 2: Local PostgreSQL

1. Create a local PostgreSQL database:
   ```bash
   createdb yoruba_dict
   ```
2. Update the `.env` file with your local connection string:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/yoruba_dict"
   ```

## Database Schema and Data Import

1. Push the Prisma schema to your database:
   ```bash
   npx prisma db push
   ```

2. Run the database verification script to check the connection:
   ```bash
   node scripts/check-db.js
   ```

3. Import data into the database:
   ```bash
   node scripts/import-all-data.js
   ```

4. Verify the imported data:
   ```bash
   node scripts/verify-data.js
   ```

## Environment Configuration

Make sure that your application is configured to use the actual API endpoints instead of mock data:

1. Open `src/lib/api.ts` and ensure that:
   - `USE_MOCK_DATA` is set to `false`
   - `API_URL` is set correctly (for local development, use `/api`)

## Development Server

Start the development server:
```bash
npm run dev
```

Your application should now be running on [http://localhost:3000](http://localhost:3000) with the backend APIs accessible at [http://localhost:3000/api/*](http://localhost:3000/api/*).

## Production Deployment

### Deploying to Vercel (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Create a new project on [Vercel](https://vercel.com)
3. Connect your Git repository to Vercel
4. Configure environment variables in the Vercel dashboard:
   - Add `DATABASE_URL` with your Neon DB connection string
5. Deploy the application

### Other Hosting Options

For other hosting providers:
1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

## Troubleshooting

### Database Connection Issues

- Verify your DATABASE_URL is correct
- Ensure your IP is allowlisted in Neon DB
- Run `node scripts/check-db.js` to test the connection

### API Integration Issues

- Check browser console for API errors
- Verify that API routes are correctly implemented in `/src/app/api/` directory
- Ensure the correct API paths are used in `src/lib/api.ts`

### Data Import Issues

If you encounter issues importing data:
1. Check the CSV file format in the `scraped_data` directory
2. Try running individual import scripts separately:
   ```bash
   node scripts/import-data.js
   node scripts/import-examples.js
   ```
3. Inspect any error messages and fix specific issues

## Monitoring and Maintenance

- Regularly backup your database
- Set up monitoring for the application
- Update dependencies to maintain security

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Neon DB Documentation](https://neon.tech/docs) 