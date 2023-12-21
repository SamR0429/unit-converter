
let metersConversion;
let feetConversion;
let litersConversion;
let gallonConversion;
let kilogramConversion;
let poundsConversion;

const input = document.querySelector(".number-input");
const convertBtn = document.querySelector(".convert-btn");
const lengthTxtField = document.querySelector(".length-field-text");
const volumeTxtField = document.querySelector(".volume-field-text");
const massTxtField = document.querySelector(".mass-field-text");

convertBtn.addEventListener("click", function () {
    const inputValue = parseFloat(input.value);

    if (!isNaN(inputValue)) {
        meterFeetConversion(inputValue);
        literGallonConversion(inputValue);
        kilogramPoundConversion(inputValue);
    } else {
        alert("Please enter a valid number.");
    }
});

function meterFeetConversion(inputValue) {
    feetConversion = (inputValue * 3.281).toFixed(3);
    metersConversion = (inputValue * 0.304).toFixed(3);
    lengthTxtField.innerHTML = `${inputValue} meters = ${feetConversion} feet | ${inputValue} feet = ${metersConversion} meters`;
}

function literGallonConversion(inputValue) {
    gallonConversion = (inputValue * 0.264).toFixed(3);
    litersConversion = (inputValue * 3.785).toFixed(3);
    volumeTxtField.innerHTML = `${inputValue} liters = ${gallonConversion} gallons | ${inputValue} gallons = ${litersConversion} liters`;
}

function kilogramPoundConversion(inputValue) {
    poundsConversion = (inputValue * 2.204).toFixed(3);
    kilogramConversion = (inputValue * 0.453).toFixed(3);
    massTxtField.innerHTML = `${inputValue} kilos = ${poundsConversion} pounds | ${inputValue} pounds = ${kilogramConversion} kilos`;
}