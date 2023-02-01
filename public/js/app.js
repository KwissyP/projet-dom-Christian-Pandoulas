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

// Get the element with id="defaultOpen" and click on it
document.getElementById("tab-1").click();