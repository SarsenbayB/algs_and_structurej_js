const factorial = (n) => {
    if (n == 1) {
        return 1
    }
    return n * factorial(n - 1)
}

// console.log(factorial(8))

//Финобачи
const fitbonachi = (n) => {
    if (n === 1 || n === 2) {
        return 1
    }
    return fitbonachi(n - 1) + fitbonachi(n - 2)
}

console.log(fitbonachi(8))