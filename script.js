const button = document.getElementById("submitBtn")
const ul = document.getElementById("list");
let id = 0;
const list = [];

button.addEventListener("click", function(event){
    event.preventDefault();
    id++;
    input = document.getElementById("input").value;
    list.push({id: id, task: input, completed: false });
    renderList();
})

function renderList() {
    taskName = list.at(-1).task;
    taskID = list.at(-1).id;

    li = document.createElement("li");
    h3 = document.createElement("h3");
    remove = document.createElement("button");
    
    h3.value = taskID;
    remove.value = taskID;
    remove.textContent = "X"
    remove.onclick = function() {
        removeItem(this.value)
    };
    li.classList.add("task");
    h3.textContent = taskName;
    remove.classList.add("removeBtn");

    li.appendChild(h3)
    li.appendChild(remove)
    ul.appendChild(li)
}

function removeItem(value) {
    for (i=1;i<ul.children.length;i++) {
        if (ul.children[i].children[0].value == value) {
            ul.children[i].children[0].style.textDecoration = "line-through";
            ul.children[i].children[0].style.color = "red"; 
        }
    }
    for (item in list) {
        if (value == list[item].id) {
            list[item].completed = true;
        }
    
    }
}