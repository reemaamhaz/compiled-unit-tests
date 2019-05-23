const assert = require('chai').assert;
const app = require('../app');


processAllEmployeesResult = app.processAllEmployees();
splitFullNameResult = app.splitFullName();
printOutFirstNamesResult = app.printOutFirstNames();

describe('app', function(){
    describe('processAllEmployees()', function(){
        it('should process all the employees', function(){ 
            assert.isArray(processAllEmployeesResult, 'Creed')
        });
    });

    describe('splitFullName()', function(){
        it('should split the names', function(){
            assert.isArray(splitFullNameResult, 'Kelly')
        });
    });

    describe('printOutFirstNames()', function(){
        it('should print out the first names', function(){
            assert.isString(printOutFirstNamesResult, 'Pam')
        });
    });
});
