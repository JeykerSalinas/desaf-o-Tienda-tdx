const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "navbar" ? nav.className += " responsive" : nav.className = "navbar";
};