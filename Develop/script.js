// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var today=dayjs();
var time9=$('#hour-9');
var time9but=$('#9');
var presentHour =moment().hour();
var timeBlock=$('.time.block');


$(function () {
console.log(time9+"vartim9");
console.log(today);
console.log(presentHour);


function textEntry() {
  $('.saveBtn').on('click', function() {
    var key = $(this).parent().attr('id');
    var value = $(this).siblings('.description').val();
    localStorage.setItem(key, value);
  });
}
textEntry ();

for(var i=9;i<18;i++){
  if(i==presentHour){
    $('#hour-'+i).addClass('present');
  }
  else if(i<presentHour)
  {
    $('#hour-'+i).addClass('past');
  }
  else {
    $('#hour-'+i).addClass('future');
  }
}
 
  $('#currentDay').text(today.format('[Today is] dddd DD MMMM YYYY'));
});
