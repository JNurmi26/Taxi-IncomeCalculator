
document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateIncome);
});

function calculateIncome() {
    const grossIncome = parseFloat(document.getElementById("grossIncome").value);

    if (isNaN(grossIncome) || (grossIncome < 0)) {
        alert("Please enter a valid number for net income.");
        return;
    }

    const netMain = (grossIncome * 0.35).toFixed(2);
    const netCalc1 = (netMain * 0.07).toFixed(2);
    const netCalc2 = (netMain * 0.0715).toFixed(2);
    const netCalc3 = (netMain * 0.015).toFixed(2);
    const netIncome = (netMain - netCalc1 - netCalc2 - netCalc3).toFixed(2);

    document.getElementById("netIncome").textContent = netIncome;
}