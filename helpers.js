import { getCarData } from "./car-data.js";


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
