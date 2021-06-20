//A

const addTheWordCool = function (array) {
  const addCool = array.push('cool');
  return addCool;
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
 // resultaat: ["nice", "awesome", "tof", "cool"]


//B

const amountOfElementsInArray = (array) => {
  const amountOfElements = array.length;
  return amountOfElements;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 
  // 3

  
//C

const selectBelgiumFromBenelux = (array) => {
  const selectBelgium = array.shift();
  return selectBelgium;
}

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
// resultaat: "Belgie" 


 //D

const lastElementInArray = (array) => {
  const lastElement = array.pop();
  return lastElement;
}

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
 // resultaat: "Schildpad"


//E

const presidents = ["Trump", "Obama", "Bush", "Clinton"] 
  
  const impeachTrumpSlice = function(array) {
    const trumpSlice = array.slice(1);
    return trumpSlice;
  }

  const impeachTrumpSplice = function(array) {
    const trumpSplice = array.splice(1,3);
    return trumpSplice;
  }
  
  console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
  console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]


 //F
 
 const stringsTogether = (array) =>{
   const string = array.join(' ');
   return string;
 }

  console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
  //resultaat: "Winc Academy is leuk ;-}"


  //G

  const array1 = [1,2,3];
  const array2 = [4,5,6];
  const combineArrays = array1.concat(array2);
  
  console.log(combineArrays);
  // resultaat: [1,2,3,4,5,6]

