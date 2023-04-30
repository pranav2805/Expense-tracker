const form = document.getElementById('addForm');
const amount = document.getElementById('amount');
const desc = document.getElementById('description');
const category = document.getElementById('category');
const expenseList = document.getElementById('expenses');

form.addEventListener('submit', addExpense);

function addExpense(e){
    e.preventDefault();

    //console.log("1");

    // let amountValue = amount.value;
    // let descValue = desc.value;
    // let categoryValue = category.value;

    let obj = {
        amount: amount.value,
        description: desc.value,
        category: category.value
    }

    localStorage.setItem(category.value, JSON.stringify(obj));

    let li = document.createElement('li');

    //let text = document.createTextNode(`${amountValue} - ${descValue} - ${categoryValue}`);

    li.textContent = `${obj.amount} - ${obj.category} - ${obj.description}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete expense';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit expense';

    li.appendChild(deleteBtn);
    li.appendChild(editBtn);

    deleteBtn.onclick = () =>{
        localStorage.removeItem(obj.category);
        expenseList.removeChild(li);
    }

    editBtn.onclick = () =>{
        localStorage.removeItem(obj.category);
        expenseList.removeChild(li);
        amount.value = obj.amount;
        desc.value = obj.description;
        category.value = obj.category;
    }

    //li.appendChild(text);
    expenseList.appendChild(li);
}