
/*
 * GET home page.
 */


exports.index = function(req, res){
  //res.send('Hello World!');
  res.render('index', { title: 'TimeStamp Microservice', author: "Ian Agpawa" });
};








function checkInput(input){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  
  function dateIt(date){
    var year = date.getFullYear()
    var month = months[date.getMonth()] 
    var day = date.getDate()
    var namedDate = days[date.getDay()]
    return [(month + " " + day + ", " + year), namedDate] 
  }
  
  
  function convertToNatural(uInput){
    var date = new Date(uInput * 1000)
    return dateIt(date)
  }
  

  function convertToUnix(string){
    var date = new Date(string)
    return date.getTime() / 1000
  }
  
  
  
  
  var naturalDate;
  var unixDate;
  var day;
  if (!isNaN(input)){ // input is unix
    arr = convertToNatural(input)
    naturalDate = arr[0]
    day = arr[1]
    unixDate = input
  } else {
    var date = new Date(input)
    if (date == 'Invalid Date'){ // input is invalid
      unixDate = null
      naturalDate = null
      day = null
    } else { //  input is a valid string
      unixDate = convertToUnix(input)
      arr = dateIt(date)
      naturalDate = arr[0]
      day = arr[1]
      
    }
  }
   return ({unix: unixDate, natural: naturalDate, dayOfTheWeek: day})
}





exports.getTime = function(req, res){
  var userInput = req.params.input
  res.json(checkInput(userInput))
  
}