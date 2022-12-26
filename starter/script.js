'use strict';

const modal = document.querySelector('.modal');
const overlay = document.getElementsByClassName('.overlay');
const btnModal = document.querySelector('.close-modal');
const openModal = document.querySelectorAll('.show-modal');

for (let i = 0 ; i < openModal.length ; i ++) {
    openModal[i].addEventListener('click',function(){
        modal.classList.remove('hidden');
    })
}

btnModal.addEventListener('click', function(){
    modal.classList.add('hidden');
})

document.addEventListener('keydown',function(event){
   
    if (event.key == 'Escape' && (!modal.classList.contains('hidden'))){
        
        modal.classList.add('hidden');
        alert('')
    }
    
})