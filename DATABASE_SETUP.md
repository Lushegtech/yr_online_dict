# Yoruba Dictionary Database Setup Guide

This guide will help you set up and populate the Yoruba Dictionary database with sample data.

## Prerequisites

- PostgreSQL database instance (local or remote)
- Node.js and npm installed
- Project dependencies installed (`npm install`)

## Setting Up the Database

### 1. Configure Database Connection

Create a `.env` file in the root directory with your database connection string:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/yorubadict?schema=public"
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

Replace `username` and `password` with your PostgreSQL credentials.

### 2. Run the Database Setup Script

The easiest way to set up the database is to run our all-in-one setup script:

```bash
npm run db:setup
```

This script will:
- Apply database migrations
- Generate the Prisma client
- Import words and translations
- Import example sentences
- Add cultural facts
- Create a featured word of the day

## Manual Setup (Alternative)

If you prefer to run the steps manually, you can use the following commands:

### 1. Run Database Migrations

```bash
npm run db:migrate
```

### 2. Generate Prisma Client

```bash
npm run db:generate
```

### 3. Import Dictionary Data

```bash
npm run db:import
```

### 4. View the Database

To explore your database through a visual interface:

```bash
npm run db:studio
```

This will open Prisma Studio in your browser.

## Data Sources

The dictionary data is sourced from the CSV files in the `scraped_data` directory:

- `all_yoruba_words_words.csv` - Contains the Yoruba words
- `all_yoruba_words_translations.csv` - Contains translations
- `all_yoruba_words_examples.csv` - Contains example sentences

Cultural facts are added programmatically in the `scripts/import-cultural-facts.js` file.

## Troubleshooting

### Connection Issues

If you encounter database connection issues:

1. Verify your PostgreSQL service is running
2. Check the connection string in your `.env` file
3. Make sure your user has permission to create databases and tables

### Import Failures

If data import fails:

1. Check the console output for specific error messages
2. Verify that the CSV files exist in the `scraped_data` directory
3. Run the individual import scripts manually to identify the specific issue

### Database Already Contains Data

If you want to reset the database and start fresh:

1. Drop all tables using Prisma:
   ```bash
   npx prisma migrate reset
   ```

2. Run the setup script again:
   ```bash
   npm run db:setup
   ```

## Next Steps

Once your database is populated:

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Visit http://localhost:3000 to see your dictionary in action
3. Try searching for words in Yoruba or English
4. Explore the word detail pages

## Advanced: Adding Custom Data

To add your own custom dictionary entries:

1. Use Prisma Studio (`npm run db:studio`) to add entries manually
2. Create a custom import script based on the examples in the `scripts` directory
3. Modify the existing CSV files before running the import scripts 