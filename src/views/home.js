export default function (){
    const homeContent = document.createElement("div");
    homeContent.textContent = "Burası home page";
    homeContent.classList.add("content__home")

    return homeContent;
}