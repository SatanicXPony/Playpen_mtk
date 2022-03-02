//create a class for the cpuniverse, the constructs are the characteristics for the cast
class Cipu {
  constructor(planet, name, race) {
    this.planet = planet;
    this.name = name;
    this.race = race;
  }
  //class specific function or method utilizes class data
  personify() {
    return `${this.name} is an animated impression of the PC-Engine TurboGrafx-16`;
  }
}
//the cast is a new instance for cpu i.e the cast are variables that make up the cpuniverse?
let cast = new Cipu("Planeptune", "Peashy", "Goddess");
console.log(cast.personify());
