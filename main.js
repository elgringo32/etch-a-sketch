var container = document.getElementById('container');
buildGrid(prompt("Enter Grid Size"));


function buildGrid (gridSize) {
    var squareSize = (960)/gridSize;
    console.log(squareSize);
    console.log(gridSize);
    for (i=0; i < gridSize*gridSize; i++) {
        let addDiv = document.createElement('div');
        addDiv.classList.add('square');
        addDiv.style.height = `${squareSize}px`;
        addDiv.style.width = `${squareSize}px`;
        container.appendChild(addDiv);

    }

    var divs = document.querySelectorAll('.square');

    divs.forEach(div => div.addEventListener('mouseover', makeActive)
);    
}

function removeActive() {
    var divs = document.querySelectorAll('.square');
    divs.forEach(div => container.removeChild(div));
    buildGrid(prompt("Enter Grid Size"));
    
}

function makeActive(e) {
    e.target.classList.add('activated');
}


var btn = document.querySelector('button');
btn.addEventListener('click', removeActive);


