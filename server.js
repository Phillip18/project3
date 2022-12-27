

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
const { send } = require('express/lib/response');
app.use(cors());
/*app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })*/
  /*app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'null');
    next();
  });*/ 

app.use(express.static('website'));

const port = 3000;

app.listen(port, function() {
    console.log(`Server is running on port ${port}.`);
});

const projectData = {};
const a = "You are smart";

/*app.get('/', (request, response)=>{
    console.log('sending...');
    response.send('working on it');
    response.send(a);
});*/
app.get('/', function (req, res) {
    res.send({fool: stupid});
  })
app.post('post', (request, response)=>{
    console.log(request);
    response.send('post received')
})
