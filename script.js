window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0)
});

//PORTFOLIO
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick){
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) =>{
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) =>{
            portfolioModalView.classList.remove("active");
        });
    });
});
//THEMES
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme"); 
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "'sun" ? "add" : "remove"]("sun");
}
//toggle menu
const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const navItems = document.querySelector('.nav-items');

if(navigation){
    navigation.addEventListener("click", () => {
        navigation.classList.add("active")
    });
}
if(closeBtn){
    closeBtn.addEventListener("click", () => {
        navigation.classList.remove("active")
    });
}

// navItems.forEach((navItem) => {
//     navItem.addEventListener("click", () => {
//         navigation.classList.remove('active');
//     });
// });
