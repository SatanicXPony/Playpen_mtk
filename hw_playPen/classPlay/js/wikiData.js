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
        title: "fate/ Extra", //can prob keep this bc its diffrent from series?
        setting: "Moon Cell",
        spirits: "Saber", //change servants to heroic spirits, obj for their true names
        others: "Touko Aouzaki", //array
        anime: "true",
        music: "Ranse Eroica",
        tabs: [
          //characters display based on series
          {
            series: "fate/ Extra",
            characters: [
              {
                name: "Rin Tohsaka",
                species: [
                  {
                    race: "human",
                    talent: "hacker",
                    designation: [{}],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        title: "fate/ Extra CCC",
        setting: "Moon Cell", //how to write the specific variations of worlds on moon cell?
        spirits: "Rider",
        others: "Kirei Kotomine",
        anime: "false",
        music: "Sakura Meikyuu",
        tabs: [
          {
            series: "fate/ Extra CCC",
            characters: [{}],
          },
        ],
      },
      {
        title: "fate/ Last Encore",
        setting: "Moon Cell",
        spirits: "Archer",
        others: "Fuma Kotaro",
        anime: "true",
        music: "Bright Burning Shout",
        tabs: [
          {
            series: "fate/ Last Encore",
            characters: [{}],
          },
        ],
      },
    ];
  }
}
