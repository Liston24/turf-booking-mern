const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../.env' });

const atlas = process.env.MONGO_URI;
const local = process.env.MONGODB_URI;

console.log('ENV values:');
console.log('MONGO_URI (Atlas):', atlas ? '[present]' : '[missing]');
console.log('MONGODB_URI (local):', local ? local : '[missing]');

async function tryConnect(uriLabel, uri) {
  if (!uri) return;
  console.log(`\nTrying connection (${uriLabel})`);
  try {
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 10000 });
    console.log(`Connected successfully using ${uriLabel}`);
    await mongoose.disconnect();
  } catch (err) {
    console.error(`Connection error for ${uriLabel}:`);
    console.error(err && err.message ? err.message : err);
  }
}

(async () => {
  // Prefer testing Atlas first then local
  await tryConnect('MONGO_URI (Atlas)', atlas);
  await tryConnect('MONGODB_URI (local)', local);
  console.log('\nDone');
  process.exit(0);
})();
