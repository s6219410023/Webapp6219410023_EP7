function funcNa(){
console.log('Na na na')
}

function funcNi(x , y){
let a = x + y
console.log("a มีค่า " +a)
}

function funcWow(){
    return 999 + 1;
}
function funcWee(x,y,z){
let sum = x + y + z
    return 555 + sum;
}

funcNa()
funcNi(10,20)
console.log(funcWow( ) )

let total = funcWee(10, 20, 30)
alert (total)
 

function funcA( x, y = 20){
    console.log(x + y)
} 
funcA(10, 100)
funcA(50)