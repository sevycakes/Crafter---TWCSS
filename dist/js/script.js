// TOGGLE BUTTON

const toggle = document.querySelector('.toggle_menu');
const navm = document.querySelector('.nav_m');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    navm.classList.toggle('open');
});

// TNS BANNER

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

// TNS TESTIMONIALS

const tnslider2 = tns({

    container:".slider2",
    slideBy:1,
    speed:700,

    // loop:false,

    nav:true,
    navContainer: "#controller",
    navPosition:"bottom",
    autoPlay:true,
    autoPlayTimeout:10000,
    autoPlayButtonOutput:false,
    controlsContainer: "#controls2",
    prevButton: ".previous2",
    nextButton: ".next2"

})

// TIMER

// const Days = document.getElementById('days');
// const Hours = document.getElementById('hours');
// const Minutes = document.getElementById('minutes');
// const Seconds = document.getElementById('seconds');

// const targetDate = new Date("June 1 2025 00:00:00").getTime();

// function timer () {
//     const currentDate = new Date().getTime();
//     const distance = targetDate - currentDate;

//     const days = Math.floor(distance / 1000 / 60 / 60 / 24);
//     const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
//     const minutes = Math.floor(distance / 1000 / 60) % 60;
//     const seconds = Math.floor(distance / 1000) % 60;

//     Days.innerHTML = days;
//     Hours.innerHTML = hours;
//     Minutes.innerHTML = minutes;
//     Seconds.innerHTML = seconds;
// }

// setInterval(timer,1000);

const getElement = id => document.getElementById(id);
const [Days, Hours, Minutes, Seconds] = ['days', 'hours', 'minutes', 'seconds'].map(getElement);

const targetDate = new Date("June 01, 2025 00:00:00").getTime();

setInterval(() => {
  const distance = targetDate - Date.now();

  const time = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor(distance / (1000 * 60 * 60)) % 24,
    minutes: Math.floor(distance / (1000 * 60)) % 60,
    seconds: Math.floor(distance / 1000) % 60,
  };

  Days.textContent = time.days;
  Hours.textContent = time.hours;
  Minutes.textContent = time.minutes;
  Seconds.textContent = time.seconds;
}, 1000);

// SCHEDULE

const scheduleNav = document.querySelectorAll(".schedule_nav_link");
const scheduleContent = document.querySelectorAll(".schedule_content");

scheduleNav.forEach((schedule) => {
    schedule.addEventListener("click", () => {
        removeActiveSchedule();
        schedule.classList.add("active");

        const activeContent = document.querySelector(`#${schedule.id}-content`);
        removeActiveContentSchedule();
        activeContent.classList.add("active");
    });
});

function removeActiveSchedule() {
    scheduleNav.forEach((schedule) => {
        schedule.classList.remove("active");
    });
}

function removeActiveContentSchedule() {
    scheduleContent.forEach((content) => {
        content.classList.remove("active");
    });
}

// HEADER

const header = document.querySelector('.header');
const toggleMenu = document.querySelector('.toggle_menu');
const navM = document.querySelector('.nav_m');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.remove('lg:bg-transparent');
        header.classList.add('lg:bg-bsbrown');
        header.classList.remove('lg:opacity-80')
        header.classList.add('lg:opacity-100')
    } else {
        header.classList.remove('lg:bg-bsbrown');
        header.classList.add('lg:bg-transparent');
    }
});

toggleMenu.addEventListener('click', () => {
    navM.classList.toggle('w-0');
    navM.classList.toggle('w-[250px]');
});