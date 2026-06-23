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

// clear button set up
let cleary = document.querySelector('#clear');

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
cleary.addEventListener('click',() => clearMap(deck))

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

      if(unclear == false){
        alert("Inuse")
        return
    }
    else{
        unclear = false;
    }
    
    GenerateGid(col, row, version)

}


function GenerateGid(col, row, version){
    
    console.log( "COL :" + col)
    console.log( "ROW :" + row)
    let points = 0;




    
    
    versionTitle.innerText = `Match Game!\nVersion : ${version}` 
    cardGen.style.gridTemplateColumns = `repeat(${col}, auto)`
    cardGen.style.backgroundColor = "#fff8756a"
    //cardGen.style.gridTemplateRows = "repeat("+ row +", auto)"


    // creates the cards we play with
    


    for(let i = 0; i<col; i++ ){
      
        for(let y = 0; y<row; y++ ){ 
                createCard(y+""+ i)
        }
    }
    //Once created the deck does not hold the cards in play


    //pairs the cards
    pairCard()


    // Shuffles the cards
    shufflesCards(deck)


    for(let i = 0; i < deck.length; i++){
    cardGen.innerHTML += deck[i].element.outerHTML;   
     
    }

    for(let i = 0; i < deck.length; i++){
    selectCard(deck[i].id).addEventListener('click', () => clickedCard( deck[i].id, points) )
     
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

function clickedCard(id, points){

    
    let card = selectCard(id)
    let matchCard = selectCard( match.get(id).id)


  if(document.querySelector(".selected") ){
   let prev = document.querySelector(".selected")
        if( prev.id == matchCard.id  ){
            console.log("found pair")
            document.querySelector(".selected").classList.add("correct")
            card.classList.add("correct")
            points += 10;
        }
        else{
            points -=1
        }

        document.querySelector(".selected").classList.remove("selected")

        }

    card.classList.toggle("selected")

    

    //matchCard.innerText += `\n\n THIS MATCHES WITH \n\n ${card.id} `;
   // card.innerText += `\n\n THIS MATCHES WITH \n\n ${matchCard.id}  `;

   /* card.addEventListener('click', () => tester(card.id) )
    matchCard.addEventListener("click", ()=> tester(matchCard.id))*/
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
       console.log("test1")
        match.set(deck[i].id,deck[i+1])
        console.log("test21")
        match.set(deck[i+1].id,deck[i])
        match.set(deck[i],deck[i+1])
        match.set(deck[i+1],deck[i])

        //for ease of access within the object
        deck[i].match = deck[i+1]
        deck[i+1].match = deck[i]
       console.log(deck[i].id +"  ARE A MATCH  " + deck[i+1].id);
    }
}


function randomRange(start, end){
return   Math.floor(Math.random() *( end - start) + start)
}

function shufflesCards(deck){
    for(let i = 0; i < deck.length ;i++){

       let r = randomRange(i, deck.length-1);

       //switch
        let temp = deck[i]
        deck[i] = deck[r]
        deck[r]  = temp 

    }

}





function clearMap(deck){

    for(let i = 0; i < deck.length; i++){
        selectCard(deck[i].id).remove()
    }
          deck.splice(0,deck.length)
        versionTitle.innerText = ""

    cardGen.style.removeProperty('background-color')

    unclear = true;


    
    //TODO:
    // Make this clear the map

        //cardGen.innerHTML = "<div> HIUI Ire </div>"

}

/*
function matchTheCards(){

}
*/