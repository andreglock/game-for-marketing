// Any code you will write for your website (in the future!) should go here
const sprite = document.createElement("div");
sprite.classList.add("sprite");
const body = document.querySelector("body");
const wrapper = document.getElementById("formwrapper");

body.appendChild(sprite);

const randomizePosition = (element) => {
    element.style.top = `${Math.floor(Math.random() * 100)}vh`
    element.style.left = `${Math.floor(Math.random() * 100)}vw`
}

randomizePosition(sprite);

let counter = 0;

sprite.addEventListener("mouseenter", () => {
    randomizePosition(sprite)
    counter++;
    if (counter === 6) {
        sprite.style.display = 'none';
        wrapper.style.display = 'flex';
    }
});



