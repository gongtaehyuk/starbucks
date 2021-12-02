// 돋보기 클릭 변수
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 돋보기 클릭
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});
// 돋보기 클릭(포커스), 클래스(속성)추가
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
// 돋보기 클릭(블러), 클래스(속성)해제
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


// 스크롤 배지
const badgeEl = document.querySelector('header .badges');

// lodash (_.throttle 기능) 추가
// _.throttle(함수, 시간)
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
  }
}, 300));