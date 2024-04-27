function hamburger() {
    var x = document.getElementById("myNav");
    if (x.className === "nav-links") {
        x.className += " responsive";
    } else {
        x.className = "nav-links";
    }
}

// dark-mode media query matched or not
let matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

if(matched){
	console.log('Currently in dark mode'); 
    document.getElementById("browserIcon").href="assets/img/icon.ico"
}
else{
	console.log('Currently not in dark mode');
    document.getElementById("browserIcon").href="assets/img/iconBlack.ico"
}