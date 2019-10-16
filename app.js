//variables

//Kilo Converter Variables
const kiloInput = document.getElementById("kilo-input");
const gramResult = document.getElementById("grams-result");
const poundResult = document.getElementById("pounds-result");
const stoneResult = document.getElementById("stones-result");

//BMI Variables
const bmiCalculate = document.getElementById("bmi-calculate");
const weightInput = document.getElementById("weight-input");
const heightInput = document.getElementById("height-input");
const bmiResult = document.getElementById("bmi-result");

//Tip Variables
const tipCalculate = document.getElementById("tip-calculate");
const tipResult = document.getElementById("tip-result");

//Kilo Converter
kiloInput.addEventListener("input", val => {
  let kilos = val.target.value;
  gramResult.innerHTML = kilos * 1000;
  poundResult.innerHTML = parseFloat(kilos * 2.20462262185).toFixed(2);
  stoneResult.innerHTML = parseFloat(kilos / 6.35029318).toFixed(2);
});

//BMI Calculator
const bmi = bmiCalculate.addEventListener("click", () => {
  const weight = weightInput.value;
  const height = heightInput.value;
  let calc = (weight / (height * height)).toFixed(1);
  bmiResult.innerHTML = `Your BMI is ${calc}`;

  if (calc >= 18.5 && calc <= 24.9) {
    bmiResult.style.backgroundColor = "lightgreen";
  } else if (calc >= 30) {
    bmiResult.style.backgroundColor = "rgb(230, 53, 53)";
  } else {
    bmiResult.style.backgroundColor = "lightgoldenrodyellow";
  }
  bmiResult.style.visibility = "visible";
});

//Tip Calculator
const tip = tipCalculate.addEventListener("click", () => {
  let bill = document.getElementById("bill-total").value;
  let percentage = document.getElementById("percentage").value;

  let calc = (bill * (percentage / 100)).toFixed(1);

  tipResult.innerHTML = `You tip is ${calc}$`;
  tipResult.style.visibility = "visible";
});
