//single element

// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// //multiple element

// console.log(document.querySelectorAll('.item'));

// //loop
// const items = document.querySelectorAll('.item');
// //items.forEach((item) => console.log(item));
// for (const item of items) {
//     console.log(item);
// }
//Manipulating items

// const ul = document.querySelector('.items');

// ul.firstElementChild.textContent = 'Saad';
// ul.children[1].textContent = 'Ali';
// ul.lastElementChild.innerHTML = '<h1>Uzair</h1>'

//eventlistener

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     //console.log('click');
//     document.querySelector('#my-form').style.background = '#ccc';
//     //document.querySelector('body').classList.add('bg-dark');
//     //document.querySelector('.items').firstElementChild.innerHTML = '<h1>hello</h1>';

// })
const myForm = document.querySelector('#my-form');
const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users')
// nameInput.addEventListener('click', (e) => {
//     document.querySelector('.name').style.color = '#ccc';
//     nameInput.style.background = '#444';
// })

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML= 'Enter All Fields';

        setTimeout(() => msg.remove(), 2000);
    }else {
        const li = document.createElement('li');

        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
})
