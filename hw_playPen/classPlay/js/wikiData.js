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

  getSeriesInfo() {
    return (
      this._fatexSettings.seriesNum + " - " + this._fatexSettings.pageStart
    );
  }
}
let fatex = new FatexSeries({
  foo: "bar",
  seriesNum: 3,
  pageStart: 45,
});
let fatex2 = new FatexSeries({
  hello: "world",
  seriesNum: 5,
  pageStart: 95,
});
const allOfThem = [fatex, fatex2];

console.log(fatex2.getSeriesInfo());

// console.log(fatex.fatexSettings());

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
//focus on class and constructor before inheritance

//try project thats not my own before doing my own
