const { dir } = require('console');

const fs = require('fs').promises;

const activePuzzles = './puzzleItems/activePuzzles';
const unactivePuzzles = './puzzleItems/unactivePuzzles';
const jsonFile = './puzzleManager.JSON';

async function processPuzzles() {
    try {

        //Promis all allows Concurrent streams  
        const [active, unactive, json] = await Promise.all ([
             fs.readdir(activePuzzles),
             fs.readdir(unactivePuzzles),
             fs.readFile(jsonFile, 'utf8')
            ])

        const Manager = JSON.parse(json);

        function AddPuzzle(element, active = false, description = "", author = "N/A") {
            if (!Manager[element]) {
                Manager[element] = {
                    active,
                    added: new Date().toISOString(),
                    description,
                    author,
                    path: `./puzzleItems/${active? "activePuzzles": "unactivePuzzles"}/${element}`
                };
               
            } else {
                    console.log(`FAILURE: ${element} already exists`);

               
            }
        }
      

        active.forEach(ele => AddPuzzle(ele, true))
        unactive.forEach(ele => AddPuzzle(ele, false))

        await fs.writeFile(jsonFile, JSON.stringify(Manager, null, 2))

        console.log("DONE")

    } catch (error) {
        console.log("FAILURE")
        console.error(error)
    }
}


async function editPuzzle(element, editKey, change) {

    const json = await fs.readFile(jsonFile, 'utf8')
    const Manager = JSON.parse(json);

            if (Manager[element]) {
                Manager[element][editKey] = change
            } else {
                console.log(`FAILURE: ${element} does not exist`);
            }
        }



async function deletePuzzle(element, editKey, change) {

    const json = await fs.readFile(jsonFile, 'utf8')
    const Manager = JSON.parse(json);

    if (Manager[element]) {
        delete Manager[element]
    } else {
        console.log(`FAILURE: ${element} does not exist`);
    }
        
}



async function updateFile(puzzle, active) {
    try {

        //this will move file to active or inactive games.

         const [active, unactive, json] = await Promise.all ([
             fs.readdir(activePuzzles),
             fs.readdir(unactivePuzzles),
             fs.readFile(jsonFile, 'utf8')
            ])

        

     Manager = JSON.parse(json)



        
    } catch (error) {
        
    }
}


processPuzzles();