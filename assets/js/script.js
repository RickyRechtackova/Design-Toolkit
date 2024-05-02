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

// js for application page

function generatePalette() {
    var colorNum = document.getElementById("colorNum").value;
    var colorHarmony = document.getElementById("color-harmony").value;
    var colorPalette = document.getElementById("color-palette");
    colorPalette.innerHTML = '';

    var baseColor = generateRandomColor();

    switch(colorHarmony) {
        case 'complementary':
            generateComplementaryPalette(colorPalette, baseColor, colorNum);
            break;
        case 'analogous':
            generateAnalogousPalette(colorPalette, baseColor, colorNum);
            break;
        case 'triadic':
            generateTriadicPalette(colorPalette, baseColor, colorNum);
            break;
        default:
            generateComplementaryPalette(colorPalette, baseColor, colorNum);
            break;
    }
}

function generateComplementaryPalette(colorPalette, baseColor, colorNum) {
    var baseHue = hexToHue(baseColor);
    for (var i = 0; i < colorNum; i++) {
        var hue = (baseHue + 180 + (i * 360 / colorNum)) % 360;
        var color = hueToHex(hue);
        addColorBox(colorPalette, color);
    }
}

function generateAnalogousPalette(colorPalette, baseColor, colorNum) {
    var baseHue = hexToHue(baseColor);
    for (var i = 0; i < colorNum; i++) {
        var hue = (baseHue + (i * 30)) % 360;
        var color = hueToHex(hue);
        addColorBox(colorPalette, color);
    }
}

function generateTriadicPalette(colorPalette, baseColor, colorNum) {
    var baseHue = hexToHue(baseColor);
    for (var i = 0; i < colorNum; i++) {
        var hue = (baseHue + (i * 120)) % 360;
        var color = hueToHex(hue);
        addColorBox(colorPalette, color);
    }
}

function hexToHue(hexColor) {
    var hex = hexColor.substring(1); // remove #
    var bigint = parseInt(hex, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var delta = max - min;
    var hue = 0;

    if (delta === 0) {
        return hue;
    }

    if (max === r) {
        hue = (g - b) / delta;
    } else if (max === g) {
        hue = 2 + (b - r) / delta;
    } else {
        hue = 4 + (r - g) / delta;
    }

    hue *= 60;
    if (hue < 0) hue += 360;

    return hue;
}

function hueToHex(hue) {
    var h = hue / 60;
    var c = 255;
    var x = (1 - Math.abs(h % 2 - 1)) * c;
    var color;

    if (h >= 0 && h < 1) {
        color = rgbToHex(c, x, 0);
    } else if (h >= 1 && h < 2) {
        color = rgbToHex(x, c, 0);
    } else if (h >= 2 && h < 3) {
        color = rgbToHex(0, c, x);
    } else if (h >= 3 && h < 4) {
        color = rgbToHex(0, x, c);
    } else if (h >= 4 && h < 5) {
        color = rgbToHex(x, 0, c);
    } else {
        color = rgbToHex(c, 0, x);
    }

    return "#" + color;
}

function rgbToHex(r, g, b) {
    var red = Math.round(r).toString(16);
    var green = Math.round(g).toString(16);
    var blue = Math.round(b).toString(16);

    if (red.length == 1) red = "0" + red;
    if (green.length == 1) green = "0" + green;
    if (blue.length == 1) blue = "0" + blue;

    return red + green + blue;
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addColorBox(colorPalette, color) {
    var colorBox = document.createElement("div");
    colorBox.className = "colorBox";
    colorBox.style.backgroundColor = color;
    colorBox.setAttribute("title", color);
    colorBox.addEventListener("click", function() {
        copyToClipboard(this);
    });
    colorPalette.appendChild(colorBox);
}

function copyToClipboard(element) {
    var colorCode = element.getAttribute("title");
    navigator.clipboard.writeText(colorCode).then(function() {
        alert("Color code " + colorCode + " copied to clipboard!");
    }, function() {
        console.error("Unable to copy color code " + colorCode);
    });
}

function setSelectedFont(fontFamily, index) {
    let text = document.getElementById("example-text")
    text.style.fontFamily = fontFamily;
}