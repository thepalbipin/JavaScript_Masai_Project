// fill in javascript code here

let form = document.querySelector("form");
let employeeList = document.querySelector("#employeeList");

let data = [];

function saveData() {
  localStorage.setItem("data", JSON.stringify(data));
}

function loadData() {
  let storedValue = JSON.parse(localStorage.getItem("data"))

  if(storedValue){
    let data = storedValue;
    showData(data);
  }
  // console.log(storedValue);
}

function handleSubmit(e){
  e.preventDefault()
  // console.log(e);

  let name = e.target.name.value; 
  let id = e.target.employeeID.value;
  let department = e.target.department.value;
  let experience = e.target.exp.value;
  let email = e.target.email.value;
  let mobile = e.target.mbl.value;
  let role = determine(experience);

  function determine(Experience){
    if(Experience >= 5){
        return "Senior";
    }
    else if(Experience >= 2 && Experience <= 5){
        return "Junior";
    }
    else{
        return "Trainee";
    }
  }

  let obj = {
    name,
    id,
    department,
    experience,
    email,
    mobile,
    role
  }

  data.push(obj);
  saveData();
  showData(data);
  // console.log(obj);
}

function showData(arr){
  // console.log(arr);

  employeeList.innerHTML = "";

  arr.forEach((ele, i)=> {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerHTML = `${i+1}`;

    let td2 = document.createElement("td");
    td2.innerHTML = ele.name;

    let td3 = document.createElement("td");
    td3.innerHTML = ele.id;

    let td4 = document.createElement("td");
    td4.innerHTML = ele.department;

    let td5 = document.createElement("td");
    td5.innerHTML = ele.experience;
  
    let td6 = document.createElement("td");
    td6.innerHTML = ele.email;

    let td7 = document.createElement("td");
    td7.innerHTML = ele.mobile;

    let td8 = document.createElement("td");
    td8.innerHTML = ele.role;

    let td9 = document.createElement("td");
    let button = document.createElement("button");
    button.innerHTML = "Delete 🗑️"
    button.addEventListener("click", (i)=>{
      handleDelete(i)
    })
    td9.append(button);

    tr.append(td1, td2, td3, td4, td5, td6, td7, td9);

    employeeList.append(tr);
  });
}

function handleDelete(index){
  // console.log(index);
  data.splice(index, 1);
  saveData();
  showData(data);
}

form.addEventListener("submit", (event) => {
  handleSubmit(event)
})

loadData()