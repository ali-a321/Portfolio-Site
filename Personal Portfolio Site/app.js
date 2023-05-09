
const videos = document.querySelectorAll('video');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.play();
    } else {
      entry.target.pause();
    }
  });
});

videos.forEach(video => {
  observer.observe(video);
});


  //If i want play on hover instead
  // document.querySelectorAll('.projectDemo').forEach(function(container) {
  //   const video = container.querySelector('.videos');
  //   container.addEventListener('mouseenter', function() {
  //     video.play();
  //   });
  //   container.addEventListener('mouseleave', function() {
  //     video.pause();
  //   });
  // });

