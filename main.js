import { pushToHTML } from "./helpers.js";
import { pushToHtmlBrand } from "./helpers.js";
import { pushToHtmlYear } from "./helpers.js";
import { pushToHtmlYear1 } from "./helpers.js";
import { pushToHTML1 } from "./helpers.js";
import { pushToHtmlB } from "./helpers.js";
import { pushToHtmlA } from "./helpers.js";
import { getCarData } from "./car-data.js";

const mainSection = document.querySelector(".main-section");
const brand = document.querySelector(".brand");
const button = document.querySelector(".btn-search");
const priceB = document.querySelector(".priceB");
const priceA = document.querySelector(".priceA");
const yearB = document.querySelector(".yearB");
const yearA = document.querySelector(".yearA");
const carSection = document.querySelector(".car-section");
const data = getCarData()

window.addEventListener('load', (event) => {
    for (let i=0; i < data.length; i++) {
        const div = document.createElement("div")
        div.classList.add("myDiv")

        const paragraph = document.createElement("p");
        paragraph.innerText = data[i].strCarBrand;
        div.appendChild(paragraph);

        const aTag = document.createElement("a")
        aTag.href = "./car.html";
        aTag.target = "_blank";
        const image = document.createElement("img");
        image.src = data[i].strCarImage;
        image.style.width = "400px";
        aTag.appendChild(image);
        div.appendChild(aTag);
        carSection.appendChild(div);
    }

});

console.log(data)

const processClick = (event) => {
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    event.preventDefault()

        if (brand.value != "" && priceB.value == "" && priceA.value == "" && yearB.value == "" && yearA.value == ""){
            return pushToHtmlBrand();
        } else if (brand.value == "" && priceB.value !== "" && priceA.value == "" && yearB.value == "" && yearA.value == "") {
            return pushToHtmlB();
        } else if (brand.value == "" && priceB.value == "" && priceA.value !== "" && yearB.value == "" && yearA.value == "") {
            return pushToHtmlA();
        } else if (brand.value != "" && priceB.value !== "" && priceA.value !== "" && yearB.value == "" && yearA.value == "") {
            return pushToHTML();
        } else if (brand.value == "" && priceB.value !== "" && priceA.value !== "" && yearB.value !== "" && yearA.value !== ""){
            return pushToHtmlYear();
        } else if (brand.value == "" && priceB.value !== "" && priceA.value !== "" && yearB.value == "" && yearA.value == "") {
            return pushToHTML();
        } else if (priceB.value !== "" && priceA.value !== "" && brand.value != "" &&yearB.value !== "" && yearA.value !== "") {
            return pushToHTML1();
        } else {
            return pushToHtmlYear1();
        }
}

button.addEventListener("click", processClick);


