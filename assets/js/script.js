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

let beginnerButtonFigma = document.getElementById("beginner-figma");
let intermediateButtonFigma = document.getElementById("intermediate-figma");
let masterButtonFigma = document.getElementById("master-figma");

let beginnerSectionFigma = document.getElementsByClassName("beginner-section")[0];
let intermediateSectionFigma = document.getElementsByClassName("intermediate-section")[0];
let masterSectionFigma = document.getElementsByClassName("master-section")[0];

let beginnerButtonSketch = document.getElementById("beginner-sketch");
let intermediateButtonSketch = document.getElementById("intermediate-sketch");
let masterButtonSketch = document.getElementById("master-sketch");

let beginnerSectionSketch = document.getElementsByClassName("beginner-section")[1];
let intermediateSectionSketch = document.getElementsByClassName("intermediate-section")[1];
let masterSectionSketch = document.getElementsByClassName("master-section")[1];

let beginnerButtonAdobe = document.getElementById("beginner-adobe");
let intermediateButtonAdobe = document.getElementById("intermediate-adobe");
let masterButtonAdobe = document.getElementById("master-adobe");

let beginnerSectionAdobe = document.getElementsByClassName("beginner-section")[2];
let intermediateSectionAdobe = document.getElementsByClassName("intermediate-section")[2];
let masterSectionAdobe = document.getElementsByClassName("master-section")[2];

beginnerButtonFigma.addEventListener("click", displayBeginnerFigma);
intermediateButtonFigma.addEventListener("click", displayIntermediateFigma);
masterButtonFigma.addEventListener("click", displayMasterFigma);

beginnerButtonSketch.addEventListener("click", displayBeginnerSketch);
intermediateButtonSketch.addEventListener("click", displayIntermediateSketch);
masterButtonSketch.addEventListener("click", displayMasterSketch);

beginnerButtonAdobe.addEventListener("click", displayBeginnerAdobe);
intermediateButtonAdobe.addEventListener("click", displayIntermediateAdobe);
masterButtonAdobe.addEventListener("click", displayMasterAdobe);

function displayBeginnerFigma(){
    beginnerButtonFigma.classList.remove("level");
    beginnerButtonFigma.classList.add("active-level");

    intermediateButtonFigma.classList.add("level");
    intermediateButtonFigma.classList.remove("active-level");

    masterButtonFigma.classList.add("level");
    masterButtonFigma.classList.remove("active-level");

    beginnerSectionFigma.style.display = "grid";
    intermediateSectionFigma.style.display = "none";
    masterSectionFigma.style.display = "none";
    console.log(beginnerSectionFigma.style.display)
}

function displayBeginnerSketch(){
    beginnerButtonSketch.classList.remove("level");
    beginnerButtonSketch.classList.add("active-level");

    intermediateButtonSketch.classList.add("level");
    intermediateButtonSketch.classList.remove("active-level");

    masterButtonSketch.classList.add("level");
    masterButtonSketch.classList.remove("active-level");

    beginnerSectionSketch.style.display = "grid";
    intermediateSectionSketch.style.display = "none";
    masterSectionSketch.style.display = "none";
}

function displayBeginnerAdobe(){
    beginnerButtonAdobe.classList.remove("level");
    beginnerButtonAdobe.classList.add("active-level");

    intermediateButtonAdobe.classList.add("level");
    intermediateButtonAdobe.classList.remove("active-level");

    masterButtonAdobe.classList.add("level");
    masterButtonAdobe.classList.remove("active-level");

    beginnerSectionAdobe.style.display = "grid";
    intermediateSectionAdobe.style.display = "none";
    masterSectionAdobe.style.display = "none";
}

function displayIntermediateFigma(){
    beginnerButtonFigma.classList.add("level");
    beginnerButtonFigma.classList.remove("active-level");

    intermediateButtonFigma.classList.remove("level");
    intermediateButtonFigma.classList.add("active-level");

    masterButtonFigma.classList.add("level");
    masterButtonFigma.classList.remove("active-level");

    beginnerSectionFigma.style.display = "none";
    intermediateSectionFigma.style.display = "grid";
    masterSectionFigma.style.display = "none";
}

function displayIntermediateSketch(){
    beginnerButtonSketch.classList.add("level");
    beginnerButtonSketch.classList.remove("active-level");

    intermediateButtonSketch.classList.remove("level");
    intermediateButtonSketch.classList.add("active-level");

    masterButtonSketch.classList.add("level");
    masterButtonSketch.classList.remove("active-level");

    beginnerSectionSketch.style.display = "none";
    intermediateSectionSketch.style.display = "grid";
    masterSectionSketch.style.display = "none";
}

function displayIntermediateAdobe(){
    beginnerButtonAdobe.classList.add("level");
    beginnerButtonAdobe.classList.remove("active-level");

    intermediateButtonAdobe.classList.remove("level");
    intermediateButtonAdobe.classList.add("active-level");

    masterButtonAdobe.classList.add("level");
    masterButtonAdobe.classList.remove("active-level");

    beginnerSectionAdobe.style.display = "none";
    intermediateSectionAdobe.style.display = "grid";
    masterSectionAdobe.style.display = "none";
}

function displayMasterFigma(){
    beginnerButtonFigma.classList.add("level");
    beginnerButtonFigma.classList.remove("active-level");

    intermediateButtonFigma.classList.add("level");
    intermediateButtonFigma.classList.remove("active-level");

    masterButtonFigma.classList.remove("level");
    masterButtonFigma.classList.add("active-level");

    beginnerSectionFigma.style.display = "none";
    intermediateSectionFigma.style.display = "none";
    masterSectionFigma.style.display = "grid";
}

function displayMasterSketch(){
    beginnerButtonSketch.classList.add("level");
    beginnerButtonSketch.classList.remove("active-level");

    intermediateButtonSketch.classList.add("level");
    intermediateButtonSketch.classList.remove("active-level");

    masterButtonSketch.classList.remove("level");
    masterButtonSketch.classList.add("active-level");

    beginnerSectionSketch.style.display = "none";
    intermediateSectionSketch.style.display = "none";
    masterSectionSketch.style.display = "grid";
}

function displayMasterAdobe(){
    beginnerButtonAdobe.classList.add("level");
    beginnerButtonAdobe.classList.remove("active-level");

    intermediateButtonAdobe.classList.add("level");
    intermediateButtonAdobe.classList.remove("active-level");

    masterButtonAdobe.classList.remove("level");
    masterButtonAdobe.classList.add("active-level");

    beginnerSectionAdobe.style.display = "none";
    intermediateSectionAdobe.style.display = "none";
    masterSectionAdobe.style.display = "grid";
}