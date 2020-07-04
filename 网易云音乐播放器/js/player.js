var per_btn=$("#pre_btn");
var next_btn=$("#next_btn");
var play_btn=$("#play_btn");
var mode_btn=$("#mode_btn");

var svg_pause=  "<path d=\"M304 928c0 17.664 14.32 32 32 32h16c17.664 0 32-14.336 32-32V96c0-17.664-14.336-32-32-32h-16c-17.68 0-32 14.336-32 32v832z m336 0c0 17.664 14.336 32 32 32h16c17.68 0 32-14.336 32-32V96c0-17.664-14.32-32-32-32h-16c-17.664 0-32 14.336-32 32v832z\" fill=\"#e6e6e6\" p-id=\"1815\"></path><title>暂停</title>"
var svg_play=   "<path d=\"M811.52 473.6L330.24 161.28c-28.16-15.36-61.44-7.68-61.44 40.96V819.2c0 51.2 35.84 58.88 61.44 40.96l481.28-314.88c28.16-15.36 28.16-53.76 0-71.68zM320 798.72V222.72L775.68 512 320 798.72z\" fill=\"#e6e6e6\" p-id=\"1165\"></path><title>播放</title>";
var svg_suiji=  "<path d=\"M844.8 665.6c-6.4-6.4-16-12.8-25.6-9.6-19.2 0-35.2 16-35.2 35.2 0 9.6 6.4 19.2 12.8 25.6l41.6 41.6c-44.8-6.4-86.4-22.4-121.6-51.2-3.2 0-3.2-3.2-6.4-6.4L332.8 304C268.8 233.6 192 195.2 99.2 195.2c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32c73.6 0 134.4 32 182.4 86.4l384 400 6.4 6.4c48 38.4 108.8 64 172.8 70.4l-48 44.8c-9.6 6.4-16 19.2-16 28.8 0 19.2 19.2 35.2 38.4 32 9.6 0 19.2-6.4 25.6-12.8l99.2-92.8c16-16 16-41.6 0-57.6l-99.2-102.4z m-3.2-556.8c-12.8-16-32-19.2-48-6.4-9.6 6.4-12.8 16-12.8 25.6 0 12.8 3.2 22.4 16 28.8l41.6 41.6c-73.6 9.6-140.8 38.4-192 89.6l-115.2 118.4c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 16 9.6 25.6 9.6s19.2-3.2 25.6-9.6l112-118.4c41.6-38.4 92.8-64 147.2-70.4l-44.8 44.8c-6.4 6.4-12.8 16-12.8 25.6 0 19.2 16 35.2 32 35.2 9.6 0 19.2-3.2 28.8-9.6L950.4 256c12.8-12.8 12.8-35.2 0-48l-108.8-99.2m-438.4 448c-9.6 0-19.2 3.2-25.6 9.6l-118.4 121.6c-48 44.8-96 67.2-160 67.2H96c-19.2 0-35.2 16-35.2 35.2s16 32 35.2 32h3.2c83.2 0 147.2-32 211.2-86.4l121.6-124.8c6.4-6.4 9.6-12.8 9.6-22.4 0-9.6-3.2-16-9.6-22.4-9.6-6.4-19.2-9.6-28.8-9.6z\" fill=\"#e6e6e6\" p-id=\"2501\"></path><title>随机播放</title>";
var svg_liebiao="<path d=\"M694.4 854.4H195.2l48 44.8c9.6 6.4 16 16 16 28.8-3.2 19.2-19.2 32-38.4 32-9.6 0-22.4-6.4-28.8-12.8l-108.8-96c-12.8-12.8-16-35.2 0-48L192 704c6.4-6.4 19.2-9.6 28.8-9.6 19.2 0 35.2 16 35.2 35.2 0 9.6-6.4 19.2-12.8 25.6l-41.6 38.4h496c112 0 198.4-89.6 198.4-198.4v-86.4c0-19.2 12.8-32 32-32s32 12.8 32 32v86.4c0 140.8-118.4 259.2-265.6 259.2zM329.6 169.6h496l-48-44.8c-9.6-6.4-16-16-16-28.8 3.2-19.2 19.2-32 38.4-32 9.6 0 22.4 6.4 28.8 12.8l108.8 96c12.8 12.8 16 35.2 0 48L832 320c-6.4 6.4-19.2 9.6-28.8 9.6-19.2 0-35.2-16-35.2-35.2 0-9.6 6.4-19.2 12.8-25.6l41.6-38.4H326.4C217.6 233.6 128 323.2 128 435.2v89.6c0 19.2-12.8 32-32 32s-32-12.8-32-32v-86.4C64 288 182.4 169.6 329.6 169.6z\"  fill=\"#e6e6e6\" p-id=\"2369\"></path><title>列表循环</title>";
var svg_danqu=  "<path d=\"M958.708971 326.351789l0 537.595958c0 29.90203-24.24417 54.157457-54.146201 54.157457L119.43723 918.105205c-29.90203 0-54.146201-24.255427-54.146201-54.157457L65.291029 326.351789c0-29.90203 24.24417-58.006112 54.146201-58.006112l300.952306 0-73.492828-72.063269c-21.070898-21.217231-20.958334-53.578266 0.258896-74.649164 21.210068-21.077038 55.494918-20.973684 76.57298 0.243547l165.229159 166.310793c20.972661 21.116947 20.972661 55.134715 0 76.251661L423.727561 530.661012c-10.582009 10.654664-24.495904 15.748682-38.415938 15.748682-13.794168 0-27.595498-5.724375-38.157042-16.213263-21.217231-21.070898-21.329794-56.319703-0.258896-77.536934l73.599252-76.020394L173.58343 376.639103l0 433.172677 676.832116 0L850.415546 376.639103 736.709855 376.639103c-29.90203 0-54.146201-24.245194-54.146201-54.146201s24.24417-54.146201 54.146201-54.146201l167.852916 0C934.464801 268.345678 958.708971 296.449759 958.708971 326.351789z\" p-id=\"3313\" fill=\"#e6e6e6\"></path><title>单曲循环</title>";

var mode_index=0;
//播放模式引索  0 列表循环 1 随机播放 2单曲循环

var music_index=0;
//音乐列表index 代表列表中的第几首 这里默认播放第一首

per_btn.click(function () {//上一首
    mode_law(-1);//这个参数-1表示是上一首 1为下一首

    play_btn.html(svg_pause);//改变播放按钮图标为暂停样式
});

next_btn.click(function () {//下一首
    mode_law(1);

    play_btn.html(svg_pause);
});

play_btn.click(function () {//播放/暂停
    if(audio.paused){
        audio.play()//音频播放
        play_btn.html(svg_pause);
    }
    else{
        audio.pause();//音频暂停
        play_btn.html(svg_play);
    }
});

mode_btn.click(function () {//改变播放模式
    if(mode_index==0){
        mode_index=1;
        mode_btn.html(svg_suiji);
        return ;
    }
    if(mode_index==1){
        mode_index=2;
        mode_btn.html(svg_danqu);
        return ;
    }
    if(mode_index==2){
        mode_index=0;
        mode_btn.html(svg_liebiao);
        return ;
    }

});
function choose_play(div) {//直接双击音乐列表的div播放触发函数
    //div 由this传入
    play_btn.html(svg_pause);
    music_index=div.getAttribute("data-no");//通过data-no属性获取到底点了第几个div
    change_src(list[music_index]);
    change_lrc();
    audio.play();
    blur(url);//背景模糊
}
//0 列表循环 1 随机播放 2单曲循环
function mode_law(e){
    if(mode_index==0){
        if(e==-1){
            if(music_index==0){
                music_index=list.length;
            }
            change_src(list[--music_index]);
            change_lrc();
            audio.play();
        }
        else{
            if(music_index==list.length-1){
                music_index=-1;
            }
            change_src(list[++music_index]);
            change_lrc();
            audio.play();
        }
        return ;
    }
    if(mode_index==1){
        var seed=Math.floor(Math.random()*list.length);
        music_index=seed;
        change_src(list[seed]);
        change_lrc();
        audio.play();
        return ;
    }
    if(mode_index==2){
        audio.currentTime=0;
        audio.play();
        return ;
    }
}
audio.ontimeupdate = function () {//音频播放过程中触发函数
    //设置时间
    var times = audio.currentTime;//现在时间
    var music_time=$("#music_time");
    var now_time=audio.currentTime;
    var total_time=audio.duration;
    var a,b,c,d;
    a=PrefixZero(Math.floor(Math.ceil(audio.currentTime)/60), 2);
    b=PrefixZero(Math.ceil(audio.currentTime)%60, 2);
    c=PrefixZero(Math.floor(Math.floor(audio.duration)/60), 2);
    d=PrefixZero(Math.floor(audio.duration)%60, 2);
    if(c=='null'||c=='aN'){
        music_time.html("00:00/00:00");

    }
    else{
        music_time.html(a+':'+b+'/'+c+':'+d);
    }
    //设置进度条
    var bar=$("#range_speed")[0];
    bar.value=audio.currentTime / audio.duration *100 ;//跟新进度条
    var curTime = audio.currentTime; //播放器时间
    changeSpeed(1);//1代表是程序执行的 其他用户输入
};
audio.onended=function(){//音频播放结束后自动下一首
    mode_law();
};
changevolume();//音量初始化
function changevolume() {

    var value = $('#input_volume').val();

    audio.volume = value/100;
    //85 0.85
    // console.log(audio.volume);
    var valStr = value + "% 100%";
    $('#input_volume').css({
        "background-size": valStr
    })
    $("input[name='animat_speed']").val((value / 10).toFixed(1));
};

function changeSpeed(e) {//改变进度条已过的背景
    //参数e   1代表是用户输入 其他代表程序执行的
    var value = $('#range_speed').val();
    // console.log(audio.currentTime,value);

    if(e!=1){
        audio.currentTime=audio.duration/100*value;

        return ;
    }

    var valStr = value + "% 100%";
    $('#range_speed').css({
        "background-size": valStr
    })
    $("input[name='animat_speed']").val((value / 10).toFixed(1));
};
