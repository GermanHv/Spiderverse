const Superhero =  require("./../app/Superhero")

describe("Unit Test for Superhero", () => {
    test('Case 1: Get a superhero', () => {

        //Usamos código para realizar el funcionamiento que queremos.
      const iroman = new Superhero("Spider", "Tony Stark", "Robert Downey Jr.")


        //Validando el código
        expect(iroman.name).toBe("Iron Man");
        expect(iroman.actor).toBe("Robert Downey Jr.");
        expect(iroman.heroName).toBe("Tony Stark");

    });
  })

  test ('2) Use the method getInfo()', () => {
    const tomHolland = new Superhero("Spiderman Marvel", "Tom Holland", "Peter Parker","Hola soy un mensaje")
    expect (tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
  })