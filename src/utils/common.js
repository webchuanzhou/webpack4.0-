import $ from 'jquery'
import { i18n } from './i18n'
import {getLocalStorage,setLocalStorage} from './tool'
var common = {
    lang:getLocalStorage('lang')?getLocalStorage('lang'):'en',
    init:function(){
        //头部滚动轴
        $(window).scroll(() => {
            if($(document).scrollTop() > 100){
                $("#header").addClass('header-bg');
            }else{
                $("#header").removeClass('header-bg');
            }
        });
        var _this = this;
        //语言切换
        if(_this.lang == 'zh'){
            $('.en').css('display','inline-block');
        }else{
            $('.zh').css('display','inline-block');
        }
        this.languageClick()
        $(function(){
            // $('#header').load('./header.html');
            for(var i=0;i<$(".lange").length;i++){
                $(".lange").eq(i).html(i18n[_this.lang][$(".lange").eq(i).data("lang")])
            }
        })
        //菜单
        $(".menumask").hover(function(){
            $(".menu_bg").addClass("act_menubg");
        },function(){
            $(".menu_bg").removeClass("act_menubg");
        })
        
        $(".menumask .menuli").hover(function(){
            var t = $(this);
            var ind = t.index()-1;
            $(".menu_bg .img").eq(ind).addClass("actimg").siblings().remove("actimg");
        },function(){
            var t = $(this);
            var ind = t.index();
            $(".menu_bg .img").removeClass("actimg");
        })
        $(".BoxPop").click(function(){
            $('.menu_circle').toggleClass("act_circle");
            $('.menumask').toggleClass("actmenumask");
            $('.closeCommon').toggleClass("closeShow");
        })
        $(".closeCommon").click(function(){
            $('.menu_circle').toggleClass("act_circle");
            $('.menumask').toggleClass("actmenumask");
            $('.closeCommon').toggleClass("closeShow");
        })
    },
    //语言切换
    languageClick:function(){
        var _this = this;
        $(".language").click(function(){
            if(_this.lang == 'zh'){
                setLocalStorage('lang','en');
            }else{
                setLocalStorage('lang','zh');
            }
            location.reload();
        })
    },
    //锚点滑动
    scrool(name,type = false){
        if(type){
            $('.menu_circle').toggleClass("act_circle");
            $('.menumask').toggleClass("actmenumask");
        }
        $("html, body").animate(
            { scrollTop: $("#" + name).offset().top - 70 + "px" },
            { duration: 400, easing: "swing" }
        );
    }
}
common.init();