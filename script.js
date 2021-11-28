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

btn.addEventListener('click', function() {
    if (input.value) {
        ul.appendChild(createLi(input.value)).appendChild(createButton());
        input.value = '';
        input.style.backgroundColor = 'transparent';
    } else {
        input.style.backgroundColor = 'red';
    };
});

ul.addEventListener('click', function(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('background')
    } else if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
});
















