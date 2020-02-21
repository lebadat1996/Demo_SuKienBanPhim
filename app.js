let oldPos, newPos;
let up,down;

function upArrowPressed() {
    let element = document.getElementById("Nobita");
    element.style.top= parseInt(up) -5 + 'px';
    down = element.style.top;
    up=down;
}
function downArrowPressed() {
    let element = document.getElementById("Nobita");
    element.style.top=parseInt(up) + 5 + 'px';
    down=element.style.top;
    up=down;
}
function lefttArrowPressed() {
    let element = document.getElementById("Nobita");
    element.style.left = parseInt(oldPos) - 5 + 'px';
    newPos = element.style.left;
    oldPos = newPos;
}
function rigtArrowPressed() {
    let element = document.getElementById("Nobita");
    element.style.left = parseInt(oldPos) + 5 + 'px';
    newPos = element.style.left;
    oldPos = newPos;
}
function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            lefttArrowPressed();
            break;
        case 39:
            rigtArrowPressed();
            break;
        case 38:
            upArrowPressed();
            break;
        case 40 :
            downArrowPressed();
            break;
    }
}
function docReady() {
    window.addEventListener('keydown', moveSelection);
    let element = document.getElementById("Nobita");
    element.style.position = 'relative';
    element.style.left = '0px';
    element.style.top ='0px'
}
window.onload=  docReady()
