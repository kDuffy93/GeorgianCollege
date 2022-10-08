let footerTarget = document.getElementById("mainContent2");
let footer = document.getElementById("footer");
let headerTarget = document.getElementById("secondaryContent1");
let header = document.getElementById("header");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        intersecting
            ?
            footer.classList.add("atBottom") :
            footer.classList.remove("atBottom");
    });
});
observer.observe(footerTarget);


const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        !intersecting
            ?
            header.classList.add("scrolling") :
            header.classList.remove("scrolling");
    });
});
headerObserver.observe(headerTarget);