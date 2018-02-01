//nav
window.onload = function() {
    var aNavBtn = document.getElementsByClassName('navbar-toggle');
    var aNavItem = document.getElementsByClassName('navbar-collapse');
    aNavBtn[0].onclick = function() {
        if (aNavItem[0].style.display != 'block') {
            aNavItem[0].style.display = 'block';
        } else {
            aNavItem[0].style.display = 'none';
        }
    }
    //carousel
//1.获取要控制的元素：左右切换a、下面的点击li、内部内容
//2.给左右切换添加点击事件：点击时向左或向右拉动图片，展现上一张或下一张；图标变浅或变深
//3.给圆点添加点击事件：点击时出现对应的图片（类似tab）
//4.设置定时器：自动轮播（圆点点击事件 ）
//5.背景函数：运动函数
    // function carousel(){
    //     var oCarousel=document.getElementsByClassName('carousel')[0];
    //     var oIndicators = oCarousel.getElementsByClassName('carousel-indicators')[0];
    //     var aIndicators = oIndicators.getElementsByTagName('li');
    //     var aInnerItem = oCarousel.getElementsByClassName('item');
    //     var aControl = oCarousel.getElementsByClassName('carousel-control');
    //     for (var i=0; i<aIndicators.length; i++){
    //         aIndicators[i].index=i;
    //         aIndicators[i].onclick=function(){
    //         for(var i=0; i<aIndicators.length;i++){
    //             aIndicators[i].className='';
    //             aInnerItem[i].style.display='none';
    //         }
    //         this.className='active';
    //         aInnerItem[this.index].style.display='block';
    //     }
    //     }
    // }
    //  carousel();
    //tab
    function tab(tabId, tabItem, tabContent, tabPane) {
        var oTab = document.getElementById(tabId);
        if (!document.getElementById(tabId)) {
            return false;
        } else {
            var aTabItem = oTab.getElementsByTagName(tabItem);
            var oTabContent = document.getElementsByClassName(tabContent)[0];
            var aTabPane = oTabContent.getElementsByClassName(tabPane);

            for (var i = 0; i < aTabItem.length; i++) {
                aTabItem[i].index = i;
                aTabItem[i].onclick = function() {
                    for (i = 0; i < aTabPane.length; i++) {
                        aTabItem[i].className = '';
                        aTabPane[i].style.display = 'none';
                    }
                    this.className = 'active';
                    if (aTabItem.length == aTabPane.length + 1) {
                        switch (this) {
                            case aTabItem[0]:
                                for (i = 0; i < aTabPane.length; i++) {
                                    aTabItem[aTabPane.length].className = '';
                                    aTabPane[i].style.display = 'block';
                                }
                                break;
                            default:
                                aTabItem[aTabPane.length].className = '';
                                this.className = 'active';
                                aTabPane[this.index - 1].style.display = 'block';
                        }
                    } else {
                        aTabPane[this.index].style.display = 'block';
                    }
                }
            }
        }
    }
    // tab('carousel', 'li','carousel-inner','item');

    //position
    tab('choices', 'li', 'choice', 'row');
    //recommend
    tab('companies', 'li', 'tab-content', 'tab-pane');
}
