/*
wifi,위치,gps등 이코드 하나만 하면됨.
성공했을때의 함수와 실패했을때의 함수를 적는다. 설명:success와 error는 객체를 유일한 매개변수로 받는 콜백 함수이다.요점은 user의 위치를 얻는것임. 

내설명:
1.밑에 처럼 navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError); 를쓰면
onGeoOk와 onGeoError를 콜백함수로 만든다 onGeoOk에다가 첫번째 매개변수를 넣으면 object가 전달되고 console.log(매개변수)하면 
latitude와 longitude가 나온다. 그것을 position.coords.latitude과 longitude하고 변수를 만들어 넣고 console.log(lat,lon)하면 좌표가나온다

2.(lat,lon)을 적음으로써 나온 이숫자들을 장소로 바꿔줄 서비스를 사용해야된다.
API계정을 열어야한다. https://openweathermap.org/웹사이트로 이동 회원가입 

api에가서 api call 에있는 코드를 복사
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
lat에는 latitude lon에는 longitude숫자를 넣어준다
나의 lat :35.560627
나의 lon :129.296606
넣은 결과 https://api.openweathermap.org/data/2.5/weather?lat=35.560627&lon=129.296606&appid={API key}

다음은 API key ->openweathermap사이트에 가서 ->내 프로필 누르면 my APIkey있음.
나의 APIkey:18b0bbe2f60f20624b864347a54881fe
넣은결과: https://api.openweathermap.org/data/2.5/weather?lat=35.560627&lon=129.296606&appid=18b0bbe2f60f20624b864347a54881fe

{"coord":{"lon":129.2966,"lat":35.5606},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":291.26,"feels_like":290.17,"temp_min":291.26,"temp_max":291.26,"pressure":1016,"humidity":40,"sea_level":1016,"grnd_level":1010},"visibility":10000,"wind":{"speed":0.94,"deg":270,"gust":4.83},"clouds":{"all":100},"dt":1649298088,"sys":{"country":"KR","sunrise":1649278893,"sunset":1649324892},"timezone":32400,"id":1833747,"name":"Ulsan","cod":200}
코드를 준다 나에게 선물로 ㅜㅜ 감사합니다. 울산에 살고 구름은 어떤지등 다양한정보를 주네용~
3.코드작성 API_KEY를 선언해서 key를 넣자.

다음은 URL을 부르는 방법 javascript에서 
https://api.openweathermap.org/data/2.5/weather?lat=35.560627&lon=129.296606&appid=18b0bbe2f60f20624b864347a54881fe
이렇게 URL을 만들고 싶다. console.log밑에 적고 백틱으로 감싸! latitud를 geolocation에서 얻은 값으로 바꾼다. const url = `위에 주소`
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}` API,lat lon 변수를 할당함
console.log(url)한다. ->그러면 console에 나의 url이 뜹니다.

다음은 fetch를 사용해서 URL을 얻는다.
fetch(url);을 적는다. ->콘솔에 아무것도 나오지 않는다. ->network에 가면 WiFi에서 어떤일이 all을 보면 name에 나의 위치가 있다. 응답한것임.

다음은 화씨온도를 섭씨온도로 바꾼다.
API weather map에 가서 어떻게 바꿀수 있는지 확인해야 한다. 
1.네트워크 -> 응답한것 클릭하면 header클릭 하면 url이나온다.
https://api.openweathermap.org/data/2.5/weather?lat=35.5606268&lon=129.2966077&appid=18b0bbe2f60f20624b864347a54881fe
그리고 다시 생김새가(파일)우클릭으로 들어가서 url주소에 맨끝에 & units=metric으로 바꾼다. 
결과:https://api.openweathermap.org/data/2.5/weather?lat=35.5606237&lon=129.2965986&appid=18b0bbe2f60f20624b864347a54881fe&units=metric
화씨가 섭씨로 바뀌었다.
홍보
[youtube 클론코딩을보아라 javascript로 백엔드를 만드는법을 알려준다. ->fetch(url)이러한것들의 일어나는 원리를 알고 싶으면 꼭 들어라! challenge를 들으면 강의를 빨리 끝낼수 있다.]

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric` ->&units=metric 추가해줬다.
fetch는 promise다 ->promis는 당장 일어나지 않고 시간이 좀 걸린 뒤에 일어나는것. 
ex:서버에게 물어봤는데 서버가 응답하는데 5분 걸린다면 서버의 응답을 기다려야한다. 그래서 then을 사용해야한다  ->fetch(url).then();
이렇게 했을때 일어나는일: URL을 fatch하고 그 다음으로 response를 받아야한다. 그리고 response의 json을 얻어야한다.
fetch(url).then(response => response.json()); 클론 youtube에서 설명하는게 더 좋을것 같다. 강의가 길어지니까

json은 네트워크에서 보이는 코드들전체가 json이다. 그리고 내용을 추출했으면 data를 얻을것임
fetch(url).then(response => response.json()).then(data =>{
        console.log(data.name, data.weather[0].main)
    })

다음 콘솔창에 내 좌표를 얻어서 API로 DB에 질문을 던질것임.

fetch(url).then(response => response.json()).then(data =>{
        const name =data.name,
        const weather = data.weather[0].main;
        
    }); 변수에 할당한다음 div태그에 id는 weather
    다음! 
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        city.innerText =data.name;
        weather.innerText = data.weather[0].main;
        
    });
    다시 weather.innerText=`${data.weather[0].main}/${data.main.temp}`;

*/

const API_KEY ="18b0bbe2f60f20624b864347a54881fe";


function onGeoOK(position){

    const lat =position.coords.latitude;
    const lon =position.coords.longitude;
    // console.log("You live in",lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    // console.log(url)
    fetch(url)
        .then((response) => response.json())
        .then((data) =>{
        const weather =document.querySelector("#weather span:first-child");
        const city =document.querySelector("#weather span:last-child");
        city.innerText =data.name;
        weather.innerText = `${data.weather[0].main}/${data.main.temp}`;
        
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you");
}


navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

