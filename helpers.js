import { getCarData } from "./car-data.js";
import { data } from "./main.js";
const mainSection = document.querySelector(".main-section");
const brand = document.querySelector(".brand");
const priceB = document.querySelector(".priceB");
const priceA = document.querySelector(".priceA");
const yearB = document.querySelector(".yearB");
const yearA = document.querySelector(".yearA");
const volumeB = document.querySelector(".volumeB")
const volumeA = document.querySelector(".volumeA")

const filteredCar = (searchedCarType) => {
    const data = getCarData();
    const filteredData = data.filter((carObj) => {
        const carName = carObj.strCarBrand.toLowerCase();
        const carPrice = carObj.numCarPriceUSD.toString()
        const carYear = carObj.strCarYear;
        return carName.includes(searchedCarType) ||  carYear.includes(searchedCarType) || carPrice.includes(searchedCarType)
    } )
    return filteredData;
}

//Body
const body = document.querySelector("#body")

body.addEventListener('change', showFilteredCarBody)
function showFilteredCarBody (event){
    const choice = body.value;
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    const filteredCarBody = data.filter((carObj) => {

        const carBodyStyle = carObj.strCarBody.toLowerCase();
        const carImage = carObj.strCarImage;
        const brandName = carObj.strCarBrand;
        if(carBodyStyle === choice){
            const div = document.createElement("div")
            div.classList.add("myDiv")

            const paragraph = document.createElement("p");
            paragraph.innerText = carObj.strCarBrand;
            paragraph.classList.add("car-text")
            div.appendChild(paragraph);

            const image = document.createElement("img");
            const aTag = document.createElement("a")
            aTag.href = "./car.html";
            aTag.target = "_blank";

            image.src = carObj.strCarImage;
            image.classList.add("car-image")
            image.style.width = "500px";
            aTag.appendChild(image);
            div.appendChild(aTag)
            mainSection.appendChild(div);
        }
    }); 
} 

//Color
const color = document.querySelector("#color");

color.addEventListener('change', showFilteredCarColor)
function showFilteredCarColor (event){
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    const colorChoice = color.value;
    const filteredCarColor = data.filter((carObj) => {
        
        const carBodyColor = carObj.strCarColor.toLowerCase();
        const carImage = carObj.strCarImage;
        
        if(carBodyColor === colorChoice){
            const div = document.createElement("div")
            div.classList.add("myDiv")

            const paragraph = document.createElement("p");
            paragraph.innerText = carObj.strCarBrand;
            paragraph.classList.add("car-text")
            div.appendChild(paragraph);

            const image = document.createElement("img");
            const aTag = document.createElement("a")
            aTag.href = "./car.html";
            aTag.target = "_blank";

            image.src = carObj.strCarImage;
            image.classList.add("car-image")
            image.style.width = "500px";
            aTag.appendChild(image);
            div.appendChild(aTag)
            mainSection.appendChild(div);
        }
    }); 
} 

//Engine
const engine = document.querySelector("#engine");
engine.addEventListener('change', showFilteredCarEngine)

function showFilteredCarEngine (event){
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    const engineChoice = engine.value;
    
    const filteredCarEngine = data.filter((carObj) => {
        const carEngine = carObj.strCarEngine.toLowerCase();
        const carImage = carObj.strCarImage;
        
        if(carEngine === engineChoice){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
            paragraph.innerText = carObj.strCarBrand;
            paragraph.classList.add("car-text")
            div.appendChild(paragraph);
    
            const image = document.createElement("img");
            const aTag = document.createElement("a")
            aTag.href = "./car.html";
            aTag.target = "_blank";
    
            image.src = carObj.strCarImage;
            image.classList.add("car-image")
            image.style.width = "500px";
            aTag.appendChild(image);
            div.appendChild(aTag)
            mainSection.appendChild(div); 
        }
    });   
}

//Gearbox
const gearbox = document.querySelector("#gearbox");
gearbox.addEventListener('change', showFilteredCarGearbox)

function showFilteredCarGearbox (event){
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    const gearboxChoice = gearbox.value;
    
    const filteredCarGearbox = data.filter((carObj) => {
        const carGearbox = carObj.strCarGearbox.toLowerCase();
        const carImage = carObj.strCarImage;
        
        if(carGearbox === gearboxChoice){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
            paragraph.innerText = carObj.strCarBrand;
            paragraph.classList.add("car-text")
            div.appendChild(paragraph);
    
            const image = document.createElement("img");
            const aTag = document.createElement("a")
            aTag.href = "./car.html";
            aTag.target = "_blank";
    
            image.src = carObj.strCarImage;
            image.classList.add("car-image")
            image.style.width = "500px";
            aTag.appendChild(image);
            div.appendChild(aTag)
            mainSection.appendChild(div); 
        }
    });   
}


/*--------- Brand, Price, Year, Volume ------------ */

function pushToHtmlPrice () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD)){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}

function pushToHtmlYear () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear) && (priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD)){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}


function pushToHtmlYear1 () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}

function pushToHtmlBrand () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        const div = document.createElement("div")
        div.classList.add("myDiv")

        const paragraph = document.createElement("p");
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
}


function pushToHtmlB () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(priceB.value <= filteredCarByBrand[i].numCarPriceUSD){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}

function pushToHtmlA () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(priceA.value >= filteredCarByBrand[i].numCarPriceUSD){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}

function pushToHtmlOnlyVolume () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((volumeB.value <= filteredCarByBrand[i].numCarVolum && volumeA.value >= filteredCarByBrand[i].numCarVolum)){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}

function pushToHtmlVolumePrice () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD) &&(volumeB.value <= filteredCarByBrand[i].numCarVolum && volumeA.value >= filteredCarByBrand[i].numCarVolum)){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}

function pushToHtmlVolumeYear () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear) && (volumeB.value <= filteredCarByBrand[i].numCarVolum && volumeA.value >= filteredCarByBrand[i].numCarVolum)){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}

function pushToHtmlVolume () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD) && (yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear) && (volumeB.value <= filteredCarByBrand[i].numCarVolum && volumeA.value >= filteredCarByBrand[i].numCarVolum)){
            const div = document.createElement("div")
            div.classList.add("myDiv")
    
            const paragraph = document.createElement("p");
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
}

export { pushToHTML1 };
export { pushToHtmlPrice };
export { pushToHtmlB };
export { pushToHtmlA };
export { pushToHtmlBrand };
export { pushToHtmlYear };
export { pushToHtmlYear1 };
export { pushToHtmlOnlyVolume };
export { pushToHtmlVolumePrice };
export { pushToHtmlVolumeYear };
export { pushToHtmlVolume };