// ================= CAROUSEL ẢNH =================

const imageContainers = document.querySelectorAll('.image');//tìm tất cả các container chứa class image

imageContainers.forEach(container => {
  const carouselImages = container.querySelectorAll('img'); 
  const dotsContainer = container.querySelector('.carousel-dots'); 

  if (carouselImages.length > 1 && dotsContainer) {

    let currentIndex = 0; 
    let intervalId;

    const dotNodes = [];

    //  tạo dots
    for (let i = 0; i < carouselImages.length; i++) {
      const dot = document.createElement('div');
      dot.className = 'carousel-dot';
      if (i === 0) dot.classList.add('active'); //ảnh đầu tiên được hiển thị (dot 0)

      dotsContainer.appendChild(dot);
      dotNodes.push(dot); //đẩy dot vào vị trí cuối trong array
      
      dot.addEventListener('click', () => {
        showSlide(i); 
        resetTimer(); 
      });
    }
    
    function updateDots(index) {
      dotNodes.forEach((d, i) => {
        d.classList.toggle('active', i === index);
      });
    }

    function showSlide(index) {
      carouselImages.forEach((img, i) => {

        // style ảnh đè lên nhau nằm full khung
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.width = '100%';
        img.style.height = '100%';

        if (i === index) {
          img.style.transform = 'translateX(0)';
          img.style.zIndex = '2';
        } else if (i < index) {
          img.style.transform = 'translateX(-100%)';
          img.style.zIndex = '1';
        } else {
          img.style.transform = 'translateX(100%)';
          img.style.zIndex = '1';
        }
      });

      currentIndex = index;
      updateDots(index);
    }

    function nextSlide() {
      showSlide((currentIndex + 1) % carouselImages.length);
    }

    function startTimer() {
      intervalId = setInterval(nextSlide, 3000);
    }

    function resetTimer() {
      clearInterval(intervalId);
      startTimer();
    }

    //  setup ban đầu
    carouselImages.forEach((img, i) => {
      img.style.transform = i === 0 ? 'translateX(0)' : 'translateX(100%)';
    });

    startTimer();
  }
});


// ================= CAROUSEL TESTIMONIAL =================

const testimonialContainer = document.querySelector('.testimonial-container');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialDots = document.querySelector('.testimonial-section .carousel-dots'); //lấy dot nằm trong phần cảm nhận khách hàng

if (testimonialContainer && testimonialCards.length > 1 && testimonialDots) {

  let index = 0;
  const total = testimonialCards.length;

  //  tạo dots
  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot';
    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
      index = i;
      updateSlide();
      resetTimer();
    });

    testimonialDots.appendChild(dot);
  }

  function updateSlide() {
    //  trượt cả container về trái khi click dot mới
    testimonialContainer.style.transform = `translateX(-${index * 100}%)`;

    const dots = testimonialDots.querySelectorAll('.carousel-dot');
    dots.forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }

  function nextSlide(){
    index= (index +1) % total;
    updateSlide();
  }
  function resetTimer(){
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide,4000);
  }

// chạy lần đầu
  intervalId = setInterval(nextSlide,4000);
  

}