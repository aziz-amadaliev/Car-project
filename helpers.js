import { getData } from "./get-data.js";

export const filterCars = (strCarGearbox) => {
  const data = getCarGearbox();

  

  const filteredData = data.filter((carObject) => {
    const strCarGearbox = carObject.carGearbox.toLowerCase();
    return carGearbox.includes(searchedCarGearbox.toLowerCase());
  });

  return filteredData;
};                                                                                                                                                  import { getData } from "./get-data.js";
import { filterCars } from "./helper-functions.js";

const data = getCarGearbox();

const container = document.querySelector(".table");


for (let i = 0; i < data.length; i = i + 1) {
  const paragraph = document.createElement("p");
  const image = document.createElement("img");
  paragraph.innerText = data[i].strCar;
  image.src = data[i].strCarThumb;
  container.appendChild(paragraph);
  container.appendChild(image);
}

const input = document.querySelector(".search-box");
const button = document.querySelector("button");

const handleClick = () => {
  const searchedCarGearbox = input.value;
  const filteredData = filterCars(searchedCarGearbox);
  console.log(filteredData);
};

button.addEventListener("click", handleClick);