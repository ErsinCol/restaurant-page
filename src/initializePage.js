import PizzaIcon from "./assets/img/pizza.png";
export default function(){
    const homeHeader = document.createElement("div");
    homeHeader.classList.add("home-header");

    const pizzaImage = document.createElement("img");
    pizzaImage.setAttribute("src", PizzaIcon);
    pizzaImage.setAttribute("alt", "pizza");
    pizzaImage.setAttribute("width", "32px");
    pizzaImage.setAttribute("height", "32px");

    const headline = document.createElement("h1");
    headline.textContent = "PIZZA";

    homeHeader.appendChild(pizzaImage);
    homeHeader.appendChild(headline);
    homeHeader.appendChild(headline);

    const wonderfulText = document.createElement("div");
    wonderfulText.textContent = "PREMIUM QUALITY, FINEST INGREDIENTS";

    const content = document.getElementById("content")
    content.appendChild(homeHeader);
    content.appendChild(wonderfulText);
}