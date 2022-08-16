// step-1: add event listener to the button 
document.getElementById('btn-Deposit').addEventListener('click', function(){
    // step-2: get the deposit amuont from the deposit input field 
    const depositField = document.getElementById('diposit-field');
    const newDepositAmuontString = depositField.value;
    const newDepositAmuont = parseFloat(newDepositAmuontString);

    // step-3: get the current deposit total 
    // for non-input(elemet other than input. textarea)to inner text to inner text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDeposiTotalString = depositTotalElement.innerText;
    const previousDeposiTotal = parseFloat(previousDeposiTotalString);

    // step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDeposiTotal + newDepositAmuont
    depositTotalElement.innerText = currentDepositTotal;

    // step-5:get balance current total
    const balanceTotalElement = document.getElementById('balnce-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-6:caculate current total balance 
    const currentBalanceTotal = previousBalanceTotal + newDepositAmuont;

    // set the balance total 
     balanceTotalElement.innerText = currentBalanceTotal;


    // step-7: clear the deposit field
    depositField.value = '';
})