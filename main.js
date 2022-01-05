import {getCarData} from "./car-data.js";
import {filteredCar} from "./helpers.js";

const data = getCarData();

const container = document.querySelector(".container");
const button = document.querySelector(".btn-search");
const brand = document.querySelector(".brand");

const processClick = (event) => {
    event.preventDefault()

    const searchedCarBrand = brand.value.toLowerCase();

    const filteredCarByBrand = filteredCar(searchedCarBrand);
    console.log(filteredCarByBrand, 'line32')
    console.log(filteredCarByBrand[0].strCarBrand, 'line33')

    for (let i=0; i < filteredCarByBrand.length; i++) {
        const paragraph = document.createElement("p");
        paragraph.innerText = filteredCarByBrand[i].strCarBrand;
        container.appendChild(paragraph);

        const image = document.createElement("img");
        image.src = filteredCarByBrand[i].strCarImage;
        container.appendChild(image);
        image.style.width = "300px"
        //image.style.display = "inline-block"
    }

}

button.addEventListener("click", processClick)

/* const openImage = () => {
    console.log(filteredCarByBrand[1], 'line36')
}

image.addEventListener("click", openImage) */

