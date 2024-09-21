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


// jab mouse move ho to hum skew kar payye aur maximum skew and minimum skew define kar paaye

function circleSkew(){

   //define default scale value

  //x & y current value
  var xscale = 1;
  var yscale = 1;

  //x & y previous value
  var xprev = 0;
  var yprev = 0;

   window.addEventListener("mousemove",function(dets){
    this.clearTimeout(timeout);
    xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev );

     xprev = dets.clientX;
     yprev = dets.clientY;

     circleMouseFollower(xscale, yscale);

       timeout = setTimeout(function(){
        document.querySelector(
                  ".mini-circle"
                ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
       },100);
   });

}

function circleMouseFollower(xscale, yscale){
  window.addEventListener("mousemove",function (dets){
       document.querySelector(".mini-circle").style.transform= `translate(${dets.clientX}px,${dets.clientY}px)scale(${xscale},${yscale})`;
  })

}
circleMouseFollower();
 firstPageAnim();
 circleSkew();




//we have select the three elem and then to applyed the mousemove and find the mouse position  where the mouse is presents
//  we finding mouse position with the help of xpositio and y position  and showing the img  In Place Of  of x y position and move that img


document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});