"use strict";

import BaseClass from "../practice_7/class.js";

class Class extends BaseClass{
    assignLeader(student){
        if(this === student.klass){
            this.leader = student;
        }
    }
}

export default Class;
