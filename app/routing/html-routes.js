router.get('/survey.html', function(req, res) {
    cat.all(function(data) {
        var hbsObject = { cats: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

app.use(express.static(process.cwd() + '/home.html'));

app.use(bodyParser.urlencoded({
    extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/cats_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);
