var a = 20;
let x = 10000000;
{
    let b = 15;
    var c = 99;
    const d = 88888;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(x);
    console.log("-------");

    b = 30;
    a = 100;
    c = 555;
    // d = 1111111; ERROR
    console.log(a);
    console.log(b);
    console.log(c);
    console.log("------------");

}
console.log(a);
console.log(x);
// console.log(b); ERROR
console.log(c);
//  console.log(d); 
console.log("---------");