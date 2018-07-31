function Arrow(){
    this.x = 0;
    this.y = 0;
    this.rotation = 0;
    this.color = '#ffff00';
}
Arrow.prototype.draw = function(context){
    context.save();
    context.translate(this.x , this.y); //将坐标移到this.x 和 this.y
    context.rotate(this.rotation); //设置旋转角度
    context.lineWidth = 5;  //设置线宽
    context.fillStyle = this.color; //设置填充色
    context.beginPath();  //路径开始
    context.moveTo(-50,-25);
    context.lineTo(0,-25);
    context.lineTo(0,-50);
    context.lineTo(50,0);
    context.lineTo(0,50);
    context.lineTo(0,25);
    context.lineTo(-50,25);
    context.closePath(); //路径闭合
    context.stroke(); //描边
    context.fill(); //填充
    context.restore();
}

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var centerX = canvas.width/2;
var centerY = canvas.height/2;

var mouse = utils.captureMouse(canvas);

var arrow = new Arrow();
arrow.x = centerX;
arrow.y = centerY;
arrow.draw(context);

function drawFrame(){
    window.requestAnimationFrame(drawFrame);
    context.clearRect(0, 0, canvas.width, canvas.height);
    //获取dy,dx值
    var dx = mouse.x - arrow.x,
    dy = mouse.y - arrow.y;
    //设置旋转角度
    arrow.rotation = Math.atan2(dy, dx);
   //调用draw方法画出
     arrow.draw(context);
}
drawFrame();