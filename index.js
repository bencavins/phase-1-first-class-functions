function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    const name = x => x+1;
    return name;
}

function returnsAnAnonymousFunction() {
    return x => x+1;
}