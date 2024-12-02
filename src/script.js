let elementLAdate = document.querySelector("#LA .date");
let elementLAtime = document.querySelector("#LA .time");

let elementParisdate = document.querySelector("#paris .date");
let elementParistime = document.querySelector("#paris .time");

function changeTime() {
  //paris
  let paris = moment().tz("Europe/Paris");
  let currentParisTime = paris.format("h:mm:ss A");
  let currentParisDate = paris.format("MMMM Do YYYY");

  elementParisdate.innerHTML = currentParisDate;
  elementParistime.innerHTML = currentParisTime;

  //LA
  let losAngeles = moment().tz("America/Los_Angeles");
  let currentLATime = losAngeles.format("h:mm:ss A");
  let currentLADate = losAngeles.format("MMMM Do YYYY");

  elementLAdate.innerHTML = currentLADate;
  elementLAtime.innerHTML = currentLATime;
}
changeTime();
setInterval(changeTime, 1000);
