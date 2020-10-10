
    var disk = function (pos, radius) {
        ctx.beginPath();
        ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2, false);
        ctx.fill();
    };
    
    var dashedLine = function () {
      ctx.beginPath();
      ctx.setLineDash([10,6]);
      ctx.moveTo(width/2, 0);
      ctx.lineTo(width/2, height);
      ctx.lineWidth = 3.5;
      ctx.strokeStyle = 'white';
      ctx.stroke();
    }
    
    var score = function () {
        ctx.fillText(score1,10,20,20);
        ctx.fillText(score2,width-20,20,20);
    }
    
    var canvas = document.getElementById('canvas');
    canvas.style.backgroundColor = "black";
    canvas.style.border = "5px solid white";
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.font = "bold 20px sans-serif";
    var width = canvas.width;
    var height = canvas.height;
    var score1 = 0;
    var score2 = 0;
    var ball = new Ball(100, 100, 2.5, 2.5);
    var paddleLeft = new Paddle(15, height/2 - 60/2, 5, 60);
    var paddleRight = new Paddle(width-20, height/2 - 60/2, 5, 60);
    document.addEventListener("keydown",function(e) {
        console.log(e.keyCode + "," + typeof e.keyCode);
        if (e.keyCode == 87) {
            paddleLeft.update(-10)
            console.log("what?")
        } else if (e.keyCode == 83) {;
            paddleLeft.update(10)   
        }
        
        if (e.keyCode == 38) {
            paddleRight.update(-10)
        } else if (e.keyCode == 40) {
            paddleRight.update(10)           
        }
    });
        
    document.addEventListener("keyup", function(e) {
       paddleLeft.update(0);
       paddleRight.update(0);
    });
    function update() {
        ctx.clearRect(0, 0, width, height);
        dashedLine();
        score();
        ball.draw();
        ball.move();
        ball.edges();
        ball.checkPaddle(paddleLeft);
        ball.checkPaddle(paddleRight);
        paddleLeft.draw();
        paddleRight.draw();
        paddleLeft.move();
        paddleRight.move();
        paddleLeft.edges();
        paddleRight.edges();
        window.requestAnimationFrame(function(){update();})
    }
     update();

















//    console.log(ball.pos.x + "," + ball.pos.y + "," + ball.r);
////    console.log()
//    console.log(paddleLeft.pos.x + "," + paddleLeft.pos.y + "," + paddleLeft.width + "," + paddleLeft.height);
//    console.log(paddleRight.pos.x + "," + paddleRight.pos.y + "," + paddleRight.width + "," + paddleRight.height);