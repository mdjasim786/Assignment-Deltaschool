
 //answer 1
/*
const isEqual =(ob1, ob2)=>{
    const ob1Keys = Object.keys(ob1);
    const ob2Keys = Object.keys(ob2);

    if(ob1Keys.length !== ob1Keys.length){
        return false;
    }

    for(let obKey of ob1Keys){
        if(ob1[obKey] !==ob2[obKey]){
            return false;
        }
    }
    return true;
};
const ob1 ={
    name:"Jasim", class:12,
    //credit:10
};
const ob2 ={name:"Jasim", class:12 };

console.log(isEqual(ob1, ob2));       */




 /*
//Answer 2
  class Rectangle {
    constructor(length, width, name) {
        this._length = length;
        this._width = width;
        this._name = name;
    }
    static Geometry(){
        return "It is a Rectangle";
    }

   get Area() {
        return this._length * this._width;
    }
    get Name(){
        return this._name;
    }
}

class Square extends Rectangle {
    constructor(size) {
        super(size, size, "square");
    }
    
}
const Rect = new Rectangle();
const Sq = new Square(5);
console.log(Sq);
console.log(Sq.Area);
console.log(Sq.Name);   
console.log(Rectangle.Geometry());    */
 




/*
//Answer 3
//The destructuring assignment syntax is a JavaScript expression that makes it 
//possible to unpack values from arrays, or properties from objects,
// into distinct variables.

var array = [ 1, 2, 3 ];
var [ a, , b ] = array;

console.log(a, b);
[ b, a ] = [ a, b ];
console.log(a, b);


var [a,...b] =array;
console.log(a, b);   */


/*
//Answer 4
//Template Literals are used for String Interpolation
//Expression interpolation for single-line and multi-line strings.
//Template literals can contain placeholders. These are indicated by dollar sign and curly braces.
//In this there is use of back tick.
let firstname = 'Jasim';
let lastname = 'Raaz';
let message = `Hello ${firstname} ${lastname} !
How are You...
Thankyou.`
console.log(message);   */

/*
//Answer 5
var a1 =["Aditya", "Jasim","Rahul"];
var a2 =["Rohan","Rohit"];
var combine=a2[Symbol.iterator]();
a2.map(v=>{
    a1=[...a1,combine.next().value];
})
console.log(a1);     */




/*
//Answer 6
let email = 'md.jasim@deltaschool.co.in';
let regex =/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,6})(\.[a-z]{2,6})?$/;

if(regex.test(email)) {console.log('valid email');}
else {console.log('Invalid email');}   */