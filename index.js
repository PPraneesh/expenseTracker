var currentBalElement =document.getElementById("currentBal")
var totalIncomeElement = document.getElementById("totalIncome")
var totalExpenseElement = document.getElementById("totalExpense")
var totalBalance=0;

document.getElementById("submit").addEventListener("click",(event)=>{
    event.preventDefault()
    var newAmount = document.getElementById("amount").value
    var expenseType = document.getElementById("expenseType").value
    if(expenseType=="Expense"){
       if(document.getElementById("expenseName").value == "" || document.getElementById("amount").value == "")
       alert("PLEASE ENTER THE DETAILS")
       else{
        setCurrentBalance((parseInt(currentBalElement.innerHTML) - (parseInt(newAmount))))
        totalExpenseElement.innerHTML = (parseInt(totalExpenseElement.innerHTML) + (parseInt(newAmount)))
        newTableRow(document.getElementById("expenseName").value,document.getElementById("amount").value,"↘");
    }
    }
    else{
        if(document.getElementById("expenseName").value == "" || document.getElementById("amount").value == "")
        alert("PLEASE ENTER THE DETAILS")
    else{
        setCurrentBalance((parseInt(currentBalElement.innerHTML) + (parseInt(newAmount))))
        totalIncomeElement.innerHTML = (parseInt(totalIncomeElement.innerHTML) + (parseInt(newAmount)))
        newTableRow(document.getElementById("expenseName").value,document.getElementById("amount").value,"↗");
    }
    }
}) 

function setCurrentBalance(currentBalance){
    currentBalElement.innerHTML = currentBalance
}

for(let i=0;i<document.getElementsByClassName("navItem").length;i++){
document.getElementsByClassName("navItem")[i].addEventListener("click",()=>{
    alert("Stop clicking me! I'm not working yet!")
})
}

function newTableRow(expenseName,expenseAmount,expenseType){
var table = document.getElementById("table");
 var t =document.getElementsByClassName("tableRow").length;
var newRow = table.insertRow();
newRow.setAttribute("class","tableRow")
let cell1 = newRow.insertCell();
let cell2 = newRow.insertCell();
let cell3 = newRow.insertCell();
let cell4 = newRow.insertCell();
let cell5 = newRow.insertCell();
cell5.setAttribute("class","delete")

document.getElementsByClassName("delete")[t].addEventListener("click",(event)=>{
    event.preventDefault()
    console.log("clicked")
    let row = event.target.parentNode;
    row.parentNode.removeChild(row);
})
cell1.innerHTML = t+1;
cell2.innerHTML =expenseName;
cell3.innerHTML = expenseAmount;
cell4.innerHTML = expenseType;
cell5.innerHTML = "x";
}