const arr = [0, 3, 4, 5, 1, 2, 6, 7, 10, 11, 1, 8, 2, 9, 14, 15, 16, 10, 11] // Сортируем массив
let count = 0;

function bubleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count += 1
        }
    }
    return array
}

console.log("length", arr.length)
console.log(bubleSort(arr))
console.log("count= ", count)