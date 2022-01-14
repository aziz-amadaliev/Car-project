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

//---------------Body---------------
const body = document.querySelector("#body")

body.addEventListener('change', showFilteredCarBody)
function showFilteredCarBody (event){
    const choice = body.value;
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    const filteredCarBody = data.filter((carObj) => {

        const carBodyStyle = carObj.strCarBody.toLowerCase();
        if(carBodyStyle === choice){           
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = carObj.strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = carObj.strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = carObj.strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = carObj.strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = carObj.numCarVolum;
            paragraph4.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = carObj.numCarPriceUSD;
            paragraph5.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);

            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = carObj.numCarRunInKm;
            paragraph6.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = carObj.strCarEngine;
            paragraph7.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = carObj.strCarDescription;
            paragraph8.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";

        }
    }); 
}

//----------Color-----------------
const color = document.querySelector("#color");

color.addEventListener('change', showFilteredCarColor)
function showFilteredCarColor (event){
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    const colorChoice = color.value;
    const filteredCarColor = data.filter((carObj) => {
        
        const carBodyColor = carObj.strCarColor.toLowerCase();
        
        if(carBodyColor === colorChoice){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = carObj.strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = carObj.strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = carObj.strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = carObj.strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = carObj.numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = carObj.numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);

            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = carObj.numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = carObj.strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = carObj.strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        }
    }); 
} 

//---------Engine-------------
const engine = document.querySelector("#engine");
engine.addEventListener('change', showFilteredCarEngine)

function showFilteredCarEngine (event){
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    const engineChoice = engine.value;
    
    const filteredCarEngine = data.filter((carObj) => {
        const carEngine = carObj.strCarEngine.toLowerCase();
        
        if(carEngine === engineChoice){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = carObj.strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = carObj.strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = carObj.strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = carObj.strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = carObj.numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = carObj.numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);

            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = carObj.numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = carObj.strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = carObj.strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        }
    });   
}

//-----------Gearbox--------
const gearbox = document.querySelector("#gearbox");
gearbox.addEventListener('change', showFilteredCarGearbox)

function showFilteredCarGearbox (event){
    while (mainSection.firstChild) {
        mainSection.removeChild(mainSection.firstChild); //to remove child elements when search button clicked
    }
    const gearboxChoice = gearbox.value;
    
    const filteredCarGearbox = data.filter((carObj) => {
        const carGearbox = carObj.strCarGearbox.toLowerCase();
        
        if(carGearbox === gearboxChoice){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = carObj.strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = carObj.strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = carObj.strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = carObj.strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = carObj.numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = carObj.numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);

            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = carObj.numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = carObj.strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = carObj.strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        }
    });   
}

/*--------- Brand, Price, Year, Volume ------------ */

function pushToHtmlPrice () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD)){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);

            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}

function pushToHtmlYear () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear) && (priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD)){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);

            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}


function pushToHtmlYear1 () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}

function pushToHtmlBrand () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
    }
}

function pushToHTML1 () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD) && (yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear)){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}


function pushToHtmlB () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(priceB.value <= filteredCarByBrand[i].numCarPriceUSD){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}

function pushToHtmlA () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if(priceA.value >= filteredCarByBrand[i].numCarPriceUSD){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}

function pushToHtmlOnlyVolume () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((volumeB.value <= filteredCarByBrand[i].numCarVolum && volumeA.value >= filteredCarByBrand[i].numCarVolum)){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}

function pushToHtmlVolumePrice () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD) &&(volumeB.value <= filteredCarByBrand[i].numCarVolum && volumeA.value >= filteredCarByBrand[i].numCarVolum)){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}

function pushToHtmlVolumeYear () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear) && (volumeB.value <= filteredCarByBrand[i].numCarVolum && volumeA.value >= filteredCarByBrand[i].numCarVolum)){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
        } 
    } 
}

function pushToHtmlVolume () {
    const searchedCarValue = brand.value.toLowerCase();
    const filteredCarByBrand = filteredCar(searchedCarValue);

    for (let i=0; i < filteredCarByBrand.length; i++) {
        if((priceB.value <= filteredCarByBrand[i].numCarPriceUSD && priceA.value >= filteredCarByBrand[i].numCarPriceUSD) && (yearB.value <= filteredCarByBrand[i].strCarYear && yearA.value >= filteredCarByBrand[i].strCarYear) && (volumeB.value <= filteredCarByBrand[i].numCarVolum && volumeA.value >= filteredCarByBrand[i].numCarVolum)){
            const myDiv = document.createElement("div");
            myDiv.classList.add("myDiv");
            mainSection.appendChild(myDiv);

            const aTag = document.createElement("a");
            aTag.href = "./car.html";
            aTag.target = "_blank";
            myDiv.appendChild(aTag);
            const image = document.createElement("img");
            image.src = filteredCarByBrand[i].strCarImage;
            image.style.width = "500px";
            aTag.appendChild(image);
            
            const article = document.createElement("div");
            article.classList.add("article2");
            myDiv.appendChild(article);

            //carBrand
            const parDiv = document.createElement("div");
            parDiv.classList.add("parDiv");
            article.appendChild(parDiv);
            const paragraphDesc = document.createElement("div");
            paragraphDesc.innerText = "Brand:  ";
            paragraphDesc.classList.add("paragraphDesc");
            parDiv.appendChild(paragraphDesc);
            const paragraph = document.createElement("div");
            paragraph.innerText = filteredCarByBrand[i].strCarBrand;
            paragraph.classList.add("parDiv2");
            parDiv.appendChild(paragraph);

            //carModel
            const parDiv2 = document.createElement("div");
            parDiv2.classList.add("parDiv");
            article.appendChild(parDiv2);
            const paragraph2Desc = document.createElement("div")
            paragraph2Desc.innerText = "Model:  ";
            paragraph2Desc.classList.add("paragraphDesc");
            parDiv2.appendChild(paragraph2Desc);
            const paragraph2 = document.createElement("div");
            paragraph2.innerText = filteredCarByBrand[i].strCarModel;
            paragraph2.classList.add("parDiv2");
            parDiv2.appendChild(paragraph2);

            //carYear
            const parDiv3 = document.createElement("div");
            parDiv3.classList.add("parDiv");
            article.appendChild(parDiv3);
            const paragraph3Desc = document.createElement("div")
            paragraph3Desc.innerText = "Year:  ";
            paragraph3Desc.classList.add("paragraphDesc");
            parDiv3.appendChild(paragraph3Desc);
            const paragraph3 = document.createElement("div");
            paragraph3.innerText = filteredCarByBrand[i].strCarYear;
            article.classList.add("parDiv2");
            parDiv3.appendChild(paragraph3);
            //carVolum
            const parDiv4 = document.createElement("div");
            parDiv4.classList.add("parDiv");
            article.appendChild(parDiv4);
            const paragraph4Desc = document.createElement("div");
            paragraph4Desc.innerText = "Volume, m3:  ";
            paragraph4Desc.classList.add("paragraphDesc");
            parDiv4.appendChild(paragraph4Desc);
            const paragraph4 = document.createElement("div");
            paragraph4.innerText = filteredCarByBrand[i].numCarVolum;
            article.classList.add("parDiv2");
            parDiv4.appendChild(paragraph4);
            //carPrice
            const parDiv5 = document.createElement("div");
            parDiv5.classList.add("parDiv");
            article.appendChild(parDiv5);
            const paragraph5Desc = document.createElement("div");
            paragraph5Desc.innerText = "Price:  $ ";
            paragraph5Desc.classList.add("paragraphDesc");
            parDiv5.appendChild(paragraph5Desc);
            const paragraph5 = document.createElement("div");
            paragraph5.innerHTML = filteredCarByBrand[i].numCarPriceUSD;
            article.classList.add("parDiv2");
            parDiv5.appendChild(paragraph5);
            //Run
            const parDiv6 = document.createElement("div");
            parDiv6.classList.add("parDiv");
            article.appendChild(parDiv6);
            const paragraph6Desc = document.createElement("div");
            paragraph6Desc.innerText = "Run, km: ";
            paragraph6Desc.classList.add("paragraphDesc");
            parDiv6.appendChild(paragraph6Desc);
            const paragraph6 = document.createElement("div");
            paragraph6.innerHTML = filteredCarByBrand[i].numCarRunInKm;
            article.classList.add("parDiv2");
            parDiv6.appendChild(paragraph6);
            //Engine
            const parDiv7 = document.createElement("div");
            parDiv7.classList.add("parDiv");
            article.appendChild(parDiv7);
            const paragraph7Desc = document.createElement("div");
            paragraph7Desc.innerText = "Car engine: ";
            paragraph7Desc.classList.add("paragraphDesc");
            parDiv7.appendChild(paragraph7Desc);
            const paragraph7 = document.createElement("div");
            paragraph7.innerHTML = filteredCarByBrand[i].strCarEngine;
            article.classList.add("parDiv2");
            parDiv7.appendChild(paragraph7);
            //Car Description
            const parDiv8 = document.createElement("div");
            parDiv8.classList.add("parDiv");
            article.appendChild(parDiv8);
            const paragraph8Desc = document.createElement("div");
            paragraph8Desc.innerText = "Description: ";
            paragraph8Desc.classList.add("paragraphDesc");
            parDiv8.appendChild(paragraph8Desc);
            const paragraph8 = document.createElement("div");
            paragraph8.innerHTML = filteredCarByBrand[i].strCarDescription;
            article.classList.add("parDiv2");
            parDiv8.appendChild(paragraph8);
            //Car loan button
            const buttonA = document.createElement("a")
            buttonA.classList.add("button-loan")
            article.appendChild(buttonA);
            buttonA.innerHTML = "Apply for car loan"
            buttonA.href = "https://kkb.kg/avtocredit/";
            buttonA.target = "_blank";
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