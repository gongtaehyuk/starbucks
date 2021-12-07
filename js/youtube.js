  // Youtube Iframe API를 비동기로 로드 합니다.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 함수는 API 코드 다운로드 후 <iframe> (및 유튜브 플레이어)를 생성합니다.
  function onYouTubeIframeAPIReady() {
    new YT.Player('player', {   // <div id="player"></div>
      videoId: 'An6LvWQuj_8',  // 최초 재생할 유튜브 영상 ID
      playerVars: {
        autoplay: true, // 자동 재생 유무
        loop: true, //반복 재생 유무
        playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
      },
      events: {
        onReady: function (event){
          event.target.mute() // 음소거
        }
      }
    });
  }