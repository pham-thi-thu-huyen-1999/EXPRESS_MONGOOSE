var express = require('express');
app = express();
// var fa = require('fs')
// var content = fs.readFileSync('db.json')
// console.log(content);
// var db = require('./db')
app.use(express.static('public'));
app.set('view engine', 'pug')
app.set('views', './views');

var userRoutes = require('./routes/user.route');
var productRoutes = require('./routes/product.route');

app.use('/product', productRoutes)
app.use('/user', userRoutes)


app.delete('/', (req, res) => {
    res.send('Received a DELETE HTTP method');
});

app.get('/', (req, res) => {
    res.render('index', {
        name: 'AAA'
    })
});


app.get('/', (req, res) => {
    res.render('user/create')
})
//search    
app.get('', (req, res) => {
    var q = req.query.q;
    var matchUser = user.filter(function (user) {
        return user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    res.render('user/index', {
        users: matchUser
    })
})
var port = 3000;
app.listen(port, () => {
    console.log(port);
})