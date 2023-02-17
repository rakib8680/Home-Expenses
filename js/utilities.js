
// expenses function 
function getExpensesValue(byID) {
    const amountFields = document.getElementById(byID);
    const fieldsValueString = amountFields.value
    const fieldsValue = parseFloat(fieldsValueString);
    return fieldsValue;
}




// const total = 570;
// const b = 8;
// const result = Math.round((b / 100) * total);
// console.log(result);