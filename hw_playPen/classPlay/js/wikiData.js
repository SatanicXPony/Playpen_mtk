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

class fatexCharacters {
  constructor(status, appearsIn) {
    this.status = status; //there are three: master, servant, other
    this.appearsIn = appearsIn; //three: extra, ccc, last encore
  }
  //getters for characters` status and appearsIn
  getStatus() {
    console.log(`This character is a ${this.status}`);
  }
  getSeries() {
    console.log(`This character appears in ${this.appearsIn}`);
  }
}
//note: declaring properties and methods using classes...
//...want to display characters by their status and the series they appear in
//originally thought to use static, turned out too much of a challenge
//next: create data source for characters similar to settings object(?)
