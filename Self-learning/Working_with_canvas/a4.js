function draw() {

    //Drawing for the right box
    var canvas = document.getElementById('drawingSurface3');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Filled triangle
        // fillRect(x, y, width, height)

        // The top
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(160, 30, 250, 60);


        //Middle line
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        /*This allows you to draw the line moveTo(x,y ); */
        ctx.moveTo(284.5,450);

        // This allows you to draw state where you want the line to be
        ctx.lineTo(284.5,90);
        ctx.lineWidth = 3;
        ctx.stroke();

        //cross from left to right
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        /*This allows you to draw the line moveTo(x,y ); */
        ctx.moveTo(407,450);

        // This allows you to draw state where you want the line to be
        ctx.lineTo(162,89.5);
        ctx.lineWidth = 3;
        ctx.stroke();


        //cross from left to right
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        /*This allows you to draw the line moveTo(x,y ); */
        ctx.moveTo(407,89.5);

        // This allows you to draw state where you want the line to be
        ctx.lineTo(162,450);
        ctx.lineWidth = 3;
        ctx.stroke();


        // The bottom
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(160, 450, 250, 60);

    }

    //Drawing for the middle box
    var canvas = document.getElementById('drawingSurface2');
    if (canvas.getContext) {
        //Insert your code here
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(300, 300, 150, 0, Math.PI * 2, true); // Outer circle
        ctx.lineWidth = 5;
        ctx.stroke();

        //First Triangle
        // Stroked triangle
        ctx.beginPath();
        ctx.moveTo(175, 385); //Bottom line
        ctx.lineTo(300, 150); // The top part
        ctx.lineTo(420, 385); //Bottom line
        ctx.closePath();
        ctx.lineWidth = 1;
        ctx.stroke();

    }

    //Drawing for the left box
    var canvas = document.getElementById('drawingSurface1');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.arc(300, 300, 210, 0, Math.PI * 2, true); // Outer circle
        ctx.lineWidth = 15;
        ctx.stroke();


        //Insert your code here

    }
}
