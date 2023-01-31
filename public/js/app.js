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
