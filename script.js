let input = document.getElementById('inputText');
let ul = document.getElementById('list');
let btn = document.getElementById('applyBtn');
let block = document.getElementById('block');

function createLi(text) {
    var li = document.createElement('li');
    li.innerText = text;
    return li;
}

function createButton() {
    let btnRemove = document.createElement('button');
    btnRemove.innerText = 'Удалить';
    btnRemove.classList.add('btnRemove');
    return btnRemove;
}

let regExp = /^[\d\w\s]{2,15}$/i;

input.addEventListener('change', function() {
    if (input.value.match(regExp)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        input.classList.remove('empty');
    } else if (!input.value.match(regExp)) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.classList.remove('empty');
    } 
})

btn.addEventListener('click', function() {
    if (input.value.match(regExp)) {
        ul.appendChild(createLi(input.value)).appendChild(createButton());
        input.value = '';
        input.classList.add('empty');
    } else if (input.value === '') {
        input.classList.add('invalid');
    }
});

ul.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('background')
    } else if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});