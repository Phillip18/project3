const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());
app.use(express.static('website'));
const port = 3000;

app.listen(port, function() {
    console.log(`Server is running on port ${port}.`);
});

let projectData = {};

app.get('/', function (request, response) {
    response.send(projectData);
  })
app.post('/', (request, response)=>{
    response.send('information sent successfully')
    projectData = {
        zip: request.body.zip,
        date: request.body.date,
        temp: request.body.temp,
        feel: request.body.feelings
    }
    console.log(projectData)
})
