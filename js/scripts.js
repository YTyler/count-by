$(document).ready(function(){
  $('.countForm').submit(function(event) {
    event.preventDefault();

    //get input values
    var goal = parseInt($('#goal').val());
    var by = parseInt($('#by').val());
    var temp = "";
    if (by === 0 || goal === 0){
      alert("Dont enter 0");
    } else if (by > 0 && goal > 0){
      for (var i = by; i <= goal; i += by) {

        temp += i + ' ';

      }
    }  else if (by < 0 && goal < 0) {
      for (var i = by; i >= goal; i += by) {

        temp += i + ' ';

      }
    }else {

    }
    $('#output').text('Output: ' + temp);
  });
});
