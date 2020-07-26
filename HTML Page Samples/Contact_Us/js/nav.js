function myFunction(x) {
    if (x.matches) { // If media query matches
      document.getElementById("un").style.display = "block"; 
      document.getElementById("des").style.display = "none"; 
      document.getElementById("tres").style.display= "none";
      document.getElementById("nav-function-items").style.display= "none";
      document.getElementById("nav-function-icon").style.display= "block";
      
    
    } else {
      document.getElementById("un").style.display = "none"; 
      document.getElementById("des").style.display = "block"; 
      document.getElementById("tres").style.display= "block";
      document.getElementById("nav-function-items").style.display= "block";
      document.getElementById("nav-function-icon").style.display= "none";
    }

  }    
  var x = window.matchMedia("(min-width: 991px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
 