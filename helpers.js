import { getCarData } from "./car-data.js";
import { data } from "./main.js";
//import { processClick } from "./main.js";

const mainSection = document.querySelector(".main-section");

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

//VENERA`S PART 
//Body
const body = document.querySelector("#body")

//body.addEventListener("change", processClick)
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
            //console.log(paragraph.classList)
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
            //console.log(paragraph.classList)
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
            //console.log(paragraph.classList)
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
            //console.log(paragraph.classList)
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