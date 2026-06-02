//global variable
var used = false;



//This was purposefully coded badly so that it can improved by student.
function returnText(){
    let dim = document.getElementById("dim").value
    let version = document.getElementById("version").value
    let row, col;

    if(version > 4 ){
        alert("This puzzle section hasn't been implemented yet, sorry. ")
    }
    if(version <= 0 ){
        alert("There is no negative puzzle versions")
    }
    //only seting it 3 to keep it efficient and since we are only ever gonna get it in NumberxNumber formate
  /*

  //We kee this remeber older sped code lol
    for(let i = 0; i < 3; i++){
       if( i == 0){
        col = dim[0]
       }
       if( i == 2){
        row = dim[2]
       }
    }
       
    */

    //alert(dim)
    //alert(dim.length)

    for(let i = 0; i < dim.length;i++){
          if(  dim[i] == 'x'){
               // alert(i)
                //0 to i 
                row  = Number(dim.substring(0, i));
                //alert( "ROW"+ row) 
                col  = Number(dim.substring(i+1, dim.length));
                //alert( "COL"+ col)
                break
          }
          
          if(i == dim.length-1 ){
            alert("Reformat this to (number)x(number) ")
          }
    }

   /* let rowsearch = 0;
    if(  dim[i] == 'x'){
    alert("test1")
   // row  = string.substring(0, dim[i]);
  //  col = string.substring(dim[i], dim.length );
    break
    }
   
    if (i == dim.length-1){
        alert("this is not a valid config")

    }
    }
      */
    
    GenerateGid(col, row, version)

}


function GenerateGid(col, row, version){

    alert( "COL :" + col)
    alert( "ROW :" + row)
    
    if(used = true){
        clearMap()
    }

    let cardGen =  document.getElementById("cardGen");
    let versionTitle = document.getElementById("verTitle");
    versionTitle.innerText = "Match Game!\n" +   " Version " + version

    cardGen.style.gridTemplateColumns = "repeat("+ col +", auto)"
    //cardGen.style.gridTemplateRows = "repeat("+ row +", auto)"

    for(let i = 0; i<col; i++ ){
        for(let y = 0; y<row; y++ ){
            cardGen.innerHTML += '<div class="card" onclick="() id=" card' + i+y + '"> (' + i+y + ') </div>';  
        }
    used = true
    }

}

function select(id){
    alert(id)
}




function clearMap( ){
    let cardGen =  document.getElementById("cardGen");

 cardGen.outerHTML = "<div id ='cardGen' class = 'cardCarrior'> </div>";

}

 function testing(){
    alert("testing 123")
    let findingp = document.querySelector("p")

    alert(findingp)
    alert("testing 456")

    //aller

 }




