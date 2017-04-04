
exports.render = function(req, res){
    res.render('uploadpost', {
        title: 'upload',
        body:  '<form action="/upload-post" enctype="multipart/form-data" '+
                'method="post">'+
                '<input type="file" name="upload" multiple="multiple">'+
                '<input type="submit" value="Upload file" />'+
                '</form>'
   

    })
};
