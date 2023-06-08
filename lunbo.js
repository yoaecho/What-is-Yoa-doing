const slider = document.querySelector('.slider');
const sliderContainer = slider.querySelector('.slider-container');
const sliderItems = slider.querySelectorAll('.slider-item');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
const itemWidth = sliderItems[0].offsetWidth;

let current = 0;

prevBtn.addEventListener('click', () => {
  current = current > 0 ? current - 1 : sliderItems.length - 1;
  sliderContainer.style.transform = `translateX(-${current * itemWidth}px)`;
});

nextBtn.addEventListener('click', () => {
  current = current < sliderItems.length - 1 ? current + 1 : 0;
  sliderContainer.style.transform = `translateX(-${current * itemWidth}px)`;
});

// 创建一个定时器，每2秒钟自动点击 nextBtn
setInterval(() => {
  nextBtn.click();
}, 2000);
