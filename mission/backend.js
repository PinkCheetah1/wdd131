
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "black";
        logo.src = "byui-logo-white.png";
        document.querySelector('div').style.backgroundColor = "black";
        document.querySelector('div').style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        logo.src = "byui-logo-blue.webp";
        document.querySelector('div').style.backgroundColor = "white";
        document.querySelector('div').style.color = "black";
    }
}           
                    