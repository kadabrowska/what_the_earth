document.addEventListener("DOMContentLoaded", function() {

    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");

    let counter = 0;
    const imgs = document.querySelectorAll("li");
    imgs[counter].classList.add("visible");

    next.addEventListener("click", function(e) {
        e.preventDefault();
        imgs[counter].classList.remove("visible");
        counter = (counter + 1) % 5;
        imgs[counter].classList.add("visible");document.addEventListener("DOMContentLoaded", function() {

    const prev = document.querySelector("#prev");
    const next = document.querySelector("#next");

    let counter = 0;
    const imgs = document.querySelectorAll("li");
    imgs[counter].classList.add("visible");

    next.addEventListener("click", function(e) {
        e.preventDefault();
        imgs[counter].classList.remove("visible");
        counter = (counter + 1) % 5;
        imgs[counter].classList.add("visible");
    })

    prev.addEventListener("click", function(e) {
        e.preventDefault();
        imgs[counter].classList.remove("visible");
        counter = counter == 0 ? 4 : counter - 1;
        imgs[counter].classList.add("visible");
    });
})
    })

    prev.addEventListener("click", function(e) {
        e.preventDefault();
        imgs[counter].classList.remove("visible");
        counter = counter == 0 ? 4 : counter - 1;
        imgs[counter].classList.add("visible");
    });
})