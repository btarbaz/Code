//dom
const main = document.querySelector('#main');

//Vacuum-Cleaner
const vcDiv = document.createElement('div');
vcDiv.id = 'vacuum-cleaner';
vcDiv.innerText = 'VC';

//initializing object
const project = {
  rows: 6,
  columns: 6,
  totalDirt: 0,
  boxWithDirt: [],
  totalBoxes: [],
  leftProhibitedBox: [],
  rightProhibitedBox: [],
};

//for box
let uniqueId = 0;
for (let i = 0; i < project.rows; i++) {
  //to get a array to stop VC from left most box
  project.leftProhibitedBox.push(uniqueId - 1);

  for (let j = 0; j < project.columns; j++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.id = uniqueId;
    main.append(box);
    project.totalBoxes.push(uniqueId);
    uniqueId++;
  }
  const br = document.createElement('br');
  main.append(br);

  //to get a array to stop VC from right most box
  project.rightProhibitedBox.push(uniqueId);
}

//dirt spawner
dirtSpawn();

//-----BUTTON EVENTS-----

//VC Navigation
const navBtn = document.querySelectorAll('.button');

for (const elmt of Array.from(navBtn)) {
  elmt.addEventListener('click', function (event) {
    const direction = elmt.dataset.target;
    const currentVPosition =
      document.querySelector('#vacuum-cleaner').parentElement.id;
    let nextVPosition;

    switch (direction) {
      case 'up':
        nextVPosition = +currentVPosition - project.columns;
        break;
      case 'down':
        nextVPosition = +currentVPosition + project.columns;
        break;
      case 'left':
        nextVPosition = +currentVPosition - 1;
        if (project.leftProhibitedBox.includes(nextVPosition)) {
          showMsg('Wrong Move !!!');
          nextVPosition++;
        }
        break;
      case 'right':
        nextVPosition = +currentVPosition + 1;
        if (project.rightProhibitedBox.includes(nextVPosition)) {
          showMsg('Wrong Move !!!');
          nextVPosition--;
        }
        break;
      default:
        nextVPosition = currentVPosition;
        break;
    }
    if (!project.totalBoxes.includes(nextVPosition)) {
      showMsg('Wrong Move !!!');
      return;
    }
    document.getElementById(nextVPosition).append(vcDiv);
  });
}

//erase-button

const eraseBtn = document.querySelector('#erase-button');
eraseBtn.addEventListener('click', function () {
  const currentVPosition = parseInt(
    document.querySelector('#vacuum-cleaner').parentElement.id
  );

  if (project.boxWithDirt.includes(currentVPosition)) {
    //removed from array
    project.boxWithDirt.splice(
      project.boxWithDirt.indexOf(currentVPosition),
      1
    );

    //removed from Box
    document.getElementById(currentVPosition).textContent = '';
    //VC spawn
    document.getElementById(currentVPosition).append(vcDiv);

    project.totalDirt--;

    //if all dirt removed
    if (project.boxWithDirt < 1) {
      showMsg('No more dirt !!! :)');
    }
    return;
  }
  showMsg('No Dirt');
});

//search-erase-button

const searchBtn = document.querySelector('#search-button');
searchBtn.addEventListener('click', function () {
  if (project.totalDirt == 0) {
    showMsg('No more Dirt !!! :)');
    return;
  }
  for (let i = 0; i < project.totalDirt; i++) {
    //removed from array
    project.boxWithDirt.splice(project.boxWithDirt.indexOf(0), 1);
    //removed from Box
    document.getElementById(project.boxWithDirt[0]).innerHTML = '';
    console.log(project.boxWithDirt);
  }
  //VC spawn
  document.getElementById('0').append(vcDiv);
});
//reset-button

const resetBtn = document.querySelector('#reset-game');
resetBtn.addEventListener('click', function () {
  for (let i = 0; i < project.totalDirt; i++) {
    document.getElementById(project.boxWithDirt[i]).textContent = '';
  }
  dirtSpawn();
});

//-----FUNCTIONS-----

//vacuum function

//for randomint
function randomInt(max) {
  return Math.floor(Math.random() * max);
}
//for dirt
function dirtSpawn() {
  let randomNumber;
  let maxRandom = project.rows * project.columns - 1;
  let boxWithDirt = [];

  for (let i = 0; i < randomInt(maxRandom); i++) {
    randomNumber = randomInt(maxRandom);
    boxWithDirt.push(randomNumber);
    document.getElementById(randomNumber).innerHTML = '****';
  }

  //vacuum Cleaner intialize
  document.getElementById('0').append(vcDiv);

  project.boxWithDirt = boxWithDirt;
  project.totalDirt = boxWithDirt.length;
}
//for msg
function showMsg(msg) {
  document.querySelector('.msg').innerHTML = msg;
  setInterval(() => {
    showMsg('');
  }, 2000);
}
