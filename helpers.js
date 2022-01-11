import { getCarData } from "./car-data.js";

const brand = document.querySelector(".brand");
const container = document.querySelector(".container");
const priceB = document.querySelector(".priceB");
const priceA = document.querySelector(".priceA");
const yearB = document.querySelector(".yearB");
const yearA = document.querySelector(".yearA");


export const filteredCar = (searchedCarType) => {
    const data = getCarData();
    const filteredData = data.filter((carObj) => {
        //console.log(carObj.strCarBrand)
        const carName = carObj.strCarBrand.toLowerCase();
        const carPrice = carObj.numCarPriceUSD.toString()
        const carYear = carObj.strCarYear;
        return carName.includes(searchedCarType) ||  carYear.includes(searchedCarType) || carPrice.includes(searchedCarType)
        
    } )
    //console.log(typeof filteredData, 'line19')
    return filteredData;
}

function pushToHTML () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD)){
            let paragraph = document.createElement("p");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            container.appendChild(paragraph);
            let model = document.createElement("p");
            model.innerText = filteredCarByBrand[i].numCarPriceUSD;
            container.appendChild(model);
            let year = document.createElement("p");
            year.innerText = filteredCarByBrand[i].strCarYear;
            container.appendChild(year);
            let image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            container.appendChild(image);
            image.style.width = "300px"
} } }


function pushToHtmlYear () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear) && (priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD)){
            let paragraph = document.createElement("p");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            container.appendChild(paragraph);
            let model = document.createElement("p");
            model.innerText = filteredCarByBrand[i].numCarPriceUSD;
            container.appendChild(model);
            let year = document.createElement("p");
            year.innerText = filteredCarByBrand[i].strCarYear;
            container.appendChild(year);
            let image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            container.appendChild(image);
            image.style.width = "300px"
} } }


function pushToHtmlYear1 () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear){
            let paragraph = document.createElement("p");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            container.appendChild(paragraph);
            let model = document.createElement("p");
            model.innerText = filteredCarByBrand[i].numCarPriceUSD;
            container.appendChild(model);
            let year = document.createElement("p");
            year.innerText = filteredCarByBrand[i].strCarYear;
            container.appendChild(year);
            let image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            container.appendChild(image);
            image.style.width = "300px"
} } }

function pushToHtmlBrand () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        let paragraph = document.createElement("p");
        paragraph.innerText = filteredCarByBrand[i].strCarBrand;
        container.appendChild(paragraph);
        let model = document.createElement("o");
        model.innerText = filteredCarByBrand[i].numCarPriceUSD;
        container.appendChild(model);
        let year = document.createElement("p");
        year.innerText = filteredCarByBrand[i].strCarYear;
        container.appendChild(year);
        let image = document.createElement("img");
        image.src = filteredCarByBrand[i].strCarImage;
        container.appendChild(image);
        image.style.width = "300px"
    }
}

function pushToHTML1 () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD) && (yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear)){
            let paragraph = document.createElement("p");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            container.appendChild(paragraph);
            let model = document.createElement("p");
            model.innerText = filteredCarByBrand[i].numCarPriceUSD;
            container.appendChild(model);
            let year = document.createElement("p");
            year.innerText = filteredCarByBrand[i].strCarYear;
            container.appendChild(year);
            let image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            container.appendChild(image);
            image.style.width = "300px"
} } }


export { pushToHTML1 }
export { pushToHTML };
export { pushToHtmlBrand };
export { pushToHtmlYear };
export { pushToHtmlYear1 };