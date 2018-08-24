// Function to ZoomIn text
function zoomIn() {
    var element = document.getElementById('para');
    element.classList.add('modal-open'); 
    element.classList.remove('modal-close');
    document.getElementById('para').style.fontSize = '26px';
}


// Function to ZoomOut text
function zoomOut() {
    var element = document.getElementById('para');
    element.classList.add('modal-close'); 
    element.classList.remove('modal-open');
    document.getElementById('para').style.fontSize = '16px';
}
