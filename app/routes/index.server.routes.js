module.exports = function(app){

    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);

    var complete = require('../controllers/complete.server.controller');
    app.get('/complete', complete.render);
    var upload = require('../controllers/upload.server.controller');
    app.get('/upload', upload.render);
   // var uploadpost = require('../controllers/uploadpost.server.controller');
   // app.get('/uploadpost', uploadpost.render);


}