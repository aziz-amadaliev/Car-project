import {getCarData} from "./car-data.js";
import {filteredCar} from "./helpers.js";

const data = getCarData();

const mainSection = document.querySelector(".main-section");
const carSection = document.querySelector(".car-section");
const button = document.querySelector(".btn-search");
const brand = document.querySelector(".brand");


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

export const processClick = (event) => {
    event.preventDefault()

    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }

    const searchedCarBrand = brand.value.toLowerCase();
    //console.log(searchedCarBrand, 'line44')

    const filteredCarByBrand = filteredCar(searchedCarBrand);
    //console.log(filteredCarByBrand, 'line32')


    for (let i=0; i < filteredCarByBrand.length; i++) {
        const div = document.createElement("div")
        div.classList.add("myDiv")

        const paragraph = document.createElement("p");
        //console.log(paragraph.classList)
        paragraph.innerText = filteredCarByBrand[i].strCarBrand;
        paragraph.classList.add("car-text")
        div.appendChild(paragraph);

        const image = document.createElement("img");
        const aTag = document.createElement("a")
        aTag.href = "./car.html";
        aTag.target = "_blank";

        image.src = filteredCarByBrand[i].strCarImage;
        image.classList.add("car-image")
        image.style.width = "500px";
        aTag.appendChild(image);
        div.appendChild(aTag)

        mainSection.appendChild(div);
       
    }

}

button.addEventListener("click", processClick)
