//start with parent class to be extended by others
//class typeMoonSeries
class typeMooniverse {
  constructor() {
    this._fateX;
  }
}
class fatexSeries extends typeMooniverse {
  constructor() {
    super(); //taking on the methods for typemooniverse instead of rewriting
  }
}
// the object for the series
this._fateX[
  ({
    //are the parens necessary?
    title: "fate / Extra",
    setting: "Moon Cell",
    characters: "Rin Tohsaka", //how to write multiple char to be accessed
    servants: "Saber",
    others: "Touko Aouzaki",
    anime: "true",
    music: "Ali Project",
  },
  {
    title: "fate/ Extra CCC",
    setting: "Moon Cell",
    characters: "Monji Gatou",
    servants: "Rider",
    others: "Kirei Kotomine",
    anime: "false",
    music: "Kanon Wakashima",
  })
];
