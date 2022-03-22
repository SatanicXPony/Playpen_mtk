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
    this._fatexProfiles = [
      {
        title: "fate / Extra",
        setting: "Moon Cell",
        masters: "Rin Tohsaka", //maybe seperate masters and spirits into objects within?
        spirits: "Saber", //change servants to heroic spirits, obj for their true names
        others: "Touko Aouzaki", //array
        anime: "true",
        music: "Ranse Eroica",
      },
      {
        title: "fate/ Extra CCC",
        setting: "Moon Cell", //how to write the specific variations of worlds on moon cell?
        masters: "Monji Gatou",
        spirits: "Rider",
        others: "Kirei Kotomine",
        anime: "false",
        music: "Sakura Meikyuu",
      },
      {
        title: "fate/ Last Encore",
        setting: "Moon Cell",
        masters: "Misao Amari",
        spirits: "Archer",
        others: "Fuma Kotaro",
        anime: "true",
        music: "Bright Burning Shout",
      },
    ];
  }
}
