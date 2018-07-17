"use strict";

import BaseClass from "../practice_9/class.js";

class Class extends BaseClass{
    isIn(student){
        return this === student.klass;
    }
}

export default Class;
