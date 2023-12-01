import menuList from "../menuData.js";

function createMenuCard(item){
    const card = document.createElement("div");
    card.classList.add("card");

    const name = document.createElement("div");
    name.textContent = item.name;
    name.classList.add("card__name");

    const content = document.createElement("div");
    content.textContent = item.content;
    content.classList.add("card__content");

    const menuImage = document.createElement("img");
    menuImage.setAttribute("src", item.photo);
    menuImage.setAttribute("alt", item.name);
    menuImage.classList.add("card__image");

    const price = document.createElement("div");
    price.textContent = `${item.price} $`;
    price.classList.add("card__price");

    card.appendChild(name);
    card.appendChild(content);
    card.appendChild(menuImage);
    card.appendChild(price);

    return card;
}

export default function (){
    const menuContent = document.createElement("div");
    menuContent.classList.add("menu")

    menuList.forEach((item) => {
        const menuCard = createMenuCard(item)
        menuContent.appendChild(menuCard);
    })

    return menuContent;
}