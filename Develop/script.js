//ability to add events to planner



//Whe I open the planner, the current day is displayed at the top

function renderTime() {
    var mydate= new Date();
    var year = mydate.getFullYear();
        if(year < 1000) {
            year =-1900
        } 
       var day = mydate.getDay();
       var month = mydate.getMonth(); 
       var daym = mydate.getDate();
       var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
       var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December",);
    
//Date End

//Time
        var currentTime = new Date();
        var h = currentTime.getHours();
        var m = currentTime.getMinutes();
        var s = currentTime.getSeconds();
}


//When I scroll I am give time blocks for a standard businedd day




//Each time block is color coded for past present or future




//When I click into a time block I can enter an event




// When i click save for that time block the event is saved in local storage




//When i refresh the page, the save persists


