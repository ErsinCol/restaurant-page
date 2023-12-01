import PizzaIcon from "./assets/img/pizza.png";
export default function(){
    const content = document.getElementById("content");

    const tabMenu = document.createElement("div");
    tabMenu.classList.add("tab-menu");

    const homeTab = document.createElement("div");
    homeTab.textContent = "Home";
    homeTab.classList.add("tab-menu__tab");
    homeTab.classList.add("tab-menu__tab--active");
    const menuTab = document.createElement("div");
    menuTab.textContent = "Menu"
    menuTab.classList.add("tab-menu__tab");
    const contactTab = document.createElement("div");
    contactTab.textContent = "Contact"
    contactTab.classList.add("tab-menu__tab");

    const header = document.createElement("header");
    const nav = document.createElement("nav");

    tabMenu.appendChild(homeTab);
    tabMenu.appendChild(menuTab);
    tabMenu.appendChild(contactTab);

    nav.appendChild(tabMenu);
    header.appendChild(nav);

    const footer = document.createElement("footer");
    footer.textContent = "Footer";

    document.body.insertBefore(header, content);
    document.body.appendChild(footer);
}