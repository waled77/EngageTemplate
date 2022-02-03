var menu_icon = document.querySelector('nav .menu-icon');
var ulLinks = document.querySelector('nav ul');

menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('active');
    ulLinks.classList.toggle('active');
})

var testimonialBtns = document.querySelectorAll('.testimonials button');
var testimonialContent = document.querySelectorAll('.testimonials .testimonial');

console.log(testimonialBtns)
console.log(testimonialContent)

testimonialBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.className == 'left-btn') {
            document.querySelector('.testimonial.second').classList.remove('active');
            document.querySelector('.testimonial.first').classList.add('active')
        }else if (btn.className == 'right-btn') {
            console.log('r')
            document.querySelector('.testimonial.second').classList.add('active');
            document.querySelector('.testimonial.first').classList.remove('active');
        } else {
            return false;
        }
    })
});

var navSearchIcon = document.querySelector('.list-links .nav-search');
var overlaySearch  = document.querySelector('.overlay-search');
var closeOverlay  = document.getElementById('close-overlay');

navSearchIcon.addEventListener('click', () => {
    overlaySearch.classList.add('active');
    navSearchIcon.style.display = 'none';
})

closeOverlay.addEventListener('click', () => {
    overlaySearch.classList.remove('active');
    navSearchIcon.style.display = 'block';
})

var loadingScreen  = document.querySelector('.loading-screen');

window.onload = setTimeout(() => {
    loadingScreen.style.display = 'none';
},1000)


