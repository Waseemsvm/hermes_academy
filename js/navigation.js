

//#region navigation related changes.

/**
 * @description function to configure the navigation links.
 */
let fnConfigureNavLinks = function () {
    document.querySelectorAll(".nav-link")?.forEach(a => {
        a.addEventListener("click", e => {
            // e.preventDefault();
            fnClearHighlight();
            fnCloseMenu();
            // scrollTo({
            //     top: document.querySelector(e.target?.getAttribute('href')).getBoundingClientRect().top - 100,
            //     behavior: "smooth"
            // })
            e.target?.classList.add('active');

        })
    })
}

/**
 * @description removes active highlight from every nav link
 */

let fnClearHighlight = function () {
    document.querySelectorAll(".nav-link")?.forEach(a => {
        a.classList.remove('active');
        a.blur()
    })
}

/**
 * @description closes the navigation menu on clicking out of the menu.
 */
let fnCloseMenuOnFocusOut = function () {
    document.addEventListener("click", e => {
        if (!e.target.classList.contains('navbar-toggler-icon')) {
            fnCloseMenu();
        }
    })
}

/**
 * @description function to close the menu.
 */
let fnCloseMenu = function () {
    document.querySelector('.navbar-collapse')?.classList.add('hide');
    document.querySelector('.navbar-collapse')?.classList.remove('show');
}

/********************************************* */

fnConfigureNavLinks();
fnCloseMenuOnFocusOut();

//#endregion navigation related changes.


let viewportHeight = window.innerHeight || document.documentElement.clientHeight;


document.addEventListener('scroll', e => {

    for (let rSection of document.querySelectorAll('section')) {
        let { top, bottom } = rSection.getBoundingClientRect();
        if (top >= 50 && top <= viewportHeight) {
            fnClearHighlight();
            document.querySelector(`a[href*="${rSection.id}"]`)?.classList.add('active');
        }
    }
})












