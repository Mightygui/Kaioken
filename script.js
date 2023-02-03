function n() {
      
    
 var popup = window.open("2nd.html","","width = 300, height = 370");
  var x = 1;
  var y = 1;
  setInterval(bounce, 0);
    var Xspeed = 6;
    var Yspeed = 6;
    function bounce() {
      popup.moveTo(x,y)
      x += Xspeed
      y += Yspeed
      if(x >= 1640){
        Xspeed = -Xspeed;
     }
      else if ( x <= 0){
        Xspeed = -Xspeed;
      }
      if (y >= 880){
        Yspeed = -Yspeed;
      }
      else if (y <= 0){
        Yspeed = -Yspeed
      }
    }
    }
