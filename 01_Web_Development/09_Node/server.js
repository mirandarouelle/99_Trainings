const express = require('express');
const bodyParser = require('body-parser');



const app = express();

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
//
// app.get('/:id', (req, res) => {
//   //console.log(req.query);
//   //query:
//   //http://localhost:3000/?name=andrei&age=31
//   //result:
//   //{ name: 'andrei', age: '31' }
//
//   //req.body
//   //console.log(req.headers)
//   //request:
//   //GET localhost:3000/
//   //result:
//   // {
//   // name: 'sally',
//   // 'user-agent': 'PostmanRuntime/7.26.1',
//   // accept: '*/*',
//   // 'postman-token': 'e2e24177-85ab-4749-81b9-9786127debf6',
//   // host: 'localhost:3000',
//   // 'accept-encoding': 'gzip, deflate, br',
//   // connection: 'keep-alive'
//   // }
//
//   //console.log(req.params)
//   //request:
//   //GET localhost:3000/1234
//   //response:
//   //{ id: '1234' }
//
//   //res.status(404).send("not found");
//   //resonse:
//   //not found
// });

// //static call
// app.use(express.static(__dirname + '/public'));


app.listen(3000);
