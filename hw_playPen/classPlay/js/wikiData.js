//1. start with parent class to be extended by others
class typeMooniverse {
  _fatexSettings;
  //_fatexCharacters
  //_fatexServants
  //_others
  constructor() {}

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
        name: "fate / Extra",
        locations: [
          {
            location: "Tsukumihara Academy",
            enviroment: "Moon Cell",
          },
        ],
      },
      {
        id: "2",
        name: "fate/ CCC",
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
// need to access seperate classes of data for the settings, and all characters
//objects for masters, servants and others based on series
//note each character has different stats e.g

class _fatexCharacters {
  constructor() {
    this._fatexCharacters[{}];
  }
}
