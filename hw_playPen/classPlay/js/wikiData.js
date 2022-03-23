//1. start with parent class to be extended by others
class typeMooniverse {
  constructor() {
    this._fatexSettings;
    //this._fatexMasters
    //this._fatexServants
    //this._others
  }
  //2. getters and setters
  get fatexMasters() {
    return this._fatexSettings((setting) => {
      return setting.name; //needs to be rewritten or more getters added
    });
  }
}

class fatexSeries extends typeMooniverse {
  constructor() {
    super(); //taking on the methods for typemooniverse instead of rewriting
    this._settings = [
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
        id: "2",
        name: "fate/ CCC",
        locations: [
          {
            location: "Far Side",
            enviroment: "Moon Cell",
          },
        ],
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

//purpose: set up for tabs or the seperate sections for the characters to display based on series
//next? set up for characters seperating them from master, servant and others
//note: the 'homepage' display will show all characters based on tab, on click will
//send to character's profile 'page' not sure how to seperate the two
