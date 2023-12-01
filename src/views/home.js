function createHeroSection(title, description){
    const heroSection = document.createElement("div");
    heroSection.classList.add("hero-section");

    const titleEl = document.createElement("div");
    titleEl.textContent = title;
    titleEl.classList.add("hero-section__title");

    const descriptionEl = document.createElement("div");
    descriptionEl.textContent = description;
    descriptionEl.classList.add("hero-section__description");

    heroSection.appendChild(titleEl);
    heroSection.appendChild(descriptionEl);

    return heroSection;
}

export default function (){
    const homeContent = document.createElement("div");
    homeContent.classList.add("home");

    const heroSection = createHeroSection("Welcome to Our Pizza Haven", "Indulge in the artistry of pizza perfection at our cozy haven. Every slice tells a tale of passion, quality, and the joy of savoring delicious moments.");

    homeContent.appendChild(heroSection);

    return homeContent;
}