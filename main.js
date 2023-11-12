import "./style.scss";
import * as bootstrap from "bootstrap";
import "./js/language";

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
