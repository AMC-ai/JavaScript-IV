// CODE here for your Lambda Classes
// new fancy class way
class PersonClass {
    constructor(attributes) {
        // attributes go here
        this.name = attributes.name;
        this.location = attributes.location;
        this.age = attributes.age;
    }
    // methods go here
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}// this closes the parent

class instructorClass extends PersonClass {
    constructor(instructorClassAttributes) {
        super(instructorClassAttributes); // super replaces parent.call
        this.specialty = instructorClassAttributes.specialty;
        this.favLanguage = instructorClassAttributes.favLanguage;
        this.catchPhrase = instructorClassAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}// this closes child


class studentClass extends PersonClass {
    constructor(studentClassAttributes) {
        super(studentClassAttributes);
        this.previousBackgorund = studentClassAttributes.previousBackground;
        this.className = studentClassAttributes.className;
        this.favSubjects = studentClassAttributes.favSubjects;
    }
    listsSubjects() {
        for (let subject of this.favSubjects) {
            console.log(subject);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submited a PR for ${subject}`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class teamLeadClass extends instructorClass {
    constructor(teamLeadClassAttributes) {
        super(teamLeadClassAttributes);
        this.newPreviousBackgorund = teamLeadClassAttributes.previousBackground;
        this.newGradClassName = teamLeadClassAttributes.gradClassName;
        this.newFavIntructor = teamLeadClassAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
    }
    debugsCode(student, subject) {
        return `${this.name} debusgs ${student.name}'s code on ${subject}.`;
    }
}




const Person = new PersonClass({
    name: 'Fred',
    age: '37',
    location: 'Bedrock',
});

console.log(Person.speak());

const Instructor = new instructorClass({
    name: 'Jessica',
    age: '47',
    location: 'USA',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'What does not kill me, will only make me stronger.',
});

console.log(Instructor.demo('classes'));

const Student = new studentClass({
    name: 'Jessica',
    age: '47',
    location: 'USA',
    previousBackground: 'BA in English',
    className: 'CS132',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
});
console.log(Instructor.grade(Student, 'classes'));
Student.listsSubjects();
console.log(Student.PRAssignment('classes'));
console.log(Student.sprintChallenge('classes'));

const Teamlead = new teamLeadClass({
    name: 'Jessica',
    age: '47',
    location: 'USA',
    specialty: 'React',
    favLanguage: 'JavaScript',
    catchPhrase: 'What does not kill me, will only make me stronger.',
    gradClassName: 'CS1',
    favInstructor: 'Seam',
});
console.log(Teamlead.standUp('web24_bernard'));
console.log(Teamlead.debugsCode(Student, 'classes'))