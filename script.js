let input = document.getElementById('inputText');
let ul = document.getElementById('list');
let btn = document.getElementById('applyBtn');
let form = document.getElementById('form');

function createLiAndButton(text) {
    let li = document.createElement('li');
    li.innerText = text;
    let btnRemove = document.createElement('button');
    btnRemove.innerText = 'Удалить';
    btnRemove.classList.add('btnRemove');
    li.appendChild(btnRemove);
    return li;
};

let regExp = /^[\w\s]{2,15}$/;

input.addEventListener('change', function() {
    if (input.value.length === 0) {
        input.classList.add('empty');
    } else if (input.value.match(regExp)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        input.classList.remove('empty');
    } else if (!input.value.match(regExp)) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.classList.remove('empty');
    } 
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (input.value.match(regExp)) {
        ul.appendChild(createLiAndButton(input.value));
        input.value = '';
        input.classList.add('empty');
    }
});

ul.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('background')
    } else if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});