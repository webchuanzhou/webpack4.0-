import './index.scss'
import $ from 'jquery'
import '../../utils/common'
import '../../utils/jquery.qrcode.min.js'
var index = {
    hezuo:{
        Value:1,
        max:2
    },
    hezuoDanwei:{
        Value:1,
        max:4
    },
    init(){
        $('.hezuo').text(this.hezuo.Value)
        $('.box3Txt').text(this.hezuoDanwei.Value);
        $('.btnNext').click(()=>{
            this.nextHezuoParent()
        })
        //下一页切换
        $(".btnNext2").click(()=>{
            this.nextHezuo()
        })
        //二维码生成
        this.codeCreate();
    },
    nextHezuoParent(){
        this.hezuoDanwei.Value++;
        if(this.hezuoDanwei.Value > this.hezuoDanwei.max){
            this.hezuoDanwei.Value = 1;
        };
        $('.box3Txt').text(this.hezuoDanwei.Value)
        $(".box3None").removeClass('box3Block');
        $(".box3None").eq(this.hezuoDanwei.Value-1).addClass('box3Block');
    },
    nextHezuo(){
        this.hezuo.Value++;
        if(this.hezuo.Value > this.hezuo.max){
            this.hezuo.Value = 1;
        };
        $('.hezuo').text(this.hezuo.Value)
        $(".hzNext").removeClass('displayBlcok');
        $(".hzNext").eq(this.hezuo.Value-1).addClass('displayBlcok');
    },
    codeCreate(){
        $('#codeDown').qrcode({
            render: "canvas", //也可以替换为table
            foreground: "#000",
            background: "#fff",
            width: 60,
            height: 60,
            text: "http://www.baidu.com"
        });
    }
}
index.init();