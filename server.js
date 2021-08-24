const express = require('express');
const app = express();
const port = 8080;
const handlebars = require('express-handlebars');
const Post = require('./models/Post');


app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.engine('handlebars', handlebars({defaultLayout:'main'}))
app.set('view engine', 'handlebars')

app.get('/project', function (req, res) {
    res.render('formulario')
})

app.post('/add', function(req, res){
    Post.create({
        cliente: req.body.cliente,
        duracao: req.body.duracao
    }).then(function(){
        res.send("container enviado")
    }).catch(function(erro){
        res.send("houve um problema: "+ erro)
    })
})

app.listen(port , () => {
    console.log("Server on")
})