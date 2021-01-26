'use strict';

// https://developers.google.com/youtube/iframe_api_reference 

// ?enablejsapi=1

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
    console.log('YouTube video has been successfully initilized');
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var date = new Date();
var day;
var vid = document.getElementById('video');
var videoPlaying = false;

switch (date.getDay()) // 0 is Sunday, 6 is Saturday
{
    case 0:
        day = 'Sunday';
        vid.src = 'https://www.youtube.com/embed/D1diGfoPKqM?enablejsapi=1'

        break;

    case 1:
        day = 'Monday';
        vid.src = 'https://www.youtube.com/embed/xPaoz20eyZo?enablejsapi=1';

        break;
    
    case 2:
        day = 'Tuesday';
        vid.src = 'https://www.youtube.com/embed/CY8a4uh_PdI?enablejsapi=1'

        break;

    case 3:
        day = 'Wednesday';
        vid.src = 'https://www.youtube.com/embed/PE8GlPpuLuY?enablejsapi=1'

        break;

    case 4:
        day = 'Thursday';
        vid.src = 'https://www.youtube.com/embed/3IxkRXHfslQ?enablejsapi=1'

        break;

    case 5:
        day = 'Friday!!!';
        vid.src = 'https://www.youtube.com/embed/nxoe5DjDd74?enablejsapi=1';

        document.getElementsByTagName('body')[0].style = 'animation: 14s ease 0s infinite alternate none running fridayBg;';
        break;

    case 6:
        day = 'Saturday';
        vid.src = 'https://www.youtube.com/embed/gu3KzCWoons?enablejsapi=1'

        break;

    default:
    day = '???';
    alert('If you see this message, you have broken time or JavaScript. Theoretically, it is not possible for you to see this message, as the only time you can see this message is if the day is neither Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, or Sunday: which is impossible. (Unless you are seeing this in the sources tab inside devtools or JS failed) Who are you to have knowledge of such wise ways?');

};

document.getElementsByTagName('title')[0].innerHTML = `It's ${day}`;
document.getElementById('theDay').innerHTML = day;

window.onload = function() {
    playVideo();
};
  
function playVideo() {
    setTimeout(function(){
        player.playVideo();
        videoPlaying = true;
    },500)
};

// Monday specific --------------------------------------------

if (day == 'Monday')
{
    var isVideoPlaying = setInterval(() => {
        videoPlaying ? mondayStopwatch() : console.log('Waiting for video to play');
    }, 100);

    function mondayStopwatch()
    {
        clearInterval(isVideoPlaying);
        setTimeout(() => {
            player.stopVideo();
        },26000);
    };
};

// End of Monday specific -------------------------------------