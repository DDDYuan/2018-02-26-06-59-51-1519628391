"use strict";

import BaseClass from "../practice_10/class.js";

class Class extends BaseClass{
    constructor(number){
        super(number);
        this.assignLeaderTeachers = [];
        this.joinTeachers = [];
    }

    registerAssignLeaderListener(teacher){
        this.assignLeaderTeachers.push(teacher);
    }

    registerJoinListener(teacher){
        this.joinTeachers.push(teacher);
    }

    assignLeader(student){
        if(this === student.klass){
            this.leader = student;
            this.assignLeaderTeachers.forEach(teacher => teacher.notifyLeader(student, this));
        } else{
            console.log("It is not one of us.");
        }
    }

    appendMember(student){
        student.klass = this;
        
        this.joinTeachers.forEach(teacher => teacher.notifyMember(student, this));
    }
}

export default Class;
