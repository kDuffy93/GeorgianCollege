let footerTarget = document.getElementById("mainContent2");
let footer = document.getElementById("footer");
let headerTarget = document.getElementById("mainBanner");
let header = document.getElementById("header");
let nav = document.getElementById("nav");
let topnav = document.getElementById("topnav");



const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            intersecting
                ?
                footer.classList.add("atBottom") :
                footer.classList.remove("atBottom");
        });
    }, {
        threshold: [.4],
    }
);
observer.observe(footerTarget);


const headerObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const intersecting = entry.isIntersecting;
            !intersecting
                ?
                header.classList.add("scrolling") &
                nav.classList.add("navScrolling") &
                topnav.classList.add("navScrolling") :
                header.classList.remove("scrolling") &
                nav.classList.remove("navScrolling") &
                topnav.classList.remove("navScrolling");
        });
    }, {
        threshold: [.1],
    }
);
headerObserver.observe(headerTarget);

function toggleMenu() {
    var x = document.getElementById("topnav");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}