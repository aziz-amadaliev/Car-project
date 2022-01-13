import {filteredCar} from "./helpers.js"
//import {processClick} from "./main.js"
//import {searchedCarBrand} from "./main.js"
import { pushToHTML1 } from "./helpers.js"
import { pushToHtmlPrice } from "./helpers.js"
import { pushToHtmlB } from "./helpers.js"
import { pushToHtmlA } from "./helpers.js"
import { pushToHtmlBrand } from "./helpers.js"
import { pushToHtmlYear } from "./helpers.js"
import { pushToHtmlYear1 } from "./helpers.js"
import { pushToHtmlOnlyVolume } from "./helpers.js"
import { pushToHtmlVolumePrice } from "./helpers.js"
import { pushToHtmlVolumeYear } from "./helpers.js"
import { pushToHtmlVolume } from "./helpers.js"

const filteredCarData = filteredCar();
console.log(filteredCarData)
console.log("hi")
//console.log(searchedCarBrand)

const carInfo = document.querySelector(".car-info")