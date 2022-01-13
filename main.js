import {getCarData} from "./car-data.js";
import { pushToHtmlPrice } from "./helpers.js";
import { pushToHtmlBrand } from "./helpers.js";
import { pushToHtmlYear } from "./helpers.js";
import { pushToHtmlYear1 } from "./helpers.js";
import { pushToHTML1 } from "./helpers.js";
import { pushToHtmlB } from "./helpers.js";
import { pushToHtmlA } from "./helpers.js";
import { pushToHtmlOnlyVolume } from "./helpers.js";
import { pushToHtmlVolumePrice } from "./helpers.js";
import { pushToHtmlVolumeYear } from "./helpers.js";
import { pushToHtmlVolume } from "./helpers.js";

const mainSection = document.querySelector(".main-section");
const carSection = document.querySelector(".car-section");
const button = document.querySelector(".btn-search");
const brand = document.querySelector(".brand");
const priceB = document.querySelector(".priceB");
const priceA = document.querySelector(".priceA");
const yearB = document.querySelector(".yearB");
const yearA = document.querySelector(".yearA");
const volumeB = document.querySelector(".volumeB")
const volumeA = document.querySelector(".volumeA")

export const data = getCarData();

const loadPage = window.addEventListener('load', (event) => {
    for (let i=0; i < data.length; i++) {
        const div = document.createElement("div")
        div.classList.add("myDiv")

        const aTag = document.createElement("a")
        aTag.href = "./car.html";
        aTag.target = "_blank";
        const image = document.createElement("img");
        image.src = data[i].strCarImage;
        image.style.width = "400px";
        aTag.appendChild(image);
        div.appendChild(aTag);
        carSection.appendChild(div);

        const article = document.createElement("div")
        div.classList.add("article")
        div.appendChild(article)

        const paragraph = document.createElement("div");
        paragraph.innerText = data[i].strCarBrand;
        article.classList.add("myDiv1")
        article.appendChild(paragraph);

        const paragraph3 = document.createElement("div");
        paragraph3.innerText = data[i].strCarModel;
        article.classList.add("myDiv1")
        article.appendChild(paragraph3);

        const paragraph4 = document.createElement("div");
        paragraph4.innerText = data[i].strCarYear;
        article.classList.add("myDiv1")
        article.appendChild(paragraph4);
        
        const paragraph5 = document.createElement("div" + 'hello');
        paragraph5.innerText = data[i].numCarVolum;
        article.classList.add("myDiv1")
        article.appendChild(paragraph5);


        const paragraph2 = document.createElement("div");
        paragraph2.innerHTML = data[i].numCarPriceUSD;
        article.classList.add("myDiv1")
        article.appendChild(paragraph2);
    }
});

const processClick = (event) => {
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    event.preventDefault()

    if (brand.value != "" && priceB.value == "" && priceA.value == "" && yearB.value == "" && yearA.value == "" && volumeB.value == "" && volumeA.value == ""){
        return pushToHtmlBrand();
    } else if (brand.value == "" && priceB.value !== "" && priceA.value == "" && yearB.value == "" && yearA.value == "" && volumeB.value == "" && volumeA.value == "") {
        return pushToHtmlB();
    } else if (brand.value == "" && priceB.value == "" && priceA.value !== "" && yearB.value == "" && yearA.value == "" && volumeB.value == "" && volumeA.value == "") {
        return pushToHtmlA();
    } else if (brand.value != "" && priceB.value !== "" && priceA.value !== "" && yearB.value == "" && yearA.value == "" && volumeB.value == "" && volumeA.value == "") {
        return pushToHtmlPrice();
    } else if (brand.value == "" && priceB.value !== "" && priceA.value !== "" && yearB.value !== "" && yearA.value !== "" && volumeB.value == "" && volumeA.value == ""){
        return pushToHtmlYear();
    } else if (brand.value == "" && priceB.value !== "" && priceA.value !== "" && yearB.value == "" && yearA.value == "" && volumeB.value == "" && volumeA.value == "") {
        return pushToHtmlPrice();
    } else if (brand.value !== "" && priceB.value !== "" && priceA.value !== "" && yearB.value !== "" && yearA.value !== "" && volumeB.value == "" && volumeA.value == "") {
        return pushToHTML1();
    } else if (brand.value == "" && priceB.value == "" && priceA.value == "" && yearB.value == "" && yearA.value == "" && volumeB.value !== "" && volumeA.value !== "") {
        return pushToHtmlOnlyVolume();
    } else if (brand.value !== "" && priceB.value == "" && priceA.value == "" && yearB.value == "" && yearA.value == "" && volumeB.value !== "" && volumeA.value !== "") {
        return pushToHtmlVolume();
    } else if (brand.value == "" && priceB.value !== "" && priceA.value !== "" && yearB.value == "" && yearA.value == "" && volumeB.value !== "" && volumeA.value !== "") {
        return pushToHtmlVolumePrice();
    } else if (brand.value == "" && priceB.value == "" && priceA.value == "" && yearB.value !== "" && yearA.value !== "" && volumeB.value !== "" && volumeA.value !== "") {
        return pushToHtmlVolumeYear();
    } else if (brand.value !== "" && priceB.value !== "" && priceA.value !== "" && yearB.value !== "" && yearA.value !== "" && volumeB.value !== "" && volumeA.value !== "") {
        return pushToHtmlVolume();
    } else {
        return pushToHtmlYear1();
    }
}

button.addEventListener("click", processClick)