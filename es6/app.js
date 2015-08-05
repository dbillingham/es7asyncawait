'use strict';

require("babel/polyfill");

async function test(id){
    try {
        let val = await Promise.resolve(id);
        console.log("val: " + val);
    } catch (error) {
        console.log("error: " + error);
    }
};

test(1);