


// jason.parse예시 
// const json = '{"result":true, "count":42}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// // expected output: true


// json.parse 설명:https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse

// foreach 설명:https://meanbymin.tistory.com/57
// */








const toDoForm = document.getElementById("todo-form");
const toDoInput = todoForm.querySelector("input");
const toDoList = document.getElementById("toDoList");
const User_KEy = "username";
let arr1 = [];





function saveTodos(){
    localStorage.setItem(User_KEy,JSON.stringify(arr1));
}

function DeleteToDo(event){
    const li = event.target.parentElement;
    li.remove();

    arr1 = arr1.filter((arr)=> arr.id !==parseInt(li.id));
    saveTodos();

}



function parsedToDos(value){
const li =document.createElement("li");
li.id = value.id
const span =document.createElement("span");
span.innerText = value.text;
const button = document.createElement("button")
button.innerText ="X"
button.addEventListener("click",DeleteToDo);
li.appendChild("span");
li.appendChild("button");
toDoList.appendChild("li");

}


function clickEvent1(event){
    event.preventDefault();
    const valueA = toDoInput.value;
    toDoInput.value = "";
    const valueAObject = {
        text:valueA,
        id:Date.now(),
    }
    arr1.push(valueAObject);
    parsedToDos(valueAObject);
    saveToDos();
}

toDoForm.addEventListener("submit",clickEvent1)


const savedToDos = localStorage.getItem(User_KEy);


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos =parsedToDos;
    parsedToDos.forEach(paintToDo);
}