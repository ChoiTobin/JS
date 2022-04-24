ToDoList 만들자
무엇이 필요할까?
크게
(form태그,input태그,ul,li태그,button 태그,저장소 저장)


`대제목:문서에접근! + KEY값(TODOS_KEY) + 배열(toDos)`
-세부설명-
1.필요한 HTML에 문서에 접근합니다,
2.key값을 변수에 할당하여 필요 할때 쉽게 쓸수 있게 만듭니다.
3.배열을 만들어 놓습니다.


const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");




const TODOS_KEY ="todos"
let toDos =[]

연습 공간





`대제목:저장소에 key와+value값 배열을 string으로 바꿔서 저장하기.`
-세부설명-
1.저장함수로서 setItem을 통해서 입력 받은 값을 
2.TODOS_KEY에는 키로 받고
3.JSON.stringify(toDos)를 통해 값으로 받는데 
4.toDos자체가 배열이기 때문에 toDos를 string값으로 바꿔야 저장소에 저장 가능하기때문에 스트링으로
바꿔줌 결론:저장하는역할을 한다.


function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

안보고연습
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}












`대제목:클릭이벤트를 누르면 삭제된다. + filter를 통해서 누른것이 아니면 저장소에서 유지한다 그리고 그상태를 저장한다`
-세부설명-
1.버튼 클릭 했을때 event요소에 정보가 들어간다 
2.event.target:클릭된 
3.parentElement:클릭된 element의 부모다.
4.부모 요소인 li를 제거
삭제 버튼을 눌렀을때 데이터베이스에서도 지워줘야한다.
5.내가 클릭한 li.id는 삭제되어야하고 다른 toDo는 남겨둔다.
6.li.id는 string toDo.id는 number타입 이둘이 다르게되어있기때문에 지워지지 안흔ㄴ다
그러므로 parseInt를 통해서 한쪽을맞춰주면 되고 save해준다 그모습을
필터 설명 [1,2,3,4].filter(sexyFilter)  1,2,3,4에 sexyFilter가 차례대로 실행될것임.

function DeleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos =toDos.filter((toDo)=> toDo.id !== parseInt(li.id))

    saveToDos();
}
연습
function DeleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((todo)=> todo.id !== parseInt(li.id))
    saveTodos();
}






`대제목:요소들을 html에 생성하고 위치시키고 문자를 화면에 표시한다 newTodo의 아이디를
불러와서 li.iD에 넣는다 li는 button의 부모태그로써 x를누르면 사라짐 li.id가 string이기 때문에
toDo.id와 비교가 불가해서 위에 ParseInt를 통해 넘버로 바꿔주는것.`
-세부설명-
li span button을 생성해서 문자를썼을때 집어넣는다

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText ="X";
    button.addEventListener("click",DeleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}
연습
function paintToDo(newTodo){
    const li =document.createElement("li");
    li.id=newTodo.id;
    const span = document.createElement("span");
    span.innerText =newTodo.text;
    const button = document.createElement("button");
    button.innerText ="X";

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}



`대제목:입력값을 newTodo에 받고 newTodoObj안에 text와 id를 만들어서 toDos.push에
배열로 넣고 save한다.`
-세부설명-

function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj ={
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit",handleTodoSubmit);

연습 function handleTodoSubmit(event){
    event.preventDefault();
    const newTOdo = toDoInput.value;
    toDoInput.value =""
    const newTodoObj ={
        text:newTodo,
        id:Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();

}





`대제목:localStorage 키 값을 변수에 할당하여 저장된 요소가 있다면 
실행하는데 키값을 JSON.parse해서 string이었던것을 배열로 얻게된다.
그리고 배열로 얻은값을 다시 배열에 집어넣고 forEach구문을 통해서 각각의 item을 준다`
-세부설명-

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

연습

const 저장변수 <--사용자입력값호출 저장변수에 담기

만약 사용자가 친게 있다면 {}{

        사용자가 친거는 문자니까 타입을배열로 바꾸고 또 또다른 변수에 할당
        배열에 사용자가 입력한 값을 담게한다.-->이부분 다시보기.
        배열을 시작할때 비어있으니까 이전 저장된 것들을 넣어준다.text
        
        forEach로 paintToDo를 기본적으로 실행하고 각각의 아이템을 준다
        배열.forEach(담아줄함수);
        예전값을 담아줄함수에게 준다


}