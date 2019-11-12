const express = require("express")
const router = express.Router() //restful api


router.all('*',function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.send(200);
    }
    else {
        next();
    }
});

router.get("/",(req,res)=>{
    res.jsonp({
        list:[
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis1.jpg",
                p:"小米CC9 pro",
                price:"￥4399"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis2.jpg",
                p:"黑米Cxw9 dxo",
                price:"￥5233"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis3.jpg",
                p:"旅游箱",
                price:"￥9677"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis4.jpg",
                p:"小米CC9 pro",
                price:"￥7845"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis5.jpg",
                p:"小米CC9 pro",
                price:"￥1236"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis6.jpg",
                p:"小米CC9 pro",
                price:"￥8795"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis7.jpg",
                p:"小米CC9 pro",
                price:"￥4485"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis8.jpg",
                p:"小米CC9 pro",
                price:"￥9952"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis9.jpg",
                p:"小米CC9 pro",
                price:"￥2265"
            },
            {
                pic:"http://39.100.121.125/xiaomi/shopcarlist/lis10.jpg",
                p:"小米CC9 pro",
                price:"￥5896"
            },
        ]
    })
})



module.exports = router;