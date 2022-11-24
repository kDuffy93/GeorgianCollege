// STEP 11: Get length of path for circle (circumference)
const path = document.querySelector("circle[stroke-dasharray");


//console.log(path);
let length = path.getTotalLength();
//console.log("Circumference of circle is " + length);
// STEP 12: Set the length of the space between dashes to the full circumference

path.setAttribute("stroke-dasharray", "0 " + length);

// STEP 13: Dynamically set the width of the pie segment to reflect the text value

// STEP 13a: Capture value of % inside the pie chart SVG text element
let percent = document.querySelector("text").textContent;
//let percentNumber = Number(percent.slice(0, percent.length - 1));
percent = percent.replaceAll("%", "");

// STEP 13b: Remove the % sign from the text value

// STEP 13c: convert the string to an integer
percent = parseInt(percent, 10);
// STEP 13d: Calculate width of pie segment as a percentage of the circumference of the circle - this will be used for the length of the dash part of the stroke
percent = percent / 100;
let pieWidth = percent * length;

// STEP 14: Grab the external CSS
const stylesheet = document.styleSheets[0];

// STEP 15: Loop through the CSS rules to capture the one that controls the :active state for the circle
let svgActiveRule;
for (let i = 0; i < stylesheet.cssRules.length) {
    if (stylesheet.cssRules[i].selectorText === "svg:active circle[stroke-dasharray]") {
        svgActiveRule = stylesheet.cssRules[i];
    }
}
// STEP 16: Build the string for the new CSS property value
let propertyValue = pieWidth + " " + length;

// STEP 17: Update the CSS declaration to reflect the new property value for stroke-dasharray
svgActiveRule.style.setProperty("stroke-dasharray", propertyValue);