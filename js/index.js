//이미지 슬라이드(이미지 페이드인 방식 교체 cont_01.jpg ~ cont_07.jpg)
const slide = document.querySelector("#imgSlide");
const prev = document.querySelector("#imgSlide .prev");
const next = document.querySelector("#imgSlide .next");

let no = 1;  //초기 슬라이드 번호인 cont_01.jpg 파일에서 1을 가리킴
setInterval(() => {
    const $hover = slide.classList.contains("hover");  //true("hover"라는 클래스명이 존재), false("hover"라는 클래스명이 없을 때)
    console.log($hover);
    if($hover == true){  //마우스가 슬라이드 이미지 위에 있을 때
        //이미지 변경하지마
    }else{  //마우스가 슬라이드 이미지 밖으로 빠져나갔을 때
        no++; //2,3,4,5,6,7,8(X->1)
        slide.style.backgroundImage = `url(./img/main_bnr_0${no}.png)`;  //마지막 이미지가 cont_07.jpg
        if(no == 2){  //한계점에대한 조건문을 건다.
            no = 0; // 다음번 반복문이 실행될 때 no++ => no = 1 (cont_01.jpg를 불러올 수 있다.)
        }
    }
}, 3000);
//이미지 슬라이드에 마우스 오버시 일시정지 기능을 부여(UX 측면 고려대상)
slide.addEventListener("mouseover", () => {
    slide.classList.add("hover");
});
slide.addEventListener("mouseout", () => {
    slide.classList.remove("hover");
});


//이전 화살표(좌측) 클릭시
prev.addEventListener("click", (evt) => {
    evt.preventDefault();  //이벤트에 의한 새로고침되는 것을 방지
    no--;  //1->0(x->7)->6->5
    if(no == 0){
        no = 2;
    }
    slide.style.backgroundImage = `url(./img/main_bnr_0${no}.png)`;
});


//다음 화살표(우측) 클릭시
next.addEventListener("click", (evt) => {
    evt.preventDefault();  //이벤트에 의한 새로고침되는 것을 방지
    no++; //2,3,4,5,6,7,8(X->1)
    slide.style.backgroundImage = `url(./img/main_bnr_0${no}.png)`;  //마지막 이미지가 cont_07.jpg
    if(no == 2){  //한계점에대한 조건문을 건다.
        no = 0; // 다음번 반복문이 실행될 때 no++ => no = 1 (cont_01.jpg를 불러올 수 있다.)
    }
});


