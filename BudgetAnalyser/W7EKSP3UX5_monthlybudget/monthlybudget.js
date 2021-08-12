let budgetAmount_el = document.getElementById("budgetAmount");
let totalExpensesAmount_El = document.getElementById("totalExpensesAmount");
let balanceAmount_el = document.getElementById("balanceAmount");
let budgetInputErrMsg_el = document.getElementById("budgetInputErrMsg");
let expenseTitleInputErrMsg_el = document.getElementById("expenseTitleInputErrMsg");
let expenseAmountInputErrMsg_el = document.getElementById("expenseAmountInputErrMsg");
let budgetInput_el = document.getElementById("budgetInput");
let expenseTitleInput_el = document.getElementById("expenseTitleInput");
let expenseAmountInput_el = document.getElementById("expenseAmountInput");
let setBudgetBtn_el = document.getElementById("setBudgetBtn");
let addExpenseBtn_el = document.getElementById("addExpenseBtn");
let expensesHistory_el = document.getElementById("expensesHistory");
let count = 0;

function deleting_item(appedingId) {
    let removable = document.getElementById(appedingId);
    expensesHistory_el.removeChild(removable);
    console.log(removable);
}

function reduction_expense(expAmount) {
    let reductionAmountEl = document.getElementById(expAmount);
    console.log(reductionAmountEl);
    totalExpensesAmount_El.textContent = parseInt(totalExpensesAmount_El.textContent) - parseInt(expAmount);
    console.log(totalExpensesAmount_El.textContent);
}

function reductionAmount(item) {
    balanceAmount_el.textContent = parseInt(budgetAmount_el.textContent) - parseInt(totalExpensesAmount_El.textContent);
    console.log(balanceAmount_el)
}

function createAndAppend(item, item_id) {
    let appendingItem = document.createElement("li");
    let expTitle = document.createElement("p");
    expTitle.textContent = item.expenseTitle;
    expTitle.classList.add("exp");
    let expAmount = document.createElement("p");
    expAmount.textContent = item.expenseAmount;
    expAmount.classList.add("exp1");
    expAmount.id = "expensi" + count;
    console.log(expAmount.textContent, "expAmount");
    appendingItem.appendChild(expTitle);
    appendingItem.appendChild(expAmount);

    let deleteIcon_container = document.createElement("div");
    deleteIcon_container.classList.add("delete-icon-container");
    let deleteIcon_el = document.createElement("i");
    deleteIcon_el.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon_container.appendChild(deleteIcon_el);
    appendingItem.appendChild(deleteIcon_container);
    deleteIcon_container.id = "delte" + count;
    deleteIcon_id = deleteIcon_container.id;
    expensesHistory_el.appendChild(appendingItem);
    console.log(deleteIcon_id);
    appendingItem.id = "expense" + count;
    appedingId = appendingItem.id;
    console.log(appedingId, appendingItem);
    deleteIcon_container.onclick = function() {
        deleting_item(appendingItem.id);
        reduction_expense(expAmount.textContent);
        reductionAmount(item);
    }
}
budgetInput_el.addEventListener("change", function(event) {
    if (event.target.value === "") {
        budgetInputErrMsg_el.textContent = "Required*";
    } else {
        budgetInputErrMsg_el.textContent = "";
    }
});
expenseTitleInput_el.addEventListener("change", function(event) {
    if (event.target.value === "") {
        expenseTitleInputErrMsg_el.textContent = "Required*";
    } else {
        expenseTitleInputErrMsg_el.textContent = "";
    }
});
expenseAmountInput_el.addEventListener("change", function(event) {
    if (event.target.value === "") {
        expenseTitleInputErrMsg_el.textContent = "Required*";
    } else {
        expenseAmountInputErrMsg_el.textContent = "";
    }
});
setBudgetBtn_el.addEventListener("click", function(event) {
    if (budgetInput_el.value === "") {
        budgetInputErrMsg_el.textContent = "required";
    } else {
        budgetAmount_el.textContent = parseInt(budgetInput_el.value);
        budgetInput_el.value = "";
        console.log(budgetInput_el.textContent);
    }
    balanceAmount_el.textContent = parseInt(budgetAmount_el.textContent) - parseInt(totalExpensesAmount_El.textContent);
});

let expenseTitle;
let expenseAmount;
addExpenseBtn_el.addEventListener("click", function(event) {
    if (expenseAmountInput_el.value === "") {
        expenseAmountInputErrMsg_el.textContent = "required";
        expenseTitleInputErrMsg_el.textContent = "rewuied";
    } else {
        totalExpensesAmount_El.textContent = parseInt(expenseAmountInput_el.value) + parseInt(totalExpensesAmount_El.textContent);
        let item = {
            expenseTitle: expenseTitleInput_el.value,
            expenseAmount: expenseAmountInput_el.value,
            itemNo: "item" + count
        };
        item.id = "ItemNo" + count;
        item_id = item.id;
        count = count + 1;
        createAndAppend(item, item_id);
        expenseTitleInput_el.value = "";
        expenseAmountInput_el.value = "";
        reductionAmount(item)
    }
});