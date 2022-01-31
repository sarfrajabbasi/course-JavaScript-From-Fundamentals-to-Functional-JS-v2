(function(){
    describe ('scope Exercises',function(){
        // 'describe' is a function,it take two arguments
        //first is string that describe this block
        // second the callback function that has afew different tests.
        var ACTUAL;
        // this resets the value of  valueo of ACTUAL (to null) before each test is run
     beforeEach(function(){
        //  before each function is called before each it block, when you see 'it' ending it automatically called.
         ACTUAL = null;

     });

     it(' a fucntion  has acess to its own local scope Varible',function(){ 
         var fn = function(){
            //  this is callback function is expecting it return ,whether is passing or not(ACTUAL === 'INNER).to.be true
             var name = 'inner';
             ACTUAL = name;
            
         };
         fn();
         expect(ACTUAL === '???').to.be.true;//inner
         //  return some sort of object
        }); 

        it('inputs to a function are treated as local scope variables',function(){
            var fn = function(name){
                ACTUAL = name;
            };
            fn('inner');
            expect(ACTUAL === '???').to.be.true;//{to:{be:{true:{}}}}//expect being evaluated//inner
        });

        it(' bloc scope cn be created with let',function(){
            var fn  = function(){
                var where = 'outer';
                {
                    let where = 'inner'
                }
                ACTUAL = where;
            }
            fn();
            expect(ACTUAL === '???').to.be.true;//expect is library//outer
        })
        it('a function has access tothe variables contained within the same scope that function was created in',function(){
            var name = 'outer';
            var fn  =function(){
                ACTUAL = name;
            }
            fn();
            expect(ACTUAL === '???').to.be.true;//outer
        });

        it('a function \'s local scope variables are not availabe anywhere outside that function ',function(){
            var firstfn = function(){
                var localToFirstFn = 'inner';
            };
            firstfn();
            expect(function(){
                ACTUAL = localToFirstFn;
            }).to.throw();
            expect(ACTUAL ==='???').to.be.true;//null  
        });
        it('a function\'s local scope variables are not anywhere outside fo the function regardless of the contextit \'s called in',function(){
           var firstFn = function(){
               var localToFirstFn = 'first';
            // Although false ,it might seem reasonable to think that the secondFn (which mentions the localToFirstFn variable),should have access to the localToFirstFn variable, since it's being called here from within the scope where that variable is declared.
            secondFn()
           };
           var secondFn = function(){
               ACTUAL =localToFirstFn;
           };
           expect(function(){
               // of course,calling the secondFn should throw an error in this case, since secondFn does not have access to the localToFirstFn variable
               secondFn();
           }).to.throw();
           expect(function(){
               //in addition, calling the firstFn (which in turn calls the secondFn) should also throw,since it the calling context of secondFn has noinfluence over its scope access rules
               firstFn();
           }).to.throw();
               expect(ACTUAL==='???').to.be.true//null
           });
           it('if an inner and an outer variable share the same name, and the name is refrenced in the inner scope, the inner scope var masks the var from the outer scope with the same name.this renders the outer scope var inaccessable from anywhere within the inner function block',function(){
               var sameName = 'outer';
               var fn =function(){
                   var sameName = 'inner';
                   ACTUAL = sameName;
               };
               fn();
               expect(ACTUAL === '???').to.be.true;//inner
           });
           it('if an inner and an outer variable share the same name,and the name is referenced in the outer scope, the outer value binding will be used',function(){
               var sameName = 'outer';
               var fn = function(){
                   var sameName = 'inner';
               };
               fn();
               ACTUAL = sameName;
               expect(ACTUAL === "???").to.be.true;//outer
           });
           it('a new variable scope is created for every call to a function, as exampleified with a counter',function(){
               var fn = function(){ 
               // the '||' symbol here is being used to set a default value for innerCounter. if innerCounter already contains a truthy value,then the value in that variable will be unchanged. if it is falsey however (such as if it were completely uninitialized), then this  line will set it  to the default value of 10.
               var innerCounter = innerCounter || 10;
               innerCounter = innerCounter + 1;
               ACTUAL = innerCounter;
           };
           fn();
           expect(ACTUAL === '???').to.be.true;//11
           fn();
           expect(ACTUAL === '???').to.be.true;//11
           });
           
           it('a new variable scope is created for each call to a examplified with uninitialized string variables', function(){
               //this is a longer form of the same observation as above, using strings instead of numbers.
               var fn = function(){
                   var localVariables;
                   if(localVariables === undefined){
                       //the var willbe intitialized for the first time during this call to fn
                       ACTUAL = 'alpha';
                   } else if (localVariables === 'initialized'){
                       //the var has already beenintialized by a previous call to fn 
                       ACTUAL = 'omega';
                   }
                   // now that actual has been set,we will intialize localVariable to refer to a string
                   localVariables ='intitiaized';
               };
               fn();
               expect(ACTUAL === '???').to.be.true;//alpha
               fn();
               expect(ACTUAL === '???').to.be.true;//alpha
           });
           it('an inner function can access both its local scope varaibles and variables in its containing scope, provided the var have diff. names',function(){
               var outerName = 'outer';
               var fn = function(){
                   var innerName = 'inner';
                   ACTUAL = innerName + outerName ;
               };
               fn();
               expect(ACTUAL === '???').to.be.true//innerouter
           });
           it('b/w calls to an inner function, that inner function retains access to a variable in an outer scope.Modfying those var has a lasting effect b/w calls to the inner function',function(){
               var outerCounter = 10;//increament to 11 and 12(preserv)

               var fn = function(){
                   outerCounter = outerCounter + 1;
                   ACTUAL = outerCounter;

               };
               fn();
               expect(ACTUAL === '???').to.be.true;//11
               fn();
               expect(ACTUAL == '???').to.be.true;//12
           });


           it('the rule about retaining access to var from an outer scope still applies,even after the outer function call (that created the outer scope) has returned',function(){

               var outerFn = function(){
                // not call function yet but in bottom
                //NOTE: the contents of this function is the same as the entrie body of the previous test
                   var counterInOuterScope = 10;

                   var  innerIncrementingFn = function(){
                    counterInOuterScope =counterInOuterScope + 1;//1 +10//use var then  1 + undefined =NaN
                    ACTUAL = counterInOuterScope;
                   }

               innerIncrementingFn();
               expect(ACTUAL === '???').to.be.true;//11
               innerIncrementingFn();
               expect(ACTUAL === '???').to.be.true;//12

               
               //here, we retain a reference to the newly created inner functionfor later , by assigning it to the golbal scope (window)
               window.retainedInnerFn = innerIncrementingFn;
                };
            //before we run outerFn, there will be no innerFn exported to the global scope
            expect(window.retainedInnerFn).to.equal.undefined;
            //running this outer function should have the same effect as running the whole previous test,with the addition of  placing the innerFn somewhere that we can reach it after outerFn has returend
            outerFn();
            expect(window.retainedInnerFn).to.be.a('function');
            // even though the outerFn has returned once the only call to it was completed a couple of lines above, the inner function remains available in the global scope, and still has access to the var of that containing scope where it was first created.
            window.retainedInnerFn();//we are calling it becoz it's window object which is global in browser land
            expect(ACTUAL === '???').to.be.true;//13

           });
    })
})()

// that when you declare a variable somewhere,it get hoisted to the top of its local scope as undefined.