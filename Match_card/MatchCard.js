// 12th-century Egyptian deck
// this might be a fun theme? look into it



//global variable
alert("TEST")
let unclear = true

//Debuging tool to see when js is broken
let broken = document.querySelector('#broken')
broken.outerHTML = "";

// submit button set up
let submity = document.querySelector('#submit');

//version set up
let versionEle = document.querySelector('#version');
versionEle.setAttribute('type', "number");
versionEle.setAttribute('placeholder', "ex: 1, 2, 3 etc");
//Dimension Set up

let dimElement = document.querySelector('#dim');
dimElement.setAttribute('type', 'text');
dimElement.setAttribute('placeholder', "ex: 2x2, 3x4, etc(colxrow)");


//Card Gen Set up
let cardGen =  document.getElementById("cardGen");


    //Title set Up
let versionTitle = document.getElementById("verTitle");

//match will be the map for what cards match with each other
const match = new Map();


// Deck will hold the cards before placed
let deck = []


// click checker
submity.addEventListener('click',returnText );


//Cards listenr
//cards.addEventListener('click', match)


function returnText(){
    let dim = dimElement.value
    let version = versionEle.value
    let row, col;

        //Test if cersion isn't avialble yet 
    if(version > 4 ){
        alert("This puzzle section hasn't been implemented yet, sorry.")
        return
    }
    if(version <= 0 ){
        alert("There is no negative puzzle versions")
        return
    }
    


    for(let i = 0; i < dim.length;i++){
          if(  dim[i] == 'x'){
            // finds x places index there and prooceds on
                row  = Number(dim.substring(0, i));
                col  = Number(dim.substring(i+1, dim.length));
                //Test for odds
                if( (row*col) % 2 == 1 || row == 0 || col == 0) {
                    alert("That is an invalid dimension configiration ")
                    return
                 }
                break
          }
          //Test if wrong input
        if(i == dim.length-1 ){
            alert("Reformat this to (number)x(number) ")
            return
        }
       

        
    }
    
    GenerateGid(col, row, version)

}


function GenerateGid(col, row, version){

    console.log( "COL :" + col)
    console.log( "ROW :" + row)
    


    versionTitle.innerText = "Match Game!\n" +   " Version " + version
    cardGen.style.gridTemplateColumns = "repeat("+ col +", auto)"
    //cardGen.style.gridTemplateRows = "repeat("+ row +", auto)"


    // creates the cards we play with
    if(unclear == false){
        return
    }
    else{
        unclear = false;
    }


    for(let i = 0; i<col; i++ ){
      
        for(let y = 0; y<row; y++ ){ 
                createCard(y+""+ i)
        }
    }
    //Once created the deck does not hold the cards in play


    //pairs the cards
    pairCard()


    // Shuffles the cards
    shufflesCards()


    for(let i = 0; i < deck.length; i++){
    cardGen.innerHTML += deck[i].element.outerHTML;   
     
    }

    for(let i = 0; i < deck.length; i++){
    selectCard(deck[i].id).addEventListener('click', () => clickedCard( deck[i].id) )
     
    }

   //cardGenn.innerHTML =
    
   //deck[0].element.outerHTML
    
    //deck[0].outerHTML
    
}
    



//CLASS IS AN OBJECT
// TO ACCESS elements you must access it with card.elemnt
// ACCESS CARD ID WITH card.id

function createCard(id){
    
    
    let card ={ element: document.createElement("div"), id : `CARD${id}`, match : null } 
    card.element.setAttribute("class","card")
    card.element.setAttribute("id", `CARD${id}`)
    card.element.innerText = `CARD ${id}`
    deck.push(card)
    
    
  
}

function selectCard(id){
    return document.getElementById(id)
}

function clickedCard(id){

    let card = selectCard(id)
    let matchCard = selectCard( match.get(id).id)

    matchCard.innerText += `\n\n THIS MATCHES WITH \n\n ${card.id} `
    card.innerText += `\n\n THIS MATCHES WITH \n\n ${matchCard.id}  `

/*
    console.log("working " + card )
    alert("ID: " + card.id)
    alert("MATCH ID: " +match.get(id).id )
    */

}



function pairCard(){
    for(let i = 0; i < deck.length; i+=2){
        //easy acces to type in
        //TODO :
        //make this more effective later, in the mean time this shoudl work fine
        match.set(deck[i].id,deck[i+1])
        match.set(deck[i+1].id,deck[i])
        match.set(deck[i],deck[i+1])
        match.set(deck[i+1],deck[i])

        //for ease of access within the object
        deck[i].match = deck[i+1]
        deck[i+1].match = deck[i]
       alert(deck[i].id +"  ARE A MATCH  " + deck[i+1].id);
    }
}




function shufflesCards(){


}





function clearMap(deck){

    for(let i = 0; i < deck.length; i++){
       selectCard(deck[i].id).remove()
       deck[i].remove()
    }

    unclear = true;


    
    //TODO:
    // Make this clear the map

        //cardGen.innerHTML = "<div> HIUI Ire </div>"

}

/*
function matchTheCards(){

}
*/