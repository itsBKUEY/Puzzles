
//global variable
var used = false;
alert("TEST")

// submit button set up
let submity = document.querySelector('#submit')

//version set up
let versionEle = document.querySelector('#version')
versionEle.setAttribute('type', "number")
versionEle.setAttribute('placeholder', "ex: 1, 2, 3 etc")
//Dimension Set up

let dimElement = document.querySelector('#dim')
dimElement.setAttribute('type', 'text')
dimElement.setAttribute('placeholder', "ex: 2x2, 3x4, etc(colxrow)")


//Card Gen Set up
let cardGen =  document.getElementById("cardGen");
        cardGen.innerHTML = "<div> hiii </div>"
 
    //Title set Up
let versionTitle = document.getElementById("verTitle");

// Deck set up
//Holds all cards before sorted
let deck = []

// Match setup
// Match map to match two different cards
const checker = new Map();


// click checker, starts 
submity.addEventListener('click',returnText )




function returnText(){

    //User inputs intialized
    let dim = dimElement.value
    let version = versionEle.value
    let row, col;


    if(version > 2 ){
        alert("This puzzle section hasn't been implemented yet, sorry.")
    }
    if(version <= 0 ){
        alert("There is no negative puzzle versions")
    }
  



    for(let i = 0; i < dim.length;i++){
          if(  dim[i] == 'x'){
            // finds x places index there and prooceds on
                row  = Number(dim.substring(0, i));
                col  = Number(dim.substring(i+1, dim.length));
                break
          }
          
          if(i == dim.length-1 ){
            alert("Reformat this to (number)x(number) ")
          }
    }
    
    GenerateGid(col, row, version)

}


function GenerateGid(col, row, version){

    console.log( "COL :" + col)
    console.log( "ROW :" + row)
    
    if(used === true){
        clearMap()
    }

    versionTitle.innerText = "Match Game!\n" +   " Version " + version
    cardGen.style.gridTemplateColumns = "repeat("+ col +", auto)"
    //cardGen.style.gridTemplateRows = "repeat("+ row +", auto)"

    for(let i = 0; i<col; i++ ){
        for(let y = 0; y<row; y++ ){
            createCard(y+""+ i)
            
        }
    used = true
    }

   
  
   cardGen.innerHTML = deck[0].outerHTML;
  
}




function createCard(id){
    alert("TEST")   
    let card = document.createElement("div")
    card.setAttribute("class","card")
    card.setAttribute("id", `card${id}`)
    card.innerText = `CARD ${id}`
    card.addEventListener("click", checkCard)
    


    // puts into deck ot shuffle
    deck.push(card)
    
   
  

}







function clearMap( ){

 cardGen.outerHTML = "<div id ='cardGen' class = 'cardCarrior'> </div>";
}




