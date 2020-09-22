console.log('connected');
// let navMask = document.getElementById("top-nav__mask");
// let grid = document.getElementById("grid");
// grid.addEventListener("scroll", navAnimation);

// function navAnimation() {
//     navMask.style.backgroundColor = `rgba(9, 42, 48,${Math.min((1/100)*mainView.scrollTop+0.6, 1)})`;
// }

let rating = parseFloat(document.getElementsByClassName("book__rating-int")[0].textContent);
let ratingStar = document.getElementsByClassName("rating__star");

for(let i=0; i<5; i++) {
    if(rating > 1) {
        ratingStar[i].style.backgroundImage = 'url("icons/star-3.png")';
    }
    else if(rating > 0.5) {
        ratingStar[i].style.backgroundImage = 'url("icons/star-2.png")';
    }
    else if(rating > 0) {
        ratingStar[i].style.backgroundImage = 'url("icons/star-1.png")';
    }
    else {
        ratingStar[i].style.backgroundImage = 'url("icons/star-0.png")';
    }
    rating--;
}