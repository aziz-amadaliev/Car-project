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




 /* Venera */
 //BODY STYLE
const selectBody = document.querySelector("#selectBody");

selectBody.addEventListener('change', showFilteredCarBody)

function showFilteredCarBody (event){
    const choice = selectBody.value;
    //console.log(choice, 'line48')
    const filteredCarBody = data.filter((carObj) => {
        //console.log(carObj.strCarBody)
        const carBodyStyle = carObj.strCarBody.toLowerCase();
        const carImage = carObj.strCarImage;
        //console.log(carBodyStyle.length, 'line53')
        if(carBodyStyle === choice){
            const newDiv = document.createElement("div");
            newDiv.innerHTML = carObj.strCarBody;
            document.body.appendChild(newDiv)

            const img = document.createElement("img");
            img.src = carObj.strCarImage;
            document.body.appendChild(img);
            img.style.width = "250px";
        }
    }); 
}

//COLOR

const carColor = document.querySelector("#color");

carColor.addEventListener('change', showFilteredCarColor)

function showFilteredCarColor (event){
    const colorChoice = carColor.value;
    //console.log(colorChoice);
    const filteredCarColor = data.filter((carObj) => {
        
        const carBodyColor = carObj.strCarColor.toLowerCase();
        
        if(carBodyColor === colorChoice){
            const newDiv = document.createElement("div");
            newDiv.innerHTML = carBodyColor;
            document.body.appendChild(newDiv)

            const img = document.createElement("img");
            img.src = carObj.strCarImage;
            document.body.appendChild(img);
            img.style.width = "250px";
        }
    }); 
} 

//ENGINE

const selectEngine = document.querySelector("#engine");

selectEngine.addEventListener('change', showFilteredCarEngine)

function showFilteredCarEngine (event){
    const engineChoice = selectEngine.value;
    
    const filteredCarEngine = data.filter((carObj) => {
        
        const carEngine = carObj.strCarEngine.toLowerCase();
        const carImage = carObj.strCarImage;
        
        if(carEngine === engineChoice){
            const newDiv = document.createElement("div");
            newDiv.innerHTML = carObj.strCarEngine;
            document.body.appendChild(newDiv)

            const img = document.createElement("img");
            img.src = carObj.strCarImage;
            document.body.appendChild(img);
            img.style.width = "250px";  
        }
    });   
}