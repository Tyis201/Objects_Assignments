'use strict'

console.log ('hello world');

const desk = {
    entertainment: "xbox",
    material: "wood",
    entertainment2: "TV",
    purpose: function(){
        return "The desk in my room has a " + this. entertainment + " thats connected to my " + this.entertainment2 + " the desk is also made out of a " + this.material + " slab that me and my dad cut in the woods"
    }
}
console.log (desk.purpose());
document.write("<h2>", desk.purpose(), "</h2>")

function Cereal (brand, flavor, toppings){
    this.brand = brand;
    this.flavor = flavor;
    this.toppings = toppings;
}

Cereal.prototype.container = "bowl"

const bestcereal = new Cereal ('Cinnamon Toast Crunch', 'Cinnamon', 'sugar')

const natecereal = new Cereal ('Captn Crunch', 'With berrys', 'no toppings')

console.log(bestcereal)
console.log(natecereal, Cereal.prototype);