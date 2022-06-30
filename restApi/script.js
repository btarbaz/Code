const getJson = function (url) {
  return fetch(url)
    .then(res => res.json())
    .then(data => console.log(data));
};
getJson('https://jsonplaceholder.typicode.com/todos/1');
