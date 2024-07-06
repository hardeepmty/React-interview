//PROMISES
console.log("start")

const sub = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    const result = true ;
    if(result) resolve("hello world!")
    else reject(new Error("say hello"))
  },2000);
});

//console.log(sub)   ->Promise(pending)

sub
  .then((res)=>{
    console.log(res)
  })
  .catch((error)=>{
    console.log(error)
  })


//CURRYING

  function sum(a){
    return function (b){
      return function (c){
        return a+b+c ;
      }
    }
  }

  console.log(sum(1)(2)(3)) ;

//CLOSURE

function makeCounter(){
  let count = 0 ;
  return function(){
    count++ ;
    return count ;  
  }
}

const counter1 = makeCounter();
const counter2 = makeCounter() ;
console.log(counter1) ; //1
console.log(counter1) ; //2
console.log(counter2) ; //1
console.log(counter2);  //2


//First letter to uppercase-
const sentence = "this is a sample string";
const array = sentence.split(" ") ;
const capital = array.map((word)=>word.charAt(0).toUpperCase + word.slice())
const newSentence = capital.join(" ") ;
console.log(newSentence)
