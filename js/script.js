'use strict'
window.addEventListener('DOMContentLoaded',()=>{
    document.querySelector(".hamburger").addEventListener('click',()=>{
        document.querySelector('.menu').classList.add('active');
    });
    document.querySelector('.menu_close').addEventListener('click',()=>{
        document.querySelector('.menu').classList.remove('active');
    })
});