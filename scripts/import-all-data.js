const { execSync } = require('child_process');
const path = require('path');

console.log('🚀 Starting full data import process for Yorùbá Dictionary...');

// Function to run a script and handle errors
function runScript(scriptName, description) {
  console.log(`\n📋 ${description}...`);
  try {
    execSync(`node ${path.join(__dirname, scriptName)}`, { stdio: 'inherit' });
    console.log(`✅ ${description} completed successfully!`);
    return true;
  } catch (error) {
    console.error(`❌ Error during ${description.toLowerCase()}:`);
    console.error(error.message);
    return false;
  }
}

// Check database connection first
if (!runScript('check-db.js', 'Checking database connection')) {
  console.error('❌ Database connection failed. Please check your connection settings in .env');
  process.exit(1);
}

// Run import scripts in sequence
runScript('import-data.js', 'Importing core dictionary data (words, translations, and alphabets)');
runScript('import-examples.js', 'Importing example sentences');

// Add cultural facts import
runScript('import-cultural-facts.js', 'Importing cultural facts');

console.log('\n🎉 Data import process completed!');
console.log('\nTo verify the imported data, you can:');
console.log('1. Check the database directly via the Neon DB dashboard');
console.log('2. Start your application and test the search functionality');
console.log('3. Run database queries via the Prisma Studio with: npx prisma studio\n'); 