/*
    Изменить элементу цвет и ширину можно вот так:

    const element = document.querySelector('.myElement');
    element.style.color = 'red';
    element.style.width = '300px';
*/
function buttonFunction(event) {
    let target = event.target;

    if (target.classList.contains('lightbox__close')) {
        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'none';
    }
    else if (target.classList.contains('lightbox__open')) {
        let lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'block';
    }
}


let openButton = document.querySelector('.lightbox__close');
openButton.addEventListener('click', buttonFunction);
let closeButton = document.querySelector('.lightbox__open');
closeButton.addEventListener('click', buttonFunction);
