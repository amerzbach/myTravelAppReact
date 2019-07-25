const getDuration = duration => {
  // Transforms format of durations strings like P1DT5H35M into 1D 5H 35m
  // Using regular expressions for formating

  duration = duration.replace(/P/, "");
  duration = duration.replace(/T/, "");
  duration = duration.replace(/D/, "D ");
  duration = duration.replace(/H/, "H ");
  duration = duration.replace(/M/, "m");
  return duration;
};

const getDateHour = date => {
  // Transforms format of date hours like this 2019-07-29T06:20 into 6:20 29/07/2019
  
  let newDate = new Date(date);

  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let dt = newDate.getDate();
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }
  if (minutes < 10 ) {
    minutes = "0" + minutes;
  }

  return hour + ":" + minutes + " "+ dt + "/" + month + "/" + year;
};


const getDateApi = date => {
  // Transforms format of date hours like this 2019-07-29T06:20 into 2019-07-29 for Api Calls
  
  let newDate = new Date(date);

  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let dt = newDate.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return year + "-" + month + "-" + dt;
};

const getToday = (num) => {
  // Returs date of today + num 
  
  let newDate = new Date();
  newDate = newDate.setDate(newDate.getDate() + num)
  return newDate;

}


const getFormDate = (date) => {
  // Returs date formated for input type date YYYY-MM-DD
  
  let newDate = new Date(date);
  let year = newDate.getFullYear();
  let month = newDate.getMonth() + 1;
  let dt = newDate.getDate();

  if (dt < 10) {
    dt = "0" + dt;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return year + "-" + month + "-" + dt;
}


export { getDuration, getDateHour, getDateApi, getToday, getFormDate };
