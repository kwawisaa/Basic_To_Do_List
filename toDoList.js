const inputTask = document.getElementById("input-task");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("count-completed");
const uncompletedCounter = document.getElementById("count-uncompleted");

function updateCounters(){
    const completedTask = document.querySelectorAll(".completed").length;
    const uncompletedTasks = document.querySelectorAll("li:not(.completed)").length;

    completedCounter.textContent = completedTask;
    uncompletedCounter.textContent = uncompletedTasks;
} 

function addTask(){
    const userTask = inputTask.value.trim();
    if(!userTask){
        alert("Please enter a valid task");
        return;
    }    

    const listItem = document.createElement("li")

    listItem.innerHTML =`
    <label>
        <input type="checkbox">
        <span>${userTask}</span>
    </label>
    <span class="editBtn">Edit</span>
    <span class="deleteBtn">Delete</span>`;


    listContainer.appendChild(listItem);
    inputTask.value = "";

    const checkbox = listItem.querySelector("input");
    const editBtn = listItem.querySelector(".editBtn");
    const taskSpan = listItem.querySelector("span");
    const deleteBtn = listItem.querySelector(".deleteBtn");

    checkbox.addEventListener("click",function(){
        listItem.classList.toggle("completed", checkbox.checked);
        updateCounters();
    });

    editBtn.addEventListener("click", function(){
        const update = prompt("Edit task:", taskSpan.textContent);
        if(update !== null){
            taskSpan.textContent = update;
            listItem.classList.remove("completed");

        updateCounters();
        }       
    });

    deleteBtn.addEventListener("click", function(){
        if(confirm("Are you sure you want to delete this task?")){
            listItem.remove();
            updateCounters();
        }
    });
}


