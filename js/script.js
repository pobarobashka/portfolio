'use strict'
window.addEventListener('DOMContentLoaded',()=>{
    document.querySelector(".hamburger").addEventListener('click',()=>{
        document.querySelector('.menu').classList.add('active');
    });
    document.querySelector('.menu_close').addEventListener('click',()=>{
        document.querySelector('.menu').classList.remove('active');
    })
    const percent = document.querySelectorAll('.skill_progress_percent'),
        progress = document.querySelectorAll('.skills_progress_bar span');
    (function (){
        percent.forEach((item,number)=>{
            progress[number].style.width=item.textContent;
        })
    }());
});