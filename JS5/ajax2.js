//IE10+
var oForm = document.getElementById('login');
var oMsg = document.getElementById('msg');
var oBtn = document.getElementById('btn');
var timer = null;

oBtn.onclick = function(event) {
    event.preventDefault();

    var data = new FormData(oForm);
    var oAjax = new XMLHttpRequest();

    oAjax.onreadystatechange = function() {

        if (oAjax.readyState == 4 && oAjax.status == 200) {
            var resdata = JSON.parse(oAjax.responseText);
            //console.log(data.get('name')); //IE不支持FormData的get方法
            //console.log(data.get('pwd'));
            console.log(resdata);
            if (resdata.code === 0) {
                window.location.href = "http://dev.admin.carrots.ptteng.com/";
            } else {
                clearInterval(timer);
                oMsg.innerHTML = resdata.message;
                timer = setTimeout(function() {
                    oMsg.innerHTML = '';
                }, 3000)
            }
        }
    }

    oAjax.open('POST', '/carrots-admin-ajax/a/login', true);

    oAjax.send(data);
}
