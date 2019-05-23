const assert = require('chai').assert;
const expect = require('chai').expect;
const app = require('../app');

processAllEmployeesResult = app.processAllEmployees();
splitFullNameResult = app.splitFullName();
printOutFirstNamesResult = app.printOutFirstNames();

describe('app', function(){
    describe('processAllEmployees()', function(){
        it('should process the employees and populate namesLeft', function(){ 
            expect(processAllEmployeesResult).to.include('Kelly Kapoor');
        });
    });

    describe('splitFullName()', function(){
        it('should split the names', function(){
            expect(splitFullNameResult).to.include('Creed');
        });

        it('return first names only', function(){
            expect(splitFullNameResult).to.not.include('Bratton');
        });
    });

    describe('printOutFirstNames()', function(){
        it('should print out the first names', function(){
            assert.equal(printOutFirstNamesResult, 'Clark')
        });
    });
});
