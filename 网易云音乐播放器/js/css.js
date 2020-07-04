var theme_color="#00ffff";//主题色
var background_color="#ffffff";//背景色

$(".icon").on({//控制按钮的hover效果
    "mouseover":function () {
        $(this.firstChild).css("fill",theme_color);
    },
    "mouseout":function () {
        $(this.firstChild).css("fill",background_color);

    }
});

$("#music_name,#music_time").on({//歌曲时间和名字的hover效果
    "mouseover":function () {
        $(this).css("color",theme_color);
    },
    "mouseout":function () {
        $(this).css("color",background_color);
    }
});

$(".list-item").on({//音乐列表的hover效果
   "mouseover":function () {
       $(this).css("background","rgba(255,255,255,0.3 )");
   },
   "mouseout":function () {
       $(this).css("background","none");
   }
});
