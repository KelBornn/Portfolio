$("body").addClass("scrolllock").delay(6000).queue(function(next){
  $(this).removeClass("scrolllock");
  next();
});


function bonsoir() {
    $(".cercle").removeClass("invisible");
    TweenMax.to(".loading-screen", 1.5, {
      delay: 2,
      top: "-110%",
      ease: Expo.easeInOut
    });
    
var t1 = new TimelineMax();
  
t1.from(".ringOne", 1.5, {
  delay: 0.3,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut,
}).from(".ringTwo", 1.5,{
      delay: 0.3,
      opacity: 0,
      y: 40,
      ease: Expo.easeInOut,
    },
    "-=2"
  )
  .to(".ringOne",  2, {
    delay: 0.3,
    x: -40,
    ease: Expo.easeInOut,
  })
  .to(".ringTwo", 2,{
      delay: 0.3,
      x: -40,
      ease: Expo.easeInOut,
    },
    "-=2"
  );
}

TweenMax.from(".logo", 3, {
  delay: 2,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(".propos", 2.8, {
  delay: 2.5,
  opacity: 0,
  y: 40,
  ease: Power3.easeInOut
}, 0.1);


TweenMax.from(".oui",3, {
  delay: 2.6,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.from(".non",3, {
  delay: 2.8,
  opacity: 0,
  y: 40,
  ease: Expo.easeInOut
});

TweenMax.staggerFrom(".reseau ul li", 3, {
  delay: 2.3,
  opacity: 0,
  y: 40,
  ease: Power3.easeInOut
}, 0.1);



var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.1em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 2000,
    easing: "easeOutExpo",
    delay: function(el, i) {
      return 4000+ 50 * i;
    }
  });

$(document).ready(function () {
  var count = 0;
  $("#wip").click(function () {
      if (count === 2) {
          $(".ionca").attr('name', 'cafe-outline');
      } else count++
  });
});