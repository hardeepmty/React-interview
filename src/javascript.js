const isPalindrome = (str)=>{
  const cleanStr = str.replace(/[^A-Za-z0-9]/g,"").toLowerCase() ;
  const newStr = cleanStr.split('').reverse().join() ;
  return cleanStr===newStr ;
}

const testStr1 = "A man, a plan, a canal, Panama!";
const testStr2 = "Hello, world!";

console.log(isPalindrome(testStr1));