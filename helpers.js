import { getCarData } from "./car-data.js";
const mainSection = document.querySelector(".main-section");
const brand = document.querySelector(".brand");
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
} } }


function pushToHtmlYear () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear) && (priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD)){
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
} } }


function pushToHtmlYear1 () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear){
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
} } }

function pushToHtmlBrand () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

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

function pushToHTML1 () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD) && (yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear)){
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
} } }


function pushToHtmlB () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(priceB.value <= filteredCarByBrand[i].numCarPriceUSD){
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
} } }

function pushToHtmlA () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(priceA.value >= filteredCarByBrand[i].numCarPriceUSD){
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
} } }


export { pushToHTML1 }
export { pushToHTML };
export { pushToHtmlB }
export { pushToHtmlA }
export { pushToHtmlBrand };
export { pushToHtmlYear };
export { pushToHtmlYear1 };
