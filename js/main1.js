/*jslint browser:true */
"use strict";

var name 

$(document).ready(function(){
    WireEvents();
   
    
      

});


function WireEvents(){
   // $('#button').click(calculateSolar());
     $('#button').click(function(){
               
                calculateSolar();
                
                });
}

// Getting Hours
function    gethours(w){
    
    var h=0;
    for (var counts =0 ; counts < w.length; counts++)
        {
            
           
            
           var  hours = Number(w[counts].value);
            h += hours;
            
        }
        
        return h;
}


// CALCULATING TAX
function gettax(status){
    var tax=0;
     for( var x=0 ; x < status.length; x++)
        {
           
            
             tax = (status[x].value); 
        }    
    
    return tax;
}

function calculateSolar(){
        var name = $("input[name*=ename").val();// document.getElementById("name").getElementsByTagName('input');
        var Mon =  $("input[name*='HoursMon']").val();
         var Tues =  $("input[name*='HoursTue']").val();
          var Weds =  $("input[name*='HoursWed']").val();
           var Thurs =  $("input[name*='HoursThurs']").val();
            var Fri =  $("input[name*='HoursFri']").val();
        //     var Sat =  $("input[name*='HoursMon']").val();
        //      var Sun =  $("input[name*='HoursMon']").val();//document.getElementById("wts").getElementsByTagName("input");
        var display ; // $("#feedback").text(name); //document.getElementById("feedback");
        var Rstatus = $("#panel").val();// document.getElementsByName("panel");
        var tax=0;
        var totalhours =0;
        var total;
        var aftertax=0;
        var hourrate = 15;
        
    alert(Rstatus);
        
       var name1 //= name[0].value;
        totalhours = Number(Mon)+ Number(Tues)+Number(Weds)+Number(Thurs)+Number(Fri);
        //var monhours =hours.getAttribute
        
       // Getting Tax 
        tax = Rstatus;
       
       
       
        total = gettotal(hourrate, totalhours);
        aftertax = getnetpay(total, tax);
        
        
        
        
       $("#feedback").text("Name:"+ name+"<br>Total Hours :"+ totalhours+"<br>Total Salary :$"+ total + " <br> Tax:"+ tax + "<br> After Tax:$" +aftertax);
        //display.innerHTML =">>>>> making big CHANGES>>> "

}

//getting netpay
function getnetpay(total, tax){
    
    var n= (total - (total*tax));
    return n;
}


//getting total.
function gettotal(hourrate, totalhours){
    var t = (hourrate * totalhours)
    
    return t
}