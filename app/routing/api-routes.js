router.get('/api/friends', function(req, res) {
    cat.all(function(data) {
        var hbsObject = { cats: data };
        console.log(hbsObject);
        res.render('index', hbsObject);
    });
});

router.post('/api/friends', function(req, res) {

});
