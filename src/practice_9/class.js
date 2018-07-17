"use strict";

import BaseClass from "../practice_8/class.js";

class Class extends BaseClass{
    assignLeader(student){
        if(this === student.klass){
            this.leader = student;
        } else{
            console.log("It is not one of us.");
        }
    }

    appendMember(student){
        student.klass = this;
    }
}

export default Class;
