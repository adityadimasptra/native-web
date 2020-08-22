const scrollToTop = document.getElementById('scroll-to-top')
const toggleProfile = document.querySelector(".toggle");
const theProfile = document.querySelector(".profile");

const elementClicked = document.querySelector("#elementClicked");
const elementYouWantToShow = document.querySelector("#elementYouWantToShow");


let lastScroll = 0

window.addEventListener('scroll', function () {
    const currentScroll = window.pageXOffset || document.documentElement.scrollTop
    if (currentScroll > lastScroll) {
        scrollToTop.style.display = 'block'
    } else {
        scrollToTop.style.display = 'none'
    }
    lastScroll = currentScroll
})

toggleProfile.addEventListener("click", () => {
    theProfile.classList.toggle("active")
    toggleProfile.classList.toggle("active")
});

scrollToTop.addEventListener("click", function () {
    window.scrollTo(0,0)
})