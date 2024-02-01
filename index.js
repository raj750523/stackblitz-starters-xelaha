const express = require("express"); 
const axios = require("axios")
const app = express(); 
app.get("/", (req, res) => { 
  res.send("Express on Vercel");
  const url =
  'https://linkredirect.in/visitproduct/1234/PPS16-Myntra-catcard204?id=3217370&shareid=ngSXdVN';
  let startPattern = "'exitID': '";
  let endPattern = "'";
  axios
    .get(url)
    .then((response) => {
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
      console.log('Error:', error.message);
    });


});
   
// app.post("/getExitID", function(req, res){
//   //this is a callback function
//   res.send(req)
// })

const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => { 
      console.log(`Server is running on port ${PORT}`);
});