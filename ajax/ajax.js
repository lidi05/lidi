function ajax(opt) {
    //初始化的默认参数
    var def = {
        type: 'get', //默认的请求方式
        url: null, //默认的地址为空
        data: null, //需要传递的数据
        async: true, //传递方式
        success: null, //成功参数
        error: null //失败参数
    };
    //合并(扩展)参数
    var settings = extend({}, def, opt)
        //判断settings.data是否是数组
    if (Object.prototype.toString.call(settings.data) === '[object Object]') {
        // 将对象转为字符串
        var obj = settings.data;
        var str = '';
        for (var k in obj) {
            //连接数组
            str += k + '=' + obj[k] + '&';
        }
        settings.data = str.slice(0, -1);
    };
    //创建XMLHttpRequest
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    // 需要给服务器传递参数并且以get方式来传
    var getData = '';
    if (settings.data && settings.type === 'get') {
        getData = '?' + encodeURI(settings.data);
    }
    //建立请求
    xhr.open(settings.type, settings.url + getData, settings.async);
    //接受响应数据
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) { //断请求是否完成并且是否成功了
            // 接收响应数据 xhr.responseText:                
            settings.success(xhr.responseText);
        };
    };
    //如果是以get方式传输的方式就为null
    var postData = null;
    //如果给服务器传递参数是以post方式来传
    if (settings.data && settings.tye === 'post') {
        postData = encodeURI(settings.data)
    }
    // 设置请求头,必须放到send方法前
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    //发送请求
    xhr.send(postData)
};

function extend() {
    var arg = arguments;
    for (var i = 1; i < arg.length; i++) {
        for (var k in arg[i]) {
            arg[0][k] = arg[i][k];
        }
    }
    return arg[0];
};