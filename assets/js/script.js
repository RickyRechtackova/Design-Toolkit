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

// js for tools page

let beginnerButton = document.getElementById("beginner");
let intermediateButton = document.getElementById("intermediate");
let masterButton = document.getElementById("master");

let beginnerSectionFigma = document.getElementById("beginner-figma")
let intermediateSectionFigma = document.getElementById("intermediate-figma")
let masterSectionFigma = document.getElementById("master-figma")

beginnerButton.addEventListener("click", displayBeginner);
intermediateButton.addEventListener("click", displayIntermediate);
masterButton.addEventListener("click", displayMaster)

function displayBeginner(){
    beginnerButton.classList.remove("level1");
    beginnerButton.classList.add("active-level");

    intermediateButton.classList.add("level2");
    intermediateButton.classList.remove("active-level");

    masterButton.classList.add("level3");
    masterButton.classList.remove("active-level");

    beginnerSectionFigma.style.display = "grid";
    intermediateSectionFigma.style.display = "none";
    masterSectionFigma.style.display = "none";
    console.log(beginnerSectionFigma.style.display)
}

function displayIntermediate(){
    beginnerButton.classList.add("level1")
    beginnerButton.classList.remove("active-level")

    intermediateButton.classList.remove("level2")
    intermediateButton.classList.add("active-level")

    masterButton.classList.add("level3")
    masterButton.classList.remove("active-level")

    beginnerSectionFigma.style.display = "none";
    intermediateSectionFigma.style.display = "grid"
    masterSectionFigma.style.display = "none"

}

function displayMaster(){
    beginnerButton.classList.add("level1")
    beginnerButton.classList.remove("active-level")

    intermediateButton.classList.add("level2")
    intermediateButton.classList.remove("active-level")

    masterButton.classList.remove("level3")
    masterButton.classList.add("active-level")

    beginnerSectionFigma.style.display = "none";
    intermediateSectionFigma.style.display = "none"
    masterSectionFigma.style.display = "grid"
}