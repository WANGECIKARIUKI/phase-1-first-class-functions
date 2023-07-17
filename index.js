function receivesAFunction (callBack) {
callBack ();
}

function returnsANamedFunction () {
    function namedFunction () {
        console.log("A named function");
    }
    return namedFunction;
}

function returnsAnAnonymousFunction () {
    return function() {
        console.log("An anonymous function");
    };
    return anonymousFunction;
}