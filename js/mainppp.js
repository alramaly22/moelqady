const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const themeButton = document.getElementById('theme-button');
const logoImage = document.getElementById('logo');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== DARK LIGHT THEME ===============*/
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

// Validate if the user previously chose a theme
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark theme
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // Save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});
// إخفاء القائمة عند النقر في أي مكان على الموقع
document.body.addEventListener('click', (event) => {
  // تحقق أولاً من أن الناف مرئي
  if (navMenu.classList.contains('show-menu')) {
    // تحقق مما إذا كان النقر خارج القائمة أو الزر الذي يفتح القائمة
    if (!event.target.closest('.nav__menu') && !event.target.closest('#nav-toggle')) {
      // إذا كان النقر خارج القائمة وخارج الزر، قم بإخفاء القائمة
      navMenu.classList.remove('show-menu');
    }
  }
});
// إخفاء القائمة عند التمرير (سكرول) على الصفحة
window.addEventListener('scroll', () => {
  // تحقق أولاً من أن الناف مرئي
  if (navMenu.classList.contains('show-menu')) {
    // قم بإخفاء القائمة
    navMenu.classList.remove('show-menu');
  }
});
// إخفاء القائمة بعد فترة زمنية معينة (3 ثوانٍ
/*=============== CHANGE LOGO IMAGE ===============*/
// const moonIcon = document.getElementById('theme-button');

// Change logo image when clicking on the moon
// moonIcon.addEventListener('click', () => {
//   if (logoImage.src.includes('images/MSLKM.png')) {
//     logoImage.src = 'images/blue.png'; 
//   } else {
//     logoImage.src = 'images/blue.png'; 
//   }
// });
/* choose faq */
const faqItems = document.querySelectorAll('.choose__faq-item')
// 1.select each item
faqItems.forEach( (item) =>{
    const faqHeader = item.querySelector('.choose__faq-header')

    // select each button click
    faqHeader.addEventListener('click' , () =>{
        // select the current faq-open class
        const openItem = document.querySelector('.faq-open')
        // call the  toggleitem function
        toggleItem(item)
        // remove the faq-open class from other items
        if(openItem && openItem != item){
            toggleItem(openItem)
        }
    })
})
// creat function to display the contect
const toggleItem = (item) =>{
    // select each faq contecnt
    const faqContent =item.querySelector('.choose__faq-content')
    // if the same item contains the faq-open class ,remove
    if(item.classList.contains('faq-open')){
        faqContent.removeAttribute('style')
        item.classList.remove('faq-open')

    } else{
            // add max-height to use the content and the faq-open class
    faqContent.style.height = faqContent.scrollHeight + 'px'
    item.classList.add('faq-open')
    }

}
// ==============NUMM==============



let valueDisplays = document.querySelectorAll('.num');
let interval = 7000;
let isScrollingDown = false;

// Function to animate counting
function animateCounters() {
    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function () {
            startValue += 1;
            valueDisplay.textContent = startValue + "K";
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
}

// Function to reset counters to 0K
function resetCounters() {
    valueDisplays.forEach((valueDisplay) => {
        valueDisplay.textContent = "0K";
    });
}

// Check for scrolling direction
window.addEventListener("scroll", function () {
    if (window.scrollY > 0 && !isScrollingDown) {
        // Scrolling down, stop animations and reset values
        resetCounters();
        isScrollingDown = true;
    } else if (window.scrollY === 0 && isScrollingDown) {
        // Scrolling back up, restart animations
        animateCounters();
        isScrollingDown = false;
    }
});

// Start the initial animation
animateCounters();


/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// typing
// var typed = new Typed(".auto-type",{
//   strings : ["Mo Qadi"],
//   typeSpeed : 150,
//   backSpeed : 150,
//   loop : true 
// })


/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

function playPause() {
    if (videoFile.paused) {
        // Play video
        videoFile.play();
        // Change the icon
        videoIcon.classList.remove('fa-play');
        videoIcon.classList.add('fa-pause');
    } else {
        // Pause video
        videoFile.pause();
        // Change the icon
        videoIcon.classList.remove('fa-pause');
        videoIcon.classList.add('fa-play');
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
    // Video ends, icon change
    videoIcon.classList.remove('fa-pause');
    videoIcon.classList.add('fa-play');
}

// When the video ends
videoFile.addEventListener('ended', finalVideo);


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 4000; // سرعة تحديث الأرقام بالميلي ثانية
  
    function updateCounter(counter, target) {
      const count = +counter.innerText;
      const inc = target / speed;
  
      if (count < target) {
        counter.innerText = Math.ceil(count + inc);
        setTimeout(() => updateCounter(counter, target), 1);
      } else {
        counter.innerText = target;
      }
    }
    // number
  
    function checkVisibility() {
      const triggerBottom = window.innerHeight * 0.8;
      const triggerTop = window.innerHeight * 0.2;
  
      counters.forEach(counter => {
        const rect = counter.getBoundingClientRect().top;
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        if (rect < triggerBottom && rect > -triggerTop) {
          if (count < target) {
            updateCounter(counter, target);
          }
        } else {
          counter.innerText = 0;
        }
      });
    }
  
    checkVisibility();
  
    window.addEventListener('scroll', checkVisibility);
  });






  








  // scrolll animation

  var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
    });



    // loader page 
   window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.classList.add("loader-hidden");
    loader.addEventListener("transitionend", () => {
      document.body.removeChild(loader);
    });
  }
});


//   const carousel = document.querySelector(".carousel"),
// firstImg = carousel.querySelectorAll("img")[0],
// arrowIcons = document.querySelectorAll(".wrapperp i");

// let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// const showHideIcons = () => {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
//         setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
//     });
// });

// const autoSlide = () => {
//     // if there is no image left to scroll then return from here
//     if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

//     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//     let firstImgWidth = firstImg.clientWidth + 14;
//     // getting difference value that needs to add or reduce from carousel left to take middle img center
//     let valDifference = firstImgWidth - positionDiff;

//     if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
//         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//     }
//     // if user is scrolling to the left
//     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// }

// const dragStart = (e) => {
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");

//     if(!isDragging) return;
//     isDragging = false;
//     autoSlide();
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);

  // احصل على الصورة
 // احصل على الصور بواسطة الـ IDs الجديدة
// تم تحديد الوقت بالثواني (5 ثوانٍ)
const zoomDuration = 2 * 1000;

// إضافة حدث النقر لكل صورة وتطبيق التكبير ثم العودة إلى الحجم الأصلي
function zoomAndReset(imageId) {
    const image = document.getElementById(imageId);
    image.style.transform = 'scale(1.3)';
    image.style.borderRadius = '25px';
    setTimeout(() => {
        image.style.transform = 'scale(1)';
        image.style.borderRadius = '50%';
    }, zoomDuration);
    
    // إعادة تعيين حدث النقر مرة أخرى بعد الانتهاء
    image.removeEventListener('click', clickHandler); // إزالة الحدث الحالي
    image.addEventListener('click', clickHandler); // إضافة الحدث مرة أخرى
}

function clickHandler() {
    zoomAndReset(this.id); // استدعاء zoomAndReset() مع معرف الصورة الحالية
}

document.getElementById('zoomable-image-1').addEventListener('click', clickHandler);
// تكرار هذا الكود للصور الأخرى (zoomable-image-2, zoomable-image-3, zoomable-image-4)

// إضافة حدث السكرول لإعادة الصور إلى الحجم الأصلي
window.addEventListener('scroll', () => {
    const images = ['zoomable-image-1', 'zoomable-image-2', 'zoomable-image-3', 'zoomable-image-4'];
    
    images.forEach((imageId) => {
        const image = document.getElementById(imageId);
        image.style.transform = 'scale(1)';
        image.style.borderRadius = '50%';
        
        // إعادة تعيين حدث النقر مرة أخرى بعد الانتهاء
        image.removeEventListener('click', clickHandler); // إزالة الحدث الحالي
        image.addEventListener('click', clickHandler); // إضافة الحدث مرة أخرى
    });
});


