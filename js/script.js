let contact = document.getElementById("contact");
let formClose = document.getElementById("form-close");
let nav1 = document.getElementById("nav");
let navHeight = parseInt(getComputedStyle(nav1).height.split(".")[0]) - 20;
let nav2 = document.getElementById("nav-2");


function navAnimation() {
    if(window.scrollY > navHeight) {
        nav1.style.display = "none";
        nav2.classList.add("fixed");
    } else {
        nav1.style.display = "flex";
        nav2.classList.remove("fixed");
    }
}

function hideContactForm(e) {
    let form = document.getElementById("form");
    let formContainer = document.getElementById("form-container");
    
    if(e.target == formContainer) {
        formContainer.style.display = "none";
    }
}

window.addEventListener("scroll", navAnimation);
window.addEventListener("click", hideContactForm);

contact.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("form-container").style.display = "block";
});

formClose.addEventListener("click", (e) => {
    document.getElementById("form-container").style.display = "none";
});


// INIT
(() => {
    navAnimation();
})();


// window.addEventListener("keydown", (e) => {
//     if (e.key === "ArrowDown" || e.key === "ArrowUp") {
//         e.preventDefault();
//         throttleFunction(scrollWindow, e, 100);
//     }
// });

// var  throttleFunction  =  function (func, param, delay) {
// 	if (timerId) {
// 		return
// 	}
//     var timerId  =  setTimeout(function () {
//         func(param);
// 		timerId  =  undefined;
// 	}, delay)
// }

// function scrollWindow(e) {
//     let scrollLength = window.innerHeight;
//     scrollLength = e.key === "ArrowDown" ? window.innerHeight : -window.innerHeight;
//     window.scrollBy({
//         top: scrollLength,
//         behavior: "smooth"
//     });
// }
// function scrollWindow1(e) {
//     let scrollLength = window.innerHeight;
//     window.scrollBy({
//         top: scrollLength,
//         behavior: "smooth"
//     });
// }

// window.addEventListener("scroll", (e) => {
//     e.preventDefault();
//     throttleFunction(scrollWindow1, e, 200);
// })



// window.onwheel = (e) => {
//     e.preventDefault();
//     throttleFunction(onWheelScroll, e, 200)
// }

// function onWheelScroll(e) {
//     console.log(e);
//     if(Math.floor(window.pageYOffset)%window.innerHeight) {
//         scrollLength = e.deltaY > 0 ? window.innerHeight : -window.innerHeight;
//         window.scrollBy({
//             top: scrollLength,
//             behavior: "smooth"
//         });
//     }
// }


// ==================================
// TO SCROLL TO A PARTICULAR ELEMENT
// ==================================

// window.scrollTo({left:0,top:findPos(document.getElementById("section-features")), behavior: "smooth"});

// function findPos(obj) {
//     var curtop = 0;
//     if (obj.offsetParent) {
//         do {
//             curtop += obj.offsetTop;
//         } while (obj = obj.offsetParent);
//     return [curtop];
//     }
// }

// ===================================