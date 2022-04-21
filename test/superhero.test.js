
const Superhero =  require("./../app/Superhero")

describe("Unit Test for Superhero", () => {
    test('Case 1: Get a superhero', () => {

        //Usamos código para realizar el funcionamiento que queremos.
      const iroman = new Superhero("Iron Man", "Tony Stark", "Robert Downey Jr.")


        //Validando el código
        expect(iroman.name).toBe("Iron Man");
        expect(iroman.actor).toBe("Robert Downey Jr.");
        expect(iroman.heroName).toBe("Tony Stark");

    });
  })