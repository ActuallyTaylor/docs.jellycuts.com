
var isOpen = true
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

window.onload = function() {
    if (width <= 1000) {
        isOpen = false
    }
    handleNav()
}

function handleNav() {  
    if (isOpen) {
        //Opens the sidebar
        document.getElementById("SideBar").style.width = "200px";  
        document.getElementById("SideBar").style.padding = "20px";  
        document.getElementById("Main").style.marginLeft = "250px";
        document.getElementById("MenuButton").innerHTML = "&times;"

        document.getElementById("MiniBar").style.marginLeft = "250px";
        if (width > 1000) {
            document.getElementById("MiniBar").style.display = "none"; 
        }

    } else {
        //Closes the sidebar
        document.getElementById("SideBar").style.width = "0px";  
        document.getElementById("SideBar").style.padding = "0px"; 
        document.getElementById("Main").style.marginLeft = "5px";
        document.getElementById("MenuButton").innerHTML = "&rarr;"

        document.getElementById("MiniBar").style.marginLeft = "5px";
        if (width > 1000) {
            document.getElementById("MiniBar").style.display = "block"; 
        }
    }
    isOpen = !isOpen
}


// script.js

(function() {
  // Load Google Tag Manager script asynchronously
  var gtagScript = document.createElement('script');
  gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-9CPRSLKZTZ';
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  // Initialize dataLayer if not already initialized
  window.dataLayer = window.dataLayer || [];

  // Function to push data to dataLayer
  function gtag() {
    dataLayer.push(arguments);
  }

  // Call gtag function to set up tracking
  gtag('js', new Date());

  // Configure Google Analytics with your tracking ID
  gtag('config', 'G-9CPRSLKZTZ');
})();
