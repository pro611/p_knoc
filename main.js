const left_Bt1 = document.getElementById('con2_b1');
const right_Bt1 = document.getElementById('con2_b2');
const left_Bt2 = document.getElementById('con2_b3');
const right_Bt2 = document.getElementById('con2_b4');
const left_Bt3 = document.getElementById('con2_b5');
const right_Bt3 = document.getElementById('con2_b6');
const left_Bt4 = document.getElementById('con2_b7');
const right_Bt4 = document.getElementById('con2_b8');
const left_Bt5 = document.getElementById('con2_b9');
const right_Bt5 = document.getElementById('con2_b10');

const con2_c = document.getElementById('con2_img_c');

left_Bt1.addEventListener('click', function () {
    con2_c.style.transform = 'translateX(490px)';

    left_Bt1.style.display = 'none'
    right_Bt1.style.display = 'none'

    left_Bt2.style.display = 'block'
    right_Bt2.style.display = 'block'
});

left_Bt2.addEventListener('click', function () {
    con2_c.style.transform = 'translateX(980px)';

    left_Bt2.style.display = 'none'
    right_Bt2.style.display = 'none'

    left_Bt3.style.display = 'block'
    right_Bt3.style.display = 'block'
});

left_Bt3.addEventListener('click', function () {
    con2_c.style.transform = 'translateX(1470px)';

    left_Bt3.style.display = 'none'
    right_Bt3.style.display = 'none'

    left_Bt4.style.display = 'block'
    right_Bt4.style.display = 'block'
});

left_Bt4.addEventListener('click', function () {
    con2_c.style.transform = 'translateX(1960px)';

    left_Bt4.style.display = 'none'
    right_Bt4.style.display = 'none'

    left_Bt5.style.display = 'block'
    right_Bt5.style.display = 'block'
});



right_Bt2.addEventListener('click', function () {
    con2_c.style.transform = 'translateX(0px)';

    left_Bt1.style.display = 'block'
    right_Bt1.style.display = 'block'

    left_Bt2.style.display = 'none'
    right_Bt2.style.display = 'none'
});

right_Bt3.addEventListener('click', function () {
    con2_c.style.transform = 'translateX(490px)';

    left_Bt2.style.display = 'block'
    right_Bt2.style.display = 'block'

    left_Bt3.style.display = 'none'
    right_Bt3.style.display = 'none'
});

right_Bt4.addEventListener('click', function () {
    con2_c.style.transform = 'translateX(980px)';

    left_Bt3.style.display = 'block'
    right_Bt3.style.display = 'block'

    left_Bt4.style.display = 'none'
    right_Bt4.style.display = 'none'
});

right_Bt5.addEventListener('click', function () {
    con2_c.style.transform = 'translateX(1470px)';

    left_Bt4.style.display = 'block'
    right_Bt4.style.display = 'block'

    left_Bt5.style.display = 'none'
    right_Bt5.style.display = 'none'
});




// YouTube IFrame API 스크립트 로드
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
        videoId: '5InBIfOMDV8', // 유튜브 영상 ID
        playerVars: {
            autoplay: 1,
            mute: 1,
            loop: 1,
            playlist: '5InBIfOMDV8',
            controls: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            fs: 0,
            disablekb: 1
        },
        events: {
            onReady: onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // 720p 화질로 설정
    event.target.setPlaybackQuality('hd720');
    event.target.playVideo();

    // 스타일 적용
    const iframe = document.querySelector('#video-container');
    iframe.style.position = 'absolute';
    iframe.style.top = '-720px';
    iframe.style.left = '50%';
    iframe.style.width = '3440px';
    iframe.style.height = '1440px';
    iframe.style.transform = 'translate(-50%, 0%)';
    iframe.style.pointerEvents = 'none';
    iframe.style.objectFit = 'cover';
    iframe.style.filter = 'brightness(0.6)';
    iframe.style.zIndex = '-1';
}







// Intersection Observer 설정
const observerOptions = {
    root: null, // 뷰포트 기준
    rootMargin: '0px', // 관찰 범위 조정
    threshold: 0.1, // 10% 보일 때 트리거
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // hidden 클래스를 visible로 변경
        if (entry.target.classList.contains('hidden')) {
          entry.target.classList.add('visible');
          entry.target.classList.remove('hidden');
        }
  
        // hidden2 클래스를 visible2로 변경
        if (entry.target.classList.contains('hidden2')) {
          entry.target.classList.add('visible2');
          entry.target.classList.remove('hidden2');
        }
  
        // 한 번만 실행되도록 관찰 중지
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // 모든 타겟 요소 선택
  const targets = document.querySelectorAll('.hidden, .hidden2');
  
  // Intersection Observer로 관찰 시작
  targets.forEach(target => observer.observe(target));
  