import {getCarData} from "./car-data.js";
import {filteredCar} from "./helpers.js";

const data = getCarData();

const container = document.querySelector(".container");
const button = document.querySelector(".btn-search");
const brand = document.querySelector(".brand");
const priceB = document.querySelector(".price");
const priceA = document.querySelector(".price1");

const processClick = (event) => {
    let paragraph = null;
    let image = null;
    let model = null;
   
    /*     container.appendChild(paragraph);
    container.appendChild(image);
    container.appendChild(model); */
   /*  container.appendChild(image);
    const paragraph = document.createElement("p");
    const image = document.createElement("img"); */
    event.preventDefault()

    const searchedCarBrand = brand.value.toLowerCase();

    const filteredCarByBrand = filteredCar(searchedCarBrand);
    console.log(filteredCarByBrand, 'line32')
    console.log(filteredCarByBrand[0].strCarBrand, 'line33')

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if (priceB.value != "" && priceA.value != "") {
            if(priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD){
                paragraph = document.createElement("p");
                paragraph.innerText = filteredCarByBrand[i].strCarBrand;
                container.appendChild(paragraph);
                model = document.createElement("o");
                model.innerText = filteredCarByBrand[i].numCarPriceUSD;
                container.appendChild(model);
                image = document.createElement("img");
                image.src = filteredCarByBrand[i].strCarImage;
                container.appendChild(image);
                image.style.width = "300px"
        }
        
        //image.style.display = "inline-block"
        } else {
            paragraph = document.createElement("p");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            container.appendChild(paragraph);
            model = document.createElement("o");
            model.innerText = filteredCarByBrand[i].numCarPriceUSD;
            container.appendChild(model);
            image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            container.appendChild(image);
            image.style.width = "300px"
        }
    }

}

button.addEventListener("click", processClick)

/* const openImage = () => {
    console.log(filteredCarByBrand[1], 'line36')
}

image.addEventListener("click", openImage) */

