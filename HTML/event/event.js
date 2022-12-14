const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");
let date = document.getElementById("date")

const cardItem = (text) =>{ 
    const item = `
                <div class="task">
                    <input type="text" class="text" readonly value="${text}" />
                    <div class="actions">
                        <button class="edit" onclick = edit(this)><i class="fas fa-pen"></i></button>
                        <button class="done" onclick = check(this)><i class="fas fa-check"></i></button>
                        <button class="delete" onclick = ustgah(this) ><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    return item;
}

const taskAdd = () => {
    let text = inputText.value;
    if(text === ""){
        alert("Ta utga oruulaagui baina");
    }else{

        taskList.innerHTML += cardItem(text);
    }
    inputText.value = "";
}

addBtn.addEventListener("click",taskAdd);
document.addEventListener('keyup',(e)=>{
    if(e.key === "Enter"){
        taskAdd();
    }
})

function ustgah(e){
    let child=e.parentNode.parentNode;
    let parent=e.parentNode.parentNode.parentNode;
    console.log(e.parentNode.parentNode.parentNode);
    parent.removeChild(child);
}
function check(e){
    let child=e.parentNode.parentNode;
    let parent=e.parentNode.parentNode.parentNode;
    console.log(e.parentNode.parentNode.parentNode);
    parent.removeChild(child);
}
function edit(e){
    let inp=e.parentNode.parentNode.querySelector(".text");
    inp.removeAttribute("readonly");
    let edt = e.parentNode.parentNode
}
function edited(e){
    let inp=e.parentNode.parentNode.querySelector(".text");
    inp.setAttribute("readonly");
}





