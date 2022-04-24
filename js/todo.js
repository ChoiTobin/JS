const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
/*
const toDoInput = document.querySelector(#todo-form input)
과 같음 그리고 input을 부르는이유 input 밸류값을 얻기 위해서임
input을 document에서 찾는게 아닌 todoForm에서 바로 찾음.
*/
const toDoList = document.getElementById("todo-list");
//4편시작 결론 다음편에 localStorage있는것들을 불러올것임 localStorage에는 남아있지만 화면에 나타나지 않는다.
const TODOS_KEY = "todos"; /*5편*/
//1.얘는 1편
let toDos = [];
//6편 ->application 배열 안에 입력하는 문자들이 담기는데 새로고침후 다시쓰면 기존의것들이 없어진다.그리고 새로 다시 저장하게되는데 그이유는
//application의 시작 될 때 toDos array는 항상 비어있기 때문이다. 그리고 newTodo를 toDos array(빈array)에 그냥 push하게 된다. 그리고 새로운 toDo들만 포함하고 있는
//array를 저장한다. 전에 있던 todo는 로컬스토리지에 있다.새로운 todo들은 사용자가 입력하는 것이고. newTodo들만 toDos array에 추가해서 단지 newTodo들만 localSotrage에 저장하고 있다
//우리가 갖고 있던 toDos의 복사본을 잊어버리고 있다는말. ->해결방법:application이 시작될때 toDos array를 빈값으로 시작하는 대신에 const를 let으로 바꿔서 업데이트가 가능하도록 만들고
//localStorage에 toDo들이 있으면 toDos에 parsedToDos를 넣어서 전에 있던 toDo들을 복원할것임.
//데이터베이스







function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
/*
7.newTodo가 그려질때마다 그 텍스트를 array에 push 하고싶다
saveToDos가 할 행동은 toDos array의 내용을 localStorage에 넣는거임
설명
localStorage : 브라우저 단위에서 사용하는 임시데이터베이스이다
setItem("key", "value") : 해당 key로 value를 저장한다
getItem("key") : 저장된 value값을 key로 가져온다.
javascript나 array나 어떤 것이든 string으로 바꿔주는 기능.
ex: const plater ={name:"nico"}를 스트링으로 바꿔주려면
JSON.stringify(player) ->object든 array든 string으로 바꿔준다.
추가정보:JSON.parse("[1,2,3,4]") 멋진 array를 가지고 단순한 string으로 바꿀수 있음
*/





//3편 시작 / 결론 문제:todo를 저장하고 있지 않다 새로고침하면 없어짐
function DeleteToDo(event) {
    const li = event.target.parentElement;
    //이게 우리가 삭제하고 싶은 li다 현재 button이 li의 자식임. 그렇기 떄문에 li 부모요소를 제거해주기
    li.remove();
    //이게 다다. x버튼을 누를때 event를 얻을것임!
    //event는 target을 주겠지 target은 버튼이고 버튼은 부모를 갖고있다.
    //버튼의 부모에 접근할것이고 부모는 결국 li가 된다. 그 li를 삭제할것임

    //target:클릭된 HTML element 
    //->모든 HTML element에는 하나 이상의 property가 있다.
    // parentElement:클릭된 element의 부모다.

    //6.클릭하면 console창에 뜬다
    //button을 클릭한건 안다 하지만 어떤li를 제거해야 되는지 알지 못한다. 처음것일까 마지막 것일까 button으로만 만들었으니 같은 button 같은 function 같은 event
    //우리는 event에 정보를 가지고 있다. ->클릭된 버튼이 어떤건지 단서를 얻을수 있을것임. console을 확인한 결과 path라는것을 열어보면 우리에게 어떤 element에서 클릭이 일어났는지 보여준다.

    //6편 삭제 버튼을 눌렀을때 데이터베이스에서도 지워야하는데 ->배열안에 id값을 부여해주고 랜덤한 아이디값을 줄것임.

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))
    //이게 없으면 삭제후 새로고침하면 삭제전 정보그대로있음.
    //배열에 뒤져서 li.id랑 같으면 없애고 다르면 남기고
    
    //해석: 내가 클릭한 li.id는 삭제되어야하고 다른 toDo는 남겨두고 싶다.
    //!== 비교 연산자 !==같으면 false 다르면 true  true기 때문에 남겨둔다
    //마지막:저장소에서 삭제 하는것
    //마지막실행: 삭제해도 배열에서 사라지지 않음 이유:id값이 number이고 li의 id를 console.log해보면 typeof(li.id) string이다
    //결론: li.id 는 string타입 toDo.id는 number타입임. 이둘이 다른게 되어서 아무것도 지워지지 않는것이다. 
    //우리가 남은 할일은 간단하다. 문자열을 숫자로 바꿔준다.
    //toDos = toDos.filter((toDo) => toDo.id !== li.id)를 toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)) 로
    //그다음 saveToDos를 한번더 불러줘야한다는데 이게왜?
    //저장소에서 삭제되야 새로고침되도 변하니까

    // 예시
//     const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]

    saveToDos();
};






//2편 시작
function paintToDo(newTodo) {
    //4.li태그 만들기
    const li= document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //5.button만들기 
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click",DeleteToDo);
    //6.button클릭했을때 삭제하는 DeleteTodo를 만듬.
    //5.***기억해야함 appendChild는 마지막에 놓여져야한다.
    
    li.appendChild(span);
    //4.부모객체.appendChild(자식)
    li.appendChild(button);
    //5.부모객체.appendChild(자식) point위에 span을 추가하고 button을 추가함
    toDoList.appendChild(li);
    //4.부모객체.appendChild(자식)
    //4.console.log(li);
    //4.newTodo는 toDoInput.value값이니까 저장된 텍스트를 불러옴
    //4.END 문제:삭제버튼이 없는것과 새로고침하면 없어지는것이 문제!
}







// 1편 끝
function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    //1.값을 비우기전에 그 값을 저장해보자. 그후에 *newTodo로 value값을 보냈기 때문에 그다음 value를 비워도 새로운변수에 할당한 값에 문제 없다. 
    toDoInput.value = "";
    //2.값을 입력후 엔터를 치면 비우기
    
    const newTodoObj = 
    {
    text:newTodo, 
    id:Date.now(),
    };
    toDos.push(newTodoObj);
    //6편 object로 만들고 object에 id를 저장할수 있게해줌
    // object에 id를 준다는건 이제 삭제 할 수 있다는 얘기임!

    //6편:여기에 object를 만들어도 되고 새 object를 만들어도됨 toDos.push({newTodo}); ->date.now는 1000분의 1초를 통해서 랜덤한 숫자가 나오는것 같음 object에 id와 text부여
    //toDos array를 가지고 와서 new Todo를 push 할 것. ->이것을 localStorage에 넣는것
    //*문제는 localStorage에 array를 저장 할 수 없다는것.->오직 텍스트만 저장가능
    paintToDo(newTodoObj);
    //위에 toDoInput.value의 값을 newTodo에게 주었고 입력값을 paintTodo 에 넣어서 호출
    //newTodoObj를 paint Todo에 있는 newTodo에 준다  그러면 newtodo = newTodoObj
    //그래서 li.id = newTodo.id가 가능하구나
    saveToDos();
}
toDoForm.addEventListener("submit",handleTodoSubmit);






//5편 시작
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //JSON.parse하면 string을 배열로 바꿀수 있다. 배열을 얻음.
    //6편 parsedToDos를 toDos에 저장하게 되면 더이상 빈값이 아닌 내가 입력한 값을 array에 저장하게된다.
    //또 다른 문제 삭제버튼을 누르고 새로고침 하면 다시 생긴다 화면에서는 삭제 했지만 localStorage에서는 지우지 않았기 때문
    toDos = parsedToDos;
    //배열이 시작할때 현재 toDos가 비어있다 그러나 우리는
    //비어있는 상태가아닌 저장된 모든값을가져와서 시작하고 싶음.
    parsedToDos.forEach(paintToDo);
    //7편 forEach 는paintTodo를 기본적으로 실행하고 forEach는 각각의 item을 준다  이젠 item이 object가 된다.

    //예시     const array1 = ['a', 'b', 'c'];


    // array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

    //이것 처럼 parsedToDos가 현재 사용자가 입력한값을 배열로 만듬.
    //그걸 forEach로 paintTodo함수를 실행 각각의 배열에 들어있는 사용자 입력값을
    //paintTodo를 실행하여 li button 등을 만들고 지우면 어쩌거저쩌거 만듬.




    //핵심:배열에 있는 각각의 아이템에 function을 실행
    //여기 있는 item은 곧 예를 들면 우리가 보내기 원하는 텍스트다.
}
/*
javascript는 각각의 배열에 function실행 할 수 있게 해준다?
parsedTodos.forEach를 하면 function을 실행하게 해준다 ->그 array에 있는 각각의 item에 대해서 실행 해준다.
*/

// function sexyFilter(){

// }
// [1,2,3,4].filter(sexyFilter)

// sexyFilter(4)

/*
7편 filter를 사용해서 array를 지우는게 아닌 새로운 array를 만들어서 제외하는것
filter는 forEach와 비슷하다. ->[1,2,3,4].filter(sexyFilter)  1,2,3,4에 sexyFilter가 차례대로 실행될것임.
다시 말하자면 filter는 sexyFilter에 1,2,3,4를 넣어서 부를거다 sexyFilter만 부르는게 아님 sexyFilter에 1,2,3,4를 넣게 될것임. ->sexyFilter의 함수는 반드시 true를
리턴 해야한다.만약 새 array에도 이 1,2,3,4를 포함하고 싶으면 만약 flase를 리턴 하면 그 item은 새 array에 포함되지 않을것이다.
[1,2,3,4].filter(sexyFilter) ->이 뜻은 javascript가 sexyFilter를 4번 부르는거다.매번 숫자는 다를것임.true를 리턴하면 js는 1을 유지한다. 2,3,4도 true면 유지됨
만약 3번째 단계에서 false를 리턴하면 js는 3빼고 1,2,4만 유지할것임.

*filter예시 true를 리턴하는 예시 -------

function sexyFilter(){return true}
결과값:undefined
[1,2,3,4,5].filter(sexyFilter)
결과값:[1,2,3,4,5] 해설:SexyFilter은 모두 true니까 모든 item이 유지되어야한다.
item과 노상관 js가 item을 보내겠지만 노 상 관~

*filter예시 false를 리턴하는 예시 ----------

function sexyFilter(){return false}
결과값:undefined
[1,2,3,4,5].filter(sexyFilter)
결과값:[] 비어있는 array가 만들어짐

결론= array의 item을 유지하고 싶으면 true를 리턴해야 되는걸 이해함.

(예제)를 만들어보자 3번을 지우고 싶다고 한다면? sexyFilter를 어떻게 만들어야 할까?

function sexyFilter(item){return item !==3} 

[1,2,3,4,5].filter(sexyFilter)

결과값:[1,2,4,5]

1.item을 저장할 공간을 매개변수에 넣는다
2.item이 3이 아니면 true를 return한다.

(예제2)
const arr = ["pizza","banana","tomato"] ->만약 banana를 지우고 싶으면 filter 함수를 어떻게 만들어야 할까?

답:
function sexyFilter(food){return food !== "banana"}
arr.filter(sexyFilter)

결과값:["pizza","tomato"]

sexyFilter함수가 할 일은 질문을 던지는것.혹은 item을 제외할 지

한단계 더 나아가기! 
(예제3)
const arr =[1234,5454,223,122,45,6775,334]

질문:여기서 1000보다 큰 수는 지우자.

function sexyFunction(potato) {return potato <= 1000}

arr.filter(sexyFunction)
->결과값:[223,122,45,334]

보충설명: javaScript가 array의 각 item을 sexyFunction의 첫번째 인자로 전달해줘라 ->potato는 각각의 배열 인자가 될 것임
이제 질문을 return할 것임 ->potato는 1000보다 작거나 같아야한다.
1000보다 큰 수를 모두 제외할 거다.

(실전예제3)
const todos = [{text: "b", id: 1649128926397},{text: "c", id: 1649128926696},{text: "d", id: 1649128927033}]

function sexyFilter(todo){return todo.id !== 1649128926397} 

설명:todo.id가 이 1649128926397 숫자랑 다른지 볼 것임. todo.id가 내가 지우고 싶은 id와 다른지 물어보는것임
만약 내가 삭제하고 싶은 id와 다르면 todo를 array에 그대로 둘것임

todos.sexyFilter ->2개만 나옴.

예제4:text를 삭제하는 방법 
const todos = [{text:"lalala"},{text:"lololo"}];

function sexyFilter(todo){
    return todo.text !=="lololo"
}
결과실행: todos.filter(sexyFilter) 
결과값: lololo가 지워짐.
설명:인자 이름todo는 뭘해도 상관없다 각각의 item들이 todo에 들어온다는것만 알면됨.
*/
