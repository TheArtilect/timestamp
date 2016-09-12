function checkInput(input){
  
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  
  function convertToNatural(number){
    var date = new Date(number * 1000)
    var year = date.getFullYear()
    var month = months[date.getMonth()] 
    var day = date.getDate()
    var natural = month + " " + day + ", " + year
    return natural
  }
  
  function convertToUnix(string){
    var date = new Date(string)
    return date
  }
  
  if (!isNaN(input)){
    var naturalDate = convertToNatural(input)
    return ({ unix: input, natural: naturalDate })
  } else {
    return convertToUnix(input)
  }               
}

