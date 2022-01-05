import { getCarData } from "./car-data.js";


export const filteredCar = (searchedCarBrand) => {

    const data = getCarData();
    const filteredData = data.filter((carObj) => {
        //console.log(carObj.strCarBrand)
        const carName = carObj.strCarBrand.toLowerCase();
        //console.log(carName, 'line16')
        return carName.includes(searchedCarBrand);
        
    } )
    //console.log(typeof filteredData, 'line19')
    return filteredData;
}