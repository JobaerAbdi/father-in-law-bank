document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawField = document.getElementById('withdraw-submit');
    const newWithdrawFieldString = newWithdrawField.value;
    const newWithdrawFieldAmount = parseFloat(newWithdrawFieldString);
    newWithdrawField.value = '';

    if(isNaN(newWithdrawFieldAmount)){   
        alert('Please Provide a Number');
        return;
    }

    const prevWithdrawTotal = document.getElementById('withdraw-total');
    const prevWithdrawTotalString = prevWithdrawTotal.innerText;
    const prevWithdrawTotalAmount = parseFloat(prevWithdrawTotalString);

    const balanceFiled = document.getElementById('balance-total');
    const balanceFiledString = balanceFiled.innerText;
    const balanceAmount = parseFloat(balanceFiledString);

    if(newWithdrawFieldAmount > balanceAmount){
        alert('Father-In-Law Bank have no enough money');
        return;
    };

    const totalWithdrawAmount = prevWithdrawTotalAmount + newWithdrawFieldAmount;
    prevWithdrawTotal.innerText = totalWithdrawAmount;

    const totalBalanceAmount = balanceAmount - newWithdrawFieldAmount;
    balanceFiled.innerText = totalBalanceAmount;
})