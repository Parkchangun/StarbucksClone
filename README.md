![Netlify Status](https://api.netlify.com/api/v1/badges/9f2f756f-e1fc-48d9-9c07-b7d7433d8aaa/deploy-status)

# *__STARBUCKS CLONE CODING__*

스타벅스 클론 코딩 <br>
> 패스트캠퍼스 수강

[NetlifyLink](https://distracted-lumiere-69b58d.netlify.app)

## *__문자 인코딩 설정__*

```html
<meta charset="UTF-8"/>
```

- `UTF-8`: 초성, 중성, 종성으로 구분하여 문자를 작성함(권장)
- `EUC-KR`: 하나의 완성된 글자를 인식

## *__Viewport 렌더링 방식 설정__*

웹페이지가 화면(Viewport)에 표현되는 방식을 설정<br>
모바일 환경에서 적용됨

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- `width=device-width`: 화면의 가로 너비를 각 디바이스의 가로 너비와 동일하게 적용
- `initial-scale=1.0`: 화면의 초기 화면 배율 설정
- `user-scalable=no`: 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할 수 있는지 설정
- `maximum-scale=1`: 사용자가 화면을 확대할 수 있는 최댓값
- `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값

## *__The Open Graph protocol__*

웹페이지가 소셜미디어로 공유될 때 우선적으로 활용되는 정보 지정

[더 많은 오픈 그래프 속성 보기](https://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는~~~~" />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```

- `og:type`: 페이지의 유형
- `og:site_name`: 속한 사이트의 이름
- `og:title`: 페이지의 이름(제목)
- `og:description`: 페이지 간단 설명
- `og:image`: 페이지의 대표 이미지 주소(URL)
- `og:url`: 페이지 주소(URL)

## *__Twitter Card__*

웹페이지가 트위터로 공유될 때 우선적으로 활용되는 정보 지정

[더 많은 트위터 카드 보기](https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started)

```html
  <meta property="twitter:card" content="summary" />
  <meta property="twitter:site" content="Starbucks" />
  <meta property="twitter:title" content="Starbucks Coffee Korea" />
  <meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
  <meta property="twitter:image" content="./images/starbucks_seo.jpg" />
  <meta property="twitter:url" content="https://starbucks.co.kr" />
```

- `twitter:card`: 페이지(카드)의 유형
- `twitter:site`: 속한 사이트의 이름
- `twitter:title`: 페이지의 이름(제목)
- `twitter:description`: 페이지의 간단 설명
- `twitter:image`: 페이지의 대표 이미지 주소(URL)
- `twitter:url`: 페이지 주소(URL)

## *__Favicon__*

웹페이지를 나타내는 아이콘, 웹페이지의 로고 설정
> Favicon 이미지는 루트 경로에 있어야 한다!

`favicon.png`__를 사용할 경우__
```html
<!-- <link rel="shortcut icon" href="favicon.ico" /> -->
<link rel="icon" href="./favicon.png />
```

- `favicon.ico`: 64 x 64 px or 32 x 32 px or 16 x 16 px
- `favicon.png`: 500 x 500 px

### *__create .ico file__*

이미지를 업로드하면 손쉽게 `.ico` 파일 제작 가능

[iconifier.net](https://iconifier.net/)

## *__Reset.css__*

각 브라우저의 기본 스타일을 초기화함

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## *__Google Fonts__*

페이지에서 사용할 폰트를 가져올 수 있음

> 폰트 라이선스 확인 필수!

[Google Fonts](https://fonts.google.com/)


```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```

css 상속을 통한 폰트 적용

```css
body {
    font-family: 'Nanum Gothic', sans-serif;
}
```

## *__Google Material Icons__*

[Material Icons Site](https://material.io/resources/icons/?style=baseline)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```



```html
<div class="material-icons">upload</div>
```

## *__GSAP & ScrollToPlugin__*

[GSAP](https://greensock.com/gsap/) == 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리<br>
[ScrollToPlugin](https://greensock.com/scrolltoplugin/) == 스크롤 애니메이션을 지원하는 GSAP 플러그인

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js" integrity="sha512-IQLehpLoVS4fNzl7IfH8Iowfm5+RiMGtHykgZJl9AWMgqx0AmJ6cRWcB+GaGVtIsnC4voMfm8f2vwtY+6oPjpQ==" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js" integrity="sha512-nTHzMQK7lwWt8nL4KF6DhwLHluv6dVq/hNnj2PBN0xMl2KaMm1PM02csx57mmToPAodHmPsipoERRNn4pG7f+Q==" crossorigin="anonymous"></script>
```

[.to() 사용법](https://greensock.com/docs/v3/GSAP/gsap.to()) <br>
[GSAP Easing](https://greensock.com/docs/v2/Easing)

```js
gsap.to(el, time, option); //option: Object
// or
TweenMax.to(el, time, option);
```

```js
gsap.to(window, 0.7, {
  scrollTo: 0
});
```

## *__Swiper__*
[Swiper](https://swiperjs.com/) == 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적 슬라이드 라이브러리

[Getting Started With Swiper](https://swiperjs.com/get-started)


```html
<!-- in HEAD -->
<link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

<!-- in BODY -->
<div class="swiper-container">
  <div class="swiper-wrapper">
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
</div>
```

[Swiper API](https://swiperjs.com/swiper-api)에서 옵션 확인 가능함

```js
new Swiper(el, option);
```

```js
new Swiper(`.swiper-container`, {
  direction: `vertical`,
  autoplay: true,
  loop: true
});
```

## *__Youtube API__*

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)

유튜브 영상이 출력될 위치에 요소 생성

```html
<!-- in HEAD -->
<script defer src="./js/youtube.js"></script>

<!-- in BODY -->
<div id="player"></div>
```

`onYouTubePlayerAPIReady` 함수 이름은 Youtube IFrame Player API에서 사용하는 이름이기에 다르제 지정하지 말 것!<br>
함수는 <u>전역 함수</u>로 등록!

[플레이어 매개변수(playerVars)](https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5&hl=ko#Parameters) == 옵션 확인

```js
// Youtube IFrame API를 비동기로 로드합니다.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    videoId: 'An6LvWQuj_8', // 재생할 유튜브 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) {
        event.target.mute(); // 음소거!
      }
    }
  });
}
```

## *__ScrollMagic__*

[ScrollMagic](https://github.com/janpaepke/ScrollMagic) == 스크롤과 요소의 상호 작용을 위한 js 라이브러리 <br>
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지 확인할 때 사용함

[ScrollMagic API](http://scrollmagic.io/docs/)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js"></script>
```

```js
new ScrollMagic
  .Scene({ // 감시할 장면(Scene)을 추가
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.8 // 화면의 80% 지점에서 보여짐 여부 감시
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
```

## **__Lodash__**

[Lodash](https://lodash.com/) == 다양한 유틸리티 기능을 제공하는 js 라이브러리 <br>

[Lodash API](https://lodash.com/docs/4.17.15) <br>
[Lodash throttle](https://lodash.com/docs/4.17.15#throttle)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```

