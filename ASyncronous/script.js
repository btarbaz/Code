'use strict';

const countriesContainer = document.querySelector('.countries');

//Fetching function from api
function renderCountry(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 10000000
      ).toFixed(1)}cr people</p>
      <p class="country__row"><span>🗣️</span>${
        Object.values(data.languages)[0]
      }</p>
      <p class="country__row"><span>💰</span>${
        Object.values(data.currencies)[0].name
      }</p>
    </div>
  </article> `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}

// const getCountryDataAndNeighbour = function (country) {
//   //Ajax request
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     renderCountry(data);

//     //Ajax request 2
//     const request2 = new XMLHttpRequest();
//     //From country get borders
//     const neighbour = data.borders?.[0];
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, 'neighbour');
//     });
//   });
// };
// getCountryDataAndNeighbour('pakistan');

// This is called callback hell. And this triangle pattern shows that nested callbacks called
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//-------------- Fetch, promises, consume promises --------------
// //Fetching api, consuming promises. fetch return promise then handle reponse(unreadble) then json function(also return a promise) which also return promise(with data)
// const getCountryData = function (country) {
//   //fetching api
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //handing reponse promise
//     .then(function (response) {
//       console.log(response);
//       //make reponse promise readable
//       return response.json();
//     })
//     //json also return promise with data in it
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
// getCountryData('pakistan');
// getCountryData('germany');

//simpler code with arrow function

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => renderCountry(data[0]));
// };
// getCountryData('pakistan');
// getCountryData('germany');

//with neighbour
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders?.[0];
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};
getCountryData('pakistan');
