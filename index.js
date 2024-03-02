const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send({message: 'this is home page'})
});

app.get('/about', (req,res)=>{
    res.send({message: 'this is about page'})
})

app.listen(process.env.PORT || 3000, ()=> {
    console.log('app is listening...');
});

module.exports = app;