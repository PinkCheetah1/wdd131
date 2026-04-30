const title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';

document.querySelector('#topics').style.color = 'blue';

document.getElementById('topics').style.color = 'purple';

let list = document.querySelector('.list');

list.style.border = '3px solid black';

let para = document.querySelector('p');
para.classList.add('background');

// document.querySelector('body').classList.add('background');

let image = document.querySelector('img');
image.setAttribute('src', 'a-fluffy-dog-with-a-smile-flip-2019-.jpeg')



let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                    