
// Movienumber tells, when it is first movie or second movie.
let Movienumber;
function Movienum(val){
    Movienumber=val; 
} 

let moviename1='Avengers Infinity war', moviename2='Avengers Endgame';
let showtime1='11.30 AM', showtime2='02.30 PM', showtime3='06.00 PM', showtime4='09.00 PM';
 
// By this function we change the screen-side1 block for movie timings.
function Timing(){ 
    if(Movienumber===1){
            document.querySelector('.screen-side1').innerHTML=` <div class="movie-img-cls"">
                <div class="movie-img-box1" >
                    <div class="first-movie-img"></div>
                    <div class="first-movie-name"><span class='movie1'>Avengers Infinity war </span><br> Rating:9.5/10</div>
                </div>
                 <div class="moive-timing-cls" style="display:block">
                <div class="movie-timinig-buttons-cls">
                    <p>Timings</p>
                    <button class="timing-but1" onclick="movieshowtime(1)">11.30 AM</button>
                    <button class="timing-but2" onclick="movieshowtime(2)">02.30 PM</button>
                    <button class="timing-but3" onclick="movieshowtime(3)">06.00 PM</button>
                    <button class="timing-but4" onclick="movieshowtime(4)">09.00 pm</button>
                </div>
            </div> 
            </div>
            <div class="ADblock">AD's Block </div>
           `; 
           moviename();
        }
        else if(Movienumber===2){
            document.querySelector('.screen-side1').innerHTML=`
             <div class="movie-img-cls"">
                <div class="movie-img-box1" >
                    <div class="second-movie-img"></div>
                    <div class="second-movie-name" ><span class='movie2'>Avengers Endgame </span> <br> Rating:9.8/10</div>
                </div>
                 <div class="moive-timing-cls" style="display:block">
                    <div class="movie-timinig-buttons-cls">
                        <p>Timings</p>
                        <button class="timing-but1" onclick="movieshowtime(5)">11.30 AM</button>
                        <button class="timing-but2" onclick="movieshowtime(6)">02.30 PM</button>
                        <button class="timing-but3" onclick="movieshowtime(7)">06.00 PM</button>
                        <button class="timing-but4" onclick="movieshowtime(8)">09.00 pm</button>
                    </div>
                </div> 
            </div>
            <div class="ADblock">AD's Block </div>
           `;  
           moviename();
        }
}

// This part about navbar's movie name
 
function moviename(){
    document.querySelector('.navbar').style.display='grid';
    if(Movienumber===1){
        document.querySelector(".moviename").innerHTML=document.querySelector(".movie1").innerHTML;
    }
    else if(Movienumber===2){
        document.querySelector(".moviename").innerHTML=document.querySelector(".movie2").innerHTML;
    } 
}


// this function is used to set movie name in final ticket
let movieNam;
function movnam(){
    if(Movienumber===1){
        movieNam= moviename1; 
    }else if(Movienumber===2){
        movieNam= moviename2; 
    }
    return movieNam;
}
let value=0;
function valuue(){
    if(Movienumber===1){ 
        value=1;
    }else if(Movienumber===2){ 
        value=2;
    } 
    return value;
}

//This part about navbar's movie timing 
let showtime=0;
function movietime(movietimeval){ 
    if(movietimeval===1){
        document.querySelector(".movietime").innerHTML=document.querySelector(".timing-but1").innerHTML;
    showtime=1;
    }else if(movietimeval===2){
        document.querySelector(".movietime").innerHTML=document.querySelector(".timing-but2").innerHTML;
    showtime=2;
    } else if(movietimeval===3){
        document.querySelector(".movietime").innerHTML=document.querySelector(".timing-but3").innerHTML;
    showtime=3;
    } else if(movietimeval===4){
        document.querySelector(".movietime").innerHTML=document.querySelector(".timing-but4").innerHTML;
    showtime=4;
    }

    return showtime;
}
  


function entryseats(){
    alert("first select movie & Time");
} 


// In This part we add the multipul html elements into screen-side2 by variabl 
let movtime;
function movieshowtime(showtime){
    if(showtime>0)
        window.alert=function(){};
    
    switch(showtime){
        case 1:
            document.querySelector('.screen-side2').innerHTML=firstMoviefirstshow;   
            movietime(1);
            break;
        case 2: 
            movietime(2);
            document.querySelector('.screen-side2').innerHTML=firstMoviesecondshow;
            break;
        case 3: 
            movietime(3);
            document.querySelector('.screen-side2').innerHTML=firstMoviethirdshow; 
            break;
        case 4: 
            movietime(4);
            document.querySelector('.screen-side2').innerHTML=firstMoviefourthshow; 
            break;
        case 5: 
            movietime(1);
            document.querySelector('.screen-side2').innerHTML=secondMoviefirstshow; 
            break;
        case 6: 
            movietime(2);
            document.querySelector('.screen-side2').innerHTML=secondMoviesecondshow; 
            break;
        case 7: 
            movietime(3);
            document.querySelector('.screen-side2').innerHTML=secondMoviethirdshow; 
            break;
        case 8: 
            movietime(4);
            document.querySelector('.screen-side2').innerHTML=secondMoviefourthshow; 
            break;
    }

    // this for showing show time in final ticket.
    if(showtime===1 || showtime===5){
        movtime=showtime1; 
        document.querySelector('.timing-but1').style.background="green";
        document.querySelector('.timing-but2').style.background="rgb(40, 230, 81)";
        document.querySelector('.timing-but3').style.background="rgb(40, 230, 81)";
        document.querySelector('.timing-but4').style.background="rgb(40, 230, 81)"; 
    }else  if(showtime===2 || showtime===6){
        movtime=showtime2;  
        document.querySelector('.timing-but2').style.background="green";
        document.querySelector('.timing-but1').style.background="rgb(40, 230, 81)";
        document.querySelector('.timing-but3').style.background="rgb(40, 230, 81)";
        document.querySelector('.timing-but4').style.background="rgb(40, 230, 81)"; 
      }else  if(showtime===3 || showtime===7){
        movtime=showtime3;  
        document.querySelector('.timing-but3').style.background="green";
        document.querySelector('.timing-but2').style.background="rgb(40, 230, 81)";
        document.querySelector('.timing-but1').style.background="rgb(40, 230, 81)";
        document.querySelector('.timing-but4').style.background="rgb(40, 230, 81)"; 
      }else  if(showtime===4 || showtime===8){
        movtime=showtime4; 
        document.querySelector('.timing-but4').style.background="green";
        document.querySelector('.timing-but2').style.background="rgb(40, 230, 81)";
        document.querySelector('.timing-but3').style.background="rgb(40, 230, 81)";
        document.querySelector('.timing-but1').style.background="rgb(40, 230, 81)";  
      }

      return movtime;
}
 
 let classnumber;
 const firstclassarry=[], secondclassarry=[];
 let firstclsseats, secondclsseats;
 let firstarrylength, secondarrylenght;
 let duplicate; 


    function vall(classname, clsno){
        if (clsno===1){
        
            firstclsseats=document.querySelector(`.${classname}`).innerHTML; 
            firstclassarry.push(firstclsseats); 
            firstarrylength=firstclassarry.length; 
            document.querySelector(`.${classname}`).style.background="lightblue";
            document.querySelector(`.${classname}`).style.color="black";
             
            if(firstarrylength>1){
                for(let i=0;i<firstarrylength-1;i++){
                     if (firstclsseats===firstclassarry[i]){
                        document.querySelector(`.${classname}`).style.background="rgba(158, 158, 158, 0.1)";
                        document.querySelector(`.${classname}`).style.color="white "; 
                        firstclassarry.splice(i, 1);
                        firstclassarry.pop();
                        
                    }
                }  
            }
             
 
        console.log(firstclassarry);
    }
  else if(clsno===2){ 
        secondclsseats=document.querySelector(`.${classname}`).innerHTML; 
        secondclassarry.push(secondclsseats);
        secondarrylenght=secondclassarry.length;
        document.querySelector(`.${classname}`).style.background="lightblue";
        document.querySelector(`.${classname}`).style.color="black"; 
        
        if(secondarrylenght>1){
            for(let i=0;i<secondarrylenght-1;i++){
                 if (secondclsseats===secondclassarry[i]){
                    document.querySelector(`.${classname}`).style.background="rgba(158, 158, 158, 0.1)";
                    document.querySelector(`.${classname}`).style.color="white "; 
                    secondclassarry.splice(i, 1);
                    secondclassarry.pop();
                    
                }
            }  
        }
        
 
        console.log(secondclassarry);
  }
  return [firstclassarry, secondclassarry];
} 
 










 
 