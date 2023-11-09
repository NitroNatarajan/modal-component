'use strict';
// selecting the elements
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

//  loop over the modal btn to set an add event listeners to all in one loop
for (let i=0; i<btnOpenModal.length; i++){
    btnOpenModal[i].addEventListener("click", function(){
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    })
}

// close Modal function declaration
const closeModal = function (){
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click",closeModal);


document.addEventListener("keydown", function (e){
   if (e.key === "Escape" && !modal.classList.contains("hidden")){
    closeModal();
   }
})