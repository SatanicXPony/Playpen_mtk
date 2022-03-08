//1. start with parent class to be extended by others
class typeMooniverse {
  constructor() {
    this._fatexProfiles;
  }
  //2. getters and setters
  get fatexMasters() {
    return this._fatexProfiles((profile) => {
      return profile.masters;
    });
  }
}

class fatexSeries extends typeMooniverse {
  constructor() {
    super(); //taking on the methods for typemooniverse instead of rewriting
  }
}
// 3. the object for the series to be accessed
this._fatexProfiles = [
  {
    //are the parens necessary?
    title: "fate / Extra",
    setting: "Moon Cell",
    masters: "Rin Tohsaka", //how to write multiple char to be accessed
    servants: "Saber", //the servants have full names and servant titles idk how to write that out
    others: "Touko Aouzaki",
    anime: "true",
    music: "Ranse Eroica",
  },
  {
    title: "fate/ Extra CCC",
    setting: "Moon Cell", //how to write the specific variations of worlds on moon cell?
    masters: "Monji Gatou",
    servants: "Rider",
    others: "Kirei Kotomine",
    anime: "false",
    music: "Sakura Meikyuu",
  },
  {
    title: "fate/ Last Encore",
    setting: "Moon Cell",
    masters: "Misao Amari",
    servants: "Archer",
    others: "Fuma Kotaro",
    anime: "true",
    music: "Bright Burning Shout",
  },
];
