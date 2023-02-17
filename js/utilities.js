
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


// const total = 570;
// const b = 8;
// const result = Math.round((b / 100) * total);
// console.log(result);