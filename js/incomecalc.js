
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

    //calculate the net income after 10% alv tax.
    const netMain = (grossIncome / 1.1).toFixed(2);

    //calculate the provision amount.
    const netMain1 = (netMain * 0.35).toFixed(2);

    //calculate taxes and expenses from provision.
    const netCalc1 = (netMain1 * 0.07).toFixed(2);
    const netCalc2 = (netMain1 * 0.0715).toFixed(2);
    const netCalc3 = (netMain1 * 0.015).toFixed(2);

    //substract all of the tax and expense amounts from the income after 10% alv tax to get net income.
    const netIncome = (netMain1 - netCalc1 - netCalc2 - netCalc3).toFixed(2);

    document.getElementById("netIncome").textContent = netIncome;
}