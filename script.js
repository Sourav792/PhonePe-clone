
// hamburger section (responsive nav)
const hamburgerIcon = document.querySelector("#hamburger");

hamburgerIcon.onclick = () => {
    const rightHeader = document.querySelector(".right-header");
    rightHeader.classList.toggle("active");
}

// hero section (slide scroller)

 let counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter ++;
    if (counter > 5) {
        counter = 1;
    }
}, 4000); 