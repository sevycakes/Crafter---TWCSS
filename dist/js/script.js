// TOGGLE BUTTON

const toggle = document.querySelector('.toggle_menu');
const navm = document.querySelector('.nav_m');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navm.classList.toggle('open');
});

// TNS

const tnslider = tns({
    container:".slider",
    slideBy:1,
    speed:700,
    nav:true,
    navPosition:"bottom",
    autoPlay:true,
    autoPlayTimeout:10000,
    autoPlayButtonOutput:false,
    controlsContainer: "#controls",
    prevButton: ".previous",
    nextButton: ".next"
})