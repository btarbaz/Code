const inputFilter = document.querySelector('#inputFilter');

inputFilter.addEventListener('keyup' , filterName)

function filterName(){
    const inputValue = document.querySelector('#inputFilter').value.toUpperCase();

    const names = document.querySelector('.names');
    const name  = names.querySelectorAll('.name');

    for(let i = 0; i < name.length; i++){
        const a = name[i].getElementsByTagName('a')[0];
        
        if (a.innerHTML.toUpperCase().indexOf(inputValue) > -1) {
            name[i].style.display = '';
        }  else{
            name[i].style.display = 'none';
        }
    }
}