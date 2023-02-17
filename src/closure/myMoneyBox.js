/* const moneyBox = (coins) =>{
    let saveCoins = 0;
    
    saveCoins += coins;
    console.log(`MonreBox: $ ${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
 */

function moneyBox(){
    let saveCoins = 0;
    const countCoins = (coins) =>{
        saveCoins += coins;
        console.log(`MonreBox: $ ${saveCoins}`);
    }
     return countCoins;
}

const mymoneyBox = moneyBox();

mymoneyBox(5);
mymoneyBox(5);
mymoneyBox(15);


function createPetList(){
    let pets = [];
    const addPets = (pet)=>{
      if (pet) {
        pets.push(pet);
        console.log(pets);
      }
    }
    return addPets;
  }

  const llamado = createPetList();

  llamado("cat");
  