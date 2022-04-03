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

class _fatexCharacters {
  constructor() {
    this.fatexCharacters[{}];
  }
  //getters for character names tba later
  //use static method for series titles instead of creating new instances
  static series1() {
    console.log("Fate/ Extra"); //change cl's to return
  }
  static series2() {
    console.log("Fate/ CCC"); //these can be non static also, w/ diff calls
  }
  static series3() {
    console.log("Fate/ Last Encore");
  }
}
//call for series1: fateCharacters.series1();?
//not sure if static will replace the getter on line 10 &| the need for the name key altogether?
//static for series will be added in f.e as literals for tab names
//the settings object now feels rather pointless, could I create a static for it instead?
