/**
 * 1. add event handler with the witdraw button
 * 2. get the witdraw amount from the withdraw input field
 * 2-5. also make sure to convert the input into a number by using paresfloat 
 * 3. get previous witdraw total 
 * 4. calculet total witdraw amount
 * 4-5. set total witdraw amount
 * 5. get the previous balance total
 * calculet new balance total
 * 6-5. set the new balance total
 * 7. clear the input field*/

// step 1
document.getElementById('btn-Withdraw').addEventListener('click', function(){
    //step-2
    const witdrawField = document.getElementById('withdraw-field');
    const newWitdrawAmountString = witdrawField.value;
    const newWitdrawAmount = parseFloat(newWitdrawAmountString);

    //step-7
    witdrawField.value = '';

    if(isNaN(newWitdrawAmount)){
        alert('plase porvid a number')
        return;
    }

    //step-3
    const WitdrawTotalElemnt = document.getElementById('withdraw-total');
    const previousWitdrawTotalString = WitdrawTotalElemnt.innerText;
    const previousWitdrawTotal = parseFloat(previousWitdrawTotalString);


    //step-5
    const balanceTotalElement = document.getElementById('balnce-total')
    const previousBalanceTotoalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotoalString);



    if(newWitdrawAmount > previousBalanceTotal){
        alert('baper bank ee ato tk  nai')
        return;
    }

    // step-4
    const currentWitdrawTotal = previousWitdrawTotal + newWitdrawAmount;
    WitdrawTotalElemnt.innerText = currentWitdrawTotal;

    // step-6
    const newBalanceTotal = previousBalanceTotal - newWitdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})