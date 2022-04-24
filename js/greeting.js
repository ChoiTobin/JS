const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 로그인폼 x버튼 시작
const hiddenButton = document.querySelector(".hiddenButton");
const loginKingHidden = document.querySelector(".loginKing");
// 로그인폼 x버튼 끝

// 명언 부분 확인버튼
const QuoteOkButton = document.querySelector(".OkButton");
const AllHiddenOk = document.querySelector(".OKhidden");
//명언 부분 확인버튼 끝

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username";




function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,loginInput.value);
    paintGreetings();
}
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText =`반갑습니다 ${username} 님 `
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
//show the form
loginForm.classList.remove(HIDDEN_CLASSNAME);
loginForm.addEventListener("submit",onLoginSubmit);
}else{//정보가 있다면 
    paintGreetings()    
}



//login 확인버튼 시작
function AllHidden(){
loginKingHidden.classList.add(HIDDEN_CLASSNAME);
}
hiddenButton.addEventListener("click",AllHidden);
//login 확인버튼 끝

// 챌린지 추가 quote 확인 히든
function hiddenOk(){
AllHiddenOk.classList.add(HIDDEN_CLASSNAME);

}
QuoteOkButton.addEventListener("click",hiddenOk);


//localstorage.getItem("username")이라고 하니까 username이 키 이고 로로가 키값이다.
//햇갈리던 부분 localStorage.setItem(USERNAME_KEY,loginInput.value)에서 USERNAME_KEY가
//key이고 오른쪽이키의 값이다 그러니 localStorage.getItem(USERNAME_KEY)를 하면 값을 가져온다 값은 loginINput.value 



//63.localstorage에 유저정보를 입력받는걸 아니까 인자들을 지워줘라? const username = localStorage.getItem(USERNAME_KEY);을 통해서 username을 찾도록 작성 그러니가paintGreeting함수 안에 다만들어놨으니까 인자를 받을 필요가 없다 그래서 다 인자 변수 다뺸것인ㅁ
//62.결국 username을 typedusername으로 바꿔서 덜헷갈리게만듬. 그러니까 paintGreeting(typedUsername)과 (savedUsername)은 username을 서로 다른곳에서 인자를 받는것임.
//61 paintGreeting(username)을 onLoginsubmit함수에도 넣어준다. 그러면 username은 const username =loginInput.value를 받고 있는 함수에 들어가기 때문에 영향을 받는다
//60 paintGreeting을 호출한다 else에 paintGreetings(savedUsername)  ->savedUsername이 username의 값으로 가기 때문에 성사된다.
//59 ->username을 매개변수로 넣어주는데 위에 const username과 별개의 함수내부의 변수로 인식된다
// function paintGreetings(username){
//     greeting.innerText =`Hello ${username}`
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// } 
//58.문제는 똑같은 동작을 두 번 반복하고 있다는것이다. greeting안에서 innerText랑 classList.remove를 반복한다. ->그래서 어쩌면 이걸 함수로 만드는게 나을수도 있다고 생각했다.
//57.이렇게되면 이제 유저정보를 기억하는것이된다.
//56. else에 h1에 greeting을 가지고와서 hidden을 지운다 greeting.classList.remove(HIDDEN_CLASSNAME); greeting에 텍스트를 넣어준다 greeting.innerText =`Hello ${savedUsername}`
//55.form태그에 hidden을 넣어서 애초에 안보이게 만들어준다. ->그러면 표시되지 않음. 그다음 if 문에 null 이면 loginForm.classList.remove(HIDDEN_CLASSNAME) 그리고 밑에 loginForm.addEventListener("submit",onLoginSubmit); 넣어준다 요약하자면 정보가 없으면 폼을 보여주고 저장하게끔 하고 정보가 있으면 안보여주고 넘어가는
//54.오타 방지를 위해서 const USERNAME_KEY ="username";을 만들어준다 이유는 string으로 작성하다가 오타가나면 자바스크립트는 이걸 지적하지 않기 때문. 변수명은 자바스크립트가 지적해준다.
//53.if문을 통해서 savedusername이 null이라면 form을 보여주고 안보여주고 를 구분한다.
//52.const savedUsername = localStorage.getItem("username");
//console.log(savedUsername);하면 좋은소식 null값이나옴
//51.localstorage에 유저정보 유무를 확인한다. 어떻게 확인? 콘솔에->localstrage,getItem("username") ->있으면 저장된값이 나오고 없으면 null값이 나온다.
//50.조건 localstorage에 유저정보가 있으면 form을 보여주면 안되고 없으면 form을 보여주기 
//#4.6시작 3.30일
//#4.5끝  3.29일
//49.그런데 아직까지도 새로고침하면 form이 표시되고있다 이건 우리가 바라는게 아님!!! 그래도 이제는 유저명은 기억하고 있다. ->local storage에 username이 존재하는지 확인하고 form을 표시하지 않을것 바로 h1이 올거고 localsotrage에 유저정보가 없다면 form이 먼저 표시되도록 할것임.
//48.이제 할일은 유저가 이름을 제출 할때 그걸 저장해주면됨.->localStorage.setItem("username",username) 함수안에 적고 key와 value값을 적는다. "user"은 저장될 아이템 이름,username은 변수다
//47.console 창에 localStorage.getItem("username")하면 nico가 나온다. 지우는방법:localStorage.removeItem("username") ->application으로 가보면 삭제 되있음
//46.setItem을 활용하면 local storage에 정보를 저장 할 수 있다.  console에 localStorage.setItem("username","nico")->이 한줄의 코드를 실행하면 이제 우리의 DB(45.있던것)에는 새로운항목이 있다.
//45.local sotrage는 우리가 브라우저에 뭔가를 저장 할 수 있게 해준다. 그래서 나중에 가져다 쓸수 있음. 개발자도구 브라우저 >>표시 누르면 ->application으로 가서 local storage가 있을것임. 추후에 이것저것 저장하기 시작하면 여기가 바뀌는걸 보게될거다.
//44.value를 저장하는 방법을 배운다. user에게 매번 질문하기에는 번거로우니까 -> 우리가 브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능이 존재함. ->그 API의 이름은 local storage다 
//43.문제는 우리가 유저를 알수 있는 방법이없다 새로고침 할 때마다 새로 로그인 해줘야 된다. 새로고침할때도 form볼 필요없이 이름이 저장되어 있으면 좋겠다.
//42.2개의 string을 합치는법 "Hello" + username; -> `Hello ${username}`;
//41.const HIDDEN_CLASSNAME = "hidden"을 추가 한다. 일반적으로 string만 포함된 변수는 대문자로 표기 하고 string을 저장하고 싶을때 사용한다.
//40.이렇게 실행하면 form은 없어지긴하나 h1에서 hidden을 빼는걸 깜빡했다. -> greeting.classList.remove("hidden")으로 제거해준다. 여기서 hidden을 두번 사용하니까
//39.const greeting=document.querySelector("#greenting")한다. 그다음 h1안에다 greeting에있는 텍스트를 추가한다. greeting.innerText="Hello"+username;
//38.그럼 이제 submit을 하면 새로고침을 막고,form이 hidden이 되고,유저의 이름을 변수로 저장해주고 그이름은 h1안에 넣어준다. h1에 id값 greeting을 넣어준다.app.js로 돌아와서 이 id를 찾아준다
//37.HTML에 h1을 form 밖에 적고 빈칸을 둔다음 class명을 hidden으로 둔다. 그다음 form은 숨기고 h1은 표시되도록 한다. 하지만 h1에 표시할 텍스트가 있을때만 표시되도록한다.
//36. loginForm.classList.add("hidden") 을 통해서 이름을 입력하면 form은 사라지고 입력값이 console에는 기록한다.
//35. const username = loginInput.value 유저이름 저장해주기.
//34.Css에 hiddeen이라는 classname 만들기. .hidden{display:none}해주기 html form태그에 class명 hidden해주고. 화면에서 완전히 사라짐 html에 hidden없애고
//33.다시 a태그 관련 없애고 유저가 이름을 제출하면 클릭했을때 form 자체를 없애자.첫번째 방법은 HTML자체를 없애는것 두번쨰 방법은 CSS를 이용해서 숨기는것.
//32.#4.3 a태그로 prevent default 연습 끝 다시 #4.4부터 form으로 연습!
//31.event의 내부를 살펴보자! ***다시 반복*** addEventListener안에 있는 함수는 직접 실행하지 않는다.  ->내가 하는게 아닌 브라우저가 해주는것!,브라우저는 실행만 시켜주는것이 아니라 event에 대한 정보도 담아줄것임.
//30.event.preventDefault();해준다 그 후 console.dir(event)를 해줘서 내부를 보자. 그전에 클릭해봐도 넘어가지 않는걸 알수 있다~!!!!WOW
//29.handleLinkClick에 매개변수 넣어주고 console.log에 매개변수 넣어주고 클릭하면 js가 첫번째 매개변수에 제공하는 정보가 담긴다 그치만 결국또 넘어가기 때문에 
//28.그렇지만 그러한 기본동작을 막아줘야할때가 있다는 사실.!!가끔은 뭐가 클릭이 됬고 어디가 클릭됬는지 정보를 알고 싶을때가 있다. js는 함수를 실행시킬뿐만아니라 그함수에 첫번째 인자로 object를 넣어줄것임 ->이 object에는 방금 일어난 event에 대한 여러 정보가 담겨있다.
//27.eventlistener를 클릭하면 js는 누군가 링크를 클릭할때,함수를 실행시키게된다.->내가 실행시키는게 아니다 handleLinkClick()으로 호출하는게 아님. 실행하는건 js의 몫이다.
//26.querySelector a태그 찾고 addEvent click 만들어주고 함수소환 그리고 alert로("clicked")해주는데 alert가 page가 다른동작을 하지 못하도록 막고있다.ok를 눌러야 기본동작이 실행된다
//25.form의 기본동작은 submit이였다. 링크의 기본동작은 홈페이지 이동인데 그걸 막아볼것임.
//24.form관련한것들로부터는 잠깐 쉬어가기
//23.막는다는 표현이 이해가 되지 않을것이기 떄문에 링크를 막는다는것을 보여줌으로써 이해시키겠다 #4.2 끝
//22.preventDefault를 추가함으로써 새로고침되는 그런 기본동작을 막고 있다.그런 다음 console.log(loginInput.value)를 하면 새로고침이 되지 않는다.
//21.콘솔창에 다양한정보가 뜬다. 이렇게해서 모든 event 요소에 첫번째 argument는 지금막 벌어진일들에 대한 정보가 될것이다.
//20.어떤 정보를 브라우저가 가지는지 알기 위해서 tomato.preventDefault(); 신비한 코드를 한 줄 추가한다 인자값에 임의의 매개변수 tomato를 넣은뒤 console.log(tomato) 하기
//19.이벤트가 발생할때 브라우저는 네 function을 호출하게 되는데, onLoginSubmit()이렇게 비어있는채로 호출하는게 아니고 onLoginSubmit(xxxxx)<--처럼 추가적인 정보를 가진채로 호출할것임.
//18.onLoginSubmit()이것을 더하면 브라우저가 보자마자 자동으로 이 함수를 실행시켜버릴것임.
//17.여기서 브라우저는 원래 작동하는게 엔터를 누르거나 submit을 누르면 새로고침하게 되있는데 그걸 막아줘야한다
//16. 필요한것은 loginform이다 그렇기 떄문에 querySlector을 button에서 loginform으로 바꿈. 그다음 add event 클릭이 아닌 submit을 감지하는 submit event만들기 그러면 입력누르면 사라진다. 
//여기까지 검수완료 나중에 올리기 #4.1에 
//15.but form이 submit될때마다 새로고침이 되기 때문에 이것은 우리가 원하는게 아니다. 그러한 문제 때문에 form이 submit 되는걸 막아줄것임
//14.*규칙 form안에 input을 쓰고 엔터나 submit을 누르면 자동으로 제출됨. click이 필요없고 form을 submit하는것이 중요.->브라우저가 새로고침 하지 않고 user정보를 저장하도록 하고싶은것
//13.12처럼 html요소에 submit을 넣었기 때문에 더이상 addEventListner가 필요하지 않다. 입력후에 클릭이 아닌 엔터를 눌러도 form은 submit이 되기때문  *반드시 form안에 input을 넣어야함
//12.html에가서 button을 없애고 input type을 submit value값에 login을넣는다 <input type ="submit" value ="Log In"/>
//11.현재 필드값을 입력하지 않으면 요청이 들어오고 문자는 15자 이상을 쓸수 없게됨. 그리고 입력을하고 버튼을 누르면 새로고침이 실행되고 값이 사라짐.
//10.if else 문은 선호하는 방식이 아니라서 지우고 html에 input 창에 requird를 적고 maxlength="15"를 적는다. if else 문 없에고 username에 대한 값을 console.log에 넣는다 아직 username을 받는단걸 확인 하기 위해
// 9.username.length를 통해서 string의 길이를 구한다. > 15를 통해서 username의 길이가 15보다 길다면이라는 조건설정을 해준다.
// 8.문자를 입력하지 않았을때 please wirte your name 이라 하고 문자를 입력했는데 15글자를 넘어서면 안됨 그렇담 string의 길이를 어떻게 알 수 있을까? ->
// 7.console.log를 유저가 볼 수 있게 alert로 바꾸자
// 6.console.log("hello",loginInput.value)를 const value = loginInput.value로 변수에 할당 해준다. + if 문을 통해서 value값이 없을떄 다음과같이 행동.
// 5.username의 유효성 검사 뜻 -> 조건에 유효한지 검사 비어서도 안되고 너무 길어서도 안되는 문자를 만든다. 
// 4.("hello",loginInput.value)를 통해서 (hello loginInput.value값을 얻는다) ->단 hello를 한후 값을 입력안하면 아무것도 뜨지 않음 이것을 if else를통해 해결해보자
// 3.클릭했을때  함수를 쓰고 loginInput에 대한 value값을 얻는다. value값이란 input창에 다다다다적으면 다다다다라는 값이 나옴. console.log(loginInput.value)
// 2.dir을 통해서 loginInput의 내부를 보여준다
// 1.클릭 이벤트를 통해서 클릭에 대한 작동이 됨
//console.dir(loginInput) ->console.log(loginInput.value)

//모르는 지식
/* <input> 태그의 required 속성은 폼 데이터(form data)가 서버로 제출되기 전 반드시 채워져 있어야 하는 입력 필드를 명시합니다.
required 속성이 제대로 동작하는 <input> 요소의 type 속성값은 다음과 같습니다.
- checkbox, date, email, file, number, password, pickers, radio, search, tel, text, url
required 속성은 불리언(boolean) 속성입니다.
불리언 속성은 해당 속성을 명시하지 않으면 속성값이 자동으로 false 값을 가지게 되며, 명시하면 자동으로 true 값을 가지게 됩니다. */