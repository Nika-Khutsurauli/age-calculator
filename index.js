let day = document.querySelector('#day');
let month = document.querySelector('#month');
let year = document.querySelector('#year');
const arrow = document.querySelector('#arrow');
const arrowClass = document.querySelector('.arrow');
const dayLabel = document.querySelector('#dayLabel');
const monthLabel = document.querySelector('#monthLabel');
const yearLabel = document.querySelector('#yearLabel');



// validate days input
day.addEventListener('input', () => {
    if(day.value > 31){
      day.style.borderColor = "#FF5757";
      dayLabel.style.color = "#FF5757"
      day.nextElementSibling.innerHTML = "Must be a valid day"
    }else{
      day.style.borderColor = "";
      dayLabel.style.color = ""
      day.nextElementSibling.innerHTML = ""
    }
})

// validate month input
month.addEventListener('input', () => {
  if(month.value > 12){
    month.style.borderColor = "#FF5757";
    monthLabel.style.color = "#FF5757"
    month.nextElementSibling.innerHTML = "Must be a valid month"
    
  }else{
    month.style.borderColor = "";
    monthLabel.style.color = ""
    month.nextElementSibling.innerHTML = ""
  }
})

//validate year year
year.addEventListener('input', () => {
  let data = new Date();
  let fullYear = data.getFullYear();
  if(year.value > fullYear){
    year.style.borderColor = "#FF5757";
    yearLabel.style.color = "#FF5757"
    year.nextElementSibling.innerHTML = "Must be the past"
  }
  else{
    year.style.borderColor = "";
    yearLabel.style.color = ""
    year.nextElementSibling.innerHTML = ""
  }
})

year.addEventListener('change', function () {
  let Data = new Date();
  if (year.value < 0) {
    year.value = -year.value;
    year.value = Data.getFullYear() - year.value;
  }
});

//Handling the button click event
arrow.addEventListener('click', function () {
 
  //Retrieving data from fields
  let days = day.value;
  let months = month.value;
  let years = year.value; 
  //Checking that the fields are filled
  if(!days) {
    day.nextElementSibling.innerHTML = "This field is required"
    dayLabel.style.color = "#FF5757"
    day.style.borderColor = "#FF5757"
  }
  if (!months) {
    month.nextElementSibling.innerHTML = "This field is required"
    monthLabel.style.color = "#FF5757"
    month.style.borderColor = "#FF5757"
  }
  
  if (!years) {
    year.nextElementSibling.innerHTML = "This field is required"
    yearLabel.style.color = "#FF5757"
    year.style.borderColor = "#FF5757"
  }
  if (!days || !months || !years) {
    return;
  }
  
  let date = new Date(years, months - 1, days);
  let currentData = new Date();

  //Checking if the date is correct
  if (!(date.getFullYear() == years && date.getMonth() == months - 1 && date.getDate() == days) || (document.querySelector('.error').length) || date > currentData || years < 0) {
      day.nextElementSibling.classList.add("error");
      day.nextElementSibling.innerHTML = "Must be a valid date"
      month.nextElementSibling.classList.add("error");
      month.nextElementSibling.innerHTML = ""
      year.nextElementSibling.classList.add("error");
      year.nextElementSibling.innerHTML = "";
    return;
  }

    let age_year = currentData.getFullYear() - date.getFullYear();
    let age_mounth = 0;
    let age_day = 0;
    if (currentData < new Date(currentData.getFullYear(), months - 1, days)) {
      age_year = age_year - 1;
      age_mounth = currentData.getMonth() + 1;
      age_day = currentData.getDate();
    } else {
      if (currentData.getMonth() + 1 === months) {
        age_mounth = 0;
        age_day = currentData.getDate() - days;
        console.log(age_day);
      } else {
        age_mounth = currentData.getMonth() + 1 - months;
        if (currentData.getDate() < days) {
          age_mounth = age_mounth - 1;
          age_day = currentData.getDate() + new Date(currentData.getFullYear(), currentData.getMonth(), 0).getDate() - days;
        } else {
          age_day = currentData.getDate() - days;
        }
      }

 }
  //We display the calculated data in the result fields
  let outputDay = document.querySelector('.days').querySelector('span');
  let outputMonth = document.querySelector('.months').querySelector('span');
  let outputYear = document.querySelector('.years').querySelector('span');


    outputDay.innerHTML = age_day;
    outputMonth.innerHTML = age_mounth;
    outputYear.innerHTML = age_year;
  

  
});

