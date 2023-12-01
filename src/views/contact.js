function createInputField(placeholder){
    const input = document.createElement("input");
    input.classList.add("contact-form__input")
    input.setAttribute("placeholder", placeholder);

    return input;
}

function createTextarea(placeholder){
    const textarea = document.createElement("textarea");
    textarea.classList.add("contact-form__textarea")
    textarea.setAttribute("placeholder", placeholder)
    textarea.setAttribute("rows", "4");
    textarea.setAttribute("cols", "50");

    return textarea;
}

function createContactForm(){
    const formEl = document.createElement("form");
    formEl.classList.add("contact__form");
    formEl.classList.add("contact-form");

    const nameInput = createInputField("Name");
    const emailInput = createInputField("Email");
    const subjectInput = createInputField("Subject");
    const messageArea = createTextarea("Message");

    const sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    sendButton.classList.add("contact-form__send-btn")

    formEl.appendChild(nameInput);
    formEl.appendChild(emailInput);
    formEl.appendChild(subjectInput);
    formEl.appendChild(messageArea);
    formEl.appendChild(sendButton);

    formEl.addEventListener("submit", (event) => {
        event.preventDefault();
    })

    return formEl;
}

function createContactMap(){
    const iframeEl = document.createElement("iframe");
    iframeEl.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.985507079451!2d28.971553676558553!3d41.025573018358884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8b330b!2sGalata%20Kulesi!5e0!3m2!1str!2str!4v1701439959373!5m2!1str!2str";
    iframeEl.classList.add("contact__map");

    return iframeEl;
}

export default function (){
    const contactContent = document.createElement("div");
    contactContent.classList.add("contact")

    const headline = document.createElement("div");
    headline.textContent = "Contact Us";
    headline.classList.add("contact__headline");

    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contact__wrapper")

    const contactForm = createContactForm();
    const contactMap = createContactMap();

    contactWrapper.appendChild(contactForm);
    contactWrapper.appendChild(contactMap);

    contactContent.appendChild(headline);
    contactContent.appendChild(contactWrapper)

    return contactContent;
}