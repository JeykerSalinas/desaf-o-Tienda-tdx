
const toggle = () => {
    console.log(document)
    const nav = document.getElementById("favnav");
    nav.className === "navbar__items" ? nav.className = "navbar__hide" : nav.className = "navbar__items";
};