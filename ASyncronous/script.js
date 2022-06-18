'use strict';

const countriesContainer = document.querySelector('.countries');
const btn = document.querySelector('.btn-country');

//Function for getJson
const getJson = function (url, msgError = 'Something wrong happened: ') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${msgError}. ${response.status}`);

    return response.json();
  });
};

//Error Message Function
function renderError(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

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
//---------------- CALLBACK HELL ---------------------
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

////with neighbour
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'));
// };
// getCountryData('pakistan');

//------error handling basic--------

// fetch(`https://restcountries.com/v3.1/name/${country}`)
// .then(
//   response => response.json(),
//   err => console.log(err.message)
// )

//error handling in the end to handle all error in the chain
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥🔥🔥`);
//       renderError(`There is some error ${err.message}. Try Again Beta 😒😒😒`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('pakistan');
// });

//handling manual error
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//       if (!response.ok) {
//  //new error created and throw to catch.
//         throw new Error(`Invalid Country name ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥🔥🔥`);
//       renderError(`There is some error ${err.message}. Try Again Beta 😒😒😒`);
//     })
//     //finally works after promise settled
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('pakistan');
// });
// getCountryData('ssdsdssd');

//--------------Function for fetch,response-----------------------
// const getCountryData = function (country) {
//   //getJson function
//   getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders?.[0];
//       // generating new error.
//       if (!neighbour) throw new Error(`No Neighbouring Countries`);
//       return getJson(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥🔥🔥`);
//       renderError(`There is some error ${err.message}. Try Again Beta 😒😒😒`);
//     })
//     //finally works after promise settled
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('australia');
// });

//-------------Coding Challenge #1: Get country details by its coordinates.-------------

//-----function: whereAmI

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(response => {
//       //console.log(response);

//       if (!response.ok)
//         throw new Error(`Something went wrong:${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       //console.log(data);
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       //console.log(response);
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       //console.log(data[0]);
//       renderCountry(data[0]);
//     })
//     .catch(err => renderError(err.message))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// whereAmI(-33.933, 18.474);

//----------Event loop, How it works-----------
//------timers, dom, api go in callback queue. but promises and others go in microtask queue which get priority over callback queue. And if a promise get another promise then it get proirity over other promises.

// console.log('Test Start'); //this runs 1st
// setTimeout(() => console.log('0 second passed'), 0); //this runs 5th
// Promise.resolve('Resolved promise 1').then(res => console.log(res)); //this runs 3rd
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i > 1000000000000; i++) {}
//   console.log(res);
// }); // this runs 4th
// console.log('Test End'); //this runs 2nd

//--------------Building a promise-------------
//-----Simple example
// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('You win 💰💰');
//   } else {
//     reject('You lose, try again 💩💩');
//   }
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//------Adding simple timer
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Your lottery is drawing');

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve('You win 💰💰');
//     } else {
//       reject(new Error('You lose, try again 💩💩'));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//-----promisifying callback functions(setTimeout) means a function which return promise instead of call back

// function wait(second) {
//   // console.log('Wait starts');
//   return new Promise(resolve => setTimeout(resolve, second * 1000));
// }
// wait(2)
//   .then(() => {
//     console.log('You have waited 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('You waited 1 second more'));

//------Now we can avoid this callback hell
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

// function wait(second) {
//   return new Promise(resolve => setTimeout(resolve, second * 1000));
// }
// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => console.log('4 seconds passed'));

//-----Quick build promise or static promise------

// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('abc')).catch(x => console.error(x));

//-------------Promisifying geolocation api -------------
//------callback function, now promisifying it
// navigator.geolocation.getCurrentPosition(
//   position => console.log(position),
//   err => console.error(err)
// );
// console.log('getting location');

//Making promise based api
// const getLocation = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     //simpler form
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

//-------Now lets get country details based on your current location using promisifying function-----
// const whereAmI = function () {
//   getLocation()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Something went wrong:${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${response.status}`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`You are in ${data[0].capital},${data[0].name.official}`);
//       renderCountry(data[0]);
//     })
//     .catch(err => renderError(err.message))
//     .finally(() => (countriesContainer.style.opacity = 1));
// };
// btn.addEventListener('click', whereAmI);

//-------------Coding Challenge #2: Display Images after every 2 second passed.-------------

// const imgContainer = document.querySelector('.images');
// //-------for hiding after 2 sec
// let currentImg;

// //-------Function: Image returning promise
// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//     img.addEventListener('load', function () {
//       imgContainer.appendChild(img);
//       resolve(img);
//     });
//     img.addEventListener('error', function () {
//       reject(new Error('Image not found !'));
//     });
//   });
// };

// //-------function: wait
// function wait(second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });
// }

// createImage('img/img-1.png')
//   .then(img => {
//     currentImg = img;
//     console.log('loaded 1st image');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('img/img-2.png');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Loaded 2nd image');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     console.log('done');
//   })
//   .catch(err => console.error(err.message));

//---------------------Async | Await feature---------------------
//it make function asyncronous when called it runs in background. now with await, then is completely gone. it is syntactic suger. Like this...
// fetch(`https://restcountries.com/v3.1/name/${country}`).then(res => console.log(res))
// const whereAmI = async function (country) {
//   const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
//   console.log(res);
//   const data = await res.json();
//   renderCountry(data[0]);
// };

// whereAmI('pakistan');
//----------------lets use previous functions and get country details by geolocation api using Async|Await-----------------
//------promisifyd function which get current location
const getLocation = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
const whereAmI = async function () {
  //get position
  const pos = await getLocation();

  //destructing to get lat and lng separate
  const { latitude: lat, longitude: lng } = pos.coords;
  //reverse geocoding using api
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  //convert it in json to readable
  const dataGeo = await resGeo.json();
  //put location's property in country api
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo.country}`
  );
  //make it readable
  const data = await res.json();
  //function which access properties of it
  renderCountry(data[0]);
};

whereAmI();
