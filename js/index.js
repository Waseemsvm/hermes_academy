
document.querySelectorAll(".nav-item a")?.forEach(a => {
    a.addEventListener("click", e => {
        clearActiveNavItems();
        e.target?.parentElement?.classList.add('active-nav-item');
        hideNavbar();
    })
})

document.querySelector(".hamburger-menu")?.addEventListener("click", e => {
    toggleNavbarVisibility();
})


let clearActiveNavItems = function () {
    document.querySelectorAll(".nav-item a")?.forEach(a => {
        a.parentElement?.classList.remove("active-nav-item");
    })
}

let hideNavbar = function () {
    document.querySelector(".nav-items")?.classList.add('hide-nav-bar');
}

let showNavbar = function () {
    document.querySelector(".nav-items")?.classList.remove('hide-nav-bar');
}

let toggleNavbarVisibility = function () {
    document.querySelector(".nav-items")?.classList.toggle('hide-nav-bar');
}

