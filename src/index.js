import initializePage from "./initializePage.js";
import "./assets/style.css";
document.addEventListener("DOMContentLoaded", () => {
    initializePage();
})

/*
* tabbed browsing
* menu page, contact page, home page
*
* her bir tab'ın content'ini kendi modülüne yerleştir
* her modül, bir div öğesi oluşturucak, bu öğeye uygun içerik ve stilleri ekleyecek, ve sonrasında doma ekleyen bir işlevi dışa aktarıcak
*
* sekme değiştirme mantığını index.js içine yaz
* her sekme için mevcut içeri silen ve ardından tekrar doldurmak için doğru sekme modülünü çalıştıran event listenerlar olmalıdır.
* */