var searchInput = document.getElementById("search_input");
var confirmSearchBtn = document.querySelector(".confirm_search_btn");

var dayName = document.querySelector(".day_name");
var dayDate = document.querySelector(".day_name");

var cityName = document.querySelector(".city_name");

var weatherDsgree = document.querySelector(".weather_degree");

var conditionIcon = document.querySelector(".status_icon");

var conditionDescription = document.querySelector(".status_condition");

var cards_container = document.querySelector("#allData");

// ^=================================================================================

function getData(selectedLocation) {
  var myhttp = new XMLHttpRequest();
  myhttp.open(
    "GET",
    `https://api.weatherapi.com/v1/forecast.json?key=86c4d42b74724e1caa112926240101&q=${selectedLocation}&days=3`
  );
  myhttp.send();
  myhttp.addEventListener("readystatechange", function () {
    if (myhttp.readyState == 4 && myhttp.status == 200) {
      console.log(JSON.parse(myhttp.response));
      displayData(JSON.parse(myhttp.response));
    }
  });
}

getData("cairo");

function displayData(x) {
  var date1 = new Date(x.forecast.forecastday[0].date);
  var date2 = new Date(x.forecast.forecastday[1].date);
  var date3 = new Date(x.forecast.forecastday[2].date);
  var times = [];

  for (var i = 0; i < x.forecast.forecastday[0].hour.length; i++) {
    var dateString = x.forecast.forecastday[0].hour[i].time;
    var dateObject = new Date(dateString);
    var hours = dateObject.getHours();
    var minutes = dateObject.getMinutes();

    var formattedTime =
      (hours < 10 ? "0" : "") +
      hours +
      ":" +
      (minutes < 10 ? "0" : "") +
      minutes;

    times.push(formattedTime);
  }

  // console.log(times);

  // var dateString = x.forecast.forecastday[0].hour[0].time;
  // // Creating a Date object
  // var dateObject = new Date(dateString);
  // // Extracting hours and minutes
  // var hours = dateObject.getHours();
  // var minutes = dateObject.getMinutes();
  // // Formatting the time
  // var formattedTime =
  //   (hours < 10 ? "0" : "") + hours + ":" + (minutes < 10 ? "0" : "") + minutes;

  cartona = `

 
  <div class="col-md-4 ">
   <div class="single_card  ">
     <div
       class="date_container d-flex justify-content-between align-items-center p-2 rounded">
       <span class="day_name text-uppercase">${date1.toLocaleString("en-us", { weekday: "long", })}
        
      </span>
       <span class="day_date text-capitalize">${
         x.forecast.forecastday[0].date
       }</span>
     </div>
     <div class="city_name mt-2">${x.location.name}</div>
     <div
       class=" d-flex flex-column align-items-center justify-content-evenly py-1">
       <img
         src="${x.current.condition.icon}"
         alt="..."
         class="status_icon_  " />
       <h1 class="weather_degree_td">${
         x.current.temp_c
       }<span class = "text-info">&degC</span></h1>
       
     </div>

     <div class="status_condition p-2 mt-2 rounded ">${
       x.current.condition.text
     }</div>

     <div
       class="weather_sammary d-flex justify-content-around align-items-center mt-5 p-2">
       <span><i class="fa-solid fa-umbrella me-2"></i> ${
         x.current.precip_mm * 100
       }% </span>
       <span><i class="fa-solid fa-wind me-2"></i> ${
         x.current.wind_kph
       } km/h</span>
       <span> <i class="fa-solid fa-compass me-2"></i> ${
         x.current.wind_dir
       }</span>
     </div>
   </div>
 </div>




 <div class="col-md-4 ">
   <div class="single_card ">
     <div
       class="date_container d-flex justify-content-center align-items-center p-2 rounded">
       <span class="day_name text-uppercase">${date2.toLocaleString("en-us", {
         weekday: "long",
       })}</span>
       
     </div>
    
     <div
       class=" d-flex flex-column align-items-center justify-content-evenly py-4 mt-2">

       <img
         src="${x.forecast.forecastday[1].day.condition.icon}"
         alt="..."
         class="status_icon  w-50" />

         <h1 class="weather_degree ">${
           x.forecast.forecastday[1].day.maxtemp_c
         }<span class = "text-info">&degC</span></h1>
         <h5 class="weather_degree_min  ">${
           x.forecast.forecastday[1].day.mintemp_c
         }&deg</h5>
     </div>

     <div class="status_condition p-2 mt-3">${
       x.forecast.forecastday[1].day.condition.text
     }
     </div>

     
   </div>
 </div>

 <div class="col-md-4 ">
   <div class="single_card ">
     <div
       class="date_container d-flex justify-content-center align-items-center p-2 rounded">
       <span class="day_name text-uppercase">${date3.toLocaleString("en-us", {
         weekday: "long",
       })}</span>
       
     </div>
    
     <div
       class=" d-flex flex-column align-items-center justify-content-evenly py-4 mt-2">

       <img
         src="${x.forecast.forecastday[2].day.condition.icon}"
         alt="..."
         class="status_icon  w-50" />

         <h1 class="weather_degree ">${
           x.forecast.forecastday[2].day.maxtemp_c
         }<span class = "text-info">&degC</span></h1>
         <h5 class="weather_degree_min  ">${
           x.forecast.forecastday[2].day.mintemp_c
         }&deg</h5>
     </div>

     <div class="status_condition p-2 mt-3">${
       x.forecast.forecastday[2].day.condition.text
     }
     </div>

     
   </div>
 </div>


 <div class="col-md-12">
 <div class="sammary_of_day ">

   <i class=" text-warning ms-3 me-3 fa-solid fa-cloud-sun fa-beat-fade"></i>
   <span>
   Weather Forecast For The <span class = "text-warning fw-bold fs-2">24</span> Hours Of The Day</span>
   <i class=" text-warning ms-3 me-3 fa-solid fa-cloud-sun-rain fa-beat-fade"></i>
 </div>
</div> 

 


 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[0]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[0].condition.icon
       ? x.forecast.forecastday[0].hour[0].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[0].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[0].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[1]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[1].condition.icon
       ? x.forecast.forecastday[0].hour[1].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[1].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[1].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[2]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[2].condition.icon
       ? x.forecast.forecastday[0].hour[2].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[2].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[2].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[3]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[3].condition.icon
       ? x.forecast.forecastday[0].hour[3].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[3].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[3].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[4]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[4].condition.icon
       ? x.forecast.forecastday[0].hour[4].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[4].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[4].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[5]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[5].condition.icon
       ? x.forecast.forecastday[0].hour[5].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[5].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[5].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[6]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[6].condition.icon
       ? x.forecast.forecastday[0].hour[6].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[6].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[6].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[7]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[7].condition.icon
       ? x.forecast.forecastday[0].hour[7].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[7].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[7].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[8]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[8].condition.icon
       ? x.forecast.forecastday[0].hour[8].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[8].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[8].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[9]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[9].condition.icon
       ? x.forecast.forecastday[0].hour[9].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[9].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[9].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[10]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[10].condition.icon
       ? x.forecast.forecastday[0].hour[10].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[10].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[10].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[11]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[11].condition.icon
       ? x.forecast.forecastday[0].hour[11].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[11].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[11].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[12]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[12].condition.icon
       ? x.forecast.forecastday[0].hour[12].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[12].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[12].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[13]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[13].condition.icon
       ? x.forecast.forecastday[0].hour[13].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[13].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[13].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[14]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[14].condition.icon
       ? x.forecast.forecastday[0].hour[14].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[14].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[14].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[15]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[15].condition.icon
       ? x.forecast.forecastday[0].hour[15].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[15].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[15].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[16]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[16].condition.icon
       ? x.forecast.forecastday[0].hour[16].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[16].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[16].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[17]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[17].condition.icon
       ? x.forecast.forecastday[0].hour[17].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[17].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[17].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[18]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[18].condition.icon
       ? x.forecast.forecastday[0].hour[18].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[18].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[18].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[19]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[19].condition.icon
       ? x.forecast.forecastday[0].hour[19].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[19].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[19].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[20]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[20].condition.icon
       ? x.forecast.forecastday[0].hour[20].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[20].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[20].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[21]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[21].condition.icon
       ? x.forecast.forecastday[0].hour[21].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[21].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[21].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[22]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[22].condition.icon
       ? x.forecast.forecastday[0].hour[22].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[22].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[22].temp_c} &degc</p>

 </div>
</div>
 <div class="card_container_ col-md-2 col-sm-4   ">
 <div class="hourly_container bg-dark d-flex flex-column align-items-center rounded text-white">
   <p class = "time_">${times[23]}</p>
   <img src="${
     x.forecast.forecastday[0].hour[23].condition.icon
       ? x.forecast.forecastday[0].hour[23].condition.icon
       : "../assets/images/placeholder__.png"
   }" alt="" class = "">
   <p>${x.forecast.forecastday[0].hour[23].condition.text}</p>
   <p>${x.forecast.forecastday[0].hour[23].temp_c} &degc</p>

 </div>
</div>


 `;

  cards_container.innerHTML = cartona;
}

confirmSearchBtn.addEventListener("click", function () {
  console.log(searchInput.value);
  if (searchInput.value == "") {
    Swal.fire({
      title: "Select City First",
      text: "🤡",
      icon: "error",
    });
    getData("cairo");
  }
  getData(searchInput.value);
});


 //!================================================= Detect Location =======================================================
const autoDetectLocationButton = document.querySelector(".detect_location");

autoDetectLocationButton.addEventListener("click", () =>
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        console.log(data.address.city);
       
        getData(data.address.city);
        searchInput.value = data.address.city;
        
      })
      .catch(() => {
        console.log("can not get your location 🥲  ");
        Swal.fire({
          title: "Sorry ",
          text: "Can not Detect Your Location 🥲  ",
          icon: "error",
        });
      });
  })
);
