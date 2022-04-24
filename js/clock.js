// const clock = document.querySelector("h2#clock")
const clock = document.querySelector("td#clock")
// 문서에 들어간다.

function getClock() {
    const date = new Date();

    Date.prototype.amPm = function() {
        let h = this.getHours() < 12 ? "오전" : "오후";
        return h;
        }
    let amPm = date.amPm();
    //코드출처am pm 맞추는것
    //https://gocoder.tistory.com/2324#:~:text=%EC%82%AC%EC%9A%A9%ED%95%98%EB%8A%94%20%EB%B0%A9%EB%B2%95%EC%9D%80%20%EC%95%84%EB%9E%98%EC%99%80,let%20amPm%20%3D%20today.amPm()%3B
    
    //new Date()라는 것을 date 변수에 넣어서 console로 찍어냄
    const hours   = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${amPm} ${hours}:${minutes}:${seconds}`;
    

    

}
getClock()
setInterval(getClock,1000);




//16
// function getClock() {
//     const date = new Date();
//              Date object는 네가 이걸 호출 하는 당시의 현재 날씨랑 시간을 알려준다
//     //new Date()라는 것을 date 변수에 넣어서 console로 찍어냄
//     const hours   = String(date.getHours()).padStart(2,"0");
//     const minutes = String(date.getMinutes()).padStart(2,"0");
//     const seconds = String(date.getSeconds()).padStart(2,"0");
//     clock.innerText = `${hours}:${minutes}:${seconds}`;
// }
// getClock()
// setInterval(getClock,1000);
//setInterval이 없다면 한번만 실행되고 끝날것임.


//15.new Date().getHours() ->하면 number가 나옴 String(new Date().getHours()) ->string으로 바뀐다. ->그러면 .padStart(,)사용이 가능해진다.
//14. date.getHours()에는 padStart()를 쓸수 없다 왜냐하면 getHours는 number이고 padStart는 string에 쓸 수 있는 function임 ->text를 number로 바꾸자!

// function getClock() {
//     const date = new Date();
//     //new Date()라는 것을 date 변수에 넣어서 console로 찍어냄
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     clock.innerText = (``)
// }

// getClock()
// setInterval(getClock,1000);

//padStrart() ->는 네가 가지고 있는 string을 보다 길게 만들어야 할때 사용하는거임. 원하는 만큼의 길이가 아니면 string의 앞쪽에 문자를 끼워넣는다.
//13."hello".padStart(20,"x") ->20줄이 되야하는데 아니면 x를 넣어줌 20줄만큼
//12.padStart() ->string에 쓸수 있는 function이다. ->console 창에 "1".padStart(2,"0") 해설 첫번쨰공간에(padStart)(조건 첫번째칸:길이가 2여야하고 두번쨰칸:아닐경우에는 0이들어간다.)
//11.js가 적어도 문자를 두개를 가지길 원한다. 
//10.다음 버그수정 초단위에서 한자리가 아닌 두자리로 나왔음 좋겟다 ex 1 2 3 -> 01 02 03 string문자 두개로 채우는것

//9.website가 load되자마자 함수 getClock()를 실행하고 또 매초마다 다시 실행되도록 해본다. ->innerText로 바꿈 콘솔자리를

// const clock = document.querySelector("h2#clock")
// // 문서에 들어간다.
// function getClock() {
//     const date = new Date();
//     //new Date()라는 것을 date 변수에 넣어서 console로 찍어냄
//     clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// }
// getClock() 
//->이렇게 넣으면 바로 현재시간 볼 수 있고 호출 안하면 00:00:00이 나온후 시간이 현재시간이 나옴 
//왜냐하면 즉시 한번 부르고나서 interval로 나오기 때문 
// setInterval(getClock,1000);


//8. 

//function getClock() {
//     const date = new Date();
//     //new Date()라는 것을 date 변수에 넣어서 console로 찍어냄
//     console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
// }
// setInterval(getClock,1000);

//7.그럼 배웠던걸 종합해서 어떻게 해야할까? 계속해서 보여주려면 우리는 Interval을 써야함
//6.date.getDate() 일자를 가져옴 date.getminute등등 시간을 가져옴 new Date().getSeconds() 초를 가져옴 new Date().getHours 시간을 가져옴
//5.그럼 이제 시간과 분을 보여주는것을 할것임. 우선 console창에 Date 해보고 new Date() 라고 하면 오늘 날짜를 가져옴. const date = new Date();
//4.setTimeout ->먼저 호출하려고하는 function넣기 setTimeout(sayHello,5000) ->얼마나 기다릴지 ms 단위로 넣어주기 차이점:setInterval은 5초마다 뜨고 setTimeout은 한번만 호출
//3. setInterval(sayHello,5000) ->확인해보면 console창에 5초후 hello가 뜬다. 계속해서 5초마다 뜸 콘솔에. 결론은 함수를 5초마다 실행하는것
//2.setInterval()이다 ->두개의 argument를 제공받는다 첫번째는 네가 실행하고자 하는 function 두번째는 arument 호출되는 function 간격을 몇 ms(milliseconds)로 할지 쓰면 됨 1000ms ->1초
//1.함수를 2초마다 실행하는 interval실행 ->서버를 확인한다던가,서버가 매2초마다 주식 시장 api를 확인해야한다던가 또는 5초에 한번씩 일어나야하는 작업 이런 기능을 제공하는tool이
