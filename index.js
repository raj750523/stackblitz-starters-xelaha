const axios = require('axios');

const url =
  'https://linkredirect.in/visitproduct/1234/PPS16-Myntra-catcard204?id=3217370&shareid=ngSXdVN';

let startPattern = "'exitID': '";
let endPattern = "'";
axios
  .get(url)
  .then((response) => {
    console.log('Response:', response.data);
    let html = response.data;
    let startIndex = html.indexOf(startPattern);
    let endIndex = html.indexOf(endPattern, startIndex + startPattern.length);
    if (startIndex != -1 && endIndex != -1) {
      let extractedSubstring = html.substring(
        startIndex + startPattern.length,
        endIndex
      );
      console.log(extractedSubstring);
    } else {
      console.log('Substring not found.');
    }
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
