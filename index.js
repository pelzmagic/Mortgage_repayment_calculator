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
const resultContent = document.querySelector(".result_content");
const repaymentResult = document.querySelector(".repayment_result");
const monthlyInterestInfo = document.querySelector(".monthly_info");
const yearlyInterestInfo = document.querySelector(".yearly_info");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let mortgageAmount = mortgageAmountInput.value;
    let numberOfYears = yearsInput.value;
    let interestRate = interestInput.value;
    
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
        resultContent.classList.add("keep");
        repaymentResult.classList.remove("stash");
    } 

    mortgageAmount = parseFloat(mortgageAmountInput.value);
    numberOfYears = parseFloat(yearsInput.value);
    interestRate = parseFloat(interestInput.value);
    const monthlyRepayment = () => {
        let payment = ((mortgageAmount * interestRate) / 1 - Math.pow((1 + (interestRate / 12)), -(numberOfYears / 12)));
        let refinedPayment = payment.toFixed(2);
        let convertedPayment = Number(refinedPayment);
        let formattedRefinedPayment = convertedPayment.toLocaleString();
        return formattedRefinedPayment;
    }

    const totalRepayment = () => {
        let repayment = (mortgageAmount * numberOfYears * interestRate) / 12;
        let refinedRepayment = repayment.toFixed(2);
        let convertedRefinedRepayment = Number(refinedRepayment);
        let formattedRefinedRepayment = convertedRefinedRepayment.toLocaleString();
        return formattedRefinedRepayment;
    }
    
    const monthlyPayment = monthlyRepayment();
    monthlyInterestInfo.innerText = `${"$" + monthlyPayment}`;

    const termlyRepayment = totalRepayment();
    yearlyInterestInfo.innerText = `${"$" + termlyRepayment}`;
})

function clearForm() {
    form.reset();
    resultContent.classList.remove("keep");
    repaymentResult.classList.add("stash");
}

clearButton.addEventListener("click", clearForm);