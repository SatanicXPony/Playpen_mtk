//1. start with parent class to be extended by others
// class Typemooniverse {
//   constructor(fatexSettings) {
//     this.fatexSettings = fatexSettings;
//   } //for each instance return setting and series
//   //2. Methods and properties
// }

class FatexSeries {
  constructor(fatexSettings) {
    this._fatexSettings = fatexSettings;
  }
}
let fatex = new FatexSeries({
  foo: "bar",
});
let fatex2 = new FatexSeries({
  hello: "world",
});
const allOfThem = [fatex, fatex2];

console.log(fatex.fatexSettings());

class fateCharacters {
  constructor(name, term) {
    this.name = name;
    this.term = term;
  }
  sayHello() {
    console.log(
      `This character's name is ${this.name} their term is ${this.term}`
    );
    // characterIsServant() {
    //   console.log(`${this.term.value}`);
    // };
  }
}
