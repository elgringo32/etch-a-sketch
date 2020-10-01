var container = document.getElementById('container');

for (i=0; i < 16; i++) {
    let div = document.createElement('div')
    div.classList.add('square')
    container.appendChild(div);
}

function makeActive(e) {
    e.target.classList.add('activated');
}

container.addEventListener('mouseover', makeActive);    


