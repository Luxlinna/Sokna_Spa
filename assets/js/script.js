//const { error } = require("console")
/*===== SHOW MENU =====*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* === SWIPER WHY US === */
let swiperWhyUs = new Swiper(".why-us__container", {
    loop: true,
    spacebetween: 24,
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    breakpoints: {
        1200: {
          slidesPerView: 2,
          spaceBetween: -56,
        },
    },
});

/* === EMAIL JS === */
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactPhone = document.getElementById('contact-phone'),
      contactEmail = document.getElementById('contact-email'),
      contactTreatment = document.getElementById('contact-treatment'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault();
    //Check if the field has a value
    if(contactName.value === '' || contactPhone.value === '' || contactEmail.value === '' || contactTreatment.value === ''){
        // Add and removed color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        // Show message
        contactMessage.textContent = 'Write all the input fields 📋'
    } else{
        // Service ID - template ID - #form -publickey
        // emailjs.sendForm('service_jt1fkwf', 'template_5ko303l', '#contact-form', 'PBN7OwQK9-up6NT6P')
        emailjs.sendForm('service_nipsy7q','template_bb3389c','#contact-form','yzNKYMDbF97MWMbgl')
        .then(() => {
            // Show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent ✅'
            
            //Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        }, (error) => {
            alert('OOPS! SOMETHING HAS FAILD...', error)
        })

        // To clear the input field
        contactName.value = ''
        contactPhone.value = ''
        contactEmail.value = ''
        contactTreatment.value = ''
    }
}    
contactForm.addEventListener('submit', sendEmail)

/* === SCROLL SECTION ACTIVE LINK === */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* === SHOW SCROLL UP === */
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is heigher than 350 viewport height, 
    // add the show-scroll class to a tag with the scrollup calss
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
