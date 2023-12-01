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