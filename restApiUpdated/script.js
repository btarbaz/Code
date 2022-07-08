'use strict';

const myform = document.querySelector('#form-submit');
const userList = document.querySelector('#user-list');

let isEiditingUser = null;
let users = [];

// User block
const getUser = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  console.log(res);
  const dataUsers = await res.json();
  console.log(dataUsers);
  users = dataUsers;
  displayUsers(dataUsers);
};
getUser();

//UI Block
const displayUsers = function (usersToRender) {
  document.querySelector('#user-list').innerHTML = '';
  usersToRender.forEach((user) => {
    addUserToList(user);
  });
};

const addUserToList = function (user) {
  const userList = document.querySelector('#user-list');

  const row = document.createElement('tr');
  row.id = user.id;
  row.innerHTML = `<td>${user.username}</td><td>${user.name}</td><td>|</td><td><a href="#" class="btn-edit">Edit</a></td><td><a href="#" class="btn-delete">X</a></td>`;
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
    // make DELTE request before
    el.parentElement.parentElement.remove();
  }
};
//Event
userList.addEventListener('click', (dl) => {
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
    // ed.parentElement.parentElement.remove();
  }
};
//Event
userList.addEventListener('click', (evt) => {
  isEiditingUser = parseInt(evt.target.parentElement.parentElement.id);
  userEdit(evt.target);
});

//Add user
//Event

myform.addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.querySelector('#username').value;
  const name = document.querySelector('#user').value;

  if (username === '' || user === '') {
    const msg = document.querySelector('.msg');
    msg.innerHTML = 'Invalid inputs';
    setTimeout(() => {
      msg.innerHTML = '';
    }, 3000);
    return;
  }

  console.log('isEditingUser', isEiditingUser, typeof isEiditingUser);

  if (isEiditingUser) {
    // update user in users list above
    users = users.map((user) => {
      if (isEiditingUser === user.id) {
        // return edited user
        return { id: user.id, username, name };
      }

      return user;
    });

    console.log('users', users);

    // re-render users list in dom
    displayUsers(users);
  } else {
    // add new user to dom
    // make POST request
    let userProfile = { id: users.length + 1, username, name };
    users.push(userProfile);
    addUserToList(userProfile);
  }

  clearFields();
});
