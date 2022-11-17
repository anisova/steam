// функция работы гамбургера
function ham(){
  const ham=document.querySelector('.hamburger');
  const hamMenu=document.querySelector('.menu__hamburger');
  const menu=document.querySelector('.menu');
  const body=document.querySelector('body');
  function toggleMenu(){
      ham.classList.toggle('active');
      menu.classList.toggle('is-active');    
      body.classList.toggle('locked'); 
  }
  ham.addEventListener('click',function(e){
  e.preventDefault();  
  toggleMenu();
  })  
  hamMenu.addEventListener('click',function(e){
    e.preventDefault();  
    toggleMenu();
    }) 
  menu.addEventListener('click',function(e){  
    let target=e.target;
    if (target.className==='menu__link') {    
      toggleMenu();
    }       
  })    
  };
  ham();;
// Функция работы модального окна с формой
function toggleModal(modalWindow, openButton, closeButton) {
  const openBtns = document.querySelectorAll(openButton);
  const modal = document.querySelector(modalWindow);
  console.log(modal);
  if (modal) {
    const closeBtn = modal.querySelector(closeButton);
    // const cancel = modal.querySelector(".cancel");
    openBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        let paddingoffset =
          window.innerWidth - document.body.offsetWidth + "px";
        e.preventDefault();
        document.body.style.overflow = "hidden";
        document.body.style.paddingRight = paddingoffset;
        modal.classList.add("active");
      });
    });
    closeBtn.addEventListener("click", () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
      modal.classList.remove("active");
    });
    //   if (cancel) {
    //     cancel.addEventListener("click", () => {
    //       closeBtn.click();
    //     });
    //   }
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeBtn.click();
      }
    });
  }
}
toggleModal(".modal-login", ".login-block", ".btn-close");
toggleModal(".modal-login", ".mlogin-block", ".btn-close");
// toggleModal(".modal-payment", ".btn_main", ".btn-close");
;
// Функция работы модального окна корзины
function toggleModalScroll(modalWindow, openButton, closeButton) {
  const openBtns = document.querySelectorAll(openButton),
    modal = document.querySelector(modalWindow),
    closeBtn = modal.querySelector(closeButton),
    overlay = document.querySelector(".overlay");
  if (modal) {
    openBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("active");
        overlay.classList.add("active");
        window.scrollTo({ top: 0 });
      });
    });
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
        overlay.classList.remove("active");
      });
    }
    overlay.addEventListener("click", (e) => {
      if (e.target == overlay) {
        closeBtn.click();
      }
    });
  }
}
toggleModalScroll(".modal-payment", ".btn_main", ".btn-close");
;
// Функция для работы спойлера
function spoiler() {
    const drop = document.querySelectorAll(".spoiler__item");
    drop.forEach(function (item) {
        item.addEventListener("click", function (event) {
            const content = item.querySelector('.spoiler__content');
            event.preventDefault();
            let target = event.target;
            for (i = 0; i < drop.length; i++) {
                if (drop[i] != item) {
                    drop[i].classList.remove("active");
                    drop[i].querySelector('.spoiler__content').style.maxHeight = '0';
                }
            }
            if (target.classList.contains("drop")) {                
                if (item.classList.contains("active")) {                    
                    item.classList.remove("active");
                    content.style.maxHeight = '0';
                } else {
                    item.classList.add("active");
                    content.style.maxHeight = content.scrollHeight + 'px';
                }
            }
        });
    });
}
spoiler();;

const swiper = new Swiper('.slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false, 
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    // when window width is >= 480px
    550: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
    dragSize:"20px",
    draggable: true,   
  },
});

;