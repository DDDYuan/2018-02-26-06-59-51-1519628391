"use strict";

import BasePerson from "../practice_7/person.js";

class Person extends BasePerson{
    constructor(id, name, age){
        super(name, age);
        this.id = id;
    }

    equals(other){
        return this.id === other.id;
    }
}

export default Person;
