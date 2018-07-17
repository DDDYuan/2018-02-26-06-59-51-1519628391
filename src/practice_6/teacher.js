"use strict";

import Person from "../practice_6/person.js";

class Teacher extends Person{
    constructor(name, age, klass){
        super(name, age);
        this.klass = klass;
    }

    introduce(){
        var className = this.klass? `Class ${this.klass}`: `No Class`;
        return super.introduce() + ` I am a Teacher. I teach ${className}.`;
    }
}

export default Teacher;
