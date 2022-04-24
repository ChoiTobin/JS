const quotes = [
    {
        quote:"Fail early,fail often,but always fail forward",
        author:"-rorobin-",
    },{
        quote:"It's hard to beat a person who never gives up.",
        author:"-Babe Ruth-",
    },{
        quote:"It's waste of time to dwell on this matter anymore.",
        author:"-rorobin-",
     }
    //{
    //     quote:"명언4",
    //     author:"토빈",
    // },{
    //     quote:"명언5",
    //     author:"토빈",
    // },{
    //     quote:"명언6",
    //     author:"토빈",
    // },{
    //     quote:"명언7",
    //     author:"토빈",
    // },{
    //     quote:"명언8",
    //     author:"토빈",
    // },{
    //     quote:"명언9",
    //     author:"토빈",
    // },{
    //     quote:"명언10",
    //     author:"토빈",
    // }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];


quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;




// quote.innerText = todayQuote.quote;
// author.innerText = todayQuote.author;
//console.log(quotes[Math.floor(Math.random()* quotes.length)]); -> 
//명언을 추가하면 여기 있는 숫자의 개수도 기억해야한다..귀찮아 우린 프로그래머잖아~Array의 길이가 얼마나 긴지 알아내자
//console.log(quotes[Math.floor(Math.random()*10)]);
//결론 floor을 사용해서 소수를 내려줌 Math.floor(Math.random()*10)
//8.ceil ->천장까지 1.1은 2가됨 그게다임 1.0만 1이될수있다. 1.01만됟도 2를 반환함 floor은 다내려준다 1.9면 1 1.8도 1 
//7.Math.round(1.1) ->이렇게 하면 결과값이 1이나옴 소수점을 반올림해서 정수로 나타낸다 1.5를 하면 2가 나옴.
//Math.모듈 -> Math.random() *10 을 하면 0~10의 숫자들을 얻을수 있다. 그치만 소수점이 나온다! 그럴떈?
//6. 0부터 9
//console.log(quotes[0-9]);
//5.마지막 선택법
//console.log(quotes[10 - 1]);
//4.첫번째로 Array안에 있는 element에 어떻게 접근 하느냐?
//console.log(quotes[0]); 0부터 읽으니까 Array는 컴퓨터가 마지막을 선택 하려면 1을 뺴서 9를 해야함 10개니까.

//3.const author = document.querySelector("#quote span:last-child"); 마지막 span을 가져옴
//2.const quote = document.querySelector("#quote span:first-child") 첫번째 span을 가져옴

//1.object형태로 quote에는 명언 text author에 text내용