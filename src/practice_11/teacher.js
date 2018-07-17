"use strict";

import BaseTeacher from "../practice_10/teacher.js";

class Teacher extends BaseTeacher{
    constructor(id, name, age, klasses){
        super(id, name, age, klasses);
        if(klasses && klasses.length > 0){
            klasses.forEach(klass => {
                klass.registerAssignLeaderListener(this);
                klass.registerJoinListener(this);
            });
        }
    }
    notifyLeader(student, klass){
        console.log(`I am ${this.name}. I know ${student.name} become Leader of ${klass.getDisplayName()}.`);
    }

    notifyMember(student, klass){
        console.log(`I am ${this.name}. I know ${student.name} has joined ${klass.getDisplayName()}.`);
    }
}

export default Teacher;
