// Write your code below

function isPalindrom(s)// function that takes 1 argument and returns true if that argument is a palindrom
{
    let stringArray = s.split('')// turn the provied string into an array
    for(let i = 0; i < stringArray.length; i++){// loop through the array
        if(stringArray[i] !== stringArray[stringArray.length - (i + 1)]){// if last index does not equal first index
            return false// return false
        }
    }
    return true// else return true
}
console.log(isPalindrom('racecar'))// logged for testing
console.log(isPalindrom('panda'))// logged for testing