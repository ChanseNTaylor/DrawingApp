"use strict";
const modal = document.getElementsByClassName("modal")[0];
const modalBg = document.getElementsByClassName("modal-background")[0];
const loginBtn = document.getElementsByClassName("button level-item")[0];

const toggleModal = () => { modal.classList.toggle("is-active"); };

modalBg.addEventListener("click", toggleModal);
loginBtn.addEventListener("click", toggleModal);
