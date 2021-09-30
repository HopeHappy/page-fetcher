const request = require('request');
const fs = require('fs');

const fetcher = function(path, file) {

  request(path, (error, response, body) => {

    if(error) {
      console.log('error', error);
      return;
    }
    
    fs.writeFile(file, body, error => {
      if(error) {
        console.log('Failed to write to file.');
        return;
      }
    })

    const size = body.length;
    console.log(`Downloaded and saved ${size} bytes to ${file}`);

  });

};

const path = process.argv[2];
const file = process.argv[3];
fetcher(path, file);