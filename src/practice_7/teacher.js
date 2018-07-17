"use district";

import Person from "../practice_7/person.js";

class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        var className = this.klass ? this.klass.getDisplayName() : `No Class`;
        return super.introduce() + ` I am a Teacher. I teach ${className}.`;
    }

    introduceWith(student){
        var teach = this.klass === student.klass ? "teach" : "don't teach";
        return super.introduce() + ` I am a Teacher. I ${teach} ${student.name}.`;
    }
}

export default Teacher;

