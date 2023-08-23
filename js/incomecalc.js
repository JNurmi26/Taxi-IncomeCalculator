
document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateIncome);
});

function calculateIncome() {
    const netIncome = parseFloat(document.getElementById("netIncome").value);

    if (isNaN(netIncome) || (netIncome < 0)) {
        alert("Please enter a valid number for net income.");
        return;
    }

    const grossMain = (netIncome * 0.35).toFixed(2);
    const grossCalc1 = (grossMain * 0.07).toFixed(2);
    const grossCalc2 = (grossMain * 0.0715).toFixed(2);
    const grossCalc3 = (grossMain * 0.015).toFixed(2);
    const grossIncome = (grossMain - grossCalc1 - grossCalc2 - grossCalc3).toFixed(2);

    document.getElementById("grossIncome").textContent = grossIncome;
}