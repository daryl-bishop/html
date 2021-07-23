"use strict";

const baseURL = "http://localhost:8080";

axios.get(`${baseURL}/`)
    .then(res => { // handle response with callback
        console.log(res);
        console.log("DATA: ", res.data);
    }).catch(err => console.log(err)); // handle error


console.log("Have we got a response yet?");

const getAllSection = document.querySelector("#getAllSection");

const button = document.querySelector("div#searchid > button")

axios.get(`${baseURL}/getAllPizza`)
    .then(res => {
        const pizzas = res.data;

        pizzas.forEach(pizza => renderPizza(pizza));
    }).catch(err => console.log(err));


const renderPizza = (pizza) => {
    const newPizza = document.createElement('p');

    newPizza.textContent = JSON.stringify(pizza);

    getAllSection.appendChild(newPizza);
}
const number1 = document.querySelector("#pizzaid");



const search = (e) => {
const id = document.getElementById("pizzaid").value;

axios.get(`${baseURL}/getPizza/${id}`)
    .then(res => {
        const pizza = res.data;

       renderPizza(pizza);

    }).catch(err => console.log(err));
}
button.addEventListener('click', search);