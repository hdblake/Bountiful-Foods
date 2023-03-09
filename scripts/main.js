// Variable for modified date
const date = new Date(document.lastModified);

// Variable for modified date format
let dateFormat = date.toLocaleString("en-US", {
  month: "2-digit", day: "2-digit", year: "numeric"
});

// Variable for modified time format
let timeFormat = date.toLocaleString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});

// Display modified date with formatted date and time
let dateModified = document.querySelector(".last-modified");
dateModified.innerHTML = `Last Modified: ${dateFormat} ${timeFormat}`;