document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositField = document.getElementById('deposit-submit');
    const newDepositFieldString = newDepositField.value;
    const newDepositFieldAmount = parseFloat(newDepositFieldString);
    newDepositField.value = '';

    if(isNaN(newDepositFieldAmount)){
        alert('Please Provide a Number');
        return;
    }

    const prevDepositField = document.getElementById('deposit-total');
    const prevDepositFieldString = prevDepositField.innerText;
    const prevDepositFieldTotal = parseFloat(prevDepositFieldString);

    const totalDepositAmount = prevDepositFieldTotal + newDepositFieldAmount;
    prevDepositField.innerText = totalDepositAmount;

    const balanceFiled = document.getElementById('balance-total');
    const balanceFiledString = balanceFiled.innerText;
    const balanceAmount = parseFloat(balanceFiledString);

    const totalBalanceAmount = balanceAmount + newDepositFieldAmount;
    balanceFiled.innerText = totalBalanceAmount;
});