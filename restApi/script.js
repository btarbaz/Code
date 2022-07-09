'use strict';

const myform = document.querySelector('#form-submit');
const userList = document.querySelector('#user-list');
//User block
const getUser = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  console.log(res);
  const dataUsers = await res.json();
  console.log(dataUsers);
  displayUsers(dataUsers);
};
getUser();

//UI Block
const displayUsers = function (dataApi) {
  users = dataApi;
  users.forEach(user => addUserToList(user));
};
const addUserToList = function (data) {
  const userList = document.querySelector('#user-list');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${data.username}</td><td>${data.name}</td><td>|</td><td><a href="#" class="btn-edit">Edit</a></td><td><a href="#" class="btn-delete">X</a></td>`;
  userList.appendChild(row);
};
//clear fields
const clearFields = function () {
  document.querySelector('#username').value = '';
  document.querySelector('#user').value = '';
};
//Delete user
const userDelete = function (el) {
  if (el.innerHTML === 'X') {
    el.parentElement.parentElement.remove();
  }
};
//Event
userList.addEventListener('click', dl => {
  userDelete(dl.target);
});

//Edit user
const userEdit = function (ed) {
  if (ed.innerHTML === 'Edit') {
    //console.log(ed.parentElement.parentElement.children[1].innerHTML);
    const username = document.querySelector('#username');
    username.value = ed.parentElement.parentElement.children[0].innerHTML;
    const user = document.querySelector('#user');
    user.value = ed.parentElement.parentElement.children[1].innerHTML;
    ed.parentElement.parentElement.remove();
  }
};
//Event
userList.addEventListener('click', edit => {
  console.log(edit.target);
  userEdit(edit.target);
});

//Add user
//Event

myform.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const user = document.querySelector('#user').value;

  if (username === '' || user === '') {
    const msg = document.querySelector('.msg');
    msg.innerHTML = 'Invalid inputs';
    setTimeout(() => {
      msg.innerHTML = '';
    }, 3000);
  } else {
    userProfile = { username: username, name: user };
    console.log(userProfile);
    addUserToList(userProfile);
    clearFields();
  }
});
