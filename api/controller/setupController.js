var Todos = require('../models/model');

module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        // setup seed data
        var seedTodos = [
            {
                text: 'Học Node.js',
                isDone: false
            },
            {
                text: 'Học Angular.js',
                isDone: false
            },
            {
                text: 'Viết 1 ứng dụng',
                isDone: false
            }
        ];
        
        Todos.create(seedTodos, function(err, results){
            res.send(results);
        });
    });
}