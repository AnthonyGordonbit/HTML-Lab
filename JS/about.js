
const currentYear = new Date().getFullYear();
const fullDate = new Date();
console.log(`Todays date is: ${fullDate}`);
document.getElementById("copyright").innerHTML = `&copy; Anthony Gordon ${currentYear}`;

const d = new Date(); 
btn.addEventListener("click", () => {
    if (d.getHours() <= 11) {
        alert("Good morning!");
    } else if (d.getHours() < 18) {
        alert("Good afternoon!");
    } else {
        alert("Good evening!");
    }
})