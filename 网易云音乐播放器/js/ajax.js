///song/detail?ids=347230
var server_url="http://shaobaitao.cn:3000/";//aip接口url
var music_list="5085212318";//歌单id
// var music_id="533367211";//歌曲id
//533810721  我的歌单 60198 B榜
//2468333785 包桑歌单 3150605892
//595089406 5085212318
var audio =$('#audio')[0];
var music_pic=$('#music_pic')[0];
var music_name=$('#music_name')[0];
var music_lrc=$('#music_lrc')[0];
var small_pic=$('#small_pic')[0];
var lrc_text;

init();

function init(){//初始化函数
    let list=get_music_list(music_list);//拿到歌单里所有歌曲的id

    // audio.autoplay="autoplay";
    // audio.controls="controls";
    music_lrc.innerHTML=get_music_lrc(list[0]);//拿歌词
    music_name.innerHTML=get_music_author(list[0])+' - '+get_music_name(list[0]);
    music_pic.src=get_music_pic(list[0]);//拿封面
    small_pic.src=music_pic.src;
    audio.src=get_music_url(list[0]);//歌曲url
    var div=$("#music_list_div");
    let html = '<div class="list-item" >' +
        '    <span class="span-num list-span"></span>' +
        '    <span class="span-name list-span">歌名</span>' +
        '    <span class="span-author list-span">歌手</span>' +
        '    <span class="span-album list-span">专辑</span>' +
        '    <span class="span-time list-span">时长</span>' +
        '</div>';
    div.append(html);
    creat_music_list_div(music_list);//把歌单id传进去
}

function change_src(id) {//资源改变函数 切换歌曲的时候切换对应src
    music_name.innerHTML=get_music_author(id)+' - '+get_music_name(id);
    audio.src=get_music_url(id);
    music_pic.src=get_music_pic(id);
    small_pic.src=music_pic.src;
    music_lrc.innerHTML=get_music_lrc(id);

    blur_bg.attr("src",music_pic.src);
    blur_bg.backgroundBlur(music_pic.src);

}

function creat_music_list_div(id) {//创建歌曲列表
    let list=get_music_list(id);//获取所有歌曲的id
    for (let i = 0; i < list.length; i++) {
        let name=get_music_name(list[i]);//获取歌曲名
        let author=get_music_author(list[i]);//获取作者
        let album=get_music_album(list[i]);//获取专辑
        let time=get_music_time(list[i]);//获取时长
        creat_music_list_item(i+1,list[i],name,author,album,time);
    }

}

function creat_music_list_item(no,id,name,author,album,time) {//传进序号 id 名字 作者 专辑 时长给歌曲列表打表
    let html = '<div class="list-item" ondblclick="choose_play(this)" data-no="' + (no - 1) + '">' +
        '    <span class="span-num list-span">' + no + '</span>' +
        '    <span class="span-name list-span">' + name + '</span>' +
        '    <span class="span-author list-span">' + author + '</span>' +
        '    <span class="span-album list-span">' + album + '</span>' +
        '    <span class="span-time list-span">' + time + '</span>' +
        '</div>';
    var div=$("#music_list_div");
    div.append(html);
}

function get_music_time(id) {//获取歌曲时长
    let time;
    $.ajaxSetup({async: false});
    $.getJSON(server_url+"song/detail?ids="+id,
        function (json) {
            time=(json.songs[0].dt);

        }
    );
    let min=Math.floor(time/1000/60);
    let sec=Math.floor(time/1000%60);
    sec=PrefixZero(sec, 2);
    time=min+":"+sec;
    return time;
}

function get_music_album(id) {//获取歌曲所属专辑
    let album;
    $.ajaxSetup({async: false});
    $.getJSON(server_url+"song/detail?ids="+id,
        function (json) {
            album=(json.songs[0].al.name);
        }
    );
    return album;
}

function get_music_list(id) {//传入歌单id 返回歌单里所有歌曲id数组
    let list=[];
    $.ajaxSetup({async: false});
    $.post(server_url+"playlist/detail?id="+id,
        function (json) {
            for (let i = 0; i < json.playlist.trackIds.length; i++) {
                list.push(json.playlist.trackIds[i].id);
                // list.push(json.privileges[i].id);
            }
        }
    );
    return list;
}

function get_music_url(id) {//获取歌曲mp3的url
    let url;
    $.ajaxSetup({async: false});
    $.getJSON(server_url+"song/url?id="+id,
        function (json) {
            url=json.data[0].url;
        }
    );
    return url;
}

function get_music_lrc(id){//获取歌曲歌词
    let lrc;
    $.ajaxSetup({async: false});
    $.getJSON(server_url+"lyric?id="+id,
        function (json) {
            lrc=json.lrc.lyric;
        }
    );
    return lrc;
}

function get_music_author(id) {//获取歌曲作者
    let author;
    $.ajaxSetup({async: false});
    $.getJSON(server_url+"song/detail?ids="+id,
        function (json) {
            // author=json.songs[0].name;
            let author_str="";
            for (let i = 0; i < json.songs[0].ar.length; i++) {
                if(i!=0)
                author_str+="、"+json.songs[0].ar[i].name;
                else
                author_str+=json.songs[0].ar[i].name;
            }
            author=author_str;
        }
    );
    return author;
}

function get_music_name(id){//获取歌曲名称
    let name;
    $.ajaxSetup({async: false});
    $.getJSON(server_url+"song/detail?ids="+id,
        function (json) {
            name=json.songs[0].name;
        }
    );
    return name;
}

function get_music_pic(id) {//获取歌曲封面图片
    let pic;
    $.ajaxSetup({async: false});
    $.getJSON(server_url+"song/detail?ids="+id,
        function (json) {
            pic=json.songs[0].al.picUrl;
        }
    );
    return pic;
}

function PrefixZero(num, n) {//补零函数
    return (Array(n).join(0) + num).slice(-n);
}
