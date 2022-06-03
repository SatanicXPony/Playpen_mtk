//1. start with parent class to be extended by others
class typeMooniverse {
  _fatexSettings;
  //_fatexCharacters
  //_fatexServants
  //_others
  constructor() {} //for each instance return setting and series
  //2. Methods and properties
  fatexSettings() {
    return this._fatexSettings[0].name;
  }
}

class fatexSeries extends typeMooniverse {
  constructor() {
    super(); //taking on the methods for typemooniverse instead of rewriting
    this._fatexSettings = [
      {
        /** everything in here should
         * call on the series info from fateSer?
         */
      },
    ];
  }
}
let fatex = new fatexSeries();

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
