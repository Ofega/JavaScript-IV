// CODE here for your Lambda Classes

(function() {
    //Classes
    class Person {
        constructor(obj) {
            this.name = obj.name;
            this.age = obj.age;
            this.location = obj.location;
        }

        speak() {
            console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
        }
    }

    class Student extends Person {
        constructor(obj) {
            super(obj);
            this.previousBackground = obj.previousBackground;
            this.className = obj.className;
            this.favSubjects = obj.favSubjects;
            this.grade = 50;
        }

        listsSubject() {
            this.favSubjects.forEach(subject => console.log(subject));
        }

        PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
        }

        sprintChallenge(subject) {
            console.log(`${this.name} has begun sprint challenge on ${subject}`);
        }

        graduate() {
            this.grade > 70 ? console.log('You can graduate!!!') : console.log('Awwn! Keep Trying, You can do this!!!')
        }
    }

    class Instructor extends Person {
        constructor(obj) {
            super(obj);
            this.specialty = obj.specialty;
            this.favLanguage = obj.favLanguage;
            this.catchPhrase = obj.catchPhrase;
        }

        demo(subject) {
            console.log(`Today we are learning about ${subject}`)
        }

        grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
        }

        randomizeGrade(student) {
            student.grade += Math.floor(Math.random() * Math.floor(10));
        }
    }

    class ProjectManager extends Instructor {
        constructor(obj) {
            super(obj);
            this.gradClassName = obj.gradClassName;
            this.favInstructor = obj.favInstructor;
        }

        standUp(channel) {
            console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
        }

        debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
        }
    }


    // Instances - Person
    const jessica = new Person({
        name: 'Jessica',
        location: 'South Africa',
        age: 37,
    });

    const amaka = new Person({
        name: 'Amaka',
        location: 'Ireland',
        age: 32,
    });

    // Instances - Student
    const jayne = new Student({
        name: 'Jayne',
        location: 'Ireland',
        age: 37,
        className: 'webEU3',
        favSubjects: ['CSS', 'LESS', 'JAVASCRIPT'],
    });

    const carnun = new Student({
        name: 'Carnun',
        location: 'Ireland',
        age: 32,
        className: 'webEU3',
        favSubjects: ['CSS', 'LESS', 'JAVASCRIPT'],
    });

    // Instances - Instructor
    const fred = new Instructor({
        name: 'Fred',
        location: 'Bedrock',
        age: 37,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
    });

    const rory = new Instructor({
        name: 'Rory',
        location: 'UK',
        age: 32,
        favLanguage: 'JavaScript',
        specialty: 'Back-end',
        catchPhrase: `Good Job!`
    });

    const emily = new Instructor({
        name: 'Emily',
        location: 'Brazil',
        age: 32,
        favLanguage: 'Python',
        specialty: 'IOT',
        catchPhrase: `Keep it coming guys!`
    });

    // Instances - PMs
    const frieda = new ProjectManager({
        name: 'Frieda',
        location: 'UK',
        age: 32,
        gradClassName: 'web12',
        favInstructor: 'Gabe'
    });

    const phebian = new ProjectManager({
        name: 'Phebian',
        location: 'Nigeria',
        age: 23,
        gradClassName: 'webEU1',
        favInstructor: 'Gabe'
    });


    // Calls - Person
    // jessica.speak();
    // amaka.speak();
    // console.log(amaka.age);

    // Calls - Student
    // carnun.listsSubject();
    // carnun.sprintChallenge('Advanced CSS');
    // carnun.PRAssignment('Advanced CSS');
    // jayne.speak();
    // jayne.graduate();
    // console.log(jayne.name);
    // console.log(jayne.favSubjects);


    // Calls - Instructor
    // fred.speak();
    // rory.grade(jayne, 'JavaScript II');
    // emily.demo('Advanced CSS');
    // console.log(fred.name);
    // console.log(rory.catchPhrase);


    //Calls - PMs 
    // frieda.debugsCode(carnun, 'JavaScript II');
    // frieda.grade(carnun, 'JavaScript II');
    // phebian.standUp('webEU3');
    // console.log(phebian.gradClassName);
    // console.log(frieda.favInstructor);

    //Calls - Test Out Grading Abilities
    // console.log(jayne.grade);
    // rory.randomizeGrade(jayne);
    // console.log(jayne.grade);
    // rory.randomizeGrade(jayne);
    // console.log(jayne.grade);
    // rory.randomizeGrade(jayne);
    // console.log(jayne.grade);
    // frieda.randomizeGrade(jayne);
    // console.log(jayne.grade);
    // frieda.randomizeGrade(jayne);
    // console.log(jayne.grade);
    // frieda.randomizeGrade(jayne);
    // console.log(jayne.grade);
    // jayne.graduate();
})();