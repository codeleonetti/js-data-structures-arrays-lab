// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

let destructivelyAppendDriver = function(name) {
    drivers.push(name)
};

let destructivelyPrependDriver = function(name) {
    drivers.unshift(name)
};

let destructivelyRemoveLastDriver = function(name) {
    drivers.pop(name)
};

let destructivelyRemoveFirstDriver = function(name) {
    drivers.shift(name)
};

let appendDriver = function(name) {
    return [...drivers, name]
};

let prependDriver = function(name) {
    return [name, ...drivers]
}

let removeLastDriver = function(name) {
    return drivers.slice(0, drivers.length -1)
}

let removeFirstDriver = function(name) {
    return drivers.slice(1, drivers.length)
}
//const appendDriver = function(name) {
//     drivers.push(name)
//};