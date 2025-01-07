// Imediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
((name)=>{
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`)
})('Vedant')