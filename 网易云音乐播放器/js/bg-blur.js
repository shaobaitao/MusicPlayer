let list=get_music_list(music_list);
var blur_url=get_music_pic(list[0]);
var blur_bg=$('#blur_div');
blur_bg.backgroundBlur({
    imageURL : blur_url,
    blurAmount : 50,
    imageClass : 'bg-blur',
    duration: 1000, // If the image needs to be faded in, how long that should take
    endOpacity : 1 // Specify the final opacity that the image will have
});


//Switch the image
blur_bg.backgroundBlur(blur_url);