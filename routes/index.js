
/*
 * GET home page.
 */


exports.index = function(req, res){
  //res.send('Hello World!');
  res.render('index', { title: 'TimeStamp Microservice', author: "Ian Agpawa" });
};








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
      return ({ unix: null, natural: null })
    }
  }
   return ({unix: unixDate, natural: naturalDate})
}





exports.getTime = function(req, res){
  var userInput = req.params.input
  res.json(checkInput(userInput))
}