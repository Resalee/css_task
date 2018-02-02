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
    //生成随机颜色
    function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`; //"rgb("+r+","+g+","+b+")"
    }
    //赋予3个格子颜色
    function setColor() {
        clearColor();
        var aGrid = [];
        for (var i = 0; i < 3; i++) {
            var randomNum = Math.floor(Math.random() * 9); //随机生成0-8中的一个数字
            if (aGrid.indexOf(randomNum) == -1) { //如果在数组中没有找到这个随机数
                aGrid[i] = randomNum; //就将该随机数设为aGrid[i]的值
                aDiv[aGrid[i]].style.backgroundColor = randomColor(); //将颜色添加到格子上
            } else {
                i--; //如果在数组中找到了该随机数，就将i减1，重新循环
            }
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
