
const active = document.getElementsByClassName("hamburger")[0];
const menuLeft = document.getElementsByClassName("l-menu")[0];
const active1 = document.getElementsByClassName("hamburger")[1];
const menu = document.getElementsByClassName("menu-block")[0];
const a = document.getElementsByName("a");

active1.addEventListener("click",function(e) {
    if (e.target.classList.contains("hamburger")) {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
            menu.classList.remove("opened");
            return
        }
        else {
            e.target.classList.add("active");
            menu.classList.add("opened");
        }
    } 
    else {
        if (e.target.parentNode.classList.contains("active")) {
            e.target.parentNode.classList.remove("active");
            menu.classList.remove("opened");
            return
        }
        else {
            e.target.parentNode.classList.add("active");
            menu.classList.add("opened");
        }
    }
})

active.addEventListener("click",function(e){
    if (e.target.classList.contains("hamburger")) {
        if (e.target.classList.contains("active")) {
            e.target.classList.remove("active");
            menuLeft.classList.remove("open");
            return
        }
        else {
            e.target.classList.add("active");
            menuLeft.classList.add("open");
        }
    } 
    else {
        if (e.target.parentNode.classList.contains("active")) {
            e.target.parentNode.classList.remove("active");
            menuLeft.classList.remove("open");
            return
        }
        else {
            e.target.parentNode.classList.add("active");
            menuLeft.classList.add("open");
        }
    }
})


