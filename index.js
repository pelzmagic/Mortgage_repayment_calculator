const clearButton = document.querySelector(".clear");
const form = document.getElementById("mortgage_form");
const mortgageAmountInput = document.querySelector(".amount");
const dollarSymbol = document.querySelector(".symbol");
const mortgageAmountError = document.querySelector(".amount_error");
const yearsInput = document.querySelector(".mortgage_length");
const years = document.querySelector(".length");
const yearsInputError = document.querySelector(".term_error");
const interestInput = document.querySelector(".mortgage_rate");
const percentageSymbol = document.querySelector(".percentage");
const interestInputError = document.querySelector(".rate_error");
const firstRadioInput = document.querySelector("input[name='repayment-type']");
const secondRadioInput = document.querySelector("input[name='interest_type']");
const mortgageTypeError = document.querySelector(".type_error");
const formButton = document.querySelector(".form_button");
const amountInput = document.querySelector(".amount_input");
const mortgageTerm = document.querySelector(".years");
const mortgageInterest = document.querySelector(".mortgage_interest");
const firstRadio = document.querySelector(".first_radio_input");
const secondRadio = document.querySelector(".second_radio_input");
const repaymentResult = document.querySelector(".repayment_result");
const mortgageResult = document.querySelector(".mortgage_result");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const mortgageAmount = mortgageAmountInput.value;
    const numberOfYears = yearsInput.value;
    const interestRate = interestInput.value;

    if (mortgageAmount == "") {
        mortgageAmountError.classList.remove("hide");
        dollarSymbol.style.backgroundColor = "var(--RED)";
        dollarSymbol.style.color = "var(--WHITE)";
        amountInput.style.borderColor = "var(--RED)";
    } else {
        mortgageAmountError.classList.add("hide");
        dollarSymbol.style.backgroundColor = "var(--LIGHTSLATE)";
        dollarSymbol.style.color = "var(--DEEPSLATE)";
        amountInput.style.borderColor = "var(--HEAVYSLATE)";
    }

    if (numberOfYears == "") {
        yearsInputError.classList.remove("hidden");
        years.style.backgroundColor = "var(--RED)";
        years.style.color = "var(--WHITE)";
        mortgageTerm.style.borderColor = "var(--RED)";
    } else {
        yearsInputError.classList.add("hidden");
        years.style.backgroundColor = "var(--LIGHTSLATE)";
        years.style.color = "var(--DEEPSLATE)";
        mortgageTerm.style.borderColor = "var(--HEAVYSLATE)";
    }

    if (interestRate == "") {
        interestInputError.classList.remove("conceal");
        percentageSymbol.style.backgroundColor = "var(--RED)";
        percentageSymbol.style.color = "var(--WHITE)";
        mortgageInterest.style.borderColor = "var(--RED)";
    } else {
        interestInputError.classList.add("conceal");
        percentageSymbol.style.backgroundColor = "var(--LIGHTSLATE)";
        percentageSymbol.style.color = "var(--DEEPSLATE)";
        mortgageInterest.style.borderColor = "var(--HEAVYSLATE)";
    }
    if (firstRadioInput.checked || secondRadioInput.checked) {
        mortgageTypeError.classList.add("bury");
    } else {
        mortgageTypeError.classList.remove("bury");
    }

    if (mortgageAmount !== "" && numberOfYears !== "" && interestRate !== "" && (firstRadioInput.checked || secondRadioInput.checked)) {
        repaymentResult.classList.add("keep");
        mortgageResult.classList.remove("keep");
    } 
})