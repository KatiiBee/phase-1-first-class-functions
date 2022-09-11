function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return function aNamedFunction() {
    }
}

function returnsAnAnonymousFunction(){
    return function () {
        
    }
}