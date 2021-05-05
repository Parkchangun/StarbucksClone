"use strict";

const badgeEl = document.querySelector(`header .badges`);
const toTopEl = document.querySelector('#to-top');
// _.throttel(functhion, ms) --> ms 시간마다 function 실행 == 스로틀링
window.addEventListener(`scroll`, _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
    //배지 숨김
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: `none`
    });
    // 위로가기 활성화
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  }
  else {
    //배지 보임
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: `block`
    });
    // 위로가기 비활성화
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
},300)
);

toTopEl.addEventListener('click', () => {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});



const fadeEls = document.querySelectorAll(`.visual .fade-in`);
fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7, 1.4, 2.1, 2.8초 뒤 애니메이션이 실행
    opacity: 1
  });
});


// new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  // 반복할겨? 마지막 슬라이드 --> 첫번째 슬라이드
  loop: true
});

new Swiper('.promotion .swiper-container', {
  //default이므로 생략 가능
  direction: 'horizontal',
  //한번에 보여줄 슬라이드 개수
  slidesPerView: 3,
   //슬라이드 사이 여백
  spaceBetween: 10,
   //1번 슬라이드 가운데 보이기
  centeredSlides: true,
  loop: true,
  // 객체 데이터로 할당 시 추가적 옵션 부여 가능
  autoplay: {
    delay: 5000
  },
  pagination: {
    //페이지 번호 요소 선택자
    el: '.promotion .swiper-pagination',
    //사용자의 페이지 번호 요소 제어
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});

new Swiper('.awards .swiper-container', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  }
  else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    //y축
    y: size,
    //-1 == 무한반복
    repeat: -1,
    //한번 재생된 애니메이션 반대로 재생
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach((spyEl) => {
  new ScrollMagic
    .Scene({
      // 보여짐 여부를 감시할 요소 지정
      triggerElement: spyEl,
      
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});