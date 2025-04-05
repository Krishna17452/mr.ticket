
let duplicatearry1=[], duplicatearry2=[];
let arry11, arry12, movieName, movieTim, movieename, movietiime, movievalue, valuee;



 
movieename=JSON.parse(localStorage.getItem('moviename'));
console.log(movieename);
movietiime=JSON.parse(localStorage.getItem('movietime'));
console.log(movietiime);
arry11=JSON.parse(localStorage.getItem('arry1'));
console.log(arry11);
arry12=JSON.parse(localStorage.getItem('arry2'));
console.log(arry12);
movievalue=JSON.parse(localStorage.getItem('movievalue'));
console.log(movievalue); 





function duplicate1(duplicatearry1){ 
    valuee=valuue();
    console.log(valuee);
    movieName= movnam();
    movieTim= movieshowtime();
    [duplicatearry1, duplicatearry2]=  vall(); 

    localStorage.setItem('arry1',JSON.stringify(duplicatearry1)); 
    localStorage.setItem('arry2',JSON.stringify(duplicatearry2));  
    localStorage.setItem('moviename', JSON.stringify(movieName));
    localStorage.setItem('movietime', JSON.stringify(movieTim));
    localStorage.setItem('movievalue', JSON.stringify(valuee)); 
   
} 
 
