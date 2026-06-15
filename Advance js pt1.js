// scope -> matlab aap apne created variable and functions 
// kaha tak use  kar sakte ho //

/*function abcd (){
    var a=13;  // agar apne koi bhi variable scope se banaya hai to use aap sirf function ke andar hi use kar sakte hai //

}

console.log(a);*/


// scope -> 1. functional scope 2.global scope 3.block scope//

//1. functional scope -> means ye sirf function ke anadar hi use ho sakti hai //
//2. global scope ->poore code mein kahi bhi use ho sakti hai //
//3. block code -> sirf {} sirf curly braces me hi use ho sakti hai //


//  functional scope example //
function abcd(){
    var a=12;

    console.log(a);
}

abcd();

// global scope example //

var a=13; // ye global scope hai kahi nhi use ho sakte hai //
console.log(a);

// block scope example //
if (true) {
    // ye ek block scope hai sirf aur function ke baad curly braces {} ho to wo function scope //
}


// Memory execution phase //

// execution content //

//js sab se phele jaise hi aapka function dekhta hai sabse phele js banata hai execution context  ye ek pprocess hai jo ki do different phases me chalta
// hai  1. memory phsase 2. exucution phase 

// Dynamic scoping  and lexical scoping //

// lexical scoping // hi hoti hai js me 

// lexical scoping -> ki aap kaha par physically available ho 
// ye puri tarah se depend karta hai ki aap kya access kar sakte ho //

function sfch(){
    let a=20; // a lexicaly(physically) sfch ke andar hi avaialble hai wo dcf me bhi access ho jayega  //

    function dcf(){
      console.log(a);

    }
}


sfch();