//https://www.youtube.com/watch?v=MLTRHc5dk6s
const assert = require('chai').assert;
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;
const abc = require('../app');
const app = new abc();
sayHelloResult = app.sayHello();

// describe('App',function(){
    describe('sayHello',function(){
        it('sayHello should return hello',function(){
            assert.equal(sayHelloResult,'hello');
        });
        it('sayHello should return string', function(){
            let result = app.sayHello();
            assert.typeOf(result,'string');
        });
    });
    describe('addNumbers',function(){
        it('Add numbers should return number',function(){
            let result = app.addNumbers(5,10);
            assert.equal(typeof(result),'number');
        });
        it('Add numbers should be above 5',function(){
            let result = app.addNumbers(5,1);
            assert.isAbove(result,5);
        });
    });
// });