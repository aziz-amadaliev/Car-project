import { pushToHTML } from "./helpers.js";
import { pushToHtmlBrand } from "./helpers.js";
import { pushToHtmlYear } from "./helpers.js";


const button = document.querySelector(".btn-search");
const priceB = document.querySelector(".priceB");
const priceA = document.querySelector(".priceA");
const yearB = document.querySelector(".yearB");
const yearA = document.querySelector(".yearA");

const processClick = (event) => {
    event.preventDefault()

        if (priceB.value != "" && priceA.value != "") {
            return pushToHTML ();
        }else if (yearB.value != "" && yearA.value != "" || priceB.value != "" && priceA.value != "") {
            return pushToHtmlYear ();
        } else {
            return pushToHtmlBrand ();
          }
}

button.addEventListener("click", processClick);


