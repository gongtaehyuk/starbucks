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

// footerYear
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();