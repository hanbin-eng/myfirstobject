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
        phone:[
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp1.jpg",
                p:"香氛器"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp2.png",
                p:"电磁炉"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp3.png",
                p:"电动牙刷"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp4.png",
                p:"小魔方"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp5.png",
                p:"口袋照片"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp6.jpg",
                p:"吹风机"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp7.png",
                p:"米家夜灯"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp8.png",
                p:"液晶小黑板"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp9.png",
                p:"无线除螨仪"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp10.png",
                p:"蓝牙耳机"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp11.png",
                p:"便携榨汁机"
            },
            {
                pic:"http://39.100.121.125/xiaomi/fenleiright2/pp12.jpg",
                p:"便携榨汁机"
            }

        ]
    })
})

module.exports = router;