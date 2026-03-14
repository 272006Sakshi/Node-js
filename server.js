const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Welcome to the server');
})
app.get('/litti', (req, res)=>{
    res.send('i would love to serve litti chokha');
})
app.get('/Paneer', (req, res)=>{
    var customized_paneer = {
        name: 'Paneer Tikka', 
        price: 200,
        size: 'medium',
        description: 'Delicious Paneer Tikka'
    }
    res.send(customized_paneer);
})

// app.listen(3000)
app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})