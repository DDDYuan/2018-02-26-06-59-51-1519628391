"use strict";

import Person from "../practice_8/person.js";

class Student extends Person{
    constructor(id, name, age, klass){
        super(id, name, age);
        this.klass = klass;
    }

    introduce(){
        var leader = this.klass.leader == this ? "Leader of": "at";
        return super.introduce() + ` I am a Student. I am ${leader} ${this.klass.getDisplayName()}.`;
    }
}

export default Student;
