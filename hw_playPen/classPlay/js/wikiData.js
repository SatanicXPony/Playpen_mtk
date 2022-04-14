//1. start with parent class to be extended by others
class typeMooniverse {
  _fatexSettings;
  //_fatexCharacters
  //_fatexServants
  //_others
  constructor() {} //for each instance return setting and series
  //2. getters and setters
  fatexSettings() {
    return this._fatexSettings[0].name;
  }
}

class fatexSeries extends typeMooniverse {
  constructor() {
    super(); //taking on the methods for typemooniverse instead of rewriting
    this._fatexSettings = [
      {
        //series(endpoints)
        id: "1",
        name: "fate/Stay night",
        locations: [
          {
            location: "Fuyuki City",
            enviroment: "Tsukihime",
          },
        ],
      },
      {
        id: "2",
        name: "fate/Extra ",
        locations: [
          {
            location: "Far Side",
            enviroment: "Moon Cell",
          },
        ],
      },
      {
        id: "3",
        name: "fate/ Last Encore",
        locations: [
          {
            location: "a thousand years into the future 3020 A.D",
            enviroment: "Moon Cell",
          },
        ],
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
//JSON needed to establish data hierarchy
//pm for raw
