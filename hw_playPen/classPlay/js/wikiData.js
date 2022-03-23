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
