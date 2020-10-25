const navBtn = document.querySelector(".navbar");
let menOpen = false;

navBtn.addEventListener("click", () => {
    if(!menOpen){
        navBtn.classList.add("open");
        menOpen = true;
    } else {
        navBtn.classList.remove("open");
        menOpen = false;
    }
});