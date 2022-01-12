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

    //console.log(typeof filteredData, 'line19')
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