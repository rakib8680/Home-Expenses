
// expenses function 
function getExpensesValue(byID) {
    const amountFields = document.getElementById(byID);
    const fieldsValueString = amountFields.value
    const fieldsValue = parseFloat(fieldsValueString);
    return fieldsValue;
}