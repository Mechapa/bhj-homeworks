const loadingGif = document.getElementById("loader");
const itemsList = document.getElementById("items");
const xhr = new XMLHttpRequest();
xhr.open("GET", 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener("readystatechange", function () {
    if (xhr.status === 200 && xhr.readyState === xhr.DONE) {
        loadingGif.classList.remove("loader_active");
        const valuteList = JSON.parse(xhr.responseText).response.Valute;
        for (let valute in valuteList) {
            let newValute = document.createElement("div");
            newValute.classList.add("item");
            newValute.innerHTML =
                `<div class="item__code">
                    ${valuteList[valute].CharCode}
                </div>
                <div class="item__value">
                    ${valuteList[valute].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`
            itemsList.append(newValute);
        }
    }
})