const fs = require('fs');
const request = require('request');
const sites = process.argv.slice(2);
console.log(sites);

const retrieveSiteData = function(sitesArray) {
  request(sitesArray[0], (error, reponse, body) => {
    if (error) {
      console.error('Error: ', error);
    } else {
      fs.writeFile(sitesArray[1], body, err => {
        if (err) {
          console.error(err);
        } else {
          console.log('Writing successful');
        }
      });
    }
  });
};

retrieveSiteData(sites);