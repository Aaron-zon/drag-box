/**
 * 整体思路
 * 在box按下鼠标时获取鼠标到窗口的距离 box_dis
 * 在鼠标移动时获取鼠标到视口的距离 doc_dis
 * 获取box距离窗口的距离 box_2_doc_dis
 * 
 * 两个距离相减获得鼠标移动的距离 doc_dis - box_dis = traveled_dis
 * 原来用box到视口的距离 加上鼠标移动的距离就得到了当前box所在的位置 box_2_doc_dis + traveled_dis
 */
var box = document.getElementById('box');

var tarX = 0, tarY = 0;

// 鼠标与物体边界距离
box.onmousedown = function (event) {
    // 鼠标距离窗口的XY轴0坐标的距离 box_dis
    var clientX = event.clientX
    var clientY = event.clientY
    // box距离窗口XY轴的距离 box_2_doc_dis
    tarX = box.offsetLeft;
    tarY = box.offsetTop;

    document.onmousemove = function (ev) {
        // 用现在鼠标到窗口的距离 - 以前鼠标到窗口的距离 获得鼠标移动的距离  doc_dis - box_dis = traveled_dis
        var x = ev.clientX - clientX;
        var y = ev.clientY - clientY;
        // 用原来box到窗口的距离 + 鼠标移动的距离 得到当前box距离窗口的距离 box_2_doc_dis + traveled_dis
        box.style.left = tarX + x  + 'px';
        box.style.top = tarY + y  + 'px';
    }

    // 鼠标抬起 清除事件
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
    }
}