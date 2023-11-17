var input = document.querySelector(".input-field")
var btn = document.querySelector(".btn");
var taskList = document.querySelector(".task-list")

showData()
function add() {
    if(input.value.length == 0){
        return
     }
    
    else {
 
    
    li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    div = document.createElement('div');
    div.classList.add('item');
    delBtn = document.createElement('button');
    delBtn.classList.add('del-btn');
    delBtn.appendChild(document.createTextNode('X'));
    div.appendChild(delBtn);
    div.appendChild(li);
   taskList.appendChild(div);
    input.value = "";
    saveData();
   
    }
    
}

// function inputLength(){
    
// }



function toggleDone(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
    saveData()
}


btn.addEventListener('click', add)
input.addEventListener('keydown', (e) =>{
    if(e.keyCode === 13){
        add()
    }
    saveData()
})
        
 taskList.addEventListener('click', toggleDone)
  


function remove(e){
    div = document.querySelector('.item')
    if (e.target.tagName === "BUTTON") {
        taskList.removeChild(div);
    }
    saveData()
}

function saveData(){
    localStorage.setItem("data", taskList.innerHTML)
    
}
function showData(){
    taskList.innerHTML = localStorage.getItem("data")
}

taskList.addEventListener('click', remove)

