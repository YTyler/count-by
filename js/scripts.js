$(document).ready(function(){
  $('.countForm').submit(function(event) {
    event.preventDefault();

    //get input values
    var goal = parseInt($('#goal').val());
    var by = parseInt($('#by').val());
    var temp = "";
  if (Math.abs(by) > Math.abs(goal)) {
    temp = "'Count By' cannot be greater than 'Count To'"
  
  }else if (by > 0 && goal > 0){
      for (var i = by; i <= goal; i += by) {

        temp += i + ' ';

      }
    }  else if (by < 0 && goal < 0) {
      for (var i = by; i >= goal; i += by) {

        temp += i + ' ';

      }
    } else {
      temp = "Please use matching signs and no 0"
    }
    $('#output').text('Output: ' + temp);
  });
});
