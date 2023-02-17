


// add event handler to calculate button 
document.getElementById('calculate-btn').addEventListener('click', function () {

    // get total income 
    const incomeField = document.getElementById('income-field');
    const incomeFieldString = incomeField.value;
    const incomeFieldAmount = parseFloat(incomeFieldString);



    // get expense field amounts 
    const foodFieldValue = getExpensesValue('food-field');
    const rentFieldValue = getExpensesValue('rent-field');
    const clothesFieldValue = getExpensesValue('clothes-field');

    // calculate total expense 
    const totalExpense = foodFieldValue + rentFieldValue + clothesFieldValue;

    // add total expense value to total expense element 
    const totalExpenseElement = document.getElementById('total-expense');
    totalExpenseElement.innerText = totalExpense;



    // remove total expense amount from total income 
    const remainingIncome = incomeFieldAmount - totalExpense;

    // set remaining income to Balance element
    const remainingBalanceElement = document.getElementById('balance');
    remainingBalanceElement.innerText = remainingIncome;


})


// add event handler to Save button 