// home영역 타자효과
const target = document.querySelector('#textTyping');
const string = '신입 웹퍼블리셔 강민아입니다.';
const stringArr = string.split('');

function textTyping(selectString) {
    if (selectString.length > 0) {
        target.textContent += selectString.shift();
        setTimeout(function() {
            textTyping(selectString);
        }, 80);
    }
}

textTyping(stringArr);


// menu modal 구현
const menuIcon = document.getElementById('menuIcon');
const menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', function() {
    menuList.classList.toggle('modal');
})


// 퍼블리싱영역 슬라이드 구현
const slides = document.querySelector(".publishingSlider");
const slide = document.querySelector(".slide");
const slideArr = document.querySelectorAll('.publishingSlider li');
let currentId = 0;
const slideCount = slideArr.length;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slideWidth = Number((getComputedStyle(slide).width).replace('px',''));
const slideMargin = Number((getComputedStyle(slide).marginRight).replace('px',''));
console.log(slideMargin);

// 새로 만든 slide를 합한 width를 구하기
function updateWidth() {
    let currentSlides = document.querySelectorAll('.slides li');
    const newSlideCount = currentSlides.length;
    const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
    
    slides.style.width = newWidth;
}

// 새로 만든 slide가 아닌 기존 slide를 중심으로 만들기
function setInitialPos() {
    let initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
    slides.style.transform = 'translateX(' + initialTranslateValue + 'px)';
}

// 기존 slide 앞 뒤로 똑같은 slide를 더 추가해주기
function makeClone() {
    for (let i = 0; i < slideCount; i++) {
        let cloneSlide = slideArr[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for (let i = slideCount -1; i >= 0; i--) {
        let cloneSlide = slideArr[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }

    updateWidth();
    setInitialPos();
    setTimeout(function() {
        slides.classList.add('animate');  
    }, 100);
}

makeClone();

// 무한 loop 슬라이드 구현
function moveSlide(num) {
  slides.style.left = -num * (slideWidth + slideMargin) + "px";
  currentId = num;
  if (currentId === slideCount) {
      setTimeout(function() {
        slides.classList.remove('animate');
        slides.style.left = '0px';
        currentId = 0;
      }, 500);

      setTimeout(function() {
          slides.classList.add('animate');
      }, 600);
  }
}

// 버튼 클릭 시 이동하기
prev.addEventListener("click", function () {
    moveSlide(currentId - 1);
});

next.addEventListener("click", function () {
    moveSlide(currentId + 1);
});