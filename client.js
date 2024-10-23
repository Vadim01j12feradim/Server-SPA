import axios from "axios";

const url = 'http://localhost:3000/cars'; 


const carId = 1

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

function getRandomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

const car = await axios.get(url+"/1");

console.log(car);

const runLoop = async () => {
    while (true) {// Replace 5 with your desired number of iterations
        var latitud = getRandomBetween(-0.001, 0.001);
        var longitud = getRandomBetween(-0.001, 0.001);

        const date = new Date();

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JS
        const day = String(date.getDate()).padStart(2, '0');
        
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const mysqlDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        

        car.latitud = car.latitud + latitud
        car.longitud = car.latitud + longitud
        car.updated_at = mysqlDateTime
        const response = await axios.put(url, car);
        await delay(2000); // Wait for 2 seconds
        console.log(response);
    }
};

// runLoop();



