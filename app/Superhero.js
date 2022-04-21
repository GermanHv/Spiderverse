class Superhero {
    constructor(name, heroName, actor, message){
        this.name = name
        this.heroName = heroName
        this.actor = actor
        this.message = message
    }

    getInfo(){

       return `Mensaje: ${this.message}`

    }
    
}

module.exports = Superhero

