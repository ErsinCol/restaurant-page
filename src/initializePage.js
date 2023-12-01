function createTab(name, dataset){
    const tab = document.createElement("div");
    tab.textContent = name;
    tab.dataset.tab = dataset;
    tab.classList.add("tab-menu__tab");
    if(name === "Home"){
        tab.classList.add("tab-menu__tab--active");
    }
    return tab;
}

export default function(){
    const content = document.getElementById("content");

    const tabMenu = document.createElement("div");
    tabMenu.classList.add("tab-menu");

    const homeTab = createTab("Home", "home");
    const menuTab = createTab("Menu", "menu");
    const contactTab = createTab("Contact", "contact");

    const header = document.createElement("header");
    header.classList.add("header");
    const nav = document.createElement("nav");

    const headline = document.createElement("div");
    headline.textContent = "PIZZA";
    headline.classList.add("header__headline");

    tabMenu.appendChild(homeTab);
    tabMenu.appendChild(menuTab);
    tabMenu.appendChild(contactTab);

    nav.appendChild(tabMenu);
    header.appendChild(headline);
    header.appendChild(nav);

    document.body.insertBefore(header, content);
}