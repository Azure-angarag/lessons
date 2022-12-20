const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");
let date = document.getElementById("date")
console.log(selct)

const cardItem = (text) =>{ 
    let selct = document.getElementById("selct").value;
    const item = `
                <div class="task ${selct}">
                    <input type="text" class="text" readonly value="${text}" />
                    <div class="actions">
                        <button class="edit" onclick = edit(this)><i class="fas fa-pen"></i></button>
                        <button class="done" onclick = check(this)><i class="fas fa-check"></i></button>
                        <button class="delete" onclick = ustgah(this) ><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    return item;
}

// let editing = `<button onclick = edited(this) ><i class="edited fa-light fa-plus"></i></button>`;
// let editedd = `<button class="edit" onclick = edit(this)><i class="fas fa-pen"></i></button>`;

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
    console.log(parent);
    parent.removeChild(child);
}
function check(e){
    let inp=e.parentNode.parentNode.children[0];
    let pL = inp.classList;
    if(pL.contains("midLine")){
        pL.remove("midLine");
    }else{
        pL.add("midLine");
    }
}
function edit(e){
    let inp=e.parentNode.parentNode.children[0];
    // console.log(e.firstChild.classList);
    let cl = e.firstChild.classList;
    inp.setAttribute("value", inp.value);

    if(cl.contains("fa-pen")){
        cl.remove("fa-pen");
        cl.add("fa-plus", "fa-light");
        inp.removeAttribute("readonly");
    }
    else {
        cl.remove("fa-plus", "fa-light");
        cl.add("fa-pen");
        inp.setAttribute("readonly", true);

    }
}





setInterval(myTimer, 1000);

function myTimer() {
    const date = new Date();
    document.getElementById("dates").innerHTML = ` Date : ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}

