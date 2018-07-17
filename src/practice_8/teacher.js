"use district";

import Person from "../practice_8/person.js";

class Teacher extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }

    introduce(student){
        if(student){
            var teach = this.klass === student.klass ? "teach" : "don't teach";
            return super.introduce() + ` I am a Teacher. I ${teach} ${student.name}.`;
        }
        else{
            var className = this.klass ? this.klass.getDisplayName() : `No Class`;
            return super.introduce() + ` I am a Teacher. I teach ${className}.`;
        }
    }

    introduceWith(student){
         return this.introduce(student);
    }
}

export default Teacher;


