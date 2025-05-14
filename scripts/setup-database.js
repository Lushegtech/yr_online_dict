const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting database setup for Yorùbá Dictionary...');

// Check if .env file exists, create a temporary one for the setup process if not
let createdTempEnvFile = false;
if (!fs.existsSync(path.join(process.cwd(), '.env'))) {
  console.log('⚠️ No .env file found. Creating a temporary one for database setup.');
  
  const envContent = `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/yorubadict?schema=public"
NEXT_PUBLIC_API_URL=http://localhost:3000/api`;
  
  fs.writeFileSync(path.join(process.cwd(), '.env'), envContent);
  createdTempEnvFile = true;
  console.log('Created temporary .env file. Please update it with your actual database credentials after setup.');
}

// Function to run a script and handle errors
function runScript(scriptPath, description) {
  console.log(`\n📋 ${description}...`);
  try {
    execSync(`node ${scriptPath}`, { stdio: 'inherit' });
    console.log(`✅ ${description} completed successfully!`);
    return true;
  } catch (error) {
    console.error(`❌ Error during ${description.toLowerCase()}:`);
    console.error(error.message);
    return false;
  }
}

// Function to run a Prisma command
function runPrisma(command, description) {
  console.log(`\n📋 ${description}...`);
  try {
    execSync(`npx prisma ${command}`, { stdio: 'inherit' });
    console.log(`✅ ${description} completed successfully!`);
    return true;
  } catch (error) {
    console.error(`❌ Error during ${description.toLowerCase()}:`);
    console.error(error.message);
    return false;
  }
}

// 1. Run database migrations
runPrisma('migrate deploy', 'Deploying database migrations');

// 2. Generate Prisma client
runPrisma('generate', 'Generating Prisma client');

// 3. Check database connection
if (!runScript(path.join(__dirname, 'check-db.js'), 'Checking database connection')) {
  console.error('❌ Database connection failed. Please check your connection settings in .env');
  process.exit(1);
}

// 4. Run import scripts in sequence
runScript(path.join(__dirname, 'import-data.js'), 'Importing core dictionary data (words, translations, and alphabets)');
runScript(path.join(__dirname, 'import-examples.js'), 'Importing example sentences');
runScript(path.join(__dirname, 'import-cultural-facts.js'), 'Importing cultural facts');

// 5. Create featured word (word of the day)
const createFeaturedWord = require('./create-featured-word.js');
createFeaturedWord().catch(error => {
  console.error('❌ Error creating featured word:', error);
});

console.log('\n🎉 Database setup completed!');
console.log('\nYour Yoruba Dictionary database is now populated with:');
console.log('- Words and translations');
console.log('- Example sentences');
console.log('- Cultural facts');
console.log('- Featured word of the day');

console.log('\nNext steps:');
console.log('1. Make sure your .env file has the correct database connection string');
console.log('2. Start the application with: npm run dev');
console.log('3. Visit http://localhost:3000 to see your dictionary in action');

if (createdTempEnvFile) {
  console.log('\n⚠️ Note: A temporary .env file was created. Please update it with your actual database credentials.');
}

console.log('\nTo explore the database directly, run: npx prisma studio'); 