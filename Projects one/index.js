// Smooth Scrolling
// step:- attach loco scroll css
//        attach locomotive scroll min js
//        some code from loco github for js
// gsap
// step:- attach gsap

// scrolltrigger
var timeout;
const scroll = new LocomotiveScroll({
  el: document.querySelector('.main'),
  smooth: true
});


function firstPageAnim() {
  var t1 = gsap.timeline();




  t1.from(".nav", {
    y:'-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
  .to(".boxelem", {
    y:0,
    duration: 2,
    stagger:.2,
    delay:-1,
    ease: Expo.easeInOut
  })
  .from(".heading-footer", {
    y:'-10',
    opacity: 0,
    duration: 1.5,
    delay:-1,
    ease: Expo.easeInOut
  })
}


function circleMouseFollower(){
  window.addEventListener("mousemove",function(dets){
       document.querySelector(".mini-circle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
  })

}
circleMouseFollower();
 firstPageAnim();



 // jab mouse move ho to hum skew kar payye aur maximum skew and minimum skew define kar paaye

 function circleSkew(){
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseFollower(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        ".mini-circle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
 }


 circleSkew();
