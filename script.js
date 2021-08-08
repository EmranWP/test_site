$(document).ready(function(){
    var img = $('.gallery').children().children('img').map(function(){
        return $('img').attr('src');
    });
    
    
    // var allImage = jQuery.makeArray(img);
    var folders = img.each(function(){
        urlSlice = $(this).split('/', 7);
        var folder = jQuery.makeArray(urlSlice[urlSlice.length - 2] + '-' + urlSlice[urlSlice.length - 1]);
        return folder;
    });
    // var urlSlice = img.split('/', 7);
    // var folder = urlSlice[urlSlice.length - 2] + '-' + urlSlice[urlSlice.length - 1];
    console.log(folders);
})