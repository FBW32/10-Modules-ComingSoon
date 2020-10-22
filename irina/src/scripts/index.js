// The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// Import any additional modules you want to include below \/


// // \/ All of your javascript should go here \/
//import "./moment.min.js";



let event_day = moment('25-10-2020 08:30:00', 'DD-MM-YYYY HH:mm:ss');


let days = document.querySelector('.days');
days.innerHTML = event_day.endOf().fromNow(true);

let hours = document.querySelector('.hours');
hours.innerHTML = moment('08:30:00', 'HH:mm:ss').endOf().fromNow(true)
 
let minuts = document.querySelector('.minuts');


let seconds = document.querySelector('.seconds');




//working on double click. 
let button = document.querySelector('button');
let form = document.querySelector('form');
form.style.visibility = "hidden";

function showForm() {
         if (form.style.display === "none") {
        form.style.display = "block";
        form.style.visibility = "visible";
         } else {
           form.style.display = "none";
         }      
}
button.addEventListener('click', showForm)

form.addEventListener('submit', (e) => {
    e.preventDefault()
let notify_user = [...form].map(input => input.value);
console.log(notify_user);
});