// Підключення функціоналу "Чертоги Фрілансера"
import { menuClose, menuOpen } from "./functions.js"
// Підключення списку активних модулів
// Constants
const mainMenuBtn = document.querySelector('.headerMain__menuBtn');
const altMenuBtn = document.querySelector('.headerAlt__menuBtn');
const menuCloseBtn = document.querySelector('.menu__closeBtn');
const radioBtnHuman = document.querySelector(".searchTypeBtn_human");
const radioBtnCemetery = document.querySelector(".searchTypeBtn_cemetery");
const radioBtnHumanText = document.querySelector(".searchType_human");
const radioBtnCemeteryText = document.querySelector(".searchType_cemetery");
const newsYearBtn = document.getElementById("year");

// Main header burger menu
if (mainMenuBtn) {
    const menu = document.querySelector('.menu');
    mainMenuBtn.addEventListener("click", function(e) {
        menu.classList.add('_active');
        menuOpen()        
    });
}
// Alt header burger menu
if (altMenuBtn) {
    const menu = document.querySelector('.menu');
    altMenuBtn.addEventListener("click", function(e) {
        menu.classList.add('_active');
        menuOpen()        
    });
}
if (menuCloseBtn) {
    const menu = document.querySelector('.menu');
    menuCloseBtn.addEventListener("click", function(e) {
        menu.classList.remove('_active');
        menuClose()       
    });
}

// youtube player
var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtube-player', {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        let theOverlay = document.getElementById("youtube-overlay");
        player.mute(); 
        theOverlay.onclick = function() {
            this.style.display = "none";
            player.playVideo();
            document.getElementById("demo").innerHTML =
              "Hide overlay and play the video!";
          };
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }


// for (let year = new Date().getFullYear() ; year <= 2023; year++) {
//     let options = document.createElement("OPTION");  
//     newsYearBtn.appendChild(options).innerHTML = year;
//   }

// Contact us modal open
// if (contactBtn) {
//     const contactForm = document.querySelector(".contactModal");
//     contactBtn.addEventListener("click", function(e) {
//         contactForm.classList.add('_active');
//         menuOpen()
//     });
// }
// if(contactModalClose) {
//     const contactForm = document.querySelector(".contactModal");
//     contactModalClose.addEventListener("click", function(e) {
//         contactForm.classList.remove('_active');
//         menuClose()
//     });
// }

// Search type text color
// if (radioBtnHuman) {    
//     radioBtnHuman.addEventListener("click", function(e) {
//         radioBtnCemeteryText.style.color = "var(--text-color-black)"
//         radioBtnHumanText.style.color = "var(--orange-color)"
//     });    
// }

// if (radioBtnCemetery) {    
//     radioBtnCemetery.addEventListener("click", function(e) {
//         radioBtnHumanText.style.color = "var(--text-color-black)"
//         radioBtnCemeteryText.style.color = "var(--orange-color)"
//     });
// }

