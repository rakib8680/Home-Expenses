
// expenses function 
function getElementsValue(byID) {
    const amountFields = document.getElementById(byID);
    const fieldsValueString = amountFields.value
    const fieldsValue = parseInt(fieldsValueString);
    return fieldsValue;
}


// set innerText 
function setInnerText(element, value) {
    const previousElementText = document.getElementById(element);
    previousElementText.innerText = value;
}



// calculate percentage 
function getPercentage(totalIncome, percentAmount) {
    const percentage = Math.round((percentAmount / 100) * totalIncome);
    return percentage;
}


// const a = 570;
// const b = 8;
// const result = Math.round((b / 100) * a);
// console.log(result);