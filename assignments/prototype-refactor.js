/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/


// TASK 1

// - Build a Person Constructor that takes name and age.
// - Give persons the ability to greet by returning a string stating name and age.
// - Give persons the ability to eat edibles.
// - When eating an edible, it should be pushed into a "stomach" property which is an array.
// - Give persons the ability to poop.
// - When pooping, the stomach should empty.

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    greet() {
        return `Hello, i'm ${this.name}, and i'm ${this.age} year old.`;
    }
    
    eat(edible){
        this.stomach = [...this.stomach, edible]
        return this.stomach
    }

    poop() {
        this.stomach = [];
        return this.stomach;
    }

}
  
// const chioma = new Person('Chioma', 22);
// console.log(chioma.name);
// console.log(chioma.age);
// console.log(chioma.stomach);
// console.log(chioma.greet());
// console.log(chioma.eat('Rice'));
// console.log(chioma.poop());
  
  
  // TASK 2
  
  // - Build a Car constructor that takes model name and make.
  // - Give cars the ability to drive a distance.
  // - By driving a car, the distance driven should be added to an "odometer" property.
  // - Give cars the ability to crash.
  // - A crashed car can't be driven any more. Attempts return a string "I crashed at x miles!", x being the miles in the odometer.
  // - Give cars the ability to be repaired.
  // - A repaired car can be driven again.

class Car {

    constructor(name, make) {
        this.name = name;
        this.make = make;
        this.odometer = 0;
        this.hasCrashed = false;
    }

    drive(distance) {
        if(this.hasCrashed) {
            return `I crashed at ${this.odometer} miles!`;
        }
        
        this.odometer += distance;
        return `I have driven ${this.odometer} miles!`
    }

    crash() {
        this.hasCrashed = true;
    }

    repair() {
        this.hasCrashed = false;
    }

}
  
// const cara = new Car('Cara', 'Mercedez Benz');
// console.log(cara.name);
// console.log(cara.make);
// console.log(cara.drive(20));
// console.log(cara.drive(30));
// console.log(cara.crash());
// console.log(cara.drive(30));
// console.log(cara.repair());
// console.log(cara.drive(30));
  
  
// TASK 3

// - Build a Baby constructor that subclasses the Person built earlier.
// - Babies of course inherit the ability to greet, which can be strange.
// - Babies should have the ability to play, which persons don't.
// - By playing, a string is returned with some text of your choosing.

class Baby extends Person {

    play() {
        return `Yayyy! I'm having so much fun.`
    }

}
  
// const amaka = new Baby('Amaka', 2);
// console.log(amaka.name);
// console.log(amaka.age);
// console.log(amaka.stomach);
// console.log(amaka.greet());
// console.log(amaka.play());
// console.log(amaka.eat('Veggies'));
// console.log(amaka.poop());
  
  
  // TASK 4
  
  // Use your imagination and come up with constructors that allow to build objects
  // With amazing and original capabilities. Build 3 small ones, or a very
  // complicated one with lots of state. Surprise us!
  
class Cohort {

    constructor(obj) {
        this.name = obj.name;
        this.totalStudents = obj.totalStudents;
        this.noOfHired = obj.noOfHired;
    }
  
    testimonials() {
        let companies = this.hiringCompanies.join(', ');
        console.log(`A couple of our hiring partners are: ${companies}`)
    }
  
    isHired(student) {
        this.noOfHired++;
        this.hiringCompanies.push(student.jobGotten);
    }
  
    jobBot(student) {
        if (student.hired) {
            this.isHired(student);
            console.log(`${student.name} from ${this.name}, just got hired at ${student.jobGotten}, ${this.totalStudents - this.noOfHired} students remaining`);
    
            if(this.totalStudents === this.noOfHired) {
                console.log(`Yayy! everyone in ${this.name} got hired`);
            }
            
        } else {
            console.log(`Hey, just passing along!`)
        }
    }

}

Cohort.prototype.hiringCompanies = [];
  
// Instances
const webEU2 = new Cohort({
    name: 'WEBEU2',
    totalStudents: 100,
    noOfHired: 99,
});

const webEU3 = new Cohort({
    name: 'WEBEU3',
    totalStudents: 100,
    noOfHired: 27,
});
  
//Calls
// webEU3.jobBot({
//     name: 'Marcus Fields',
//     hired: true,
//     jobGotten: 'Company A'
// });

// webEU3.jobBot({
//     name: 'Marcus Fields',
//     hired: true,
//     jobGotten: 'Company B'
// });

// webEU2.jobBot({
//     name: 'Rebecca Allen',
//     hired: true,
//     jobGotten: 'FAANG'
// });

// webEU2.testimonials();
// webEU3.testimonials();
  
  
  /*
  
    STRETCH TASK
  
    Object oriented design is commonly used in video games. You will be implementing several constructor functions with their correct inheritance hierarchy.
    In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.
    At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
    Each constructor function has unique properties and methods that are defined in their block comments below:
  */
  
  /*
    === GameObject ===
    * createdAt
    * name
    * dimensions (These represent the character's size in the video game)
    * destroy() // prototype method that returns: `${this.name} was removed from the game.`
  */
class GameObject {

    constructor(obj) {
        this.createdAt = obj.createdAt;
        this.name = obj.name;
        this.dimensions = obj.dimensions;
    }

    destroy() {
        return `${this.name} was removed from the game.`;
    }

}
  
/*
=== CharacterStats ===
* healthPoints
* takeDamage() // prototype method -> returns the string '<object name> took damage.'
* should inherit destroy() from GameObject's prototype
*/
class CharacterStats extends GameObject {

    constructor(obj) {
        super(obj);
        this.healthPoints = obj.healthPoints;
    }

    takeDamage() {
        return `${this.name} took damage`;
    }

}
  
/*
=== Humanoid (Having an appearance or character resembling that of a human.) ===
* team
* weapons
* language
* greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
* should inherit destroy() from GameObject through CharacterStats
* should inherit takeDamage() from CharacterStats
*/
class Humanoid extends CharacterStats{
    
    constructor(obj) {
        super(obj);
        this.team = obj.team;
        this.weapons = obj.weapons;
        this.language = obj.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}
  
/*
* Inheritance chain: GameObject -> CharacterStats -> Humanoid
* Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
* Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:
  
const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
  
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});
  
const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});
  
// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage()); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
