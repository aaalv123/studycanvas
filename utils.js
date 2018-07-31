(function(){
    window.utils = {};

    utils.captureMouse = function(element){
        var mouse = {
            x:0,
            y:0
        }
        element.addEventListener('mousemove',function(event){
            //兼容处理，获取当前鼠标相对屏幕的坐标
            var winX = event.pageX || event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            var winY = event.pageY || event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            //调用getBoundingClientRect方法，该方法返回一个对象，包含canvas的left、 top、 width、 height等值
            var canBox = element.getBoundingClientRect();

            mouse.x = (winX - canBox.left) * (element.width / canBox.width);
            mouse.y = (winY - canBox.top) * (element.height / canBox.height);
        },false);
        return mouse;
    }
})();