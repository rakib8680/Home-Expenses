


// add event handler to calculate button 
document.getElementById('calculate-btn').addEventListener('click', function () {

    // get total income 
    const incomeFieldAmount = getElementsValue('income-field');
    console.log(incomeFieldAmount);


    // get expense field amounts 
    const foodFieldValue = getElementsValue('food-field');
    const rentFieldValue = getElementsValue('rent-field');
    const clothesFieldValue = getElementsValue('clothes-field');


    // calculate total expense 
    const totalExpense = foodFieldValue + rentFieldValue + clothesFieldValue;
    // add total expense value to total expense element 
    setInnerText('total-expense', totalExpense);


    // remove total expense amount from total income 
    const remainingIncome = incomeFieldAmount - totalExpense;
    // set remaining income to Balance element
    setInnerText('balance', remainingIncome);


})


// add event handler to Save button 
document.getElementById('save-btn').addEventListener('click', function () {

    // get value from save input Field 
    const saveInputField = getElementsValue('save-field');
    



})