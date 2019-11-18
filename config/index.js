const configValues = require('./config');
module.exports = {
    getDBconnection : function(){
        return `mongodb+srv://${configValues.username}:${configValues.password}@cluster0-xrplv.mongodb.net/nodeTodos?retryWrites=true&w=majority`
    }
}
