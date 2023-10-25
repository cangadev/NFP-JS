/*(function(){
     console.log("Ola mundo!")
 }())*/

//with params
(function(message){
    console.log(message);
}("Fala Brasill!"))

let example = (function() {
    return 42;
    }());
console.log(example);



/*(function namedIIFE() {
    throw error; // We can now see the error thrown in 'namedIIFE()'
    }());*/