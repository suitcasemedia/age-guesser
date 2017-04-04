var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    multer  = require('multer'),
    upload = multer({ dest: '../public/uploads/',  limits: {fileSize: 1000000, files:1},}),
    fs = require('fs');

/** Permissible loading a single file, 
    the value of the attribute "name" in the form of "recfile". **/
var type = upload.single('upload');
    methodOverride = require('method-override') ;

module.exports = function(){
    var app = express();
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }   else if (process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    
   
    app.set('views', './app/views');
    app.set('view engine', 'ejs');
    
    require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));


    app.post('/uploadpost', type, function (req,res) {

    /** When using the "single"
         data come in "req.file" regardless of the attribute "name". **/
     var tmp_path = req.file.path;

    /** The original name of the uploaded file
         stored in the variable "originalname". **/
     var target_path = 'public/uploads/' + req.file.originalname;
     var imgPath = '/uploads/' + req.file.originalname;
    /** A better way to copy the uploaded file. **/
    var src = fs.createReadStream(tmp_path);
    var dest = fs.createWriteStream(target_path);
    src.pipe(dest);
    src.on('end', function() { var string = imgPath; res.redirect('/complete?pic=' + string);
 });
    src.on('error', function(err) { res.render('error'); });

    });

    return app;
}