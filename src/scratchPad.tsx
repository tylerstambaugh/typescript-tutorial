//listing of types and basic usages

// let name: string;
// let age: number | string; //union allows for eaither data type
// let isStudent:boolean;
// let hobbies:string[];
// let role:[number, string]
// let widget: any;

// let samusAran: unknown; //preferred instead of 'any'

// let printName:(name:string) => void; //function that takes string and returns void
// let printName3:(name:string) => never; //function that takes string and returns undefined 
// function printName2(name: string) {
// console.log(name);
//}

// printName("Bobe");

// role = [2, "admin"];

// type Person = {
//   name: string;
//   age?: number;
// }

// let person: Person = {
//   name: "Bobe",
//   age: 39
// };

// let lotsOfPeople: Person[];

interface Person {
    name: string,
    age?: number
  }
  
  interface Guy extends Person{
    profession: string;
  }
  
  let Bobe: Guy = {
    name: "Bobe",
    age: 39,
    profession: "Jack of trades"
  }
  
  type X =  {
    a: string,
    b: number
  }
  
  type Y = X & {
    c: string,
    d: number
  }
  
  let z: Y = {
    a: "asdf",
    b: 2,
    c: "qwer",
    d: 4
  }

  export {}