const images = ["0.jpg","1.jpg","2.jpg"];
//array 생성
const chosenImage = images[Math.floor(Math.random() * images.length)];
//랜덤한 숫자를 가져다줌.

const bgImage = document.createElement("img");
//요소를 만들고
bgImage.src =`img/${chosenImage}`;
//src에 스트링으로 생성해서

document.body.appendChild(bgImage);
//body태그에 img를 삽입. prepend는 가장위 append는 가장 밑

// footer 바탕



//요소만들기 ,src에 스트링 생성 , document위치 확인

//이미지파일 하려면 ./이안에 있어야해서 파일 옮겼다 이렇게 안하면 하는방법 모름..~

//5.이미지를 추가 하기 위해선 javascript가 필요하다. -> 1배경화면이 될 수 도 있고 2배경화면이 될 수도 있으니까
//4.우린 항상 Html을 먼저 작성 하고 javascript를 사용해서 작성한 html을 다뤘었따. 한번도 javascript에서 뭔가를 생성해서 그걸 html에 추가 해본 적이 없었다.
//3. 
//   const images = [
//     "1.jpeg",
//     "2.jpeg",
//     "3.jpeg"
// ]
//  const chosenImage = images[Math.floor(Math.random()*images.length)]
//  console.log(chosenImage)
//  콘솔을 새로고침하면 랜덤한 배경이 나옴 콘솔에.
// 2.images를 랜덤하게 한다.
// 1.이미지를 배열에 저장 img폴더 안에 있는 이미지들이랑 Array안의 이름이 같게 만든다.


