
const currentYear = new Date().getFullYear();
const fullDate = new Date();
console.log(`Todays date is: ${fullDate}`);
document.getElementById("copyright").innerHTML = `&copy; Anthony Gordon ${currentYear}`;