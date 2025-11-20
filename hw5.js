//////////////////////////////////////////////////////////////////////
//auxiliary functions
function isBiggerThan3(str){
    let x = 0 
    return str.length > 3 ? 1 : 0
}


function hasUppercase(str) {
   // return /[A-Z]/.test(str);
    return /[A]/.test(str);
}


function hasAsterisks(str) {
   // return /[A-Z]/.test(str);
    return /[*]/.test(str);
}


function hasStrudel(str) {
   // return /[A-Z]/.test(str);
    return /[@]/.test(str);
}


function hasNIS(str) {
   // return /[A-Z]/.test(str);
    return /[₪]/.test(str);
}
///////////////////////////////////////////////////////////////////////

// 1
function printTheSmollest(num1, num2) {
    if (num1 < num2) {
        return num1
    }else{
        return num2
    }
}

// 2
function checkBiggerThan3(str1, str2, str3, str4) {
    let temp = 0
    temp += isBiggerThan3(str1)
    temp += isBiggerThan3(str2)
    temp += isBiggerThan3(str3)
    temp += isBiggerThan3(str4)
    
    return temp
}

// 3
function checkInputString(){
    let userInput = document.getElementById('user-input').value
    if(hasUppercase(userInput) == true){
        userInput.replace("A", "a")
        console.log(userInput);
    }
}

// 4
function isPositiveOrEven(number){
    let positiveOrNegative = 0
    let oddOrEven = 0
    if(number > 0){
        if(number % 2 == 0){
            console.log("The number is positive and even");
        }else{
            console.log("The number is positive and odd");
        }
    }else{
        if(number % 2 == 0){
            console.log("The number is negative and even");
        }else{
            console.log("The number is negative and odd");
        }
    }
}

//  5
function checkFirstAndLast(str){
    let firstLetter = 0
    let lastLetter = 0
    firstLetter = str.charAt[0]
    lastLetter = str.charAt[str.length]
    if (firstLetter == lastLetter) {
        let newStr = str.replace(0, " ")
        newStr.replace(newStr.length, " ")
        console.log(newStr);
    }
}

// 6 
function stringCheck(str){
    if (hasAsterisks(str) == true) {
        let newStrWithNoAsterisks = str.replace(/\*/g, "")
        console.log(newStrWithNoAsterisks);
    }else if (hasStrudel(str) == true) {
        let newStrWithNoStrudels = str.replace(/@/g, "")
        console.log(newStrWithNoStrudels);
    }else if (hasNIS(str) == true) {
        // let newStrWithNoNIS = str.replace(/"₪"/g, "")
        console.log("new shekel");
    }
}

// 7
function moneyConvert() {
  const userMoneyInput = parseFloat(document.getElementById("money-amount").value)
  const rate = parseFloat(document.getElementById("currence").value)

  if (isNaN(userMoneyInput)) {
    alert("Please enter a valid value")
    return
  }

  const total = userMoneyInput * rate
  alert("The amount is " + total.toFixed(2) + " NIS")
}