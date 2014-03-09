var mapping = {
  37: '.left',
  38: '.up',
  39: '.right',
  40: '.down'
};

$(document.documentElement).keydown(function(event){  
    var key = mapping[event.keyCode];
    if (key) $(key).addClass('pressed');
});

$(document.documentElement).keyup(function(event){  
    var key = mapping[event.keyCode];
    if (key) $(key).removeClass('pressed');
});