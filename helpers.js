function once(func) {
    let flag = false 
    return function () {
        let stack
        if (flag === false) {
            flag = true
            stack = func()
            console.log('Congratulation u used me once')
        } else {
            console.log(`u can't use me anymore`)
        }
    }
}


function injection() {
    return 'example here  we can  put a fat  function that do  some DOM  manipulation'
}
const x = once(injection)
x()
x()
x()

function memoize(func) {
    const cache = {}
    return function inner(input) {
        if (cache[input]) {
            return cache[input];
        } else {
            const value = func(input)
            cache[input] = value;
            return  value
        }
    }
}
function nthPrime(n) {
    // heavy  lifting logic (+500ms)
    var primes = [2];
    var x = 3;
    var count = 0;
    do{
        for(var y=2; y<x; y++){
            if(x%y===0){
                count++;
            }
        }
        if(count===0){
            primes.push(x);
            x++;
        }else{
            x++;
            count=0;
        }
    }
    while(primes.length<n);
    return primes[primes.length-1];
}
const memoizedNthPrime = memoize(nthPrime)
memoizedNthPrime(1000)
memoizedNthPrime(1000)