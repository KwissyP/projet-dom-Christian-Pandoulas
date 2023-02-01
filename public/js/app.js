// Header
// Date
document.getElementById('date').innerHTML = Date();
// Navbar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// Modal
let modal = document.getElementById("modalOne");
let btn = document.getElementById("btnModalOne");
let span = document.querySelector(".closeOne");

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Modal Video
const modalTwo = document.querySelector(".modal#modalTwo");
const playBtn = document.querySelector(".play-btn");
const closeBtn = document.querySelector(".close");
const video = document.getElementById("video");

playBtn.addEventListener("click", function () {
    modalTwo.style.display = "block";
    playBtn.style.display = "none";
    video.src = "https://www.youtube.com/embed/u6BOC7CDUTQ?autoplay=1&mute=1";
});

closeBtn.addEventListener("click", function () {
    modalTwo.style.display = "none";
    playBtn.style.display = 'block';
    video.src = "";
});

window.addEventListener("click", function (e) {
    if (e.target == modalTwo) {
        modalTwo.style.display = "none";
        video.src = "";
    }
});

// Menu Find
const foodbox = document.querySelectorAll('.carte');
const menu = document.querySelectorAll('#leVraiMenu');

menu.forEach(m => {
    m.addEventListener('click', e => {
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if (e.target.innerHTML === 'All') {
                box.classList.remove('d-none')
            } else if (e.target.innerHTML === 'Starters') {
                if (box.classList.contains('starters')) {
                    box.classList.remove('d-none')
                }

            } else if (e.target.innerHTML === 'Salads') {
                if (box.classList.contains('salads')) {
                    box.classList.remove('d-none')
                }

            } else if (e.target.innerHTML === 'Specialty') {
                if (box.classList.contains('specialty')) {
                    box.classList.remove('d-none')
                }

            }
        })

    })
})

// Vertical Tab
function vTab(evt, plat) {
    let i, activeTab, tablinks;
    activeTab = document.getElementsByClassName("activeTab");
    for (i = 0; i < activeTab.length; i++) {
        activeTab[i].className += " d-none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(plat).className += " d-block";
    document.getElementById(plat).classList.remove('d-none');
    evt.currentTarget.className += " active";
}

document.getElementById("tab-1").click();

// Scroll to top
let mybutton = document.getElementById("arrowBtn");

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// First Carousel
const sliders = document.querySelectorAll(".slider");

const interval = 3800;

const animDuration = 600;

for (let i = 0; i < sliders.length; ++i) {
    const slider = sliders[i];
    const dots = slider.querySelector(".dots");
    const sliderImgs = slider.querySelectorAll(".img");

    let currImg = 0;
    let prevImg = sliderImgs.length - 1;
    let intrvl;
    let timeout;

    for (let i = 0; i < sliderImgs.length; ++i) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dots.appendChild(dot);
        dot.addEventListener("click", dotClick.bind(null, i), false);
    }

    const allDots = dots.querySelectorAll(".dot");
    allDots[0].classList.add("active-dot");

    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
        animateSlider();
        sliderImgs[0].style.left = "";
        intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);

    /**
     * Animates images
     * @param {number} [nextImg] - index of next image to show
     * @param {boolean} [right = false] - animate to right
     */
    function animateSlider(nextImg, right) {
        if (!nextImg) nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

        --nextImg;
        sliderImgs[prevImg].style.animationName = "";

        if (!right) {
            sliderImgs[nextImg].style.animationName = "leftNext";
            sliderImgs[currImg].style.animationName = "leftCurr";
        } else {
            sliderImgs[nextImg].style.animationName = "rightNext";
            sliderImgs[currImg].style.animationName = "rightCurr";
        }

        prevImg = currImg;
        currImg = nextImg;

        currDot = allDots[currImg];
        currDot.classList.add("active-dot");
        prevDot = allDots[prevImg];
        prevDot.classList.remove("active-dot");
    }

    /**
     * Decides if animate to left or right and highlights clicked dot
     * @param {number} num - index of clicked dot
     */
    function dotClick(num) {
        if (num == currImg) return false;

        clearTimeout(timeout);
        clearInterval(intrvl);

        if (num > currImg) animateSlider(num + 1);
        else animateSlider(num + 1, true);

        intrvl = setInterval(animateSlider, interval);
    }
}

// Navbar Scroll
window.onscroll = function () {
    stickNav()
};

var navbar = document.getElementById("myTopnav");
var sticky = navbar.offsetTop;

function stickNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}