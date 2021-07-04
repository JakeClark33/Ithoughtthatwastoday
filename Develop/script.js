//ability to add events to planner



function renderTime() {
    var mydate = new Date();
    var year = mydate.getYear();
    if (year < 1000){
            year +=1900
    }

    var day = mydate.getDay();
    var month = mydate.getMonth();
    var day = mydate.getDate();
    var dayArray = new Array("Sunday,","Monday,","Tuesday,","Wednesday","Thursday,","Friday,","Saturday,");
    var monthArray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if(h == 24){
            h = 12;
        } else if (h > 12){
            h = h - 0;
        }
        if (h < 10) {
            h = "0" + h;
        }
        if ( m < 10) {
            m = "0" + m;
        }
        if(s < 10) {
            s = "0" + s;
        }

        var myClock = document.getElementById("currentDay");
        myClock.textContent = "" + dayArray[day]+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
        myClock.innerText = "" + dayArray[day]+ " " +monthArray[month]+ " " +year+ " | " +h+ ":" +m+ ":" +s;
    
        setTimeout("renderTime()", 1000);
        

  const rows = document.getElementsByClassName("row");
        let currentHour = parseInt(renderTime().format('H'));


        Array.from(rows).forEach(row => {
            letrowIDString = row.id,
            time;
            if(rowIdString) {
                row = parseInt(rowIdString);
            }
            if (rowHour) {
                if (currentHour === rowHour){
                    setColor(row, "Red");
                
                }else if ((currentHour < rowHour) && (currentHour > rowHour - 6))
                setColor(row, "Green");

                }else if ((currentHour > rowHour) && (currentHour < rowHour + 6))
                setColor(row, "LightGrey");
                
                 else {
                    setColor(row, "white");
                }

            }
        )};
        function setColor(element, color) {
            element.style.backgroundColor = color;
          } 


          renderTime();
          function saveData(){
              localStorage.saveServer
          }




//When I scroll I am give time blocks for a standard businedd day




//Each time block is color coded for past present or future




//When I click into a time block I can enter an event




// When i click save for that time block the event is saved in local storage




//When i refresh the page, the save persists


         