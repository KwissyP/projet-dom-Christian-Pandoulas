// Header
// Date
let date = new Date()
let day = date.getDate()
let month = date.toLocaleString('default', {
    month: 'long'
});
let year = date.getFullYear()
if (day < 10) {
    day = `0${day}`
}
document.getElementById('date').innerHTML = `${day} ${month} ${year}`;
// Navbar
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.classList.contains("topnav")) {
        x.classList.toggle("responsive");
    } else {
        x.classList.toggle("topnav");
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

// Scroll to top & Arrow Button 
let mybutton = document.getElementById("arrowBtn");

window.onscroll = function () {
    scrollFunction();
    stickNav()
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

let navbar = document.getElementById("myTopnav");
let sticky = navbar.offsetTop;

function stickNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
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

// Carousel 2
let sectionAllBtn = document.querySelectorAll('.section7-btn')
let translateValue = 0
let posI = 0

function applyColorBtn(i) {
    for (let index = 0; index < sectionAllBtn.length; index++) {
        if (index == i) {
            sectionAllBtn[index].classList.add('bkMain')
        } else {
            sectionAllBtn[index].classList.remove('bkMain')
        }

    }
}


for (let index = 0; index < sectionAllBtn.length; index++) {
    sectionAllBtn[index].addEventListener('click', () => {
        applyColorBtn(index)
        posI = index
        translateValue = index * (-100)
        let allElem = document.querySelectorAll('.section7-elem')
        allElem.forEach(elem => {
            elem.style.transform = `translateX(${translateValue}%)`
        })

    })

}

setInterval(() => {
    if (translateValue <= -400) {
        translateValue = 0
        posI = 0
    } else {
        translateValue -= 100
        posI++
    }
    applyColorBtn(posI)
    let allElem = document.querySelectorAll('.section7-elem')
    allElem.forEach(elem => {
        elem.style.transform = `translateX(${translateValue}%)`
    })

}, 4000)

// Dark Mode
const toggleDarkModeBtn = document.getElementById("toggle-dark-mode-btn");
let isDarkMode = false;

toggleDarkModeBtn.addEventListener("click", function () {
    isDarkMode = !isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? "white" : "black";
    document.body.style.color = isDarkMode ? "black" : "white";
    toggleDarkModeBtn.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fa-solid fa-cloud-moon"></i>';
});

// Fade Mode
function reveal() {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("activeP");
        } else {
            reveals[i].classList.remove("activeP");
        }
    }
}

window.addEventListener("scroll", reveal);

// Modal Connexion v2
const signUpLink = document.querySelector("#inscription");
const modalContent = document.querySelector(".modal-content-One");
let closeSpan = document.querySelector(".closeOne");

signUpLink.addEventListener("click", function () {
    modalContent.innerHTML = `
    <form action="/signup" method="post">
      <span class="closeOne">&times;</span>
      <span id="title">Sign up</span>
      <input type="text" id="username" name="username" placeholder="Username">
      <input type="email" id="email" name="email" placeholder="Email">
      <input type="password" id="password" name="password" placeholder="Password">
      <div id="button">
        <input type="button" value="Sign up">
        <span class="rip1"></span>
        <span class="rip2"></span>
      </div>
      <div id="linksParent">
        <a id="login">Sign in</a>
        <a>Forgot your password?</a>
      </div>
    </form>
  `;

    closeSpan = document.querySelector(".closeOne");
    closeSpan.addEventListener("click", function () {
        modalContent.innerHTML = `
      <form action="/login" method="post">
        <span class="closeOne">&times;</span>
        <span id="title">Sign in</span>
        <input type="text" id="username" name="username" placeholder="Username">
        <input type="password" id="password" name="password" placeholder="Password">
        <div id="button">
          <input type="button" value="Login">
          <span class="rip1"></span>
          <span class="rip2"></span>
        </div>
        <div id="linksParent">
          <a id="inscription">Sign up</a>
          <a>Forgot your password?</a>
        </div>
      </form>
    `;
        modal.style.display = "none";
    });
});

// Scroll <a> color
const navLinks = document.querySelectorAll('.navLink');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
        const sectionPos = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPos >= sectionPos && scrollPos < sectionPos + sectionHeight) {
            navLinks.forEach((navLink) => {
                navLink.classList.remove('posey');
                if (`#${section.id}` === navLink.getAttribute('href')) {
                    navLink.classList.add('posey');
                }
            });
        }
    });
});