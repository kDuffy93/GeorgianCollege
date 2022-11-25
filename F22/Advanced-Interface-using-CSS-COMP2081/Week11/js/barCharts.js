// STEP 11: Get length of path for circle (circumference)
const svg = document.querySelector("svg");
const input = document.querySelector("input");
const svgns = "http://www.w3.org/2000/svg";
let inputs = document.getElementById("barValues");
const group = document.querySelector("g");

let buildBar = (numberOfBars, i) => {
    let tempRect = document.createElementNS(svgns, "rect");
    //should add to desiredWidth/numberOfBars
    let x = 90 / numberOfBars;
    tempRect.setAttribute("x", `${x * i + x * 0.125}%`); //horizontal offset
    tempRect.setAttribute("width", `${x * 0.75}%`); //horizontal offset
    tempRect.setAttribute("y", `90%`); //horizontal offset
    tempRect.setAttribute("height", `10%`); //horizontal offset
    tempRect.style = `--barWidth: ${x * 0.75}%;`;

    tempRect.setAttribute("title", `Title ${i + 1} - 10%`); //horizontal offset
    tempRect.setAttribute("fill", "#5cceee");

    console.log(`tempRect: ${tempRect}`);

    let tempText = document.createElementNS(svgns, "text");
    tempText.setAttribute("x", `${x * i + x * 0.225}%`); //horizontal offset
    tempText.setAttribute("textLength", `${x * 0.6}%`); //width
    tempText.setAttribute("y", `110%`); //horizontal offset
    tempText.textContent = `Title ${i + 1}`;
    if (numberOfBars > 10) {
        tempText.setAttribute("x", `${x * i + x * 0.5}%`);
        tempText.setAttribute("textLength", `200`); //horizontal offset
        tempText.style.writingMode = "vertical-lr";
        tempText.style.textOrientation = "upright";
    }
    tempText.setAttribute("fill", "#000");
    tempText.textAlign = "center";

    group.appendChild(tempText);
    group.appendChild(tempRect);

    return tempRect;
};;;

let buildInput = (bar, i) => {
    console.log(`bar: ${bar}`);
    console.log();
    let tempContainer = document.createElement("div");

    let tempNameContainer = document.createElement("div");

    let nameInput = document.createElement("input");
    nameInput.type = 'string';
    nameInput.id = `Bar${i}Title`;
    nameInput.value = bar.previousElementSibling.textContent;
    nameInput.onchange = (e) => {
        console.log(e.target.value);
        bar.previousElementSibling.textContent = e.target.value;
        let titleWords = bar.getAttribute("title").split(" - ");
        titleWords[0] = `${String(e.target.value)}`;
        bar.setAttribute("title", `${titleWords[0]} - ${titleWords[1]}`); //horizontal offset
    };;


    let tempNameLabel = document.createElement("label");
    tempNameLabel.textContent = `Bar ${i+1} Title: `;
    tempNameLabel.setAttribute("for", `Bar${i}Title`);




    tempNameContainer.appendChild(nameInput);


    let tempPercentContainer = document.createElement("div");

    let percentInput = document.createElement("input");
    percentInput.type = "number";
    percentInput.id = `Bar${i}Percent`;
    let tempPercentLabel = document.createElement("label");
    tempPercentLabel.textContent = `percent `;
    tempPercentLabel.setAttribute("for", `Bar${i}percent`);

    percentInput.value = bar.height.baseVal.valueInSpecifiedUnits;
    percentInput.onchange = (e) => {
        console.log(e.target.value);
        if (e.target.value < 0) {
            let negatedNalue = e.target.value * -1;
            bar.setAttribute("y", `${100}%`); //horizontal offset
            bar.setAttribute("height", `${negatedNalue}%`); //horizontal offset
            let titleWords = bar.getAttribute("title").split(" - ");
            titleWords[1] = `${String(e.target.value)}%`;
            bar.setAttribute("title", `${titleWords[0]} - ${titleWords[1]}`); //horizontal offset
        } else {
            bar.setAttribute("y", `${100 - e.target.value}%`); //horizontal offset
            bar.setAttribute("height", `${e.target.value}%`); //horizontal offset

            let titleWords = bar.getAttribute("title").split(" - ");
            titleWords[1] = `${String(e.target.value)}%`
            bar.setAttribute("title", `${titleWords[0]} - ${titleWords[1]}`); //horizontal offset
        }

    };
    tempPercentContainer.appendChild(percentInput);



    tempContainer.appendChild(tempNameContainer);
    tempContainer.appendChild(tempPercentContainer);
    nameInput.parentNode.insertBefore(tempNameLabel, nameInput);
    percentInput.parentNode.insertBefore(tempPercentLabel, percentInput);
    inputs.appendChild(tempContainer);
}


let reloadSVG = () => {
    let numberOfBars = input.value;
    group.innerHTML = "";
    inputs.innerHTML = "";
    numberOfBars > 5000 ? (alert("woah, thats alot of bars.... try to keep it under 5000"), input.value = 0) : numberOfBars;
    if (numberOfBars < 5000) {
        for (let i = 0; i < numberOfBars; i++) {

            buildInput(buildBar(numberOfBars, i), i);
        }
    }

}

reloadSVG();

input.onchange = () => {
    reloadSVG();
};