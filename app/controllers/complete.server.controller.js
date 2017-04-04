exports.render = function(req, res){
    
var Imgpath = req.query.pic;
        res.render('complete', {
        Imgpath: Imgpath
    })
    }; 
