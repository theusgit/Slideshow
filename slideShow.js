'use strict';

const images = [
    { 'id': '1', 'url': './img/piz.jpeg' },
    { 'id': '2', 'url': './img/piz2.jpeg' },
    { 'id': '3', 'url': './img/piz3.jpeg' },
]


const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click',previous);









