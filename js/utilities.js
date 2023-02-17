


// get value from input field and convert to INT
function getElementsValue(byID) {
    const amountFields = document.getElementById(byID);
    const fieldsValueString = amountFields.value;
    const fieldsValue = parseInt(fieldsValueString);
    return fieldsValue;
}


// get innerText from element and convert to INT 
function getElementsInnerText(byID) {
    const innerTextValue = document.getElementById(byID);
    const elementInnerTextString = innerTextValue.innerText;
    const elementInnerText = parseInt(elementInnerTextString);
    return elementInnerText;
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


