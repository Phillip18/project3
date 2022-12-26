

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

const projectData = {};
const a = "You are smart";

app.get('/', (request, response)=>{
    response.send(a);
});

app.post('post', (request, response)=>{
    console.log(request);
    responce.send('post received')
})
