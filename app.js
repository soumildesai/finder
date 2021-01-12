const findCoursesButton = document.getElementById("find");
const manualFindCourses = document.getElementById("manual");
let countries = [];
const countrySelect = document.getElementById("country");
findCoursesButton.onclick = function(){
    window.location.href = "page2.html";
}
// var x = document.getElementById("err");

// function addCountry(){
//   fetch('countries.txt')
//   .then(response => response.text())
//   .then((data) => {
//     countries = data.split('\n')
//     console.log(countries)
//     countries.forEach(element => {
//       let countryOption = document.createElement("option");
//       countryOption.text = element;
//       countrySelect.add(countryOption);
//     });
//   })
  
// }
// addCountry();