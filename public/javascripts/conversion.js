

function checkInput(input){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
    function dateIt(date){
    var year = date.getFullYear()
    var month = months[date.getMonth()] 
    var day = date.getDate()
    return month + " " + day + ", " + year
  }
  
  
  function convertToNatural(uInput){
    var date = new Date(uInput * 1000)
    return dateIt(date)
  }
  

  function convertToUnix(string){
    var date = new Date(string)
    return date.getTime()
  }
  
  
  
  var naturalDate;
  var unixDate;
  if (!isNaN(input)){ // input is unix
    naturalDate = convertToNatural(input)
    unixDate = input
  } else {
    var date = new Date(input)
    if (date != 'Invalid Date'){ // input is valid string
      unixDate = convertToUnix(input)
      naturalDate = dateIt(date)
    } else { //  input is invalid string
      console.log({ unix: null, natural: null })
    }
  }
   console.log({unix: unixDate, natural: naturalDate})
}


checkInput('02/28/98')