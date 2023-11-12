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

// Languages
const lang = document.querySelectorAll("#lang");
let greek = document.querySelector("#langGreek");
let german = document.querySelector("#langGerman");
let english = document.querySelector("#langEnglish");

var el = [
  "Ταξι Ηγουμενιτσα",
  "Υπηρεσίες",
  "Επικοινωνία",
  "Καλώς ήρθατε στο",
  "Χρηστος και Γρηγορης Σπυριδωνου",
  "2 ταξί",
  "25 χρόνια εμπειρία",
  "Μιλαμε γερμανικα και αγγλικα",
  "Προτεραιότητά μας",
  "Ασφάλεια",
  "Προσεγμένα οχήματα",
  "Σεβασμός προς τον πελάτη",
  "Άμεση εξυπηρέτιση",
  "Εδρα Ηγουμενιτσα και σας παμε παντου",
  "Προσφέρουμε",
  "Μεταφορά σε όλη την Ελλάδα",
  "Μεταφορά παιδιών με ασφάλεια",
  "Μεταφορά απο λιμάνια σε αεροδρόμια",
  "Κλήσεις - Ραντεβού",
  "Περιηγήσεις σε ιστορικά σημεία",
  "Μεταφορά δεμάτων με ή χωρίς συνοδεία",
  "Επικοινωνία",
  "Χρήστος και Γρηγόρης Σπυριδώνου",
  "Τηλέφωνο",
  "Ηλεκτρονική διεύθυνση",
  "Η ιστοσελίδα μας δεν χρησιμοποιεί Cookies",
  "Θα μας βρείτε επιπλέον:",
];
var de = [
  "Taxi Igoumenitsa",
  "Service",
  "Kontakt",
  "Willkommen",
  "Christos und Grigoris Spyridonou",
  "2 Taxis",
  "25 Jahre Erfahrung",
  "Wir sprechen deutsch und englisch",
  "Unsere Priorität",
  "Sicherheit",
  "Gepflegte Fahrzeuge",
  "Respekt vor dem Kunden",
  "Sofortservice",
  "Hauptsitz in Igoumenitsa und wir bringen Sie überall hin",
  "Wir bieten",
  "Transport in ganz Griechenland",
  "Sicherer Transport von Kindern",
  "Transfer von Häfen zu Flughäfen",
  "Anrufe - Termine",
  "Historische Führungen",
  "Pakettransport mit oder ohne Begleitung",
  "Kontakt",
  "Christos und Grigoris Spyridonou",
  "Telefon",
  "E-Mail",
  "Unsere Internetseite verwendet keine Cookies",
  "Sie finden uns auch:",
];
var en = [
  "Taxi Igoumenitsa",
  "Services",
  "Contact",
  "Welcome",
  "Christos and Grigoris Spyridonou",
  "2 Taxis",
  "25 years of experience",
  "We speak German and English",
  "Our priority",
  "Safety",
  "Well-maintained vehicles",
  "Respect for the customer",
  "Immediate service",
  "Headquarters in Igoumenitsa and we will take you anywhere",
  "We offer",
  "Transport across Greece",
  "Safe transportation of children",
  "Transfer from ports to airports",
  "Calls - Appointments",
  "Historical tours",
  "Parcel transport with or without escort",
  "Contact",
  "Christos and Grigoris Spyridonou",
  "Telephone",
  "E-Mail",
  "Our website does not use cookies",
  "You can also find us:",
];

greek.addEventListener("click", () => {
  let x = 0;
  Array.from(lang).forEach((a) => {
    a.textContent = el[x];
    x++;
  });
});
german.addEventListener("click", () => {
  let x = 0;
  Array.from(lang).forEach((a) => {
    a.textContent = de[x];
    x++;
  });
});
english.addEventListener("click", () => {
  let x = 0;
  Array.from(lang).forEach((a) => {
    a.textContent = en[x];
    x++;
  });
});
