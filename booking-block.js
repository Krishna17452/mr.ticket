let firstclsarray=[], secondclsarray=[];
let firstclsarraylength, secondclsarraylength;
let Totaltickets, cost, GST, Totalcost

    let date= Date();
    firstclsarray=arry11, secondclsarray=arry12;
    firstclsarraylength=firstclsarray.length;
    secondclsarraylength=secondclsarray.length; 
    Totaltickets=firstclsarraylength+secondclsarraylength;

function Qrfunction(){
    document.querySelector('.booking-block2').style.display='grid'; 
   let stop= setInterval(ticket, 5000);
}


function ticket(){
    document.querySelector('.screen-main-block-cls').innerHTML=`
        <div class="final-ticket"> 
        <div class="theatername">
            <p><span>&#9733</span> Radha Multiplex <span>&#9733</span></p>
        </div>
        <div class="deign">
            <p><span class="leftcircle">&#9679</span>&#9679 &#9679 &#9679 &#9679 &#9679 &#9679 &#9679 &#9679 &#9679 &#9679 &#9679 &#9679 &#9679<span class="rightcircle">&#9679</span></p>
        </div>
        <div class="ticket-show">
            <div class="amount-block">
             <p>Movie :${movieename}</p>
             <p>Total no . of seat : ${Totaltickets}</p>
             <p>Show Time :${movietiime}</p>
             <p>Seat no :${arry11} ${arry12}</p>
             <p style="font-size:15px;">Date & Time : ${date} </p>
            </div> 
        </div>
        <div class="thank-cls">
            <p>------- Thank You -------</p>
        </div>
    </div>`;
}


 


function bookingblock(){
    document.body.innerHTML=`<div class="screen-main-block-cls">
  <div class="screen-side2"> 
      <div class="booking-block1">
          <div class="theater-name-cls"> Radha Multiplex</div>
          <div class="movie">
              <div class="movieimg-block">
                  <div class="movieimg${movievalue}"></div> 
                  <div class="seats-block">
                      <div class="moviname"><p> ${movieename}</p><br><p>Seat no :${firstclsarray} ${secondclsarray}</p></div>
                      <div class="no-seats-block"></div>
                  </div>
              </div>
          </div>
          <div class="calculation-block">
              <div class="calculation">
                  <div>
                      <p>No.of Ticket : ${Totaltickets} </p> 
                      <p>Cost of the tickets : ${cost}/-</p>
                      <p>GST 18% : ${cost}/-</p>
                      <p>Total cost : ${Totalcost}/-</p> 
                  </div>
              </div><br>
              <div class="button-block" style="display: inline;"><button class="calculation-button" onclick="confirm();">Confirm</button></div>
          </div>
      </div>
      <div class="booking-block2">
          <div class="qr-block"> 
          </div>
          <div class="ads-block">
               Scan Here
          </div>
      </div>
  </div>

  <div class="screen-side1">
      <div class="movie-img-cls">
          <div class="upcoming"><p>Upcoming Movies</p></div>
          <div class="movie-img-boxes">
              <div class="first-movie-img"></div>
              <div class="first-movie-name">Avengers Infinity war <br> Rating : 9.5/10</div>
          </div>
          <div class="movie-img-boxes">
              <div class="second-movie-img"></div>
              <div class="second-movie-name">Avengers Endgame <br> Rating : 9.8/10</div>
          </div>
      </div>
      <div class="ADblock">AD's Block </div>
  </div>
</div>`
getting();
}
 
function getting(){

    if(secondclsarraylength===0){
        cost=Totaltickets*200;
        GST=cost*(18/100);
        Totalcost=cost+GST;  
        document.querySelector('.calculation-block').innerHTML=`
                        <div class="calculation">
                            <div>
                                <p>No.of Ticket : ${Totaltickets} </p> 
                                <p>Cost of the tickets : ${cost}/-</p>
                                <p>GST 18% : ${GST}/-</p>
                                <p>Total cost : ${Totalcost}/-</p> 
                            </div>
                        </div><br>
                        <div class="button-block" style="display: inline;"><button class="calculation-button" onclick="confirm();">Confirm</button></div>
                        `;
    }
    else if(firstclsarraylength===0){
        cost=Totaltickets*150;
        GST=cost*(18/100);
        Totalcost=cost+GST; 
        document.querySelector('.calculation-block').innerHTML=` 
                        <div class="calculation">
                            <div>
                                <p>No.of Ticket : ${Totaltickets} </p> 
                                <p>Cost of the tickets : ${cost}/-</p>
                                <p>GST 18% : ${GST}/-</p>
                                <p>Total cost : ${Totalcost}/-</p> 
                            </div>
                        </div><br>
                        <div class="button-block" style="display: inline;"><button class="calculation-button" onclick="confirm();">Confirm</button></div>
                        `; 
    
    }
    else if(firstclsarraylength===0 && secondclsarraylength===0){
        alert('Please select atleast 1 ticket');
    }
    else if(firstclsarraylength!==0 && secondclsarraylength!==0){
        cost=(firstclsarraylength*200)+(secondclsarraylength*150);
        GST=cost*(18/100);
        Totalcost=cost+GST; 
        document.querySelector('.calculation-block').innerHTML=` 
                        <div class="calculation">
                        <div>
                            <p>No.of Ticket : ${Totaltickets} </p> 
                            <p>First class & Second class : ${firstclsarraylength} & ${secondclsarraylength} </p> 
                            <p>Cost of the tickets : ${cost}/-</p>
                            <p>GST 18% : ${GST}/-</p>
                            <p>Total cost : ${Totalcost}/-</p> 
                        </div>
                    </div><br>
                    <div class="button-block" style="display: inline;"><button class="calculation-button" onclick="confirm();">Confirm</button></div>
                       `;
    }
    
    } 

    function confirm(){
        Qrfunction();
    }