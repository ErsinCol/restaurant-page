import initializePage from "./initializePage.js";
import "./assets/style.css";
import homeView from "./views/home";
import contactView from "./views/contact";
import menuView from "./views/menu";

document.addEventListener("DOMContentLoaded", () => {
    initializePage();

    document.getElementById("content").appendChild(views.home());

    const tabsContainer = document.querySelector(".tab-menu");
    tabsContainer.addEventListener("click", (event) => {
        if(event.target.classList.contains("tab-menu__tab")){
            switchTab(event.target);
        }
    })
})

const views = {
    home: () => homeView(),
    menu: () => menuView(),
    contact: () => contactView(),
}

function setActiveTab(tab){
    const tabs = document.querySelectorAll(".tab-menu__tab");
    tabs.forEach(tab => tab.classList.remove("tab-menu__tab--active"));

    tab.classList.add("tab-menu__tab--active");
}

function switchTab(selectedTab){
    setActiveTab(selectedTab)

    const tabContent = views[selectedTab.dataset.tab]();

    document.getElementById("content").innerHTML = "";
    document.getElementById("content").appendChild(tabContent);
}