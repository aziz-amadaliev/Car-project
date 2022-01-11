import { pushToHTML } from "./helpers.js";
import { pushToHtmlBrand } from "./helpers.js";
import { pushToHtmlYear } from "./helpers.js";
import { pushToHtmlYear1 } from "./helpers.js";
import { pushToHTML1 } from "./helpers.js";
const brand = document.querySelector(".brand");
const button = document.querySelector(".btn-search");
const priceB = document.querySelector(".priceB");
const priceA = document.querySelector(".priceA");
const yearB = document.querySelector(".yearB");
const yearA = document.querySelector(".yearA");

const processClick = (event) => {
    event.preventDefault()

        if (brand.value != "" && priceB.value == "" && priceA.value == "" && yearB.value == "" && yearA.value == ""){
            return pushToHtmlBrand();
        }else if (brand.value != "" && priceB.value !== "" && priceA.value !== "" && yearB.value == "" && yearA.value == "") {
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


