const express = require('express');

//create instance 

const app = express();
const pug = require('pug');
const Workhours = require('./middelware/Workhours');

app.use(express.static('public'))
app.set('view engine', 'pug');
app.set('views','views');

app.get('/', function(req, res){
    res.render('index', {title:'home page'})
})



app.get('/erreur', function(req, res){
    res.render('erreur', {title:'erreur page',})
})

app.get('/contactus', function(req, res){
    res.render('contactus', {title:'contactus page',})
})







const PORT = 2209;
app.listen(PORT, error =>{
    if(error){console.log(error);}
    else {
        console.log(`server is running at ${PORT}`);
    }
});
