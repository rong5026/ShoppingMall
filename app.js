const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const path = require('path');
const app = express();
const db = require('./mysql/database');

app.use(express.static(path.join(__dirname, 'public')));


app.get('/mysql', (req,res) => {
 
  db.query('SELECT * FROM user_data',(err, results)=>{
    
    if(err) {
      console.log("불러오기 실패");
      throw error;
    }
    else{
      res.send(results);
    }
  });
});


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/html', 'sample202_35.html'));
});

app.get('/api', (req, res) => {
  const result = {
    code: 0,
    message: 'success'
  };
  res.send(result);
});

app.listen(3000, () => {
  console.log('Express App on port 3000!');
});
