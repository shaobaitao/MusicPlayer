
var lrc_div = $("#music_lrc")[0];

change_lrc();
function change_lrc(){
    var lrc_array=parseLyric(lrc_div.innerHTML);
    lrc_div.innerHTML='';
    var i = 0;
    for(var k in lrc_array){
        var txt = lrc_array[k];
        if(!txt) txt = "&nbsp;";
        var li = $("<li data-no='"+i+"' class='lrc-item'>"+txt+"</li>");
        $(lrc_div).append(li);
        i++;
    }
}



function parseLyric(lrc) {//格式化进来的歌词
    if(lrc === '') return '';
    var lyrics = lrc.split("\n");
    var lrcObj = {};
    for(var i=0;i<lyrics.length;i++){
        var lyric = decodeURIComponent(lyrics[i]);
        var timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
        var timeRegExpArr = lyric.match(timeReg);
        if(!timeRegExpArr)continue;
        var clause = lyric.replace(timeReg,'');
        for(var k = 0,h = timeRegExpArr.length;k < h;k++) {
            var t = timeRegExpArr[k];
            var min = Number(String(t.match(/\[\d*/i)).slice(1)),
                sec = Number(String(t.match(/\:\d*/i)).slice(1));
            var time = min * 60 + sec;
            lrcObj[time] = clause;
        }
    }
    return lrcObj;
}