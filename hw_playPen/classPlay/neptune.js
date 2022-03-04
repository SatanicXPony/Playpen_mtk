//create a class for the cpuniverse, the constructs are the characteristics for the cast
class Cipu {
  constructor(planet, name, race, charImg) {
    //add charUrl
    this.planet = planet;
    this.name = name;
    this.race = race;
    this.charImg = charImg;
  }
  //class specific function or method utilizes class data
  personify() {
    return `${this.name} is an animated impression of the PC-Engine TurboGrafx-16`;
  }
}
//the cast is a new instance for cpu
let cast = new Cipu("Planeptune", "Peashy", "Goddess");
console.log(cast.personify());
//create main onject for universe then extended classes for the charcters

//goal: need to display characters inside each planet,
//note: maybe just set planets as buttons instead of modals, just describe planets in headings
