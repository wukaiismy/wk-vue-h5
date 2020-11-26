import axios from "axios";
// const wx = require("weixin-js-sdk");
import wx from "weixin-js-sdk";

class ShareInfo {
    constructor() {}
    identify(URL) {
        let requestUrl = URL.match("m.nbd.com.cn")
            ? "http://m.nbd.com.cn/get_wechat_signature"
            : "http://www.nbd.com.cn/get_wechat_signature";
        axios({
            method: "post",
            url: requestUrl,
            data: { share_url: URL },
        }).then((res) => {
            let { data } = res;
            wx.config({
                debug: false,
                appId: data.data.appid,
                timestamp: data.data.timestamp,
                nonceStr: data.data.noncestr,
                signature: data.data.signature,
                jsApiList: [
                    "onMenuShareTimeline",
                    "onMenuShareAppMessage",
                    "onMenuShareQQ",
                    "onMenuShareQZone",
                ],
            });
        });
    }
    init(options) {
        this.identify(location.href);
        wx.ready(function() {
            var imageurl = options.img,
                title = options.title,
                desc = options.desc,
                link = options.shareURL;

            wx.onMenuShareTimeline({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imageurl,
                success: function() {},
                cancel: function() {},
            });

            wx.onMenuShareAppMessage({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imageurl,
                success: function() {},
                cancel: function() {},
            });

            wx.onMenuShareQQ({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imageurl,
                success: function() {},
                cancel: function() {},
            });

            wx.onMenuShareQZone({
                title: title,
                desc: desc,
                link: link,
                imgUrl: imageurl,
                success: function() {},
                cancel: function() {},
            });
        });

        wx.error(function(res) {
            console.log(res);
        });
    }
}

export default new ShareInfo();
