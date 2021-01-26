'use strict';

const images = [
    { 'id': '1', 'url': './img/piz.jpeg' },
    { 'id': '2', 'url': './img/piz2.jpeg' },
    { 'id': '3', 'url': './img/piz3.jpeg' },
]


const container = document.querySelector('#container-items');




const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, container)