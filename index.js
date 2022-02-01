var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["name"] = document.getElementById("sname").value;
    formData["email1"] = document.getElementById("email").value;
    formData["phonenumber"] = document.getElementById("pnumber").value;
    formData["password"] = document.getElementById("pass").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("form").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.name;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.email1;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.phonenumber;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.password;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('sname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('email').value = selectedRow.cells[1].innerHTML;
    document.getElementById('pnumber').value = selectedRow.cells[2].innerHTML;
    document.getElementById('pass').value = selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email1;
    selectedRow.cells[2].innerHTML = formData.phonenumber;
    selectedRow.cells[3].innerHTML = formData.password;
}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('form').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('sname').value = '';
    document.getElementById('email').value = '';
    document.getElementById('pnumber').value = '';
    document.getElementById('pass').value = '';
}