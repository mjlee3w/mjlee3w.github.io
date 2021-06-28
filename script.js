$(document).ready(function(){
    animateDiv();
    
});

function makeNewPosition(){
    
    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;
    
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    
    return [nh,nw];    
    
}

function animateDiv(){
    var newq = makeNewPosition();
    var oldq = $('.a').offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);
    
    $('.a').animate({ top: newq[0], left: newq[1] }, speed, function(){
      animateDiv();        
    });
    
};

function calcSpeed(prev, next) {
    
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    
    var greatest = x > y ? x : y;
    
    var speedModifier = 0.1;

    var speed = Math.ceil(greatest/speedModifier);

    return speed;

}


function testBlock() {
  var x = document.getElementById("test");
  var y = document.getElementById("main");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}

function twelthBlock() {
  var x = document.getElementById("12th-can");
  var y = document.getElementById("main");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}


function baeBlock() {
  var x = document.getElementById("baemax");
  var y = document.getElementById("main");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}

function petBlock() {
  var x = document.getElementById("pet-the-loaf");
  var y = document.getElementById("main");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}

function pockyBlock() {
  var x = document.getElementById("pockychu");
  var y = document.getElementById("main");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}

function eggBlock() {
  var x = document.getElementById("egg-dog");
  var y = document.getElementById("main");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}

function tumBlock() {
  var x = document.getElementById("for-the-tum");
  var y = document.getElementById("main");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "block";
    x.style.display = "none";
  }
}