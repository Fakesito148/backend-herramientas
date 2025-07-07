const bcrypt = require('bcryptjs');

async function generateHash() {
  const hash = await bcrypt.hash('ola123', 12);
  console.log(hash);
}

generateHash();
