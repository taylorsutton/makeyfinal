

$(window).mousedown(function(e) {
    clearTimeout(this.downTimer);
    this.downTimer = setTimeout(function() {
        $("body").removeClass("notChill");
      $("body").addClass("chill");
      
      
    }, 2000);
}).mouseup(function(e) {
   $("body").removeClass("chill");
      $("body").addClass("notChill");
    clearTimeout(this.downTimer);
  });