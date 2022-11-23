const fs = require('fs');

fs.readFile((process.argv[process.argv.length - 1]), 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
