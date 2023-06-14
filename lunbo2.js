const slider = document.querySelector('.slide');
const sliderContainer = slider.querySelector('.slide-container');
const sliderItems = slider.querySelectorAll('.slide-item');
const prevBtn = slider.querySelector('.prev');
const nextBtn = slider.querySelector('.next');
const itemWidth = sliderItems[0].offsetWidth;

let current = 0;

prevBtn.style.display = 'none'; // 隐藏左滑动箭头
nextBtn.style.display = 'none'; // 隐藏右滑动箭头

// 创建一个定时器，每2秒钟自动切换到下一张图片
setInterval(() => {
  current = current < sliderItems.length - 1 ? current + 1 : 0;
  sliderContainer.style.transform = `translateX(-${current * itemWidth}px)`;
}, 2000);
