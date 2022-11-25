const modal_exit_button = document.querySelector(".book-modal > .text > .exit-button");
const book_modal_container = document.querySelector(".book-modal-container");
const book_modal_image = book_modal_container.querySelector("img");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar_modal = document.getElementById("navbar-modal");
const navbar = document.getElementById("navbar");
const books = document.querySelectorAll(".grid-container > .book-container");

books.forEach( book => {
    book.onclick = () => {
        book_modal_container.style.display = "flex"; 
        const book_image = book.querySelector("figure > img");
        book_modal_image.src = book_image.src;
    }
});

modal_exit_button.onclick = () => {
    const book_modal_container = document.querySelector(".book-modal-container");
    book_modal_container.style.display = "none";
}

hamburger_menu.onclick = () => {
    const top_burger = document.querySelector(".top-burger");
    const middle_burger = document.querySelector(".middle-burger");
    const bottom_burger = document.querySelector(".bottom-burger");
    if (navbar_modal.style.display == "block") {
        navbar_modal.style.display = "none";
        hamburger_menu.style.transition = "transform 0s"; 
        hamburger_menu.style.transform = "translateX(0px)";
        hamburger_menu.style.paddingLeft = "5px";
        top_burger.style.transformOrigin = "left";
        top_burger.style.transform= "rotate(0deg)";
        middle_burger.style.transform = "scale(1)";
        bottom_burger.style.transformOrigin = "left";
        bottom_burger.style.transform = "rotate(0deg)";
        return;
    }
    navbar_modal.style.display = "block"; 
    navbar.style.left =  "0";
    hamburger_menu.style.transition = "transform 0.5s"; 
    hamburger_menu.style.transform = "translateX(200px)";
    hamburger_menu.style.paddingLeft = "10px";
    top_burger.style.transformOrigin = "left";
    top_burger.style.transform= "rotate(30deg)";
    middle_burger.style.transform = "scale(0)";
    bottom_burger.style.transformOrigin = "left";
    bottom_burger.style.transform = "rotate(-30deg)";
}
