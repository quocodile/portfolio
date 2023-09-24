const modal_exit_button = document.querySelector(".book-modal > .text > .exit-button");
const book_modal_container = document.querySelector(".book-modal-container");
const book_modal_image = book_modal_container.querySelector("img");
const book_modal_title = book_modal_container.querySelector("figcaption");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar_modal = document.getElementById("navbar-modal");
const navbar = document.getElementById("navbar");
const books = document.querySelectorAll(".grid-container > .book-container");


const book_thoughts_map = {
    "The Emperor of All Maladies": 
        "It had a good mix of history, biology, and medicine as it told the story of cancer. It got a bit dull once it talked about the politics of cancer, but the pain was worth it as I think I learned a lot. It was nice that the book tied in a story of cancer itself as well as how cancer relates to the life of the author-Siddhartha Mukherjee. It felt more personal hearing the stories that he had relating to the cancer patients he met.",
    "Under My Hijab":
      "It was a cute book that I read with Anwesha during winter break 2022."
}

const book_takeways_map = {
    "The Emperor of All Maladies": 
        "The history of AIDs and Cancer is connected. AIDs used to be called gay cancer.",
    "Under My Hijab":
      "There are many different styles of hijabs. Wearing a hijab/not wearing a hijab may depend on interpretations of Islam."
}

books.forEach( book => {
    book.onclick = () => {
        const book_image = book.querySelector("figure > img");
        const book_title = book.querySelector("figure > figcaption");
        const thoughts_container = document.querySelector(".book-modal > .text > .thoughts"); 
        const takeaways_container = document.querySelector(".book-modal > .text > .main-takeaways"); 
        const thoughts_text = thoughts_container.querySelector("p");
        const takeaways_text = takeaways_container.querySelector("p");
        book_modal_container.style.display = "flex"; 
        book_modal_image.src = book_image.src;
        book_modal_title.innerHTML = book_title.innerHTML;
        thoughts_text.innerHTML = book_thoughts_map[book_title.innerHTML];
        takeaways_text.innerHTML = book_takeways_map[book_title.innerHTML]; 
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
