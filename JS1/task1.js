window.onload = function() {
    //获取需要操作的元素
    var oDiv = document.getElementById('soduku');
    var aDiv = oDiv.getElementsByTagName('div');
    var aBtn = document.getElementsByClassName('btn');
    var timer = null;

    //恢复原色
    function clearColor() {
        for (var i = 0; i < 9; i++) {
            aDiv[i].style.backgroundColor = '#fea500';
        }
    }
    //赋予颜色
    function setColor() {
        clearColor();
        var aGrid = [];
        var aColor = [];
        //生成3个随机数字
        for (var i = 0; i < 9; i++) {
            aGrid[i] = i;
        }
        aGrid.sort(function(a, b) {
            return Math.random() > .5 ? -1 : 1;
        });
        aGrid.length = 3;
        //生成随机颜色
        function randomColor() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            return `rgb(${r},${g},${b})`; //"rgb("+r+","+g+","+b+")"
        }
        //将颜色添加到格子上
        for (var i = 0; i < 3; i++) {
            aColor[i] = randomColor();
            aDiv[aGrid[i]].style.backgroundColor = aColor[i];
        }
    }

    //点击开始按钮，添加颜色
    aBtn[0].onclick = function() {
        clearInterval(timer);
        timer = setInterval(setColor, 800);
    }
    //点击结束按钮，停止添加，恢复原色
    aBtn[1].onclick = function() {
        clearInterval(timer);
        clearColor();
    }
}
