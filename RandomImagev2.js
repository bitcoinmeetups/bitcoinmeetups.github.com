setInterval(function(){  

var RndNr = Math.floor(Math.random() * 4); var ia = ["http://pixabay.com/static/uploads/photo/2014/04/03/10/52/robot-311557_640.png",
"http://pixabay.com/static/uploads/photo/2013/07/18/10/57/sphere-163623_640.jpg", "http://pixabay.com/static/uploads/photo/2014/11/02/16/05/electronic-devices-514182_640.jpg", "http://pixabay.com/static/uploads/photo/2014/08/26/11/16/cube-427894_640.jpg"]; document.getElementById("RndImg").src =
ia[RndNr];

}, 10000);
