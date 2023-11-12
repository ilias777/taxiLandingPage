import "./style.scss";
import * as bootstrap from "bootstrap";

// Dropdown
export const drop = document.querySelector(".dropdown-toggle").dropdown();

// Toast
let option = {
  animation: true,
  delay: 2000,
};

let toasthtml = document.querySelector(".toast");
export let toastElement = new bootstrap.Toast(toasthtml, option);
toastElement.show();

// Animation One
const targetOne = document.querySelectorAll(".scrollanimation");

const options = {
  threshold: 0.3,
};

const callbackOne = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observerOne.unobserve(entry.target);
    }
  });
};

export const observerOne = new IntersectionObserver(callbackOne, {
  threshold: 0.3,
});

targetOne.forEach((entry) => {
  observerOne.observe(entry);
});

// Animation Two
const targetTwo = document.querySelectorAll(".scrollIn");

const callbackTwo = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visibleIn");
      observerTwo.unobserve(entry.target);
    }
  });
};

export const observerTwo = new IntersectionObserver(callbackTwo, {
  threshold: 0.3,
});

targetTwo.forEach((entry) => {
  observerTwo.observe(entry);
});
