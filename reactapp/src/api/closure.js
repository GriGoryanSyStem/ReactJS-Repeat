function Counter() {
    var total = 0;
    return function () {
        total++;
        return total
    }
}
var appleFunc = Counter();
console.log(appleFunc()); // 1
console.log(appleFunc()); // 2
console.log(appleFunc()); // 3

//vor amen angam nor function chsargenq u kino darna senc karox enq
//nuyn function ogtagortsel urish tex urish bani hamar

var samsungFunc = Counter();
console.log(samsungFunc()); // 1
console.log(samsungFunc()); // 2
console.log(samsungFunc()); // 3

//----------------------------------------------------------------------------------

let a = 'global';
function outer() {
    let b = 'outer';
    function inner() {
        let c = 'inner';
        console.log(c);   // выдаст 'inner'
        console.log(b);   // выдаст 'outer'
        console.log(a);   // выдаст 'global'
    }
    console.log(a);     // выдаст 'global'
    console.log(b);     // выдаст 'outer'
    inner();
}
outer();
console.log(a);
//----------------------------------------------------------------------------------

function person() {
    let name = 'Peter';

    return function displayName() {
        console.log(name);
    };
}
let peter = person();
peter(); // выведет 'Peter'

//----------------------------------------------------------------------------------