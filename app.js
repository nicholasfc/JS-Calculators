document.getElementById("kilo-input").addEventListener("input", val => {
  let kilos = val.target.value;
  document.getElementById("grams-result").innerHTML = kilos * 1000;
  document.getElementById("pounds-result").innerHTML = parseFloat(
    kilos * 2.20462262185
  ).toFixed(2);
  document.getElementById("stones-result").innerHTML = parseFloat(
    kilos / 6.35029318
  ).toFixed(2);
});

const bmi = document
  .getElementById("bmi-calculate")
  .addEventListener("click", () => {
    let weight = document.getElementById("weight-input").value;
    let height = document.getElementById("height-input").value;
    let calc = (weight / (height * height)).toFixed(1);
    document.getElementById("bmi-result").innerHTML = `Your BMI is ${calc}`;

    if (calc >= 18.5 && calc <= 24.9) {
      document.getElementById("bmi-result").style.backgroundColor =
        "lightgreen";
    } else if (calc >= 30) {
      document.getElementById("bmi-result").style.backgroundColor =
        "rgb(230, 53, 53)";
    } else {
      document.getElementById("bmi-result").style.backgroundColor =
        "lightgoldenrodyellow";
    }
    document.getElementById("bmi-result").style.visibility = "visible";
  });

const tip = document
  .getElementById("tip-calculate")
  .addEventListener("click", () => {
    let bill = document.getElementById("bill-total").value;
    let percentage = document.getElementById("percentage").value;

    let calc = (bill * (percentage / 100)).toFixed(1);

    document.getElementById("tip-result").innerHTML = `You tip is ${calc}$`;
    document.getElementById("tip-result").style.visibility = "visible";
  });
