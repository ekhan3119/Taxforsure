$(document).ready(function() {
    $("#navbarDropdownMenuLink").dropdown();
});


$(function() {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('MM-DD') + ' to ' + end.format('MM-DD'));
    console.log(start.format('MM-DD'));


    var myDate = (start.format('MM-DD'));
    var weekDayName =  moment(myDate).format('dddd');
    console.log(weekDayName);

     
    var tues = moment(myDate, 'MM-DD');
    var thing2 = tues.add(`1`, 'days').format('MM-DD');
    console.log(thing2);

    var wed = moment(myDate, 'MM-DD');
    var thing3 = wed.add(`2`, 'days').format('MM-DD');
    console.log(thing3);

    var thurs = moment(myDate, 'MM-DD');
    var thing4 = thurs.add(`3`, 'days').format('MM-DD');
    console.log(thing4);

    var fri = moment(myDate, 'MM-DD');
    var thing5 = fri.add(`4`, 'days').format('MM-DD');
    console.log(thing5);

    var sat = moment(myDate, 'MM-DD');
    var thing6 = sat.add(`5`, 'days').format('MM-DD');
    console.log(thing6);

    var sun = moment(myDate, 'MM-DD');
    var thing7 = sun.add(`6`, 'days').format('MM-DD');
    console.log(thing7);

    
   

    var addDates = function () {
      document.querySelector("#Mon").innerHTML = "Monday " +  myDate;
      document.querySelector("#Tue").innerHTML = "Tuesday " +  thing2;
      document.querySelector("#Wed").innerHTML = "Wednesday " +  thing3;
      document.querySelector("#Thu").innerHTML = "Thursday " +  thing4;
      document.querySelector("#Fri").innerHTML = "Friday " +  thing5;
      document.querySelector("#Sat").innerHTML = "Saturday " +  thing6;
      document.querySelector("#Sun").innerHTML = "Sunday " +  thing7;
    
    }

    addDates();

  




    });

  });