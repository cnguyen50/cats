const fs = require('fs');


const breedDetailsFromFile = function(breed, printCatBreed) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      printCatBreed(data);
    } else {
      printCatBreed(undefined);
    }
  });
};

const printCatBreed = (breed) => {
  console.log('Return Value: ', breed);
};

// we try to get the return value
const bombay = breedDetailsFromFile('Bombay', printCatBreed);
// console.log('Return Value: ', bombay); 




module.exports = breedDetailsFromFile

