var canvas = document.getElementById('art-canvas');
     var context = canvas.getContext('2d');
     canvas.width = 491;
     canvas.height = 368;

     context.lineWidth = 10;
     context.strokeStyle = 'black';
     context.moveTo(40,0);
     context.lineTo(40,368);
     context.stroke();

     context.moveTo(110,0);
     context.lineTo(110,368);
     context.stroke();

     context.moveTo(230,0);
     context.lineTo(230,230);
     context.stroke();

     context.moveTo(300,100);
     context.lineTo(300,368);
     context.stroke();

     context.moveTo(400,0);
     context.lineTo(400,310);
     context.stroke();

     context.moveTo(445,0);
     context.lineTo(445,368);
     context.stroke();

     //horizontais
     context.moveTo(0,100);
     context.lineTo(491,100);
     context.stroke();

     context.moveTo(0,235);
     context.lineTo(440,235);
     context.stroke();

     context.moveTo(45,310);
     context.lineTo(491,310);
     context.stroke();


     //squares
     context.fillStyle = "yellow";
     context.fillRect(45,0,60,95);

     context.fillStyle = "blue";
     context.fillRect(115,0,110,95);

     context.fillStyle = "red";
     context.fillRect(235,0,205,95);

     context.fillStyle = "yellow";
     context.fillRect(450,0,60,95);

     context.fillStyle = "blue";
     context.fillRect(305,105,90,125);

     context.fillStyle = "red";
     context.fillRect(405,105,35,125);

     context.fillStyle = "red";
     context.fillRect(115,240,180,65);

     context.fillStyle = "yellow";
     context.fillRect(405,240,35,65);

     context.fillStyle = "yellow";
     context.fillRect(115,315,180,65);

     context.fillStyle = "blue";
     context.fillRect(45,315,60,65);
