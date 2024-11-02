const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
let index = 0;

function showSlide(newIndex) {
    index = (newIndex + totalSlides) % totalSlides; // handle negative indices
    slides.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
}

function showNextSlide() {
    showSlide(index + 1);
}

function showPrevSlide() {
    showSlide(index - 1);
}

// Auto-slide every 3 seconds
setInterval(showNextSlide, 3000);

document.querySelector('.next').addEventListener('click', showNextSlide);
document.querySelector('.prev').addEventListener('click', showPrevSlide);




var basicTimeline = anime.timeline({
    autoplay: false
  });
  
  var pathEls = $(".check");
  for (var i = 0; i < pathEls.length; i++) {
    var pathEl = pathEls[i];
    var offset = anime.setDashoffset(pathEl);
    pathEl.setAttribute("stroke-dashoffset", offset);
  }
  
  basicTimeline
    .add({
      targets: ".text",
      duration: 1,
      opacity: "0"
    })
    .add({
      targets: ".button",
      duration: 1300,
      height: 10,
      width: 300,
      backgroundColor: "#2B2D2F",
      border: "0",
      borderRadius: 100
    })
    .add({
      targets: ".progress-bar",
      duration: 2000,
      width: 300,
      easing: "linear"
    })
    .add({
      targets: ".button",
      width: 0,
      duration: 1
    })
    .add({
      targets: ".progress-bar",
      width: 80,
      height: 80,
      delay: 500,
      duration: 750,
      borderRadius: 80,
      backgroundColor: "#71DFBE"
    })
    .add({
      targets: pathEl,
      strokeDashoffset: [offset, 0],
      duration: 200,
      easing: "easeInOutSine"
    });
  
  $(".button").click(function() {
    basicTimeline.play();
  });
  
  $(".text").click(function() {
    basicTimeline.play();
  });