// main.js
import * as functions from "./functions.js";

window.onload = () => {
    document.title = "Historia Zmian w systemie inwentaryzacja " + reverseDateFormat();
};

document.getElementById("first-change-date").innerHTML = functions.displayCurrentDate("date");
document.getElementById("first-change-time").innerHTML = functions.displayCurrentDate("time");

document.getElementById("second-change-date").innerHTML = functions.displayProvidedDate('2024-12-31 15:23:01', "date");
document.getElementById("second-change-time").innerHTML = functions.displayProvidedDate('2024-12-31 15:23:01', "time");

document.getElementById("third-change-date").innerHTML = functions.displayProvidedDate('2024-12-31 15:43:09',"date");
document.getElementById("third-change-time").innerHTML = functions.displayProvidedDate('2024-12-30 15:43:09', "time");

// Set the dynamic title
document.title = "Historia Zmian w systemie inwentaryzacja " + functions.reverseDateFormat()
