$(document).ready(function(){
  $('.countForm').submit(function(event) {
    event.preventDefault();

    //get input values
    var goal = parseInt($('#goal').val());
    var by = parseInt($('#by').val());
    var temp = ""
    for (var i = by; i <= goal; i += by) {

      temp += i + ' ';

    }
    $('#output').text('Output: ' + temp);
  });
});
