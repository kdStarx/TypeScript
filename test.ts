var t : number = 1;
var myArray : Array<number> = [1,2,3];
var newArray: number[] = [2,3,4];
enum names {Name1, Name2, Name3};
var myName : names = names.Name2;
interface ICustomConsole {
  log(arg : string) : void;
}
declare var customConsole : ICustomConsole;

customConsole.log("Hello there");

var myArray : any = {a:1,b:2,c:3};
for(var key in myArray){
  console.log(key +" = "+myArray[key]);
}

function (name : string) : string {
  console.log("my function");
};

var greet = (name : string) : string => {
  console.log("arrow functions..");
};

class FullName {
  fullName : string;
  constructor(firstName: string, lastName: string){
    this.fullName = firstName + " " + lastName;
  }
  greet(name? : string){
   //antar bantar
  }
}

var msg1 = new FullName("kavis","pandey");
alert(msg1.greet("kavis"));


namespace Geometry {
  interface VectorInterface {
    //
  }
  export interface Vector2dInterface {

  }
  export interface Vector3dInterface {
    //
  }
  export class Vector2D implements VectorInterface, Vector2dInterface {
    //
  }
};

var 2Dvar : Geometry.Vector2dInterface = new Geometry.Vector2D();
