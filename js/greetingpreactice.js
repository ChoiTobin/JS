
//연습장

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")
//1.document에 접근 한다.


const HIDDEN_CLASSNAME = "hidden";
//2.숨김
const USERNAME_KEY="username"
//3.키를 변수에 넣어준다 값을 받아낼수 있음
//변수지정




function onLoginSubmit(event){
    event.preventDefault();
    //6.기본동작을 막아준다. 기본동작이 submit으로 넘어가는것
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //7.submit을 누르면 hidden을 다시 추가 해서 폼을 안보이게함
    localStorage.setItem(USERNAME_KEY,loginInput.value)
    //8.저장소에 submit을 클릭후 입력받은 key값과 value값을저장
    paintGreetings(); 
    //9.함수 소환
}



function paintGreeting (){
    const username = localStorage.getItem(USERNAME_KEY);
    //10.값을 꺼내서 변수에 저장 
    greeting.innerTEXT = `Hello ${username}`;
    //11.값을 입력
    greeting.classList.remove(HIDDEN_CLASSNAME); 
    //12.h1의 hidden을 지우면서 화면을 보인다.

}


const savedUsername = localStorage.getItem(USERNAME_KEY);
//3.값을 저장하고 변수


if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //4.만약 사용자 이름이 없으면 form에 적용한 hidden을 제거해서 폼을 보야줌
    loginForm.addEventListener("submit",onLoginSubmit);
    //5.만약 submit을 누르면 onLoginSubmit함수로 이동
}else{
    paintGreeting()
}




//지금 h1이랑 form이 디스플레이 none상태
