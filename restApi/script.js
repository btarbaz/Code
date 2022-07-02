const getJson = function (url, action = '') {
  return fetch(url, {
    method: action,
  }).then(res => res.json());
};

const msgTodos = document.querySelector('.msg');
getJson('https://jsonplaceholder.typicode.com/todos/1', 'GET').then(data => {
  console.log(data);
  msgTodos.textContent = JSON.stringify(data);
});
