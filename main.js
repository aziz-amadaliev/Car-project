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
        const myDiv = document.createElement("div");
        myDiv.classList.add("myDiv");
        carSection.appendChild(myDiv);

        const aTag = document.createElement("a");
        aTag.href = "./car.html";
        aTag.target = "_blank";
        myDiv.appendChild(aTag);
        const image = document.createElement("img");
        image.src = data[i].strCarImage;
        image.style.width = "300px";
        aTag.appendChild(image);
        
        const article = document.createElement("div");
        article.classList.add("article2");
        myDiv.appendChild(article);

        //carBrand
        const parDiv = document.createElement("div");
        parDiv.classList.add("parDiv");
        article.appendChild(parDiv);

        const paragraphDesc = document.createElement("div");
        paragraphDesc.innerText = "Brand:  ";
        paragraphDesc.classList.add("paragraphDesc");
        parDiv.appendChild(paragraphDesc);

        const paragraph = document.createElement("div");
        paragraph.innerText = data[i].strCarBrand;
        paragraph.classList.add("parDiv2");
        parDiv.appendChild(paragraph);


        //carModel
        const parDiv2 = document.createElement("div");
        parDiv2.classList.add("parDiv");
        article.appendChild(parDiv2);

        const paragraph2Desc = document.createElement("div")
        paragraph2Desc.innerText = "Model:  ";
        paragraph2Desc.classList.add("paragraphDesc");
        parDiv2.appendChild(paragraph2Desc);

        const paragraph2 = document.createElement("div");
        paragraph2.innerText = data[i].strCarModel;
        paragraph2.classList.add("parDiv2");
        parDiv2.appendChild(paragraph2);

        //carYear
        const parDiv3 = document.createElement("div");
        parDiv3.classList.add("parDiv");
        article.appendChild(parDiv3);

        const paragraph3Desc = document.createElement("div")
        paragraph3Desc.innerText = "Year:  ";
        paragraph3Desc.classList.add("paragraphDesc");
        parDiv3.appendChild(paragraph3Desc);

        const paragraph3 = document.createElement("div");
        paragraph3.innerText = data[i].strCarYear;
        article.classList.add("parDiv2");
        parDiv3.appendChild(paragraph3);

        //carVolum
        const parDiv4 = document.createElement("div");
        parDiv4.classList.add("parDiv");
        article.appendChild(parDiv4);

        const paragraph4Desc = document.createElement("div");
        paragraph4Desc.innerText = "Volume, m3:  ";
        paragraph4Desc.classList.add("paragraphDesc");
        parDiv4.appendChild(paragraph4Desc);

        const paragraph4 = document.createElement("div");
        paragraph4.innerText = data[i].numCarVolum;
        article.classList.add("parDiv2");
        parDiv4.appendChild(paragraph4);


        //carPrice
        const parDiv5 = document.createElement("div");
        parDiv5.classList.add("parDiv");
        article.appendChild(parDiv5);

        const paragraph5Desc = document.createElement("div");
        paragraph5Desc.innerText = "Price:  $ ";
        paragraph5Desc.classList.add("paragraphDesc");
        parDiv5.appendChild(paragraph5Desc);

        const paragraph5 = document.createElement("div");
        paragraph5.innerHTML = data[i].numCarPriceUSD;
        article.classList.add("parDiv2");
        parDiv5.appendChild(paragraph5);
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