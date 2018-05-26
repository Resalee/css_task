//IE9+
var aValue = document.getElementsByTagName('input');
var oMsg = document.getElementById('msg');
var oBtn = document.getElementById('btn');
var timer = null;

oBtn.onclick = function(event) {
    event.preventDefault();

    var name = aValue[0].value;
    var pwd = aValue[1].value;
    var data = "name=" + name + "&pwd=" + pwd;
    var oAjax = new XMLHttpRequest();

    oAjax.onreadystatechange = function() {
        if (oAjax.readyState == 4 && oAjax.status == 200) {
            var resdata = JSON.parse(oAjax.responseText);
            console.log(name);
            console.log(pwd);
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

    oAjax.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

    oAjax.send(data);
}
