var container = document.getElementById('container');
buildGrid(prompt("Enter Grid Size"));


function buildGrid (gridSize) {
    var squareSize = 960/gridSize;
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
    var opacity =  parseInt(e.target.style.opacity * 100);
    console.log(opacity);
    if (opacity < 100) {
        opacity += 10
        opacity = opacity/100;
        e.target.style.opacity = opacity;
    }
    console.log(opacity);
}


var btn = document.querySelector('button');
btn.addEventListener('click', removeActive);


