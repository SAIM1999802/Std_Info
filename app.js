function addTable() {  
    var  arr = [] 
    var table = document.getElementById("show")
    var stdname = document.getElementById("stdname").value
    var rollNo = document.getElementById("rollno").value
    var email = document.getElementById("email").value
    var module = document.getElementById('module')
    var output1 = module.options[module.selectedIndex].innerText
    
    if(!stdname || !rollNo  || !email){
      alert("Plz fill all information")
      return
    }
    var obj = {
      name: stdname,
      roll_Number : rollNo,
      Email : email,
      Course : output1
      }
    arr.push(obj)
    
    for (let i = 0; i < arr.length; i++) {
      var tr =  document.createElement("tr")
      var td1 = document.createElement("td") 
      var td2 = document.createElement("td") 
      var td3 = document.createElement("td") 
      var td4 = document.createElement("td") 
    
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(td4)
    table.appendChild(tr)
    
      td1.innerHTML = arr[i].name 
      td2.innerHTML = arr[i].roll_Number
      td3.innerHTML = arr[i].Email
      td4.innerHTML = arr[i].Course
    }
    }
    
    
    
    
    function clearResult() {
    var stdname = document.getElementById("stdname")
    var rollNo = document.getElementById("rollno")
    var email = document.getElementById("email")
    stdname.value = " "
    rollNo.value = " " 
    email.value = " "
    }
    