//gearbox

const selectGearbox = document.querySelector("#gearbox");

selectGearbox.addEventListener('change', showFilteredCarGearbox)

function showFilteredCarGearbox (event){
    const gearboxChoice = selectGearbox.value;
    
    const filteredCarGearbox = data.filter((carObj) => {
        
        const carGearbox = carObj.strCarGearbox.toLowerCase();
        const carImage = carObj.strCarImage;
        
        if(carGearbox === gearboxChoice){
            const newDiv = document.createElement("div");
            newDiv.innerHTML = carObj.strCarGearbox;
            document.body.appendChild(newDiv)

            const img = document.createElement("img");
            img.src = carObj.strCarImage;
            document.body.appendChild(img);
            img.style.width = "250px";  
        }
    });   
}