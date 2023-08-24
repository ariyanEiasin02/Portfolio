AOS.init({
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',
});

const typed = new Typed('#element', {
    strings: [" Ariyan.",
             "a Freelancer.",
             "a Graphic.",
            ],
             
    typeSpeed: 50,
    smartBackspace: true,
    loop: true,
     backDelay: 900,
     backSpeed: 30,
  });


  $(document).ready(function($) {
    $('.counter_tag').counterUp({
        delay: 10,
        time: 1000
    });
  });
  

  $(document).ready(function(){
    $('#bar1').barfiller({duration: 1000});
    $('#bar2').barfiller({duration: 1000});
    $('#bar3').barfiller({duration: 1000});
    $('#bar4').barfiller({duration: 1000});
    $('#bar5').barfiller({duration: 1000});
    $('#bar6').barfiller({duration: 1000});
  });

  
let eiasin = document.querySelector('.portfolio__items');
var mixer = mixitup(eiasin);


$(window).scroll(function(){
  var scrolling = $(this).scrollTop()

  if (scrolling > 100){
    $(".backtotop").fadeIn(500)
  }else{
    $(".backtotop").fadeOut(500)
  }
})

$(".backtotop").click(function(){
  $('html,body').animate({
    scrollTop:0
  })
})

window.addEventListener("scroll",function(){
  var header = document.querySelector(".navbar__portfoli");
  header.classList.toggle("sticky",window.scrollY)
})


// preload er
const preolad = document.querySelector(".preolad"),
percent = document.querySelector("#percent");
let perVal = 0;
let increament = setInterval(() => {
perVal++;
percent.textContent = `${perVal}%`;
if (perVal == 100) {
  clearInterval(increament);
  preolad.classList.remove("active");
}
}, 10);


$(window).on("load",function(){
  $(".preolad__main").delay(3000).fadeOut(300)
})
