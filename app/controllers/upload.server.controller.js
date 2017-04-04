exports.render = function(req, res){
    res.render('upload', {
        title: 'upload',
        body:  '<form action="/uploadpost" enctype="multipart/form-data" '+
                'method="post">'+
                '<input type="file" name="upload" multiple="multiple">'+
                '<input type="submit" value="Upload file" />'+
                '</form>'
   

    })
};
